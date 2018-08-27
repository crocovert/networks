<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr">
<context>
    <name>AjoutChamp</name>
    <message>
        <location filename="ajout_champ.py" line="95"/>
        <source>Field</source>
        <translation>Champ</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="105"/>
        <source>Type</source>
        <translation>Type</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="113"/>
        <source>Size</source>
        <translation>Taille</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="124"/>
        <source>Precision</source>
        <translation>Précision</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="136"/>
        <source>Filter</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="150"/>
        <source>Formula</source>
        <translation>Formule</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="208"/>
        <source>updating field...</source>
        <translation>mise à jour du champ...</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="210"/>
        <source>updating field</source>
        <translation>mise à jour du champ</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="269"/>
        <source>
        Add or update a field in a Qgis layer from an expression formula on a set of rows
        
        Parameters:
            layer : a vector layer
            field : name of the field to update or name of the new field
            type : field data type (if new field)
            size : field size (if new field)
            precision : field precision (if new field and real type)
            filter: expression determining which rows will be updated
            formula : expression that will be written in the field( for filtered rows only)
            
        </source>
        <translation>        Ajoute ou met à jour un champ dans une couhe Qgis à partir d&apos;une expression sur une sélection d&apos;enregistrements
        
        Paramètres:
            couche : une couche vectorielle
            champ : nom du champ à créer ou mettre à jour
            type : type de donnée du champ (si nouveau)
            size : taille du champ (si nouveau)
            precision : precision du champ (si nouveau et de type numérique)
            filtre: expression filtre spécifiant les enregistrements à mettre à jour
            formule : expression qui sera écrite dans le champ
            
        </translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="86"/>
        <source>Layer</source>
        <translation>Couche</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="238"/>
        <source>Update field</source>
        <translation>Mise à jour champ</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="245"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
</context>
<context>
    <name>Building graph</name>
    <message>
        <location filename="creer_graphe.py" line="213"/>
        <source>Building graph</source>
        <translation>Créer graphe</translation>
    </message>
</context>
<context>
    <name>ConcatReseaux</name>
    <message>
        <location filename="concat_reseaux.py" line="81"/>
        <source>Network files elements</source>
        <translation>Réseaux à concaténer</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="87"/>
        <source>Global network</source>
        <translation>Réseau multimodal</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="162"/>
        <source>
        Concatenate Musliw networks elements,
		timetable based network elements, indivudal modes elements and connector elements in order to generate a global multimodal network as input for Musliw tool
        
        Parameters:
            sources : Musliw networks elements (use &lt;shift&gt; and &lt;ctrl&gt; in order to select several files)
			musliw_file: name of the global network file (txt)
        </source>
        <translation>        Concatene différents réseaux Musliw,réseaux à horaires,de transport individuel, des connecteurspour générer un réseau multimodal utilisable en entrée pour le logiciel Musliw
        
        Paramètres:
            Réseaux à concaténer : Réseaux Musliw à concaténer (utiliser &lt;shift&gt; et &lt;ctrl&gt; pour sélectionner plusieurs fichiers)
            Réseau multimodal: Nom du réseau global multimodal (txt)
        </translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="139"/>
        <source>Concatenate networks</source>
        <translation>Concatener réseaux</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="146"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
</context>
<context>
    <name>ConnectNodes2Lines</name>
    <message>
        <location filename="connect_nodes2lines.py" line="208"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="89"/>
        <source>Nodes</source>
        <translation>Noeuds</translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="96"/>
        <source>Radius(m)</source>
        <translation>Rayon(m)</translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="133"/>
        <source>Split polylines at connections</source>
        <translation>Eclate les polylignes aux connections</translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="136"/>
        <source>Connecting points to lines...</source>
        <translation>Connexion des points aux lignes...</translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="201"/>
        <source>Connect nodes to lines</source>
        <translation>Connecter des points à des lignes</translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="221"/>
        <source>
        Connect points to a a linear objetcs layers within a search radius. Points are conencted to the closest line. 
        The closest line is splitted at the shorstest distance point in two lines, and a line is generated between the point and the closest point
        The lines layer is in editable mode in order to be alble to cancel the connections.
        
        Parameters:
            lines : lines layer (linear objects)
			nodes: points layer
            radius: search radius (m)
        </source>
        <translation>        Connecte des points à des objets linéaires à l&apos;intérieur d&apos;un certain rayon de recherche. Les points sont connectés à la polyligne la plus proche. La polyligne la plus proche est alors scindée en deux parties et une ligne est générée entre le point et la polyligne la plus proche
        La couche des lignes est alors placé en mode édition pour permettre à l&apos;utilisateur d&apos;annuler les modifications
 line is generated between the point and the closest point
        
        Paramètres:
            réseau : couche d&apos;objets linéaires
			noeuds: couche d&apos;objets ponctuels
            rayons: rayon de recherche (m)
        </translation>
    </message>
</context>
<context>
    <name>ConnecteursGeo</name>
    <message>
        <location filename="connecteurs_geo.py" line="93"/>
        <source>Stops</source>
        <translation>Arrêts</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="100"/>
        <source>Stop_id</source>
        <translation>Stop_id</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="108"/>
        <source>i-text</source>
        <translation>Texte noeud i</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="115"/>
        <source>i-mode</source>
        <translation>mode noeud i</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="122"/>
        <source>Nodes</source>
        <translation>Noeuds</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="129"/>
        <source>node_id</source>
        <translation>node_id</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="137"/>
        <source>j-text</source>
        <translation>Texte noeud j</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="144"/>
        <source>j-mode</source>
        <translation>Mode noeud j</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="151"/>
        <source>Radius(m)</source>
        <translation>Rayon(m)</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="161"/>
        <source>Speed</source>
        <translation>Vitesse</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="171"/>
        <source>Maximum number</source>
        <translation>Nombre max</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="181"/>
        <source>Connectors file</source>
        <translation>Fichier connecteurs</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="226"/>
        <source>length</source>
        <translation>longueur</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="227"/>
        <source>time</source>
        <translation>temps</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="228"/>
        <source>mode</source>
        <translation>mode</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="275"/>
        <source> connected nodes</source>
        <translation>noeuds connectés</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="315"/>
        <source>
        Generate a layer of linear objects corresponding to connections between two ponts layers (e.g. PT stops and roads nodes)
        
        Parameters:
            stops : stops layer
			stop_id: stop id
			nodes: nodes layer
			node_id: node id
			radius: search radius(m)
			i-text: text at node i (start node)
			i-mode: mode at node i (start node)
			j-text: text at node j (end node)
			j-mode: mode at node j (end node)
			speed: travel speed on connectors (0= infinite speed)
			connectors file: name of the resulting connectors layer
			NB: the tool generates in the same time a txt file in Musliw format (same name as connectors file with txt extension)
			
        </source>
        <translation>        Crée un couche d&apos;objets linéaires correspondant aux connecteurs entre deux couches d&apos;objets ponctuels (ex: les arrêts TC et les noeuds routiers)
        
        Paramètres:
            stops : couche des arrêtsr
			stop_id: stop id
			nodes:couche des noeuds
			node_id: node id
			rayon(m): rayon de recherche(m)
			texte noeud i: texte au noeud i (noeud début)
			mode au noeud i: mode au noeud i (noeud début)
			texte noeud j: texte au noeud j (noeud fin)
			mode au noeud j: mode au noeud j (noeud fin)
			vitesse:vitesse sur les connecteurs (0= vitesse infinie =temps nul)
			fichier connecteurs: nom de la table des connecteurs
			NB: L&apos;outil génère en même temps un fichier txt au format Musliw (même nom que la table connecteurs mais avec l&apos;extension txt)
			
        </translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="295"/>
        <source>Build connectors</source>
        <translation>Créer connecteurs</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="302"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
</context>
<context>
    <name>Contours</name>
    <message>
        <location filename="contours.py" line="94"/>
        <source>Raster</source>
        <translation>Raster</translation>
    </message>
    <message>
        <location filename="contours.py" line="100"/>
        <source>Band</source>
        <translation>Bande</translation>
    </message>
    <message>
        <location filename="contours.py" line="108"/>
        <source>Min</source>
        <translation>Min</translation>
    </message>
    <message>
        <location filename="contours.py" line="116"/>
        <source>Max</source>
        <translation>Max</translation>
    </message>
    <message>
        <location filename="contours.py" line="124"/>
        <source>Interval</source>
        <translation>Intervalle</translation>
    </message>
    <message>
        <location filename="contours.py" line="132"/>
        <source>No Value</source>
        <translation>Valeur absente</translation>
    </message>
    <message>
        <location filename="contours.py" line="140"/>
        <source>Polygons</source>
        <translation>Polygones</translation>
    </message>
    <message>
        <location filename="contours.py" line="316"/>
        <source>Isovalue polygons</source>
        <translation>Contours iso-valeurs</translation>
    </message>
    <message>
        <location filename="contours.py" line="216"/>
        <source>Grid interpolation...</source>
        <translation>Interpolation de la grille...</translation>
    </message>
    <message>
        <location filename="contours.py" line="257"/>
        <source>Generating isovalue polygons...</source>
        <translation>Génération des polygones iso-valeurs...</translation>
    </message>
    <message>
        <location filename="contours.py" line="697"/>
        <source>
        Generates isovalue polygons from a rester layer (ex: in order to genarate isochrones areas)
		        
        Parameters:
            raster: input raster layer name
			band: band to compute
			min: minimum isovalue area to genarate
			max: maximum isovalue area to generate
			interval: step between each isovalue
			no_value: value corresponding to the raster no_value
			polygons: True= genarates polygons: False generates Polylines
			result: name of the resulted isovalue polygons layer
        </source>
        <translation>        Généère des polygones iso-valeurs à partir d&apos;une couche Rasterr (ex: pour générer des surfaces isochrones)
		        
        Parameters:
            raster:nom de la couche raster
			bande: bande raster à analyser
			min: valeur minimum du polygone isovaleur à générer
			max: valeur maximum du polygone isovaleur à générer
			interval: intervalle entre chaque polygone iso-valeur
			valeur absente: valeur correspondant à l&apos;absence de données dans le raster
			polygones: True=Génère des polygones: False génère des polylignes
			contours iso-valeurs: nom de la couche iso_valeurs en sortie
        </translation>
    </message>
    <message>
        <location filename="contours.py" line="323"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
</context>
<context>
    <name>CreerGraphe</name>
    <message>
        <location filename="creer_graphe.py" line="276"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="92"/>
        <source>Direction</source>
        <translation>Sens</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="101"/>
        <source>Prefix</source>
        <translation>Préfixe</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="111"/>
        <source>Nodes layer</source>
        <translation>Table des noeuds</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="292"/>
        <source>
        Build a graph from a linear layer (create a node layer, i and j fields filled with node id at start and end node) taking into account the direction of flows
        
        Parameters:
            network : Network layer (linear objects)
			prefix: prefix for node ids (ex: &apos;MAP&apos; and n° 12563 =&gt; MAP12563)
			direction: flow direction (&apos;0&apos; prohibited, &apos;1&apos; one way objet direction, &apos;2&apos;, one way inverse object direction, &apos;3&apos; both directions
			nodes_file: nodes layer (arcs ends)
        </source>
        <translation>        Crée un graphe à partir d&apos;un couche d&apos;objets linéaires (crée une couche de noeuds, crée et met à jour les champs i, j et ij avec les identifiants de noeuds) en tenant compte du sens de circulation
        
        Paramètres:
            réseau : Couche réseau (objets linéaires)
			préfixe: préfixepour les identifiants de noeuds (ex: &apos;MAP&apos; et n° 12563 =&gt; MAP12563)
			sens: sens de circulation (&apos;0&apos;interdit, &apos;1&apos; sens unique sens de a géométrie, &apos;2&apos;, sens unique sens inverse de la géométrie , &apos;3&apos; double sens
			fichier noeuds: couche des noeuds (extrémités des arcs)
        </translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="269"/>
        <source>Build graph</source>
        <translation>Créer graphe</translation>
    </message>
</context>
<context>
    <name>ImportGTFS</name>
    <message>
        <location filename="import_gtfs.py" line="91"/>
        <source>GTFS Folder</source>
        <translation>Répertoire GTFS</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="98"/>
        <source>Calendar start</source>
        <translation>Début calendrier</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="105"/>
        <source>Calendar end</source>
        <translation>Fin calendrier</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="112"/>
        <source>Start time</source>
        <translation>Heure début</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="119"/>
        <source>End time</source>
        <translation>Heurefin</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="126"/>
        <source>Table names</source>
        <translation>Nom des tables</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="133"/>
        <source>CRS</source>
        <translation>CRS</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="140"/>
        <source>Ouput folder</source>
        <translation>Répertorie destination</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="146"/>
        <source>Encoding</source>
        <translation>Enconage</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="194"/>
        <source>ident</source>
        <translation>ident</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="195"/>
        <source>name</source>
        <translation>nom</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="196"/>
        <source>arrivals</source>
        <translation>arrivees</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="197"/>
        <source>departures</source>
        <translation>departs</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="201"/>
        <source>ligne_name</source>
        <translation>nom_ligne</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="204"/>
        <source>lines_count</source>
        <translation>nb_lignes</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="205"/>
        <source>services_count</source>
        <translation>nb_services</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="242"/>
        <source>Reading calendars...</source>
        <translation>Lecture des calendars...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="269"/>
        <source>reading calendar dates...</source>
        <translation>Lectures des calendar_dates...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="291"/>
        <source>Reading routes...</source>
        <translation>Lectures des routes...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="316"/>
        <source>Reading trips...</source>
        <translation>Lecture des trips...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="340"/>
        <source>Reading stop times...</source>
        <translation>Lecture des stop_times...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="401"/>
        <source>Generating arcs and lines...</source>
        <translation>Génération des arcs et lignes...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="489"/>
        <source>
        Scan a GTFS folder and generates the layer of stops, and the layer of simplified arcs and lines
		Computes the transport offer for the specified time period  and calendar (number of stops)
        
        Parameters:
            GTFS_folder : GTFS folder path
			calendar start: calendar date of the first day of the period (dd/mm/YYYY)
			calendar_end: calendar date of the last day of the period (dd/mm/YYYY)
			start_time: start time of the period (hh:mm:ss)
			end_time: end time of the period (hh:mm:ss)
			table names: root for generated tables (ex: IC =&gt; IC_nodes.shp, IC_arcs.shp and IC_lines.shp)
			CRS: generated tables CRS
			encoding: encoding
			
			
        </source>
        <translation>
        Scanne un répertoire GTFS et généère une couche d&apos;arrêts, d&apos;arcs et de tronçons de lignes simplifés
		Calcule d&apos;offre de transport sur une période et une plage horaire définies (nombre de passages)
        
        Paramètres:
           Répertoire GTFS : Chemin du répertoire GTFS
			Début calendrier: date du premier jour de la période (dd/mm/YYYY)
			Fin calendrier:date du dernier jour de la période (dd/mm/YYYY)
			Heure début: heure de début de la plage horaire (hh:mm:ss)
			Heure fin: Heure de fin de la plage horaire (hh:mm:ss)
			nom des tables:racine du nom des tables (ex: IC =&gt; IC_nodes.shp, IC_arcs.shp et IC_lines.shp)
			CRS: CRS des tables générées
			encodage: encodage
			
			</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="469"/>
        <source>GTFS import</source>
        <translation>Import GTFS</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="476"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
</context>
<context>
    <name>Interpole</name>
    <message>
        <location filename="interpole.py" line="100"/>
        <source>Network</source>
        <translation>
        </translation>
    </message>
    <message>
        <location filename="interpole.py" line="107"/>
        <source>Window</source>
        <translation>Fenêtre</translation>
    </message>
    <message>
        <location filename="interpole.py" line="114"/>
        <source>i-cost</source>
        <translation>Temps i</translation>
    </message>
    <message>
        <location filename="interpole.py" line="122"/>
        <source>j-cost</source>
        <translation>Temps j</translation>
    </message>
    <message>
        <location filename="interpole.py" line="131"/>
        <source>Direction</source>
        <translation>Sens</translation>
    </message>
    <message>
        <location filename="interpole.py" line="140"/>
        <source>Spread</source>
        <translation>Diffusion</translation>
    </message>
    <message>
        <location filename="interpole.py" line="149"/>
        <source>Impassibility</source>
        <translation>Impasse</translation>
    </message>
    <message>
        <location filename="interpole.py" line="157"/>
        <source>Pixels nb x</source>
        <translation>Nb pixels x</translation>
    </message>
    <message>
        <location filename="interpole.py" line="165"/>
        <source>Pixels nb y</source>
        <translation>Nb pixels y</translation>
    </message>
    <message>
        <location filename="interpole.py" line="173"/>
        <source>Pixel size x</source>
        <translation>Taille pixel x</translation>
    </message>
    <message>
        <location filename="interpole.py" line="181"/>
        <source>Pixel size y</source>
        <translation>Taille pixel y</translation>
    </message>
    <message>
        <location filename="interpole.py" line="189"/>
        <source>Decimals</source>
        <translation>Décimales</translation>
    </message>
    <message>
        <location filename="interpole.py" line="197"/>
        <source>Radius(m)</source>
        <translation>Rayon(m)</translation>
    </message>
    <message>
        <location filename="interpole.py" line="205"/>
        <source>Spread speed</source>
        <translation>Vitesse de diffusion</translation>
    </message>
    <message>
        <location filename="interpole.py" line="213"/>
        <source>Impassable?</source>
        <translation>Intraversables?</translation>
    </message>
    <message>
        <location filename="interpole.py" line="220"/>
        <source>Raster file</source>
        <translation>Fichier Raster</translation>
    </message>
    <message>
        <location filename="interpole.py" line="465"/>
        <source>
        Implements a linear based interpolation in order to build a raster
        representing iso-values from a linear objects file
        and travel times at i-node and j-node
        
        Paramameters:
            network : network layer
            window : working area
            i-node cost : cost at node i
            j-node : cost at node j
            direction : flow direction (&apos;0&apos;,&apos;1&apos;,&apos;2&apos;,&apos;3&apos;): &apos;0&apos; prohibited, &apos;1&apos; flow in the object direction,
            &apos;2&apos; flow in the reverse object direction, &apos;3&apos; flow in both directions
            spread : side of spread inside blocks (&apos;0&apos;,&apos;1&apos;,&apos;2&apos;,&apos;3&apos;) (&apos;0&apos; spread prohibited, &apos;1&apos; right-side spread only,
            &apos;2&apos; lef-side spread only, &apos;3&apos; both sides spread
            Impassability : Impassability (&apos;0&apos;,&apos;3&apos;) (&apos;0&apos; impassable road, &apos;3&apos; traversable road)
            number of pixel x : number of pixels in x of the output raster
            number of pixel y : number of pixels in y of the output raster
            pixel size in x : pixel size in x(m)  (optional)
            pixel size inyx : pixel size in y (m)  (optional)
            decimals : number of decimals for approximation (e.g 6 correspond to 1e-6)
            radius : search radius m inside blocks
            spread speed : speeed of spread inside blocks in km/h (60 for iso-distance maps)
            impassable : when selected impassable elements ara taken into account  for iso-values computations
            result : output raster layer
            </source>
        <translation>
        Effectue une interpolatio nlinéaire pour générer un raster
        représentant des contours iso-valeurs à partird&apos;objets linéaires
        et de temps de parcours aux noeud i et j
        
        Paramètres:
            réseau : couche de réseau
            fenêtre : aire d&apos;analyse
            temps en i : temps/coût au noeud i
            temps en j : temps/coût au noeud j
            sens : sens de circualation (&apos;0&apos;,&apos;1&apos;,&apos;2&apos;,&apos;3&apos;): &apos;0&apos;interdit, &apos;1&apos; sens unique sens de la géométrie,
            &apos;2&apos; sens unique sens inverse de la géométrie, &apos;3&apos; double sens
            diffusion :sens de diffusion (&apos;0&apos;,&apos;1&apos;,&apos;2&apos;,&apos;3&apos;) (&apos;0&apos; interdit, &apos;1&apos; côté droit seulement,
            &apos;2&apos; côté gauche seulement, &apos;3&apos; deux sens
            Intraversabilité :Intraversable (&apos;0&apos;,&apos;3&apos;) (&apos;0&apos;intraversable, &apos;3&apos; traversable)
            nb pixels x : nombre de pixels en x du raster
            nb pixels y : nombre de pixels en y du raster
            taille pixel x : taille du pixel en x(m)  (optional)
            taille pixel y : taille du pixel en y(m)  (optional)
            décimales :nombre de décimales pour approximation ( 6 correspond à 1e-6)
            rayon(m) :rayon de recherche à l&apos;intérieur des ilôts
            vitesse de diffusion :vitesse de diffusion à l&apos;intérieur des ilôts en km/h (60 pour les cartes  iso-distance)
            intraversable : lorsque que le contrôle est sélectionné l&apos;algorithme tient compte des emprises intraversables
            fichier Raster : fichier Raster généré
            </translation>
    </message>
    <message>
        <location filename="interpole.py" line="442"/>
        <source>Linear interpolation</source>
        <translation>Interpolation linéaire</translation>
    </message>
    <message>
        <location filename="interpole.py" line="449"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
</context>
<context>
    <name>Inverser</name>
    <message>
        <location filename="inverser.py" line="175"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="inverser.py" line="89"/>
        <source>Reverted network</source>
        <translation>Réseau inversé</translation>
    </message>
    <message>
        <location filename="inverser.py" line="97"/>
        <source>Add to network?</source>
        <translation>Ajouter au réseau?</translation>
    </message>
    <message>
        <location filename="inverser.py" line="129"/>
        <source>Add direction &apos;2&apos;</source>
        <translation>Ajouter sens 2</translation>
    </message>
    <message>
        <location filename="inverser.py" line="191"/>
        <source>
        Reverse arc directions and update i, j and ij fields to preserve the graph consistency
        
        
        Parameters:
            network : network layer (linear objects)
			reverted network: name of the reverted network layer
            add_to_network: if True adds the reverted network to the initial one
        </source>
        <translation>        Inverse la géométrie des arcs et met à jour i,j et ij pour préserver la cohérence du graphe
        
        
        Paramètres:
            réseau : couche réseau (objets linéaires)
			réseau inversé:Nom du réseau inversé
            ajouter au réseau: si True ajoute le réseau inversé au réseau intial
</translation>
    </message>
    <message>
        <location filename="inverser.py" line="168"/>
        <source>Reverse arcs</source>
        <translation>Inverser arcs</translation>
    </message>
</context>
<context>
    <name>Majtitj</name>
    <message>
        <location filename="maj_titj.py" line="276"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="96"/>
        <source>Travel times file</source>
        <translation>Fichier temps de parcours</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="102"/>
        <source>Musliw time</source>
        <translation>temps Musliw</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="109"/>
        <source>Arc time</source>
        <translation>temps arc</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="118"/>
        <source>Departure/arrival</source>
        <translation>Départ/arrivée</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="118"/>
        <source>Departure</source>
        <translation>Départs</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="118"/>
        <source>Arrival</source>
        <translation>Arrivée</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="127"/>
        <source>i-node time</source>
        <translation>temps en i</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="136"/>
        <source>j-node time</source>
        <translation>temps en j</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="145"/>
        <source>Initial/final waiting time?</source>
        <translation>temps d&apos;attente initial/final?</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="189"/>
        <source>updating ti tj</source>
        <translation>Mise à jour ti et tj</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="229"/>
        <source>updating ti and tj...</source>
        <translation>Mise à jout ti et tj...</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="292"/>
        <source>
        Read the travel times file &quot;.._temps.txt&quot; computed by Musliw and creates (if they don&apos;t exist) in the network layer fields where i-node and j-node travel times are saved
		        
        Parameters:
            layer : network layer (linear objects)
			travel times file: travel times text file ..._temps.txt generated by Musliw
            musliw time: Musliw travel time field where travel time is saved (&apos;temps&apos; in general)
            arc time: arc travel time
            departure/arrival: departure if &quot;d&quot; in Musliw matrix, arrival if &quot;a&quot;
            i_node time: travel time at i-node field
            j-node time; travel time at j-node field
            initial/final waiting time: in order to take into account or not inital/final waiting time (tatt1)
        </source>
        <translation>
        Lit le fchier temps &quot;.._temps.txt&quot; calculé par Musliw et génère(s&apos;ils n&apos;existent pas ) dans le réseau les champs ti et tjoù sont stockés les temps aux noeud i et j
		        
        Paramètres:
           coucher : couche réseau (objets linéaires)
			fichier temps Musliw: fichier temps ..._temps.txt généré par Musliw
            temps Musliw: Temps de parcours dans le fichier Musliw (&apos;temps&apos; en general)
            temps arc: temps de parcours de l&apos;arc
            départ/arrivéel: départ si &quot;d&quot; dans la matrice Musliw, arrivée si &quot;a&quot;
            temps en i: colonne temps de parcours en i
            temps en j: colonne temps de parcours en j
            temps d&apos;attente initial/final :Prise en compte ou non du temps d&apos;attnete inital/final (tatt1)
        </translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="269"/>
        <source>Update ti tj</source>
        <translation>Mise à jour ti tj</translation>
    </message>
</context>
<context>
    <name>NetworksProvider</name>
    <message>
        <location filename="networks_provider.py" line="128"/>
        <source>Networks</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>PrepareGTFS</name>
    <message>
        <location filename="prepare_gtfs.py" line="87"/>
        <source>GTFS source folder </source>
        <translation>Répertoire GTFS source</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="94"/>
        <source>GTFS output folder</source>
        <translation>Répertoire GTFS destination</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="101"/>
        <source>Network Id</source>
        <translation>Id réseau</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="108"/>
        <source>Extract stop_id?</source>
        <translation>Extraire stop_id?</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="115"/>
        <source>Extract formula</source>
        <translation>Formule d&apos;extraction</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="473"/>
        <source>
        Scan a GTFS Folder and generates a well-formated GTFS consistent with Musliw in particular for lines 
        
        Parameters:
        GTFS source folder: the folder of the GTFS source files
        GTFS destination folder: folder of the Musliw well formated GTFS
        Network id: id in order to differenciate networks (line ID, stop ID,...) (ex: LI and 15696 -&gt; stop_id LI15696
        Extract stop_id: if true the user must write a formula to extract the stop_id from the initial node_id string
        Extract formula: the formula to extract stop_id: (ex: &quot;OCE:StopArea:87256315&quot;) with [-8:] formula -&gt; &quot;OCE:StopArea:87256315&quot;[-8:]=&quot;87256315&quot;
        </source>
        <translation>
        Scane un répertoire GTFS et génère des fichiers GTFS formatés en cohérence avec les spécifications de  Musliw notamment dans la description de lignes 
        
        Paramètres:
        Répertoire GTFS source:chemin du répertoire source GTFS
        Répertoire GTFS destination: chemin du répertoire destination GTFS
        Id réseau: id réseau pour différencier les réseaux (line ID, stop ID,...) (ex: LI et 15696 -&gt; stop_id LI15696
        Extraire stop_id: si True l&apos;utilisateur doit écrire une fomule pour extraire le stop_id de la chaine stop_id initiale
        Fomule d&apos;extraction: La formule pour extraire le stop_id: (ex: &quot;OCE:StopArea:87256315&quot;) avec [-8:] comme formule -&gt; &quot;OCE:StopArea:87256315&quot;[-8:]=&quot;87256315&quot;
        </translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="450"/>
        <source>Prepare GTFS</source>
        <translation>Préparer GTFS</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="457"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
</context>
<context>
    <name>ReseauTC</name>
    <message>
        <location filename="reseau_tc.py" line="155"/>
        <source>GTFS folder</source>
        <translation>Répertoire GTFS</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="162"/>
        <source>Calendar start</source>
        <translation>Début calendrier</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="169"/>
        <source>Calendar end</source>
        <translation>Fin calendrier</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="580"/>
        <source>Musliw timetable network</source>
        <translation>Réseau Musliw à horaires </translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="545"/>
        <source>Reading stops</source>
        <translation>Lecture des stops</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="547"/>
        <source>Reading routes</source>
        <translation></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="549"/>
        <source>Reading trips</source>
        <translation>Lecture des routes</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="551"/>
        <source>Reading calendars_dates</source>
        <translation>Lecture des calendar_dates</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="553"/>
        <source>Reading calendars</source>
        <translation>Lecture des calendars</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="555"/>
        <source>Reading stop_times</source>
        <translation>Lecture des stop_times</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="557"/>
        <source>Generating lines</source>
        <translation>Génration des lignes</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="559"/>
        <source>Generation Musliw file</source>
        <translation>Génération du fichier Musliw</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="604"/>
        <source>
        Generates a Musliw timetable network from GTFS data (using prepare_GTFS script before is recommended)
		        
        Parameters:
            GTFs folder : GTFS folder 
			calendar start: date of the first day of the period
            caldendar_end: dat of the last day of the periode
            musliw_timetable_network: name of the generated Musliw network file
        </source>
        <translation>
        Génère un réseau Musliw à horaires à partir de données GTFS (utiliser le script prepare_GTFS au préalable est recommandé)
		        
        Paramètres:
            Répertoire GTFS : Répertoire GTFS 
			Début calendriert:date du premier jour du calendrier
            Fin calendrier: date du denier jour du calendrier
            Réseau Musliw à horaires: Nom du réseau Musliw à horaires (txt)</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="587"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
</context>
<context>
    <name>ReseauTi</name>
    <message>
        <location filename="reseau_ti.py" line="90"/>
        <source>Road network</source>
        <translation>Réseau routier</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="98"/>
        <source>Window</source>
        <translation>Fenêtre</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="104"/>
        <source>Direction</source>
        <translation>Sens</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="113"/>
        <source>Time</source>
        <translation>Temps</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="121"/>
        <source>Length</source>
        <translation>Longueur</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="129"/>
        <source>i-node</source>
        <translation>i-node</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="137"/>
        <source>j-node</source>
        <translation>j-node</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="145"/>
        <source>Time category id</source>
        <translation>Id Période</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="152"/>
        <source>Time period id</source>
        <translation>Id plage horaire</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="159"/>
        <source>Start time</source>
        <translation>Heure début</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="166"/>
        <source>End time</source>
        <translation>Heure fin</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="173"/>
        <source>Calendar</source>
        <translation>Calendrier</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="180"/>
        <source>Arc label</source>
        <translation>Texte arc</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="188"/>
        <source>Mode</source>
        <translation>Mode</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="200"/>
        <source>Musliw network</source>
        <translation>Réseau Musliw</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="239"/>
        <source>Writing Musliw network file...</source>
        <translation>Ecriture du réseau Musliw...</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="305"/>
        <source>
        Generates a Musliw network for individual mode (car, walking, cycling,...) from a netowrk layer
		
        Parameters:
            road network: road network layer (linear objects)
			window: area of the generated network (could be a sub area from the whole network layer)
            direction: flow direction (&apos;0&apos; proxhibited, &apos;1&apos; one way same direction as object, &apos;2&apos; one way reverse direction of object, &apos;3&apos; both directions
            time: arc travel time field
            length: arc length field
            i-node: i-node id
            j-node: j-node id
            time category id: time category id
            time period id: time period id into the time category 
            start time: start time of the period
            end time: end time of the period 
            calendar: calendar of the period (ex: &apos;OOOOONN&apos; evary day except saturday and sunday
            arc label: arc label
            mode: mode id for multimodal routing
            musliw network: name of the genarated Musliw network (txt file)
            
            
        </source>
        <translation>        Généère un réseau Musliw de mode individuel (voiture, marche, vélo,...)à partir d&apos;une couche réseau (objets linéaires)
		
        Paramètres:
            réseau routier: couche réseau routier( objets linéaires)
			fenêtre: aire de génération (peut être une sous partie du réseau global)
            sens: sens de circulation (&apos;0&apos; interdit, &apos;1&apos; sen sunique sens de la géométrie, &apos;2&apos;sens unique sens inverse de la géométrie, &apos;3&apos;double sens
            temps: temps de parcours sur l&apos;arc
            longueur: longueur de l&apos;arc
            i-node: identifiant noeud i
            j-node: identifiant noeud j
            id période: identifiant de la période
            id palge horaire: identifiant de la plage horaire
            heure début:heure de début de la plage horaire
            heure fin: heure fin de la plage horaire
            calendrier: calendrier de la plage horaire (ex: &apos;OOOOONN&apos; tous les jours sauf samedi et dimanche
            texte arc: libellé arc
            mode: identifiant de mode pour le calcul de plus courts chemins multimodal
            réseau Musliw: Nom du réseau Musliw généré (txt file)
            
            </translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="282"/>
        <source>Musliw individual network</source>
        <translation>Réseau individuel Musliw</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="289"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
</context>
</TS>
