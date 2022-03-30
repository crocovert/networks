"""
Model exported as python.
Name : GravityIndicator
Group : Analysis
With QGIS : 32003
"""

from PyQt5.QtCore import QCoreApplication,QVariant
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
import io



class GravityIndicators(QgsProcessingAlgorithm):

    def initAlgorithm(self, config):
        self.addParameter(QgsProcessingParameterFile('MusliwOutputNodesFile', self.tr('Musliw Output Nodes File'), behavior=QgsProcessingParameterFile.File, fileFilter='Tous les fichiers (*.*)', defaultValue=None))
        self.addParameter(QgsProcessingParameterString('Amenityfield', self.tr('Amenity'),  defaultValue='volau'))
        self.addParameter(QgsProcessingParameterNumber('T0', 'T0', type=QgsProcessingParameterNumber.Double, minValue=0, defaultValue=20))
        self.addParameter(QgsProcessingParameterFeatureSource('Socioeconomicdata', self.tr('Socioeconomic data'), types=[QgsProcessing.TypeVectorPolygon], defaultValue=None))
        self.addParameter(QgsProcessingParameterField('ZoneId', self.tr('Zone Id'), type=QgsProcessingParameterField.Any, parentLayerParameterName='Socioeconomicdata', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterField('Popfield', self.tr('Population'), type=QgsProcessingParameterField.Numeric, parentLayerParameterName='Socioeconomicdata', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterNumber('Numberoftimeperiods', self.tr('Number of time periods'), type=QgsProcessingParameterNumber.Double, defaultValue=1))
        self.addParameter(QgsProcessingParameterFileDestination('Output', self.tr('Output'), fileFilter='*.txt', createByDefault=True, defaultValue=None))

    def processAlgorithm(self, parameters, context, model_feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        feedback = QgsProcessingMultiStepFeedback(4, model_feedback)
        results = {}
        outputs = {}
        # Matrice Musliw simple

        
        fichier_temps=self.parameterAsFile(parameters, 'MusliwOutputNodesFile', context)
        amenity= self.parameterAsString(parameters, 'AmenityField', context)
        resultat=self.parameterAsFileOutput(parameters,'Output',context)
        t0=self.parameterAsDouble(parameters,'T0',context)
        nb_horaires=self.parameterAsInt(parameters,'Numberoftimeperiods',context)
        pop_table=self.parameterAsSource(parameters,'Socioeconomicdata',context)
        zone=self.parameterAsFields(parameters,'ZoneId',context)[0]
        pop=self.parameterAsFields(parameters,'Popfield',context)[0]
        





        carres={}
        equip={}
        cols={}
        zones_equip={}
        equipements={}
        zones={}
        
        grille=pop_table
        for i in grille.getFeatures():
            z=i[zone]
            p=i[pop]
            if z not in carres:
                carres[z]={}
            carres[z]['pop']=float(p)

        feedback.setCurrentStep(1)
        if feedback.isCanceled():
            return {}
            
            
        tpond=0
        pond=0
        with io.open(fichier_temps,encoding='utf_8_sig') as fich_temps:
            for i,od in enumerate(fich_temps):
                if i==0:
                    e=od.strip('\n').strip('\r').split(";")
                    for g,f in enumerate(e):
                        cols[f]=g
                    print(cols)
                else:
                    od=od.replace(',','.')
                    e=od.strip('\n').strip('\r').split(";")
                    #zone=e[cols['ij']].split('-')[0]
                    try:
                        tmsum=1/(float(e[cols['temps']])-float(e[cols['tatt1']]))
                    except:
                        print(e)
                    equip=e[cols['o']]
                    zone=e[cols['numero']]
                    if  equip not in equipements:
                        equipements[equip]={}
                        equipements[equip]['nb']=1
                        equipements[equip]['pop']=carres[zone]['pop']
                        equipements[equip]['w_n']=2**(-(((1/(tmsum/nb_horaires))/t0)**2))
                        equipements[equip]['w_pop']=carres[zone]['pop']*(2**(-(((1/(tmsum/nb_horaires))/t0)**2)))
                        equipements[equip]['w_pop2']=0
                        equipements[equip]['vol']=float(e[cols['volau']])
                        
                    else:
                        equipements[equip]['nb']+=1
                        equipements[equip]['pop']+=carres[zone]['pop']
                        equipements[equip]['w_n']+=2**(-((1/(tmsum/nb_horaires))/t0)**2)
                        equipements[equip]['w_pop']+=carres[zone]['pop']*(2**(-((1/(tmsum/nb_horaires))/t0)**2))
                
                    tpond+=(1/(tmsum/nb_horaires))*carres[zone]['pop']*(2**(-((1/(tmsum/nb_horaires))/t0)**2))*float(e[cols['volau']])
                    pond+=carres[zone]['pop']*(2**(-((1/(tmsum/nb_horaires))/t0)**2))*float(e[cols['volau']])

        fich_temps.close()     
        del(fich_temps)

        log=open("grav.log","w")
        log.write("Pour t0="+str(t0)+" tmoy="+str(round(tpond/pond,2)))
        log.close()
        gc.collect()

        feedback.setCurrentStep(2)
        if feedback.isCanceled():
            return {}



        with open(fichier_temps) as fich_temps:
            for i,od in enumerate(fich_temps):
                if i==0:
                    e=od.strip('\n').strip('\r').split(";")
                    for g,f in enumerate(e):
                        cols[f]=g
                else:
                    od=od.replace(',','.')
                    e=od.strip('\n').strip('\r').split(";")
                    #zone=e[cols['ij']].split('-')[0]
                    tmsum=1/(float(e[cols['temps']])-float(e[cols['tatt1']]))
                    zone=e[cols['numero']]
                    equip=e[cols['o']]
                    if zone not in zones:
                        zones[zone]={}
                        zones[zone]['nb']=1
                        zones[zone]['w_n']=(equipements[equip]['vol']*(2**(-(((1/(tmsum/nb_horaires))/t0)**2)))/equipements[equip]['w_n'])
                        zones[zone]['n_tot']=(equipements[equip]['vol']*(2**(-(((1/(tmsum/nb_horaires))/t0)**2))))
                        if equipements[equip]['w_pop']>0:
                            zones[zone]['w_pop']=(equipements[equip]['vol']*(2**(-(((1/(tmsum/nb_horaires))/t0)**2)))/equipements[equip]['w_pop'])
                        else:
                            zones[zone]['w_pop']=0
                    else:
                        try:
                            zones[zone]['nb']+=1
                        except:
                            print(zone,zones[zone])
                        zones[zone]['w_n']+=(equipements[equip]['vol']*(2**(-(((1/(tmsum/nb_horaires))/t0)**2)))/equipements[equip]['w_n'])
                        if equipements[equip]['w_pop']>0:
                            zones[zone]['w_pop']+=(equipements[equip]['vol']*(2**(-(((1/(tmsum/nb_horaires))/t0)**2)))/equipements[equip]['w_pop'])
                        zones[zone]['n_tot']+=(equipements[equip]['vol']*(2**(-(((1/(tmsum/nb_horaires))/t0)**2))))

        fich_temps.close()     
        del(fich_temps)
        gc.collect()

        feedback.setCurrentStep(3)
        if feedback.isCanceled():
            return {}

        """with open(resultat+"_synthese_zone_equip.txt","w") as fich_zonesequip:
            for  k,v in zones_equip.items():
                for k2,v2 in v.items():
                    v2['stdev']=max((((v2['tsum2'])/v2['n'])-(v2['tsum']/v2['n'])**2),0)**0.5
                    fich_zonesequip.write(";".join([str(s) for s in [k,k2,v2['tmin'],v2['tsum']/v2['n'],1/(v2['tmsum']/nb_horaires),v2['tmax'],len(v2['heureo']),len(v2['heured']),v2["stdev"],v2['ncorr']/v2['n'],v2['pole']]])+"\n")
        fich_zonesequip.close()"""

                      

        with open(fichier_temps) as fich_temps:
            for i,od in enumerate(fich_temps):
                if i==0:
                    e=od.strip('\n').strip('\r').split(";")
                    for g,f in enumerate(e):
                        cols[f]=g
                else:
                    od=od.replace(',','.')
                    e=od.strip('\n').strip('\r').split(";")
                    #zone=e[cols['ij']].split('-')[0]
                    tmsum=1/(float(e[cols['temps']])-float(e[cols['tatt1']]))
                    zone=e[cols['numero']]
                    equip=e[cols['o']]
                    try:
                        equipements[equip]['w_pop2']+=carres[zone]['pop']*((2**(-((1/(tmsum/nb_horaires))/t0)**2))/zones[zone]['n_tot'])
                    except:
                        equipements[equip]['w_pop2']+=0
                    

        feedback.setCurrentStep(4)
        if feedback.isCanceled():
            return {}



        fich_zones=open(os.path.splitext(resultat)[0]+"_zones.txt","w")
        for k,i in enumerate(zones.items()):
            if k==0:
                fich_zones.write("zone;"+";".join([str(l) for l in i[1]])+"\n")
            fich_zones.write(i[0]+";"+";".join([str(l) for l in i[1].values()])+"\n")
        fich_zones.close()



        fich_equip=open(os.path.splitext(resultat)[0]+"_equip.txt","w")
        for k,i in enumerate(equipements.items()):
            if k==0:
                fich_equip.write("equip;"+";".join([str(l) for l in i[1]])+"\n")
            fich_equip.write(i[0]+";"+";".join([str(k) for k in i[1].values()])+"\n")
        fich_equip.close()
                    

        del(zones)
        del(carres)
        del(equip)
        del(cols)
        del(equipements)

            
    


        return {'zones':os.path.splitext(resultat)[0]+"_zones.txt",'equip':os.path.splitext(resultat)[0]+"_equip.txt"}

    def name(self):
        return 'GravityIndicators'

    def displayName(self):
        return self.tr('Gravity Indicators')

    def group(self):
        return self.tr('Analysis')

    def groupId(self):
        return 'Analysis'

    def createInstance(self):
        return GravityIndicators()

    def shortHelpString(self):
        return self.tr("""
        The algorithm performs a gravity indicator of accessibility based on a decay function 
        (1 for travel time=0, 0.5 for travel time = t0, 0 for infinite travel time
        - Musliw Output node file: The name of the Musliw output node file "..._noeuds.txt" (This output need to be activated in Musliw paramaters)
        - Amenity: Attraction field ( as Number of job, numbers of doctors, numbers of school spaces)
        - T0: The value of T0 for which the decay function weighting is 0.5
        - Socioeconomic data: Name of the table which contains emission field (e.g zones or grid cells with population for example)
        - Zone ID: zone Id
        - Population: Emission field as bumber of inhabitants (for example)
        - Number of time period: Number of time periods for calculations (for a same origin destination)
        - Output: generic output file name (txt)
        
        The algorithm produces 2 result files
        - ..._equip.txt (gravity indicator by amenity), catchment area
        - ..._zones.txt (gravity indicator by zone), accessibility area
        
        """)
    def tr(self, string):
        return QCoreApplication.translate('GravityIndicators', string)

