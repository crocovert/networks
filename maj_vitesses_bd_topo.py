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
import ast


class UpdateSpeedBdTopo(QgsProcessingAlgorithm):

    def initAlgorithm(self, config=None):
        self.addParameter(QgsProcessingParameterFeatureSource('routes_bdtopo', self.tr('BDTOPO road layer'), types=[QgsProcessing.TypeVectorLine], defaultValue=None))
        self.addParameter(QgsProcessingParameterField('nature', self.tr('Nature'), type=QgsProcessingParameterField.Any, parentLayerParameterName='routes_bdtopo', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterField('nb_voies', self.tr('Number of lanes'), type=QgsProcessingParameterField.Any, parentLayerParameterName='routes_bdtopo', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterField('urbain', self.tr('Urban'), type=QgsProcessingParameterField.Any, parentLayerParameterName='routes_bdtopo', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterField('taav2017', self.tr('AAV volume'), type=QgsProcessingParameterField.Any, parentLayerParameterName='routes_bdtopo', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterField('cateav2017', self.tr('AAV Category'), type=QgsProcessingParameterField.Any, parentLayerParameterName='routes_bdtopo', allowMultiple=False, defaultValue=None))

        self.addParameter(QgsProcessingParameterMatrix('table_des_vitesses', self.tr('Car speed table'), numberRows=1, hasFixedNumberRows=False, headers=['NATURE','NB_VOIES','URBAIN','VITESSE'], 
                defaultValue=[
                'Autoroute','1','Non','110',
                'Autoroute','2','Non','130',
                'Autoroute','1','Oui','90',
                'Autoroute','2','Oui','110',
                'Quasi-autoroute','1','Non','110',
                'Quasi-autoroute','2','Non','110',
                'Quasi-autoroute','1','Oui','70',
                'Quasi-autoroute','2','Oui','90',
                'Route à 2 chaussées','1','Non','90',
                'Route à 2 chaussées','2','Non','110',
                'Route à 2 chaussées','1','Oui','50',
                'Route à 2 chaussées','2','Oui','70',
                'Bretelle','1','Non','50',
                'Bretelle','2','Non','70',
                'Bretelle','1','Oui','50',
                'Bretelle','2','Oui','50',
                'Route étroite','1','Non','50',
                'Route étroite','2','Non','50',
                'Route étroite','1','Oui','30',
                'Route étroite','2','Oui','30',
                'Chemin','1','Non','30',
                'Chemin','2','Non','30',
                'Chemin','1','Oui','20',
                'Chemin','2','Oui','20',
                'Rond-point','1','Non','30',
                'Rond-point','2','Non','30',
                'Rond-point','1','Oui','30',
                'Rond-point','2','Oui','30']))
                
        self.addParameter(QgsProcessingParameterMatrix('coefficients_reducteurs_aav', self.tr('AAV traffic peak reduction factor'), numberRows=1, hasFixedNumberRows=False, headers=['CATEAAV2017','TAAV2017','COEF'], 
                defaultValue=[
                '11','0','1.0',
                '12','0','1.0',
                '13','0','1.0',
                '20','0','1.0',
                '30','0','1.0',
                '11','1','0.75',
                '12','1','0.85',
                '13','1','0.85',
                '20','1','0.95',
                '30','1','1.0',
                '11','2','0.5',
                '12','2','0.7',
                '13','2','0.7',
                '20','2','0.9',
                '30','2','1.0',
                '11','3','0.33',
                '12','3','0.6',
                '13','3','0.6',
                '20','3','0.85',
                '30','3','0.99',
                '11','4','0.25',
                '12','4','0.5',
                '13','4','0.5',
                '20','4','0.8',
                '30','4','0.95',
                '11','5','0.2',
                '12','5','0.45',
                '13','5','0.45',
                '20','5','0.75',
                '30','5','0.9'
                ]))

    def processAlgorithm(self, parameters, context, feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        couche = self.parameterAsVectorLayer(parameters, 'routes_bdtopo', context)
        table=self.parameterAsMatrix(parameters,'table_des_vitesses',context)
        table2=self.parameterAsMatrix(parameters,'coefficients_reducteurs_aav',context)
        
        nat=self.parameterAsFields(parameters,'nature',context)[0]
        nbv=self.parameterAsFields(parameters,'nb_voies',context)[0]
        urb=self.parameterAsFields(parameters,'urbain',context)[0]
        au1=self.parameterAsFields(parameters,'taav2017',context)[0]
        au2=self.parameterAsFields(parameters,'cateav2017',context)[0]
        
        
        vitesses={}
        coefs={}
        ncols=4
        for i in range(0,len(table),ncols):
            vitesses[(str(table[i]),str(table[i+1]),str(table[i+2]))]=str(table[i+3])
        
        ncols2=3
        for i in range(0,len(table2),ncols2):
            coefs[(str(table2[i]),str(table2[i+1]))]=str(table2[i+2])
        
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
                # CORRECTION : Remplacement de eval() par getattr() pour sécuriser Bandit (B307)
                tableau.dataProvider().addAttributes([QgsField('v_hc', getattr(QVariant, 'Double'), len=taille, prec=precision)])
            else:
                feedback.setProgressText(self.tr("Warning: The layer is not editable"))
        
            #tableau.startEditing()
        if 'v_hp' not in noms_champs:
            if tableau.dataProvider().capabilities() & QgsVectorDataProvider.ChangeAttributeValues:
                # CORRECTION : Remplacement de eval() par getattr() pour sécuriser Bandit (B307)
                tableau.dataProvider().addAttributes([QgsField('v_hp', getattr(QVariant, 'Double'), len=taille, prec=precision)])
            else:
                feedback.setProgressText(self.tr("Warning: The layer is not editable"))
            #tableau.commitChanges()
            lib_champ1='v_hc'
        else:
            lib_champ2='v_hc'
        
        tableau.updateFields()
        
        tableau2=couche
        


        id_champ1=tableau2.fields().lookupField('v_hc')
        id_champ2=tableau2.fields().lookupField('v_hp')
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


            # Bloquer tous les rafraîchissements

            tableau.blockSignals(True)
            
            
            for p,f in enumerate(couche.getFeatures()):
                num=f.id()
                v=f[nbv]
                if not v:
                    v='1'
                if float(v)>1:
                    v='2'
                else:
                    v='1'
                u=f[urb]
                if not u:
                    u='Non'
                if u=='True' or u==1 or u=='Non':
                    u='Non'
                else:
                    u='Oui'
                
                lig=(str(f[nat]),v,u)
                if lig in vitesses:
                    valeur=float(vitesses[lig])
                else:
                    valeur=30.0
                

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

                
                tableau.changeAttributeValues(num,valid)
                #a2=tableau2.dataProvider().changeAttributeValues({num:valid})
                feedback.setProgress(p*100/n)
        else:
            feedback.setProgressText(self.tr("Warning: The layer is not editable"))


        tableau.endEditCommand()
        tableau.commitChanges()
        tableau.blockSignals(False)
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