from qgis.core import *
from qgis.gui import *
import os

@qgsfunction(group='Custom', referenced_columns=[])
def dirlist(path='.',complet=False):
    fichiers=os.listdir(path)
    resultat=list()
    for i in fichiers:
        if os.path.isdir(os.path.join(path,i)):
            if complet==True:
                resultat.append(os.path.join(path,i))
            else:
                resultat.append(i)
    return(resultat)
    
    """
    Calculates the sum of the two parameters value1 and value2.
    <h2>Example usage:</h2>
    <ul>
      <li>my_sum(5, 8) -> 13</li>
      <li>my_sum("field1", "field2") -> 42</li>
    </ul>
    """
    #return value1 + value2
