"""
Model exported as python.
Name : Modèle
Group : 
With QGIS : 34003
"""

from qgis.core import QgsProcessing, QgsDataProvider, QgsVectorDataProvider,QgsField
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterFeatureSource
from qgis.core import QgsProcessingParameterField
from qgis.core import QgsProcessingParameterMatrix, QgsVariantUtils
from qgis.PyQt.QtCore import QCoreApplication,QVariant
import processing, gc


class UpdateSpeedBdTopo(QgsProcessingAlgorithm):

    def initAlgorithm(self, config=None):
        self.addParameter(QgsProcessingParameterFeatureSource('routes_bdtopo', self.tr('BDTOPO road layer'), types=[QgsProcessing.TypeVectorLine], defaultValue=None))
        self.addParameter(QgsProcessingParameterField('nature', self.tr('Nature'), type=QgsProcessingParameterField.Any, parentLayerParameterName='routes_bdtopo', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterField('nb_voies', self.tr('Number of lanes'), type=QgsProcessingParameterField.Any, parentLayerParameterName='routes_bdtopo', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterField('urbain', self.tr('Urban'), type=QgsProcessingParameterField.Any, parentLayerParameterName='routes_bdtopo', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterField('taille_au', self.tr('Urban area size'), type=QgsProcessingParameterField.Any, parentLayerParameterName='routes_bdtopo', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterField('cat_commune', self.tr('Municipality category'), type=QgsProcessingParameterField.Any, parentLayerParameterName='routes_bdtopo', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterMatrix('table_des_vitesses', self.tr('Car speed table'), numberRows=1, hasFixedNumberRows=False, headers=['Type','Nb_voies','V_RC','V_URB'], 
                defaultValue=['Bac ou liaison maritime','0','1','1','Bretelle','0','50','50','Bretelle','1','50','50','Bretelle','2','60','50',
                'Chemin','0','1','1',
                'Escalier','0','0','1',
                'Rond-point','0','20','20','Rond-point','1','20','20','Rond-point','2','25','20',
                'Route empierrée','0','30','20',
                'Route à 1 chaussée','0','70','20','Route à 1 chaussée','1','80','20','Route à 1 chaussée','2','90','25','Route à 1 chaussée','3','90','25','Route à 1 chaussée','4','90','25',
                'Route à 2 chaussées','0','90','20','Route à 2 chaussées','1','90','25','Route à 2 chaussées','2','110','30','Route à 2 chaussées','3','110','30','Route à 2 chaussées','0','110','30',
                'Sentier','0','0','1',
                'Type autoroutier','0','120','90','Type autoroutier','1','90','60','Type autoroutier','2','120','90','Type autoroutier','3','120','90','Type autoroutier','4','120','90','Type autoroutier','5','120','90','Type autoroutier','6','120','90']))
        self.addParameter(QgsProcessingParameterMatrix('coef_pointe', self.tr('Peak hour factor'), numberRows=1, hasFixedNumberRows=False, headers=["Type aire urbaine",'0','1','2','3','4','5'], 
                defaultValue=['11','1.00','0.75','0.50','0.33','0.25','0.20',
                '12','1.00','0.85','0.70','0.60','0.50','0.45',
                '13','1.00','0.85','0.70','0.60','0.50','0.45',
                '20','1.00','0.95','0.90','0.85','0.80','0.75',
                '30','1.00','1.00','1.00','0.99','0.95','0.90']))
    def processAlgorithm(self, parameters, context, feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        couche = self.parameterAsVectorLayer(parameters, 'routes_bdtopo', context)
        table=self.parameterAsMatrix(parameters,'table_des_vitesses',context)
        pointe=self.parameterAsMatrix(parameters,'coef_pointe',context)
        nat=self.parameterAsFields(parameters,'nature',context)[0]
        nbv=self.parameterAsFields(parameters,'nb_voies',context)[0]
        urb=self.parameterAsFields(parameters,'urbain',context)[0]
        au1=self.parameterAsFields(parameters,'taille_au',context)[0]
        au2=self.parameterAsFields(parameters,'cat_commune',context)[0]
        
        
        vitesses={}
        coefs={}
        ncols=4
        for i in range(0,len(table),ncols):
            vitesses[(table[i],table[i+1],'Non')]=table[i+2]
            vitesses[(table[i],table[i+1],'Oui')]=table[i+3]
        for i in range(0,len(pointe),7):
            coefs[(pointe[i],'0')]=float(pointe[i+1])
            coefs[(pointe[i],'1')]=float(pointe[i+2])
            coefs[(pointe[i],'2')]=float(pointe[i+3])
            coefs[(pointe[i],'3')]=float(pointe[i+4])
            coefs[(pointe[i],'4')]=float(pointe[i+5])
            coefs[(pointe[i],'5')]=float(pointe[i+6])
        

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
        precision=2
         
            

        if 'v_hc' not in noms_champs:
            #tableau.startEditing()
            if tableau.dataProvider().capabilities() & QgsVectorDataProvider.ChangeAttributeValues:
                tableau.dataProvider().addAttributes([QgsField('v_hc',eval('QVariant.Double'),len=taille,prec=precision)])
            else:
                feedback.setProgressText(self.tr("Warning: The layer is not editable"))
            #tableau.commitChanges()

        if 't_hc' not in noms_champs:
            if tableau.dataProvider().capabilities() & QgsVectorDataProvider.ChangeAttributeValues:
                tableau.dataProvider().addAttributes([QgsField('t_hc',eval('QVariant.Double'),len=taille,prec=precision)])
            else:
                feedback.setProgressText(self.tr("Warning: The layer is not editable"))
            
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
                nb_voies=f[nbv]

                if not nb_voies:
                    nb_voies=0
                urbain=f[urb]
                if not urbain:
                    urbain='Non'
                nature=f[nat]
                if not nature:
                    nature='Route à 1 chaussée'

                lig=(f[nat],str(f[nbv]),f[urb])
                if lig in vitesses:
                    valeur=float(vitesses[lig])
                else:
                    valeur=float(vitesses[(str(f[nat]),'0','Non')])
                

                cat1=f[au1]
                if not cat1:
                    cat1='0'
                cat2=f[au2]
                if not cat2:
                    cat2='30'

                coef=float(coefs[(cat2,cat1)])
                l=f.geometry().length()
                try:
                    valid={id_champ1: valeur,id_champ2: coef*valeur}
                except:
                    feedback.setProgressText(';'.join([str(i) for i in f.attributes()]))

                
                tableau.dataProvider().changeAttributeValues({num:valid})
                #a2=tableau2.dataProvider().changeAttributeValues({num:valid})
                feedback.setProgress(p*100/n)
        else:
            feedback.setProgressText(self.tr("Warning: The layer is not editable"))


        tableau.endEditCommand()
        tableau.commitChanges()
        gc.collect()
        return {'routes_bdtopo':couche}

    def tr(self, string, context=''):
        if context == '':
            context = self.__class__.__name__
        return QCoreApplication.translate(context, string)


    def name(self):
        return 'UpdateSpeedBdTopo'

    def displayName(self):
        return self.tr('Update IGN BDTOPO car speeds')

    def tr(self, string):
        return QCoreApplication.translate('UpdateSpeedBdTopo', string)
        
    def group(self):
        return 'Network'

    def groupId(self):
        return 'Network'

    def createInstance(self):
        return UpdateSpeedBdTopo()
    
    

