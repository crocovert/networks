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
        <location filename="ajout_champ.py" line="270"/>
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
        <location filename="ajout_champ.py" line="239"/>
        <source>Update field</source>
        <translation>Mise à jour champ</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="246"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
</context>
<context>
    <name>Building graph</name>
    <message>
        <location filename="creer_graphe.py" line="235"/>
        <source>Building graph</source>
        <translation>Créer graphe</translation>
    </message>
</context>
<context>
    <name>CalculMusliw</name>
    <message>
        <location filename="calcul_musliw.py" line="89"/>
        <source>Musliw network</source>
        <translation>Réseau Musliw</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="95"/>
        <source>Musliw matrix</source>
        <translation>Matrice Musliw</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="101"/>
        <source>Musliw parameters</source>
        <translation>Paramètres Musliw</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="107"/>
        <source>Musliw penalties</source>
        <translation>Pénalités Musliw</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="114"/>
        <source>Output</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="164"/>
        <source>Multimodal calculations... That could take some time</source>
        <translation>Calcul d&apos;accessibilité multimodale...Cela peutprendre un certains temps</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="187"/>
        <source>Musliw computation</source>
        <translation>Calcul Musliw</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="194"/>
        <source>Computations</source>
        <translation>Calculs</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="191"/>
        <source>
        Perform a calculation of multimodal accessibility and routing
		Produce output files (semi-column separated files (if selected in parameters):
        . Origin destination results file &quot;_od.txt&quot;
        . Cumulative times on arcs &quot;_temps.txt&quot; (usefull for isochron maps)
        . Detailed paths &quot;_chemins.txt&quot; 
        . Assignment results file on links &quot;_aff.txt&quot;
        . Log file &quot;_log.txt&quot;
        . Parameters files &quot;_param.txt&quot;
        . results on services &quot;_services.txt&quot;
        . cumulative times on nodes &quot;_noeuds.txt&quot;
        
        Parameters:
            network : Musliw network
            matrix: Musliw matrix
            parameters: Musliw parameters
            penalties: Musliw penalties and transfers file
			output : Mulsiw results file (without extension)
        </source>
        <translation type="obsolete">        Effectue un calcul d&apos;itinéraires et d&apos;accessibilité multimodale
		Génère des fichiers résultat (format texte séparateur &quot;;&quot;  (si sélectionné dans les paramtères):
        .Fichier origine destination  &quot;_od.txt&quot; (résultats par origine destination
        .Temps d&apos;accès par arcs &quot;_temps.txt&quot; (utiles pour les cartes isochrones)
        .Chemins détaillés &quot;_chemins.txt&quot; 
        . Résultats d&apos;affectation sur les arcs &quot;_aff.txt&quot;
        . fichier Log &quot;_log.txt&quot;
        . Fichier pramètres &quot;_param.txt&quot;
        .Résultats par services &quot;_services.txt&quot;
        . Temps d&apos;accès par noeuds &quot;_noeuds.txt&quot;
        
        Paramètres:
           Réseau Musliw 
            Matrice Musliw
            Paramètres Musliw
            Pénalités Musliw
			sortie : Fichier de resultats Musliw (sans extension)
        </translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="123"/>
        <source>Accept to download Musliw binary from Github</source>
        <translation>Accepter de télécharger l&apos;exécutable Musliw de Github</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="153"/>
        <source>Downloading Muslic binary</source>
        <translation>Téléchargement de Musliw</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="155"/>
        <source>Muslic downloaded succesfully</source>
        <translation>Téléchargement de Musliw terminé</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="210"/>
        <source>
        Perform a calculation of multimodal accessibility and routing
		Can download the Muslic.exe binary for multimodal routing and accessibility computation (if checked)
        Produce output files (semi-column separated files (if selected in parameters):
        . Origin destination results file &quot;_od.txt&quot;
        . Cumulative times on arcs &quot;_temps.txt&quot; (usefull for isochron maps)
        . Detailed paths &quot;_chemins.txt&quot; 
        . Assignment results file on links &quot;_aff.txt&quot;
        . Log file &quot;_log.txt&quot;
        . Parameters files &quot;_param.txt&quot;
        . results on services &quot;_services.txt&quot;
        . cumulative times on nodes &quot;_noeuds.txt&quot;
        
        Parameters:
            network : Musliw network
            matrix: Musliw matrix
            parameters: Musliw parameters
            penalties: Musliw penalties and transfers file
			output : Mulsiw results file (without extension)
            Accept to download Muslic binary: If checked, the algorithm will download Muslic.exe on the github repository
        </source>
        <translation>        Perform a calculation of multimodal accessibility and routing
        Peut télécharger l&apos;exécutable Muslic.exe du dépôt GitHub si celui-ci n&apos;a pas été téléchargé auparavant pour le effectuer le calcul
		Produce output files (semi-column separated files (if selected in parameters):
        . Origin destination results file &quot;_od.txt&quot;
        . Cumulative times on arcs &quot;_temps.txt&quot; (usefull for isochron maps)
        . Detailed paths &quot;_chemins.txt&quot; 
        . Assignment results file on links &quot;_aff.txt&quot;
        . Log file &quot;_log.txt&quot;
        . Parameters files &quot;_param.txt&quot;
        . results on services &quot;_services.txt&quot;
        . cumulative times on nodes &quot;_noeuds.txt&quot;
        
        Parameters:
            network : Musliw network
            matrix: Musliw matrix
            parameters: Musliw parameters
            penalties: Musliw penalties and transfers file
			output : Mulsiw results file (without extension)
        Accepter de télécharger l&apos;exécutable Musliw de Github:Si sélectionné, l&apos;algorithme va télécharger l&apos;exécutable Muslic.exe sur le dépot Github pour pouvoir exécuter la calcul
        </translation>
    </message>
</context>
<context>
    <name>ConcatReseaux</name>
    <message>
        <location filename="concat_reseaux.py" line="81"/>
        <source>Network files elements</source>
        <translation type="obsolete">Réseaux à concaténer</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="89"/>
        <source>Global network</source>
        <translation>Réseau multimodal</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="163"/>
        <source>
        Concatenate Musliw networks elements,
		timetable based network elements, indivudal modes elements and connector elements in order to generate a global multimodal network as input for Musliw tool
        
        Parameters:
            sources : Musliw networks elements (use &lt;shift&gt; and &lt;ctrl&gt; in order to select several files)
			musliw_file: name of the global network file (txt)
        </source>
        <translation type="obsolete">        Concatene différents réseaux Musliw,réseaux à horaires,de transport individuel, des connecteurspour générer un réseau multimodal utilisable en entrée pour le logiciel Musliw
        
        Paramètres:
            Réseaux à concaténer : Réseaux Musliw à concaténer (utiliser &lt;shift&gt; et &lt;ctrl&gt; pour sélectionner plusieurs fichiers)
            Réseau multimodal: Nom du réseau global multimodal (txt)
        </translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="143"/>
        <source>Concatenate networks</source>
        <translation>Concaténer réseaux</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="150"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="82"/>
        <source>Network elements folder</source>
        <translation>Répertoire source</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="166"/>
        <source>
        Concatenate Musliw networks elements,
		timetable based network elements, indivudal modes elements and connector elements in order to generate a global multimodal network as input for Musliw tool
        
        Parameters:
            network elements folder : Musliw networks elements folder
			global network: name of the global network file (txt)
        </source>
        <translation>        Concatène différents réseaux Musliw,réseaux à horaires,de transport individuel, des connecteurspour générer un réseau multimodal utilisable en entrée pour le logiciel Musliw
        
        Paramètres:
            Répertoire source :Répertoire où sont localisés les éléments de érseaux à concaténer (concatène tous les réseaux présents)
            Réseau multimodal: Nom du réseau global multimodal (txt)
        </translation>
    </message>
</context>
<context>
    <name>ConnectNodes2Lines</name>
    <message>
        <location filename="connect_nodes2lines.py" line="209"/>
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
        <location filename="connect_nodes2lines.py" line="202"/>
        <source>Connect nodes to lines</source>
        <translation>Connecter des points à des lignes</translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="222"/>
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
        <location filename="creer_graphe.py" line="301"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="93"/>
        <source>Direction</source>
        <translation>Sens</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="112"/>
        <source>Prefix</source>
        <translation>Préfixe</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="122"/>
        <source>Nodes layer</source>
        <translation>Table des noeuds</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="294"/>
        <source>Build graph</source>
        <translation>Créer graphe</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="102"/>
        <source>Node Id</source>
        <translation>Node id</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="317"/>
        <source>
        Build a graph from a linear layer (create a node layer, i and j fields filled with node id at start and end node) taking into account the direction of flows
        
        Parameters:
            network : Network layer (linear objects)
			prefix: prefix for node ids (ex: &apos;MAP&apos; and n° 12563 =&gt; MAP12563)
            node_id: the format of the node_id string: number series or geographic string (uniqueid which is consistent when you add several adjacent layers)
			direction: flow direction (&apos;0&apos; prohibited, &apos;1&apos; one way objet direction, &apos;2&apos;, one way inverse object direction, &apos;3&apos; both directions
			nodes_file: nodes layer (arcs ends)
        </source>
        <translation>        Crée un graphe à partir d&apos;une couche d&apos;objets linéaires (crée une couche de noeuds, crée et met à jour les champs i, j et ij avec les identifiants de noeuds) en tenant compte du sens de circulation.Génération des identifiants de noeuds soit par un compteur ou une chaîne géographique (unique) qui permet de fusionner des réseaux contigüs
        
        Paramètres:
            réseau : Couche réseau (objets linéaires)
			préfixe: préfixepour les identifiants de noeuds (ex: &apos;MAP&apos;; et n° 12563 =&gt; MAP12563)
			node_id: format des identifiants de noeuds: competeur ou chaine géographique (unique)
			sens: sens de circulation (&apos;0&apos;:interdit,&apos;1&apos;: sens unique sens de a géométrie, &apos;2&apos;: sens unique sens inverse de la géométrie , &apos;3&apos;: double sens
			fichier noeuds: couche des noeuds (extrémités des arcs)</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="102"/>
        <source>Number series</source>
        <translation>Compteur</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="102"/>
        <source>Geographic string(unique)</source>
        <translation>Chaîne géographique (unique)</translation>
    </message>
</context>
<context>
    <name>FichierAff</name>
    <message>
        <location filename="fichier_aff.py" line="86"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="95"/>
        <source>ij</source>
        <translation>ij</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="106"/>
        <source>Line</source>
        <translation>Ligne</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="116"/>
        <source>Flows</source>
        <translation>Volumes</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="123"/>
        <source>Link type</source>
        <translation>Type de tronçon</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="133"/>
        <source>aff output file</source>
        <translation>Fichier aff</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="143"/>
        <source>Encoding</source>
        <translation>Encodage</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="150"/>
        <source>Flows layer</source>
        <translation>Couche de flux</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="273"/>
        <source>Get link flows data</source>
        <translation>Importer des données de flux</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="280"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="296"/>
        <source>
        Generate a linear objects layer with the links used in assignment (with a volume of passengers&gt;0) in particular to produce flows maps.
		
        Parameters:
            network: the network links layer 
			ij: an expression do describe the link id (&quot;id&quot; attribute or expression)
            line (optonal): the line id. If line id is filled the layer will have as many superposed links as they have identical links but with a different transit line id (You should used &quot;shift lines&apos; alg to view flows maps in this case
			link type: the type of link
            aff ouput file: Choose a network corresponding &lt;FILENAME&gt;_aff.txt output file
            enconding: text encoding
            flows layer: name of the flows layer generated
            
            
            
        </source>
        <translation>
        Générer un couche d&apos;objets linéaires à partir des tronçons parcourus dans l&apos;affectation (ceux avec un volume&gt;0) en particulier pour pouvoir produire des cartes de flux ou detrafic
		
        Paramètres:
            réseau: La couche des tronçons
			ij: identifiant de tronçon (attribut &quot;ij&quot;) ou expression
            ligne (optonel): L&apos;identifiant de ligne. Si l&apos;identifiant de ligne est renseigné il y auara autant de tronçon superposés que de tronçons identiques mais avec un identifiant de ligne différent (Il faut utiliser l&apos;agorithme décaler lignes dans ce cas vour produire des cartes de flux)
			type de tronçon: Le type de tronçon
            Fichier aff: nom du fichier  &lt;NOM_FICHIER&gt;_aff.txt 
            encodage: Encodage du texte
            Couche de fluxr: Nom et chemin de la couche de flux
            
            
            </translation>
    </message>
</context>
<context>
    <name>FichierOD</name>
    <message>
        <location filename="fichier_od.py" line="83"/>
        <source>OD output file</source>
        <translation>Fichier OD</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="95"/>
        <source>Variable</source>
        <translation>Variable</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="103"/>
        <source>Remove initial/final waiting time?</source>
        <translation>Retrancher temps d&apos;attente initial/final?</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="111"/>
        <source>Time based links only?</source>
        <translation>Tronçons à horaires uniquement?</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="119"/>
        <source>OD indicator file</source>
        <translation>Fichier indicateurs des liens</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="217"/>
        <source>indicators by OD</source>
        <translation>indicateurs par OD</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="224"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="240"/>
        <source>
        Produce indicators aggregated by OD. This analysis is usefull when you want to study the variation of travel times during a time period
		
        Parameters:
            OD ouput file: the Musliw origin destination output file (&lt;FILENAME&gt;_od.txt)
			variable: The name of the variable for indicator computation (temps (time) by default)
            remove initial/final boarding time: If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
			time based links only: If checked only time based links are analysed
            OD indicator file: name of the result file (delimited text with &quot;;&quot; as separator) which containes the following attributes 
            id: OD id
            avg: average value 
            nb: number of od rows in the matrix file 
            min: minimum value indicator
            max: maximum value indicator
            pole_min: first node of intermodality corresponding to the minimum value 
            pole_max: first node of intermodality corresponding to the maximum value 
            departures: number of different departures (number of different alternatives) 
            arrivals:number of different arrivals (number of different alternatives) 
            sdev: standard deviation value
            
            
        </source>
        <translation>        Calcul des indicateurs aggrégés par OD. Cette analyse est utile lorsque l&apos;on souhaite étduier la variation des temps de parcours durant une période de temps
		
        Paramètres:
            Fichier OD: Le fichier OD résultat du calcul Musliw (&lt;NOM_FICHIER&gt;_od.txt)
			variable: Le nom de la variable sur la quelle on souhaite calculer les indicateurs (temps par défaut)
            retrancher le temps d&apos;attente initial/final: Si sélectionné, le temps d&apos;attente iitial ou final (entre le temps d&apos;arrivée ou d départ souhaité et le temps réel est retranché du temps de parcours total)
			tronçons à horaires seulement: Si sélectionné seuls les tronçons à horaires seront analysés
           Fichier d&apos;incateurs par tronçons: nom du fichier résulatat (texte délimité avec &quot;;&quot; comme séparateur)qui contient les attributs suivants
            id: OD id
            avg: valeur moyenne
            nb: nombre de lignes pour cette OD traitées
            min: valeur minimum
            max: valeur maximum
            pole_min: premier ou dernier noeud d&apos;intermodalité correspondant à la valeur minimum
            pole_max:premier ou dernier noeud d&apos;intermodalité correspondant à la valeur maximum
            departures: nombre d&apos;heures de départ (nombre d&apos;alternatives différentes) 
            arrivals:number d&apos;heures d&apos;arrivée (nombre d&apos;alternatives différentes) 
            sdev: valeur d&apos;écart type
            
            
        </translation>
    </message>
</context>
<context>
    <name>FichierTemps</name>
    <message>
        <location filename="fichier_temps.py" line="83"/>
        <source>Link times output file</source>
        <translation>Fichier temps Musliw</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="95"/>
        <source>Variable</source>
        <translation>Variable</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="103"/>
        <source>Remove initial/final waiting time?</source>
        <translation>Retrancher le temps d&apos;attente initial/final?</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="111"/>
        <source>Time based links only?</source>
        <translation>Tronçons horaires uniquement?</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="119"/>
        <source>Link indicators file</source>
        <translation>Fichier résultat des indicateurs par tronçons</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="190"/>
        <source>ignored element</source>
        <translation>élément ignoré</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="211"/>
        <source>indicators by link</source>
        <translation>indicateurs par tronçon</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="218"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="234"/>
        <source>
        Produce indicators aggregated by link. This analysis is usefull when you want to study the variation of travel times during a time period
		
        Parameters:
            link times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_od.txt)
			variable: The name of the variable for indicator computation (temps (time) by default)
            remove initial/final boarding time:  If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
			time based links only: If checked only time based links are analysed
            link indicators file: name of the result file (delimited text with &quot;;&quot; as separator) which containes the following attributes 
            ij: link id
            avg: average value 
            nb: number of od rows in the matrix file 
            min: minimum value indicator
            max: maximum value indicator
            pole_min: first node of intermodality corresponding to the minimum value 
            pole_max: first node of intermodality corresponding to the maximum value 
            departures: number of different departures (number of different alternatives) 
            arrivals:number of different arrivals (number of different alternatives) 
            sdev: standard deviation value
            o_min: origin with minimum value
            o_max: origin with maximum value
            
            
        </source>
        <translation>
        Produit des indicateurs aggrégés par tronçon. Cette anlyse est utile lorsque l&apos;on souhaite étudier la variabilité des temps de parcours durant une période de temps
		
        Paramètres:
            Fichier temps Musliw: Le fichier temps Musliw (&lt;FICHIER&gt;_temps.txt)
			variable: Le nom de la variable pour le calcul des indicateurs  (temps par défaut)
            retrancher le temps d&apos;attente initial/final: Si sélectionné, le temps d&apos;attente initial ou final (entre le temps d&apos;arrivée ou de départ souhaité et le réel est soustrait au temps de parcouts total)
			tronçons à horaires seulement: Si sélectionné seuls les tronçons à horaires seront analysés
           Fichier résultat des indicateurs par tronçon: nom du fichier réusltat ( texte délimité avec &quot;;&quot; comme séparateur) qui contient les attributs suivants
            ij:  id tronçon
            avg: valeur moyennenombre de lignes dans la matrice traitées pour cette OD
            min: valeur minimum
            max: valeur maximum
            pole_min: premier/dernier noeud d&apos;intermodalité correspondant au temps minimum
            pole_max: premier/dernier noeud d&apos;intermodalité correspondant au temps maximum
            departures: nombre d&apos;horaires de départ différents (nombre d&apos;alternatives différentes) 
            arrivals:nombre d&apos;horaires d&apos;arrivée différents (nombre d&apos;alternatives différentes)
            sdev:valeur d&apos;écart type
            o_min: origine avec la valeur minimum
            o_max:origine avec la valeur maximum
            
            
        </translation>
    </message>
</context>
<context>
    <name>Generating nodes</name>
    <message>
        <location filename="creer_graphe.py" line="218"/>
        <source>Generating nodes</source>
        <translation>Génération des noeuds</translation>
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
        <translation>Répertoire destination</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="146"/>
        <source>Encoding</source>
        <translation>Encodage</translation>
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
        <translation type="obsolete">arrivees</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="197"/>
        <source>departures</source>
        <translation type="obsolete">departs</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="207"/>
        <source>ligne_name</source>
        <translation>nom_ligne</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="204"/>
        <source>lines_count</source>
        <translation type="obsolete">nb_lignes</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="205"/>
        <source>services_count</source>
        <translation type="obsolete">nb_services</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="267"/>
        <source>Reading calendars...</source>
        <translation>Lecture des calendars...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="295"/>
        <source>reading calendar dates...</source>
        <translation>Lectures des calendar_dates...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="321"/>
        <source>Reading routes...</source>
        <translation>Lectures des routes...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="346"/>
        <source>Reading trips...</source>
        <translation>Lecture des trips...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="370"/>
        <source>Reading stop times...</source>
        <translation>Lecture des stop_times...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="478"/>
        <source>Generating arcs and lines...</source>
        <translation>Génération des arcs et lignes...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="575"/>
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
        <location filename="import_gtfs.py" line="555"/>
        <source>GTFS import</source>
        <translation>Import GTFS</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="562"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="206"/>
        <source>line_num</source>
        <translation>Identifiant de ligne</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="196"/>
        <source>int_tot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="197"/>
        <source>out_tot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="198"/>
        <source>in_mon-fri</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="199"/>
        <source>out_mon-fri</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="200"/>
        <source>in_sat</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="201"/>
        <source>out_sat</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="202"/>
        <source>in_sun</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="203"/>
        <source>out_sun</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="210"/>
        <source>nb_tot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="213"/>
        <source>nb_mon-fri</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="215"/>
        <source>nb_sat</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="217"/>
        <source>nb_sun</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Interpole</name>
    <message>
        <location filename="interpole.py" line="100"/>
        <source>Network</source>
        <translation>Réseau</translation>
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
    <name>InverserSelection</name>
    <message>
        <location filename="inverser_selection.py" line="145"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="inverser_selection.py" line="138"/>
        <source>Reverse selection geometries</source>
        <translation>Inverser les géométries de la sélection</translation>
    </message>
    <message>
        <location filename="inverser_selection.py" line="161"/>
        <source>
        Reverse arc directions from a selection of linear objcts:
        The script modify the geoometry of the existing table and 
        do not create a new table with the reult (use &quot;revert arcs&quot; for that)
        
        
        Parameters:
            network : network layer (linear objects) where the selected objects belong
			
        </source>
        <translation>        Inverse la géométrie des objets de la sélection:
        Le script modifie la géométrie d&apos;une sélection d&apos;objets linéiares
       Il ne crée pas une nouvelle table résultat (utiliser les scripts &quot;Inverser arcs&quot; pour cela)
        
        
        Paramètres:
            réseau : couche réseau (objets linéaires) à laquelle la sélection appartient
			
        </translation>
    </message>
</context>
<context>
    <name>IsolatedNodes</name>
    <message>
        <location filename="noeuds_isoles.py" line="82"/>
        <source>Nodes</source>
        <translation>Noeuds</translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="89"/>
        <source>Node Id</source>
        <translation>Id noeud</translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="98"/>
        <source>Musliw network</source>
        <translation>Réseau Musliw</translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="114"/>
        <source>Connected nodes</source>
        <translation>Noeuds connectés</translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="218"/>
        <source>Isolated nodes</source>
        <translation>Noeuds isolés</translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="225"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="230"/>
        <source>
        Create a layer of connected nodes from a nodes layer (ex: generated by the build graph algorithm) and a Musliw network. The algorithm build the different graphs corresponding to the Musliw network 
        and create a node layer corresponding to the graph having the largest number of nodes. The interest of this algorithm is to analyse the connections of graph and 
        to prevent a Musliw computation based on an isolated node
		
        Parameters:
            Nodes: nodes layer (ex: generated by the build graph algorithm )
			Node id: Field that contains the node Id
            Musliw Network: A Musliw network with corresponding node id corresponding to the nodes layer id
            Connected nodes: Names of the output nodes layer generated from the graph with the largest number of nodes
            
            
        </source>
        <translation type="obsolete">
        Génère une couche de noeuds connectés à partir d&apos;une couche de noeuds existants (ex: générés par le script Créer graphe) et un réseau Musliw. L&apos;algorithme reconstitue les différents graphes décrits dans le réseau Musliw et génère une couche de noeuds correspondant au graphe ayant le plus de noeuds connectés.
L&apos;intérêt de cet algorithme est d&apos;analyser les connections de graphes et d&apos;éviter de lancer un calcul Musliw basé sur un noeud isolé non connecté au reste du réseau
		
        Paramètres:
            Noeuds: Couche des noeuds (ex: générés avec le script créer graphe )
			Id noeud: Champ contenant l&apos;identifiant de noeud
            Réseau Musliw: Un réseau Musliw avec correspondance des identifiants de noeuds avec la couche des noeuds
           Noeuds connectéss: Nom de la couche générée qui contient les noeuds connectés entre eux du graphe ayant le plus de noeuds conenctés
        </translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="105"/>
        <source>Network Id</source>
        <translation>Id réseau</translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="241"/>
        <source>
        Create a layer of connected nodes from a nodes layer (ex: generated by the build graph algorithm) and a Musliw network. The algorithm build the different graphs corresponding to the Musliw network 
        and create a node layer corresponding to the graph having the largest number of nodes. The interest of this algorithm is to analyse the connections of graph and 
        to prevent a Musliw computation based on an isolated node
		
        Parameters:
            Nodes: nodes layer (ex: generated by the build graph algorithm )
			Node id: Field that contains the node Id
            Musliw Network: A Musliw network with corresponding node id corresponding to the nodes layer id
            Network Id: Number of the network graph to select for conencted nodes (networks are sorted by the number of connected nodes. 0 (default value)  is the largest
            Connected nodes: Name of the output nodes layer generated from the graph with the largest number of nodes
            
            
        </source>
        <translation>
        Génère une couche de noeuds connectés à partir d&apos;une couche de noeuds existants (ex: générés par le script Créer graphe) et un réseau Musliw. L&apos;algorithme reconstitue les différents graphes décrits dans le réseau Musliw et génère une couche de noeuds correspondant au graphe ayant le plus de noeuds connectés.
L&apos;intérêt de cet algorithme est d&apos;analyser les connections de graphes et d&apos;éviter de lancer un calcul Musliw basé sur un noeud isolé non connecté au reste du réseau
		
        Paramètres:
            Noeuds: Couche des noeuds (ex: générés avec le script créer graphe )
			Id noeud: Champ contenant l&apos;identifiant de noeud
            Réseau Musliw: Un réseau Musliw avec correspondance des identifiants de noeuds avec la couche des noeuds
           Noeuds connectéss: Nom de la couche générée qui contient les noeuds connectés entre eux du graphe ayant le plus de noeuds conenctés
        </translation>
    </message>
</context>
<context>
    <name>Majtitj</name>
    <message>
        <location filename="maj_titj.py" line="295"/>
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
        <translation>Départ</translation>
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
        <location filename="maj_titj.py" line="236"/>
        <source>updating ti and tj...</source>
        <translation>Mise à jout ti et tj...</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="311"/>
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
        <location filename="maj_titj.py" line="288"/>
        <source>Update ti tj</source>
        <translation>Mise à jour ti tj</translation>
    </message>
</context>
<context>
    <name>MatrixDoubleList</name>
    <message>
        <location filename="matrix_double_liste.py" line="89"/>
        <source>Origins</source>
        <translation>Origines</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="97"/>
        <source>Origins node ID</source>
        <translation>Id noeud origine</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="104"/>
        <source>Destinations</source>
        <translation>Destinations</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="112"/>
        <source>Destinations node ID</source>
        <translation>Id noeud destination</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="119"/>
        <source>Demand</source>
        <translation>Demande</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="127"/>
        <source>Day</source>
        <translation>Jour</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="136"/>
        <source>Start time</source>
        <translation>Heure début</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="144"/>
        <source>End time</source>
        <translation>Heure fin</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="152"/>
        <source>Step</source>
        <translation>Intervalle</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="160"/>
        <source>Departure/Arrival</source>
        <translation>Départ/Arrivée</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="160"/>
        <source>Departure</source>
        <translation>Départ</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="160"/>
        <source>Arrival</source>
        <translation>Arrivée</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="173"/>
        <source>Musliw matrix</source>
        <translation>Matrice Musliw</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="220"/>
        <source>writing Musliw matrix...</source>
        <translation>Ecriture de la matrice Musliw...</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="263"/>
        <source>Musliw matrix double list</source>
        <translation>Matrice Musliw double liste</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="270"/>
        <source>Matrix</source>
        <translation>Matrice</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="286"/>
        <source>
        Generates a Musliw matrix from two point layers and a period of time (from start time to end time with a step in minutes)
        the script generates a rectangular matrix (NxM od). The first layer (N records) corresponds to origins and the second layer (M records) to destinations
		
        Parameters:
            Origins: origin nodes  (corresponding to nodes layer or the graph )
			Origins node id: Field that contains the node Id of the origin nodes
            Destinations: destination nodes  (corresponding to nodes layer or the graph )
			Destinations node id: Field that contains the node Id of the origin nodes
            Demand: number of passengers for assignment
            Day: number of the day in the calendar (1 first day of the calendar)
            Start time: Beginning of the time period
            Step: Step time in minutes
            Departure/Arrival: Departure (from Start point to end point forward) - Arrival (from end point to start point backward)
            Musliw matrix: Musliw matrix name (text file with &quot;;&quot; separator 
        </source>
        <translation>
        Génère une matrice Musliw à partir de deux couches de points et une période horaire définie par une heure de début, une heure de fin et un intervalle en minutes.
        Le script génère une matrice rectangulaire (NxM ods). La première couche (N ligness) correspond aux origines et la deuxièmer (M lignes) aux destinations
		
        Paramètres:
            Origines: Noeuds origines (correspond aux noeuds du graphe de cheminement)
			Noeud id origine: Champ qui contient l&apos;identifiant de noeud des origines
            Destinations: Noeuds destinations (correspond aux noeuds du graphe de cheminement)
			Noeud id destination: Field that contains the node Id of the origin nodes
            Demande: nombre de passagers pour l&apos;affectation
            Jour: numéro de jour du calendrier  (1 correspond au 1er jour du calendrier)
            Début période: heure de début de la période
            Fin période: heure de fin de la période
            Intervalle:Intervalle de temps en minutes
            Départ/Arrivée: Depart (du point de départ vers le point d&apos;arrivée en avant) - Arrivée (du point d&apos;arrivée au point de retard à rebours)
            Matrice Musliw : Nom de fichier de la matrice Musliw (fichier texet avec separateur &apos;;&apos; )
            </translation>
    </message>
</context>
<context>
    <name>MatrixSimpleList</name>
    <message>
        <location filename="matrix_simple_liste.py" line="88"/>
        <source>Nodes</source>
        <translation>Noeuds</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="96"/>
        <source>Node ID</source>
        <translation>Id noeud</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="103"/>
        <source>Demand</source>
        <translation>Demande</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="111"/>
        <source>Day</source>
        <translation>Jour</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="120"/>
        <source>Start time</source>
        <translation>Heure début</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="128"/>
        <source>End time</source>
        <translation>Heure fin</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="136"/>
        <source>Step</source>
        <translation>Intervalle</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="144"/>
        <source>Departure/Arrival</source>
        <translation>Départ/Arrivée</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="144"/>
        <source>Departure</source>
        <translation>Départ</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="144"/>
        <source>Arrival</source>
        <translation>Arrivée</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="152"/>
        <source>Diagonal maatrix?</source>
        <translation>Matrice diagonale?</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="163"/>
        <source>Musliw matrix</source>
        <translation>Matrice Musliw</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="207"/>
        <source>Writing Musliw matrix...</source>
        <translation>Ecriture de la matrice Musliw...</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="247"/>
        <source>Musliw matrix simple list</source>
        <translation>Matrice Musliw simple liste</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="254"/>
        <source>Matrix</source>
        <translation>Matrice</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="270"/>
        <source>
        Generates a Musliw matrix from a point layer and a period of time (from start time to end time with a step in minutes)
        the script generates a full square matrix (NxN od) or a diagonal matrix (N od with same origin and same destination)
		
        Parameters:
            Nodes: nodes layer (corresponding to nodes layer or the graph )
			Node id: Field that contains the node Id
            Demand: number of passengers for assignment
            Day: number of the day in the calendar (1 first day of the calendar)
            Start time: Beginning of the time period
            Step: Step time in minutes
            Departure/Arrival: Departure (from Start point to end point forward) - Arrival (from end point to start point backward)
            Diagonal matrix: Check if you want only a digonal matrix instead of a full square matrix
            Musliw matrix: Musliw matrix name (text file with &quot;;&quot; separator
            
            
        </source>
        <translation>        Génère une matrice Musliw à partir d&apos;une couche de points et une période horaire définie par une heure de début, une heure de fin et un intervalle en minutes.
        Le script génère une matrice carrée  (NxN ods).ou une matrice diagonale (N ods avec la même origine et la même destination)
		
        Paramètres:
            Noeuds : Couche des noeuds (correspond aux noeuds du graphe de cheminement)
			Noeud id : Champ qui contient l&apos;identifiant de noeud 
            Demande: nombre de passagers pour l&apos;affectation
            Jour: numéro de jour du calendrier  (1 correspond au 1er jour du calendrier)
            Début période: heure de début de la période
            Fin période: heure de fin de la période
            Intervalle:Intervalle de temps en minutes
            Départ/Arrivée: Depart (du point de départ vers le point d&apos;arrivée en avant) - Arrivée (du point d&apos;arrivée au point de retard à rebours)
            Matrice diagonale: Cocher pour obtenir une matrice diagonale
            Matrice Musliw : Nom de fichier de la matrice Musliw (fichier texet avec separateur &apos;;&apos; )
            </translation>
    </message>
</context>
<context>
    <name>MusliwParam</name>
    <message>
        <location filename="param_musliw.py" line="106"/>
        <source>In vehicle weight</source>
        <translation>Pondération temps à bord du véhicule</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="114"/>
        <source>Waiting weight</source>
        <translation>Pondération temps attente</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="121"/>
        <source>Individual modes weight</source>
        <translation>Pondération temps mode individuel</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="129"/>
        <source>Boarding weight</source>
        <translation>Pondération correspondance</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="136"/>
        <source>Individual mode speed factor</source>
        <translation>Facteurd&apos;échelle temps individuel</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="143"/>
        <source>Minimum transfer delay</source>
        <translation>Temps de correspondance mini</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="150"/>
        <source>Maximum transfer delay</source>
        <translation>Temps de correspondance maxi</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="157"/>
        <source>Extra day duration</source>
        <translation>Nombre de jours supplémentaires</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="166"/>
        <source>Max. individual time budget</source>
        <translation>Temps individuel maximum</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="175"/>
        <source>Maximum generalized time</source>
        <translation>Temps généralisé maximum</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="184"/>
        <source>Toll weight</source>
        <translation>Pondération péage</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="191"/>
        <source>Output filter</source>
        <translation>Filtre sortie</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="198"/>
        <source>Output links times?</source>
        <translation>Temps détaillés?</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="198"/>
        <source>No output</source>
        <translation>Aucun</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="198"/>
        <source>Without timetable links</source>
        <translation>Sans les arcs à horaires</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="198"/>
        <source>With timetable links</source>
        <translation>Avec les arcs à horaires</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="206"/>
        <source>Prohibited U-turns?</source>
        <translation>Demi-tours interdits?</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="213"/>
        <source>Output paths?</source>
        <translation>Sortie chemins?</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="221"/>
        <source>Output services?</source>
        <translation>Sortie services?</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="228"/>
        <source>Output transfers?</source>
        <translation>Sortie correspondances?</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="235"/>
        <source>Output node times?</source>
        <translation>Sortie noeud?</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="243"/>
        <source>Algorithm scale?</source>
        <translation>Echelle de l&apos;algorithme</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="252"/>
        <source>Algorithm exponent?</source>
        <translation>Exposant de l&apos;algorithme</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="261"/>
        <source>nb classes?</source>
        <translation>Nombrede classes</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="270"/>
        <source>Parameters file</source>
        <translation>Fichier paramètres Musliw</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="368"/>
        <source>Musliw parameters</source>
        <translation>Paramètres Musliw</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="375"/>
        <source>Computations</source>
        <translation>Calculs</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="400"/>
        <source>
        Create a set of parameters usefull for multimodal routing or acceesibility computation with Musliw
		Produce a parameter file (to be selected in musliw computation):
        
        Parameters:
            In vehicle weight : weight factor for travel time in vehicle (time baseds mode e.g bus, tram, train, metro, airplane, ferry,...)
            Waiting weight: weight factor for waiting time
            Individual mode weight : weight factor for individual modes travel times (e.g car, walking, cycling, ...)
            Boarding weight: weight factor for boarding time
            Individual mode speed factor: homothetic factor that apply to the individual travel times
			Minimum transfer delay : minimum safety time for transfer (ex: 5 means that you should wait at least 5 minutes at a stop before the bus leaves
            Maximum transfer delay: maximum waiting time for transfer (ex: 60 means that you will not be able to take atrain that leaves more that 60 minutes after you arrive)
            Extra day duration: By default Musliw takes only into account timetable of the day selected in the matrix. If you can extend with the timetable of the day after (if departure) or the day before (arrival) your must enter 1
            Max. indiviudal time budegt: The algorithm path will not explore shortest paths that have a individual time budget greater than this value
            Maximum generalized time: The algorithm path will not explore shortest paths that have a total generalised cost greater than this value
            Toll weight: weight factor for toll attribute
            Output filter: specify the type of links you want in the reports (empty will output all links ex: metro|bus|tram will export only metro , bus and tram lines
            Output links times: select what you want detailed output at link level (No, without ou with timetable based links)
            Prohibited U-turns: choose if if you want to allow u-turns in shortest paths computation
            Output paths: Check if you want to output detailed paths
            Output services: Check if you want to have detailed outputs for each service
            Output transfers: Check if you want to have detailed outputs on turns and transfers
            Outpout nodes times: Check if you want to have detailed outputs at node level
            Algorithm scale: Parameter of the shortest path algorithm
            Algorithm exponent: The algorithm parameter exponent
            Nb classes: The number of buckets of the shortest path algorithm
            Parameter file: The output parameter file to be used in musliw computation
            
        </source>
        <translation type="obsolete">
        Créer un jeu de paramètres utile pour le calcul d&apos;itinéraires et d&apos;accessibilité avec Musliw
		Génère un fichier de paramètres (qui doit être sélectionné pour le calcul Musliw):
        
        Paramètres:
            Pondération temps à horaires : Fcateur de pondération pour les temps à bord des modes définis par des  horaires (ex:  bus, tram, train, métro, avion, ferry,...)
            Pondération temps d&apos;attente: Facteur de pondération des temps d&apos;attente
           Pondération temps individuel :Facteur de pondération pour les modes individuels (ex voiture, marche, vélo, ...)
            Pondération correspondance: Facteur de pondération des temps de correspondance
            Facteur d&apos;échelle mode individuel: facteur homothéitque qui s&apos;applique aux temps de parcours des arcs des modes individuels
			Temps de correspondance mini : Temps minimum de sécurité pour la correspondance (ex: 5 signifie que l&apos;on doit être présent t 5 minutes à l&apos;arrêt avant que le bus parte
            Temps de correspondance maxi:Temps d&apos;attente maximum pour une correspondance (ex: 60 signifie  que l&apos;on ne peut pas prendre un train qui part plus de 60 minutes après que l&apos;on soit arrivé)
            Nombre de jours supplémentairesn: Par defaut Musliw ne prend en compte que les horaires du jour indiqué dans la matrice. Si l&apos;on souhaite étendre la recherche avec les horaires des jours suivants (si départ) ou des jours précédents (si arrivée)il faut saisir le nombre de jours supplémentaires à prendre en compte (ex  1 pour le lendemain ou la veille)
            Temps individuel maximum : L&apos;algorithme n&apos;explorera pas les chemins qui auront un budget temps individuel supérieur à cette valeur
            Temps généralisé maximum: L&apos;algorithme n&apos;explorera pas les chemins qui auront auront un temps généralisé totalsupérieur à cette valeur
            Pondération péage: Pondération de l&apos;attribut péage des arcs
            Filtre sortier: Indiquer les types d&apos;arcs que l&apos;on souhaite exporter dans les fichiers résultats (vide si l&apos;on souhaite tous les liens ex: metro|bus|tram exportera seulement les arcs  metro , bus et tram 
            Sortie temps détaillés: Sélectionnerles arcs que l&apos;on souhaite obtenir (Aucun, avec ou sans les arcs définis par des horaires)
            Demi-tours interdits: Activer si l&apos;on souhaite que l&apos;algorithm ne puisse pas prendre en compte les demi-tours
            Sortie chemins: Activer si l&apos;on souhaite le détail des chemins 
            Sortie services: Activer si l&apos;on souhaite les détail des calculs par service
            Sortie correspondance: Activer si l&apos;on souhaite de détail des sortie de mouvements tournants et correspondance
            Sortie noeuds: Activer si l&apos;on souhaite les temps détaillés par noeud
            Echelle de l&apos;agrithme: Paramètre d&apos;échelle de l&apos;agorithme de recherche de plus court chemin
            Exposent de l&apos;algorithme: Paramètre exposent de l&apos;algorithme
            Nb classes: Nombre d&apos;intervalle pour l&apos;algorithme de plus courts chemins
            Fichier paramètres: Nom du fichier de paramètre qui pourra être utilisé pour les calculs avec Musliw
            
        </translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="279"/>
        <source>Accept to download Musliw binary from Github</source>
        <translation type="obsolete">Accepter de télécharger l&apos;exécutable Musliw de Github</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="356"/>
        <source>Downloading Muslic binary</source>
        <translation type="obsolete">Téléchargement de Musliw</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="358"/>
        <source>Muslic downloaded succesfully</source>
        <translation type="obsolete">Téléchargement de Musliw terminé</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="391"/>
        <source>
        Create a set of parameters usefull for multimodal routing or acceesibility computation with Musliw
        Produce a parameter file (to be selected in musliw computation):
        
        Parameters:
            In vehicle weight : weight factor for travel time in vehicle (time baseds mode e.g bus, tram, train, metro, airplane, ferry,...)
            Waiting weight: weight factor for waiting time
            Individual mode weight : weight factor for individual modes travel times (e.g car, walking, cycling, ...)
            Boarding weight: weight factor for boarding time
            Individual mode speed factor: homothetic factor that apply to the individual travel times
			Minimum transfer delay : minimum safety time for transfer (ex: 5 means that you should wait at least 5 minutes at a stop before the bus leaves
            Maximum transfer delay: maximum waiting time for transfer (ex: 60 means that you will not be able to take atrain that leaves more that 60 minutes after you arrive)
            Extra day duration: By default Musliw takes only into account timetable of the day selected in the matrix. If you can extend with the timetable of the day after (if departure) or the day before (arrival) your must enter 1
            Max. indiviudal time budegt: The algorithm path will not explore shortest paths that have a individual time budget greater than this value
            Maximum generalized time: The algorithm path will not explore shortest paths that have a total generalised cost greater than this value
            Toll weight: weight factor for toll attribute
            Output filter: specify the type of links you want in the reports (empty will output all links ex: metro|bus|tram will export only metro , bus and tram lines
            Output links times: select what you want detailed output at link level (No, without ou with timetable based links)
            Prohibited U-turns: choose if if you want to allow u-turns in shortest paths computation
            Output paths: Check if you want to output detailed paths
            Output services: Check if you want to have detailed outputs for each service
            Output transfers: Check if you want to have detailed outputs on turns and transfers
            Outpout nodes times: Check if you want to have detailed outputs at node level
            Algorithm scale: Parameter of the shortest path algorithm
            Algorithm exponent: The algorithm parameter exponent
            Nb classes: The number of buckets of the shortest path algorithm
            Parameter file: The output parameter file to be used in musliw computation
            
            
        </source>
        <translation>Créer un jeu de paramètres utile pour le calcul d&apos;itinéraires et d&apos;accessibilité avec Musliw
		Génère un fichier de paramètres (qui doit être sélectionné pour le calcul Musliw):
        
        Paramètres:
            Pondération temps à horaires : Fcateur de pondération pour les temps à bord des modes définis par des  horaires (ex:  bus, tram, train, métro, avion, ferry,...)
            Pondération temps d&apos;attente: Facteur de pondération des temps d&apos;attente
           Pondération temps individuel :Facteur de pondération pour les modes individuels (ex voiture, marche, vélo, ...)
            Pondération correspondance: Facteur de pondération des temps de correspondance
            Facteur d&apos;échelle mode individuel: facteur homothéitque qui s&apos;applique aux temps de parcours des arcs des modes individuels
			Temps de correspondance mini : Temps minimum de sécurité pour la correspondance (ex: 5 signifie que l&apos;on doit être présent t 5 minutes à l&apos;arrêt avant que le bus parte
            Temps de correspondance maxi:Temps d&apos;attente maximum pour une correspondance (ex: 60 signifie  que l&apos;on ne peut pas prendre un train qui part plus de 60 minutes après que l&apos;on soit arrivé)
            Nombre de jours supplémentairesn: Par defaut Musliw ne prend en compte que les horaires du jour indiqué dans la matrice. Si l&apos;on souhaite étendre la recherche avec les horaires des jours suivants (si départ) ou des jours précédents (si arrivée)il faut saisir le nombre de jours supplémentaires à prendre en compte (ex  1 pour le lendemain ou la veille)
            Temps individuel maximum : L&apos;algorithme n&apos;explorera pas les chemins qui auront un budget temps individuel supérieur à cette valeur
            Temps généralisé maximum: L&apos;algorithme n&apos;explorera pas les chemins qui auront auront un temps généralisé totalsupérieur à cette valeur
            Pondération péage: Pondération de l&apos;attribut péage des arcs
            Filtre sortier: Indiquer les types d&apos;arcs que l&apos;on souhaite exporter dans les fichiers résultats (vide si l&apos;on souhaite tous les liens ex: metro|bus|tram exportera seulement les arcs  metro , bus et tram 
            Sortie temps détaillés: Sélectionnerles arcs que l&apos;on souhaite obtenir (Aucun, avec ou sans les arcs définis par des horaires)
            Demi-tours interdits: Activer si l&apos;on souhaite que l&apos;algorithm ne puisse pas prendre en compte les demi-tours
            Sortie chemins: Activer si l&apos;on souhaite le détail des chemins 
            Sortie services: Activer si l&apos;on souhaite les détail des calculs par service
            Sortie correspondance: Activer si l&apos;on souhaite de détail des sortie de mouvements tournants et correspondance
            Sortie noeuds: Activer si l&apos;on souhaite les temps détaillés par noeud
            Echelle de l&apos;agrithme: Paramètre d&apos;échelle de l&apos;agorithme de recherche de plus court chemin
            Exposent de l&apos;algorithme: Paramètre exposent de l&apos;algorithme
            Nb classes: Nombre d&apos;intervalle pour l&apos;algorithme de plus courts chemins
            Fichier paramètres: Nom du fichier de paramètre qui pourra être utilisé pour les calculs avec Musliw
            </translation>
    </message>
</context>
<context>
    <name>NetworksProvider</name>
    <message>
        <location filename="networks_provider.py" line="155"/>
        <source>Networks</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>PathAnalysis</name>
    <message>
        <location filename="path_analysis.py" line="93"/>
        <source>Arcs</source>
        <translation>Arcs</translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="100"/>
        <source>Result paths Musliw File</source>
        <translation>Fichier chemins Musliw</translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="107"/>
        <source>ij</source>
        <translation>ij</translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="114"/>
        <source>Flows</source>
        <translation>Volumes</translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="121"/>
        <source>Arc Type</source>
        <translation>Type d&apos;arc</translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="128"/>
        <source>By lines?</source>
        <translation>Par lignes?</translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="135"/>
        <source>Encoding</source>
        <translation>Encodage</translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="142"/>
        <source>Output</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="298"/>
        <source>Path analysis</source>
        <translation>Arborescence</translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="305"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="320"/>
        <source>
        Intercepts the demand that use on the selected arcs
        The result is a layer that containes arcs from trips using these arcs
        with the selected demand
		        
        Parameters:
            arcs: network layer 
			result paths Musliw file: Result file from Musliw computation containing detailed shortest paths (*_chemins.txt)
            ij: arc ID (combining i-node and j-node ex: m1456-m3256
            Flows: field containing flow values
            arc type: field containig arc_type
            by line: if selected the total flows are computed by lines instead of by arc
            Enconding: Encoding of the Reuslt Musliw file utf_8_sig normally
            output: layer of the slect link analysis
			
        </source>
        <translation>
        Intercepte la demande qui parcourt les arcs sélectionnés (arborescence)
        Le result est une couche qui contient les arcs appartenant aux OD qui passent par las arcs sélectionnés
        avec la demande interceptée
		        
        Paramètres:
            arcs: Couche réseau
            Fichier chemins Musliw: Fichier résultat du calcul Musliw où sont stockés les plus courts chemins sur les OD calculéeschemins  (*_chemins.txt)
            ij: identifiant d&apos;arc(combine le noedu i et le noeud j ex: m1456-m3256
            volumnes: champ contenant la demande totale interceptée
            type d&apos;arc: Champ contenant le type d&apos;arc
            par ligne:si sélectionné calcule la demande interceptée par segment de ligne et non par arc
            encondage: encodage du fichier chemins Musliw utf_8_sig normalement
            sortie: couche resultat contenant les arcs de la demande interceptée</translation>
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
        <location filename="prepare_gtfs.py" line="95"/>
        <source>GTFS output folder</source>
        <translation>Répertoire GTFS destination</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="103"/>
        <source>Network Id</source>
        <translation>Id réseau</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="110"/>
        <source>Extract stop_id?</source>
        <translation>Extraire stop_id?</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="117"/>
        <source>Extract formula</source>
        <translation>Formule d&apos;extraction</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="481"/>
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
        <location filename="prepare_gtfs.py" line="458"/>
        <source>Prepare GTFS</source>
        <translation>Préparer GTFS</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="465"/>
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
        <location filename="reseau_tc.py" line="577"/>
        <source>Musliw timetable network</source>
        <translation>Réseau Musliw à horaires </translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="542"/>
        <source>Reading stops</source>
        <translation>Lecture des stops</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="544"/>
        <source>Reading routes</source>
        <translation></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="546"/>
        <source>Reading trips</source>
        <translation>Lecture des routes</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="548"/>
        <source>Reading calendars_dates</source>
        <translation>Lecture des calendar_dates</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="550"/>
        <source>Reading calendars</source>
        <translation>Lecture des calendars</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="552"/>
        <source>Reading stop_times</source>
        <translation>Lecture des stop_times</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="554"/>
        <source>Generating lines</source>
        <translation>Génration des lignes</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="556"/>
        <source>Generation Musliw file</source>
        <translation>Génération du fichier Musliw</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="601"/>
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
        <location filename="reseau_tc.py" line="584"/>
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
        <translation>Réseau Musliw transport individuel</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="289"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
</context>
<context>
    <name>Routes</name>
    <message>
        <location filename="routes.py" line="87"/>
        <source>Musliw travel times</source>
        <translation>Temps de parcours Musliw</translation>
    </message>
    <message>
        <location filename="routes.py" line="94"/>
        <source>Output</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location filename="routes.py" line="203"/>
        <source>Routes</source>
        <translation>Itinéraires</translation>
    </message>
    <message>
        <location filename="routes.py" line="210"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="routes.py" line="225"/>
        <source>
        Display shortest paths from a selection of starting or ending arcs and a 
        a Musliw travel times files
		        
        Parameters:
            Mulsiw travel times: Musliw travel times file &quot;*_temps.txt&quot;
			Output: Output layer containing shortest paths traces
			
        </source>
        <translation>       Affiche lesitinéraires à partir d&apos;une sélection d&apos;arcs et
d&apos;un fichier de temps de parcours Musliw (*_temps.txt)

		        
        Paramètres:
            Temps de parcours Musliw:Fichier Musliw temps de parcours&quot;*_temps.txt&quot;
			Sortie: Couche résultat contenant les tracés des itinéraires
			</translation>
    </message>
</context>
<context>
    <name>ShiftLines</name>
    <message>
        <location filename="decaler_lignes.py" line="84"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="93"/>
        <source>ij</source>
        <translation>ij</translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="104"/>
        <source>Line</source>
        <translation>Ligne</translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="113"/>
        <source>Quantitative variable</source>
        <translation>Variable quantitative</translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="121"/>
        <source>Shift variable</source>
        <translation>Variable décalage</translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="225"/>
        <source>Shift lines</source>
        <translation>Décaler lignes</translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="232"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="248"/>
        <source>
        Update a field from a line layer (with superposed geographic links but with different line ids) to produce map layer with shifted links. 
        The algorithm will update an numeric attribute with a number that allows to produce flows maps with shifted lines. For example, if there is two superposed links from A to B with line 1 (100 passangers)
        and line 2 (200passengers) and you want to produce the flow maps of the total number of passengers, 
        the algorithm will update an attribute &quot;shift&quot; that will have 0 for line 1 (no shift) and 100 for line 2.
		
        Parameters:
            network: lines network 
			ij: link id (ij attribute or expression)
            line: line id
            quantitative value: the exprerssion you want to visualize in the flows map (flow variable)
            shift variable: field to be update with the shift value
            
            
        </source>
        <translation>        MIse à jour d&apos;un champ d&apos;un couche de lignes (avec des tronçons superposés géographiquement mais avec des identifiants de lignes différents ) pour pouvoir produire une carte de flux avec un décalagedes tronçons. 
        L&apos;algorithme va mettre à jour un champ nuémrique avec un nombre qui permettra de réaliser des cartes de flux avec décalage des lignes. Par exemple, s&apos;il existe deux tronçons superposés de A vers B avec un pour la ligne 1 (100 passagers) et l&apos;autre pour la ligne 2 ( 200 passagers et que l&apos;on souhaite produire une carte du nombre total de passagers, l&apos;algorithme mettra à jour un attribut &quot;shift&quot; qui vaudra 0 pour la ligne 1 et 100 pour la ligne 2
		
        Paramètres:
            réseau: Couche des lignes
			ij: identifiant de tronçon (champ &apos;ij&apos; ou expression)
            ligne: identifiant de ligne
            variable quantitative: L&apos;expression que l&apos;on souhaite visualiser dans la carte de flux
            variable décalage: Champ qui sera mis à jour avec la valeur du décalage</translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="156"/>
        <source>add field </source>
        <translation>Ajout du champ</translation>
    </message>
</context>
<context>
    <name>SimpleMatrix</name>
    <message>
        <location filename="simple_matrix.py" line="86"/>
        <source>Nodes</source>
        <translation>Noeuds</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="94"/>
        <source>Node ID</source>
        <translation>Id noeud</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="101"/>
        <source>Trip start</source>
        <translation>Point de départ</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="107"/>
        <source>Trip end</source>
        <translation>Point d&apos;arrivée</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="113"/>
        <source>Demand</source>
        <translation>Demande</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="121"/>
        <source>Day</source>
        <translation>Jour</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="129"/>
        <source>Time</source>
        <translation>Horaire</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="137"/>
        <source>Departure/Arrival</source>
        <translation>Départ/Arrivée</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="137"/>
        <source>Departure</source>
        <translation>Départ</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="137"/>
        <source>Arrival</source>
        <translation>Arrivée</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="149"/>
        <source>Musliw matrix</source>
        <translation>Matrice Musliw</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="156"/>
        <source>Write Mode</source>
        <translation>Mode écriture</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="156"/>
        <source>Write</source>
        <translation>Ecriture</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="156"/>
        <source>Append</source>
        <translation>Ajout</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="241"/>
        <source>Musliw simple matrix</source>
        <translation>Matrice Musliw simple</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="248"/>
        <source>Matrix</source>
        <translation>Matrice</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="264"/>
        <source>
        Generates a Musliw matrix from clicking on 2 nodes to define an origin(1st point)-destination(2nd point)
		
        Parameters:
            Nodes: nodes layer (corresponding to the routing arc layer )
			Node id: Field that contains the node Id
            Trip start: Start point (origin)
            Trips end: End point (destination)
            Demand: number of passengers for assignment
            Day: number of the day in the calendar (1 first day of the calendar)
            Time : Time of earliest departure or latest arrival
            Departure/Arrival: Departure (from Start point to end point forward) - Arrival (from end point to start point backward)
            Write mode: Write erase filname if exists/ Append add trip definition at the end of the file 
            Musliw matrix: Musliw matrix name (text file with &quot;;&quot; separator
            
            
        </source>
        <translation>        Génère une matrice Musliw en cliquant sur deux noeuds pour définir une origine(1er point)-destination(2è point)
		
        Paramètres:
            Noeuds: Couches des noeuds (Devant correspondre à la couche des arcs du calcul de cheminement)
			Id noeud: Identifiant de noeud
            Point de départ: Point de départ (origine)
            Point d&apos;arrivée: Point d&apos;arrivée (destination)
            Demaned:nombre de passagers pour l&apos;affectation
            Jour: Numéro de jour dans le calendrier (1 =  1er jour du calendrier)
            Horaire : heure de départ au plus tôt ou arrivée au plus tardl
            Depart/Arrivée: Depart (du point de départ vers le point d&apos;arrivée en avant recherche des successeurs) - Arrivéé (du point d&apos;arrivée au poitn de départ à rebours recherche de prédecesseurs)
            Mode d&apos;écriture: Ecriture efface le fichier s&apos;il existe/ Ajout ajoute une ligne au fichier s&apos;il existe
            Matrice Musliw: nom de la matrice Musliw (fichier texte avec séparateur &quot;;&quot;)
            </translation>
    </message>
</context>
<context>
    <name>SpatialAggregation</name>
    <message>
        <location filename="spatial_aggregation.py" line="91"/>
        <source>Polygons</source>
        <translation>Polygones</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="98"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="105"/>
        <source>Source</source>
        <translation>Source</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="112"/>
        <source>Variable</source>
        <translation>Variable</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>Aggregator</source>
        <translation>Agrégateur</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>mean</source>
        <translation>moyenne</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>sum</source>
        <translation>somme</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>min</source>
        <translation>min</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>max</source>
        <translation>max</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="127"/>
        <source>Output</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="218"/>
        <source>Spatial aggregation</source>
        <translation>Agrégation spatiale</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="225"/>
        <source>Network</source>
        <translation type="obsolete">Réseau</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="240"/>
        <source>
        Perform a spatial aggregation between 2 layers in order to estimate 
        for example the proportion of population which belongs to a polygon (ex: area &lt;30min)
		        
        Parameters:
            polygons: the polygon layer (ex: iso-value layer)
			id: field containing the polygon id (ex: 30min iso-value)
			source: a polygon layer with a variable to compute (ex: municipalities layer)
			variable: the variable to compute from the source layer (ex: population from mumicipalities layer)
			aggregator: aggregator (min,max, mean, sum) 
			output: the result of aggration layer (containing the same objects as the polygons layer)
        </source>
        <translation>        Effectue une aggrégation spatiale entre 2 couches de polygones
pour estimer par exemple la part de la population qui est à l&apos;intérieur d&apos;un polygone (ex surface &lt; 30min)
		        
        Parametères:
            polygones: nom de la couche de polygones (ex: isochrones)
			id: champ contenant l&apos;identifiant du polygones (ex isochrone de 30 minutes)
			source: couche de polygones qui contient la variable à estimer ( ex: communes contenant la population)
			variable: la variable à calculer de la table source (ex: la population des communes)
			aggregateur:aggreagateur (min, max, moyenne, somme)
			valeur absente: valeur correspondant à l&apos;absence de données dans le raster
			sortie: table résultat contenant les polygones avec la variable estimée

        </translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="225"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
</context>
<context>
    <name>Spatial_aggregation</name>
    <message>
        <location filename="spatial_aggregation.py" line="91"/>
        <source>Polygons</source>
        <translation type="obsolete">Polygones</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="98"/>
        <source>Id</source>
        <translation type="obsolete">Id</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="105"/>
        <source>Source</source>
        <translation type="obsolete">Source</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="112"/>
        <source>Variable</source>
        <translation type="obsolete">Variable</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>Aggregator</source>
        <translation type="obsolete">Aggregateur</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>mean</source>
        <translation type="obsolete">moyenne</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>sum</source>
        <translation type="obsolete">somme</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>min</source>
        <translation type="obsolete">min</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>max</source>
        <translation type="obsolete">max</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="218"/>
        <source>Spatial aggregation</source>
        <translation type="obsolete">Agrégation spatiale</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="225"/>
        <source>Analysis</source>
        <translation type="obsolete">Analyses</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="240"/>
        <source>
        Perform a spatial aggregation between 2 layers in order to estimate 
        for example the proportion of population which belongs to a polygon (ex: area &lt;30min)
		        
        Parameters:
            polygons: the polygon layer (ex: iso-value layer)
			id: field containing the polygon id (ex: 30min iso-value)
			source: a polygon layer with a variable to compute (ex: municipalities layer)
			variable: the variable to compute from the source layer (ex: population from mumicipalities layer)
			aggregator: aggregator (min,max, mean, sum) 
			output: the result of aggration layer (containing the same objects as the polygons layer)
        </source>
        <translation type="obsolete">        Effectue une aggrégation spatiale entre 2 couches de polygones
pour estimer par exemple la part de la population qui est à l&apos;intérieur d&apos;un polygone (ex surface &lt; 30min)
		        
        Parametères:
            polygones: nom de la couche de polygones (ex: isochrones)
			id: champ contenant l&apos;identifiant du polygones (ex isochrone de 30 minutes)
			source: couche de polygones qui contient la variable à estimer ( ex: communes contenant la population)
			variable: la variable à calculer de la table source (ex: la population des communes)
			aggregateur:aggreagateur (min, max, moyenne, somme)
			valeur absente: valeur correspondant à l&apos;absence de données dans le raster
			sortie: table résultat contenant les polygones avec la variable estimée

        </translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="127"/>
        <source>Output</source>
        <translation type="obsolete">Sortie</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="225"/>
        <source>Network</source>
        <translation type="obsolete">Réseau</translation>
    </message>
</context>
<context>
    <name>Trafic</name>
    <message>
        <location filename="trafic.py" line="95"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="trafic.py" line="101"/>
        <source>Width</source>
        <translation>Largeur</translation>
    </message>
    <message>
        <location filename="trafic.py" line="108"/>
        <source>Scale</source>
        <translation>Echelle</translation>
    </message>
    <message>
        <location filename="trafic.py" line="116"/>
        <source>Max angle(degrees)</source>
        <translation>Angle max (degrés)</translation>
    </message>
    <message>
        <location filename="trafic.py" line="124"/>
        <source>Min distance(m)</source>
        <translation>Min distance(m)</translation>
    </message>
    <message>
        <location filename="trafic.py" line="132"/>
        <source>Both directions?</source>
        <translation>Double sens?</translation>
    </message>
    <message>
        <location filename="trafic.py" line="677"/>
        <source>Variable buffer polygons</source>
        <translation>Polygones à largeur variables</translation>
    </message>
    <message>
        <location filename="trafic.py" line="684"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="trafic.py" line="700"/>
        <source>
        Generates variable buffer polygons from a linear layer and a field containing a width variable
		        
        Parameters:
            network: input layer name (linear objects)
			width: width field
			scale: scale factor for width in (m)
			max_angle: maximum angle for nice cuts
			min_distance: smi distance from arcs ends for angle estimation
			Both directions?: check if two ways arc
			Variable buffer polygons: Result layer (polygons proportionnal with proportionnal width)
        </source>
        <translation>
        Génère des polygones à largeur varible à partir d&apos;une couche d&apos;objets linéaires et d&apos;un champ épaisseur
		        
        Paramètres:
            réseau: couche réseau &apos;objets linéaires)
			largeur: champ largeur
			échelle: facteur d&apos;échelle (m)
			angle max: angle maximum pour les belles découpes
			min_distance: min distance
			deux sens?:Un seul polygone pour les deux sens (non rienté)
			polygones à largeur variable:Couche résultatr (polygones à largeur proportionnelle à un champ l&apos;épaisseur)</translation>
    </message>
</context>
<context>
    <name>Updating arcs</name>
    <message>
        <location filename="creer_graphe.py" line="236"/>
        <source>Updating arcs</source>
        <translation>Mise à jour des arcs...</translation>
    </message>
</context>
</TS>
