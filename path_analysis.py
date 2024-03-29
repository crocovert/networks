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

class PathAnalysis(QgsProcessingAlgorithm):
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

    ARCS='ARCS'
    IJ='IJ'
    FLOWS='FLOWS'
    ARC_TYPE='ARC_TYPE'
    BY_LINES='BY_LINES'
    ENCODE='ENCODE'
    OUTPUT='OUTPUT'
    PATHS_FILE='PATHS_FILE'
    
    def initAlgorithm(self, config):
        """
        Here we define the inputs and output of the algorithm, along
        with some other properties.
        """

        self.addParameter(
            QgsProcessingParameterVectorLayer(
                self.ARCS,
                self.tr('Arcs'),
            )
        )
        
        self.addParameter(
            QgsProcessingParameterFile(
                self.PATHS_FILE,
                self.tr('Result paths Musliw File'),
            )
        )
        
        self.addParameter(
            QgsProcessingParameterField(
                self.IJ,
                self.tr('ij'),
                parentLayerParameterName=self.ARCS
                )
        )
        self.addParameter(
            QgsProcessingParameterString(
                self.FLOWS,
                self.tr('Flows'),
                defaultValue="volau",
            )
        )
        self.addParameter(
            QgsProcessingParameterString(
                self.ARC_TYPE,
                self.tr('Arc Type'),
                defaultValue='type'
            )
        )
        self.addParameter(
            QgsProcessingParameterBoolean(
                self.BY_LINES,
                self.tr('By lines?'),
                defaultValue=False,
            )
        )
        self.addParameter(
            QgsProcessingParameterString(
                self.ENCODE,
                self.tr('Encoding'),
                defaultValue="utf_8_sig",
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
        links=self.parameterAsVectorLayer(parameters, self.ARCS, context)
        fichier_chemins=self.parameterAsFile(parameters, self.PATHS_FILE, context)
        ij=self.parameterAsFields(parameters,self.IJ,context)[0]
        volume=self.parameterAsString(parameters,self.FLOWS,context)
        type_arc=self.parameterAsString(parameters,self.ARC_TYPE,context)
        par_lignes=self.parameterAsString(parameters,self.BY_LINES,context)
        encodage=self.parameterAsString(parameters,self.ENCODE,context)
        
        aff=codecs.open(fichier_chemins,"r",encoding=encodage)
        champs={}
        valeurs=links.getFeatures()
        fij={}
        trafic={}
        od={}
        if par_lignes==True:
            champs2=QgsFields()
            champs2.append(QgsField("i",QVariant.String))
            champs2.append(QgsField("j",QVariant.String))
            champs2.append(QgsField("line",QVariant.String))
            champs2.append(QgsField("ij",QVariant.String))
            champs2.append(QgsField("volume",QVariant.Double))
            champs2.append(QgsField("type",QVariant.String))
        else:
            champs2=QgsFields()
            champs2.append(QgsField("i",QVariant.String))
            champs2.append(QgsField("j",QVariant.String))
            champs2.append(QgsField("ij",QVariant.String))
            champs2.append(QgsField("volume",QVariant.Double))
            champs2.append(QgsField("type",QVariant.String))
            
        (sortie,dest_id) = self.parameterAsSink(parameters, self.OUTPUT,context,champs2, QgsWkbTypes.MultiLineString, links.crs()) 
        for i,j in enumerate(valeurs):
            try:
                fij[j[ij]]=j
            except:
                fij[j['i']+'-'+j['j']]=j


        #filtre=iface.activeLayer().selectedFeatures()
        filtre=links.selectedFeatures()
                
        sel=[f['ij'] for f in filtre]




        for k,i in enumerate(aff):
            elements=i.strip("\r").strip("\n").split(";")
            if k==0:
                for ide, e in enumerate(elements):
                    champs[e.strip("\"").strip("\r").strip("\n")]=ide

            else:

                if par_lignes==True:
                    cle=[elements[champs["i"]].strip("\""),elements[champs["j"]].strip("\""),elements[champs["ligne"]].strip("\"")]
                else:
                    cle=[elements[champs["i"]].strip("\""),elements[champs["j"]].strip("\"")]

                volau=elements[champs[volume]].replace(",",".")
                type2=elements[champs[type_arc]]

                if elements[champs["id"]] not in od:
                    test_od=False
                    for trip in od:
                        for arc in od[trip]:
                            if arc[3] in sel:
                                test_od=True
                        if test_od==True:
                            for arc in od[trip]:
                                if par_lignes==True:

                                    if (arc[0],arc[1],arc[2]) not in trafic:
                                        trafic[(arc[0],arc[1],arc[2])]=(arc[0],arc[1],arc[2],arc[0]+'-'+arc[1],0,arc[5])
                                    trafic[(arc[0],arc[1],arc[2])]=(arc[0],arc[1],arc[2],arc[0]+'-'+arc[1],trafic[(arc[0],arc[1],arc[2])][4]+arc[4],trafic[(arc[0],arc[1],arc[2])][5])
                                else:
                                    if (arc[0],arc[1]) not in trafic:
                                        trafic[(arc[0],arc[1])]=(arc[0],arc[1],arc[2],arc[0]+'-'+arc[1],0,arc[5])
                                    trafic[(arc[0],arc[1])]=(arc[0],arc[1],arc[2],arc[0]+'-'+arc[1],trafic[(arc[0],arc[1])][4]+arc[4],trafic[(arc[0],arc[1])][5])


              
                    od.clear()
                    test_od=False
                    od[elements[champs["id"]]]=[]
                od[elements[champs["id"]]].append([elements[champs["i"]].strip("\""),elements[champs["j"]].strip("\""),elements[champs["ligne"]].strip("\""),elements[champs["i"]].strip("\"")+'-'+elements[champs["j"]].strip("\""), float(volau),type2])

        aff.close()     
        test_od=False
        
        for trip in od:
            for arc in od[trip]:
                if arc[3] in sel:
                    test_od=True
            if test_od==True:
                for arc in od[trip]:
                    if par_lignes==True:

                        if (arc[0],arc[1],arc[2]) not in trafic:
                            trafic[(arc[0],arc[1],arc[2])]=(arc[0],arc[1],arc[2],arc[0]+'-'+arc[1],0,arc[5])
                        trafic[(arc[0],arc[1],arc[2])]=(arc[0],arc[1],arc[2],arc[0]+'-'+arc[1],trafic[(arc[0],arc[1],arc[2])][4]+arc[4],trafic[(arc[0],arc[1],arc[2])][5])
                    else:
                        if (arc[0],arc[1]) not in trafic:
                            trafic[(arc[0],arc[1])]=(arc[0],arc[1],arc[2],arc[0]+'-'+arc[1],0,arc[5])
                        trafic[(arc[0],arc[1])]=(arc[0],arc[1],arc[2],arc[0]+'-'+arc[1],trafic[(arc[0],arc[1])][4]+arc[4],trafic[(arc[0],arc[1])][5])



        for i in trafic:
            if trafic[i][3] in fij:
                f=QgsFeature()
                f.setGeometry(fij[trafic[i][3]].geometry())
                if par_lignes==True:
                    f.setAttributes([trafic[i][j] for j in range(6)])
                else:
                    f.setAttributes([trafic[i][j] for j in [0,1,3,4,5]])
                sortie.addFeature(f)
                


        return {self.OUTPUT:dest_id}



    def name(self):
        """
        Returns the algorithm name, used for identifying the algorithm. This
        string should be fixed for the algorithm, and must not be localised.
        The name should be unique within each provider. Names should contain
        lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'path_analysis'

    def displayName(self):
        """
        Returns the translated algorithm name, which should be used for any
        user-visible display of the algorithm name.
        """
        return self.tr('Path analysis')

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
        Intercepts the demand that use on the selected arcs
        The result is a layer that containes arcs from trips using these arcs
        with the selected demand
		        
        Parameters:
            arcs: network layer 
			result paths Musliw file: Result file from Musliw computation containing detailed shortest paths (*_chemins.txt)
            ij: arc ID (combining i-node and j-node ex: m1456-m3256
            Flows: field containing flow values
            arc type: field containig arc_type
            by line: if selected the total flows are computed by lines instead of by arc
            Enconding: Encoding of the Reuslt Musliw file utf_8_sig normally
            output: layer of the slect link analysis
			
        """)

    def tr(self, string):
        return QCoreApplication.translate('PathAnalysis', string)

    def createInstance(self):
        return PathAnalysis()
