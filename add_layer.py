"""
Model exported as python.
Name : Networks
Group : Miscellaneous
With QGIS : 34200
"""

from typing import Any, Optional

from qgis.core import QgsProcessing,QgsVectorLayer, QgsProject
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingContext
from qgis.core import QgsProcessingFeedback, QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterVectorLayer
from qgis import processing
from qgis.PyQt.QtCore import QCoreApplication,QVariant

class AddLayer(QgsProcessingAlgorithm):

    def initAlgorithm(self, config: Optional[dict[str, Any]] = None):
        self.addParameter(QgsProcessingParameterVectorLayer('vector_layer', 'Vector layer', types=[QgsProcessing.TypeVectorAnyGeometry], defaultValue=None))

    def processAlgorithm(self, parameters: dict[str, Any], context: QgsProcessingContext, model_feedback: QgsProcessingFeedback) -> dict[str, Any]:
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        feedback = QgsProcessingMultiStepFeedback(0, model_feedback)
        results = {}
        outputs = {}
        layer=self.parameterAsVectorLayer(parameters, 'vector_layer', context)
        
        
        if not layer.isValid():
            raise Exception("Erreur : la couche n'a pas pu être chargée.")

        QgsProject.instance().addMapLayer(layer)

        return 'vector_layer':layer

    def name(self) -> str:
        return 'Networks'

    def displayName(self) -> str:
        return 'Networks'

    def group(self) -> str:
        return 'Miscellaneous'

    def groupId(self) -> str:
        return ''

    def tr(self, string):
        return QCoreApplication.translate('AddLayer', string)

    def createInstance(self):
        return self.__class__()
