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

class Contours(QgsProcessingAlgorithm):
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

    RASTER='RASTER'
    BANDE='BANDE'
    MINI='MINI'
    MAXI='MAXI'
    INTERVALLE='INTERVALLE'
    NOVALUE='NOVALUE'
    POLYGONS='POLYGONS'
    CONTOURS='CONTOURS'

    def initAlgorithm(self, config):
        """
        Here we define the inputs and output of the algorithm, along
        with some other properties.
        """

        self.addParameter(
            QgsProcessingParameterRasterLayer(
                self.RASTER,
                self.tr('Raster')
            )
        )
        self.addParameter(
            QgsProcessingParameterBand(
                self.BANDE,
                self.tr('Band'),
                1,
                parentLayerParameterName=self.RASTER
            )
        )
        self.addParameter(
            QgsProcessingParameterNumber(
                self.MINI,
                self.tr('Min'),
                QgsProcessingParameterNumber.Double,
                defaultValue=0
            )
        )
        self.addParameter(
            QgsProcessingParameterNumber(
                self.MAXI,
                self.tr('Max'),
                QgsProcessingParameterNumber.Double,
                defaultValue=60
            )
        )
        self.addParameter(
            QgsProcessingParameterNumber(
                self.INTERVALLE,
                self.tr('Interval'),
                QgsProcessingParameterNumber.Double,
                defaultValue=10
            )
        )
        self.addParameter(
            QgsProcessingParameterNumber(
                self.NOVALUE,
                self.tr('No Value'),
                QgsProcessingParameterNumber.Double,
                defaultValue=-9999
            )
        )
        self.addParameter(
            QgsProcessingParameterBoolean(
                self.POLYGONS,
                self.tr('Polygons'),
                True
            )
        )
        self.addParameter(
            QgsProcessingParameterFeatureSink(
                self.CONTOURS,
                self.tr('Isovalue polygons'),
              
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
        raster = self.parameterAsRasterLayer(parameters, self.RASTER, context)
        bande=self.parameterAsInt(parameters,self.BANDE,context)
        mini=self.parameterAsDouble(parameters,self.MINI,context)
        maxi=self.parameterAsDouble(parameters,self.MAXI,context)
        intervalle=self.parameterAsDouble(parameters,self.INTERVALLE,context)
        novalue=self.parameterAsDouble(parameters,self.NOVALUE,context)
        polygones=self.parameterAsBool(parameters,self.POLYGONS,context)
        # get features from source


        novalue=novalue
        layer=raster
        #fichier_resultat=resultat
        if not layer==None:
            if layer.type()==QgsMapLayer.RasterLayer:
                provider = layer.dataProvider()
                filePath = str(provider.dataSourceUri())
                raster_or = gdal.Open(filePath)
                nb_bands=layer.bandCount()
                champs2=QgsFields()
                champs2.append(QgsField("id",QVariant.Double))
                if polygones==True:
                    (resultat,dest_id) = self.parameterAsSink(parameters, self.CONTOURS,context,champs2, QgsWkbTypes.Polygon, raster.crs())        # Compute the number of steps to display within the progress bar and
                else:
                    (resultat,dest_id) = self.parameterAsSink(parameters, self.CONTOURS,context,champs2, QgsWkbTypes.LineString, raster.crs())        # Compute the number of steps to display within the progress bar and
                sortie=os.path.splitext(dest_id)
                nom_sortie=os.path.basename(sortie[0])
                rep_sortie=os.path.dirname(sortie[0])
                grille = raster_or.GetRasterBand(nb_bands).ReadAsArray()
                grille=numpy.rot90(grille,3)
                self.polys={}
                #if polygones==True:
                #    table_lignes=QgsVectorFileWriter(resultat,"UTF-8",champs2,QGis.WKBMultiPolygon,iface.activeLayer().crs(),"ESRI Shapefile")
                #else:
                #    table_lignes=QgsVectorFileWriter(resultat,"UTF-8",champs2,QGis.WKBMultiLineString,iface.activeLayer().crs(),"ESRI Shapefile")


                fenetre=layer.extent()
                a=fenetre.toString().split(":")
                p1=a[0].split(',')
                p2=a[1].split(',')
                ll=(float(p1[0]),float(p1[1]))
                hauteur=float(p2[1])-float(p1[1])
                largeur=float(p2[0])-float(p1[0])
                nx=int(layer.width())
                ny=int(layer.height())
                pixel_size_x=round(largeur/nx,2)
                pixel_size_y=round(hauteur/ny,2)
                feedback.setProgressText(self.tr('Grid interpolation...'))
                for p in range(nx-1):
                    feedback.setProgress(50*p/nx)
                    for q in range(ny-1):
                        self.contours(grille,p,q,intervalle,novalue,mini,maxi,ll,pixel_size_x,pixel_size_y,nx,ny)
                conn = db.connect(':memory:')
                conn.enable_load_extension(True)
                conn.execute("select load_extension('mod_spatialite')")
                c = conn.cursor()
                texte='drop table if exists "'+nom_sortie+'_polys"'
                rs = c.execute(texte)
                conn.commit()
                texte='drop table if exists "'+nom_sortie+'_polys2"'
                rs = c.execute(texte)
                conn.commit()
                texte='drop table if exists "'+nom_sortie+'"'
                rs = c.execute(texte)
                conn.commit()
                texte='drop table if exists "'+nom_sortie+'_2"'
                rs = c.execute(texte)
                conn.commit()
                texte='create table '+nom_sortie+' (id double,p integer,q integer, geom geometry)'
                rs = c.execute(texte)
                conn.commit()
                texte='SELECT RecoverGeometryColumn(\''+nom_sortie+'\',\'geom\','+str(layer.crs().postgisSrid())+', \'MULTILINESTRING\', \'XY\')'
                rs = c.execute(texte)
                conn.commit()



                for k,ff in enumerate(self.polys):
                    feedback.setProgress(51+(k*50/len(self.polys)))
                    li=self.polys[ff] 
                    liste1=[QgsGeometry.fromMultiPolylineXY(l1) for l1 in li]
                    for j,i in enumerate(liste1):
            
                        texte='insert into '+nom_sortie +' values('+str(float(ff[0]))+','+str(ff[1])+','+str(ff[2])+',st_geomfromtext(\''+i.asWkt()+'\',2154))'
                        rs = c.execute(texte)
                        conn.commit()
                        tlignes=NULL
                db_filename = rep_sortie+"/"+nom_sortie +".sqlite"
                feedback.setProgressText(self.tr("Generating isovalue polygons..."))
                feedback.setProgress(0)
                if polygones==True:
                    texte='create table \"'+nom_sortie+"_polys\" as SELECT id, casttomultipolygon(polygonize("+nom_sortie+'.geom)) AS geom FROM \"'+nom_sortie+'\" GROUP BY id,p,q;'
                    rs = c.execute(texte)
                    conn.commit()
                    feedback.setProgress(20)
                    texte='create table \"'+nom_sortie+'_polys2" as SELECT id,st_union(geom) AS geom FROM \"'+nom_sortie+'_polys\" GROUP BY id;'
                    rs = c.execute(texte)
                    conn.commit()
                    feedback.setProgress(60)
                    texte='SELECT RecoverGeometryColumn(\"'+nom_sortie+"_polys2\","+'\'geom\','+str(layer.crs().postgisSrid())+', \'MULTIPOLYGON\', \'XY\')'
                    rs = c.execute(texte)
                    conn.commit()
                else:
                    texte='create table \"'+nom_sortie+"_polys2"+'\" as SELECT "'+nom_sortie+'_2".\'id\' as Id, casttomultilinestring(st_union("'+nom_sortie+'_2".\'GEOMETRY\')) AS Geometry FROM \"'+nom_sortie+'_2\" GROUP BY  "'+nom_sortie+'_2".\'id\' ;'
                    rs = c.execute(texte)
                    conn.commit()
                    feedback.setProgress(20)
                    texte='SELECT RecoverGeometryColumn(\"'+nom_sortie+"_polys2\","+'\'geom\','+str(layer.crs().postgisSrid())+', \'MULTILINESTRING\', \'XY\')'
                    rs = c.execute(texte)
                    conn.commit()
                    feedback.setProgress(60)
                
                texte='select id, asWkt(geom) from '+nom_sortie+"_polys2"
                rs=c.execute(texte)
                feedback.setProgress(80)
                resultat2=c.fetchall()
                conn.commit()
                for r0,r in enumerate(resultat2):
                    f1=QgsFeature(champs2)
                    geom=QgsGeometry.fromWkt(r[1])
                    f1.setGeometry(geom)
                    f1.setAttributes([float(r[0])])
                    resultat.addFeature(f1)
                    feedback.setProgress(80+(r0*20/len(resultat2)))
                conn.close()
                del c
            
                del conn
        return {self.CONTOURS:dest_id}



    def name(self):
        """
        Returns the algorithm name, used for identifying the algorithm. This
        string should be fixed for the algorithm, and must not be localised.
        The name should be unique within each provider. Names should contain
        lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'isovalues_polygons'

    def displayName(self):
        """
        Returns the translated algorithm name, which should be used for any
        user-visible display of the algorithm name.
        """
        return self.tr('Isovalue polygons')

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

    def contours(self,grille, p,q,s,novalue,mini,maxi,ll,pixel_size_x,pixel_size_y,nx,ny):
        lignes={}
        points={}
        bords={}
        cadreu={}
        cadred={}
        cadrel={}
        cadrer={}
        cadre={}
        bordu={}
        bordd={}
        bordl={}
        bordr={}
        lu=grille[p,q]
        ld=grille[p,q+1]
        ru=grille[p+1,q]
        rd=grille[p+1,q+1]
        if lu>novalue:
            ilu=int(math.floor(lu/s))
        else:
            ilu=int(novalue)
        if ld>novalue:
            ild=int(math.floor(ld/s))
        else:
            ild=int(novalue)
        if ru>novalue:
            iru=int(math.floor(ru/s))
        else:
            iru=int(novalue)
        if rd>novalue:
            ird=int(math.floor(rd/s))
        else:
            ird=int(novalue)
        if ilu>novalue:
            ilu=min(max(ilu,int(math.floor(mini/s))),int(math.floor(maxi/s)))
        if ild>novalue:
            ild=min(max(ild,int(math.floor(mini/s))),int(math.floor(maxi/s)))
        if iru>novalue:
            iru=min(max(iru,int(math.floor(mini/s))),int(math.floor(maxi/s)))
        if ird>novalue:
            ird=min(max(ird,int(math.floor(mini/s))),int(math.floor(maxi/s)))
        if ilu==ild and ilu!=novalue:
            if ilu not in bordl:
                bordl[ilu]=[]
            bordl[ilu].append([p,q])
            if ilu+1 not in bordl:
                bordl[ilu+1]=[]
            bordl[ilu+1].append([p,q+1])
        if ild==ird and ild!=novalue:
            if ild not in bordd:
                bordd[ild]=[]
            bordd[ild].append([p,q+1])
            if ild+1 not in bordd:
                bordd[ild+1]=[]
            bordd[ild+1].append([p+1,q+1])
        if iru==ird and iru!=novalue:
            if ird not in bordr:
                bordr[ird]=[]
            bordr[ird].append([p+1,q])
            if ird+1 not in bordr:
                bordr[ird+1]=[]
            bordr[ird+1].append([p+1,q+1])
        if ilu==iru and ilu!=novalue:
            if ilu not in bordu:
                bordu[ilu]=[]
            bordu[ilu].append([p,q])
            if ilu+1 not in bordu:
                bordu[ilu+1]=[]
            bordu[ilu+1].append([p+1,q])
        if ilu<ild:
            if lu==novalue:
                if ild not in bordl:
                    bordl[ild]=[]
                bordl[ild].append([p,q])
                bordl[ild].append([p,q+1])
            else:
                for i in range(ilu,ild):
                    if i not in points:
                        points[i]=[]
                    points[i].append([p,q+((i+1)*s-lu)/(ld-lu)])
                    if i==ilu:
                        if i not in bordl:
                            bordl[i]=[]
                        bordl[i].append([p,q])
                    if i+1 not in bordl:
                        bordl[i+1]=[]
                    bordl[i+1].append([p,q+((i+1)*s-lu)/(ld-lu)])
                    if i==ild-1:
                        if i+2 not in bordl:
                            bordl[i+2]=[]
                        bordl[i+2].append([p,q+1])
        if ilu>ild:
            if ld==novalue:
                if ilu not in bordl:
                    bordl[ilu]=[]
                bordl[ilu].append([p,q])
                bordl[ilu].append([p,q+1])
            else:
                for i in range(ild,ilu):
                    if i not in points:
                        points[i]=[]
                    points[i].append([p,q+(lu-(i+1)*s)/(lu-ld)])
                    if i==ild:
                        if i-1 not in bordl:
                            bordl[i-1]=[]
                        bordl[i-1].append([p,q+1])
                    if i not in bordl:
                        bordl[i]=[]
                    bordl[i].append([p,q+(lu-(i+1)*s)/(lu-ld)])
                    if i==ilu-1:
                        if i+1 not in bordl:
                            bordl[i+1]=[]
                        bordl[i+1].append([p,q])
        if ild<ird:
            if ld==novalue:
                if ird not in bordd:
                    bordd[ird]=[]
                bordd[ird].append([p,q+1])
                bordd[ird].append([p+1,q+1])
            else:
                for i in range(ild,ird):
                    if i not in points:
                        points[i]=[]
                    points[i].append([p+((i+1)*s-ld)/(rd-ld),q+1])
                    if i==ild:
                        if i not in bordd:
                            bordd[i]=[]
                        bordd[i].append([p,q+1])
                    if i+1 not in bordd:
                        bordd[i+1]=[]
                    bordd[i+1].append([p+((i+1)*s-ld)/(rd-ld),q+1])
                    if i==ird-1:
                        if i+2 not in bordd:
                            bordd[i+2]=[]
                        bordd[i+2].append([p+1,q+1])
        if ild>ird:
            if rd==novalue:
                if ild not in bordd:
                    bordd[ild]=[]
                bordd[ild].append([p,q+1])
                bordd[ild].append([p+1,q+1])
            else:
                for i in range(ird,ild):
                    if i not in points:
                        points[i]=[]
                    points[i].append([p+(ld-(i+1)*s)/(ld-rd),q+1])
                    if i==ird:
                        if i-1 not in bordd:
                            bordd[i-1]=[]
                        bordd[i-1].append([p+1,q+1])
                    if i not in bordd:
                        bordd[i]=[]
                    bordd[i].append([p+(ld-(i+1)*s)/(ld-rd),q+1])
                    if i==ild-1:
                        if i+1 not in bordd:
                            bordd[i+1]=[]
                        bordd[i+1].append([p,q+1])
        if ird<iru:
            if rd==novalue:
                if iru not in bordr:
                    bordr[iru]=[]
                bordr[iru].append([p+1,q])
                bordr[iru].append([p+1,q+1])
            else:
                for i in range(ird,iru):
                    if i not in points:
                        points[i]=[]
                    points[i].append([p+1,q+(ru-(i+1)*s)/(ru-rd)])
                    if i==iru-1:
                        if i+1 not in bordr:
                            bordr[i+1]=[]
                        bordr[i+1].append([p+1,q])
                    if i==ird:
                        if i-1 not in bordr:
                            bordr[i-1]=[]
                        bordr[i-1].append([p+1,q+1])
                    if i not in bordr:
                        bordr[i]=[]
                    bordr[i].append([p+1,q+(ru-(i+1)*s)/(ru-rd)])
        if ird>iru:
            if ru==novalue:
                if ird not in bordr:
                    bordr[ird]=[]
                bordr[ird].append([p+1,q])
                bordr[ird].append([p+1,q+1])
            else:
                for i in range(iru,ird):
                    if i not in points:
                        points[i]=[]
                    points[i].append([p+1,q+((i+1)*s-ru)/(rd-ru)])
                    if i==iru:
                        if i not in bordr:
                            bordr[i]=[]
                        bordr[i].append([p+1,q])
                    if i+1 not in bordr:
                        bordr[i+1]=[]
                    bordr[i+1].append([p+1,q+((i+1)*s-ru)/(rd-ru)])
                    if i==ird-1:
                        if i+2 not in bordr:
                            bordr[i+2]=[]
                        bordr[i+2].append([p+1,q+1])
        if iru<ilu:
            if ru==novalue:
                if ilu not in bordu:
                    bordu[ilu]=[]
                bordu[ilu].append([p,q])
                bordu[ilu].append([p+1,q])
            else:
                for i in range(iru,ilu):
                    if i not in points:
                        points[i]=[]
                    points[i].append([p+(lu-(i+1)*s)/(lu-ru),q])
                    if i==iru:
                        if i-1 not in bordu:
                            bordu[i-1]=[]
                        bordu[i-1].append([p+1,q])
                    if i==ilu-1:
                        if i+1 not in bordu:
                            bordu[i+1]=[]
                        bordu[i+1].append([p,q])
                    if i not in bordu:
                        bordu[i]=[]
                    bordu[i].append([p+(lu-(i+1)*s)/(lu-ru),q])
        if iru>ilu:
            if lu==novalue:
                if iru not in bordu:
                    bordu[iru]=[]
                bordu[iru].append([p,q])
                bordu[iru].append([p+1,q])
            else:
                for i in range(ilu,iru):
                    if i not in points:
                        points[i]=[]
                    points[i].append([p+((i+1)*s-lu)/(ru-lu),q])
                    if i==ilu:
                        if i not in bordu:
                            bordu[i]=[]
                        bordu[i].append([p,q])
                    if i+1 not in bordu:
                        bordu[i+1]=[]
                    bordu[i+1].append([p+((i+1)*s-lu)/(ru-lu),q])
                    if i==iru-1:
                        if i+2 not in bordu:
                            bordu[i+2]=[]
                        bordu[i+2].append([p+1,q])
        for pt in points:
            mx=sum(float(points[pt][j][0]) for j in range(len(points[pt])))/len(points[pt])
            my=sum(float(points[pt][j][1]) for j in range(len(points[pt])))/len(points[pt])
            for j in range(len(points[pt])):
                n=len(points[pt])
                if n>2:
                    p1x=ll[0]+(p+1-0.02*((-1)**(int(j/2))))*pixel_size_x
                    p2x=ll[0]+(points[pt][j][0]+0.5)*pixel_size_x
                    q1y=ll[1]+(q+1-0.02*((-1)**(int(j/2))))*pixel_size_y
                    q2y=ll[1]+(points[pt][j][1]+0.5)*pixel_size_y
                    ligne1=QgsGeometry.fromMultiPolylineXY([[QgsPointXY(p1x,q1y),QgsPointXY(p2x,q2y)]])
                else:
                    p1x=ll[0]+(mx+0.5)*pixel_size_x
                    p2x=ll[0]+(points[pt][j][0]+0.5)*pixel_size_x
                    q1y=ll[1]+(my+0.5)*pixel_size_y
                    q2y=ll[1]+(points[pt][j][1]+0.5)*pixel_size_y
                    ligne1=QgsGeometry.fromMultiPolylineXY([[QgsPointXY(p1x,q1y),QgsPointXY(p2x,q2y)]])

                f1=QgsFeature()
                f1.setAttributes([pt*s])
                f1.setGeometry(ligne1)
                f2=QgsFeature()
                f2.setAttributes([(pt+1)*s])
                f2.setGeometry(ligne1)
                if min(lu,ld,ru,rd)>novalue:
                    if (pt*s,p,q) not in self.polys:
                        self.polys[pt*s,p,q]=[]
                    self.polys[pt*s,p,q].append(f1.geometry().asMultiPolyline())
                    if ((pt+1)*s,p,q) not in self.polys:
                        self.polys[(pt+1)*s,p,q]=[]
                    self.polys[(pt+1)*s,p,q].append(f2.geometry().asMultiPolyline())
                    

        if len(bordu)>0:
            bords=sorted(bordu.items(),key=lambda x:x[1][0])
            for pt in range(len(bords)-1):
                p1=ll[0]+(bords[pt][1][0][0]+0.5)*pixel_size_x
                p2=ll[0]+(bords[pt+1][1][0][0]+0.5)*pixel_size_x
                q1=ll[1]+(bords[pt][1][0][1]+0.5)*pixel_size_y
                q2=ll[1]+(bords[pt+1][1][0][1]+0.5)*pixel_size_y
                ligne1=QgsGeometry.fromMultiPolylineXY([[QgsPointXY(p1,q1),QgsPointXY(p2,q2)]])
                f1=QgsFeature()
                f1.setAttributes([bords[pt][0]*s])
                f1.setGeometry(ligne1)
                if q>0:
                    if q<ny-1:
                        if (bords[pt][0]*s, p,q) not in self.polys:
                            self.polys[bords[pt][0]*s,p,q]=[]
                        self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())
                else:
                    if (bords[pt][0]*s, p,q) not in self.polys:
                        self.polys[bords[pt][0]*s,p,q]=[]
                    self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())
        if len(bordl)>0:
            bords=sorted(bordl.items(),key=lambda x:x[1][0][1])
            for pt in range(len(bords)-1):
                p1=ll[0]+(bords[pt][1][0][0]+0.5)*pixel_size_x
                p2=ll[0]+(bords[pt+1][1][0][0]+0.5)*pixel_size_x
                q1=ll[1]+(bords[pt][1][0][1]+0.5)*pixel_size_y
                q2=ll[1]+(bords[pt+1][1][0][1]+0.5)*pixel_size_y
                ligne1=QgsGeometry.fromMultiPolylineXY([[QgsPointXY(p1,q1),QgsPointXY(p2,q2)]])
                f1=QgsFeature()
                f1.setAttributes([bords[pt][0]*s])
                f1.setGeometry(ligne1)
                if p>0:
                    if p<nx-1:
                        if (bords[pt][0]*s, p,q) not in self.polys:
                            self.polys[bords[pt][0]*s,p,q]=[]
                        self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())                                
                else:
                    if (bords[pt][0]*s, p,q) not in self.polys:
                        self.polys[bords[pt][0]*s,p,q]=[]
                    self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())                    

        if len(bordr)>0:
            bords=sorted(bordr.items(),key=lambda x:x[1][0][1])
            for pt in range(len(bords)-1):

                p1=ll[0]+(bords[pt][1][0][0]+0.5)*pixel_size_x
                p2=ll[0]+(bords[pt+1][1][0][0]+0.5)*pixel_size_x
                q1=ll[1]+(bords[pt][1][0][1]+0.5)*pixel_size_y
                q2=ll[1]+(bords[pt+1][1][0][1]+0.5)*pixel_size_y
                ligne1=QgsGeometry.fromMultiPolylineXY([[QgsPointXY(p1,q1),QgsPointXY(p2,q2)]])
                f1=QgsFeature()
                f1.setAttributes([bords[pt][0]*s])
                f1.setGeometry(ligne1)
                if p<nx-2:
                    if q>-1:
                        if (bords[pt][0]*s, p,q) not in self.polys:
                            self.polys[bords[pt][0]*s,p,q]=[]
                        self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())                                
                else:
                    if (bords[pt][0]*s, p,q) not in self.polys:
                        self.polys[bords[pt][0]*s,p,q]=[]
                    self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())                    
        if len(bordd)>0:
            bords=sorted(bordd.items(),key=lambda x:x[1][0])
            for pt in range(len(bords)-1):
                p1=ll[0]+(bords[pt][1][0][0]+0.5)*pixel_size_x
                p2=ll[0]+(bords[pt+1][1][0][0]+0.5)*pixel_size_x
                q1=ll[1]+(bords[pt][1][0][1]+0.5)*pixel_size_y
                q2=ll[1]+(bords[pt+1][1][0][1]+0.5)*pixel_size_y
                ligne1=QgsGeometry.fromMultiPolylineXY([[QgsPointXY(p1,q1),QgsPointXY(p2,q2)]])
                f1=QgsFeature()
                f1.setAttributes([bords[pt][0]*s])
                f1.setGeometry(ligne1)
                if q<ny-2:
                    if q>-1:
                        if (bords[pt][0]*s, p,q) not in self.polys:
                            self.polys[bords[pt][0]*s,p,q]=[]
                        self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())                                
                else:
                    if (bords[pt][0]*s,p,q) not in self.polys:
                        self.polys[bords[pt][0]*s,p,q]=[]
                    self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())

    def shortHelpString(self):
        return self.tr("""
        Generates isovalue polygons from a rester layer (ex: in order to genarate isochrones areas)
		        
        Parameters:
            raster: input raster layer name
			band: band to compute
			min: minimum isovalue area to genarate
			max: maximum isovalue area to generate
			interval: step between each isovalue
			no_value: value corresponding to the raster no_value
			polygons: True= genarates polygons: False generates Polylines
			result: name of the resulted isovalue polygons layer
        """)

    def tr(self, string):
        return QCoreApplication.translate('Contours', string)

    def createInstance(self):
        return Contours()
