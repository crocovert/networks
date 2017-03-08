# -*- coding: utf-8 -*-
"""
/***************************************************************************
 reseaux
                                 A QGIS plugin
 Créer
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
 This script initializes the plugin, making it known to QGIS.
"""

def classFactory(iface):
    # load reseaux class from file reseaux
    from reseaux import reseaux
    return reseaux(iface)
