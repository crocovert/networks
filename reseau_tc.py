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

from PyQt5.QtCore import QCoreApplication,QVariant,QDate,QDateTime,QTime
from qgis.core import *
from qgis.utils import *
from qgis.core import (QgsProcessing,
                       QgsFeatureSink,
                       QgsProcessingAlgorithm,
                       QgsProcessingParameterFeatureSource,
                       QgsProcessingParameterFeatureSink,
                       QgsProcessingParameterNumber,
                       QgsProcessingParameterBoolean,
                       QgsProcessingParameterString,
                       QgsProcessingParameterExtent,
                       QgsProcessingParameterField,
                       QgsProcessingParameterExpression,
                       QgsProcessingParameterFileDestination)

import io, locale
import datetime,re

class Google_Stop:
    def __init__(self):
        self.numero=""
        self.nom=""
        self.x=0.0
        self.y=0.0
    def __repr__(self):
        return(unicode({'numero': self.numero,'nom':self.nom,'x':self.x,'y':self.y}))

class Google_Route:
    def __init__(self):
        self.numero=""
        self.nom=""
        self.type='tc'
    def __repr__(self):
        return(unicode({'numero': self.numero,'num':self.nom}))       

     
 
    
class Google_Trip:
    def __init__(self):
        self.route_id=""
        self.service_id=""
        self.trip_id=""
    def __repr__(self):
        return(unicode({'route_id': self.route_id,'service_id':self.service_id,'trip_id':self.trip_id}))


class Google_Calendar:
    def __init__(self):
        self.semaine=""
        self.calendrier=""
        self.debut=QDate()
        self.fin=QDate()
    def __repr__(self):
        return(unicode({'semaine': self.semaine,'calendrier':self.calendrier,'debut':self.debut,'fin':self.fin}))

class Google_Calendar_Date:
    def __init__(self):
        self.date=QDate()
        self.type=0
        self.service_id=""
    def __repr__(self):
        return(unicode({'date': self.date,'type':self.type}))
        
        
class Google_Stop_Time:
    def __init__(self):
        self.trip_id=""
        self.num_arret=""
        self.heure_arr=0.0
        self.heure_dep=0.0
        self.num_ordre=0
    def __repr__(self):
        return(unicode({'trip_id': self.trip_id,'num_arret':self.num_arret,'heure_arr':self.heure_arr,'heure_dep':self.heure_dep,'num_ordre':self.num_ordre}))


    
    



class ReseauTC(QgsProcessingAlgorithm):
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

    INPUT= 'INPUT'
    DEBUT_PERIODE = 'DEBUT_PERIODE'
    FIN_PERIODE = 'FIN_PERIODE'
    OUTPUT='OUTPUT'

    def initAlgorithm(self, config):
        """
        Here we define the inputs and output of the algorithm, along
        with some other properties.
        """
        self.addParameter(
            QgsProcessingParameterFile(
                self.INPUT,
                self.tr('GTFS folder'),
                QgsProcessingParameterFile.Folder
            )
        )
        self.addParameter(
            QgsProcessingParameterString(
                self.DEBUT_PERIODE,
                self.tr('Calendar start'),
                datetime.date.today().strftime("%d/%m/%Y")
            )
        )
        self.addParameter(
            QgsProcessingParameterString(
                self.FIN_PERIODE,
                self.tr('Calendar end'),
                datetime.date.today().strftime("%d/%m/%Y")
            )
        )
        # We add a feature sink in which to store our processed features (this
        # usually takes the form of a newly created vector layer when the
        # algorithm is run in QGIS).
        self.addParameter(
            QgsProcessingParameterFileDestination(
                self.OUTPUT,
                self.tr('Musliw timetable network'),
                '*.txt'
            )
        )
        
    def lit_google_stops(self,nom_stops):
        google_stops = {}
        fichier_stops = io.open(nom_stops,encoding="utf_8_sig")
        for  i,ligne in enumerate(fichier_stops):
            if i==0:    
                header =  ligne.split(',') 
                headers = {}
                for j,ii in enumerate(header):
                    headers[ii.strip()] = j;
            else:
                    delim="\""
                    elements =re.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)",ligne[:-1])
                    for ch in elements:
                        ch=ch.replace("\"", "")

                    google_stop = Google_Stop()
                    google_stop.numero = elements[headers["stop_id"]]
                    google_stop.nom = elements[headers["stop_name"]]
                    if locale.localeconv()["decimal_point"]==",":
                        google_stop.x = float(elements[headers["stop_lon"]].replace(".", ","))
                        google_stop.y = float(elements[headers["stop_lat"]].replace(".", ","))
                        
                    else:
                        google_stop.x = float(elements[headers["stop_lon"]])
                        google_stop.y = float(elements[headers["stop_lat"]])
                    google_stops[google_stop.numero] = google_stop
        fichier_stops.close()
        return google_stops
            
            
    def lit_google_routes(self,nom_routes):
        google_routes = {}
        modes={'0':'tram','1':'metro','2':'train','3':'bus','4':'ferry','5':'cable','6':'gondole','7':'funi'}
        fichier_routes = io.open(nom_routes,encoding="utf_8_sig")
        for i,ligne in enumerate(fichier_routes):
            if i==0:
                header = ligne[:-1].split(',')
                headers = {}
        
                for j,ii in enumerate(header):
                    headers[ii.strip('"')] = j

        
            else:
                h = []
                head = ligne.strip('\n').strip('\r')
                elements=re.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)",head)


                google_route = Google_Route()
                google_route.numero = elements[headers["route_id"]]
                if "route_short_name" in headers:
                    google_route.nom = elements[headers["route_short_name"]]
                elif "route_long_name" in headers:
                    google_route.nom = elements[headers["route_long_name"]]
                else:
                    google_route.nom = " "
                if "route_type" in headers:
                    if elements[headers["route_type"]] in modes:
                        google_route.type =modes[elements[headers["route_type"]]]
                google_routes[google_route.numero] = google_route

        fichier_routes.close()
        return google_routes


    def lit_google_trips(self,nom_trips):
        google_trips = {}
        fichier_trips =io.open(nom_trips,encoding="utf_8_sig")

        for i,ligne in enumerate(fichier_trips):
            if i==0:
                header = ligne.strip('\n').strip('\r').split(',')
                headers = {}
                for j,ii  in enumerate(header):
                    headers[ii.strip('"')] = j;
                
            else:
                h = []
                delim = "\"" 
                head = ligne.split(delim)
                for ch in head:
                    h.append(ch.replace(", ", "_ "))
                chaine = "".join(h)


                elements = chaine.split(',')


                google_trip = Google_Trip();
                google_trip.route_id = elements[headers["route_id"]].strip()
                google_trip.service_id = elements[headers["service_id"]].strip()
                google_trip.trip_id = elements[headers["trip_id"]].strip();
                google_trips[google_trip.trip_id] = google_trip


                
        fichier_trips.close()

        return google_trips

    def  lit_google_calendar_dates(self,nom_calendar_dates):
        google_calendar_dates= {}
        if os.path.isfile(nom_calendar_dates):
            fichier_calendar_dates = io.open(nom_calendar_dates,encoding="utf_8_sig")
            for i,ligne in enumerate(fichier_calendar_dates):
                if i==0:
                    header =ligne.strip('\n').strip('\r').split(',')
                    headers = {}
                    for j,ii  in enumerate(header):
                        headers[ii.strip('"')] = j
                else:
                    h = []
                    delim = "\"" 
                    head = ligne.strip('\n').strip('\r').split(delim)
                    for ch in head:
                        h.append(ch.replace(", ", "_ "))
                    chaine = "".join(h)
                    elements = chaine.split(',')
                    google_calendar_date = Google_Calendar_Date()
                    google_calendar_date.date = QDate(int(elements[headers["date"]][0:4]), int(elements[headers["date"]][4:6]),  int(elements[headers["date"]][6:8])).toPyDate()
                    google_calendar_date.type = int(elements[headers["exception_type"]])
                    service_id = elements[headers["service_id"]]
                    if service_id in google_calendar_dates:
                        google_calendar_dates[service_id].append(google_calendar_date)
                        
                    else:
                        
                        google_calendar_dates[service_id]=[]
                        google_calendar_dates[service_id].append(google_calendar_date)
            fichier_calendar_dates.close()
        return google_calendar_dates




    def lit_google_calendars(self,nom_calendars,debut_cal, fin_cal, google_calendar_dates):
        google_calendars ={}
        if os.path.isfile(nom_calendars):
            fichier_calendars = io.open(nom_calendars,encoding="utf_8_sig")
            for i, ligne in enumerate(fichier_calendars):

                
                if i==0:
                    header = ligne.strip('\n').strip('\r').split(',')
                    headers = {}
                    for j,ii  in enumerate(header):
                        headers[ii.strip('"')] = j
                else:
                        h = []
                        delim = "\"" 
                        head = ligne.strip('\n').strip('\r').split(delim)
                        for ch in head:
                            h.append(ch.replace(", ", "_ "))
                        chaine = "".join(h)


                        elements = chaine.split(',')

                        service_id = elements[headers["service_id"]]
                        
                        google_calendar = Google_Calendar()
                        google_calendar.semaine = "".join([elements[headers[k]] for k in ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']])
                        google_calendar.debut = QDate(int(elements[headers["start_date"]][0:4]), int(elements[headers["start_date"]][4:6]), int(elements[headers["start_date"]][6:8])).toPyDate()
                        google_calendar.fin =  QDate(int(elements[headers["end_date"]][0:4]), int(elements[headers["end_date"]][4:6]), int(elements[headers["end_date"]][6:8])).toPyDate()
                        duree_cal = max((fin_cal - debut_cal).days, 1)
                        jour = debut_cal

                        calendrier=""
                        for i in range(duree_cal+1):
                            jour_semaine = jour.isoweekday()-1
                            if (google_calendar.debut <= jour <= google_calendar.fin and google_calendar.semaine[jour_semaine] == '1'):
                                calendrier += "O"
                            
                            else:
                                calendrier += "N"
                            
                            jour = jour+ datetime.timedelta(days=1)


                        
                        google_calendar.calendrier = calendrier
                        google_calendars[service_id]=google_calendar



            fichier_calendars.close()



        for  cal in google_calendar_dates:
            if  cal not in google_calendars:
                duree_cal=max((fin_cal - debut_cal).days+1,1)
                cal_sem='N'*duree_cal
                gc=Google_Calendar()
                gc.calendrier=cal_sem
                gc.debut=debut_cal
                gc.fin=fin_cal
                gc.semaine='N'*7
                google_calendars[cal]=gc


            if cal in google_calendar_dates:
                for caldate in google_calendar_dates[cal]:
                    date_jour=caldate.date
                    typjour = caldate.type
                    if (debut_cal<=date_jour<=fin_cal):
                        delta=(date_jour-debut_cal).days
                        if (typjour == 1):
                            google_calendars[cal].calendrier = google_calendars[cal].calendrier[0: delta] + "O" + google_calendars[cal].calendrier[delta + 1:]
                        
                        elif (typjour == 2):
                            google_calendars[cal].calendrier = google_calendars[cal].calendrier[0: delta] + "N" + google_calendars[cal].calendrier[delta + 1:]

        return google_calendars
            


    def lit_google_stop_times(self, nom_stop_times):
        google_stop_times = {}
        fichier_stop_times = io.open(nom_stop_times,encoding="utf_8_sig")
        for i,ligne in enumerate(fichier_stop_times):
                if i==0:
                    header = ligne.strip('\n').strip('\r').split(',')
                    headers = {}
                    for q, ii in enumerate(header):
                        headers[ii.strip('"')] = q
                else:
                    h = []
                    delim = "\"" 
                    head = ligne.split(delim)
                    for ch in head:
                        h.append(ch.replace(", ", "_ "))

                    chaine = "".join( h)


                    elements = chaine.split(',')
                    passage = Google_Stop_Time()
                   
                    passage.trip_id=elements[headers["trip_id"]]
                    h1 = elements[headers["arrival_time"]].split(':')
                    h2 = elements[headers["departure_time"]].split(':')
                    if len(h1) > 1:
                        passage.heure_arr = float(h1[0]) * 60.0 + float(h1[1]) + float(h1[2]) / 60.0
                        passage.heure_dep = float(h2[0]) * 60.0+ float(h2[1]) + float(h2[2]) / 60.0
                        passage.num_arret=elements[headers["stop_id"]]
                        passage.num_ordre= int(elements[headers["stop_sequence"]])
                        if passage.trip_id not in google_stop_times:
                            google_stop_times[passage.trip_id] = []
                  
                        google_stop_times[passage.trip_id].append([passage.num_ordre, passage])
                    
                    
                   

                
        fichier_stop_times.close()
        for i in google_stop_times:
            google_stop_times[i]=sorted(google_stop_times[i],key= lambda x: x[0])


        return google_stop_times
            


    def cree_chainages(self, google_routes, google_trips, google_calendars, google_stop_times,feedback):
        chainages = {}
        for inc,service in enumerate(google_stop_times):
            feedback.setProgress(inc*100/len(google_stop_times))
            chaine=""
            for num_ordre,passage in google_stop_times[service]:
                chaine += unicode(passage.num_arret)+ ";"
            if  chaine not in chainages:
                chainages[chaine] = []
                    
            trip=Google_Trip()
            chainages[chaine].append(google_trips[service])
        return chainages;


    def cree_musliw(self,nom_musliw, google_routes,  google_trips, google_calendars, google_stop_times,  google_chainages, google_stops, feedback):
        i=0
        fichier_musliw = io.open(nom_musliw,"w",encoding="utf8")

        for inc,chaine in enumerate(google_chainages):
            feedback.setProgress(inc*100/len(google_chainages))
            i+= 1
            j = 0

            for mission in google_chainages[chaine]:

                if mission.route_id in google_routes:
                    elements = google_stop_times[mission.trip_id]
                    n = len(elements)
                    j+=1
                    textel = ""
                    for  k in range(n-1):
                        if elements[k][1].heure_dep > elements[k + 1][1].heure_dep:
                            elements[k + 1][1].heure_dep+=1440.0
                        if elements[k][1].heure_arr > elements[k + 1][1].heure_arr:
                            elements[k + 1][1].heure_arr += 1440.0
                        if elements[k][1].num_arret not in google_stops:
                            arret = Google_Stop()
                            arret.nom = elements[k][1].num_arret
                            arret.x = 0
                            arret.y = 0
                            google_stops[elements[k][1].num_arret] = arret

                        if elements[k + 1][1].num_arret not in google_stops:
                            arret = Google_Stop()
                            arret.nom = elements[k + 1][1].num_arret
                            arret.x = 0
                            arret.y = 0
                            google_stops[elements[k + 1][1].num_arret] = arret


                        
                        textel = unicode(elements[k][1].num_arret)
                        textel += ";" + unicode(elements[k + 1][1].num_arret)
                        textel += ";0;0"
                        textel += ";" + unicode(i) + ";" + unicode(j)
                        textel += ";" + unicode(elements[k][1].heure_dep )+ ";" + unicode(elements[k + 1][1].heure_arr)
                        textel += ";" + google_calendars[mission.service_id].calendrier + ";"
                        textel += google_routes[mission.route_id].nom + "|" + google_stops[elements[k][1].num_arret].nom + "-" + google_stops[elements[k + 1][1].num_arret].nom + ";"+google_routes[mission.route_id].type+";0\n"
                        if len(google_calendars[mission.service_id].calendrier.split('O')) > 1:
                            fichier_musliw.write(textel)
                            

        fichier_musliw.close()


    def processAlgorithm(self, parameters, context, feedback):
        """
        Here is where the processing itself takes place.
        """

        # Retrieve the feature source and sink. The 'dest_id' variable is used
        # to uniquely identify the feature sink, and must be included in the
        # dictionary returned by the processAlgorithm function.
        fichier_GTFS = self.parameterAsFile(parameters, self.INPUT, context)
        debut_calendrier=self.parameterAsString(parameters,self.DEBUT_PERIODE,context)
        fin_calendrier=self.parameterAsString(parameters,self.FIN_PERIODE,context)
        fichier_Musliw=self.parameterAsFileOutput(parameters, self.OUTPUT,context)
        # Compute the number of steps to display within the progress bar and
        # get features from source
        ##a=fenetre.split(",")
        ##fenetre2=QgsRectangle(float(a[0]),float(a[2]),float(a[1]),float(a[3]))
        os.chdir(fichier_GTFS)
        date_debut=QDate.fromString(debut_calendrier, "d/M/yyyy").toPyDate()
        date_fin=QDate.fromString(fin_calendrier, "d/M/yyyy").toPyDate()
        sortie=fichier_Musliw
        feedback.setProgressText(self.tr(u'Reading stops'))
        google_stops = self.lit_google_stops("stops.txt")
        feedback.setProgressText(self.tr(u'Reading routes'))
        google_routes = self.lit_google_routes("routes.txt")
        feedback.setProgressText(self.tr(u'Reading trips'))
        google_trips = self.lit_google_trips("trips.txt")
        feedback.setProgressText(self.tr(u"Reading calendars_dates"))
        google_calendar_dates = self.lit_google_calendar_dates( "calendar_dates.txt")
        feedback.setProgressText(self.tr(u'Reading calendars'))
        google_calendars = self.lit_google_calendars( "calendar.txt", date_debut, date_fin, google_calendar_dates)
        feedback.setProgressText(self.tr(u"Reading stop_times"))
        google_stop_times = self.lit_google_stop_times( "stop_times.txt")
        feedback.setProgressText(self.tr(u"Generating lines"))
        google_chainages=self.cree_chainages(google_routes, google_trips, google_calendars, google_stop_times,feedback)
        feedback.setProgressText(self.tr(u'Generation Musliw file'))
        self.cree_musliw(sortie, google_routes, google_trips, google_calendars, google_stop_times, google_chainages, google_stops,feedback)
        
        return {self.OUTPUT:self.OUTPUT}


    def name(self):
        """
        Returns the algorithm name, used for identifying the algorithm. This
        string should be fixed for the algorithm, and must not be localised.
        The name should be unique within each provider. Names should contain
        lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'musliw_timetable_network'

    def displayName(self):
        """
        Returns the translated algorithm name, which should be used for any
        user-visible display of the algorithm name.
        """
        return self.tr('Musliw timetable network')

    def group(self):
        """
        Returns the name of the group this algorithm belongs to. This string
        should be localised.
        """
        return self.tr('Network')

    def groupId(self):
        """
        Returns the unique ID of the group this algorithm belongs to. This
        string should be fixed for the algorithm, and must not be localised.
        The group id should be unique within each provider. Group id should
        contain lowercase alphanumeric characters only and no spaces or other
        formatting characters.
        """
        return 'Network'

    def tr(self, string):
        return QCoreApplication.translate('ReseauTC', string)
        
        
    def shortHelpString(self):
        return self.tr("""
        Generates a Musliw timetable network from GTFS data (using prepare_GTFS script before is recommended)
		        
        Parameters:
            GTFs folder : GTFS folder 
			calendar start: date of the first day of the period
            caldendar_end: dat of the last day of the periode
            musliw_timetable_network: name of the generated Musliw network file
        """)

    def createInstance(self):
        return ReseauTC()
