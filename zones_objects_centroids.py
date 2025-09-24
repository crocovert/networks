"""
Model exported as python.
Name : Zones_objects_centroids
Group : Cerema
With QGIS : 34003
"""
import numpy as np
from qgis.PyQt.QtCore import QCoreApplication,QVariant
from qgis.core import (
    QgsVectorLayer,
    QgsFeature,
    QgsPointXY,
    QgsGeometry,
    QgsField,
    QgsFeatureSink,
    QgsProcessingFeedback,
    QgsSpatialIndex,
    QgsFields,
    QgsWkbTypes,
    QgsProcessingFeatureSourceDefinition)
    
from qgis.core import QgsProcessing
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterVectorLayer
from qgis.core import QgsProcessingParameterFeatureSource
from qgis.core import QgsProcessingParameterFeatureSink
from qgis.core import QgsProcessingParameterField
import processing


class Zones_objects_centroids(QgsProcessingAlgorithm):

    def initAlgorithm(self, config=None):
        self.addParameter(QgsProcessingParameterFeatureSource('zones2', self.tr('Zones'), types=[QgsProcessing.TypeVectorPolygon], defaultValue=None))
        self.addParameter(QgsProcessingParameterField('zone_id', self.tr('Zone_Id'), type=QgsProcessingParameterField.Any, parentLayerParameterName='zones2', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterVectorLayer('objects', self.tr('Objects'), types=[QgsProcessing.TypeVectorAnyGeometry], defaultValue=None))
        self.addParameter(QgsProcessingParameterFeatureSink('output',self.tr('Output'),QgsProcessing.TypeVectorPoint))
    def processAlgorithm(self, parameters, context, model_feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        feedback = QgsProcessingMultiStepFeedback(0, model_feedback)

        poly_layer=self.parameterAsVectorLayer(parameters,'zones2',context)
        point_layer=self.parameterAsVectorLayer(parameters,'objects',context)
        zone_id=self.parameterAsFields(parameters,'zone_id',context)[0]
        
        
        crs = poly_layer.crs()
        #output_layer = QgsVectorLayer(f"Point?crs={crs.authid()}", "Mean_Points", "memory")
        champs=QgsFields()
        champs.append(QgsField('zone_id',QVariant.String))

        #provider = output_layer.dataProvider()
        (table_sortie,dest_id) = self.parameterAsSink(parameters, 'output',context,champs, QgsWkbTypes.Point, poly_layer.sourceCrs())
        
        # Ajouter un champ pour l'ID du polygone
        #provider.addAttributes([QgsField("zone_id", QVariant.Int)])
        #output_layer.updateFields()
        
        # Créer un index spatial pour la couche de points
        point_index = QgsSpatialIndex(point_layer.getFeatures())
        nb=poly_layer.featureCount()
        
        # Parcourir les polygones
        for i,poly_feature in enumerate(poly_layer.getFeatures()):
            model_feedback.setProgress(i*100/nb)
            poly_geom = poly_feature.geometry()
            poly_id = poly_feature[str(zone_id)]
            
            # Trouver les points intersectant le polygone
            #point_ids = point_index.intersects(poly_geom.boundingBox())
            point_ids = point_index.nearestNeighbor(poly_geom)
            points_in_poly = []
            pt_x=0
            pt_y=0
            pt_s=0
            for point_id in point_ids:
                point_feature = point_layer.getFeature(point_id)
                if poly_geom.contains(point_feature.geometry()):
                    pt_x+=point_feature.geometry().centroid().asPoint().x()
                    pt_y+=point_feature.geometry().centroid().asPoint().y()
                    pt_s+=1
                    #points_in_poly.append(point_feature.geometry().asPoint())
            
            # Créer le point de sortie
            out_feature = QgsFeature()
            if pt_s>0:
                # Calculer la moyenne des coordonnées
                out_point = QgsPointXY(pt_x/pt_s, pt_y/pt_s)
            else:
                # Utiliser le centroïde si aucun point
                out_point = poly_geom.centroid().asPoint()
            
            # Ajouter le point à la couche de sortie
            out_feature.setGeometry(QgsGeometry.fromPointXY(out_point))
            out_feature.setAttributes([poly_id])
            table_sortie.addFeature(out_feature)
        
        # Sauvegarder la couche de sortie
        
        return {'output': dest_id}




        return results

    def name(self):
        return 'Zones_objects_centroids'

    def displayName(self):
        return self.tr('Zones/objects centroids')
        
    def tr(self, string):
        return QCoreApplication.translate('Zones_objects_centroids', string)

    def group(self):
        return self.tr('Network')

    def groupId(self):
        return 'Network'

    def createInstance(self):
        return Zones_objects_centroids()
