"""
Model exported as python.
Name : mobilityareas
Group : Cerema
With QGIS : 31803
"""
from qgis.core import *
from qgis.utils import *
from qgis.core import QgsProcessing
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterVectorLayer
from qgis.core import QgsProcessingParameterBoolean
from qgis.core import QgsProcessingParameterField
from qgis.core import QgsProcessingParameterExpression
from qgis.core import QgsProcessingParameterFile
from qgis.core import QgsProcessingParameterNumber
import os
import pandas
import numpy as np
import datetime
import io
from qgis.PyQt.QtCore import QCoreApplication, QVariant, QDateTime
from qgis.core import *
from qgis.utils import *
from qgis.core import (QgsVectorLayer,QgsSpatialIndex,QgsFeature,QgsGeometry,QgsFeatureIterator,QgsFields, QgsField)

import processing


class MobilityAreas(QgsProcessingAlgorithm):
    INPUT='INPUT'
    ZONES='ZONES'
    ZONE_ID='ZONE_ID'
    ORIGIN='ORIGIN'
    DESTINATION='DESTINATION'
    VALUE='VALUE'
    MIN_SIZE='MIN_SIZE'
    MAX_SIZE='MAX_SIZE'
    MAX_LINK='MAX_LINK'
    OUTPUT='OUTPUT'
    
    
    def initAlgorithm(self, config):
        self.addParameter(QgsProcessingParameterFeatureSource('Zones', self.tr('Zones'), types=[QgsProcessing.TypeVectorPolygon], defaultValue=None))
        self.addParameter(QgsProcessingParameterField('ZoneId', self.tr('Zone Id'), type=QgsProcessingParameterField.Any, parentLayerParameterName='Zones', allowMultiple=False, defaultValue=''))
        self.addParameter(QgsProcessingParameterField('ZoneLabel', self.tr('Zone label'), type=QgsProcessingParameterField.Any, parentLayerParameterName='Zones', allowMultiple=False, defaultValue=''))
        self.addParameter(QgsProcessingParameterFile('OriginDestinationFile', self.tr('Origin/Destination file'), behavior=QgsProcessingParameterFile.File, fileFilter='Fichier texte (*.txt)', defaultValue=None))
        self.addParameter(QgsProcessingParameterExpression('Origin', self.tr('Origin'), parentLayerParameterName='', defaultValue=''))
        self.addParameter(QgsProcessingParameterExpression('Destination', self.tr('Destination'), parentLayerParameterName='', defaultValue=''))
        self.addParameter(QgsProcessingParameterExpression('Value', self.tr('Value'), parentLayerParameterName='', defaultValue=''))
        self.addParameter(QgsProcessingParameterString('Separator', self.tr('Field separator'),defaultValue=';'))
        self.addParameter(QgsProcessingParameterString('Filter', self.tr('Filter'),defaultValue='',optional=True))
        self.addParameter(QgsProcessingParameterNumber('Minimumpoolsize', self.tr('Minimum pole size'), type=QgsProcessingParameterNumber.Double, minValue=0, maxValue=1.79769e+308, defaultValue=2500))
        self.addParameter(QgsProcessingParameterNumber('Maxaggregationsize', self.tr('Max aggregation size'), type=QgsProcessingParameterNumber.Double, minValue=0, maxValue=1.79769e+308, defaultValue=50000))
        self.addParameter(QgsProcessingParameterNumber('Maximumlink', self.tr('Maximum link'), type=QgsProcessingParameterNumber.Double, minValue=0, maxValue=1, defaultValue=0.01))
        self.addParameter(QgsProcessingParameterBoolean('Neighbourhood', self.tr('Neighbourhood constraint'), defaultValue=False))
        self.addParameter(QgsProcessingParameterBoolean('Secondary', self.tr('Secondary poles'), defaultValue=False))
        self.addParameter(QgsProcessingParameterFeatureSink('Output', self.tr('Output'), type=QgsProcessing.TypeVectorPolygon, defaultValue=None))

    def processAlgorithm(self, parameters, context, model_feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        feedback = QgsProcessingMultiStepFeedback(4, model_feedback)

        zones=self.parameterAsSource(parameters,'Zones',context)
        zone_id=self.parameterAsFields(parameters,'ZoneId',context)[0]
        zone_label=self.parameterAsFields(parameters,'ZoneLabel',context)[0]
        donnees=self.parameterAsFile(parameters,'OriginDestinationFile',context)
        origine=self.parameterAsExpression(parameters,'Origin',context)
        destination=self.parameterAsExpression(parameters,'Destination',context)
        valeur=self.parameterAsExpression(parameters,'Value',context)
        min_size=self.parameterAsDouble(parameters,'Minimumpoolsize',context)
        max_size=self.parameterAsDouble(parameters,'Maxaggregationsize',context)
        max_link=self.parameterAsDouble(parameters,'Maximumlink',context)
        continu=self.parameterAsBool(parameters,'Neighbourhood',context)
        secondaire=self.parameterAsBool(parameters,'Secondary',context)
        separateur=self.parameterAsString(parameters,'Separator',context)
        filtre=self.parameterAsString(parameters,'Filter',context)
        
        fields = QgsFields()
        fields.append(QgsField("etape", QVariant.Int))
        fields.append(QgsField("code", QVariant.String))
        fields.append(QgsField("pole", QVariant.String))    
        fields.append(QgsField("nom_pole", QVariant.String))    
        fields.append(QgsField("debut", QVariant.DateTime))
        fields.append(QgsField("fin", QVariant.DateTime))
        fields.append(QgsField("lien", QVariant.Double,len=15,prec=5))
        fields.append(QgsField("interne", QVariant.Double,len=15,prec=5))
        fields.append(QgsField("total", QVariant.Double,len=15,prec=5))
        fields.append(QgsField("flux", QVariant.Double,len=15,prec=5))
        
        (table_resultat,dest_id) = self.parameterAsSink(parameters, 'Output',context,fields, QgsWkbTypes.MultiPolygon, zones.sourceCrs())

        bassins={}
        poles=set()
        nom_txt=os.path.splitext(dest_id)
        resultat=open(nom_txt[0]+'.txt',"w")


        resultat.write(self.tr("step;zone;pole;link;internal;total\n"));
        #resultat.write(self.tr("etape;commune;pole;lien;interne;total\n"));
        n=1
        pole_min=min_size
        pole_max=max_size
        lien_mini=max_link
        #continu=False
        feedback.setProgressText(self.tr("Generating neighbourhood table..."))
        feedback.setCurrentStep(1)
        voisinage=self.cree_voisinage(zones,zone_id,10.0, continu,origine,destination,nom_txt[0]+"_voisinage.txt")
        
        feedback.setProgressText(self.tr("Generating zones data..."))
        feedback.setCurrentStep(2)

        dic_geo=self.prepa_table_geo(zones,zone_id,zone_label)



        #writer=cree_writer_geo(sortie='G:/poubelle/result_com_ge_trav_voisins.gpkg')

        feedback.setProgressText(self.tr("Importing data..."))
        feedback.setCurrentStep(3)

        a=self.import_migrations(donnees,origine,destination,valeur,separateur,str(filtre))
        #a=filtre_migrations(a,['09','11','12','30','31','32','34','46','48','65','66','81','82'])
        #a=filtre_migrations(a,['02','59','60','62','80'])
        #a=filtre_migrations(a,['08','10','51','52','54','55','57','67','68','88'])
        #epci=import_epci()
        #nuts=import_com_etranger()

        #a=maj_com_etranger(a,nuts)




        a,marges,marged=self.calcul_marges_interne(a,origine,destination, valeur)



        a=self.maj_voisinage(a,voisinage,continu,origine,destination)

        a=self.calcul_lien(a,marges,marged,origine,destination,valeur)


        lmax=self.cherche_lien_max(a,pole_min,pole_max,lien_mini)


        feedback.setProgressText(self.tr("Building cluster areas..."))
        feedback.setCurrentStep(4)

        while (lmax.empty==False):
            pole=lmax[destination]
            commune=lmax[origine]
            if commune not in bassins:
                bassins[commune]=set([commune])
            if pole not in bassins:
                bassins[pole]=set([pole])
            bassins[pole]=bassins[pole].union(bassins[commune])
            bassins[commune].clear()
            a=self.maj_pole(a,commune, pole,origine,destination,secondaire)
            voisinage=self.maj_voisin_pole(a,commune, pole,origine,destination)
            a=self.maj_migrations(a,origine,destination,valeur)
            a,marges,marged=self.calcul_marges_interne(a, origine, destination, valeur)
            a=self.maj_voisinage(a,voisinage,continu, origine, destination)
            pct=marges.loc[marges[origine]==pole,['PCT']]
            if len(pct)>0:
                pct_value=pct.iat[0,0]
            else:
                pct_value=0
            total=marged.loc[marged[destination]==pole,['TOTAL_POLE']]
            if pole not in dic_geo:
                try:
                    dic_geo[pole]=[pole,pole,dic_geo[commune][2],QDateTime(2020,1,1,0,0).addSecs(n),QDateTime(2021,1,1,0,0).addSecs(n),lmax['LIEN'],pct_value,total.iat[0,0]]
                except:
                    dic_geo[pole]=[pole,pole,dic_geo[commune][2],QDateTime(2020,1,1,0,0).addSecs(n),QDateTime(2021,1,1,0,0).addSecs(n),lmax['LIEN'],0,total.iat[0,0]]
                    print(pole)
                    print(pct)
            try:
                resultat.write(";".join([str(i) for i in [n,commune,pole,lmax['LIEN'],pct_value,total.iat[0,0],'\n']]))
            except:
                resultat.write(";".join([str(i) for i in [n,commune,pole,lmax['LIEN'],0,total.iat[0,0],'\n']]))
            
            feat=QgsFeature()
            if commune not in poles:
                feat.setAttributes([n,str(commune),str(pole),"",dic_geo[commune][3],QDateTime(2020,1,1,0,0).addSecs(n),float(lmax['LIEN']),float(pct_value),float(total.iat[0,0]),float(lmax['FLUX'])])
            else:
                feat.setAttributes([n,str(commune),str(pole),str(dic_geo[commune][1]),dic_geo[commune][3],QDateTime(2020,1,1,0,0).addSecs(n),float(lmax['LIEN']),float(pct_value),float(total.iat[0,0]),float(lmax['FLUX'])])
                
            feat.setGeometry(dic_geo[commune][2])
            #print(";".join([str(i) for i in [n,str(commune),str(pole),dic_geo[commune][2],dic_geo[commune][2].addSecs(n),lmax['LIEN'],pct.iat[0,0],total.iat[0,0]]]))
            table_resultat.addFeature(feat)


            feat2=QgsFeature()
            if pole not in poles:
                feat2.setAttributes([n,str(pole),str(pole),'',dic_geo[pole][3],QDateTime(2020,1,1,0,0).addSecs(n),float(lmax['LIEN']),float(pct_value),float(total.iat[0,0]),float(lmax['FLUX'])])
                poles.add(pole)
                feedback.setProgressText(str(pole)+":" +dic_geo[pole][1])
            else:
                feat2.setAttributes([n,str(pole),str(pole),str(dic_geo[pole][1]),dic_geo[pole][3],QDateTime(2020,1,1,0,0).addSecs(n),float(lmax['LIEN']),float(pct_value),float(total.iat[0,0]),float(lmax['FLUX'])])

            feat2.setGeometry(dic_geo[pole][2])
            #print(";".join([str(i) for i in [n,str(commune),str(pole),dic_geo[pole][2],QDateTime(2021,1,1,0,0).addSecs(n),lmax['LIEN'],pct.iat[0,0],total.iat[0,0]]] ))
            table_resultat.addFeature(feat2)

            geom=dic_geo[commune][2].combine(dic_geo[pole][2])
            name=dic_geo[pole][1]
            del(dic_geo[commune])
            try:
                del(dic_geo[pole])
            except:
                break

            #feat3=QgsFeature()
            dic_geo[pole]=[pole,name,geom,QDateTime(2020,1,1,0,0).addSecs(n),QDateTime(2020,1,1,0,0).addSecs(n),float(lmax['LIEN']),float(pct_value),float(total.iat[0,0]),float(lmax['FLUX'])]
            #feat3.setGeometry(geom)

            #feat3.setAttributes([n,str(commune),str(pole),name,QDateTime(2020,1,1,0,0).addSecs(n),QDateTime(2021,1,1,0,0),float(lmax['LIEN']),float(pct.iat[0,0]),float(total.iat[0,0])])
            #print(";".join([str(i) for i in [n,str(commune),str(pole),QDateTime(2020,1,1,0,0).addSecs(n),QDateTime(2021,1,1,0,0).addSecs(n),lmax['LIEN'],pct.iat[0,0],total.iat[0,0]]] ))
            #writer.addFeature(feat3)

            a=self.calcul_lien(a,marges,marged,origine,destination, valeur)
            lmax=self.cherche_lien_max(a,pole_min,pole_max,lien_mini)
            n+=1

        for i in dic_geo:
            if dic_geo[i][6]>0:
                feat3=QgsFeature()
                feat3.setGeometry(dic_geo[i][2])
                feat3.setAttributes([n,dic_geo[i][0],dic_geo[i][0],dic_geo[i][1],dic_geo[i][3],QDateTime(2020,1,1,0,0).addSecs(n+1),dic_geo[i][5],dic_geo[i][6],dic_geo[i][7]])
                #print(";".join([str(i) for i in [n,str(commune),str(pole),QDateTime(2020,1,1,0,0).addSecs(n),QDateTime(2021,1,1,0,0).addSecs(n),lmax['LIEN'],pct.iat[0,0],total.iat[0,0]]] ))
                table_resultat.addFeature(feat3)
            
        resultat.close()    
        self.sortie_bassins(bassins,nom_txt[0]+'_bassins.txt')
        del(a)
        del(marges)
        del(marged)
        del(bassins)


        #./ffmpeg -r 1 -i bassins_trav_epci%04d.png -vcodec mpeg4 -y bassins_trav_epci_hdf.mp4
        #./ffmpeg -r 1 -i bassins_trav_epci%04d.png -vcodec libxvid -qscale:v 1 -y bassins_trav_epci_hdf.mp4
        #./ffmpeg -r 10 -i com_dom_trav_GE_externe_10000%04d.png -c:v libxvid -s 800x600 -qscale:v 1 -y com_dom_trav_GE_10000x10.mp4

        
        
        return {'output': dest_id}
        
    def import_migrations(self, input='G:/insee/RP2017_MOBPRO/FD_MOBPRO_2017.csv',o='COMMUNE',d='DCLT',valeur='IPONDI',separateur=';',filtre=''):
        a=pandas.read_csv(input,';',delimiter=separateur, dtype={o:str, d: str}, decimal='.')
        if not(filtre==''):
            a=a.query(filtre)
        
        return(a)


    def import_epci(input="G:/Qgis/geofla/communes_EPCI2020.csv"):
        a=pandas.read_csv(input,delimiter=";", dtype={'insee_com':str,'raison_soc':str}, decimal='.')
        return(a)

    def import_com_etranger(input='G:/Etudes/mira/Grand-Est/codif_etranger_com.csv'):
        a=pandas.read_csv(input,delimiter=";", dtype={'COD_MOD':str,'LIB_MOD':str,'GISCO_ID':str}, decimal='.',encoding='utf8')
        return(a)

            
            



    def maj_com_etranger(flux,epci):
        flux=flux.merge(epci[["COD_MOD","LIB_MOD"]].rename(columns={"LIB_MOD":'CODED'}),how="left",left_on=["DCLT"],right_on=["COD_MOD"])
        flux.loc[flux["CODED"].notna(),'DCLT']=flux.loc[flux["CODED"].notna(),'CODED']
        return(flux)



    def ajout_epci(flux,epci):
        flux=flux.merge(epci[["insee_com","raison_soc"]].rename(columns={"raison_soc":'CODEO'}),how="left",left_on=["COMMUNE"],right_on=["insee_com"])
        flux=flux.merge(epci[["insee_com","raison_soc"]].rename(columns={"raison_soc":'CODED'}),how="left",left_on=["DCLT"],right_on=["insee_com"])
        flux.loc[flux["CODED"].isna(),'CODED']=flux.loc[flux["CODED"].isna(),'DCLT']
        return(flux)

    def ajout_epci_etranger(flux,nuts):
        flux=flux.merge(nuts[["COD_MOD","nuts_name"]],how="left",left_on=["CODED"],right_on=["COD_MOD"])
        flux.loc[flux["COD_MOD"].notna(),'CODED']=flux.loc[flux["COD_MOD"].notna(),'nuts_name']
        #print(flux.loc[flux["COD_MOD"].notna()])
        return(flux)


    def group_by_epci(data):
        data=data.groupby(['CODEO','CODED'],as_index=False).agg({'IPONDI': np.sum}).rename(columns={'CODEO': 'COMMUNE','CODED':'DCLT'})
        data=data.assign(POLE=0)
        return(data)
        
        
    def filtre_migrations(data,liste_dep):

        data=data[data['COMMUNE'].str[:2].isin(liste_dep)]
        #data=data[data['DCLT'].str[:2].isin(liste_dep)]
        data.loc[data['DCLT']=='99999','DCLT']=data.loc[data['DCLT']=='99999',"DCFLT"]
        data=data.loc[:,['COMMUNE','DCLT','IPONDI']]
        data=data.assign(POLE=0)
        return(data)
        

    def calcul_marges_interne(self,data,origine,destination,value):

        data=data.assign(INT=((data[origine]==data[destination])*data[value]*1.0))
        marges=data.groupby([origine],as_index=False).agg({'INT': np.sum,value: np.sum}).rename(columns={'INT':'INTERNE',value: 'TOTAL'})
        marged=data.groupby([destination],as_index=False).agg({value: np.sum}).rename(columns={value: 'TOTAL_POLE'})
        marges=marges.assign(PCT=marges['INTERNE']/marges['TOTAL'])
        return([data,marges,marged])
        
    def calcul_lien(self, data, marges,marged,origine,destination,value):

        data=data.merge(marges,left_on=origine,right_on=origine)
        data=data.merge(marged,left_on=destination,right_on=destination)
        data=data.assign(LIEN=(~(data[origine]==data[destination]))*(data[value]/data['TOTAL']))
        data=data.assign(FLUX=(~(data[origine]==data[destination]))*(data[value]))
        return(data)

    def supprimer_cols_int_lien(self,data):

        data=data.drop(['INTERNE','TOTAL'])
        return(data)
        
    def cherche_lien_max(self, data,pole_min,pole_max,lien_mini):
        try:
            #lien_max=data.loc[(data['TOTAL_POLE']>=pole_min) & ((data['TOTAL']<=pole_max) | (data['POLE']==0)) & (data['LIEN']>=lien_mini) & (data['TOUCHE']==1),'LIEN'].idxmax()
            texte="(TOTAL_POLE>=" + str(pole_min) +" and TOTAL<=" + str(pole_max)+") and (LIEN>="+str(lien_mini)+" and TOUCHE==1)"
            lien_max=data.query(texte)['LIEN'].idxmax()
            a=data.loc[lien_max]
        except:
            a=pandas.DataFrame({})
        return(a)


    def maj_pole(self, data,commune,pole,origine,destination,secondaire=False):
        if secondaire==False:
            data.loc[(data[origine]==commune) ,origine]=pole
            data.loc[(data[destination]==commune) ,destination]=pole
        else:
            texte='not('+str(origine)+"=='"+str(commune)+"' or "+str(destination) +"=='"+ str(commune)+"')"
            data=data.query(texte)
        data.loc[(data[origine]==pole) ,'POLE']=1
        
        return(data)
        
    def maj_voisin_pole(self, data,commune,pole,origine,destination):
        data.loc[(data[origine]==commune) ,origine]=pole
        data.loc[(data[destination]==commune) ,destination]=pole
        data=data.groupby([origine,destination],as_index=False).agg({'TOUCHE': np.max})
        return(data)
        
    def maj_migrations(self, data,origine,destination,value):
        data=data.groupby([origine,destination],as_index=False).agg({'INT': np.sum,value: np.sum,'POLE':np.max})
        return(data)


    def sortie_bassins(self, bassins,output='g:/poubelle/sortie_bassins.txt'):
        sortie=open(output,"w")
        sortie.write("pole;commune;\n")
        for i in bassins:
            for j in bassins[i]:
                sortie.write(";".join([str(i),str(j),'\n']))
        sortie.close()
                

    ##  création de la table de voisinage des zones  (nécessite un fichier géographique ex: table des communes)
    def cree_voisinage(self,source,code,distance_mini,continu,origine,destination,nom_txt):
        #print("génération du voisinage")
        voisinage={origine : [], destination: []}
        communes=source
        idx=QgsSpatialIndex(communes.getFeatures())
        features = communes.getFeatures()
        for f in features:
            if continu==True:
                id=f.id()
                geom=f.geometry()
                inter=idx.intersects(geom.boundingBox())
                for i in inter:
                    for j in communes.getFeatures(request=QgsFeatureRequest(i)):
                        #if geom.intersects(j.geometry())  and not(f[code]==j[code]):
                        if (geom.distance(j.geometry()) < distance_mini) and not(f[code]==j[code]):
                            voisinage[origine].append(f[code])
                            voisinage[destination].append(j[code])
            else:
                voisinage[origine].append(f[code])
                voisinage[destination].append(f[code])
        voisinage=pandas.DataFrame(voisinage)
        voisinage=voisinage.assign(TOUCHE=1)
        voisinage.to_csv(nom_txt[0]+"_voisinage.txt")
        del(communes)
        #print("ok")
        return(voisinage)

    def maj_voisinage(self, data,voisins,continu,origine,destination):
        if continu==True:
            data=data.merge(voisins,how="left",left_on=[origine,destination],right_on=[origine,destination])
            data.loc[data["TOUCHE"].isna(),'TOUCHE']=0
        else:
            data["TOUCHE"]=1
        return(data)
                    

    def prepa_table_geo(self,source,code,nom):
        communes = source
        features = communes.getFeatures()
        result_geo={}
        for f in features:

            num=f[code]
            name=f[nom]
            geom=f.geometry()
            date_debut=QDateTime(2020,1,1,0,0)
            date_fin=QDateTime(2021,1,1,0,0)
            result_geo[num]=[num,name,geom,date_debut,date_fin,0,0,0]
        del(communes)
        return(result_geo)
        



    def cree_writer_geo(self, sortie='G:/poubelle/result_poly.gpkg'):
    #sortie_geo=cree_table_geo()
        fields = QgsFields()
        fields.append(QgsField("etape", QVariant.Int))
        fields.append(QgsField("code", QVariant.String))
        fields.append(QgsField("pole", QVariant.String))    
        fields.append(QgsField("nom_pole", QVariant.String))    
        fields.append(QgsField("debut", QVariant.DateTime))
        fields.append(QgsField("fin", QVariant.DateTime))
        fields.append(QgsField("lien", QVariant.Double,len=15,prec=5))
        fields.append(QgsField("interne", QVariant.Double,len=15,prec=5))
        fields.append(QgsField("total", QVariant.Double,len=15,prec=5))
        fields.append(QgsField("flux", QVariant.Double,len=15,prec=5))


        crs = QgsProject.instance().crs()

        writer = QgsVectorFileWriter(sortie,"UTF-8",fields,QgsWkbTypes.Polygon,crs,"GPKG")
        return(writer)

    def name(self):
        return 'mobilityareas'

    def displayName(self):
        return self.tr('Mobility Areas')

    def group(self):
        return ''

    def groupId(self):
        return ''

    def createInstance(self):
        return MobilityAreas()
    
    def tr(self, string, context=''):
        if context == '':
            context = self.__class__.__name__
        return QCoreApplication.translate(context, string)

    def trAlgorithm(self, string, context=''):
        if context == '':
            context = self.__class__.__name__
        return string, QCoreApplication.translate(context, string)
        
        
    def shortHelpString(self):
        return self.tr("""
        Algorithm to build incrementally mobility cluster areas based on OD trips data between zones. 
        It aggregates successively zones that have the strongest link until it remains only one area
        The result is a polygon layer reresenting allz ones and areas aggregated in the processs with 
        their associated time of creation and time of deletion that allow animated maps from the different aggregation steps
        with the QGis time manager
        
        The tool needs a od trips data (txt file separated with ';')
        A polygon layer (zones) with and Id that correspond to origin and destination Ids in the od trips data file
        
        Parameters:
            Zones : a polygon layer with a field containg the Id of zones
            Zone Id : zone Id field
            Zone label : zone label field (if no zone label , choose zone Id)
            Origin/destination file : OD trips data file. txt file with origin and destination fields corresponding to zone ID
            Origin: Name of the origin column
            Destination: name of the destination column
            Value: Name of the value column
            Field separator: Field separator . ';' by default
            Filter: OD trips data filter in pandas syntax
            Minimum pole size : the minimum size for becoming a pole
            Max agregation size: The maximum size to be able to be agregated
            Maximum link: A stop criteria on the maximum link (0.01 = 1% of the trips are going to the pole area)
            Neighbourhood constraint: if true a zone can be agregated only if it intersects the pole area (that implies no island in pole areas)
            Secondary poles: If checkes, secondary poles, that could be masqued by main poles, may appear
            Ouput: The polygon layer result table (contains resultst from each step of the algorithm for further dynamic analysis with temporal manager)
            
        """)
