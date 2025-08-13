"""
Model exported as python.
Name : GravityIndicator
Group : Analysis
With QGIS : 32003
"""

from qgis.PyQt.QtCore import QCoreApplication,QVariant
from qgis.core import *
from qgis.utils import *
from qgis.core import QgsProcessing
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterFile
from qgis.core import QgsProcessingParameterNumber
from qgis.core import QgsProcessingParameterString
from qgis.core import QgsProcessingParameterVectorLayer
from qgis.core import QgsProcessingParameterField
from qgis.core import QgsProcessingParameterFileDestination
from qgis.core import QgsProcessingParameterFeatureSource
from qgis.core import QgsProcessingParameterFeatureSink
from qgis.core import (QgsProcessingParameterFileDestination,
        QgsFeature
        )

import processing
import os
import gc
import math
import json
import io



class MultimodalGravityIndicators(QgsProcessingAlgorithm):

    def initAlgorithm(self, config):
        self.addParameter(QgsProcessingParameterMatrix('Modes', self.tr('Modes'), numberRows=2,headers=[self.tr('mode'),self.tr('t0'),self.tr('modal share'),self.tr('Musliw nodes file')]))
        self.addParameter(QgsProcessingParameterString('Amenityfield', self.tr('Amenity'),  defaultValue='volau'))
        self.addParameter(QgsProcessingParameterFeatureSource('Socioeconomicdata', self.tr('Socioeconomic data'), types=[QgsProcessing.TypeVectorPolygon], defaultValue=None))
        self.addParameter(QgsProcessingParameterField('ZoneId', self.tr('Zone Id'), type=QgsProcessingParameterField.Any, parentLayerParameterName='Socioeconomicdata', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterField('Popfield', self.tr('Population'), type=QgsProcessingParameterField.Numeric, parentLayerParameterName='Socioeconomicdata', allowMultiple=True, defaultValue=None))
        #self.addParameter(QgsProcessingParameterNumber('Numberoftimeperiods', self.tr('Number of time periods'), type=QgsProcessingParameterNumber.Double, defaultValue=1))
        self.addParameter(QgsProcessingParameterBoolean('InitialWaitingTime', self.tr('remove initial/Final waiting time?'), defaultValue=True))
        self.addParameter(QgsProcessingParameterFileDestination('Output', self.tr('Output'), fileFilter='*.txt', createByDefault=True, defaultValue=None))

    def processAlgorithm(self, parameters, context, model_feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        feedback = QgsProcessingMultiStepFeedback(4, model_feedback)
        results = {}
        outputs = {}
        # Matrice Musliw simple

        
        amenity= self.parameterAsString(parameters, 'AmenityField', context)
        resultat=self.parameterAsFileOutput(parameters,'Output',context)
        liste_modes=self.parameterAsMatrix(parameters,'Modes',context)
        #nb_horaires=self.parameterAsInt(parameters,'Numberoftimeperiods',context)
        nb_horaires=1
        pop_table=self.parameterAsSource(parameters,'Socioeconomicdata',context)
        zone=self.parameterAsFields(parameters,'ZoneId',context)[0]
        pop_fields=self.parameterAsFields(parameters,'Popfield',context)
        init_wait=self.parameterAsBool(parameters,'InitialWaitingTime',context)
        #lecture des modes
        modes={} 
        nb=len(liste_modes)//4
        for i in range(nb):
            mode=liste_modes[i*4]
            t0=float(liste_modes[i*4+1])
            pct=json.loads(liste_modes[i*4+2].replace("'",'"'))
            fichier=liste_modes[i*4+3]
            modes[mode]={'t0':t0,'pct':pct,'fichier':fichier}

        
            

        
        '''modes={'marche':{'t0':22,'pct':{'pvp0':1.0,'pvp1':0.88,'pvp2':0.74},'fichier':"res_sytral_marche_colleges_noeuds.txt"}
                ,'velo':{'t0':9, 'pct':{'pvp0':0,'pvp1':0.01,'pvp2':0.02}, 'fichier':"res_sytral_velo_colleges_noeuds.txt"}
                ,'voiture':{'t0':14, 'pct':{'pvp0':0.0,'pvp1':0.11,'pvp2':0.24}, 'fichier':"res_sytral_vp_colleges_noeuds.txt"}}
        #resultat='accessibilite_gravitaire_multi_colleges.txt'''





        #fich_temps=open('test.txt')

        carres={}
        equip={}
        cols={}
        zones_equip={}
        equipements={}
        zones={}
        
        grille=pop_table
        for i in grille.getFeatures():
            z=i[zone]
            for pop in pop_fields:
                p=i[pop]
                if z not in carres:
                    carres[z]={}
                    carres[z]['pop']=0
                carres[z][pop]=float(p)
                carres[z]['pop']+=float(p)



        feedback.setCurrentStep(1)
        if feedback.isCanceled():
            return {}

        wmodes={}
        for fich in modes:
            if fich not in wmodes:
                wmodes[fich]=0
            for k in modes[fich]['pct']:
                wmodes[fich]+=modes[fich]['pct'][k]

        'lit fichier temps TC'

        for fich in modes:
            with io.open(modes[fich]["fichier"],encoding='utf_8_sig') as fich_temps:
                t0=modes[fich]['t0']
                for i,od in enumerate(fich_temps):
                    if i==0:
                        e=od.strip('\n').strip('\r').split(";")
                        for g,f in enumerate(e):
                            cols[f]=g
                    else:
                        od=od.replace(',','.')
                        e=od.strip('\n').strip('\r').split(";")
                        zone=e[cols['numero']]
                        equip=e[cols['o']]
                        if init_wait==True:
                            tmsum=1/(float(e[cols['temps']])-float(e[cols['tatt1']]))
                        else:
                            tmsum=1/float(e[cols['temps']])
                        if equip not in equipements:
                                equipements[equip]={}
                                for k in modes[fich]['pct']:
                                    equipements[equip][k]=0
                                    equipements[equip]['pop_'+k]=0
                                    equipements[equip]['w_pop_'+k]=0
                                for f in modes:
                                    equipements[equip]['pop_'+f]=0
                                    equipements[equip]['w_pop_'+f]=0
                                    equipements[equip]['w_pop2_'+f]=0
                                equipements[equip]['nb']=0
                                equipements[equip]['pop']=0
                                equipements[equip]['w_pop']=0
                                equipements[equip]['w_pop2']=0
                                equipements[equip]['vol']=float(e[cols['volau']])
                        for k in modes[fich]['pct']:
                            p=modes[fich]['pct'][k]
                            equipements[equip]['nb']+=1
                            equipements[equip]['pop']+=p*carres[zone][k]
                            equipements[equip]['pop_'+k]+=p*carres[zone][k]
                            equipements[equip]['pop_'+fich]+=p*carres[zone][k]
                            poids=(2**(-((1/(tmsum/nb_horaires))/t0)**2))
                            #equipements[k2]['tc']['w_n']=2**(-(((v2['tc']['tsum']/v2['tc']['n'])/t0)**2))
                            equipements[equip]['w_pop']+=p*carres[zone][k]*poids
                            equipements[equip]['w_pop_'+fich]+=p*carres[zone][k]*poids
                            equipements[equip][k]+=p*carres[zone][k]*poids
                            #equipements[k2]['tc']['w_pop2']=0

        feedback.setCurrentStep(2)
        if feedback.isCanceled():
            return {}
        #for i in equipements:
        #    logger.info(equipements[i])
           
        for fich in modes:
            with io.open(modes[fich]["fichier"],encoding='utf_8_sig') as fich_temps:
                t0=modes[fich]['t0']
                for i,od in enumerate(fich_temps):
                    if i==0:
                        e=od.strip('\n').strip('\r').split(";")
                        for g,f in enumerate(e):
                            cols[f]=g
                    else:
                        od=od.replace(',','.')
                        e=od.strip('\n').strip('\r').split(";")
                        zone=e[cols['numero']]
                        equip=e[cols['o']]
                        if init_wait==True:
                            tmsum=1/(float(e[cols['temps']])-float(e[cols['tatt1']]))
                        else:
                            tmsum=1/float(e[cols['temps']])

                        if zone not in zones:
                            zones[zone]={}
                            zones[zone]['nb']=1
                            #zones[zone]['pop']=carres[zone]['pop']
                            zones[zone]['n_tot']=0
                            zones[zone]['w_pop']=0
                            for f in modes:
                                zones[zone]['w_pop_'+f]=0
                            for k in modes[fich]['pct']:
                                zones[zone][k]=0
                                
            
                        poids=(2**(-((1/(tmsum/nb_horaires))/t0)**2))
                        zones[zone]['n_tot']+=p*poids*equipements[equip]['vol']
                        
                        for k in modes[fich]['pct']:
                            p=modes[fich]['pct'][k]
                            if equipements[equip][k]>0 and equipements[equip]['pop_'+k]>0:
                                #zones[zone][k]+=(equipements[equip]['pop']/equipements[equip]['pop_'+k])*equipements[equip]['vol']*p*poids/equipements[equip]['w_pop']
                                zones[zone][k]+=equipements[equip]['vol']*p*poids/equipements[equip]['w_pop']
                                zones[zone]['w_pop_'+fich]+=equipements[equip]['vol']*poids*(p/wmodes[fich])/equipements[equip]['w_pop']
                            zones[zone]['nb']+=1
                            if carres[zone]['pop']>0:
                                zones[zone]['w_pop']+=equipements[equip]['vol']*p*poids*(carres[zone][k]/carres[zone]['pop'])/equipements[equip]['w_pop']
                            else:
                                zones[zone]['w_pop']+=equipements[equip]['vol']*p*poids*(equipements[equip]['pop_'+k]/equipements[equip]['pop'])/equipements[equip]['w_pop']
                                

        feedback.setCurrentStep(3)
        if feedback.isCanceled():
            return {}

        for fich in modes:
            with io.open(modes[fich]["fichier"],encoding='utf_8_sig') as fich_temps:
                t0=modes[fich]['t0']
                for i,od in enumerate(fich_temps):
                    if i==0:
                        e=od.strip('\n').strip('\r').split(";")
                        for g,f in enumerate(e):
                            cols[f]=g
                    else:
                        od=od.replace(',','.')
                        e=od.strip('\n').strip('\r').split(";")
                        zone=e[cols['numero']]
                        equip=e[cols['o']]
                        if init_wait==True:
                            tmsum=1/(float(e[cols['temps']])-float(e[cols['tatt1']]))
                        else:
                            tmsum=1/float(e[cols['temps']])
                        poids=(2**(-((1/(tmsum/nb_horaires))/t0)**2))
                        for k in modes[fich]['pct']:
                            p=modes[fich]['pct'][k]
                            equipements[equip]['w_pop_'+k]+=p*poids*carres[zone][k]/zones[zone]['n_tot']
                            equipements[equip]['w_pop2_'+fich]+=p*poids*carres[zone][k]/zones[zone]['n_tot']
                            equipements[equip]['w_pop2']+=p*poids*carres[zone][k]/zones[zone]['n_tot']



        feedback.setCurrentStep(4)
        if feedback.isCanceled():
            return {}


        fich_zones=open(os.path.splitext(resultat)[0]+"_multi_zones.txt","w")
        for k,i in enumerate(zones.items()):
            if k==0:
                fich_zones.write("zone;"+";".join([str(l) for l in i[1]])+"\n")
            fich_zones.write(i[0]+";"+";".join([str(l) for l in i[1].values()])+"\n")
        fich_zones.close()


        fich_equip=open(os.path.splitext(resultat)[0]+"_multi_equip.txt","w")
        for k,i in enumerate(equipements.items()):
            if k==0:
                fich_equip.write("equip;"+";".join([str(l) for l in i[1]])+"\n")
            fich_equip.write(i[0]+";"+";".join([str(k) for k in i[1].values()])+"\n")
        fich_equip.close()
                    
        gc.collect()
        '''del(zones)
        del(carres)
        del(equip)
        del(cols)
        del(equipements)'''

            
    


        return {'zones':os.path.splitext(resultat)[0]+"_multi_zones.txt",'equip':os.path.splitext(resultat)[0]+"_multi_equip.txt"}

    def name(self):
        return 'MultimodalGravityIndicators'

    def displayName(self):
        return self.tr('Multimodal Gravity Indicators')

    def group(self):
        return self.tr('Analysis')

    def groupId(self):
        return 'Analysis'

    def createInstance(self):
        return MultimodalGravityIndicators()

    def shortHelpString(self):
        return self.tr("""
        The algorithm performs a gravity indicator of accessibility with spatial and modal competition based on a decay function 
        (1 for travel time=0, 0.5 for travel time = t0, 0 for infinite travel time
        -  Modes: a table with one row per mode with:
            - name: name of the mode (e.g  car)
            - t0: The value of t0 for which the decay function weighting is 0.5 for this specific mode
            - modal share: a python dict where keys must correspond to socioeconomic data columns, and value to the modal share of this mode for this population (e.g {'pvp0':1.0,'pvp1':0.88,'pvp2':0.74})
            - musliw nodes file: : The name of the Musliw output node file "..._noeuds.txt" (This output need to be activated in Musliw paramaters)
        - Amenity: Attraction field ( as Number of job, numbers of doctors, numbers of school spaces)
        - Socioeconomic data: Name of the table which contains emission field (e.g zones or grid cells with population for example)
        - Zone ID: zone Id
        - Population: Emission field as bumber of inhabitants (for example)
        - Number of time period: Number of time periods for calculations (for a same origin destination)
        - Output: generic output file name (txt)
        
        The algorithm produces 2 result files
        - ..._multi_equip.txt (gravity indicator by amenity), catchment area
        - ..._multi_zones.txt (gravity indicator by zone), accessibility area
        accessibility indicator with spatial and modal competition is in variable 'w_pop'
        """)
    def tr(self, string):
        return QCoreApplication.translate('MultimodalGravityIndicators', string)

