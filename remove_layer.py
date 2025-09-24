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
from qgis.core import QgsProcessingParameterVectorLayer, QgsProcessingParameterString
from qgis import processing
from qgis.PyQt.QtCore import QCoreApplication,QVariant


class RemoveLayer(QgsProcessingAlgorithm):

    def initAlgorithm(self, config: Optional[dict[str, Any]] = None):
        self.addParameter(QgsProcessingParameterString('vector_layer', self.tr('Vector layer'), multiLine=False, defaultValue=''))
    def processAlgorithm(self, parameters: dict[str, Any], context: QgsProcessingContext, model_feedback: QgsProcessingFeedback) -> dict[str, Any]:
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        feedback = QgsProcessingMultiStepFeedback(0, model_feedback)
        results = {}
        outputs = {}
        layer_name=self.parameterAsString('vector_layer')
        
        
        layers = QgsProject.instance().mapLayersByName(layer_name)

        if not layers:
            raise Exception(f"Erreur : aucune couche trouvée avec le nom {layer_name}")

        # Supprimer la couche du projet
        for layer in layers:
            QgsProject.instance().removeMapLayer(layer.id())

        return {'vector_layer':layer}

    def name(self) -> str:
        return 'RemoveLayer'

    def displayName(self) -> str:
        return self.tr('Remove layer')

    def group(self) -> str:
        return self.tr('Utilities')

    def groupId(self) -> str:
        return 'Utilities'
    
    def tr(self, string):
        return QCoreApplication.translate('RemoveLayer', string)

    def createInstance(self):
        return self.__class__()
