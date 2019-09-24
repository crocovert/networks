# -*- coding: utf-8 -*-

"""
/***************************************************************************
 Networks
                                 A QGIS plugin
 Networks
 Generated by Plugin Builder: http://g-sherman.github.io/Qgis-Plugin-Builder/
                              -------------------
        begin                : 2018-02-26
        copyright            : (C) 2018 by Patrick Palmier
        email                : patrick.palmier@cerema.fr
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
"""

__author__ = 'Patrick Palmier'
__date__ = '2018-02-26'
__copyright__ = '(C) 2018 by Patrick Palmier'

# This will get replaced with a git SHA1 when you do a git archive

__revision__ = '$Format:%H$'

from PyQt5.QtCore import QCoreApplication,QVariant
from qgis.core import *
from qgis.utils import *
from qgis.core import (QgsProcessing,
                       QgsFeatureSink,
                       QgsProcessingAlgorithm,
                       QgsProcessingParameterFeatureSource,
                       QgsProcessingParameterFeatureSink,
                       QgsProcessingParameterNumber,
                       QgsProcessingParameterBoolean,
                       QgsProcessingParameterString,
                       QgsProcessingParameterExtent,
                       QgsProcessingParameterField,
                       QgsProcessingParameterExpression,
                       QgsProcessingParameterFileDestination)
import codecs

class ArcsTi(QgsProcessingAlgorithm):
    """
    This is an example algorithm that takes a vector layer and
    creates a new identical one.

    It is meant to be used as an example of how to create your own
    algorithms and explain methods and variables used to do it. An
    algorithm like this will be available in all elements, and there
    is not need for additional work.

    All Processing algorithms should extend the QgsProcessingAlgorithm
    class.
    """

    # Constants used to refer to parameters and outputs. They will be
    # used when calling the algorithm from another algorithm, or when
    # calling from the QGIS console.

    NETWORK = 'NETWORK'
    INODE = 'INODE'
    JNODE ='JNODE'
    CONCATENATOR='CONCATENATOR'
    OUTPUT='OUTPUT'

    def initAlgorithm(self, config):
        """
        Here we define the inputs and output of the algorithm, along
        with some other properties.
        """

        self.addParameter(
            QgsProcessingParameterFeatureSource(
                self.NETWORK,
                self.tr('Road network'),
                [QgsProcessing.TypeVectorLine]
            )
        )

        self.addParameter(
            QgsProcessingParameterField(
                self.INODE,
                self.tr('i-node'),
                parentLayerParameterName=self.NETWORK,
                type=QgsProcessingParameterField.String
            )
        )

        self.addParameter(
            QgsProcessingParameterField(
                self.JNODE,
                self.tr('j-node'),
                parentLayerParameterName=self.NETWORK,
                type=QgsProcessingParameterField.String
            )
        )
        
  
        self.addParameter(
            QgsProcessingParameterString(
                self.CONCATENATOR,
                self.tr('Node ID concatenator'),
                "-"
            )
        )
        # We add a feature sink in which to store our processed features (this
        # usually takes the form of a newly created vector layer when the
        # algorithm is run in QGIS).
        self.addParameter(
            QgsProcessingParameterFeatureSink(
                self.OUTPUT,
                self.tr('Output layer'),
            )
        )
        

    def processAlgorithm(self, parameters, context, feedback):
        """
        Here is where the processing itself takes place.
        """

        # Retrieve the feature source and sink. The 'dest_id' variable is used
        # to uniquely identify the feature sink, and must be included in the
        # dictionary returned by the processAlgorithm function.
        reseau = self.parameterAsSource(parameters, self.NETWORK, context)
        i=self.parameterAsFields(parameters,self.INODE,context)[0]
        j=self.parameterAsFields(parameters,self.JNODE,context)[0]
        concatenateur=self.parameterAsString(parameters,self.CONCATENATOR,context)
        
        champs2=QgsFields()
        champs2.append(QgsField("i",QVariant.String))
        champs2.append(QgsField("j",QVariant.String))
        champs2.append(QgsField("ij",QVariant.String))
        
        (sortie,dest_id) = self.parameterAsSink(parameters, self.OUTPUT,context,champs2, QgsWkbTypes.MultiLineString, reseau.sourceCrs())
        for f in reseau.getFeatures():
            a=QgsFeature()
            a.setGeometry(f.geometry())
            a.setAttributes([unicode(f[i]),unicode(f[j]),unicode(f[i])+concatenateur+unicode(f[j])])
            sortie.addFeature(a)
        

        return {self.OUTPUT:dest_id}


    def name(self):
        """
        Returns the algorithm name, used for identifying the algorithm. This
        string should be fixed for the algorithm, and must not be localised.
        The name should be unique within each provider. Names should contain
        lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'ti_arcs'

    def displayName(self):
        """
        Returns the translated algorithm name, which should be used for any
        user-visible display of the algorithm name.
        """
        return self.tr('Create individual networks arcs')

    def group(self):
        """
        Returns the name of the group this algorithm belongs to. This string
        should be localised.
        """
        return self.tr('Network')

    def groupId(self):
        """
        Returns the unique ID of the group this algorithm belongs to. This
        string should be fixed for the algorithm, and must not be localised.
        The group id should be unique within each provider. Group id should
        contain lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'Network'

    def tr(self, string):
        return QCoreApplication.translate('ArcsTi', string)
        
    def shortHelpString(self):
        return self.tr("""
        Generates a arcs layer for individual transport mode similarly to arcs layers from GTFS Import
        in order to concatenate every netwrok element for multimodal routing visualization
		
        Parameters:
            road network: road network layer (linear objects)
			i-node: i_node id field
            j-node: j-node id field
            Node id concatenator: a character or a string to build ij field by concatenating i-node and j-node field 
            output layer: name of teh result output layer
            
            
        """)

    def createInstance(self):
        return ArcsTi()