"""
Model exported as python.
Name : Modèle
Group : 
With QGIS : 33803
"""

from qgis.core import QgsProcessing
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterFile
from qgis.core import QgsProcessingParameterString
from qgis.core import QgsProcessingParameterBoolean
from qgis.core import QgsProcessingParameterFileDestination
from qgis.core import QgsProcessingParameterEnum
from PyQt5.QtCore import QCoreApplication
import processing
import io
import os


class Musliw_update(QgsProcessingAlgorithm):

    def initAlgorithm(self, config=None):
        self.addParameter(QgsProcessingParameterFile('musliw_network_file', self.tr('Musliw network file'), behavior=QgsProcessingParameterFile.File, fileFilter='Fichier texte (*.txt)', defaultValue=None))
        self.addParameter(QgsProcessingParameterEnum('network_field', self.tr('Network field'), ['inode','jnode','time','length','line','service','start','end','calendar','label','type','toll']))
        self.addParameter(QgsProcessingParameterString('network_selection', self.tr('Network selection'), multiLine=False, defaultValue='1'))
        self.addParameter(QgsProcessingParameterBoolean('selection_filter', self.tr('Selection filter?'), defaultValue=True))
        self.addParameter(QgsProcessingParameterString('expression', self.tr('Expression'), multiLine=False, defaultValue='0'))
        self.addParameter(QgsProcessingParameterFileDestination('UpdatedNetworkFile', self.tr('Updated network file'), fileFilter='*.txt', createByDefault=True, defaultValue=None))

    def processAlgorithm(self, parameters, context, model_feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        feedback = QgsProcessingMultiStepFeedback(1, model_feedback)
        results = {}
        outputs = {}
        
        # indicateurs par OD
        network=parameters['musliw_network_file']
        champ=parameters['network_field']
        test_filter=parameters['selection_filter']
        network_file=io.open(network,encoding='utf8')
        output_file=io.open(parameters['UpdatedNetworkFile'],'w')
        f=dict(zip(['inode','jnode','time','length','line','service','start','end','calendar','label','type','toll'],[(0,'float'),(1,'float'),(2,'float'),(3,'float'),(4,'float'),(5,'float')
                ,(6,'float'),(7,'float'),(8,'str'),(9,'str'),(10,'str'),(11,'float')]))
        
        
        
        for ligne in network_file:
            if ligne is not None:
                e=ligne.strip('"').strip("'").split(';')
                filtre=parameters['network_filter']
                expr=parameters['expression']
                res=0
                for v in f:
                    if v in filtre:
                        filtre=filtre.replace(v,f[v][1]+'(e['+str(f[v][0])+'])')
                #print(filtre)
                try:
                    res=eval(filtre)
                except:
                    print(self.tr('Syntax error'))
                if res==True:
                    for v in f:
                        if v in expr:
                            expr=expr.replace(v,f[v][1]+'(e['+str(f[v][0])+'])')
                    #print(expr)
                    try:
                        res=eval(expr)
                    except:
                        print(self.tr('Syntax error'))
                        break
                if test_filter==True and res==True:
                    e[parameters['network_field']]= str(res)
                    output_file.write(';'.join(e))
        network_file.close()
        output_file.close()
        
        #outputs['IndicateursParOd'] = processing.run('Networks:indicators_by_OD', alg_params, context=context, feedback=feedback, is_child_algorithm=True)
        #results['UpdatedNetworkFile'] = outputs['IndicateursParOd']['FICHIER_RESULTAT']
        return champ

    def name(self):
        return 'musliw_network_update'

    def displayName(self):
        return self.tr('Musliw network update')

    def group(self):
        return self.tr('Network')

    def groupId(self):
        return 'Network'
    
    def tr(self, string):
        return QCoreApplication.translate('Musliw_update', string)
        
    def shortHelpString(self):
        return self.tr("""
        The script allow to update a Musliw network file with a expression and to apply simultenaously a filter 
        
        Parameters:
        Musliw network file: the Musliw network file to update
        Network Field: The field to be updated
        Network selection: Expression to select the records to update
        Selection filter: If true, the script will generate an updated Musliw network file on selected records only, if false it will generate a updated Musliw network file with all records
        Expression: the update expression (formula)
        Update network file: the output network file
        """)

    def createInstance(self):
        return Musliw_update()
