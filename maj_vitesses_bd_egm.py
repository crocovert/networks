"""
Model exported as python.
Name : Modèle
Group : 
With QGIS : 34003
"""

from qgis.core import QgsProcessing, QgsDataProvider, QgsVectorDataProvider,QgsField
from qgis.core import QgsProcessingAlgorithm
from qgis.core import Qgis
from qgis.core import QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterFeatureSource
from qgis.core import QgsProcessingParameterField,QgsProcessingParameterNumber
from qgis.core import QgsProcessingParameterMatrix, QgsVariantUtils
from qgis.PyQt.QtCore import QCoreApplication,QVariant
import processing, gc


class UpdateSpeedEgm(QgsProcessingAlgorithm):

    def initAlgorithm(self, config=None):
        self.addParameter(QgsProcessingParameterFeatureSource('routes_bdtopo', self.tr('EGM/ERM roads'), types=[QgsProcessing.TypeVectorLine], defaultValue=None))
        self.addParameter(QgsProcessingParameterField('nature', self.tr('RTT'), type=QgsProcessingParameterField.Any, parentLayerParameterName='routes_bdtopo', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterField('urbain', self.tr('COR'), type=QgsProcessingParameterField.Any, parentLayerParameterName='routes_bdtopo', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterField('nb_chau', self.tr('MED'), type=QgsProcessingParameterField.Any, parentLayerParameterName='routes_bdtopo', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterNumber('pointe', self.tr('Peak hour factor'),type=Qgis.ProcessingNumberParameterType.Double,defaultValue=0.5))
        self.addParameter(QgsProcessingParameterMatrix('table_des_vitesses', self.tr('Car speed table'), numberRows=1, hasFixedNumberRows=False, headers=['RTT','MED','V_RC','V_URB'], 
                defaultValue=[
                '16','1','90','50',
                '16','2','120','90',
                '14','1','90','50',
                '14','2','110','70',
                '15','1','80','50',
                '15','2','90','50',
                '984','1','70','20',
                '984','2','80','25']))

    def processAlgorithm(self, parameters, context, feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        couche = self.parameterAsVectorLayer(parameters, 'routes_bdtopo', context)
        table=self.parameterAsMatrix(parameters,'table_des_vitesses',context)
        #pointe=0.5
        rtt=self.parameterAsFields(parameters,'nature',context)[0]
        cor=self.parameterAsFields(parameters,'urbain',context)[0]
        med=self.parameterAsFields(parameters,'nb_chau',context)[0]
        pointe=self.parameterAsDouble(parameters,'pointe',context)
        
        
        
        vitesses={}
        coefs={}
        ncols=4
        for i in range(0,len(table),ncols):
            vitesses[(str(table[i]),str(table[i+1]),'Non')]=str(table[i+2])
            vitesses[(str(table[i]),str(table[i+1]),'Oui')]=str(table[i+3])
        
        
        #feedback.setProgressText(str(vitesses))
        # Compute the number of steps to display within the progress bar and
        # get features from source
        ##a=fenetre.split(",")
        ##fenetre2=QgsRectangle(float(a[0]),float(a[2]),float(a[1]),float(a[3]))
        tableau=couche
        #champ_existant=champ_existant.strip('"').strip("'")
        #print(couche)
        champs=tableau.fields()
        chaine="QVariant.Double"
        noms_champs=[c.name() for c in champs]
        #feedback.setProgressText(champ_existant+' '+ ":".join(noms_champs))
        taille=15
        precision=5
         
            

        if 'v_hc' not in noms_champs:
            #tableau.startEditing()
            if tableau.dataProvider().capabilities() & QgsVectorDataProvider.ChangeAttributeValues:
                tableau.dataProvider().addAttributes([QgsField('v_hc',eval('QVariant.Double'),len=taille,prec=precision)])
            else:
                feedback.setProgressText(self.tr("Warning: The layer is not editable"))
        
            #tableau.startEditing()
        if 't_hc' not in noms_champs:
            if tableau.dataProvider().capabilities() & QgsVectorDataProvider.ChangeAttributeValues:
                tableau.dataProvider().addAttributes([QgsField('t_hc',eval('QVariant.Double'),len=taille,prec=precision)])
            else:
                feedback.setProgressText(self.tr("Warning: The layer is not editable"))
            #tableau.commitChanges()
        if 'v_hp' not in noms_champs:
            #tableau.startEditing()
            if tableau.dataProvider().capabilities() & QgsVectorDataProvider.ChangeAttributeValues:
                tableau.dataProvider().addAttributes([QgsField('v_hp',eval('QVariant.Double'),len=taille,prec=precision)])
            else:
                feedback.setProgressText(self.tr("Warning: The layer is not editable"))

        if 't_hp' not in noms_champs:
            #tableau.startEditing()
            if tableau.dataProvider().capabilities() & QgsVectorDataProvider.ChangeAttributeValues:
                tableau.dataProvider().addAttributes([QgsField('t_hp',eval('QVariant.Double'),len=taille,prec=precision)])
            else:
                feedback.setProgressText(self.tr("Warning: The layer is not editable"))
            
            lib_champ1='v_hc'
        else:
            lib_champ2='v_hc'
        
        tableau.updateFields()
        
        tableau2=couche
        


        id_champ1=tableau2.fields().lookupField('v_hc')
        id_champ2=tableau2.fields().lookupField('v_hp')
        id_champ3=tableau2.fields().lookupField('t_hc')
        id_champ4=tableau2.fields().lookupField('t_hp')
        #nbv=id_champ2=max(couche.fields().lookupField('NB_VOIES'),couche.fields().lookupField('nb_voies'))
        #urb=id_champ2=max(couche.fields().lookupField('URBAIN'),couche.fields().lookupField('urbain'))
        #nat=id_champ2=max(couche.fields().lookupField('NATURE'),couche.fields().lookupField('nature'))
        
        
        feedback.setProgressText(self.tr("update car speed peak hour and off-peak hour"))



        #au1=id_champ2=max(couche.fields().lookupField('TAAV2017'),couche.fields().lookupField('taav2017'))
        #au2=id_champ2=max(couche.fields().lookupField('CATEAAV2017'),couche.fields().lookupField('cateav2017'))

        #feedback.setProgressText(str(nb))
        n=tableau2.featureCount()
        feedback.setProgressText(self.tr("updating field..."))
        tableau.startEditing()
        tableau.beginEditCommand(self.tr("updating field"))
        
        if tableau.dataProvider().capabilities() & QgsVectorDataProvider.ChangeAttributeValues:
            for p,f in enumerate(couche.getFeatures()):
                num=f.id()
                hps='Non'
                if str(f[cor])=='2':
                    hps='Oui'
                    
                l=f.geometry().length()
                lig=(str(f[rtt]),str(f[med]),hps)
                #print(lig)
                if lig in vitesses:
                    valeur=float(vitesses[lig])
                else:
                    valeur=20.0
                


                coef=pointe
                valid={id_champ1: valeur,id_champ2: coef*valeur, id_champ3: l*60/(valeur*1000), id_champ4: l*60/(valeur*1000*coef)}
                
                tableau.changeAttributeValues(num,valid)
                #a2=tableau2.dataProvider().changeAttributeValues({num:valid})
                feedback.setProgress(p*100/n)
        else:
            feedback.setProgressText(self.tr("Warning: The layer is not editable"))


        tableau.endEditCommand()
        tableau.commitChanges()
        gc.collect()
        return {'routes_egm':couche}



    def name(self):
        return 'UpdateSpeedEgm'

    def displayName(self):
        return self.tr('Update EGM/ERM car speed')

    def tr(self, string):
        return QCoreApplication.translate('UpdateSpeedEgm', string)

    def tr(self, string, context=''):
        if context == '':
            context = self.__class__.__name__
        return QCoreApplication.translate(context, string)
        
    def group(self):
        return self.tr('Network')

    def groupId(self):
        return 'Network'

    def createInstance(self):
        return UpdateSpeedEgm()
    
    

