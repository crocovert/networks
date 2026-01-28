##cerema= group
##statistiques =name
##QgsProcessingParameterFeatureSource|couche|couche|5
##filtre= optional string
##variable= string  
##ponderation= string
##resultat= output table


library(dplyr)
p=ponderation
v=variable
library(data.table)
setDT(couche)
texte=paste0("couche[",filtre,",list(",p,"),by=list(",v,")]")


resultat=eval(parse(text=texte))