"""GUI part: drop-down list of the subdirectories of @musliw_path.

The list is read again each time the widget is created, so every opening
of the algorithm or model dialog shows the current content of the directory.
"""
from qgis.gui import (
    QgsAbstractProcessingParameterWidgetWrapper,
    QgsGui,
    QgsProcessingAbstractParameterDefinitionWidget,
    QgsProcessingParameterWidgetFactoryInterface,
)
from qgis.PyQt.QtWidgets import QComboBox, QLabel, QVBoxLayout

from .directory_list import TYPE_ID, MusliwSubdirParameter, Translatable, subdirectories


class MusliwSubdirWidgetWrapper(Translatable, QgsAbstractProcessingParameterWidgetWrapper):
    def __init__(self, parameter, widget_type, parent=None):
        super().__init__(parameter, widget_type, parent)
        self._combo = None

    def createWidget(self):
        self._combo = QComboBox()
        names = subdirectories()
        if names:
            self._combo.addItems(names)
        else:
            self._combo.setToolTip(
                self.tr("@musliw_path is empty or does not point to a directory")
            )
        self._combo.currentIndexChanged.connect(
            lambda _index: self.widgetValueHasChanged.emit(self)
        )
        return self._combo

    def setWidgetValue(self, value, context):
        if self._combo is not None and isinstance(value, str):
            index = self._combo.findText(value)
            if index >= 0:
                self._combo.setCurrentIndex(index)

    def widgetValue(self):
        if self._combo is None:
            return None
        return self._combo.currentText() or None


class MusliwSubdirDefinitionWidget(Translatable, QgsProcessingAbstractParameterDefinitionWidget):
    """Configuration panel of the input in the model designer."""

    def __init__(self, context, widgetContext, definition=None, algorithm=None, parent=None):
        super().__init__(context, widgetContext, definition, algorithm, parent)
        layout = QVBoxLayout()
        layout.addWidget(QLabel(self.tr("Drop-down list of the subdirectories of @musliw_path.")))
        self.setLayout(layout)

    def createParameter(self, name, description, flags):
        # The designer passes the common properties; the subclass must apply them.
        parameter = MusliwSubdirParameter(name, description)
        parameter.setFlags(flags)
        return parameter


class MusliwSubdirWidgetFactory(QgsProcessingParameterWidgetFactoryInterface):
    def parameterType(self):
        return TYPE_ID

    def createWidgetWrapper(self, parameter, widget_type):
        return MusliwSubdirWidgetWrapper(parameter, widget_type)

    def createParameterDefinitionWidget(
        self, context, widgetContext, definition=None, algorithm=None
    ):
        return MusliwSubdirDefinitionWidget(context, widgetContext, definition, algorithm)

    def compatibleParameterTypes(self):
        return [TYPE_ID, "string"]

    def compatibleOutputTypes(self):
        return ["outputString"]

    def compatibleDataTypes(self, *args):
        # *args: the signature differs between QGIS versions
        return []


_factory = None


def register_gui():
    """Call in initGui, after register_core()."""
    global _factory
    if _factory is None:
        factory = MusliwSubdirWidgetFactory()
        if QgsGui.processingGuiRegistry().addParameterWidgetFactory(factory):
            _factory = factory


def unregister_gui():
    global _factory
    if _factory is not None:
        # The registry deletes the factory on the C++ side.
        QgsGui.processingGuiRegistry().removeParameterWidgetFactory(_factory)
        _factory = None
