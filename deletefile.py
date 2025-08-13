"""
Model exported as python.
Name : Modèle
Group : 
With QGIS : 34401
"""

from typing import Any, Optional
from qgis.PyQt.QtCore import QCoreApplication
from qgis.core import QgsProcessing
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingContext
from qgis.core import QgsProcessingFeedback, QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterFile
from qgis import processing
import os

class DeleteFile(QgsProcessingAlgorithm):

    def initAlgorithm(self, config: Optional[dict[str, Any]] = None):
        self.addParameter(QgsProcessingParameterFile('file', self.tr('File'), behavior=QgsProcessingParameterFile.File, fileFilter=self.tr('All files (*.*)'), defaultValue=None))

    def processAlgorithm(self, parameters: dict[str, Any], context: QgsProcessingContext, model_feedback: QgsProcessingFeedback) -> dict[str, Any]:
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        

        fichier = self.parameterAsFile(parameters,'file',context)

        if os.path.exists(fichier):
            os.remove(fichier)
            model_feedback.setProgressText(self.tr("File ")+fichier+ self.tr(" deleted"))
        else:
            model_feedback.setProgressText(self.tr("The file ")+fichier+self.tr(" doesn't exist"))

        return {'deleted_file': fichier}

    def name(self) -> str:
        return self.tr('Delete file')
        
    def tr(self, string, context=''):
        if context == '':
            context = self.__class__.__name__
        return QCoreApplication.translate(context, string)

    def displayName(self) -> str:
        return self.tr('Delete file')

    def group(self) -> str:
        return self.tr('Utilities')

    def groupId(self) -> str:
        return 'Utilities'

    def createInstance(self):
        return self.__class__()
