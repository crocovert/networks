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

from osgeo import gdal
import numpy
import math
import sqlite3 as db
from qgis.core import QgsVectorLayer, QgsProject
from PyQt5.QtCore import QCoreApplication,QVariant
from qgis.core import *
from qgis.utils import *
from qgis.core import (QgsProcessing,
                       QgsFeatureSink,
                       QgsProcessingAlgorithm,
                       QgsProcessingParameterBand,
                       QgsProcessingParameterFeatureSource,
                       QgsProcessingParameterFeatureSink,
                       QgsProcessingParameterNumber,
                       QgsProcessingParameterBoolean,
                       QgsProcessingParameterString,
                       QgsProcessingParameterExtent,
                       QgsProcessingParameterField,
                       QgsProcessingParameterExpression,
                       QgsProcessingParameterFileDestination,
                       QgsSpatialIndex,
                       QgsGeometry,
                       QgsFeature
                       )
import codecs

class Routes(QgsProcessingAlgorithm):
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

    MUSLIW_TIMES='MUSLIW_TIMES'
    OUTPUT='OUTPUT'
    
    def initAlgorithm(self, config):
        """
        Here we define the inputs and output of the algorithm, along
        with some other properties.
        """

        self.addParameter(
            QgsProcessingParameterFile(
                self.MUSLIW_TIMES,
                self.tr('Musliw travel times'),
            )
        )

        self.addParameter(
            QgsProcessingParameterFeatureSink(
                self.OUTPUT,
                self.tr('Output'),
              
            )
        )            

        # We add a feature sink in which to store our processed features (this
        # usually takes the form of a newly created vector layer when the
        # algorithm is run in QGIS).
        

    def processAlgorithm(self, parameters, context, feedback):
        """
        Here is where the processing itself takes place.
        """
        
        fichier_temps= self.parameterAsFile(parameters, self.MUSLIW_TIMES, context)
        features={}
        fic_temps=open(fichier_temps)
        col_temps={}
        temps={}
        tij={}
        links=iface.activeLayer()

        champs=QgsFields()

        champs.append(QgsField('id_iti',QVariant.String))#1
        champs.append(QgsField('o',QVariant.String))#1
        champs.append(QgsField('ij',QVariant.String))#2
        champs.append(QgsField('ligne',QVariant.Int))#3
        champs.append(QgsField('numtrc',QVariant.Int))#4
        champs.append(QgsField('jour',QVariant.Int))#5
        champs.append(QgsField('heureo',QVariant.Double))#6
        champs.append(QgsField('heured',QVariant.Double))#7
        champs.append(QgsField('temps',QVariant.Double))#8
        champs.append(QgsField('tveh',QVariant.Double))#9
        champs.append(QgsField('tmap',QVariant.Double))#10
        champs.append(QgsField('tatt',QVariant.Double))#11
        champs.append(QgsField('ncorr',QVariant.Double))#13
        champs.append(QgsField('tatt1',QVariant.Double))#14
        champs.append(QgsField('cout',QVariant.Double))#15
        champs.append(QgsField('longueur',QVariant.Double))#16
        champs.append(QgsField('pole',QVariant.String))#17
        champs.append(QgsField('type',QVariant.String))#20
        champs.append(QgsField('toll',QVariant.Double))#21
        champs.append(QgsField('ti',QVariant.Double))#22



        (sortie,dest_id) = self.parameterAsSink(parameters, self.OUTPUT,context,champs, QgsWkbTypes.MultiLineString, links.crs()) 

        for i,j in enumerate(fic_temps):
            elem=j.replace('"',"_").split(";")
            if i==0:
                for k,l in enumerate(elem):
                    col_temps[l]=k
            else:
                temps[elem[col_temps["numtrc"]]]=elem
                tij[elem[col_temps["ij"]]]=elem

        if 'ij' in [j.name() for j in links.fields()]:
            index=QgsSpatialIndex()
            for i in links.getFeatures():
                index.insertFeature(i)
                features[i['ij']]=i

            feat=links.selectedFeatures()
                
            feats=[f for f in feat]
            if len(feats)>0:
                d=feats[0]['ij']


                for feat in feats:
                    d=feat['ij']
                    id_iti=d
                    if d in tij:
                        while int(tij[d][col_temps['precedent']])>0:
                            f=QgsFeature(champs)
                            liste=[id_iti]
                            liste.extend(tij[d][i] for i in [1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,20,21,22])
                            for t in [3,4,5,6,7,8,9,10,11,12,13,14,15,18,19]:
                                liste[t]=float(liste[t].replace(',','.'))
                            liste=liste[0:22]
                            f.setAttributes(liste)
                            
                            if tij[d][col_temps['ij']] in features:
                                f.setGeometry(features[d].geometry())
                                sortie.addFeature(f)
                            try:
                                d=temps[tij[d][col_temps['precedent']]][col_temps['ij']]
                            except:
                                break






        return {self.OUTPUT:dest_id}



    def name(self):
        """
        Returns the algorithm name, used for identifying the algorithm. This
        string should be fixed for the algorithm, and must not be localised.
        The name should be unique within each provider. Names should contain
        lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'routes'

    def displayName(self):
        """
        Returns the translated algorithm name, which should be used for any
        user-visible display of the algorithm name.
        """
        return self.tr('Routes')

    def group(self):
        """
        Returns the name of the group this algorithm belongs to. This string
        should be localised.
        """
        return self.tr('Analysis')

    def groupId(self):
        """
        Returns the unique ID of the group this algorithm belongs to. This
        string should be fixed for the algorithm, and must not be localised.
        The group id should be unique within each provider. Group id should
        contain lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'Analysis'

    

    def shortHelpString(self):
        return self.tr("""
        Display shortest paths from a selection of starting or ending arcs and a 
        a Musliw travel times files
		        
        Parameters:
            Mulsiw travel times: Musliw travel times file "*_temps.txt"
			Output: Output layer containing shortest paths traces
			
        """)

    def tr(self, string):
        return QCoreApplication.translate('Routes', string)

    def createInstance(self):
        return Routes()
