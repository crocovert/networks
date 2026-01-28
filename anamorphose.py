"""
Model exported as python.
Name : Anamorphose géographique
Group : Cerema
With QGIS : 34406
"""
import math
from typing import Any, Optional
from qgis.PyQt.QtCore import QCoreApplication,QVariant
from qgis.core import QgsProcessing
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingContext
from qgis.core import QgsProcessingFeedback, QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterPoint
from qgis.core import QgsProcessingParameterFeatureSource
from qgis.core import QgsProcessingParameterVectorLayer
from qgis.core import QgsProcessingParameterRasterLayer
from qgis.core import QgsProcessingParameterFeatureSink
from qgis.core import QgsProcessingParameterNumber
from qgis.core import QgsCoordinateTransform
from qgis.core import QgsCoordinateReferenceSystem
from qgis.core import QgsVectorDataProvider
from qgis.core import QgsProject
from qgis.core import QgsRaster
from qgis.core import QgsFeature
from qgis.core import QgsGeometry
from qgis.core import QgsPointXY

from qgis import processing


class GeographicAnamorphosis(QgsProcessingAlgorithm):

    def initAlgorithm(self, config: Optional[dict[str, Any]] = None):
        #self.addParameter(QgsProcessingParameterPoint('centre_de_lanamorphose', "Centre de l'anamorphose", defaultValue=''))
        self.addParameter(QgsProcessingParameterVectorLayer('vector_layer', self.tr('Vector layer')))
        self.addParameter(QgsProcessingParameterRasterLayer('raster_layer', self.tr('Raster layer'), defaultValue=None))
        self.addParameter(QgsProcessingParameterNumber('scale', self.tr('Scale'), defaultValue=60))
        self.addParameter(QgsProcessingParameterFeatureSink('anamorphosis', self.tr('Anamorphosis'), type=QgsProcessing.TypeVectorPolygon, createByDefault=True, defaultValue=None))

    def processAlgorithm(self, parameters, context, feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model

        vecteur= self.parameterAsVectorLayer(parameters,'vector_layer',context)
        raster= self.parameterAsRasterLayer(parameters,'raster_layer',context)
        #centre= self.parameterAsPoint(parameters,'centre_de_lanamorphose',context)
        echelle=self.parameterAsDouble(parameters,'scale',context)

        
        source_crs = vecteur.sourceCrs()
        target_crs = raster.crs()

        transform = QgsCoordinateTransform(source_crs, target_crs, QgsProject.instance())
        
        

        (output,dest_id) = self.parameterAsSink(parameters, 'anamorphosis',context,vecteur.fields(), vecteur.wkbType(), vecteur.sourceCrs())

        feats=vecteur.getFeatures()

        #point_c=QgsPointXY(centre)
        point_c=vecteur.extent().center()
        centre=point_c
        
        res_centre=raster.dataProvider().identify(point_c,QgsRaster.IdentifyFormatValue)
        value_c=res_centre.results().get(1)
        if res_centre.isValid() and value_c is not None:
        
            for f in feats:
                geom = QgsGeometry(f.geometry())  # copie de sécurité

                i = 0
                for k,v in enumerate(geom.vertices()):

                    r = math.sqrt((v.x() - centre.x())**2 + (v.y() - centre.y())**2)
                    if r == 0:
                        i += 1
                        continue

                    sin_theta = (v.y() - centre.y()) / r
                    cos_theta = (v.x() - centre.x()) / r
                    
                    point=QgsPointXY(v)
                    #value, success = raster.dataProvider().sample(QgsPointXY(v), 1)
                    results = raster.dataProvider().identify(point,QgsRaster.IdentifyFormatValue)
                    
                    if not results.isValid():
                        i += 1
                        continue

                    #print(results.results())
                    if results.results().get(1)is not None:
                        value=results.results()[1]*echelle
                        new_x = centre.x() + (value-value_c) * cos_theta
                        new_y = centre.y() + (value-value_c) * sin_theta
                    
                        geom.moveVertex(new_x, new_y, k)  # ✅ INDEX ENTIER

                        i += 1
                            
                
                new_feat = QgsFeature(vecteur.fields())
                new_feat.setAttributes(f.attributes())
                new_feat.setGeometry(geom)

                

                output.addFeature(new_feat)



        
        return {self.tr('anamorphosis'):dest_id }

    def name(self) -> str:
        return 'ana_geo'

    def displayName(self) -> str:
        return self.tr('Geographic anamorphosis')

    def group(self) -> str:
        return self.tr('Analysis')

    def groupId(self) -> str:
        return 'Analysis'
        
    def tr(self, string, context=''):
        if context == '':
            context = self.__class__.__name__
        return QCoreApplication.translate(context, string)
        
    def shortHelpString(self):
        return self.tr("""
        Generates a geographic anamorphosis of a vector layer
        Clone a vector layer shifting coordinates based on raster value 
        The center of the anamorphois if the center of the vector layer extent
        
        
        Parameters:
            Vector layer: Vector layer that will be cloned and anamorphosed
            Raster layer: The raster layer where to pick values to move vertices coordinates 
            Scale: Scale factor for vertices coordinates changes
            Anamorphosis: name of the anamorphosis layer (output)""")

    def createInstance(self):
        return GeographicAnamorphosis()
