# -*- coding: utf-8 -*-

from qgis.PyQt.QtCore import QCoreApplication
from qgis.core import (QgsProcessingAlgorithm, QgsProcessingParameterFeatureSource,
                       QgsProcessingParameterFeatureSink, QgsFields, QgsFeature,
                       QgsProcessingException)


class CleanFieldsForGpkg(QgsProcessingAlgorithm):
    INPUT = "INPUT"
    OUTPUT = "OUTPUT"

    def tr(self, string):
        return QCoreApplication.translate("Processing", string)

    def createInstance(self):
        return CleanFieldsForGpkg()

    def name(self):
        # identifiant technique : ne pas traduire
        return "clean_fields_for_gpkg"

    def displayName(self):
        return self.tr("Clean fields for GPKG")

    def group(self):
        return self.tr("Utilities")

    def groupId(self):
        # identifiant technique : ne pas traduire
        return "Utilities"

    def shortHelpString(self):
        return self.tr(
            "Removes the 'fid' field and fields whose names differ only by case, "
            "so that the layer can be saved to a GeoPackage without conflicts."
        )

    def initAlgorithm(self, config=None):
        self.addParameter(
            QgsProcessingParameterFeatureSource(self.INPUT, self.tr("Input layer"))
        )
        self.addParameter(
            QgsProcessingParameterFeatureSink(self.OUTPUT, self.tr("Cleaned layer"))
        )

    def processAlgorithm(self, parameters, context, feedback):
        source = self.parameterAsSource(parameters, self.INPUT, context)
        if source is None:
            raise QgsProcessingException(self.invalidSourceError(parameters, self.INPUT))

        seen, keep, new_fields = set(), [], QgsFields()
        for i, f in enumerate(source.fields()):
            low = f.name().lower()
            if low == "fid" or low in seen:
                feedback.pushInfo(self.tr("Field ignored: {0}").format(f.name()))
                continue
            seen.add(low)
            keep.append(i)
            new_fields.append(f)

        sink, dest = self.parameterAsSink(
            parameters, self.OUTPUT, context, new_fields,
            source.wkbType(), source.sourceCrs())
        if sink is None:
            raise QgsProcessingException(self.invalidSinkError(parameters, self.OUTPUT))

        for feat in source.getFeatures():
            out = QgsFeature(new_fields)
            out.setGeometry(feat.geometry())
            out.setAttributes([feat.attributes()[i] for i in keep])
            sink.addFeature(out)
        return {self.OUTPUT: dest}