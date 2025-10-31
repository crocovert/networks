"""
Model exported as python.
Name : Mint network
Group : Network
With QGIS : 32602
"""

from qgis.PyQt.QtCore import QCoreApplication,QVariant
from qgis.core import *
from qgis.utils import *
from qgis.core import QgsProcessing
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterVectorLayer
from qgis.core import QgsProcessingParameterFileDestination
from qgis.core import QgsProcessingParameterExpression

import processing
import io

class MintNetwork(QgsProcessingAlgorithm):

    def initAlgorithm(self, config=None):
        self.addParameter(QgsProcessingParameterVectorLayer('network', self.tr('Network(Qgis)'), types=[QgsProcessing.TypeVectorLine], defaultValue=None))
        self.addParameter(QgsProcessingParameterFileDestination('MintNetworkFile', self.tr('Mint network file'), fileFilter='*.txt', createByDefault=True, defaultValue=None))
        self.addParameter(QgsProcessingParameterExpression('direction', self.tr('direction'), parentLayerParameterName='network', defaultValue=''))
        self.addParameter(QgsProcessingParameterExpression('allow_alighting', self.tr('allow alighting'), parentLayerParameterName='network', defaultValue=''))
        self.addParameter(QgsProcessingParameterExpression('allow_boarding', self.tr('allow boarding'), parentLayerParameterName='network', defaultValue=''))
        self.addParameter(QgsProcessingParameterExpression('vehicle_capacity', self.tr('vehicle capacity'), parentLayerParameterName='network', defaultValue=''))
        self.addParameter(QgsProcessingParameterExpression('headway', self.tr('headway'), parentLayerParameterName='network', defaultValue=''))
        self.addParameter(QgsProcessingParameterExpression('travel_time', self.tr('travel time'), parentLayerParameterName='network', defaultValue=''))
        self.addParameter(QgsProcessingParameterExpression('i2', self.tr('i'), parentLayerParameterName='network', defaultValue=''))
        self.addParameter(QgsProcessingParameterExpression('j2', self.tr('j'), parentLayerParameterName='network', defaultValue=''))
        self.addParameter(QgsProcessingParameterExpression('line2', self.tr('line'), parentLayerParameterName='network', defaultValue=''))

    def processAlgorithm(self, parameters, context, model_feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        feedback = QgsProcessingMultiStepFeedback(1, model_feedback)
        results = {}
        outputs = {}
        tableau=self.parameterAsVectorLayer(parameters,'network', context)
        
        
        sortie=parameters['MintNetworkFile']
        fich_sortie=io.open(sortie,'w',encoding='utf-8')
        
        
        formuleContexte=self.createExpressionContext(parameters,context)
        formuleContexte.appendScopes(QgsExpressionContextUtils.globalProjectLayerScopes(tableau))
        v0=QgsExpression(parameters['direction'])
        v0.prepare(formuleContexte)
        v1=QgsExpression(parameters['allow_alighting'])
        v1.prepare(formuleContexte)
        v2=QgsExpression(parameters['allow_boarding'])
        v2.prepare(formuleContexte)
        v3=QgsExpression(parameters['vehicle_capacity'])
        v3.prepare(formuleContexte)
        v4=QgsExpression(parameters['headway'])
        v4.prepare(formuleContexte)
        v5=QgsExpression(parameters['travel_time'])
        v5.prepare(formuleContexte)
        v6=QgsExpression(parameters['i2'])
        v6.prepare(formuleContexte)
        v7=QgsExpression(parameters['j2'])
        v7.prepare(formuleContexte)
        v8=QgsExpression(parameters['line2'])
        v8.prepare(formuleContexte)
        
        reseau=tableau.getFeatures()

        
        for f in reseau:
            formuleContexte.setFeature(f)
            sens=v0.evaluate(formuleContexte)
            if str(sens)=='1':
                ligne=[v6.evaluate(formuleContexte),
                        v7.evaluate(formuleContexte),
                        v8.evaluate(formuleContexte),
                        v5.evaluate(formuleContexte),
                        v4.evaluate(formuleContexte),
                        v3.evaluate(formuleContexte),
                        v2.evaluate(formuleContexte),
                        v1.evaluate(formuleContexte)]
                if ligne[4]!=NULL:
                    fich_sortie.write(';'.join([str(s) for s in ligne])+'\n')
            
        fich_sortie.close()

        # Mint parameters

        results['MintNetworkFile'] = parameters['MintNetworkFile']
        return results

    def name(self):
        return 'MintNetwork'

    def displayName(self):
        return self.tr('Mint network')

    def group(self):
        return self.tr('Network')

    def groupId(self):
        return 'Network'

    def tr(self, string):
        return QCoreApplication.translate('MintNetwork', string)

    def shortHelpString(self):
        return self.tr("""
        Write a Mint network file (text file with ";" as delimiter) required for a Mint assignment
        Required 
        network: Layer that contains information about i,j line, travel times and headway information
        i: initial node Id
        j: final node Id
        line: line Id
        travel time: arc travel time
        headway: Interval between two consecutive vehicles 
        capacity: number of seats of the vehicle
        allowboarding: 1 if boarding is allowed, 0 otherwise
        alowalighting; 1 if alighting is allowed, 0 otherwise
        """)


    def createInstance(self):
        return MintNetwork()
