##cerema= group
##statistics =name
##layer= vector
##filter= optional string
##variable= string  
##weight= string
##result= output table


library(dplyr)
p=ponderation
v=variable
library(data.table)
setDT(couche)
texte=paste0("couche[",filtre,",list(",p,"),by=list(",v,")]")


resultat=eval(parse(text=texte))