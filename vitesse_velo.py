from qgis.core import *
from qgis.gui import *

@qgsfunction(args='auto', group='Custom', referenced_columns=[])
def vitesse_velo(t0, feature, parent):
    """
    t0: average travel time field on flat road
    Calculate the cycling travel time taking into account slopes (needs à PolylineXYZ
    """
    points=feature.geometry().vertices()
    t_velo=0.0
    longueur=feature.geometry().length()
    for k,p in enumerate(points):
        if k==0:
            p0=p
        else:
            pt=p
            dist=pt.distance(p0)
            h=pt.z()-p0.z()
            pct=h*100.0/dist
            if h<(-10):
                t=(dist/longueur)*t0/2.5
            elif (-10)<=h<(-5):
                t=(dist/longueur)*t0/2
            elif (-5)<=h<(-2.5):
                t=(dist/longueur)*t0/1.5
            elif (-2.5)<=h<(2.5):
                t=(dist/longueur)*t0
            elif 2.5<=h<5:
                t=(dist/longueur)*t0*1.5
            elif 5<=h<10:
                t=(dist/longueur)*t0*2
            elif 10<=h:
                t=(dist/longueur)*t0*2.5
            else:
                t=(dist/longueur)*t0
            t_velo=t_velo+t
            p0=p
            del(pt)
    temps=t_velo
    del(points)
    return float(temps)
