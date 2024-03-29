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
                       QgsProcessingParameterField,
                       QgsProcessingParameterExpression,
                       QgsProcessingParameterFileDestination)
import codecs

class ReseauTi(QgsProcessingAlgorithm):
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

    OUTPUT = 'OUTPUT'
    INPUT = 'INPUT'
    RECTANGLE='RECTANGLE'
    SENS='SENS'
    TEMPS='TEMPS'
    LONGUEUR='LONGUEUR'
    I='I'
    J='J'
    PERIODE='PERIODE'
    NUM_PLAGE='NUM_PLAGE'
    DEBUT_PERIODE='DEBUT_PERIODE'
    FIN_PERIODE='FIN_PERIODE'
    CALENDRIER='CALENDRIER'
    TEXTE_ARC='TEXTE_ARC'
    MODE='MODE'

    def initAlgorithm(self, config):
        """
        Here we define the inputs and output of the algorithm, along
        with some other properties.
        """

        self.addParameter(
            QgsProcessingParameterFeatureSource(
                self.INPUT,
                self.tr('Road network'),
                [QgsProcessing.TypeVectorLine]
            )
        )
        
        self.addParameter(
            QgsProcessingParameterExtent(
                self.RECTANGLE,
                self.tr('Window'),
            )
        )
        self.addParameter(
            QgsProcessingParameterField(
                self.SENS,
                self.tr('Direction'),
                parentLayerParameterName=self.INPUT,
                type=QgsProcessingParameterField.String
            )
        )

        self.addParameter(
            QgsProcessingParameterField(
                self.TEMPS,
                self.tr('Time'),
                parentLayerParameterName=self.INPUT,
                type=QgsProcessingParameterField.Numeric
            )
        )
        self.addParameter(
            QgsProcessingParameterField(
                self.LONGUEUR,
                self.tr('Length'),
                parentLayerParameterName=self.INPUT,
                type=QgsProcessingParameterField.Numeric
            )
        )
        self.addParameter(
            QgsProcessingParameterField(
                self.I,
                self.tr('i-node'),
                parentLayerParameterName=self.INPUT,
                type=QgsProcessingParameterField.String
            )
        )
        self.addParameter(
            QgsProcessingParameterField(
                self.J,
                self.tr('j-node'),
                parentLayerParameterName=self.INPUT,
                type=QgsProcessingParameterField.String
            )
        )
        self.addParameter(
            QgsProcessingParameterString(
                self.PERIODE,
                self.tr('Time category id'),
                "-1"
            )
        )
        self.addParameter(
            QgsProcessingParameterString(
                self.NUM_PLAGE,
                self.tr('Time period id'),
                "-1"
            )
        )
        self.addParameter(
            QgsProcessingParameterString(
                self.DEBUT_PERIODE,
                self.tr('Start time'),
                "-1"
            )
        )
        self.addParameter(
            QgsProcessingParameterString(
                self.FIN_PERIODE,
                self.tr('End time'),
                "-1"
            )
        )
        self.addParameter(
            QgsProcessingParameterString(
                self.CALENDRIER,
                self.tr('Calendar'),
                "-1"
            )
        )        
        self.addParameter(
            QgsProcessingParameterExpression(
                self.TEXTE_ARC,
                self.tr('Arc label'),
                "'m'",
                self.INPUT
                
            )
        )
        self.addParameter(
            QgsProcessingParameterExpression(
                self.MODE,
                self.tr('Mode'),
                "'m'",
                self.INPUT
                
            )
        )
        # We add a feature sink in which to store our processed features (this
        # usually takes the form of a newly created vector layer when the
        # algorithm is run in QGIS).
        self.addParameter(
            QgsProcessingParameterFileDestination(
                self.OUTPUT,
                self.tr('Musliw network'),
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
        reseau_routier = self.parameterAsSource(parameters, self.INPUT, context)
        reseau_source=self.parameterAsVectorLayer(parameters, self.INPUT, context)
        reseau_musliw = self.parameterAsFileOutput(parameters, self.OUTPUT,context)
        fenetre_source=self.parameterAsExtent(parameters,self.RECTANGLE,context)
        sens=self.parameterAsFields(parameters,self.SENS,context)
        temps=self.parameterAsFields(parameters,self.TEMPS,context)
        longueur=self.parameterAsFields(parameters,self.LONGUEUR,context)
        noeud_i=self.parameterAsFields(parameters,self.I,context)
        noeud_j=self.parameterAsFields(parameters,self.J,context)
        periode=self.parameterAsString(parameters,self.PERIODE,context)
        num_plage=self.parameterAsString(parameters,self.NUM_PLAGE,context)
        debut_periode=self.parameterAsString(parameters,self.DEBUT_PERIODE,context)
        fin_periode=self.parameterAsString(parameters,self.FIN_PERIODE,context)
        calendrier=self.parameterAsString(parameters,self.CALENDRIER,context)
        texte_arc=QgsExpression(self.parameterAsExpression(parameters,self.TEXTE_ARC,context))
        mode=QgsExpression(self.parameterAsExpression(parameters,self.MODE,context))
        # Compute the number of steps to display within the progress bar and
        # get features from source
        ##a=fenetre.split(",")
        ##fenetre2=QgsRectangle(float(a[0]),float(a[2]),float(a[1]),float(a[3]))
        src=QgsProject.instance().crs()
        dest=QgsCoordinateReferenceSystem(reseau_source.crs())
        xtr=QgsCoordinateTransform(src,dest,QgsProject.instance())
        fenetre=xtr.transformBoundingBox(fenetre_source)
        
        request=QgsFeatureRequest().setFilterRect(fenetre)
        layer=reseau_routier
        sortie=codecs.open(reseau_musliw,"w",encoding="utf8")
        feedback.setProgressText(self.tr(u"Writing Musliw network file..."))
        features=[f for f in layer.getFeatures(request)]
        n=len(features)
        modeContexte=self.createExpressionContext(parameters,context)
        modeContexte.appendScopes(QgsExpressionContextUtils.globalProjectLayerScopes(reseau_source))
        mode.prepare(modeContexte)
        texteContexte=self.createExpressionContext(parameters,context)
        texteContexte.appendScopes(QgsExpressionContextUtils.globalProjectLayerScopes(reseau_source))
        texte_arc.prepare(texteContexte)
        for p,f in enumerate(features):
            
            feedback.setProgress(p*100/n)
            i=f[noeud_i[0]]
            j=f[noeud_j[0]]
            if not i==j:
                if len(sens)==0:
                    s='1'
                else:
                    s=f[sens[0]]
                l=f[longueur[0]]
                t=f[temps[0]]
                #te=f[texte_arc[0]]
                modeContexte.setFeature(f)
                texteContexte.setFeature(f)
                modex=mode.evaluate(modeContexte)
                te=texte_arc.evaluate(texteContexte)
                if s in ('1','3'):
                   sortie.write(str(i)+';'+str(j)+';'+str(t)+';'+str(l)+';'+periode+';'+num_plage+';'+debut_periode+';'+fin_periode+';'+calendrier+';'+str(te)+';'+str(modex)+'\n')
                if s in ('2','3'):
                   sortie.write(str(j)+';'+str(i)+';'+str(t)+';'+str(l)+';'+periode+';'+num_plage+';'+debut_periode+';'+fin_periode+';'+calendrier+';'+str(te)+';'+str(modex)+'\n')
        sortie.close()
        return {self.INPUT:self.INPUT}


    def name(self):
        """
        Returns the algorithm name, used for identifying the algorithm. This
        string should be fixed for the algorithm, and must not be localised.
        The name should be unique within each provider. Names should contain
        lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'musliw_individual_network'

    def displayName(self):
        """
        Returns the translated algorithm name, which should be used for any
        user-visible display of the algorithm name.
        """
        return self.tr('Musliw individual network')

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
        return QCoreApplication.translate('ReseauTi', string)
        
    def shortHelpString(self):
        return self.tr("""
        Generates a Musliw network for individual mode (car, walking, cycling,...) from a netowrk layer
		
        Parameters:
            road network: road network layer (linear objects)
			window: area of the generated network (could be a sub area from the whole network layer)
            direction: flow direction ('0' proxhibited, '1' one way same direction as object, '2' one way reverse direction of object, '3' both directions
            time: arc travel time field
            length: arc length field
            i-node: i-node id
            j-node: j-node id
            time category id: time category id
            time period id: time period id into the time category 
            start time: start time of the period
            end time: end time of the period 
            calendar: calendar of the period (ex: 'OOOOONN' evary day except saturday and sunday
            arc label: arc label
            mode: mode id for multimodal routing
            musliw network: name of the genarated Musliw network (txt file)
            
            
        """)

    def createInstance(self):
        return ReseauTi()
