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
                       QgsProcessingParameterFileDestination,
                       QgsSpatialIndex,
                       QgsGeometry,
                       QgsFeature,
                       QgsCoordinateTransform,
                       QgsCoordinateReferenceSystem
                       )
import codecs

class MajLinksPole(QgsProcessingAlgorithm):
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

    RESEAU = 'RESEAU'
    FICHIER_TEMPS = 'FICHIER_TEMPS'
    DEPART='DEPART'
    TEXT='TEXT'
    WINDOW= 'WINDOW'
    ORIGIN= 'ORIGIN'

    def initAlgorithm(self, config):
        """
        Here we define the inputs and output of the algorithm, along
        with some other properties.
        """
        #e=iface.mapCanvas().extent()
        #etendue=str(tuple([e.xMinimum(),e.xMaximum(), e.yMinimum(), e.yMaximum()]))[1:-1]
        

        self.addParameter(
            QgsProcessingParameterVectorLayer(
                self.RESEAU,
                self.tr('Network'),
                [QgsProcessing.TypeVectorLine]
            )
        )
        self.addParameter(
            QgsProcessingParameterFile(
                self.FICHIER_TEMPS,
                self.tr('Travel times file'),
            )
        )
        self.addParameter(
            QgsProcessingParameterExtent(
                self.WINDOW,
                self.tr('Extent'),
                #etendue
            )
        )
        self.addParameter(
            QgsProcessingParameterEnum(
                self.DEPART,
                self.tr('Departure/arrival'),
                options=[self.tr('Departure'),self.tr('Arrival')],
                defaultValue=0
                
            )
        )            
        self.addParameter(
            QgsProcessingParameterExpression(
                self.TEXT,
                self.tr('Intermodality node'),
                parentLayerParameterName=self.RESEAU,
                optional=False,
                defaultValue='Inter'
            )
        )
        self.addParameter(
            QgsProcessingParameterExpression(
                self.ORIGIN,
                self.tr('Origin node'),
                parentLayerParameterName=self.RESEAU,
                optional=False,
                defaultValue='O'
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
        reseau = self.parameterAsVectorLayer(parameters, self.RESEAU, context)
        fichier_temps=self.parameterAsFile(parameters,self.FICHIER_TEMPS,context)
        depart=self.parameterAsEnum(parameters,self.DEPART,context)
        champ_texte=self.parameterAsExpression(parameters,self.TEXT,context).strip("'").strip("\"")
        champ_textu=self.parameterAsExpression(parameters,self.ORIGIN,context).strip("'").strip("\"")
        fenetre=self.parameterAsExtent(parameters,self.WINDOW, context)
        
        if depart==0:
            start=True
        else:
            start=False

        fichier=codecs.open(fichier_temps,"r","utf-8")
        champs=reseau.fields()
        start=depart
        noms_champs=[]
        
        request=(QgsFeatureRequest().setFilterRect(fenetre))


        #lecture du noms des champs
        for f in champs:
            noms_champs.append(f.name())
        #ajout si necessaire champ ti tj
        reseau.startEditing()
        reseau.beginEditCommand(self.tr("updating pole"))
        if  champ_texte not in noms_champs:
            reseau.dataProvider().addAttributes([QgsField(champ_texte,QVariant.String,len=40)])
        if  champ_textu not in noms_champs:
            reseau.dataProvider().addAttributes([QgsField(champ_textu,QVariant.String,len=40)])
          

        if  u"ij" not in noms_champs:
            reseau.dataProvider().addAttributes([QgsField("ij",QVariant.String)])
            #reseau.addAttribute(QgsField("ij",QVariant.String))
            for f in reseau.getFeatures(request):
                num=f.id()
                lab_ij=f['i']+'-'+f['j']
                reseau.changeAttributeValue(num, reseau.dataProvider().fieldNameMap()['ij'],lab_ij)


        reseau.updateFields()





        colonnes={}
        links={}
        for k,i in enumerate(fichier):
            elements=i.strip('\n').strip("\r").split(";")
            ncols=len(elements)
            if k==0:
                for j in range(ncols):
                    colonnes[elements[j]]=j
            else:
                t=elements[colonnes["pole"]]
                u=elements[colonnes["o"]]
                ij=elements[colonnes["ij"]]

                if str(ij) not in links:
                    links[str(ij)]=[".","."]

                links[str(ij)]=[str(t),str(u)]
        fichier.close()

        n=reseau.featureCount()
        feedback.setProgressText(self.tr("updating pole..."))
        idt=reseau.fields().indexFromName(champ_texte)
        idu=reseau.fields().indexFromName(champ_textu)
        valid={}

        for k,f in enumerate(reseau.getFeatures(request)):
            feedback.setProgress((k+1)*100/n)
            num=f.id()
            #temps=float(f["temps"])
            ij=f["ij"]
            if ij in links:
                texte=links[f["ij"]][0]
                textu=links[f["ij"]][1]
                valid={idt : texte, idu: textu}
                reseau.changeAttributeValues(num,valid)
                    #reseau.changeAttributeValue(num, reseau.dataProvider().fieldNameMap()[champ_tj],ti)
                    #reseau.changeAttributeValue(num, reseau.dataProvider().fieldNameMap()[champ_ti],ti-temps)
                    #reseau.changeAttributeValue(num, reseau.dataProvider().fieldNameMap()[champ_ti],ti)
                    #reseau.changeAttributeValue(num, reseau.dataProvider().fieldNameMap()[champ_tj],ti-temps)
            else:
                texte='.'
                textu='.'
                valid={idt : texte, idu: textu}
                reseau.changeAttributeValues(num,valid)
                
                #reseau.changeAttributeValue(num, reseau.dataProvider().fieldNameMap()[champ_ti],ti)
                #reseau.changeAttributeValue(num, reseau.dataProvider().fieldNameMap()[champ_tj],ti)

        feedback.setProgress((k+1)*100/n)            
        reseau.commitChanges()
        reseau.endEditCommand()
        feedback.setProgress(100)     
        return {self.RESEAU: self.RESEAU}


    def name(self):
        """
        Returns the algorithm name, used for identifying the algorithm. This
        string should be fixed for the algorithm, and must not be localised.
        The name should be unique within each provider. Names should contain
        lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'update_links_pole'

    def displayName(self):
        """
        Returns the translated algorithm name, which should be used for any
        user-visible display of the algorithm name.
        """
        return self.tr("Update links pole")

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
        return QCoreApplication.translate('MajLinksPole', string)
        
    def shortHelpString(self):
        return self.tr("""
        Read the travel times file ".._temps.txt" computed by Musliw and creates (if they don't exist) in the network layer fields where intermodaly node and service area node are saved
		        
        Parameters:
            network : network layer (linear objects)
			travel times file: travel times text file ..._temps.txt generated by Musliw
            extent: window for fields update (only links in the window will be updates)
            intermodality node; initial/ final node of intermodality (depends on arrival/departure choice)
            origin node: origin or destination node (depends on arrival/departure choice) in order to determine service areas
        """)
    def createInstance(self):
        return MajLinksPole()
