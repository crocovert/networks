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
                       QgsProcessingParameterVectorLayer)
import codecs

class AjoutChamp(QgsProcessingAlgorithm):
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
    types_data=['String','Double','DateTime']

    INPUT = 'INPUT'
    NOUVEAU='NOUVEAU'
    EXISTANT='EXISTANT'
    TYPE='TYPE'
    TAILLE='TAILLE'
    PRECISION='PRECISION'
    FILTRE='FILTRE'
    FORMULE='FORMULE'

    def initAlgorithm(self, config):
        """
        Here we define the inputs and output of the algorithm, along
        with some other properties.
        """
        
        self.addParameter(
            QgsProcessingParameterVectorLayer(
                self.INPUT,
                 self.tr('Layer'),
                
            )
        )


        self.addParameter(
            QgsProcessingParameterExpression(
                self.EXISTANT,
                self.tr('Field'),
                parentLayerParameterName=self.INPUT,
                optional=False
                
            )
        )        

        self.addParameter(
            QgsProcessingParameterEnum(
                self.TYPE,
                self.tr('Type'),
                options=self.types_data,
                defaultValue=0
            )
        )
        self.addParameter(
            QgsProcessingParameterNumber(
                self.TAILLE,
                self.tr('Size'),
                QgsProcessingParameterNumber.Integer,
                defaultValue=20,
                minValue=1,
                maxValue=255
                
            )
        )
        self.addParameter(
            QgsProcessingParameterNumber(
                self.PRECISION,
                self.tr('Precision'),
                QgsProcessingParameterNumber.Integer,
                defaultValue=15,
                minValue=0,
                maxValue=15

            )
        )        

        self.addParameter(
            QgsProcessingParameterExpression(
                self.FILTRE,
                self.tr('Filter'),
                None,
                self.INPUT,
                optional=True
                
                
            )
        )
        # We add a feature sink in which to store our processed features (this
        # usually takes the form of a newly created vector layer when the
        # algorithm is run in QGIS).
        self.addParameter(
            QgsProcessingParameterExpression(
                self.FORMULE,
                self.tr('Formula'),
                None,
                self.INPUT
                
                
            )
        )
        

    def processAlgorithm(self, parameters, context, feedback):
        """
        Here is where the processing itself takes place.
        """

        # Retrieve the feature source and sink. The 'dest_id' variable is used
        # to uniquely identify the feature sink, and must be included in the
        # dictionary returned by the processAlgorithm function.
        #couche = self.parameterAsSource(parameters, self.INPUT, context)
        tableau = self.parameterAsVectorLayer(parameters, self.INPUT, context)
        champ_existant=self.parameterAsExpression(parameters,self.EXISTANT,context)
        typo=self.types_data[self.parameterAsEnum(parameters,self.TYPE,context)]
        taille=self.parameterAsInt(parameters,self.TAILLE,context)
        precision=self.parameterAsInt(parameters,self.PRECISION,context)
        filtre=QgsExpression(self.parameterAsExpression(parameters,self.FILTRE,context))
        formule=QgsExpression(self.parameterAsExpression(parameters,self.FORMULE,context))

        # Compute the number of steps to display within the progress bar and
        # get features from source
        ##a=fenetre.split(",")
        ##fenetre2=QgsRectangle(float(a[0]),float(a[2]),float(a[1]),float(a[3]))
        champ_existant=champ_existant.strip('"')
        champs=tableau.fields()
        chaine="QVariant."+str(typo)
        noms_champs=[c.name() for c in champs]
        if len(champ_existant)>0: 
            if  champ_existant not in noms_champs:
                tableau.dataProvider().addAttributes([QgsField(champ_existant,eval('QVariant.'+unicode(typo)),len=taille,prec=precision)])
                tableau.updateFields()
                lib_champ=champ_existant
            else:
                lib_champ=champ_existant
            
            if len(filtre.dump())==0:
                request=QgsFeatureRequest()
            else:
                expr= filtre
                request = QgsFeatureRequest(expr)
            
            
            formuleContexte=self.createExpressionContext(parameters,context)
            formuleContexte.appendScopes(QgsExpressionContextUtils.globalProjectLayerScopes(tableau))
            formule.prepare(formuleContexte)


            id_champ=tableau.fields().lookupField(lib_champ)

            features=tableau.getFeatures(request)
            n=tableau.featureCount()
            feedback.setProgressText(self.tr("updating field..."))
            tableau.startEditing()
            tableau.beginEditCommand(self.tr("updating field"))
            for p,f in enumerate(features):
                num=f.id()
                formuleContexte.setFeature(f)
                valeur=formule.evaluate(formuleContexte)
                valid={id_champ: valeur}
                tableau.changeAttributeValues(num, valid)
                feedback.setProgress(p*100/n)

            tableau.commitChanges()
            tableau.endEditCommand()    
        return {self.INPUT:self.INPUT}


    def name(self):
        """
        Returns the algorithm name, used for identifying the algorithm. This
        string should be fixed for the algorithm, and must not be localised.
        The name should be unique within each provider. Names should contain
        lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'update_field'

    def displayName(self):
        """
        Returns the translated algorithm name, which should be used for any
        user-visible display of the algorithm name.
        """
        return self.tr('Update field')

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

    def tr(self, string, context=''):
        if context == '':
            context = self.__class__.__name__
        return QCoreApplication.translate(context, string)

    def trAlgorithm(self, string, context=''):
        if context == '':
            context = self.__class__.__name__
        return string, QCoreApplication.translate(context, string)
        
        
    def shortHelpString(self):
        return self.tr("""
        Add or update a field in a Qgis layer from an expression formula on a set of rows
        
        Parameters:
            layer : a vector layer
            field : name of the field to update or name of the new field
            type : field data type (if new field)
            size : field size (if new field)
            precision : field precision (if new field and real type)
            filter: expression determining which rows will be updated
            formula : expression that will be written in the field( for filtered rows only)
            
        """)
    def createInstance(self):
        return AjoutChamp()
