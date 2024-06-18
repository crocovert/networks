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
                       QgsField,
                       QgsFields,
                       QgsCoordinateTransform,
                       QgsCoordinateReferenceSystem
                       )
import codecs

class CreerGraphe(QgsProcessingAlgorithm):
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
    IDENT='IDENT'
    SENS = 'SENS'
    NOEUDS = 'NOEUDS'
    PREFIXE='PREFIXE'
    DECIMALES='DECIMALES'

    def initAlgorithm(self, config):
        """
        Here we define the inputs and output of the algorithm, along
        with some other properties.
        """

        self.addParameter(
            QgsProcessingParameterVectorLayer(
                self.RESEAU,
                self.tr('Network'),
                [QgsProcessing.TypeVectorLine]
            )
        )
        self.addParameter(
            QgsProcessingParameterField(
                self.SENS,
                self.tr('Direction'),
                parentLayerParameterName=self.RESEAU,
                type=QgsProcessingParameterField.String,
                optional=True
            )
        )
        self.addParameter(
            QgsProcessingParameterEnum(
                self.IDENT,
                self.tr('Node Id'),
                [self.tr('Number series'),self.tr('Geographic string(unique)')],
                defaultValue=0,
                                
                
            )
        )
        self.addParameter(
            QgsProcessingParameterString(
                self.PREFIXE,
                self.tr('Prefix'),
                '',
                optional=True
                
                
            )
        )
        self.addParameter(
            QgsProcessingParameterNumber(
                self.DECIMALES,
                self.tr('Nb of decimals'),
                defaultValue=9
                
                
            )
        
        )        
        self.addParameter(
            QgsProcessingParameterFeatureSink(
                self.NOEUDS,
                self.tr('Nodes layer'),
                QgsProcessing.TypeVectorPoint
                
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
        sens=self.parameterAsFields(parameters,self.SENS,context)
        ident=self.parameterAsFields(parameters,self.IDENT,context)
        prefixe = self.parameterAsString(parameters, self.PREFIXE, context)
        dec = self.parameterAsInt(parameters, self.DECIMALES, context)
        if len(sens)>0:
            sens=sens[0]
        
        
        ##CEREMA=group
        ##reseau=vector line
        ##prefixe=optional string
        ##sens= field reseau
        ##fichier_noeuds=output vector
        layer=reseau
        nom_champs=[]
        for i in layer.fields():
            nom_champs.append(i.name())
        if ("i" not in nom_champs):
            layer.dataProvider().addAttributes([QgsField("i",QVariant.String)])
        if ("j" not in nom_champs):
            layer.dataProvider().addAttributes([QgsField("j",QVariant.String)])
        if ("ij" not in nom_champs):
            layer.dataProvider().addAttributes([QgsField("ij",QVariant.String)])
        layer.updateFields()
        #layer.commitChanges()
        ida=layer.fields().indexFromName("i")
        idb=layer.fields().indexFromName("j")
        idij=layer.fields().indexFromName("ij")
        lines=layer.getFeatures()
        noeuds={}
        #nom_fichier=fichier_noeuds
        champs=QgsFields()
        champs.append(QgsField("num",QVariant.String))
        champs.append(QgsField("nb",QVariant.Int))
        (table_noeuds,dest_id) = self.parameterAsSink(parameters, self.NOEUDS,context,champs, QgsWkbTypes.Point, layer.sourceCrs())
        src=QgsCoordinateReferenceSystem(layer.crs())
        dest=QgsCoordinateReferenceSystem("EPSG:4326")
        xtr=QgsCoordinateTransform(src,dest,QgsProject.instance())
        for ligne in lines:
            if len(sens)==0:
                test_sens='1'
            else:
                if ligne[sens]=='1':
                    test_sens='1'
                else:
                    test_sens='0'
            gligne=ligne.geometry()
            if test_sens=='1':
                if gligne.wkbType() in [QgsWkbTypes.MultiLineString,QgsWkbTypes.MultiLineStringZ]:
                    g=gligne.asMultiPolyline()
                    na=g[0][0]
                    liba=str(int(xtr.transform(na)[0]*10**(dec-3)+180*10**(dec-3))).zfill(dec)+str(int(xtr.transform(na)[1]*10**(dec-3)+180*10**(dec-3))).zfill(dec)
                    nb=g[-1][-1]
                    libb=str(int(xtr.transform(nb)[0]*10**(dec-3)+180*10**(dec-3))).zfill(dec)+str(int(xtr.transform(nb)[1]*10**(dec-3)+180*10**(dec-3))).zfill(dec)
                    
                elif gligne.wkbType() in [QgsWkbTypes.LineString,QgsWkbTypes.LineStringZ]:
                    g=gligne.asPolyline()
                    na=g[0]
                    liba=str(int(xtr.transform(na)[0]*10**(dec-3)+180*10**(dec-3))).zfill(dec)+str(int(xtr.transform(na)[1]*10**(dec-3)+180*10**(dec-3))).zfill(dec)
                    nb=g[-1]
                    libb=str(int(xtr.transform(nb)[0]*10**(dec-3)+180*10**(dec-3))).zfill(dec)+str(int(xtr.transform(nb)[1]*10**(dec-3)+180*10**(dec-3))).zfill(dec)
                else:
                    continue
                if (na not in noeuds):
                    noeuds[na]=(prefixe+liba,1)
                else:
                    noeuds[na]=(prefixe+liba,noeuds[na][1]+1)
                if (nb not in noeuds):
                    noeuds[nb]=(prefixe+libb,1)
                else:
                    noeuds[nb]=(prefixe+libb,noeuds[nb][1]+1)
        #outs=open("c:/temp/noeuds.txt","w")
        nbl=layer.featureCount()
        nbn=len(noeuds)
        feedback.setProgressText(QCoreApplication.translate("Generating nodes","Generating nodes"))
        for i,n in enumerate(noeuds):
            node=QgsFeature()
            node.setGeometry(QgsGeometry.fromPointXY(QgsPointXY(n[0],n[1])))
            feedback.setProgress(i*100/nbn)
            #node.setAttributes([noeuds[n]])
            #feedback.setProgressText(unicode(i)+" "+unicode(ident[0])+" "+unicode(ident[0]=='0'))
            if ident[0]=='0':
                noeuds[n]=(prefixe+unicode(i),noeuds[n][1])
                #feedback.setProgressText(unicode(noeuds[n][0]))
            node.setAttributes([noeuds[n][0],noeuds[n][1]])
            table_noeuds.addFeature(node)
        #outs.write(str(n)+";"+str(noeuds[n])+"\n")
        del table_noeuds
        #outs.close()
        lines=layer.getFeatures()
        layer.startEditing()
        layer.beginEditCommand(QCoreApplication.translate("Building graph","Building graph"))
        feedback.setProgressText(QCoreApplication.translate("Updating arcs","Updating arcs"))            
        for i,ligne in enumerate(lines):
            if len(sens)==0:
                test_sens='1'
            else:
                if ligne[sens]=='1':
                    test_sens='1'
                else:
                    test_sens='0'
            feedback.setProgress(i*100/nbl)
            if test_sens=='1':
                gligne=ligne.geometry()
                #print(gligne.wkbType())
                if gligne.wkbType() in [QgsWkbTypes.MultiLineString,QgsWkbTypes.MultiLineStringZ]:
                    
                    g=gligne.asMultiPolyline()

                    na=g[0][0]
                    nb=g[-1][-1]
                    liba=str(int(xtr.transform(na)[0]*10**(dec-3)+180*10**(dec-3))).zfill(dec)+str(int(xtr.transform(na)[1]*10**(dec-3)+180*10**(dec-3))).zfill(dec)
                    libb=str(int(xtr.transform(nb)[0]*10**(dec-3)+180*10**(dec-3))).zfill(dec)+str(int(xtr.transform(nb)[1]*10**(dec-3)+180*10**(dec-3))).zfill(dec)
                elif gligne.wkbType() in [QgsWkbTypes.LineString,QgsWkbTypes.LineStringZ]:

                    g=gligne.asPolyline()
                    na=g[0]
                    nb=g[-1]
                    liba=str(int(xtr.transform(na)[0]*10**(dec-3)+180*10**(dec-3))).zfill(dec)+str(int(xtr.transform(na)[1]*10**(dec-3)+180*10**(dec-3))).zfill(dec)

                    libb=str(int(xtr.transform(nb)[0]*10**(dec-3)+180*10**(dec-3))).zfill(dec)+str(int(xtr.transform(nb)[1]*10**(dec-3)+180*10**(dec-3))).zfill(dec)
                else:
                    continue

                id=ligne.id()
                valid={ida : unicode(noeuds[na][0]), idb: unicode(noeuds[nb][0]), idij: unicode(noeuds[na][0]+"-"+noeuds[nb][0])}
                layer.changeAttributeValues(id,  valid)
                #layer.changeAttributeValue(id,ida, unicode(noeuds[na][0]))
                #layer.changeAttributeValue(id,idb, unicode(noeuds[nb][0]))
                #layer.changeAttributeValue(id,idij, unicode(noeuds[na][0]+"-"+noeuds[nb][0]))
        layer.commitChanges()
        layer.endEditCommand()
        return {self.NOEUDS: dest_id}


    def name(self):
        """
        Returns the algorithm name, used for identifying the algorithm. This
        string should be fixed for the algorithm, and must not be localised.
        The name should be unique within each provider. Names should contain
        lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'build_graph'

    def displayName(self):
        """
        Returns the translated algorithm name, which should be used for any
        user-visible display of the algorithm name.
        """
        return self.tr('Build graph')

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
        return QCoreApplication.translate('CreerGraphe', string)
		
    def shortHelpString(self):
        return self.tr("""
        Build a graph from a linear layer (create a node layer, i and j fields filled with node id at start and end node) taking into account the direction of flows
        
        Parameters:
            network : Network layer (linear objects)
			prefix: prefix for node ids (ex: 'MAP' and n° 12563 => MAP12563)
            node_id: the format of the node_id string: number series or geographic string (uniqueid which is consistent when you add several adjacent layers)
			direction: flow direction ('0' prohibited, '1' one way objet direction, '2', one way inverse object direction, '3' both directions
			nodes_file: nodes layer (arcs ends)
        """)
    
		
    def createInstance(self):
        return CreerGraphe()
