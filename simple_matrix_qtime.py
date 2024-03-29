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

import datetime
from PyQt5.QtCore import QCoreApplication,QDateTime,QTime
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
                       QgsProcessingParameterFileDestination,
                       QgsProcessingParameterDateTime,
                       QgsSpatialIndex)
import codecs

class SimpleMatrix(QgsProcessingAlgorithm):
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

    NODES = 'NODES'
    NUM = 'NUM'
    START_POINT='START_POINT'
    END_POINT='END_POINT'
    DEMAND='DEMAND'
    DAY='DAY'
    TIME='TIME'
    DEPARTURE='DEPARTURE'
    OUTPUT='OUTPUT'
    WRITE_MODE='WRITE_MODE'
    
    def initAlgorithm(self, config):
        """
        Here we define the inputs and output of the algorithm, along
        with some other properties.
        """

        self.addParameter(
            QgsProcessingParameterFeatureSource(
                self.NODES,
                self.tr('Nodes'),
                [QgsProcessing.TypeVectorPoint]
            )
        )
        
        self.addParameter(
            QgsProcessingParameterField(
                self.NUM,
                self.tr('Node ID'),
                parentLayerParameterName=self.NODES,
            )
        )
        self.addParameter(
            QgsProcessingParameterPoint(
                self.START_POINT,
                self.tr('Trip start'),
            )
        )
        self.addParameter(
            QgsProcessingParameterPoint(
                self.END_POINT,
                self.tr('Trip end'),
            )
        )
        self.addParameter(
            QgsProcessingParameterNumber(
                self.DEMAND,
                self.tr('Demand'),
                QgsProcessingParameterNumber.Double,
                defaultValue=1.0,
            )
        )
        self.addParameter(
            QgsProcessingParameterNumber(
                self.DAY,
                self.tr('Day'),
                QgsProcessingParameterNumber.Integer,
                defaultValue=1,
            )
        )
        self.addParameter(
            QgsProcessingParameterDateTime(
                self.TIME,
                self.tr('Time'),
                type=QgsProcessingParameterDateTime.Time,
                defaultValue=QDateTime.currentDateTime()
                
            )
        )
        self.addParameter(
            QgsProcessingParameterEnum(
                self.DEPARTURE,
                self.tr("Departure/Arrival"),
                [self.tr('Departure'),self.tr('Arrival')],
                defaultValue=0
            )
        )

        # We add a feature sink in which to store our processed features (this
        # usually takes the form of a newly created vector layer when the
        # algorithm is run in QGIS).
        self.addParameter(
            QgsProcessingParameterFileDestination(
                self.OUTPUT,
                self.tr('Musliw matrix'),
                '*.txt'
            )
        )
        self.addParameter(
            QgsProcessingParameterEnum(
                self.WRITE_MODE,
                self.tr('Write Mode'),
                [self.tr('Write'),self.tr('Append')],
                defaultValue=0
                
            )
        )
        

    def processAlgorithm(self, parameters, context, feedback):
        """
        Here is where the processing itself takes place.
        """

        # Retrieve the feature source and sink. The 'dest_id' variable is used
        # to uniquely identify the feature sink, and must be included in the
        # dictionary returned by the processAlgorithm function.
        nodes = self.parameterAsSource(parameters, self.NODES, context)
        numero = self.parameterAsFields(parameters, self.NUM,context)[0]
        pt_depart=self.parameterAsPoint(parameters,self.START_POINT,context)
        pt_arrivee=self.parameterAsPoint(parameters,self.END_POINT,context)
        nb_passagers=self.parameterAsDouble(parameters,self.DEMAND,context)
        jour=self.parameterAsInt(parameters,self.DAY,context)
        heure=self.parameterAsDateTime(parameters,self.TIME,context)
        depart=self.parameterAsEnum(parameters,self.DEPARTURE,context)
        fichier_matrice = self.parameterAsFileOutput(parameters, self.OUTPUT,context)
        write_mode=self.parameterAsEnum(parameters,self.WRITE_MODE,context)
        
        # Compute the number of steps to display within the progress bar and
        # get features from source
        ##a=fenetre.split(",")
        ##fenetre2=QgsRectangle(float(a[0]),float(a[2]),float(a[1]),float(a[3]))
        if depart==0:
            sens='d'
        else:
            sens='a'


        index=QgsSpatialIndex(nodes.getFeatures())
        dep=pt_depart
        arr=pt_arrivee
        inode=index.nearestNeighbor(dep,1)
        jnode=index.nearestNeighbor(arr,1)
        feat=nodes.getFeatures(request=QgsFeatureRequest(inode[0]))
        features=[f for f in feat]
        d=features[0].attribute(numero)
        feat=nodes.getFeatures(request=QgsFeatureRequest(jnode[0]))
        features=[f for f in feat]
        a=features[0].attribute(numero)
        u=QTime(0,0)
        horaire=heure.toString('hh:mm:ss')
        h=u.secsTo(heure.time())/60
        if write_mode==1:
            sortie=open(fichier_matrice,"a")
        else:
            sortie=open(fichier_matrice,"w")
        sortie.write(";".join([unicode(d),unicode(a),unicode(nb_passagers),unicode(jour),unicode(h),sens])+"\n")
        sortie.close()
        return {self.OUTPUT:fichier_matrice}


    def name(self):
        """
        Returns the algorithm name, used for identifying the algorithm. This
        string should be fixed for the algorithm, and must not be localised.
        The name should be unique within each provider. Names should contain
        lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'musliw_simple_matrix'

    def displayName(self):
        """
        Returns the translated algorithm name, which should be used for any
        user-visible display of the algorithm name.
        """
        return self.tr('Musliw simple matrix')

    def group(self):
        """
        Returns the name of the group this algorithm belongs to. This string
        should be localised.
        """
        return self.tr('Matrix')

    def groupId(self):
        """
        Returns the unique ID of the group this algorithm belongs to. This
        string should be fixed for the algorithm, and must not be localised.
        The group id should be unique within each provider. Group id should
        contain lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'Matrix'

    def tr(self, string):
        return QCoreApplication.translate('SimpleMatrix', string)
        
    def shortHelpString(self):
        return self.tr("""
        Generates a Musliw matrix from clicking on 2 nodes to define an origin(1st point)-destination(2nd point)
		
        Parameters:
            Nodes: nodes layer (corresponding to the routing arc layer )
			Node id: Field that contains the node Id
            Trip start: Start point (origin)
            Trips end: End point (destination)
            Demand: number of passengers for assignment
            Day: number of the day in the calendar (1 first day of the calendar)
            Time : Time of earliest departure or latest arrival
            Departure/Arrival: Departure (from Start point to end point forward) - Arrival (from end point to start point backward)
            Write mode: Write erase filname if exists/ Append add trip definition at the end of the file 
            Musliw matrix: Musliw matrix name (text file with ";" separator
            
            
        """)

    def createInstance(self):
        return SimpleMatrix()
