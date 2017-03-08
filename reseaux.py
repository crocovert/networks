# -*- coding: utf-8 -*-
"""
/***************************************************************************
 reseaux
                                 A QGIS plugin
 CrÃÂÃÂ©er
                              -------------------
        begin                : 2014-09-09
        copyright            : (C) 2014 by CEREMA Nord-Picardie
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
# Import the PyQt and QGIS libraries
from PyQt4.QtCore import *
from PyQt4.QtGui import *
from qgis.core import *
from qgis.utils import *
import numpy
import math
import time
import copy
from osgeo import gdal
# Initialize Qt resources from file resources.py
import resources_rc
# Import the code for the dialog
from reseauxdialog import reseauxDialog
from reseauxdialog_connect import reseauxDialog_connect
from linear_interpolation_dialog_connect import reseauxDialog_interpol
from dialog_isopoly import dialog_Isopoly
import os.path
from pyspatialite import dbapi2 as db
import processing

class reseaux:

    def __init__(self, iface):
        # Save reference to the QGIS interface
        self.iface = iface
        # initialize plugin directory
        self.plugin_dir = os.path.dirname(__file__)
        # initialize locale
        locale = QSettings().value("locale/userLocale")[0:2]
        localePath = os.path.join(self.plugin_dir, 'i18n', 'networks_{}.qm'.format(locale))

        if os.path.exists(localePath):
            self.translator = QTranslator()
            self.translator.load(localePath)

            if qVersion() > '4.3.3':
                QCoreApplication.installTranslator(self.translator)

        # Create the dialog (after translation) and keep reference
        self.dlg = reseauxDialog()
        self.dlg_connect=reseauxDialog_connect()
        self.dlg_interpol=reseauxDialog_interpol()
        self.dlg_iso=dialog_Isopoly()
        self.layer_interpol_line=""
        self.largeur=0.0
        self.hauteur=0.0
        self.nx=0
        self.ny=0
        self.deltax=0.0
        self.deltay=0.0
        self.pixel_size_x=0.0
        self.pixel_size_y=0.0
        self.rep=self.plugin_dir
        

    def initGui(self):
        # Create action that will start plugin configuration
        self.action = QAction(
            QCoreApplication.translate(u"Build graph",u"Build graph"), self.iface.mainWindow())
        # connect the action to the run method
        self.action_reverse = QAction(
            QCoreApplication.translate(u"Reverse",u"Reverse"), self.iface.mainWindow())
            
        self.action_segmenter=QAction(
            QCoreApplication.translate(u"Split",u"Split"), self.iface.mainWindow())

        self.action_connect=QAction(
            QCoreApplication.translate(u"Connect",u"Connect") ,self.iface.mainWindow())

        self.action_interpol=QAction(
            QCoreApplication.translate(u"Linear interpolation",u"Linear interpolation") ,self.iface.mainWindow())
        
        self.action_isolines=QAction(
            QCoreApplication.translate(u"Isobands",u"Isobands") ,self.iface.mainWindow())

        self.action_help=QAction(
            QCoreApplication.translate(u"Help",u"Help") ,self.iface.mainWindow())
            
        
        self.action.triggered.connect(self.run)
        self.action_reverse.triggered.connect(self.run_inverser)
        self.action_segmenter.triggered.connect(self.run_segmenter)
        self.action_connect.triggered.connect(self.run_connect)
        self.action_interpol.triggered.connect(self.run_interpol)
        self.action_isolines.triggered.connect(self.run_isolines)
        self.action_help.triggered.connect(self.run_help)

        # Add toolbar button and menu item
        self.iface.addPluginToVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"), self.action)
        self.iface.addPluginToVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"), self.action_reverse)
        self.iface.addPluginToVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"), self.action_segmenter)
        self.iface.addPluginToVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"), self.action_connect)
        self.iface.addPluginToVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"), self.action_interpol)
        self.iface.addPluginToVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"), self.action_isolines)
        self.iface.addPluginToVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"), self.action_help)
        
        
        QObject.connect(self.dlg_interpol.lineEdit, SIGNAL("textEdited(QString)"), self.maj_taille_x)
        QObject.connect(self.dlg_interpol.lineEdit_2, SIGNAL("textEdited(QString)"), self.maj_taille_y)
        QObject.connect(self.dlg_interpol.lineEdit_3, SIGNAL("textEdited(QString)"), self.maj_nb_x)
        QObject.connect(self.dlg_interpol.lineEdit_4, SIGNAL("textEdited(QString)"), self.maj_nb_y)
        
        QObject.connect(self.dlg_iso.spinBox,SIGNAL("ValueChanged(QString)"), self.maj_minmax)

        QObject.connect(self.dlg_interpol.pushButton,SIGNAL("clicked()"),self.parcourir)
        QObject.connect(self.dlg_iso.pushButton,SIGNAL("clicked()"),self.parcourir2)
        
    def unload(self):
        # Remove the plugin menu item and icon
        self.iface.removeToolBarIcon(self.action)
        self.iface.removePluginVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"), self.action)
        self.iface.removePluginVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"),self.action_reverse)
        self.iface.removePluginVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"),self.action_segmenter)
        self.iface.removePluginVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"),self.action_connect)
        self.iface.removePluginVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"),self.action_interpol)
        self.iface.removePluginVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"),self.action_isolines)
        self.iface.removePluginVectorMenu(QCoreApplication.translate(u"&Networks",u"&Networks"),self.action_help)
        
    # run method that performs all the real work
    def run(self):
        # show the dialog
        self.dlg.show()
        # Run the dialog event loop
        result = self.dlg.exec_()
        # See if OK was pressed
        if result == 1:
            self.creer_graphe(self.dlg.lineEdit.text(),self.dlg.checkBox.isChecked())
            
    def parcourir(self):
        self.dlg_interpol.lineEdit_8.setText(str(QFileDialog.getSaveFileName(caption=QCoreApplication.translate("Save raster layer as","Save raster layer as"),directory=self.rep,filter="ArcInfo ASCII grid (*.asc)")))

    def parcourir2(self):
        self.dlg_iso.lineEdit_5.setText(str(QFileDialog.getSaveFileName(caption=QCoreApplication.translate("Save isolines layer as","Save isolines layer as"),directory=self.rep,filter="ESRI Shape (*.shp)")))
        
    def run_help(self):
        #showPluginHelp(self.plugin_dir+"index.html")
        showPluginHelp()
    
    def maj_taille_x(self,ncells_x):
        if not (ncells_x==""):
            if float(ncells_x)>0:
                self.dlg_interpol.lineEdit_3.setText(str(round(self.largeur/float(ncells_x),2)))
                self.pixel_size_x=float(self.dlg_interpol.lineEdit_3.text())
        
    def maj_taille_y(self,ncells_y):
        if not (ncells_y==""):
            if float(ncells_y)>0:
                self.dlg_interpol.lineEdit_4.setText(str(round(self.hauteur/float(ncells_y),2)))
                self.pixel_size_y=float(self.dlg_interpol.lineEdit_4.text())
    
    def maj_nb_x(self,deltax):
        if not (self.nx==""):
            if float(deltax)>0:
                self.dlg_interpol.lineEdit.setText(str(round(self.largeur/float(deltax),0)))
                self.nx=float(self.dlg_interpol.lineEdit.text())
        
    def maj_nb_y(self,deltay):
        if not (self.ny==""):
            if float(deltay)>0:
                self.dlg_interpol.lineEdit_2.setText(str(round(self.hauteur/float(deltay),0)))
                self.ny=float(self.dlg_interpol.lineEdit_2.text())
        
    def maj_minmax(self,band):
        if not (self.band==""):
            m1=float(self.raster_or.GetRasterBand(int(band)).GetMinimum())
            m2=float(self.raster_or.GetRasterBand(int(band)).GetMaximum())
            if m1==None:
                m1=0
            if m2==None:
                m2=1
            m3=max(m2-m1,1e-10)
            i1=10**int(math.log10(m3))
            self.dlg_iso.lineEdit.setText(str(m1))
            self.dlg_iso.lineEdit_2.setText(str(m2))
            self.dlg_iso.lineEdit_2.setText(str(i2))
    
    
    def creer_graphe(self,prefixe,afficher):
        layer=self.iface.activeLayer()
        nom_champs=[]
        for i in layer.dataProvider().fields():
            nom_champs.append(i.name())
        if ("i" not in nom_champs):
            layer.dataProvider().addAttributes([QgsField("i",QVariant.String)])
        if ("j" not in nom_champs):
            layer.dataProvider().addAttributes([QgsField("j",QVariant.String)])
        layer.updateFields()
        layer.commitChanges()
        ida=layer.fieldNameIndex("i")
        idb=layer.fieldNameIndex("j")
        idij=layer.fieldNameIndex("ij")
        lines=layer.getFeatures()
        noeuds={}
        nom_fichier=QFileDialog.getSaveFileName(caption=QCoreApplication.translate("Save node layer as","Save nodes layer as"),directory=os.getcwd(),filter="ESRI Shape File (*.shp)")
        champs=QgsFields()
        champs.append(QgsField("Id",QVariant.String))
        table_noeuds=QgsVectorFileWriter(nom_fichier,"UTF-8",champs,QGis.WKBPoint,layer.crs(),"ESRI Shapefile")
        for ligne in lines:
            gligne=ligne.geometry()
            if gligne.wkbType()==QGis.WKBMultiLineString:
                g=gligne.asMultiPolyline()
                na=g[0][0]
                nb=g[-1][-1]
            elif gligne.wkbType()==QGis.WKBLineString:
                g=gligne.asPolyline()
                na=g[0]
                nb=g[-1]
            if gligne.wkbType() in [QGis.WKBMultiLineString,QGis.WKBLineString]:
                if (na not in noeuds):
                    noeuds[na]=prefixe+str(len(noeuds)+1)
                if (nb not in noeuds):
                    noeuds[nb]=prefixe+str(len(noeuds)+1)

        
        #outs=open("c:/temp/noeuds.txt","w")
        for i,n in enumerate(noeuds):
            node=QgsFeature()
            node.setGeometry(QgsGeometry.fromPoint(QgsPoint(n[0],n[1])))
            #node.setAttributes([noeuds[n]])
            node.setAttributes([unicode(noeuds[n])])
            table_noeuds.addFeature(node)
        #outs.write(str(n)+";"+str(noeuds[n])+"\n")
        del table_noeuds
        #outs.close()
        lines=layer.getFeatures()
        layer.startEditing()
        layer.beginEditCommand(QCoreApplication.translate("Building graph","Building graph"))
        for ligne in lines:
            gligne=ligne.geometry()
            if gligne.wkbType()==QGis.WKBMultiLineString:
                g=gligne.asMultiPolyline()
                na=g[0][0]
                nb=g[-1][-1]
            elif gligne.wkbType()==QGis.WKBLineString:
                g=gligne.asPolyline()
                na=g[0]
                nb=g[-1]
            id=ligne.id()
            #valid={ida : noeuds[na], idb: noeuds[nb]}
            if gligne.wkbType() in [QGis.WKBMultiLineString,QGis.WKBLineString]:  
                layer.changeAttributeValue(id,ida, unicode(noeuds[na]))
                layer.changeAttributeValue(id,idb, unicode(noeuds[nb]))
        layer.endEditCommand()
        #layer.commitChanges()
        if afficher:
            nom_couche=os.path.splitext(os.path.basename(nom_fichier))[0]
            vlayer=QgsVectorLayer(nom_fichier,nom_couche,'ogr')
            QgsMapLayerRegistry.instance().addMapLayer(vlayer)
            
    def run_inverser(self):
        layer = self.iface.activeLayer()
        if not layer==None:
            if layer.selectedFeatureCount()>0 and layer.geometryType()==1:
                layer.startEditing()
                layer.beginEditCommand(QCoreApplication.translate("Reverse polyline directions","Reverse polyline directions"))
                for feature in layer.selectedFeatures():
            
                    geom = feature.geometry()
                    geom.convertToMultiType()
                    nodes = geom.asMultiPolyline()
                    for points in nodes:
                        points.reverse() 
                    newgeom = QgsGeometry.fromMultiPolyline(nodes)
                    layer.changeGeometry(feature.id(),newgeom)
                layer.endEditCommand()
            elif not layer.geometryType()==1:
                QMessageBox().information(None,QCoreApplication.translate("Reverse","Reverse"),QCoreApplication.translate("The active layer isn't composed of linear objects","The active layer isn't composed of linear objects"))
            else:
                QMessageBox().information(None,QCoreApplication.translate("Reverse","Reverse"),QCoreApplication.translate("Empty selection","Empty selection"))
        else:
            QMessageBox().information(None,QCoreApplication.translate("Reverse","Reverse"),QCoreApplication.translate("No active layer","No active layer"))
        #layer.commitChanges()
    
    def run_segmenter(self):
        layer = self.iface.activeLayer()
        if not layer==None:
            if layer.selectedFeatureCount()>0 and layer.geometryType()==1:
                layer.startEditing()
                layer.beginEditCommand(QCoreApplication.translate("Split polylines into lines","Split polylines into lines"))
                for feature in layer.selectedFeatures():
                    geom = feature.geometry()
                    nodes = geom.convertToType(QGis.Line,True).asMultiPolyline()
                    att=feature.attributes()
                    id=feature.id()
                    for poly in nodes:
                        for pt in range(len(poly)-1):
                            segment=QgsFeature()
                            segment.setGeometry(QgsGeometry.fromPolyline([poly[pt],poly[pt+1]]))
                            segment.setAttributes(att)
                            layer.addFeature(segment)
                    layer.deleteFeature(id)
                layer.endEditCommand()
            elif not layer.geometryType()==1:
                QMessageBox().information(None,QCoreApplication.translate("Split","Split"),QCoreApplication.translate("The layer isn't composed of linear objects","The layer isn't composed of linear objects"))
            else:
                QMessageBox().information(None,QCoreApplication.translate("Split","Split"),QCoreApplication.translate("Empty selection","Empty selection"))
        else:
            QMessageBox().information(None,QCoreApplication.translate("Split","Split"),QCoreApplication.translate("No active layer","No active layer"))

        
    def run_connect(self):
        # show the dialog
        self.dlg_connect.comboBox.clear()
        for i in self.iface.mapCanvas().layers():
            self.dlg_connect.comboBox.addItem(i.name())
        self.dlg_connect.show()
        # Run the dialog event loop
        result = self.dlg_connect.exec_()
        # See if OK was pressed
        if result == 1:
            self.connect(self.dlg_connect.comboBox.currentText(),self.dlg_connect.lineEdit.text())
        
    def run_interpol(self):
        layer = self.iface.activeLayer()
        if layer!=None:

            if layer.type()==QgsMapLayer.VectorLayer:

                self.fenetre=self.iface.mapCanvas().extent()

                a=self.fenetre.toString().split(":")
                p1=a[0].split(',')
                p2=a[1].split(',')


                self.ll=(float(p1[0]),float(p1[1]))
                self.hauteur=float(p2[1])-float(p1[1])
                self.largeur=float(p2[0])-float(p1[0])
                self.nx=int(self.dlg_interpol.lineEdit.text())
                self.ny=int(self.dlg_interpol.lineEdit_2.text())
                self.dlg_interpol.lineEdit_3.setText(str(round(self.largeur/self.nx,2)))
                self.dlg_interpol.lineEdit_4.setText(str(round(self.hauteur/self.ny,2)))
                self.pixel_size_x=float(self.dlg_interpol.lineEdit_3.text())
                self.pixel_size_y=float(self.dlg_interpol.lineEdit_4.text()) 
                
                if self.layer_interpol_line!=layer.name():
                    self.layer_interpol_line=layer.name()
                    self.dlg_interpol.comboBox.clear()
                    self.dlg_interpol.comboBox_2.clear()
                    self.dlg_interpol.comboBox_3.clear()
                    self.dlg_interpol.comboBox_4.clear()
                    self.dlg_interpol.comboBox_5.clear()
                    self.dlg_interpol.comboBox_6.clear()
                    self.dlg_interpol.comboBox_7.clear()
                    self.dlg_interpol.comboBox_8.clear()
                    for i in layer.dataProvider().fields():
                        self.dlg_interpol.comboBox.addItem(i.name())
                        self.dlg_interpol.comboBox_2.addItem(i.name())
                        self.dlg_interpol.comboBox_3.addItem(i.name())
                        self.dlg_interpol.comboBox_4.addItem(i.name())
                        self.dlg_interpol.comboBox_5.addItem(i.name())
                        self.dlg_interpol.comboBox_6.addItem(i.name())
                        self.dlg_interpol.comboBox_7.addItem(i.name())
                        self.dlg_interpol.comboBox_8.addItem(i.name())
                self.dlg_interpol.show()

                result = self.dlg_interpol.exec_()
                # See if OK was pressed
                if result == 1:
                    self.rasterfile=self.dlg_interpol.lineEdit_8.text()
                    self.AB_i=self.dlg_interpol.comboBox.currentText()
                    self.AB_j=self.dlg_interpol.comboBox_2.currentText()
                    self.BA_i=self.dlg_interpol.comboBox_7.currentText()
                    self.BA_j=self.dlg_interpol.comboBox_8.currentText()
                    self.flow_direction=self.dlg_interpol.comboBox_3.currentText()
                    self.diffusion_direction=self.dlg_interpol.comboBox_4.currentText()
                    self.impassibility=self.dlg_interpol.comboBox_5.currentText()
                    self.diffusion_speed=self.dlg_interpol.comboBox_6.currentText()
                    self.decimals=int(self.dlg_interpol.lineEdit_7.text())
                    self.radius=float(self.dlg_interpol.lineEdit_5.text())
                    self.default_speed=float(self.dlg_interpol.lineEdit_6.text())
                    self.flag_variable_speed=self.dlg_interpol.checkBox_3.isChecked()
                    self.flag_impassibility=self.dlg_interpol.checkBox.isChecked()
                    self.flag_add_layer=self.dlg_interpol.checkBox_2.isChecked()
                    self.nx=int(self.dlg_interpol.lineEdit.text())
                    self.ny=int(self.dlg_interpol.lineEdit_2.text())
                    self.pixel_size_x=float(self.dlg_interpol.lineEdit_3.text())
                    self.pixel_size_y=float(self.dlg_interpol.lineEdit_4.text()) 
                    if self.rasterfile!="":
                        self.calcul_interpol()
            else:
                QMessageBox().information(None,QCoreApplication.translate("Linear interpolation","Linear interpolation"),QCoreApplication.translate("The active layer isn't composed of linear objects","The active layer isn't composed of linear objects"))
        else:
            QMessageBox().information(None,QCoreApplication.translate("Linear interpolation","Linear interpolation"),QCoreApplication.translate("No active layer","No active layer"))
            
            
            
    def calcul_interpol(self):

        grille=numpy.array([[-9999.0]*self.ny]*self.nx)
        grille_distance=numpy.array([[1e38]*self.ny]*self.nx)
        self.rep=os.path.dirname(self.rasterfile)
        self.fenetre=self.iface.mapCanvas().extent()
        layer=self.iface.activeLayer()
        if layer.type()==QgsMapLayer.VectorLayer:
            if not layer==None:
                if layer.geometryType()==1:
                    simple=QgsSimplifyMethod()
                    simple.setMethodType(QgsSimplifyMethod.PreserveTopology)
                    simple.setTolerance(min(self.pixel_size_x,self.pixel_size_y)/2)
                    texte='"'+self.diffusion_direction+'" in (\'1\',\'2\',\'3\') and (("'+self.AB_j+'" IS NOT NULL and "'+self.flow_direction+'" in (\'1\',\'2\')) or ("'+self.BA_j+'" IS NOT NULL and "'+self.flow_direction+'" in (\'2\',\'3\')))'
                    request=(QgsFeatureRequest().setFilterRect(self.fenetre)).setFilterExpression(texte).setSimplifyMethod(simple).setFlags(QgsFeatureRequest.ExactIntersect)
                    req_intra=(QgsFeatureRequest().setFilterRect(self.fenetre)).setFilterExpression('"'+self.impassibility+'" in (\'1\',\'2\',\'3\')').setSimplifyMethod(simple).setFlags(QgsFeatureRequest.ExactIntersect)
                    features=[f for f in layer.getFeatures(request)]
                    if self.flag_impassibility:
                        features_intra=[f for f in layer.getFeatures(req_intra)]
                    else:
                        features_intra=[]
                    progress = QProgressDialog("Limewise interpolation","Cancel",0,len(features)-1)
                    for k,i in enumerate(features):
                        progress.setValue(k)
                        sens=i.attribute(self.flow_direction)
                        diffusion=i.attribute(self.diffusion_direction)
                        if self.flag_variable_speed:
                            speed=60/(1000*i.attribute(self.diffusion_speed))
                        else:
                            speed=60/(1000*self.default_speed)
                        if sens in ['1','2','3'] :
                            geom=i.geometry()
                            zone=geom.buffer(self.radius,12).boundingBox()
                            self.deltax=int((zone.xMinimum()-self.ll[0])/self.pixel_size_x)
                            self.deltay=int((zone.yMinimum()-self.ll[1])/self.pixel_size_y)
                            self.dx=int(zone.width()/self.pixel_size_x)
                            self.dy=int(zone.height()/self.pixel_size_y)
                            l1=geom.length()
                            if geom.isMultipart():
                                geom_l=geom.asMultiPolyline()
                            else:
                                geom_l=geom.asPolyline()
                            
                            for p in range(self.dx):
                                d2x=self.deltax+p
                                for q in range(self.dy):
                                    d2y=self.deltay+q
                                    if 0<=d2x<self.nx and 0<=d2y<self.ny :
                                        pt1=QgsGeometry.fromPoint(QgsPoint(self.ll[0]+(d2x+0.5)*self.pixel_size_x,self.ll[1]+(d2y+0.5)*self.pixel_size_y))
                                        res=geom.closestSegmentWithContext(pt1.asPoint())
                                        d=round(res[0],self.decimals)

                                        if d<=grille_distance[d2x,d2y] and d<self.radius*self.radius:
                                            if d>0 and l1>0:
                                                pt2=res[1]
                                                if geom.isMultipart():
                                                    num_poly=-1
                                                    npts=0
                                                    for id_poly in geom_l:
                                                        if res[2]<npts+len(id_poly):
                                                            num_poly=(id_poly,npts)
                                                        else:
                                                            npts+=len(id_poly)
                                                    geom_a=[num_poly][:(res[2]-npts)]+[pt2]
                                                else:
                                                    geoma=geom_l[:res[2]]+[pt2]
                                                #geoma=QgsGeometry(geom)
                                                #geoma.insertVertex(pt2[0],pt2[1],res[2])
                                                l2=QgsGeometry.fromPolyline(geoma).length()
                                                if res[2]==0:
                                                    pt3=geom.vertexAt(res[2])
                                                    pt4=geom.vertexAt(res[2]+1)
                                                else:
                                                    try:
                                                        pt3=geom.vertexAt(res[2]-1)
                                                        pt4=geom.vertexAt(res[2])
                                                    except:
                                                        print(res,geom_l)
                                                        pt3=geom_l[res[2]-1]
                                                        pt4=geom_l[res[2]]
                                                p1=pt1.asPoint()
                                                test_sens=(pt4.x()-pt3.x())*(p1.y()-pt2.y())-(p1.x()-pt2.x())*(pt4.y()-pt3.y())
                                                if sens in ['1','3'] and not i.attribute(self.AB_j)==None:
                                                    if (diffusion in ['1','3'] and test_sens<=0) or (diffusion in ['2','3'] and test_sens>=0):
                                                        tj=i.attribute(self.AB_j)
                                                        if not tj==None:
                                                            ti=i.attribute(self.AB_i)
                                                            if not ti==None:
                                                                t=tj*(l2/l1)+ti*(1-(l2/l1))+math.sqrt(d)*speed
                                                                l3=QgsGeometry.fromPolyline([pt1.asPoint(),QgsPoint(pt2)])
                                                        result_test=False
                                                        if l3!=None:
                                                            if len(features_intra)>0:
                                                                for intra in features_intra:
                                                                    if intra.geometry().intersects(l3):
                                                                        result_test=True
                                                                        break
                                                        if result_test==False:
                                                            if (t<grille[d2x,d2y] and d==grille_distance[d2x,d2y]) or d<grille_distance[d2x,d2y]:
                                                                grille_distance[d2x,d2y] =d
                                                                grille[d2x,d2y] =t
                                                if sens in ['2','3'] and not i.attribute(self.BA_j)==None:
                                                    if (diffusion in ['1','3'] and test_sens>=0) or (diffusion in ['2','3'] and test_sens<=0):
                                                        tj=i.attribute(self.BA_j)
                                                        if not tj==None:
                                                            ti=i.attribute(self.BA_i)
                                                            if not ti==None:
                                                                t=ti*(l2/l1)+tj*(1-(l2/l1))+math.sqrt(d)*speed
                                                                l3=QgsGeometry.fromPolyline([pt1.asPoint(),QgsPoint(pt2)])
                                                        result_test=False
                                                        if l3!=None:
                                                            if len(features_intra)>0:
                                                                for intra in features_intra:
                                                                    if intra.geometry().intersects(l3):
                                                                        result_test=True
                                                                        break
                                                        if result_test==False:
                                                            if (t<grille[d2x,d2y] and d==grille_distance[d2x,d2y]) or d<grille_distance[d2x,d2y]:
                                                                grille_distance[d2x,d2y] =d
                                                                grille[d2x,d2y] =t
                    sortie=os.path.splitext(self.rasterfile)
                    fichier_grille=open(sortie[0]+".asc",'w')
                    fichier_grille.write("NCOLS {0:d}\nNROWS {1:d}\nXLLCORNER {2}\nYLLCORNER {3}\nDX {4}\nDY {5}\nNODATA_VALUE -9999\n".format(self.nx,self.ny,self.ll[0],self.ll[1],self.pixel_size_x,self.pixel_size_y))
                    fichier_grille2=open(sortie[0]+"_dist.asc",'w')
                    fichier_grille2.write("NCOLS {0:d}\nNROWS {1:d}\nXLLCORNER {2}\nYLLCORNER {3}\nDX {4}\nDY {5}\nNODATA_VALUE -9999\n".format(self.nx,self.ny,self.ll[0],self.ll[1],self.pixel_size_x,self.pixel_size_y))
                    g1=numpy.rot90(grille,1)
                    #g1=numpy.flipud(g1)
                    g2=numpy.rot90(grille_distance,1)
                    #g2=numpy.flipud(g2)
                    for i in g1:
                        fichier_grille.write(" ".join([str(ii) for ii in i])+"\n")
                    fichier_grille.close()
                    for i in g2:
                        fichier_grille2.write(" ".join([str(math.sqrt(ii)) for ii in i])+"\n")
                    fichier_grille2.close()

                    fichier_prj=open(sortie[0]+".prj",'w')
                    fichier2_prj=open(sortie[0]+"_dist.prj",'w')
                    fichier_prj.write(layer.crs().toWkt())
                    fichier2_prj.write(layer.crs().toWkt())
                    fichier_prj.close()
                    fichier2_prj.close()
                    nom_sortie=os.path.basename(sortie[0])
                    rlayer=QgsRasterLayer(sortie[0]+".asc",nom_sortie)
                    QgsMapLayerRegistry.instance().addMapLayer(rlayer)
#                    nom_fichier_iso=sortie[0]+"_iso.shp"
#                    champs=QgsFields()
#                    champs.append(QgsField("Id",QVariant.String))
#                    self.table_lignes=QgsVectorFileWriter(nom_fichier_iso,"UTF-8",champs,QGis.WKBMultiLineString
#                    ,self.iface.activeLayer().crs(),"ESRI Shapefile")
#                    for p in range(self.nx-1):
#                        for q in range(self.ny-1):
#                            self.contours(grille,p,q,0.1)
#                    iso_layer=QgsVectorLayer(nom_fichier_iso,nom_sortie+"_iso",'ogr')
#                    QgsMapLayerRegistry.instance().addMapLayer(iso_layer)
#                    del self.table_lignes
            else:
                QMessageBox().information(None,QCoreApplication.translate("Linear interpolation","Linear interpolation"),QCoreApplication.translate("The active layer isn't composed of linear objects","The active layer isn't composed of linear objects"))
        else:
            QMessageBox().information(None,QCoreApplication.translate("Linear interpolation","Linear interpolation"),QCoreApplication.translate("The active layer isn't a vector layer","The active layer isn't a vector layer"))

    def contours(self,grille, p,q,s):
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
        if lu>self.novalue:
            ilu=int(math.floor(lu/s))
        else:
            ilu=self.novalue
        if ld>self.novalue:
            ild=int(math.floor(ld/s))
        else:
            ild=self.novalue
        if ru>self.novalue:
            iru=int(math.floor(ru/s))
        else:
            iru=self.novalue
        if rd>self.novalue:
            ird=int(math.floor(rd/s))
        else:
            ird=self.novalue
        if ilu>self.novalue:
            ilu=min(max(ilu,int(math.floor(self.mini/s))),int(math.floor(self.maxi/s)))
        if ild>self.novalue:
            ild=min(max(ild,int(math.floor(self.mini/s))),int(math.floor(self.maxi/s)))
        if iru>self.novalue:
            iru=min(max(iru,int(math.floor(self.mini/s))),int(math.floor(self.maxi/s)))
        if ird>self.novalue:
            ird=min(max(ird,int(math.floor(self.mini/s))),int(math.floor(self.maxi/s)))
        if ilu==ild and ilu!=self.novalue:
            if ilu not in bordl:
                bordl[ilu]=[]
            bordl[ilu].append([p,q])
            if ilu+1 not in bordl:
                bordl[ilu+1]=[]
            bordl[ilu+1].append([p,q+1])
        if ild==ird and ild!=self.novalue:
            if ild not in bordd:
                bordd[ild]=[]
            bordd[ild].append([p,q+1])
            if ild+1 not in bordd:
                bordd[ild+1]=[]
            bordd[ild+1].append([p+1,q+1])
        if iru==ird and iru!=self.novalue:
            if ird not in bordr:
                bordr[ird]=[]
            bordr[ird].append([p+1,q])
            if ird+1 not in bordr:
                bordr[ird+1]=[]
            bordr[ird+1].append([p+1,q+1])
        if ilu==iru and ilu!=self.novalue:
            if ilu not in bordu:
                bordu[ilu]=[]
            bordu[ilu].append([p,q])
            if ilu+1 not in bordu:
                bordu[ilu+1]=[]
            bordu[ilu+1].append([p+1,q])
        if ilu<ild:
            if lu==self.novalue:
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
            if ld==self.novalue:
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
            if ld==self.novalue:
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
            if rd==self.novalue:
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
            if rd==self.novalue:
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
            if ru==self.novalue:
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
            if ru==self.novalue:
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
            if lu==self.novalue:
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
                    p1x=self.ll[0]+(p+1-0.02*((-1)**(int(j/2))))*self.pixel_size_x
                    p2x=self.ll[0]+(points[pt][j][0]+0.5)*self.pixel_size_x
                    q1y=self.ll[1]+(q+1-0.02*((-1)**(int(j/2))))*self.pixel_size_y
                    q2y=self.ll[1]+(points[pt][j][1]+0.5)*self.pixel_size_y
                    ligne1=QgsGeometry.fromMultiPolyline([[QgsPoint(p1x,q1y),QgsPoint(p2x,q2y)]])
                else:
                    p1x=self.ll[0]+(mx+0.5)*self.pixel_size_x
                    p2x=self.ll[0]+(points[pt][j][0]+0.5)*self.pixel_size_x
                    q1y=self.ll[1]+(my+0.5)*self.pixel_size_y
                    q2y=self.ll[1]+(points[pt][j][1]+0.5)*self.pixel_size_y
                    ligne1=QgsGeometry.fromMultiPolyline([[QgsPoint(p1x,q1y),QgsPoint(p2x,q2y)]])

                f1=QgsFeature()
                f1.setAttributes([pt*s])
                f1.setGeometry(ligne1)
                f2=QgsFeature()
                f2.setAttributes([(pt+1)*s])
                f2.setGeometry(ligne1)
                if min(lu,ld,ru,rd)>self.novalue:
                    if (pt*s,p,q) not in self.polys:
                        self.polys[pt*s,p,q]=[]
                    self.polys[pt*s,p,q].append(f1.geometry().asMultiPolyline())
                    if ((pt+1)*s,p,q) not in self.polys:
                        self.polys[(pt+1)*s,p,q]=[]
                    self.polys[(pt+1)*s,p,q].append(f2.geometry().asMultiPolyline())
                    
                    #self.table_lignes.addFeature(f1)
                    #self.table_lignes.addFeature(f2)
        if len(bordu)>0:
            bords=sorted(bordu.items(),key=lambda x:x[1][0])
            for pt in range(len(bords)-1):
                p1=self.ll[0]+(bords[pt][1][0][0]+0.5)*self.pixel_size_x
                p2=self.ll[0]+(bords[pt+1][1][0][0]+0.5)*self.pixel_size_x
                q1=self.ll[1]+(bords[pt][1][0][1]+0.5)*self.pixel_size_y
                q2=self.ll[1]+(bords[pt+1][1][0][1]+0.5)*self.pixel_size_y
                ligne1=QgsGeometry.fromMultiPolyline([[QgsPoint(p1,q1),QgsPoint(p2,q2)]])
                f1=QgsFeature()
                f1.setAttributes([bords[pt][0]*s])
                f1.setGeometry(ligne1)
                if q>0:
                    #if grille[p,q-1]==self.novalue or grille[p+1,q-1]==self.novalue:
                    if q<self.ny-1:
                        #if grille[p,q+1]>self.novalue and grille[p+1,q+1]>self.novalue:
                        if (bords[pt][0]*s, p,q) not in self.polys:
                            self.polys[bords[pt][0]*s,p,q]=[]
                        self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())
                            #self.table_lignes.addFeature(f1)
                else:
                    if (bords[pt][0]*s, p,q) not in self.polys:
                        self.polys[bords[pt][0]*s,p,q]=[]
                    self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())
                    #self.table_lignes.addFeature(f1)
        if len(bordl)>0:
            bords=sorted(bordl.items(),key=lambda x:x[1][0][1])
            for pt in range(len(bords)-1):
                #print(bords)
                p1=self.ll[0]+(bords[pt][1][0][0]+0.5)*self.pixel_size_x
                p2=self.ll[0]+(bords[pt+1][1][0][0]+0.5)*self.pixel_size_x
                q1=self.ll[1]+(bords[pt][1][0][1]+0.5)*self.pixel_size_y
                q2=self.ll[1]+(bords[pt+1][1][0][1]+0.5)*self.pixel_size_y
                ligne1=QgsGeometry.fromMultiPolyline([[QgsPoint(p1,q1),QgsPoint(p2,q2)]])
                f1=QgsFeature()
                f1.setAttributes([bords[pt][0]*s])
                f1.setGeometry(ligne1)
                if p>0:
                #if grille[p-1,q]==self.novalue or grille[p-1,q+1]==self.novalue:
                    if p<self.nx-1:
                        #if grille[p+1,q]>self.novalue and grille[p+1,q+1]>self.novalue:
                        if (bords[pt][0]*s, p,q) not in self.polys:
                            self.polys[bords[pt][0]*s,p,q]=[]
                        self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())                                
                            #self.table_lignes.addFeature(f1)
                else:
                    if (bords[pt][0]*s, p,q) not in self.polys:
                        self.polys[bords[pt][0]*s,p,q]=[]
                    self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())                    
                    #self.table_lignes.addFeature(f1)
        if len(bordr)>0:
            bords=sorted(bordr.items(),key=lambda x:x[1][0][1])
            for pt in range(len(bords)-1):
                #print(bords)
                p1=self.ll[0]+(bords[pt][1][0][0]+0.5)*self.pixel_size_x
                p2=self.ll[0]+(bords[pt+1][1][0][0]+0.5)*self.pixel_size_x
                q1=self.ll[1]+(bords[pt][1][0][1]+0.5)*self.pixel_size_y
                q2=self.ll[1]+(bords[pt+1][1][0][1]+0.5)*self.pixel_size_y
                ligne1=QgsGeometry.fromMultiPolyline([[QgsPoint(p1,q1),QgsPoint(p2,q2)]])
                f1=QgsFeature()
                f1.setAttributes([bords[pt][0]*s])
                f1.setGeometry(ligne1)
                if p<self.nx-2:
                #if grille[p+2,q]==self.novalue or grille[p+2,q+1]==self.novalue:
                    if q>-1:
                        #if grille[p,q]>self.novalue and grille[p,q+1]>self.novalue:
                        if (bords[pt][0]*s, p,q) not in self.polys:
                            self.polys[bords[pt][0]*s,p,q]=[]
                        self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())                                
                                #self.table_lignes.addFeature(f1)
                else:
                    if (bords[pt][0]*s, p,q) not in self.polys:
                        self.polys[bords[pt][0]*s,p,q]=[]
                    self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())                    
                    #self.table_lignes.addFeature(f1)
        if len(bordd)>0:
            bords=sorted(bordd.items(),key=lambda x:x[1][0])
            #print(bords)
            for pt in range(len(bords)-1):
                p1=self.ll[0]+(bords[pt][1][0][0]+0.5)*self.pixel_size_x
                p2=self.ll[0]+(bords[pt+1][1][0][0]+0.5)*self.pixel_size_x
                q1=self.ll[1]+(bords[pt][1][0][1]+0.5)*self.pixel_size_y
                q2=self.ll[1]+(bords[pt+1][1][0][1]+0.5)*self.pixel_size_y
                ligne1=QgsGeometry.fromMultiPolyline([[QgsPoint(p1,q1),QgsPoint(p2,q2)]])
                f1=QgsFeature()
                f1.setAttributes([bords[pt][0]*s])
                f1.setGeometry(ligne1)
                if q<self.ny-2:
                #if grille[p,q+2]==self.novalue or grille[p+1,q+2]==self.novalue:
                    if q>-1:
                    #if grille[p,q]>self.novalue and grille[p+1,q]>self.novalue:
                        if (bords[pt][0]*s, p,q) not in self.polys:
                            self.polys[bords[pt][0]*s,p,q]=[]
                        self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())                                
                        #self.table_lignes.addFeature(f1)
                else:
#                    self.table_lignes.addFeature(f1)
                    if (bords[pt][0]*s,p,q) not in self.polys:
                        self.polys[bords[pt][0]*s,p,q]=[]
                    self.polys[bords[pt][0]*s,p,q].append(f1.geometry().asMultiPolyline())



    def run_isolines(self):
        layer=self.iface.activeLayer()
        if not layer==None:
            if layer.type()==QgsMapLayer.RasterLayer:
                provider = layer.dataProvider()
                filePath = str(provider.dataSourceUri())
                self.raster_or = gdal.Open(filePath)
                nb_bands=layer.bandCount()
                self.dlg_iso.spinBox.setMaximum(nb_bands)
                m1=self.raster_or.GetRasterBand(1).GetMinimum()
                m2=self.raster_or.GetRasterBand(1).GetMaximum()
                if m1==None:
                    m1=0
                else:
                    m1=float(m1)
                if m2==None:
                    m2=1
                else:
                    m2=float(m2)
                m3=max(m2-m1,1e-10)
                self.polys={}
                if 'mini' not in dir(self):
                    self.dlg_iso.lineEdit.setText(str(m1))
                else:
                    self.dlg_iso.lineEdit.setText(str(self.mini))
                if 'maxi' not in dir(self):
                    self.dlg_iso.lineEdit_2.setText(str(m2))
                else:
                    self.dlg_iso.lineEdit_2.setText(str(self.maxi))
                if 'intervalle' not in dir(self):
                    self.dlg_iso.lineEdit_3.setText(str(10**int(math.log10(m3))))
                else:
                    self.dlg_iso.lineEdit_3.setText(str(self.intervalle))
                self.novalue=self.raster_or.GetRasterBand(1).GetNoDataValue()
                self.dlg_iso.show()
                result = self.dlg_iso.exec_()
                if result == 1:
                    self.nom_fichier_iso=self.dlg_iso.lineEdit_5.text()
                    if os.path.isfile(self.nom_fichier_iso):
                        QgsVectorFileWriter.deleteShapeFile(self.nom_fichier_iso)
                    self.intervalle=float(self.dlg_iso.lineEdit_3.text())
                    self.mini=float(self.dlg_iso.lineEdit.text())
                    self.maxi=float(self.dlg_iso.lineEdit_2.text())
                    sortie=os.path.splitext(self.nom_fichier_iso)
                    nom_sortie=os.path.basename(sortie[0])
                    rep_sortie=os.path.dirname(sortie[0])
                    grille = self.raster_or.GetRasterBand(nb_bands).ReadAsArray()
                    grille=numpy.rot90(grille,3)
                    champs2=QgsFields()
                    champs2.append(QgsField("id",QVariant.Double))
#                    champs2.append(QgsField("p",QVariant.Double))
#                   champs2.append(QgsField("q",QVariant.Double))
                    if self.dlg_iso.radioButton.isChecked()==False:
                        table_lignes=QgsVectorFileWriter(self.nom_fichier_iso,"UTF-8",champs2,QGis.WKBMultiPolygon,self.iface.activeLayer().crs(),"ESRI Shapefile")
                    else:
                        table_lignes=QgsVectorFileWriter(self.nom_fichier_iso,"UTF-8",champs2,QGis.WKBMultiLineString,self.iface.activeLayer().crs(),"ESRI Shapefile")
                    self.fenetre=layer.extent()
                    a=self.fenetre.toString().split(":")
                    p1=a[0].split(',')
                    p2=a[1].split(',')
                    self.ll=(float(p1[0]),float(p1[1]))
                    self.hauteur=float(p2[1])-float(p1[1])
                    self.largeur=float(p2[0])-float(p1[0])
                    self.nx=int(layer.width())
                    self.ny=int(layer.height())
                    self.pixel_size_x=round(self.largeur/self.nx,2)
                    self.pixel_size_y=round(self.hauteur/self.ny,2)
                    self.process=QProgressDialog("Generating isolines...","Cancel",0,(self.nx-1)*(self.ny-1))
                    self.process.forceShow()
                    for p in range(self.nx-1):
                        for q in range(self.ny-1):
                            self.process.setValue(p*(self.ny)-1+q)
                            self.contours(grille,p,q,self.intervalle)
                    npolys=len(self.polys)-1
                    self.process=QProgressDialog("Building Polygons...","Cancel",0,npolys)
                    self.process.forceShow()


                    conn = db.connect(':memory:')
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
                        li=self.polys[ff] 
                        self.process.setValue(k)
                        liste1=[QgsGeometry.fromMultiPolyline(l1) for l1 in li]
                        for j,i in enumerate(liste1):
                            #f1=QgsFeature(champs2)
                            #geom=i
                            #f1.setGeometry(geom)
                            #f1.setAttributes([float(ff[0]),ff[1],ff[2]])
                            #table_lignes.addFeature(f1)

                            texte='insert into '+nom_sortie +' values('+str(float(ff[0]))+','+str(ff[1])+','+str(ff[2])+',st_geomfromtext(\''+i.exportToWkt()+'\',2154))'
                            rs = c.execute(texte)
                            conn.commit()
                    #iso_layer=QgsVectorLayer(self.nom_fichier_iso,nom_sortie,"ogr")
                    #QgsMapLayerRegistry.instance().addMapLayer(iso_layer)
                    #os.unlink(rep_sortie+"/"+nom_sortie +".sqlite")
                    #del table_lignes

#                    if not os.path.isfile(rep_sortie+"/"+nom_sortie +".sqlite"):
#                        tlignes=QgsVectorLayer(self.nom_fichier_iso, nom_sortie, 'ogr')
#                        QgsVectorFileWriter.writeAsVectorFormat(tlignes,rep_sortie+"/"+nom_sortie +".sqlite","utf-8", None, "SQLite", False, None ,["SPATIALITE=YES",])
#                        del tlignes
#                    else:
#                        tlignes=NULL
                        
                    db_filename = rep_sortie+"/"+nom_sortie +".sqlite"
                    #conn = db.connect(db_filename)
                   
                    #texte='create virtual table "'+nom_sortie+ "_2\" using VirtualShape( '"+rep_sortie+"/"+nom_sortie +"',UTF-8,"+str(layer.crs().postgisSrid())+");"
                    #rs = c.execute(texte)
                    c#onn.commit()
                    if self.dlg_iso.radioButton.isChecked()==False:
                        texte='create table \"'+nom_sortie+"_polys\" as SELECT id, casttomultipolygon(polygonize("+nom_sortie+'.geom)) AS geom FROM \"'+nom_sortie+'\" GROUP BY id,p,q;'
                        rs = c.execute(texte)
                        conn.commit()
                        texte='create table \"'+nom_sortie+'_polys2" as SELECT id,st_union(geom) AS geom FROM \"'+nom_sortie+'_polys\" GROUP BY id;'
                        rs = c.execute(texte)
                        conn.commit()
                        texte='SELECT RecoverGeometryColumn(\"'+nom_sortie+"_polys2\","+'\'geom\','+str(layer.crs().postgisSrid())+', \'MULTIPOLYGON\', \'XY\')'
                        rs = c.execute(texte)
                        conn.commit()
                    else:
                        texte='create table \"'+nom_sortie+"_polys2"+'\" as SELECT "'+nom_sortie+'_2".\'id\' as Id, casttomultilinestring(st_union("'+nom_sortie+'_2".\'GEOMETRY\')) AS Geometry FROM \"'+nom_sortie+'_2\" GROUP BY  "'+nom_sortie+'_2".\'id\' ;'
                        rs = c.execute(texte)
                        conn.commit()
                        texte='SELECT RecoverGeometryColumn(\"'+nom_sortie+"_polys2\","+'\'geom\','+str(layer.crs().postgisSrid())+', \'MULTILINESTRING\', \'XY\')'
                        rs = c.execute(texte)
                        conn.commit()
                    
                    texte='select id, asWkt(geom) from '+nom_sortie+"_polys2"
                    rs=c.execute(texte)
                    resultat=c.fetchall()
                    conn.commit()
                    for r in resultat:
                        f1=QgsFeature(champs2)
                        geom=QgsGeometry.fromWkt(r[1])
                        f1.setGeometry(geom)
                        f1.setAttributes([float(r[0])])
                        table_lignes.addFeature(f1)
                   
#                    texte='drop table if exists "'+nom_sortie+'_2"'
#                    rs = c.execute(texte)
                    conn.close()
                    del c
                
                    del conn
                    del table_lignes
#                    uri = QgsDataSourceURI()
#                    uri.setDatabase(rep_sortie+"/"+nom_sortie +".sqlite")
#                    schema = ''
#                    table =nom_sortie+"_polys2"
#                    geom_column = 'geom'
#                    uri.setDataSource(schema, table, geom_column)
#                    display_name =nom_sortie+"_polys"
#                    iso_layer2 = QgsVectorLayer(uri.uri(), display_name, 'spatialite')
#                    QgsVectorFileWriter.deleteShapeFile(self.nom_fichier_iso)
#                    QgsVectorFileWriter.writeAsVectorFormat(iso_layer2, self.nom_fichier_iso, "utf-8", None, "ESRI Shapefile")
#                    del iso_layer2
#                    del uri
                    iso_layer3=QgsVectorLayer(self.nom_fichier_iso, nom_sortie, 'ogr')
#                    #iso_layer3.setLayerName(nom_sortie)
                    QgsMapLayerRegistry.instance().addMapLayer(iso_layer3)
#

                    
            else:
                QMessageBox().information(None,QCoreApplication.translate("Linear interpolation","Linear interpolation"),QCoreApplication.translate("The active layer isn't a raster layer","The active layer isn't a raster layer"))
        else:
            QMessageBox().information(None,QCoreApplication.translate("Isobands","Isobands"),QCoreApplication.translate("No active layer","No Active layer"))
        





    def remove_bad_lines( self, lines ):
        temp_geom = []
        if len( lines ) == 1:
          if len( lines[ 0 ] ) > 2:
            temp_geom = lines
          else:
            temp_geom = []
        else:
          temp_geom = [ elem for elem in lines if len( elem ) > 2 ]
        return temp_geom






    def connect(self,point_layer,radius):
        delta=float(radius)
        lines=self.iface.activeLayer()
        if not lines==None:
            if lines.geometryType()==1:
                couches=self.iface.mapCanvas().layers()
                index=QgsSpatialIndex()
                for i in lines.getFeatures():
                    if i.geometry().isMultipart():
                        i.setGeometry(QgsGeometry.fromPolyline(i.geometry().asMultiPolyline()[0]))
                    index.insertFeature(i)
                couche_points=QgsMapLayerRegistry.instance().mapLayersByName(point_layer)[0]
                if couche_points.geometryType()==0:
                    points=couche_points.getFeatures()
                    lines.startEditing()
                    lines.beginEditCommand(QCoreApplication.translate("Split polylines at connection","Split polylines at connection"))
                    nb=couche_points.featureCount()
                    for pos,pt in enumerate(points):
                        ptg=pt.geometry()
                        if ptg.isMultipart():
                            ptg=QgsGeometry.fromPoint(ptg.asMultiPoint()[0])
                        coor=ptg.asPoint()
                        nearest=index.intersects(QgsRectangle(coor.x()-delta,coor.y()-delta,coor.x()+delta,coor.y()+delta))
                        dmin=1e38
                        if len(nearest)>0:
                            for n in nearest:
                                f=lines.getFeatures(request=QgsFeatureRequest(n))
                                for g in f:
                                    d=g.geometry().distance(pt.geometry())
                                    if d<=dmin:
                                        dmin=d
                                        gmin=g
                            g=gmin
                            if g.geometry().distance(pt.geometry())<delta:
                                a=g.geometry().closestSegmentWithContext(ptg.asPoint())
                                if not(a[2]==0):
                                    geom=g.geometry()
                                    geom_id=g.id()
                                    att=g.attributes()
                                    connexion=QgsFeature()
                                    connexion.setGeometry(QgsGeometry.fromPolyline([ptg.asPoint(),a[1]]))
                                    connexion.setAttributes(att)
                                    lines.addFeature(connexion)
                                    geom.insertVertex(a[1][0],a[1][1],a[2])
                                    geoma=geom.asPolyline()[:a[2]+1]
                                    geomb=geom.asPolyline()[a[2]:]
                                    fa=QgsFeature()
                                    fa.setGeometry(QgsGeometry.fromPolyline(geoma))
                                    fa.setAttributes(att)
                                    lines.addFeature(fa)
                                    index.insertFeature(fa)
                                    fb=QgsFeature()
                                    fb.setGeometry(QgsGeometry.fromPolyline(geomb))
                                    fb.setAttributes(att)
                                    lines.addFeature(fb)
                                    index.insertFeature(fb)
                                    lines.deleteFeature(g.id())
                                    index.deleteFeature(g)
                    lines.endEditCommand()
                else:
                    QMessageBox().information(None,QCoreApplication.translate("Connect","Connect"),QCoreApplication.translate("The selected layer isn't composed of points","The selected layer isn't composed of points"))
            else:
                QMessageBox().information(None,QCoreApplication.translate("Connect","Connect"),QCoreApplication.translate("The active layer isn't composed of linear objects","The active layer isn't composed of linear objects"))
        else:
            QMessageBox().information(None,QCoreApplication.translate("Connect","Connect"),QCoreApplication.translate("No active layer","No active layer"))
        
        
