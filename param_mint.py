"""
Model exported as python.
Name : Mint parameters
Group : Computations
With QGIS : 32602
"""

from qgis.PyQt.QtCore import QCoreApplication,QVariant
from qgis.core import *
from qgis.utils import *
from qgis.core import QgsProcessing
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterNumber
from qgis.core import QgsProcessingParameterBoolean
from qgis.core import QgsProcessingParameterFileDestination
import processing
import io

class MintParameters(QgsProcessingAlgorithm):

    def initAlgorithm(self, config=None):
        self.addParameter(QgsProcessingParameterNumber('waiting_weight', self.tr('waiting weight'), type=QgsProcessingParameterNumber.Double, defaultValue=1))
        self.addParameter(QgsProcessingParameterNumber('boarding_time', self.tr('boarding time'), type=QgsProcessingParameterNumber.Double, defaultValue=2))
        self.addParameter(QgsProcessingParameterNumber('boarding_weight', self.tr('boarding weight'), type=QgsProcessingParameterNumber.Double, defaultValue=3))
        self.addParameter(QgsProcessingParameterNumber('walking_weight', self.tr('walking weight'), type=QgsProcessingParameterNumber.Double, defaultValue=1.5))
        self.addParameter(QgsProcessingParameterBoolean('output_strategies', self.tr('output strategies?'), defaultValue=False))
        self.addParameter(QgsProcessingParameterNumber('algorithm_parameter', self.tr('algorithm parameter'), type=QgsProcessingParameterNumber.Double, defaultValue=10))
        self.addParameter(QgsProcessingParameterFileDestination('output',self.tr('Mint parameters file'), fileFilter='*.txt', createByDefault=True, defaultValue=None))

    def processAlgorithm(self, parameters, context, model_feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        feedback = QgsProcessingMultiStepFeedback(1, model_feedback)
        results = {}
        outputs = {}
        sortie=parameters['output']
        fich_param=io.open(sortie,'w',encoding='utf-8')
        fich_param.write(str(parameters['waiting_weight'])+'\n')
        fich_param.write(str(parameters['boarding_time'])+'\n')
        fich_param.write(str(parameters['boarding_weight'])+'\n')
        fich_param.write(str(parameters['walking_weight'])+'\n')
        fich_param.write(str(parameters['output_strategies'])+'\n')
        fich_param.write(str(parameters['algorithm_parameter'])+'\n')
        fich_param.close()
        
        results['output']=sortie
        return results

    def name(self):
        return 'mint_parameters'

    def displayName(self):
        return self.tr('Mint parameters')

    def group(self):
        return self.tr('Computations')

    def groupId(self):
        return 'Computations'
    
    def tr(self, string):
        return QCoreApplication.translate('MintParameters', string)

    def shortHelpString(self):
        return self.tr("""
        Write a Mint parameters file required for a Mint assignment
        Parameters:
            Waiting weight : waiting time weight
            Boarding time: boarding time
            Boarding weight; boarding weight
            Walking weight: auxiliary transit weight
            Output strategies: If checked, Mint will print detailed strategies
            Algorithm parameter: Algorithm parameter 
            Mint parameter file : the result Mint parameter file that will be written
        """)


    def createInstance(self):
        return MintParameters()
