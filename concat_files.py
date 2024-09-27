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
                       QgsProcessingParameterEnum,
                       QgsProcessingParameterBoolean,
                       QgsProcessingParameterString,
                       QgsProcessingParameterExtent,
                       QgsProcessingParameterField,
                       QgsProcessingParameterExpression,
                       QgsProcessingParameterFileDestination,
                       QgsProcessingParameterVectorLayer,
                       QgsProcessingParameterFileDestination,
                       QgsProcessingParameterFile,
                       QgsProcessingParameterMultipleLayers)
import codecs
import os
import io

class ConcatNetworkFiles(QgsProcessingAlgorithm):
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
    
    INPUT = 'INPUT'
    DESTINATION='DESTINATION'
    HEADER='HEADER'

    def initAlgorithm(self, config):
        """
        Here we define the inputs and output of the algorithm, along
        with some other properties.
        """
        
        self.addParameter(
            QgsProcessingParameterMultipleLayers(
                self.INPUT,
                self.tr('Network files to concatenate'),
                layerType= QgsProcessing.TypeFile
            )
        )
        self.addParameter(
            QgsProcessingParameterBoolean(
                self.HEADER,
                self.tr('Column names on first row?'),
                defaultValue=False
            )
        )        
        self.addParameter(
            QgsProcessingParameterFileDestination(
                self.DESTINATION,
                self.tr('Global network'),
                fileFilter='*.txt',
                defaultValue='*.txt'
            )
        )

        # usually takes the form of a newly created vector layer when the
        # algorithm is run in QGIS).

        

    def processAlgorithm(self, parameters, context, feedback):
        """
        Here is where the processing itself takes place.
        """

        # Retrieve the feature source and sink. The 'dest_id' variable is used
        # to uniquely identify the feature sink, and must be included in the
        # dictionary returned by the processAlgorithm function.
        #couche = self.parameterAsSource(parameters, self.INPUT, context)

        source = self.parameterAsFileList(parameters, self.INPUT, context)
        fichier_musliw=self.parameterAsFileOutput(parameters, self.DESTINATION, context)
        header=self.parameterAsBool(parameters, self.HEADER,context)
        sortie=open(fichier_musliw,"w")
        for k,nom_fichier in enumerate(source):
            #print(nom_fichier)


            fichier=io.open(nom_fichier,encoding="utf-8")
            if header==True and k>0:
                fichier.readline()
            for fiche in fichier:
                sortie.write(fiche)
            fichier.close()
        sortie.close()
        return {self.DESTINATION:fichier_musliw}


    def name(self):
        """
        Returns the algorithm name, used for identifying the algorithm. This
        string should be fixed for the algorithm, and must not be localised.
        The name should be unique within each provider. Names should contain
        lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'concatenate_network_files'

    def displayName(self):
        """
        Returns the translated algorithm name, which should be used for any
        user-visible display of the algorithm name.
        """
        return self.tr('Concatenate network files')

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
        return QCoreApplication.translate('ConcatNetworkFiles', string)
	
    def shortHelpString(self):
        return self.tr("""
        Concatenate Musliw networks elements,
		timetable based network elements, indivudal modes elements and connector elements in order to generate a global multimodal network as input for Musliw tool
        
        Parameters:
            network elements files : Musliw networks elements files
			global network: name of the global network file (txt)
            column names on first row?: Must be checked if column names are on first row
        """)

    def createInstance(self):
        return ConcatNetworkFiles()
