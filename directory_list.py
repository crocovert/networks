"""Core part: @musliw_path variable, custom parameter and algorithm.

No qgis.gui import here, so this module stays usable from qgis_process.
"""
import os

from qgis.core import (
    QgsApplication,
    QgsExpressionContext,
    QgsExpressionContextUtils,
    QgsProcessingAlgorithm,
    QgsProcessingException,
    QgsProcessingOutputString,
    QgsProcessingParameterString,
    QgsProcessingParameterType,
)
from qgis.PyQt.QtCore import QCoreApplication

VARIABLE = "musliw_path"
TYPE_ID = "musliw_subdir"


class Translatable:
    """Provide tr() to classes that are not QObjects.

    The context is the class name, which is the context pylupdate assigns
    to self.tr() calls, so extracted strings match at runtime.
    """

    def tr(self, message):
        return QCoreApplication.translate(type(self).__name__, message)


def musliw_root():
    """Return the value of @musliw_path (project overrides global), or ''."""
    ctx = QgsExpressionContext()
    ctx.appendScopes(QgsExpressionContextUtils.globalProjectLayerScopes(None))
    value = ctx.variable(VARIABLE)
    return str(value) if value else ""


def subdirectories(root=None):
    """Return the direct subdirectory names of root, sorted case-insensitively."""
    root = musliw_root() if root is None else root
    if not root or not os.path.isdir(root):
        return []
    try:
        with os.scandir(root) as it:
            names = [e.name for e in it if e.is_dir() and not e.name.startswith(".")]
    except OSError:
        return []
    return sorted(names, key=str.lower)


class MusliwSubdirParameter(Translatable, QgsProcessingParameterString):
    """String parameter shown as a drop-down list of @musliw_path subdirectories."""

    def __init__(self, name, description=None, defaultValue=None):
        if description is None:
            description = self.tr("Musliw subdirectory")
        super().__init__(name, description, defaultValue)

    def type(self):
        return TYPE_ID

    def clone(self):
        copy = MusliwSubdirParameter(self.name(), self.description(), self.defaultValue())
        copy.setFlags(self.flags())
        copy.setMetadata(self.metadata())
        return copy


class MusliwSubdirParameterType(Translatable, QgsProcessingParameterType):
    """Declare the parameter type to the Processing registry (models, designer)."""

    def create(self, name):
        return MusliwSubdirParameter(name)

    def description(self):
        return self.tr("Subdirectory of @musliw_path, chosen from a drop-down list.")

    def name(self):
        return self.tr("Musliw subdirectory")

    def id(self):
        return TYPE_ID

    def pythonImportString(self):
        return f"from {__name__} import MusliwSubdirParameter"

    def className(self):
        return "MusliwSubdirParameter"


class ChooseMusliwDirectory(Translatable, QgsProcessingAlgorithm):
    """Validate the chosen subdirectory and return its name and full path."""

    DIRECTORY = "DIRECTORY"
    NAME = "NAME"
    PATH = "PATH"

    def name(self):
        return "choose_musliw_directory"

    def displayName(self):
        return self.tr("Choose a musliw directory")

    def group(self):
        return self.tr("Utilities")

    def groupId(self):
        return "Utilities"

    def createInstance(self):
        return ChooseMusliwDirectory()

    def initAlgorithm(self, config=None):
        self.addParameter(
            MusliwSubdirParameter(self.DIRECTORY, self.tr("Musliw subdirectory"))
        )
        self.addOutput(QgsProcessingOutputString(self.NAME, self.tr("Directory name")))
        self.addOutput(QgsProcessingOutputString(self.PATH, self.tr("Full path")))

    def processAlgorithm(self, parameters, context, feedback):
        root = musliw_root()
        if not root or not os.path.isdir(root):
            raise QgsProcessingException(
                self.tr("@{variable} is empty or does not point to a directory: '{path}'").format(
                    variable=VARIABLE, path=root
                )
            )

        name = self.parameterAsString(parameters, self.DIRECTORY, context).strip()
        # The membership test also blocks any path traversal ("..", "/", etc.)
        if name not in subdirectories(root):
            raise QgsProcessingException(
                self.tr("'{name}' is not a subdirectory of {root}").format(name=name, root=root)
            )

        path = os.path.join(root, name)
        feedback.pushInfo(self.tr("Chosen directory: {path}").format(path=path))
        return {self.NAME: name, self.PATH: path}


_registered_type = None


def register_core():
    """Call before models are loaded (initGui or initProcessing)."""
    global _registered_type
    if _registered_type is None:
        _registered_type = MusliwSubdirParameterType()
        QgsApplication.processingRegistry().addParameterType(_registered_type)


def unregister_core():
    global _registered_type
    if _registered_type is not None:
        QgsApplication.processingRegistry().removeParameterType(_registered_type)
        _registered_type = None
