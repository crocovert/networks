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

from PyQt5.QtCore import QCoreApplication, QVariant
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
import io

class ShiftLines(QgsProcessingAlgorithm):
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
    IJ='IJ'
    TYPE='TYPE'
    VOLUME='VOLUME'
    LIGNE='LIGNE'
    SHIFT='SHIFT'
    


    def initAlgorithm(self, config):
        """
        Here we define the inputs and output of the algorithm, along
        with some other properties.
        """
        nom_ij="i+'-'+j"
        self.addParameter(
            QgsProcessingParameterFeatureSource(
                self.INPUT,
                self.tr('Network'),
                [QgsProcessing.TypeVectorLine]
            )
        )
        

        self.addParameter(
            QgsProcessingParameterExpression(
                self.IJ,
                self.tr('ij'),
                parentLayerParameterName=self.INPUT,
                defaultValue=nom_ij
               
                
            )
        )

        self.addParameter(
            QgsProcessingParameterField(
                self.LIGNE,
                self.tr('Line'),
                parentLayerParameterName=self.INPUT,
                type=QgsProcessingParameterField.String,
            )
        )
        
        self.addParameter(
            QgsProcessingParameterExpression(
                self.VOLUME,
                self.tr('Quantitative variable'),
                parentLayerParameterName=self.INPUT
            )
        )
        
        self.addParameter(
            QgsProcessingParameterExpression(
                self.SHIFT,
                self.tr('Shift variable'),
                parentLayerParameterName=self.INPUT
   
            )
        )
        # We add a feature sink in which to store our processed features (this
        # usually takes the form of a newly created vector layer when the
        # algorithm is run in QGIS).


    def processAlgorithm(self, parameters, context, feedback):
        """
        Here is where the processing itself takes place.
        """

        # Retrieve the feature source and sink. The 'dest_id' variable is used
        # to uniquely identify the feature sink, and must be included in the
        # dictionary returned by the processAlgorithm function.
        input= self.parameterAsSource(parameters, self.INPUT, context)
        lines_data= self.parameterAsVectorLayer(parameters, self.INPUT, context)
        ij_exp=QgsExpression(self.parameterAsExpression(parameters,self.IJ,context))
        id_ligne=self.parameterAsFields(parameters,self.LIGNE,context)[0]
        volume=QgsExpression(self.parameterAsExpression(parameters,self.VOLUME,context))
        decalage=self.parameterAsExpression(parameters,self.SHIFT,context).strip("'").strip("\"")
        
        champs=lines_data.fields()
        noms_champs=[]
        for f in champs:
            noms_champs.append(f.name())
        
        
        lines_data.startEditing()
        lines_data.beginEditCommand(self.tr("add field ")+decalage)
        if decalage not in noms_champs:
            lines_data.dataProvider().addAttributes([QgsField(decalage,QVariant.Double)])
        lines_data.updateFields()
        
            
        ijContexte=self.createExpressionContext(parameters,context, input)
        ij_exp.prepare(ijContexte)
        vContexte=self.createExpressionContext(parameters,context, input)
        volume.prepare(vContexte)

        lines=input
        pr=lines_data.dataProvider()

        decalages={}
        for i1 in lines.getFeatures():
            ijContexte.setFeature(i1)
            ij=ij_exp.evaluate(ijContexte)
            vContexte.setFeature(i1)
            variable_quanti=volume.evaluate(vContexte)
            id=i1[id_ligne]
            nij=ij
            nb=variable_quanti
            if nij not in decalages:
                decalages[nij]={}
            if id not in decalages[nij]:
                decalages[nij][id]=0
            decalages[nij][id]+=nb

        resultat={}
        for j1 in decalages:
            tri=sorted(decalages[j1].items(),key=lambda x:x[0],reverse=False)
            res={}
            tot=0
            for j2 in tri:
                res[j2[0]]=tot
                tot+=j2[1]
            resultat[j1]=res


        for i1 in lines_data.getFeatures():
            id=i1[id_ligne]
            ijContexte.setFeature(i1)
            ij=ij_exp.evaluate(ijContexte)
            nij=ij
            lines_data.changeAttributeValue(i1.id(), pr.fieldNameMap()[decalage],resultat[nij][id])
        lines_data.commitChanges()
        
        
        

        return {self.INPUT: decalage}


    def name(self):
        """
        Returns the algorithm name, used for identifying the algorithm. This
        string should be fixed for the algorithm, and must not be localised.
        The name should be unique within each provider. Names should contain
        lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'shift_lines'

    def displayName(self):
        """
        Returns the translated algorithm name, which should be used for any
        user-visible display of the algorithm name.
        """
        return self.tr('Shift lines')

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

    def tr(self, string):
        return QCoreApplication.translate('ShiftLines', string)
        
    def shortHelpString(self):
        return self.tr("""
        Update a field from a line layer (with superposed geographic links but with different line ids) to produce map layer with shifted links. 
        The algorithm will update an numeric attribute with a number that allows to produce flows maps with shifted lines. For example, if there is two superposed links from A to B with line 1 (100 passangers)
        and line 2 (200passengers) and you want to produce the flow maps of the total number of passengers, 
        the algorithm will update an attribute "shift" that will have 0 for line 1 (no shift) and 100 for line 2.
		
        Parameters:
            network: lines network 
			ij: link id (ij attribute or expression)
            line: line id
            quantitative value: the exprerssion you want to visualize in the flows map (flow variable)
            shift variable: field to be update with the shift value
            
            
        """)

    def createInstance(self):
        return ShiftLines()
