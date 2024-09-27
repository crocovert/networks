"""
Model exported as python.
Name : Intensite_nodale
Group : Cerema
With QGIS : 33603
"""

from PyQt5.QtCore import QCoreApplication, QVariant, QDateTime, QTime, QDate
from qgis.core import *
from qgis.utils import *
from qgis.core import QgsProcessing
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterVectorLayer
from qgis.core import QgsProcessingParameterNumber
from qgis.core import QgsProcessingParameterFile
from qgis.core import QgsProcessingParameterField
from qgis.core import QgsProcessingParameterString
from qgis.core import QgsProcessingParameterFeatureSource
from qgis.core import QgsProcessingParameterDateTime
from qgis.core import QgsProcessingParameterFeatureSink
from qgis.core import QgsProcessingParameterBoolean
from qgis.core import QgsProcessingParameterEnum
from qgis.core import QgsSpatialIndexKDBush
from qgis.core import QgsFeature,QgsFields,QgsField
from qgis.core import QgsFeatureIterator
from qgis.core import QgsVectorLayer
from qgis.core import QgsFeatureSource

import processing
import io,os 


class Intensite_nodale(QgsProcessingAlgorithm):

    def initAlgorithm(self, config=None):
        self.addParameter(QgsProcessingParameterVectorLayer('stops', self.tr('PT stops'), types=[QgsProcessing.TypeVectorPoint], defaultValue=None))
        self.addParameter(QgsProcessingParameterVectorLayer('nodal_points',self.tr('nodal points'), types=[QgsProcessing.TypeVectorAnyGeometry], defaultValue=None))
        self.addParameter(QgsProcessingParameterField('node_id',self.tr('node id'), parentLayerParameterName='nodal_points'))
        self.addParameter(QgsProcessingParameterField('name', self.tr('node name'), parentLayerParameterName='nodal_points'))
        self.addParameter(QgsProcessingParameterFile('musliw_network_file', self.tr('Musliw network file'), behavior=QgsProcessingParameterFile.File, fileFilter='Fichier texte (*.txt)', defaultValue=None))
        self.addParameter(QgsProcessingParameterNumber('radius', self.tr('radius(m)'), type=QgsProcessingParameterNumber.Double, defaultValue=150.0))
        self.addParameter(QgsProcessingParameterNumber('day', self.tr('day'), type=QgsProcessingParameterNumber.Integer, defaultValue=1))
        self.addParameter(QgsProcessingParameterString('mintransfer', self.tr('min transfer time(min)'), defaultValue='2.0'))
        self.addParameter(QgsProcessingParameterString('maxtransfer', self.tr('max transfer time(min)'), defaultValue='30.0'))
        self.addParameter(QgsProcessingParameterString('start_time', self.tr('start time'),defaultValue='00:00:00'))
        self.addParameter(QgsProcessingParameterString('end_time', self.tr('end time'),defaultValue='23:59:59'))
        self.addParameter(QgsProcessingParameterBoolean('uturn', self.tr('prohibited u-turns'),defaultValue=True))
        self.addParameter(QgsProcessingParameterEnum('analysistype', self.tr('type of analysis by:'), options=[self.tr('commercial line name'),self.tr('PT mission')], defaultValue=0))
        self.addParameter(QgsProcessingParameterNumber('walkspeed', self.tr('walk speed(km/h)'), type=QgsProcessingParameterNumber.Double, defaultValue=3.6))
        self.addParameter(QgsProcessingParameterFeatureSink('output', self.tr('output layer'),QgsProcessing.TypeVectorPoint))
        
    def minutes(self,horaire):
        return(QTime(0,0,0).secsTo(horaire)/60)
        
    def processAlgorithm(self, parameters, context, model_feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        poles=self.parameterAsVectorLayer(parameters,'nodal_points',context)
        pole_id=self.parameterAsFields(parameters,'node_id',context)[0]
        nom=self.parameterAsFields(parameters,'name',context)[0]
        rayon=self.parameterAsDouble(parameters,'radius',context)
        nom_musliw=self.parameterAsFile(parameters,'musliw_network_file',context)
        noeuds=self.parameterAsVectorLayer(parameters,'stops',context)
        jour=self.parameterAsInt(parameters,'day',context)
        start_time=QTime.fromString(self.parameterAsString(parameters,'start_time',context))
        end_time=QTime.fromString(self.parameterAsString(parameters,'end_time',context))
        uturn=self.parameterAsBool(parameters,'uturn',context)
        min_transfer=self.parameterAsString(parameters,'mintransfer',context)
        max_transfer=self.parameterAsString(parameters,'maxtransfer',context)
        analysistype=self.parameterAsEnum(parameters, 'analysistype',context)
        walkspeed=self.parameterAsDouble(parameters,'walkspeed',context)
        feedback = QgsProcessingMultiStepFeedback(4, model_feedback)


        champs=QgsFields()
        champs.append(QgsField("i",QVariant.String))
        champs.append(QgsField("name",QVariant.String))
        champs.append(QgsField("potentiel_tot",QVariant.Int))
        champs.append(QgsField("potentiel_train",QVariant.Int))
        champs.append(QgsField("intensite_tot",QVariant.Int))
        champs.append(QgsField("intensite_train",QVariant.Int))
        champs.append(QgsField("potentiel_cadence_tot",QVariant.Int))
        champs.append(QgsField("potentiel_cadence_train",QVariant.Int))
        champs.append(QgsField("intensite_cadence",QVariant.Int))
        champs.append(QgsField("intensite_cadence_train",QVariant.Int))
        (table_output,dest_id) = self.parameterAsSink(parameters,'output''',context,champs, QgsWkbTypes.Point, poles.sourceCrs())
        nom_fichier_detail=os.path.splitext(dest_id)[0]+'_mat.txt'
        output_matrix=io.open(nom_fichier_detail,"w")
        
        corr_min={}
        corr_max={}
        gares={}
        fnoeuds=[]
        points={}
        arrets={}

        elem=min_transfer.split('|')
        for k,i in enumerate(elem):
            d=i.split(':')
            if len(d)==1:
                corr_min['default']=float(i)
            else:
                corr_min[d[0]]= float(d[1])
        elem=max_transfer.split('|')
        for k,i in enumerate(elem):
            d=i.split(':')
            if len(d)==1:
                corr_max['default']=float(i)
            else:
                corr_max[d[0]]= float(d[1])

        feedback.setCurrentStep(1)
        for f in noeuds.getFeatures():
            points[f.id()]=f
            arrets[f["i"]]=f.id()
            
        poles_points=poles.getFeatures()
        poles_nodaux={}
        points_nodaux={}
        
        for f in poles.getFeatures():
            gares[f[pole_id]]=f
        
        
        index = QgsSpatialIndexKDBush(noeuds.getFeatures())
        for i,f in enumerate(poles_points):
            nearest = index.within(f.geometry().centroid().asPoint(), rayon)
            poles_nodaux[f[pole_id]]=[]
            for k in nearest:
                if points[k.id]["i"] not in points_nodaux:
                    points_nodaux[points[k.id]["i"]]=[]
                points_nodaux[points[k.id]["i"]].append(f)
                poles_nodaux[f[pole_id]].append(points[k.id]["i"])
                
        #print(points)
        entrees={}
        sorties={}
        hentrees={}
        hsorties={}
        feedback.setCurrentStep(2)
        fichier_musliw=io.open(nom_musliw,encoding='utf_8_sig')
        for ligne in fichier_musliw:
            e=ligne.split(';')
            if e[0] in points_nodaux:
                if float(e[4])>0:
                    if analysistype==0:
                        line=e[9].split('|')[0]
                    elif analysistype==1:
                        line=e[4]
                    arret=e[1]
                    hdep=float(e[6])
                    harr=float(e[7])
                    mode=e[10]
                    cal=list(e[8])[jour]
                    for i in points_nodaux[e[0]]:
                        if cal=='O' and self.minutes(start_time)<=hdep<=self.minutes(end_time):
                            if i[pole_id] not in sorties:
                                sorties[i[pole_id]]={}
                                hsorties[i[pole_id]]={}
                            if line not in sorties[i[pole_id]]:
                                sorties[i[pole_id]][line]=0
                                hsorties[i[pole_id]][line]=[]
                            sorties[i[pole_id]][line]+=1
                            hsorties[i[pole_id]][line].append((arret,hdep,mode,e[0]))
            if e[1] in points_nodaux:
                if float(e[4])>0:
                    arret=e[0]
                    if analysistype==0:
                        line=e[9].split('|')[0]
                    elif analysistype==1:
                        line=e[4]
                    hdep=float(e[6])
                    harr=float(e[7])
                    cal=list(e[8])[jour]
                    mode=e[10]
                    for i in points_nodaux[e[1]]:
                        if cal=='O' and self.minutes(start_time)<=harr<=self.minutes(end_time):
                            if i[pole_id] not in entrees:
                                entrees[i[pole_id]]={}
                                hentrees[i[pole_id]]={}
                            if line not in entrees[i[pole_id]]:
                                entrees[i[pole_id]][line]=0
                                hentrees[i[pole_id]][line]=[]
                            entrees[i[pole_id]][line]+=1
                            hentrees[i[pole_id]][line].append((arret,harr,mode,e[1]))
        
        feedback.setCurrentStep(3)
        #calcul des indicateurs et matrices de correspondance
        resultat_poles_entree={}
        resultat_poles_sortie={}
        #resultats entrée potentiel nodal
        output_matrix.write('i;name;line1;line2;j1;hdep;mode1;i1;j2;mode2;i2;v1;v1_train;v2;v2_train;duree;harr;duree_prec;hprec;corr_min;corr_max\n')
        for i in poles_nodaux:
            resultat_poles_entree[i]=[0,0,0,0]
            if i in hentrees:
                test_demi_tour=0
                bus=0
                for lig in hentrees[i]:
                    #resultat_poles[i][lig]=[0,0,0,0]
                    v1=0
                    v2=0
                    v3=0
                    v4=0
                    v5=1e38
                    v6=0
                    for l1 in hentrees[i][lig]:
                        for col in hsorties[i]:
                            v1=0
                            v2=0
                            v3=0
                            v4=0
                            v5=1e38
                            v6=0
                            v7=1e38
                            v8=0
                            for c1 in hsorties[i][col]:
                                cmin=corr_min.get(c1[2],corr_min['default'])
                                cmax=corr_max.get(c1[2],corr_max['default'])
                                if not((l1[0]==c1[0]) and (uturn==True)):
                                    v1=1
                                    if (l1[2]=='train' or c1[2]=='train'):
                                        v2=1
                                    if l1[1]+corr_min.get(c1[2],corr_min['default'])+points[arrets[c1[3]]].geometry().distance(points[arrets[l1[3]]].geometry())/(walkspeed*1000/60)<=c1[1] and c1[1]-l1[1]<=corr_max.get(c1[2],corr_max['default'])+corr_min.get(c1[2],corr_min['default']):
                                        v3=1
                                        if c1[1]-l1[1]<v5:
                                            v6=c1[1]
                                            v5=c1[1]-l1[1]
                                        if (l1[2]=='train' or c1[2]=='train'):
                                            v4=1
                                    if l1[1]>c1[1]+corr_min.get(c1[2],corr_min['default'])+points[arrets[c1[3]]].geometry().distance(points[arrets[l1[3]]].geometry())/(walkspeed*1000/60) and l1[1]-c1[1]<=corr_max.get(c1[2],corr_max['default'])+corr_min.get(c1[2],corr_min['default']):
                                        if l1[1]-c1[1]<v7:
                                            v8=c1[1]
                                            v7=l1[1]-c1[1]
                                        
                                        
                            output_matrix.write(str(i)+';'+gares[i][nom]+';'+str(lig)+';'+str(col)+';'+str(l1[0])+';'+str(l1[1])+';'+str(l1[2])+';'+str(l1[3])+';'+str(c1[0])+';'+str(c1[2])+';'+str(c1[3])+';'+str(v1)+';'+str(v2)+';'+str(v3)+';'+str(v4)+';'+str(v5)+';'+str(v6)+';'+str(v7)+';'+str(v8)+';'+str(cmin)+';'+str(cmax)+'\n')
                            resultat_poles_entree[i][0]+=v1
                            resultat_poles_entree[i][1]+=v2
                            resultat_poles_entree[i][2]+=v3
                            resultat_poles_entree[i][3]+=v4
        
        
        #resultats sortie potentiel nodal
        output_matrix.close()
        feedback.setCurrentStep(4)
        for i in poles_nodaux:
            resultat_poles_sortie[i]=[0,0,0,0]
            if i in sorties:
                test_demi_tour=0
                bus=0
                for col in hsorties[i]:
                    #resultat_poles[i][lig]=[0,0,0,0]
                    v1=0
                    v2=0
                    v3=0
                    v4=0
                    for c1 in hsorties[i][col]:
                        for lig in hentrees[i]:
                            v1=0
                            v2=0
                            v3=0
                            v4=0
                            for l1 in hentrees[i][lig]:
                                if not((l1[0]==c1[0]) and (uturn==True)):
                                    v1=1
                                    if (l1[2]=='train' or c1[2])=='train':
                                        v2=1
                                    if l1[1]+corr_min.get(c1[2],corr_min['default'])+points[arrets[c1[3]]].geometry().distance(points[arrets[l1[3]]].geometry())/(walkspeed*1000/60)<=c1[1] and c1[1]-l1[1]<=corr_max.get(c1[2],corr_max['default'])+corr_min.get(c1[2],corr_min['default']):
                                        v3=1
                                        if (l1[2]=='train' or c1[2])=='train':
                                            v4=1
                                        
                            resultat_poles_sortie[i][0]+=v1
                            resultat_poles_sortie[i][1]+=v2
                            resultat_poles_sortie[i][2]+=v3
                            resultat_poles_sortie[i][3]+=v4
                    
            

        feedback.setCurrentStep(5)
    
        for i in gares:
            pole=QgsFeature()
            pole.setGeometry(gares[i].geometry())
            pole.setAttributes([i, gares[i][nom],resultat_poles_entree[i][0],resultat_poles_entree[i][1],resultat_poles_entree[i][2],resultat_poles_entree[i][3],
                    min(resultat_poles_entree[i][0],resultat_poles_sortie[i][0]),min(resultat_poles_entree[i][1],resultat_poles_sortie[i][1]),
                    min(resultat_poles_entree[i][2],resultat_poles_sortie[i][2]),min(resultat_poles_entree[i][3],resultat_poles_sortie[i][3])])
            table_output.addFeature(pole)
        del table_output
        
        
        
        feedback = QgsProcessingMultiStepFeedback(1, model_feedback)
        return {'output':dest_id}

    def name(self):
        return 'nodal_intensity'

    def displayName(self):
        return self.tr('nodal intensity')

    def group(self):
        return self.tr('Analysis')

    def groupId(self):
        return 'Analysis'

    def tr(self, string):
        return QCoreApplication.translate('Intensite_nodale', string)

    def shortHelpString(self):
        return self.tr("""
        This scripts generate indicators in order to evaluate the potential of intermodality
        these indicators are:
        - Nodal potential all modes
        - Nodal potential train
        - Nodal intensity all modes
        - Nodal intensity train 
        - Nodal potential rail scheduling all modes
        - Nodal potential rail scheduling train
        - Nodal intensity rail scheduling all modes
        - Nodal intensity rail scheduling train
        Parameters:
            PT stops: a layer that contains all stops to be taken into account
            nodal points: a layer of intermodality points to compute nodal potential and intensity
            node id: nodal point id
            node name: nodal point name
            Musliw network file: Musliw multimodal network file (txt) which contains timetables to analyze
            radius: the radius in meters that define which stops are talken into account (those inside the radius))
            day: day of Musliw file calendar
            min transfer time: the delay minimum to be at the stop to be able to board into the PT vehicule
            max transfer time: the maximum delay of transfer
            start time: beginning of the period of sudy
            end time: end of the period of study
            prohibited uturn: if checke uturn won't be taken into account
            output layer: name of the result layer
        The script generates a detailed txt file named <out_put layer>_mat.txt to be able to analyze in detail transfers and intermodality
""")

    def createInstance(self):
        return Intensite_nodale()
