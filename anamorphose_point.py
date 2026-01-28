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
from qgis.core import QgsProcessingParameterExpression
from qgis.core import QgsCoordinateTransform
from qgis.core import QgsCoordinateReferenceSystem
from qgis.core import QgsVectorDataProvider
from qgis.core import QgsExpression
from qgis.core import QgsFeatureRequest
from qgis.core import QgsProject
from qgis.core import QgsExpression
from qgis.core import QgsSpatialIndex
from qgis.core import QgsExpressionContextUtils
from qgis.core import QgsRaster
from qgis.core import QgsFeature
from qgis.core import QgsGeometry
from qgis.core import QgsPointXY

from qgis import processing


class PointAnamorphosis(QgsProcessingAlgorithm):

    def initAlgorithm(self, config: Optional[dict[str, Any]] = None):
        self.addParameter(QgsProcessingParameterPoint('anamorphosis_centre', self.tr("Center"), defaultValue=''))
        self.addParameter(QgsProcessingParameterVectorLayer('vector_layer', self.tr('Vector layer')))
        self.addParameter(QgsProcessingParameterExpression('time', self.tr('Variable'), 100, 'vector_layer'))
        self.addParameter(QgsProcessingParameterFeatureSink('anamorphosis', self.tr('point_anamorphosis'), type=QgsProcessing.TypeVectorPolygon, createByDefault=True, defaultValue=None))

    def processAlgorithm(self, parameters, context, feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model

        vecteur= self.parameterAsVectorLayer(parameters,'vector_layer',context)
        centre= self.parameterAsPoint(parameters,'anamorphosis_centre',context)
        echelle=QgsExpression(self.parameterAsExpression(parameters,'time',context))
        
        source_crs = vecteur.sourceCrs()

        src=QgsProject.instance().crs()
        dest=source_crs
        xtr=QgsCoordinateTransform(src,dest,QgsProject.instance())
        dep=xtr.transform(centre)
        
        modeContexte=self.createExpressionContext(parameters,context)
        modeContexte.appendScopes(QgsExpressionContextUtils.globalProjectLayerScopes(vecteur))
        echelle.prepare(modeContexte)


        index=QgsSpatialIndex(vecteur.getFeatures())

        inode=index.nearestNeighbor(dep,1)

        feat=vecteur.getFeatures(request=QgsFeatureRequest(inode[0]))
        features=[f for f in feat]
        d=features[0]
        modeContexte.setFeature(d)
        valeur=echelle.evaluate(modeContexte)
        


        
        modeContexte=self.createExpressionContext(parameters,context)
        modeContexte.appendScopes(QgsExpressionContextUtils.globalProjectLayerScopes(vecteur))
        echelle.prepare(modeContexte)


        (output,dest_id) = self.parameterAsSink(parameters, 'anamorphosis',context,vecteur.fields(), vecteur.wkbType(), vecteur.sourceCrs())

        feats=vecteur.getFeatures()

        #point_c=QgsPointXY(centre)
        point_c=QgsPointXY(d.geometry().centroid().asPoint())
        centre=point_c
        value_c=valeur

        
        for f in feats:
            geom = QgsGeometry(f.geometry())  # copie de sécurité

            i = 0
            modeContexte.setFeature(f)
            value=echelle.evaluate(modeContexte)
            v=QgsPointXY(f.geometry().centroid().asPoint())
            
            r = math.sqrt((v.x() - centre.x())**2 + (v.y() - centre.y())**2)
            if r == 0:
                new_feat = QgsFeature(vecteur.fields())
                new_feat.setAttributes(f.attributes())
                new_feat.setGeometry(geom)

                output.addFeature(new_feat)
                i += 1
                continue

            sin_theta = (v.y() - centre.y()) / r
            cos_theta = (v.x() - centre.x()) / r
                
            point=QgsPointXY(v)
            #value, success = raster.dataProvider().sample(QgsPointXY(v), 1)

            #print(centre.x(),centre.y(),value, value_c)
            if value is not None:
                new_x = centre.x() + (value-value_c) * cos_theta
                new_y = centre.y() + (value-value_c) * sin_theta
                    
                geom2=QgsGeometry.fromPointXY(QgsPointXY(new_x,new_y))
                
                new_feat = QgsFeature(vecteur.fields())
                new_feat.setAttributes(f.attributes())
                new_feat.setGeometry(geom2)

            

                output.addFeature(new_feat)



        
        return {self.tr('anamorphose_point'):dest_id }

    def name(self) -> str:
        return 'point_anamorphosis'

    def displayName(self) -> str:
        return self.tr('Point anamorphosis')

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
        Generates an anamorphosis from a layer of points
        Clone a vector layer shifting coordinates based on field values
        The user has to click on the canvas to determine the centre of the anamorphosis
        
        
        Parameters:
            Centre: Click on the canvas to set the center
            Vector layer: vector layer (points)
            Variable: Field (numeric) of the anamorphosis. Could be an expression
            anamorphosis: name of the anamorphosis layer (output)""")
    def createInstance(self):
        return PointAnamorphosis()
