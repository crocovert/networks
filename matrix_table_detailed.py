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
from PyQt5.QtCore import QCoreApplication
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
                       QgsProcessingParameterEnum,
                       QgsProcessingParameterField,
                       QgsProcessingParameterExpression,
                       QgsProcessingParameterFileDestination,
                       QgsExpressionContext,
                       QgsExpression)
import codecs
import numpy

class MatrixTableDetailed(QgsProcessingAlgorithm):
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

    POLES = 'POLES'
    ORIGIN = 'ORIGIN'
    DESTINATION='DESTINATION'
    NB_PASSAGERS='NB_PASSAGERS'
    JOUR='JOUR'
    DEBUT_PERIODE='DEBUT_PERIODE'
    FIN_PERIODE='FIN_PERIODE'
    INTERVALLE='INTERVALLE'
    DEPART='DEPART'
    SORTIE='SORTIE'
    LABEL='LABEL'
    
    
    def initAlgorithm(self, config):
        """
        Here we define the inputs and output of the algorithm, along
        with some other properties.
        """

        self.addParameter(
            QgsProcessingParameterFeatureSource(
                self.POLES,
                self.tr('OD Table'),
                
            )
        )
        
        self.addParameter(
            QgsProcessingParameterField(
                self.ORIGIN,
                self.tr('Origin'),
                parentLayerParameterName=self.POLES,
            )
        )
        self.addParameter(
            QgsProcessingParameterField(
                self.DESTINATION,
                self.tr('Destination'),
                parentLayerParameterName=self.POLES,
            )
        )
        self.addParameter(
            QgsProcessingParameterExpression(
                        self.NB_PASSAGERS,
                        self.tr('Demand'),
                        parentLayerParameterName=self.POLES,
                        optional=False,
                        defaultValue='1'
            )
        )
        self.addParameter(
            QgsProcessingParameterNumber(
                self.JOUR,
                self.tr('Day'),
                QgsProcessingParameterNumber.Integer,
                defaultValue=1,
            )
        )
        
        self.addParameter(
            QgsProcessingParameterString(
                self.DEBUT_PERIODE,
                self.tr('Start time'),
                defaultValue=str.format("{0}:00:00",datetime.datetime.now().hour)
                
            )
        )
        self.addParameter(
            QgsProcessingParameterString(
                self.FIN_PERIODE,
                self.tr('End time'),
                defaultValue=str.format("{0}:00:00",datetime.datetime.now().hour+1)
                
            )
        )
        self.addParameter(
            QgsProcessingParameterNumber(
                self.INTERVALLE,
                self.tr('Step'),
                QgsProcessingParameterNumber.Double,
                defaultValue=15,
            )
        )
        self.addParameter(
            QgsProcessingParameterEnum(
                self.DEPART,
                self.tr("Departure/Arrival"),
                [self.tr('Departure'),self.tr('Arrival')],
                defaultValue=0
            )
        )    


        self.addParameter(
            QgsProcessingParameterExpression(
                self.LABEL,
                self.tr("OD label"),
                parentLayerParameterName=self.POLES,
                optional=False,
                defaultValue='i+\'-\'+j+\'-\'+line'
            )
        )          

        # We add a feature sink in which to store our processed features (this
        # usually takes the form of a newly created vector layer when the
        # algorithm is run in QGIS).
        self.addParameter(
            QgsProcessingParameterFileDestination(
                self.SORTIE,
                self.tr('Musliw matrix'),
                '*.txt'
            )
        )
        

    def processAlgorithm(self, parameters, context, feedback):
        """
        Here is where the processing itself takes place.
        """

        # Retrieve the feature source and sink. The 'dest_id' variable is used
        # to uniquely identify the feature sink, and must be included in the
        # dictionary returned by the processAlgorithm function.
        poles = self.parameterAsSource(parameters, self.POLES, context)
        tableau = self.parameterAsVectorLayer(parameters, self.POLES, context)
        origine = self.parameterAsFields(parameters, self.ORIGIN,context)[0]
        destination = self.parameterAsFields(parameters, self.DESTINATION,context)[0]
        nb_passagers_exp=QgsExpression(self.parameterAsExpression(parameters,self.NB_PASSAGERS,context))
        jour=self.parameterAsInt(parameters,self.JOUR,context)
        h1=self.parameterAsString(parameters,self.DEBUT_PERIODE,context)
        h2=self.parameterAsString(parameters,self.FIN_PERIODE,context)
        intervalle=self.parameterAsDouble(parameters,self.INTERVALLE,context)
        depart=self.parameterAsEnum(parameters,self.DEPART,context)
        label2=QgsExpression(self.parameterAsExpression(parameters,self.LABEL,context))
        fichier_matrice = self.parameterAsFileOutput(parameters, self.SORTIE,context)
        
        # Compute the number of steps to display within the progress bar and
        # get features from source
        ##a=fenetre.split(",")
        ##fenetre2=QgsRectangle(float(a[0]),float(a[2]),float(a[1]),float(a[3]))
        matrice=open(fichier_matrice,"w")
        if depart==0:
            d="d"
        else:
            d="a"
        h1=h1.strip().split(':')
        h2=h2.strip().split(':')
        debut_periode=int(h1[0])*60.0+int(h1[1])+int(h1[2])/60.0
        fin_periode=int(h2[0])*60.0+int(h2[1])+int(h2[2])/60.0
        nodes=poles
        liste_nodes=[]
        nb=len(list(numpy.arange(debut_periode,fin_periode,intervalle)))
        feedback.setProgressText(self.tr("Writing Musliw matrix..."))
        if d=="d":
            demands = []
            formuleContexte=self.createExpressionContext(parameters,context)
            formuleContexte.appendScopes(QgsExpressionContextUtils.globalProjectLayerScopes(tableau))
            nb_passagers_exp.prepare(formuleContexte)
            label2.prepare(formuleContexte)
            for i in nodes.getFeatures():
                # Evaluation 
                formuleContexte.setFeature(i)
                demands= float(nb_passagers_exp.evaluate(formuleContexte))
                lab=label2.evaluate(formuleContexte)
                liste_nodes.append((i[origine],i[destination],demands,jour,lab))
            liste_nodes=sorted(liste_nodes,key=lambda x: x[0])
            for kk,k in enumerate(numpy.arange(debut_periode,fin_periode,intervalle)) :
                for n,i in enumerate(liste_nodes):
                    feedback.setProgress(100*n*kk/(len(liste_nodes)*nb))
                    matrice.write(";".join([str(z) for z in [i[0],i[1],i[2],i[3],k,d,i[4]]])+"\n")

        elif d=="a":
            demands = []
            formuleContexte=self.createExpressionContext(parameters,context)
            formuleContexte.appendScopes(QgsExpressionContextUtils.globalProjectLayerScopes(tableau))
            nb_passagers_exp.prepare(formuleContexte)
            label2.prepare(formuleContexte)
            for i in nodes.getFeatures():
                # Evaluation 
                formuleContexte.setFeature(i)
                demands= float(nb_passagers_exp.evaluate(formuleContexte))
                lab=label2.evaluate(formuleContexte)
                liste_nodes.append((i[origine],i[destination],demands,jour,lab))
            liste_nodes=sorted(liste_nodes,key=lambda x: x[1])
            for kk,k in enumerate(numpy.arange(debut_periode,fin_periode,intervalle)) :
                for n,i in enumerate(liste_nodes):
                    feedback.setProgress(100*n*kk/(len(liste_nodes)*nb))
                    matrice.write(";".join([str(z) for z in [i[0],i[1],i[2],i[3],k,d,i[4]]])+"\n")

        matrice.close()
          
        return {self.POLES:self.SORTIE}


    def name(self):
        """
        Returns the algorithm name, used for identifying the algorithm. This
        string should be fixed for the algorithm, and must not be localised.
        The name should be unique within each provider. Names should contain
        lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'musliw_matrix_table_detailed'

    def displayName(self):
        """
        Returns the translated algorithm name, which should be used for any
        user-visible display of the algorithm name.
        """
        return self.tr('Musliw matrix from table detailed')

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
        return QCoreApplication.translate('MatrixTableDetailed', string)
        
    def shortHelpString(self):
        return self.tr("""
        Generates a detailed Musliw matrix from a table layer and a period of time (from start time to end time with a step in minutes)
        
		
        Parameters:
            Nodes: nodes layer (corresponding to nodes layer or the graph )
			Origin: Field that contains the node Id of the origin
            Destination: Field that contains the node Id of the destination
            Demand: number of passengers for assignment
            Day: number of the day in the calendar (1 first day of the calendar)
            Start time: Beginning of the time period
            Step: Step time in minutes
            Departure/Arrival: Departure (from Start point to end point forward) - Arrival (from end point to start point backward)
            OD label: Expression to put in the matrix file for each OD line
            Musliw matrix: Musliw matrix name (text file with ";" separator
            
            
        """)

    def createInstance(self):
        return MatrixTableDetailed()
