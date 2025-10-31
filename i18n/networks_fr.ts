<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr">
<context>
    <name>AddLayer</name>
    <message>
        <location filename="add_layer.py" line="21"/>
        <source>Vector layer</source>
        <translation>Couche vectorielle</translation>
    </message>
    <message>
        <location filename="add_layer.py" line="33"/>
        <source>Error : the layer can&apos;t be loaded&apos;.</source>
        <translation>Erreur: la couche ne peut pas être chargée.</translation>
    </message>
    <message>
        <location filename="add_layer.py" line="46"/>
        <source>Utilities</source>
        <translation>Utilitaires</translation>
    </message>
    <message>
        <location filename="add_layer.py" line="43"/>
        <source>Add layer</source>
        <translation>Ajouter couche vectorielle</translation>
    </message>
</context>
<context>
    <name>AjoutChamp</name>
    <message>
        <location filename="ajout_champ.py" line="99"/>
        <source>Field</source>
        <translation>Champ</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="109"/>
        <source>Type</source>
        <translation>Type</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="117"/>
        <source>Size</source>
        <translation>Taille</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="128"/>
        <source>Precision</source>
        <translation>Précision</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="140"/>
        <source>Filter</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="154"/>
        <source>Formula</source>
        <translation>Formule</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="231"/>
        <source>updating field...</source>
        <translation>mise à jour du champ...</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="233"/>
        <source>updating field</source>
        <translation>mise à jour du champ</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="300"/>
        <source>
        Add or update a field in a Qgis layer from an expression formula on a set of rows
        
        Parameters:
            layer&#xa0;: a vector layer
            field&#xa0;: name of the field to update or name of the new field
            type&#xa0;: field data type (if new field)
            size&#xa0;: field size (if new field)
            precision&#xa0;: field precision (if new field and real type)
            filter: expression determining which rows will be updated
            formula&#xa0;: expression that will be written in the field( for filtered rows only)
            
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
        <location filename="ajout_champ.py" line="90"/>
        <source>Layer</source>
        <translation>Couche (qgis)</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="269"/>
        <source>Update field</source>
        <translation>Mise à jour champ</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="276"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="245"/>
        <source>Warning: The layer is not editable</source>
        <translation>Attention: la couche n&apos;est pas éditable</translation>
    </message>
</context>
<context>
    <name>ArcsTi</name>
    <message>
        <location filename="create_ti_arcs.py" line="80"/>
        <source>Road network</source>
        <translation>Arcs (Qgis)</translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="88"/>
        <source>i-node</source>
        <translation>noeud i</translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="97"/>
        <source>j-node</source>
        <translation>noeud j</translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="107"/>
        <source>Node ID concatenator</source>
        <translation>concaténateur de noeud</translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="117"/>
        <source>Output layer</source>
        <translation>Couche résultat</translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="169"/>
        <source>Create individual networks arcs</source>
        <translation>Génère des tables arcs transport individuel</translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="176"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="192"/>
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
        <translation type="obsolete">        Généère un réseau Musliw de mode individuel (voiture, marche, vélo,...)à partir d&apos;une couche réseau (objets linéaires)
		
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
        <location filename="create_ti_arcs.py" line="192"/>
        <source>
        Generates a arcs layer for individual transport mode similarly to arcs layers from GTFS Import
        in order to concatenate every netwrok element for multimodal routing visualization
		
        Parameters:
            road network: road network layer (linear objects)
			i-node: i_node id field
            j-node: j-node id field
            Node id concatenator: a character or a string to build ij field by concatenating i-node and j-node field 
            output layer: name of teh result output layer
            
            
        </source>
        <translation>
        Génère un couche arcs similaire à celle générée lors d&apos;un import GTFS.
 Cela permet de fusionner les différents réseaux pour visualiser les itinéraires multimodaux

		
        Paramètres:
            réseau: réseau de transport individuel (objets linéaires)
			i-node: noeud i
            j-node:noeud j
            Node id concatenator: caractère pour concaténer les identifiant de noeud i et j pour générer l&apos;identifiant d&apos;arc ij
            couche résultat: nom de la couches arcs générée</translation>
    </message>
</context>
<context>
    <name>AutoConnecteurs</name>
    <message>
        <location filename="autoconnectors.py" line="86"/>
        <source>Nodes</source>
        <translation>Noeuds (Qgis)</translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="93"/>
        <source>node_id</source>
        <translation>node_id</translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="101"/>
        <source>mode</source>
        <translation>mode</translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="108"/>
        <source>Radius(m)</source>
        <translation>Rayon(m)</translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="118"/>
        <source>Speed</source>
        <translation>Vitesse</translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="129"/>
        <source>Connectors file</source>
        <translation>Sortie connecteurs (Qgis)</translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="210"/>
        <source> connected nodes</source>
        <translation>noeuds connectés</translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="230"/>
        <source>Auto-connectors</source>
        <translation>Auto-connecteurs</translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="237"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="250"/>
        <source>
        Generate a layer of linear objects corresponding to connections between points closest within a layer (e.g. PT stops)
        
        Parameters:
            nodes&#xa0;: nodes layer
			node_id: node id
			radius: search radius(m)
			mode: mode at node
			speed: travel speed on connectors (0= infinite speed)
			connectors file: name of the resulting connectors layer
			NB: the tool generates in the same time a txt file in Musliw format (same name as connectors file with txt extension)
			
        </source>
        <translation>
        Génère une couche d&apos;objets linéaires correspondant aux correspondants aux connexions entre les points les plus proches à l&apos;intérieur d&apos;unje couche (ex: les arrêts TC)
        
        Parametères:
            noeuds : couche des noeuds
			node_id: node id
			rayon: rayon de recherche(m)
			mode: mode au noeud spécifié
			speed: vitesse sur les connecteurs (0= vitesse infinie)
			fichier connecteurs: nom de la couche des conecteurs
			NB: L&apos;outil crée également en même temps le fichier txt au format Musliw format (même nom que le fichier connecteurs mais avec une extention txt)
			</translation>
    </message>
</context>
<context>
    <name>Building graph</name>
    <message>
        <location filename="creer_graphe.py" line="255"/>
        <source>Building graph</source>
        <translation>Créer graphe</translation>
    </message>
</context>
<context>
    <name>CalculMint</name>
    <message>
        <location filename="calcul_mint.py" line="91"/>
        <source>Mint network</source>
        <translation>Réseau Mint</translation>
    </message>
    <message>
        <location filename="calcul_mint.py" line="97"/>
        <source>Mint matrix</source>
        <translation>Matrice Mint</translation>
    </message>
    <message>
        <location filename="calcul_mint.py" line="103"/>
        <source>Mint parameters</source>
        <translation>Paramètres Mint</translation>
    </message>
    <message>
        <location filename="calcul_mint.py" line="110"/>
        <source>Output</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location filename="calcul_mint.py" line="119"/>
        <source>Accept to download Mint binary from Github</source>
        <translation>Accepter de télécharger l&apos;exécutable Mint de Github</translation>
    </message>
    <message>
        <location filename="calcul_mint.py" line="147"/>
        <source>Downloading Mint_console binary</source>
        <translation type="obsolete">Téléchargement de Mint_Console</translation>
    </message>
    <message>
        <location filename="calcul_mint.py" line="159"/>
        <source>Mint_console downloaded succesfully</source>
        <translation>Mint_console téléchargé avec succès</translation>
    </message>
    <message>
        <location filename="calcul_mint.py" line="176"/>
        <source>Multimodal calculations... That could take some time</source>
        <translation>Calcul d&apos;accessibilité multimodale...Cela peut prendre un certains temps</translation>
    </message>
    <message>
        <location filename="calcul_mint.py" line="199"/>
        <source>Mint computation</source>
        <translation>Calcul Mint</translation>
    </message>
    <message>
        <location filename="calcul_mint.py" line="206"/>
        <source>Computations</source>
        <translation>Calculs</translation>
    </message>
    <message>
        <location filename="calcul_mint.py" line="222"/>
        <source>
        Perform a calculation of multimodal assignment with a frequency based algorithm (Mint)
        Can download the Mint_console.exe binary for frequency based assignment computation (if checked)
        Produce output files (semi-column separated files (if selected in parameters):
        . Origin destination results file &quot;_od.txt&quot;
        . Cumulative times on arcs &quot;_times.txt&quot; (usefull for isochron maps)
        . Assignment results file on links &quot;_aff.txt&quot;
        . Detailed strategies file (optional)
        Parameters:
            Mint network&#xa0;: Mint network
            Mint matrix: Mint matrix
            Mint parameters: Mint parameters
            Accept to download Mint binary: If checked, the algorithm will download Mint_console.exe from the github repository
            output : Mint results file (without extension)
        </source>
        <translation>        Effectuer une affectation multimodale sur un réseau défini par des fréquences (Mint)
        Peut télécharger le programme  Mint_console.exe pour une affectation basée sur des fréquences (si sélectioné)
         Produit les fichiers en sortie (ficheirs texte séparés par des &quot;;&quot; (si sélectionnées dans les paramètres):
        .Fichier résultats origine-destinations  &quot;_od.txt&quot;
        .Temps de parcours cumulés sur les arcs &quot;_times.txt&quot; (utile pour les cartes isochrones)
        . Résultats d&apos;affectation sur les arcs &quot;_aff.txt&quot;
        . Stratégies détaillées (optionel)
        Parameters:
            Réseau Mint : Réseau Mint
            Matrice Mint: Matrice Mint 
            Paramètres: Mint Paramètres Mint
            Accepter de télécharger l&apos;exécutable Mint : Si sélectionné, le script téélcharge l&apos;exécutable  Mint_console.exe du répertoire Github
            Sortie :Fichiers de résultats Mint (sans extension)</translation>
    </message>
    <message>
        <location filename="calcul_mint.py" line="157"/>
        <source>Downloading Mint_console binaries</source>
        <translation>Téléchargement des exécutables Mint</translation>
    </message>
    <message>
        <location filename="calcul_mint.py" line="127"/>
        <source>Force waiting the end of calculations</source>
        <translation>Forcer l&apos;attente de la fin du calcul avant de continuer</translation>
    </message>
</context>
<context>
    <name>CalculMusliw</name>
    <message>
        <location filename="calcul_musliw.py" line="91"/>
        <source>Musliw network</source>
        <translation>Réseau Musliw (txt)</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="97"/>
        <source>Musliw matrix</source>
        <translation>Matrice Musliw (txt)</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="103"/>
        <source>Musliw parameters</source>
        <translation>Paramètres Musliw (txt)</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="109"/>
        <source>Musliw penalties</source>
        <translation>Pénalités Musliw (txt)</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="116"/>
        <source>Output</source>
        <translation>Sortie (txt)</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="182"/>
        <source>Multimodal calculations... That could take some time</source>
        <translation>Calcul d&apos;accessibilité multimodale...Cela peut prendre un certains temps</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="210"/>
        <source>Musliw computation</source>
        <translation>Calcul Musliw</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="217"/>
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
            network&#xa0;: Musliw network
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
        <location filename="calcul_musliw.py" line="125"/>
        <source>Accept to download Musliw binary from Github</source>
        <translation>Accepter de télécharger l&apos;exécutable Musliw de Github</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="163"/>
        <source>Downloading Muslic binary</source>
        <translation>Téléchargement de Musliw</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="165"/>
        <source>Muslic downloaded succesfully</source>
        <translation>Téléchargement de Musliw terminé</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="233"/>
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
            network&#xa0;: Musliw network
            matrix: Musliw matrix
            parameters: Musliw parameters
            penalties: Musliw penalties and transfers file
			output : Mulsiw results file (without extension)
            Accept to download Muslic binary: If checked, the algorithm will download Muslic.exe on the github repository
        </source>
        <translation>        Effectue un calcul d&apos;itinéraires et d&apos;accessibilité multimodale
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
			sortie : Fichier de resultats Musliw (sans extension)</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="133"/>
        <source>Force waiting the end of calculations</source>
        <translation>Forcer l&apos;attente de la fin du calcul avant de continuer</translation>
    </message>
</context>
<context>
    <name>ConcatFolder</name>
    <message>
        <location filename="concat_reseaux.py" line="84"/>
        <source>Network elements folder</source>
        <translation>Répertoire source</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="98"/>
        <source>Global network</source>
        <translation>Réseau multimodal (txt)</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="156"/>
        <source>Concatenate networks folder</source>
        <translation>Répertoire des réseaux à concantener</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="163"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="166"/>
        <source>
        Concatenate Musliw networks elements,
		timetable based network elements, indivudal modes elements and connector elements in order to generate a global multimodal network as input for Musliw tool
        
        Parameters:
            network elements folder&#xa0;: Musliw networks elements folder
			global network: name of the global network file (txt)
        </source>
        <translation type="obsolete">        Concatène différents réseaux Musliw,réseaux à horaires,de transport individuel, des connecteurspour générer un réseau multimodal utilisable en entrée pour le logiciel Musliw
        
        Paramètres:
            Répertoire source :Répertoire où sont localisés les éléments de érseaux à concaténer (concatène tous les réseaux présents)
            Réseau multimodal: Nom du réseau global multimodal (txt)
        </translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="91"/>
        <source>Column names on first row?</source>
        <translation>Noms de colonnes sur la première ligne?</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="179"/>
        <source>
        Concatenate Musliw networks elements,
		timetable based network elements, indivudal modes elements and connector elements in order to generate a global multimodal network as input for Musliw tool
        
        Parameters:
            network elements folder&#xa0;: Musliw networks elements folder
			global network: name of the global network file (txt)
            column names on first row?: Must be checked if column names are on first row
        </source>
        <translation>        Concatène différents réseaux Musliw,réseaux à horaires,de transport individuel, des connecteurspour générer un réseau multimodal utilisable en entrée pour le logiciel Musliw
        
        Paramètres:
            Répertoire source :Répertoire où sont localisés les éléments de érseaux à concaténer (concatène tous les réseaux présents)
            Réseau multimodal: Nom du réseau global multimodal (txt)
        Noms de colonnes sur la première ligne? Cocher si les noms de colonnes sont sur la première ligne des fichiers texte</translation>
    </message>
</context>
<context>
    <name>ConcatNetworkFiles</name>
    <message>
        <location filename="concat_files.py" line="85"/>
        <source>Network files to concatenate</source>
        <translation>Fichiers réseaux à concaténer (txt)</translation>
    </message>
    <message>
        <location filename="concat_files.py" line="99"/>
        <source>Global network</source>
        <translation>Réseau multimodal (txt)</translation>
    </message>
    <message>
        <location filename="concat_files.py" line="156"/>
        <source>Concatenate network files</source>
        <translation>Réseaux à concaténer</translation>
    </message>
    <message>
        <location filename="concat_files.py" line="163"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="concat_files.py" line="179"/>
        <source>
        Concatenate Musliw networks elements,
		timetable based network elements, indivudal modes elements and connector elements in order to generate a global multimodal network as input for Musliw tool
        
        Parameters:
            network elements files&#xa0;: Musliw networks elements files
			global network: name of the global network file (txt)
            column names on first row?: Must be checked if column names are on first row
        </source>
        <translation>        Concatène différents réseaux Musliw,réseaux à horaires,de transport individuel, des connecteurspour générer un réseau multimodal utilisable en entrée pour le logiciel Musliw
        
        Paramètres:
            Fichiers réseaux à concaténer:Sélectionner les différents réseaux ou composants (transport individuel, à horaires, connecteurs) à concaténer pour générer le réseaux multimodal
            Réseau multimodal: Nom du réseau global multimodal (txt)
            Noms de colonnes sur la première ligne? Cocher sir les noms de colonne sont sur la première ligne des fichiers texte</translation>
    </message>
    <message>
        <location filename="concat_files.py" line="92"/>
        <source>Column names on first row?</source>
        <translation>Noms de colonnes sur la première lignes</translation>
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
        <translation type="obsolete">Réseau multimodal</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="163"/>
        <source>
        Concatenate Musliw networks elements,
		timetable based network elements, indivudal modes elements and connector elements in order to generate a global multimodal network as input for Musliw tool
        
        Parameters:
            sources&#xa0;: Musliw networks elements (use &lt;shift&gt; and &lt;ctrl&gt; in order to select several files)
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
        <translation type="obsolete">Concaténer réseaux</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="150"/>
        <source>Network</source>
        <translation type="obsolete">Réseau</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="82"/>
        <source>Network elements folder</source>
        <translation type="obsolete">Répertoire source</translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="166"/>
        <source>
        Concatenate Musliw networks elements,
		timetable based network elements, indivudal modes elements and connector elements in order to generate a global multimodal network as input for Musliw tool
        
        Parameters:
            network elements folder&#xa0;: Musliw networks elements folder
			global network: name of the global network file (txt)
        </source>
        <translation type="obsolete">        Concatène différents réseaux Musliw,réseaux à horaires,de transport individuel, des connecteurspour générer un réseau multimodal utilisable en entrée pour le logiciel Musliw
        
        Paramètres:
            Répertoire source :Répertoire où sont localisés les éléments de érseaux à concaténer (concatène tous les réseaux présents)
            Réseau multimodal: Nom du réseau global multimodal (txt)
        </translation>
    </message>
</context>
<context>
    <name>ConnectNodes2Lines</name>
    <message>
        <location filename="connect_nodes2lines.py" line="216"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="89"/>
        <source>Nodes(Qgis)</source>
        <translation>Noeuds (Qgis)</translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="96"/>
        <source>Radius(m)</source>
        <translation>Rayon(m)</translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="129"/>
        <source>Split polylines at connections</source>
        <translation>Eclate les polylignes aux connections</translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="132"/>
        <source>Connecting points to lines...</source>
        <translation>Connexion des points aux lignes...</translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="209"/>
        <source>Connect nodes to lines</source>
        <translation>Connecter des points à des lignes</translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="229"/>
        <source>
        Connect points to a a linear objetcs layers within a search radius. Points are conencted to the closest line. 
        The closest line is splitted at the shorstest distance point in two lines, and a line is generated between the point and the closest point
        The lines layer is in editable mode in order to be alble to cancel the connections.
        
        Parameters:
            lines&#xa0;: lines layer (linear objects)
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
    <message>
        <location filename="connect_nodes2lines.py" line="82"/>
        <source>Network(Qgis)</source>
        <translation>Arcs(Qgis)</translation>
    </message>
</context>
<context>
    <name>ConnecteursGeo</name>
    <message>
        <location filename="connecteurs_geo.py" line="95"/>
        <source>Stops</source>
        <translation>Arrêts (Qgis)</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="102"/>
        <source>Stop_id</source>
        <translation>Stop_id</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="110"/>
        <source>i-text</source>
        <translation>Texte noeud i</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="117"/>
        <source>i-mode</source>
        <translation>mode noeud i</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="124"/>
        <source>Nodes</source>
        <translation>Noeuds (Qgis)</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="131"/>
        <source>node_id</source>
        <translation>node_id</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="139"/>
        <source>j-text</source>
        <translation>Texte noeud j</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="146"/>
        <source>j-mode</source>
        <translation>Mode noeud j</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="153"/>
        <source>Radius(m)</source>
        <translation>Rayon(m)</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="163"/>
        <source>Speed</source>
        <translation>Vitesse</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="173"/>
        <source>Maximum number</source>
        <translation>Nombre max</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="194"/>
        <source>Connectors file</source>
        <translation>Fichier des connecteurs (Qgis)</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="248"/>
        <source>length</source>
        <translation>longueur</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="249"/>
        <source>time</source>
        <translation>temps</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="250"/>
        <source>mode</source>
        <translation>mode</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="302"/>
        <source> connected nodes</source>
        <translation>noeuds connectés</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="342"/>
        <source>
        Generate a layer of linear objects corresponding to connections between two ponts layers (e.g. PT stops and roads nodes)
        
        Parameters:
            stops&#xa0;: stops layer
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
        <location filename="connecteurs_geo.py" line="322"/>
        <source>Build connectors</source>
        <translation>Créer connecteurs</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="329"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="183"/>
        <source>ID field size</source>
        <translation type="obsolete">Taille du champ Id</translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="183"/>
        <source>Null length connectors</source>
        <translation>Connecteurs de longueur nulle</translation>
    </message>
</context>
<context>
    <name>Contours</name>
    <message>
        <location filename="contours.py" line="97"/>
        <source>Raster</source>
        <translation>Raster (Qgis)</translation>
    </message>
    <message>
        <location filename="contours.py" line="103"/>
        <source>Band</source>
        <translation>Bande</translation>
    </message>
    <message>
        <location filename="contours.py" line="111"/>
        <source>Min</source>
        <translation>Min</translation>
    </message>
    <message>
        <location filename="contours.py" line="119"/>
        <source>Max</source>
        <translation>Max</translation>
    </message>
    <message>
        <location filename="contours.py" line="127"/>
        <source>Interval</source>
        <translation>Intervalle</translation>
    </message>
    <message>
        <location filename="contours.py" line="135"/>
        <source>No Value</source>
        <translation>Valeur absente</translation>
    </message>
    <message>
        <location filename="contours.py" line="143"/>
        <source>Polygons</source>
        <translation>Polygones</translation>
    </message>
    <message>
        <location filename="contours.py" line="349"/>
        <source>Isovalue polygons</source>
        <translation>Contours iso-valeurs</translation>
    </message>
    <message>
        <location filename="contours.py" line="236"/>
        <source>Grid interpolation...</source>
        <translation>Interpolation de la grille...</translation>
    </message>
    <message>
        <location filename="contours.py" line="288"/>
        <source>Generating isovalue polygons...</source>
        <translation>Génération des polygones iso-valeurs...</translation>
    </message>
    <message>
        <location filename="contours.py" line="740"/>
        <source>
        Generates isovalue polygons from a rester layer (ex: in order to genarate isochrones areas)
		        
        Parameters:
            raster: input raster layer name
			band: band to compute
			min: minimum isovalue area to generate
			max: maximum isovalue area to generate
			interval: step between each isovalue
			no_value: value corresponding to the raster no_value
			polygons: True= genarates polygons: False generates Polylines
            individual values: if checked generate a polygon for each individual raster value (no interpolation)
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
			valeurs individuelles : True=Génèreun polygone pour chaque valeur de pixel du raster (pas d&apos;interpolation)
			contours iso-valeurs: nom de la couche iso_valeurs en sortie
        </translation>
    </message>
    <message>
        <location filename="contours.py" line="356"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="contours.py" line="150"/>
        <source>Individual Values</source>
        <translation>Valeurs individuelles</translation>
    </message>
</context>
<context>
    <name>CreateUpdateLinks</name>
    <message>
        <location filename="create_update_links.py" line="283"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="96"/>
        <source>Travel times file</source>
        <translation>Fichier temps de parcours</translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="102"/>
        <source>Extent</source>
        <translation>Fenêtre</translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="111"/>
        <source>Initial/final waiting time?</source>
        <translation>temps d&apos;attente initial/final?</translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="120"/>
        <source>Result network</source>
        <translation>Réseau résultat</translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="213"/>
        <source>updating ti and tj...</source>
        <translation>Mise à jour ti et tj...</translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="276"/>
        <source>Create updated links</source>
        <translation>Création des arcs mis à jour avec les temps</translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="299"/>
        <source>
        Read the travel times file &quot;.._temps.txt&quot; computed by Musliw and creates a the network layer with i-node and j-node travel times from travel time file included
		        
        Parameters:
            layer&#xa0;: network layer (linear objects)
			travel times file: travel times text file ..._temps.txt generated by Musliw
            extent: window that defines the updated links  (only those inside the window)
            departure/arrival: departure if &quot;d&quot; in Musliw matrix, arrival if &quot;a&quot;
            initial/final waiting time: in order to take into account or not inital/final waiting time (tatt1)
            result network: name of the network layer subset with updated travel times (ti &amp; tj)
        </source>
        <translation>        Lit le fichier temps de parcours  &quot;.._temps.txt&quot; calculé par Musliw et généère une couche réseau d&apos;objets linéaires avec les temps de parcours en i et en j (ti et tj) mis à jour avec le fichier temps
		        
        Paramètres:
            reseau : couche du réseaur (objets linéaires)
			Fichier temps de parcours Musliw: Fichier temps ..._temps.txt généré par Musliw
            fenêtre: fenêtre qui sélectionne les arcs à mettre à jour  (ceux à l&apos;intérieur de la fenêtre)
            temps d&apos;attente intial/final: pour prendre en compte ou non le temps initial/final (tatt1)
            réseau résultat: nom de la couche réseau générée avec les temps mis à jour du fichier temps (ti &amp; tj)</translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="89"/>
        <source>Network(Qgis)</source>
        <translation>Arcs(Qgis)</translation>
    </message>
</context>
<context>
    <name>CreerGraphe</name>
    <message>
        <location filename="creer_graphe.py" line="323"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="97"/>
        <source>Direction</source>
        <translation>Sens</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="116"/>
        <source>Prefix</source>
        <translation>Préfixe</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="136"/>
        <source>Nodes layer</source>
        <translation>Table des noeuds</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="316"/>
        <source>Build graph</source>
        <translation>Créer graphe</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="106"/>
        <source>Node Id</source>
        <translation>Node id</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="339"/>
        <source>
        Build a graph from a linear layer (create a node layer, i and j fields filled with node id at start and end node) taking into account the direction of flows
        
        Parameters:
            network&#xa0;: Network layer (linear objects)
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
        <location filename="creer_graphe.py" line="106"/>
        <source>Number series</source>
        <translation>Compteur</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="106"/>
        <source>Geographic string(unique)</source>
        <translation>Chaîne géographique (unique)</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="126"/>
        <source>Nb of decimals</source>
        <translation>Nb de décimales</translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="90"/>
        <source>Network(qgis)</source>
        <translation>Arcs(Qgis)</translation>
    </message>
</context>
<context>
    <name>DeleteFile</name>
    <message>
        <location filename="deletefile.py" line="21"/>
        <source>File</source>
        <translation>Fichier</translation>
    </message>
    <message>
        <location filename="deletefile.py" line="21"/>
        <source>All files (*.*)</source>
        <translation>Tous les fichiers (*.*)</translation>
    </message>
    <message>
        <location filename="deletefile.py" line="34"/>
        <source>The file </source>
        <translation>le fichier</translation>
    </message>
    <message>
        <location filename="deletefile.py" line="32"/>
        <source>File </source>
        <translation>Fichier</translation>
    </message>
    <message>
        <location filename="deletefile.py" line="34"/>
        <source> doesn&apos;t exist</source>
        <translation> n&apos;existe pas</translation>
    </message>
    <message>
        <location filename="deletefile.py" line="47"/>
        <source>Delete file</source>
        <translation>Supprimer fichier</translation>
    </message>
    <message>
        <location filename="deletefile.py" line="50"/>
        <source>Utilities</source>
        <translation>Utilitaires</translation>
    </message>
</context>
<context>
    <name>Erreur</name>
    <message>
        <location filename="creer_graphe.py" line="287"/>
        <source>Erreur</source>
        <translation>Error</translation>
    </message>
</context>
<context>
    <name>FichierAff</name>
    <message>
        <location filename="fichier_aff.py" line="86"/>
        <source>Network</source>
        <translation>Arcs (Qgis)</translation>
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
        <location filename="fichier_aff.py" line="115"/>
        <source>Flows</source>
        <translation>Volumes</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="122"/>
        <source>Link type</source>
        <translation>Type de tronçon</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="132"/>
        <source>aff output file</source>
        <translation>Fichier aff (txt)</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="142"/>
        <source>Encoding</source>
        <translation>Encodage</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="149"/>
        <source>Flows layer</source>
        <translation>Couche de flux</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="272"/>
        <source>Get link flows data</source>
        <translation>Importer des données de flux</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="279"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="295"/>
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
        <location filename="fichier_od.py" line="89"/>
        <source>OD output file</source>
        <translation>Fichier OD (txt)</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="101"/>
        <source>Variable</source>
        <translation>Variable</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="117"/>
        <source>Remove initial/final waiting time?</source>
        <translation>Retrancher temps d&apos;attente initial/final?</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="125"/>
        <source>Time based links only?</source>
        <translation>Tronçons à horaires seulement?</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="135"/>
        <source>OD indicator file</source>
        <translation>Fichier indicateurs des liens</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="262"/>
        <source>indicators by OD</source>
        <translation>indicateurs par OD</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="269"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="274"/>
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
        <translation type="obsolete">        Calcul des indicateurs aggrégés par OD. Cette analyse est utile lorsque l&apos;on souhaite étduier la variation des temps de parcours durant une période de temps
		
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
    <message>
        <location filename="fichier_od.py" line="124"/>
        <source>Max wait time</source>
        <translation type="obsolete">Temps d&apos;attente maxi</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="132"/>
        <source>Max number of boardings</source>
        <translation type="obsolete">Nombre de voyages maxi</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="140"/>
        <source>Max indiviudal modes time</source>
        <translation type="obsolete">Temps en modes individuels maxi</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="274"/>
        <source>
        Produce indicators aggregated by OD. This analysis is usefull when you want to study the variation of travel times during a time period
		
        Parameters:
            OD ouput file: the Musliw origin destination output file (&lt;FILENAME&gt;_od.txt)
			variable: The name of the variable for indicator computation (temps (time) by default)
            remove initial/final boarding time: If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
			time based links only: If checked only time based links are analysed
            Max wait time: filter to select only OD with a lower total waiting time 
            Max number of boarding: filter to select only OD with a lower total number of boardings
            MAx individual modes times: filter to select only OD with a lower total individual modes travel times
            
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
        <translation type="obsolete">        Calcul des indicateurs aggrégés par OD. Cette analyse est utile lorsque l&apos;on souhaite étduier la variation des temps de parcours durant une période de temps
		
        Paramètres:
            Fichier OD: Le fichier OD résultat du calcul Musliw (&lt;NOM_FICHIER&gt;_od.txt)
			variable: Le nom de la variable sur la quelle on souhaite calculer les indicateurs (temps par défaut)
            retrancher le temps d&apos;attente initial/final: Si sélectionné, le temps d&apos;attente iitial ou final (entre le temps d&apos;arrivée ou d départ souhaité et le temps réel est retranché du temps de parcours total)
			tronçons à horaires seulement: Si sélectionné seuls les tronçons à horaires seront analysés
			temps d&apos;attente maxi: Filtre pour sélectionner les OD avec un temps d&apos;attente total inférieur
			nombre de voyages maxi: Filtre pour sélectionner les OD avec un nombre de voyages inférieur
			temps en modes individuels maxi: Filtre pour sélectionner les OD avec un temps total en modes individuel inférieur


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
    <message>
        <location filename="fichier_od.py" line="109"/>
        <source>Filter</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="285"/>
        <source>
        Produce indicators aggregated by OD. This analysis is usefull when you want to study the variation of travel times during a time period
		
        Parameters:
            OD ouput file: the Musliw origin destination output file (&lt;FILENAME&gt;_od.txt)
			variable: The name of the variable for indicator computation (temps (time) by default)
            remove initial/final boarding time: If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
			time based links only: If checked only time based links are analysed
            filter: filter expression to select a subset of OD. Available variables are:
                &apos;jour&apos;,&apos;heureo&apos;,&apos;heured&apos;,&apos;temps&apos;,&apos;tveh&apos;,&apos;tmap&apos;,&apos;tatt&apos;,&apos;tcorr&apos;,&apos;ncorr&apos;,&apos;tatt1&apos;,&apos;cout&apos;,&apos;longueur&apos;,&apos;volau&apos;,&apos;nbpop&apos;,&apos;toll&apos; as numeric 
                and &apos;id&apos;,&apos;origin&apos;,&apos;destination&apos;,&apos;pole&apos;,&apos;texte&apos; as string
            
            OD indicator file: name of the result file (delimited text with &quot;;&quot; as separator) which contains the following attributes 
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
        <translation>       Calcul des indicateurs aggrégés par OD. Cette analyse est utile lorsque l&apos;on souhaite étduier la variation des temps de parcours durant une période de temps
		
        Paramètres:
            Fichier OD: Le fichier OD résultat du calcul Musliw (&lt;NOM_FICHIER&gt;_od.txt)
			variable: Le nom de la variable sur la quelle on souhaite calculer les indicateurs (temps par défaut)
            retrancher le temps d&apos;attente initial/final: Si sélectionné, le temps d&apos;attente iitial ou final (entre le temps d&apos;arrivée ou d départ souhaité et le temps réel est retranché du temps de parcours total)
			tronçons à horaires seulement: Si sélectionné seuls les tronçons à horaires seront analysés
			filtre: expression filtre pour effectuer une sélection des OD. Les variables disponibles sont:
                &apos;jour&apos;,&apos;heureo&apos;,&apos;heured&apos;,&apos;temps&apos;,&apos;tveh&apos;,&apos;tmap&apos;,&apos;tatt&apos;,&apos;tcorr&apos;,&apos;ncorr&apos;,&apos;tatt1&apos;,&apos;cout&apos;,&apos;longueur&apos;,&apos;volau&apos;,&apos;nbpop&apos;,&apos;toll&apos; as numeric 
                and &apos;id&apos;,&apos;origin&apos;,&apos;destination&apos;,&apos;pole&apos;,&apos;texte&apos; as string


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
        <location filename="fichier_temps.py" line="84"/>
        <source>Link times output file</source>
        <translation>Fichier temps Musliw (txt)</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="96"/>
        <source>Variable</source>
        <translation>Variable</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="112"/>
        <source>Remove initial/final waiting time?</source>
        <translation>Retrancher le temps d&apos;attente initial/final?</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="120"/>
        <source>Time based links only?</source>
        <translation>Tronçons horaires uniquement?</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="128"/>
        <source>Link indicators file</source>
        <translation>Fichier résultat des indicateurs par tronçons</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="192"/>
        <source>ignored element</source>
        <translation type="obsolete">élément ignoré</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="255"/>
        <source>indicators by link</source>
        <translation>indicateurs par tronçon</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="262"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="245"/>
        <source>
        Produce indicators aggregated by link. This analysis is usefull when you want to study the variation of travel times during a time period
		
        Parameters:
            link times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_temps.txt)
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
        <translation type="obsolete">
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
    <message>
        <location filename="fichier_temps.py" line="104"/>
        <source>Filter</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="278"/>
        <source>
        Produce indicators aggregated by link. This analysis is usefull when you want to study the variation of travel times during a time period
		
        Parameters:
            link times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_temps.txt)
			variable: The name of the variable for indicator computation (temps (time) by default)
            filter: expression to filter nodes times outfile (ex: ncorr&lt;3 )
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
        <translation>       Produit des indicateurs aggrégés par tronçon. Cette anlyse est utile lorsque l&apos;on souhaite étudier la variabilité des temps de parcours durant une période de temps
		
        Paramètres:
            Fichier temps Musliw: Le fichier temps Musliw (&lt;FICHIER&gt;_temps.txt)
			variable: Le nom de la variable pour le calcul des indicateurs  (temps par défaut)

            retrancher le temps d&apos;attente initial/final: Si sélectionné, le temps d&apos;attente initial ou final (entre le temps d&apos;arrivée ou de départ souhaité et le réel est soustrait au temps de parcouts total)
			tronçons à horaires seulement: Si sélectionné seuls les tronçons à horaires seront analysés
           Fichier résultat des indicateurs par tronçon: nom du fichier réusltat ( texte délimité avec &quot;;&quot; comme séparateur) qui contient les attributs suivants
            Filtre:  expression pour filtrer le fichier temps Musliw (ex: ncorr&lt;3) 
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
    <name>FichierTempsJour</name>
    <message>
        <location filename="fichier_temps_jour.py" line="84"/>
        <source>Link times output file</source>
        <translation>Fichier temps Musliw (txt)</translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="96"/>
        <source>Variable</source>
        <translation>Variable</translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="111"/>
        <source>Remove initial/final waiting time?</source>
        <translation>Retrancher le temps d&apos;attente initial/final?</translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="119"/>
        <source>Time based links only?</source>
        <translation>Tronçons horaires uniquement?</translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="127"/>
        <source>Link indicators file</source>
        <translation>Fichier résultat des indicateurs par tronçons</translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="255"/>
        <source>indicators by link and day</source>
        <translation>indicateurs par tronçon et jour</translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="262"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="246"/>
        <source>
        Produce indicators aggregated by link and day. This analysis is usefull when you want to study the variation of travel times during a time period
		
        Parameters:
            link times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_temps.txt)
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
        <translation type="obsolete">       Produit des indicateurs aggrégés par tronçon et jour. Cette anlyse est utile lorsque l&apos;on souhaite étudier la variabilité des temps de parcours durant une période de temps
		
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
    <message>
        <location filename="fichier_temps_jour.py" line="104"/>
        <source>Filter</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="278"/>
        <source>
        Produce indicators aggregated by link and day. This analysis is usefull when you want to study the variation of travel times during a time period
		
        Parameters:
            link times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_temps.txt)
			variable: The name of the variable for indicator computation (temps (time) by default)
            filter: expression to filter nodes times outfile (ex: ncorr&lt;3 )
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
        <translation>       Produit des indicateurs aggrégés par tronçon et jour. Cette anlyse est utile lorsque l&apos;on souhaite étudier la variabilité des temps de parcours durant une période de temps
		
        Paramètres:
            Fichier temps Musliw: Le fichier temps Musliw (&lt;FICHIER&gt;_temps.txt)
			variable: Le nom de la variable pour le calcul des indicateurs  (temps par défaut)

            retrancher le temps d&apos;attente initial/final: Si sélectionné, le temps d&apos;attente initial ou final (entre le temps d&apos;arrivée ou de départ souhaité et le réel est soustrait au temps de parcouts total)
			tronçons à horaires seulement: Si sélectionné seuls les tronçons à horaires seront analysés
           Fichier résultat des indicateurs par tronçon: nom du fichier réusltat ( texte délimité avec &quot;;&quot; comme séparateur) qui contient les attributs suivants
            Filtre:  expression pour filtrer le fichier temps Musliw (ex: ncorr&lt;3) 
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
    <name>FichierTempsMulti</name>
    <message>
        <location filename="fichier_temps_multi.py" line="84"/>
        <source>Link times output file</source>
        <translation>Fichier temps Musliw (txt)</translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="98"/>
        <source>Filter</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="106"/>
        <source>Remove initial/final waiting time?</source>
        <translation>Retrancher le temps d&apos;attente initial/final?</translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="114"/>
        <source>Time based links only?</source>
        <translation>Tronçons à horaires uniquement?</translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="122"/>
        <source>Link indicators file</source>
        <translation>Fichier résultat des indicateurs par tronçons</translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="253"/>
        <source>indicators by link multiple points</source>
        <translation>Indicateurs par tronçons carte multi-points</translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="260"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="276"/>
        <source>
        Produce indicators aggregated by link. This analysis is usefull when you want to study the variation of travel times during a time period
		
        Parameters:
            link times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_temps.txt)
			variable: The name of the variable for indicator computation (temps (time) by default)
            filter: expression to filter nodes times outfile (ex: ncorr&lt;3 )
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
        <translation>       Produit des indicateurs aggrégés par tronçon. Cette anlyse est utile lorsque l&apos;on souhaite étudier la variabilité des temps de parcours durant une période de temps
		
        Paramètres:
            Fichier temps Musliw: Le fichier temps Musliw (&lt;FICHIER&gt;_temps.txt)
            retrancher le temps d&apos;attente initial/final: Si sélectionné, le temps d&apos;attente initial ou final (entre le temps d&apos;arrivée ou de départ souhaité et le réel est soustrait au temps de parcouts total)
			tronçons à horaires seulement: Si sélectionné seuls les tronçons à horaires seront analysés
           Fichier résultat des indicateurs par tronçon: nom du fichier réusltat ( texte délimité avec &quot;;&quot; comme séparateur) qui contient les attributs suivants
            Filtre:  expression pour filtrer le fichier temps Musliw (ex: ncorr&lt;3) 
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
        <location filename="creer_graphe.py" line="238"/>
        <source>Generating nodes</source>
        <translation>Génération des noeuds</translation>
    </message>
</context>
<context>
    <name>GravityIndicators</name>
    <message>
        <location filename="gravityindicator.py" line="37"/>
        <source>Musliw Output Nodes File</source>
        <translation>Fichier noeuds Musliw (txt)</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="38"/>
        <source>Amenity</source>
        <translation>Aménité</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="40"/>
        <source>Socioeconomic data</source>
        <translation>Données socioéconomiques (Qgis)</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="41"/>
        <source>Zone Id</source>
        <translation>Zone ID</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="42"/>
        <source>Population</source>
        <translation>Population</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="43"/>
        <source>Number of time periods</source>
        <translation>Nombre de périodes</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="44"/>
        <source>Output</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="248"/>
        <source>Gravity Indicators</source>
        <translation>Indicateurs gravitaires</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="251"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="260"/>
        <source>
        The algorithm performs a gravity indicator of accessibility based on a decay function 
        (1 for travel time=0, 0.5 for travel time = t0, 0 for infinite travel time
        - Musliw Output node file: The name of the Musliw output node file &quot;..._noeuds.txt&quot; (This output need to be activated in Musliw paramaters)
        - Amenity: Attraction field ( as Number of job, numbers of doctors, numbers of school spaces)
        - T0: The value of T0 for which the decay function weighting is 0.5
        - Socioeconomic data: Name of the table which contains emission field (e.g zones or grid cells with population for example)
        - Zone ID: zone Id
        - Population: Emission field as bumber of inhabitants (for example)
        - Number of time period: Number of time periods for calculations (for a same origin destination)
        - Output: generic output file name (txt)
        
        The algorithm produces 2 result files
        - ..._equip.txt (gravity indicator by amenity), catchment area
        - ..._zones.txt (gravity indicator by zone), accessibility area
        
        </source>
        <translation>L&apos;algorithme effectue un calcul d&apos;accessibilité gravitaire basé sur une fonction de résistance induisant un epondération:
( 1 pour un temps de parcours de 0, 0.5 pour un temps de parcours de T minutes et ,0 pour un temps de parcours infini)
- Fichier Noeuds Musliw: chemin du fichier noleuds _noeuds.txt au format Musliw (la sortie doit être activée au prélable dans les paramètres)
- Aménité: Champ aménité (en général volau)
- T0: La valeur de T0 pour lequel la pondération de la fonction de résistance vaut 0.5
- Données socioéconomiques: Table qui contient les données d&apos;émission (zones ou grille qui contient les populations par exemple)Zone 
- Zone ID: Identifiant de zone
- Population: Champ de population (nb d&apos;habitants par exemple)
- Nombre de périodes: Nombre de période de calcul pour une même OD
-Sortie: nom générique du fichier de sortie (txt)

L&apos;algorithme produit deux fichiers de résultats:
- ..._equip.txt: (indicateur gravitaire par équiepement, zone de chalandise
- ..._zones.txt (indicateur gravitaire par zone), zone d&apos;accessibilité</translation>
    </message>
</context>
<context>
    <name>ImportGTFS</name>
    <message>
        <location filename="import_gtfs.py" line="94"/>
        <source>GTFS Folder</source>
        <translation>Répertoire GTFS</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="101"/>
        <source>Calendar start</source>
        <translation>Début calendrier</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="109"/>
        <source>Calendar end</source>
        <translation>Fin calendrier</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="116"/>
        <source>Start time</source>
        <translation>Heure début</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="123"/>
        <source>End time</source>
        <translation>Heurefin</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="131"/>
        <source>Table names</source>
        <translation>Nom des tables</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="138"/>
        <source>CRS</source>
        <translation>CRS</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="146"/>
        <source>Ouput folder</source>
        <translation>Répertoire destination</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="152"/>
        <source>Encoding</source>
        <translation>Encodage</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="194"/>
        <source>ident</source>
        <translation type="obsolete">ident</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="195"/>
        <source>name</source>
        <translation type="obsolete">nom</translation>
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
        <translation type="obsolete">nom_ligne</translation>
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
        <location filename="import_gtfs.py" line="284"/>
        <source>Reading calendars...</source>
        <translation>Lecture des calendars...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="314"/>
        <source>reading calendar dates...</source>
        <translation>Lectures des calendar_dates...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="341"/>
        <source>Reading routes...</source>
        <translation>Lectures des routes...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="366"/>
        <source>Reading trips...</source>
        <translation>Lecture des trips...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="390"/>
        <source>Reading stop times...</source>
        <translation>Lecture des stop_times...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="506"/>
        <source>Generating arcs and lines...</source>
        <translation>Génération des arcs et lignes...</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="620"/>
        <source>
        Scan a GTFS folder and generates the layer of stops, and the layer of simplified arcs and lines
		Computes the transport offer for the specified time period  and calendar (number of stops)
        
        Parameters:
            GTFS_folder&#xa0;: GTFS folder path
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
        <location filename="import_gtfs.py" line="600"/>
        <source>GTFS import</source>
        <translation>Import GTFS</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="607"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="206"/>
        <source>line_num</source>
        <translation type="obsolete">Identifiant de ligne</translation>
    </message>
</context>
<context>
    <name>ImportGTFSv2</name>
    <message>
        <location filename="gtfs_mint.py" line="149"/>
        <source>GTFS folder</source>
        <translation>Répertoire GTFS</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="156"/>
        <source>Calendar start</source>
        <translation>Début calendrier</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="163"/>
        <source>Calendar end</source>
        <translation>Fin calendrier</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="184"/>
        <source>output crs</source>
        <translation>Projection</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="204"/>
        <source>Mint network layer</source>
        <translation>Couche réseau Mint (qgis)</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="786"/>
        <source>Reading stops</source>
        <translation>Lecture des stops</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="788"/>
        <source>Reading routes</source>
        <translation>Lecture des routes</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="790"/>
        <source>Reading trips</source>
        <translation>Lecture des trips</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="792"/>
        <source>Reading calendars_dates</source>
        <translation>Lecture des calendar_dates</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="794"/>
        <source>Reading calendars</source>
        <translation>Lecture des calendars</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="796"/>
        <source>Reading stop_times</source>
        <translation>Lecture des stop_times</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="798"/>
        <source>Generating lines</source>
        <translation>Génération des lignes</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="800"/>
        <source>Generation Musliw file</source>
        <translation>Génération du fichier Musliw</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="821"/>
        <source>Import_GTFS_v2</source>
        <translation>Import_GTFS_v2</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="828"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="752"/>
        <source>
        Generates a Musliw timetable network from GTFS data (using prepare_GTFS script before is recommended)
		        
        Parameters:
            GTFs folder&#xa0;: GTFS folder 
			calendar start: date of the first day of the period
            caldendar_end: dat of the last day of the periode
            musliw_timetable_network: name of the generated Musliw network file
        </source>
        <translation type="obsolete">
        Génère un réseau Musliw à horaires à partir de données GTFS (utiliser le script prepare_GTFS au préalable est recommandé)
		        
        Paramètres:
            Répertoire GTFS : Répertoire GTFS 
			Début calendriert:date du premier jour du calendrier
            Fin calendrier: date du denier jour du calendrier
            Réseau Musliw à horaires: Nom du réseau Musliw à horaires (txt)</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="845"/>
        <source>
        Scan a GTFS folder and generates the layer of stops, and the layer of simplified arcs and lines
		Computes the transport offer for the specified time period  and calendar (number of stops)
        
        Parameters:
            GTFS_folder&#xa0;: GTFS folder path
			calendar start: calendar date of the first day of the period (dd/mm/YYYY)
			calendar_end: calendar date of the last day of the period (dd/mm/YYYY)
			start_time: start time of the period (hh:mm:ss)
			end_time: end time of the period (hh:mm:ss)
			CRS: generated tables CRS
			Mint network layer: name of the lines layer. Stops and links layers name and will be identical but with _stops and _links at the end
        </source>
        <translation>        Scanne un dossier GTFS et générer la couche des arrêts, et la couche des arcs et lignes simplifiés
		Calcule l&apos;offre de transport pour la période et le calendrier spécifiés (nombre d&apos;arrêts)
        
        Paramètres :
            GTFS_folder : Chemin du dossier GTFS
			calendar start : date du premier jour de la période (dd/mm/YYYY)
			calendar_end : date du dernier jour de la période (jj/mm/aaaa)
			start_time : heure de début de la période (hh:mm:ss)
			end_time : heure de fin de la période (hh:mm:ss)
			CRS : tables générées CRS
			Mint network layer : nom de la couche de lignes. Les noms des couches arrêts et liens seront identiques mais avec _stops et _links à la fin.</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="170"/>
        <source>Time period start</source>
        <translation>heure de début</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="177"/>
        <source>Time period end</source>
        <translation>Heure de fin</translation>
    </message>
    <message>
        <location filename="gtfs_mint.py" line="192"/>
        <source>Encoding</source>
        <translation>Encodage</translation>
    </message>
</context>
<context>
    <name>Intensite_nodale</name>
    <message>
        <location filename="nodal_intensity.py" line="37"/>
        <source>PT stops</source>
        <translation>Arrêts TC (Qgis)</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="38"/>
        <source>nodal points</source>
        <translation>pôles nodaux (Qgis)</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="39"/>
        <source>node id</source>
        <translation>Id de noeud</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="40"/>
        <source>node name</source>
        <translation>nom de noeud</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="41"/>
        <source>Musliw network file</source>
        <translation>Fichier réseau Musliw (txt)</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="42"/>
        <source>radius(m)</source>
        <translation>rayon(m)</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="43"/>
        <source>day</source>
        <translation>jour</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="44"/>
        <source>min transfer time(min)</source>
        <translation>temps de correspondance mini</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="45"/>
        <source>max transfer time(min)</source>
        <translation>temps de correspondance maxi</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="46"/>
        <source>start time</source>
        <translation>début période</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="47"/>
        <source>end time</source>
        <translation>fin période</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="48"/>
        <source>prohibited u-turns</source>
        <translation>demi-tours interdits</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="50"/>
        <source>walk speed(km/h)</source>
        <translation>vitesse de marche(km/h)</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="51"/>
        <source>output layer</source>
        <translation>Table résultat</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="329"/>
        <source>nodal intensity</source>
        <translation>Intensité nodale</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="332"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="311"/>
        <source>
        This scripts generate indicators in order to evaluate the potential of intermodality
        these indicators are:
        - Nodal potential all modes
        - Nodal potential train
        - Nodal intensity all modes
        - Nodal intensity train 
        - Nodal potential rail scheduling all modes
        - Nodal potential rail scheduling train
        - Nodal intensity rail scheduling all modes
        - Nodal intensity rail scheduling train
        Parameters:
            PT stops: a layer that contains all stops to be taken into account
            nodal points: a layer of intermodality points to compute nodal potential and intensity
            node id: nodal point id
            node name: nodal point name
            Musliw network file: Musliw multimodal network file (txt) which contains timetables to analyze
            radius: the radius in meters that define which stops are talken into account (those inside the radius))
            day: day of Musliw file calendar
            min transfer time: the delay minimum to be at the stop to be able to board into the PT vehicule
            max transfer time: the maximum delay of transfer
            start time: beginning of the period of sudy
            end time: end of the period of study
            prohibited uturn: if checke uturn won&apos;t be taken into account
            out put layer: name of the result layer
</source>
        <translation type="obsolete">
        Le script généère des indicateurs destinés à évaluer le potentiel nodal d&apos;intermodalité
        Ces indicateurs sont:
        - Potentiel nodal tous modes
        - Potentiel nodal train
        - Intensité nodale tous modes
        - Intensité nodale train
        - Potentiel nodal cadencement tous modes
        - Potentiel nodal cadencement train
        - Intensité nodale cadencement tous modes
        - Intensité nodale cadencement traon
        Paramètres:
            Arrêts TC: Couche contenant les arrêts TC à prendre en compte
            Points nodaux: Couche des pôles d&apos;intermodalité pour lesquels seront calculés les indicateurs de potentiel et intensité nodale
            id noeud: identifiant de noeud
            nom de noeud: libellé du noeud
            fichier réseau Musliw: Nom du fichier réseau Musliw (txt) qui contient les horaires permettant le calcul des indicateurs
            rayon: Le rayon en mètres qui définit les arrêts à prendre en compte (ceux à l&apos;intérieur du réayon)
            jour: jour du calendrier du fichier Musliw
            temps de correspondance mini: le temps minimum à attendre à l&apos;arrêt pour pouvoir monter à bord du véhicule
            temps de correspondance mini: le temps de correspondance maxi
            début période: début de la plage horaire à étudier
            fin période: fin de la plage horaire à étudier
            demi-tours interdits: si sélectionné les demi-tours seront interdits
            couche résultat: nom de la couche où seront produits les résultats</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="49"/>
        <source>type of analysis by:</source>
        <translation>type d&apos;analyse par:</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="49"/>
        <source>commercial line name</source>
        <translation>nom de ligne commercial</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="49"/>
        <source>PT mission</source>
        <translation>mission TC</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="313"/>
        <source>
        This scripts generate indicators in order to evaluate the potential of intermodality
        these indicators are:
        - Nodal potential all modes
        - Nodal potential train
        - Nodal intensity all modes
        - Nodal intensity train 
        - Nodal potential rail scheduling all modes
        - Nodal potential rail scheduling train
        - Nodal intensity rail scheduling all modes
        - Nodal intensity rail scheduling train
        Parameters:
            PT stops: a layer that contains all stops to be taken into account
            nodal points: a layer of intermodality points to compute nodal potential and intensity
            node id: nodal point id
            node name: nodal point name
            Musliw network file: Musliw multimodal network file (txt) which contains timetables to analyze
            radius: the radius in meters that define which stops are talken into account (those inside the radius))
            day: day of Musliw file calendar
            min transfer time: the delay minimum to be at the stop to be able to board into the PT vehicule
            max transfer time: the maximum delay of transfer
            start time: beginning of the period of sudy
            end time: end of the period of study
            prohibited uturn: if checke uturn won&apos;t be taken into account
            output layer: name of the result layer
        The script generates a detailed txt file named &lt;out_put layer&gt;_mat.txt to be able to analyze in detail transfers and intermodality
</source>
        <translation type="obsolete">
        Le script généère des indicateurs destinés à évaluer le potentiel nodal d&apos;intermodalité
        Ces indicateurs sont:
        - Potentiel nodal tous modes
        - Potentiel nodal train
        - Intensité nodale tous modes
        - Intensité nodale train
        - Potentiel nodal cadencement tous modes
        - Potentiel nodal cadencement train
        - Intensité nodale cadencement tous modes
        - Intensité nodale cadencement traon
        Paramètres:
            Arrêts TC: Couche contenant les arrêts TC à prendre en compte
            Points nodaux: Couche des pôles d&apos;intermodalité pour lesquels seront calculés les indicateurs de potentiel et intensité nodale
            id noeud: identifiant de noeud
            nom de noeud: libellé du noeud
            fichier réseau Musliw: Nom du fichier réseau Musliw (txt) qui contient les horaires permettant le calcul des indicateurs
            rayon: Le rayon en mètres qui définit les arrêts à prendre en compte (ceux à l&apos;intérieur du réayon)
            jour: jour du calendrier du fichier Musliw
            temps de correspondance mini: le temps minimum à attendre à l&apos;arrêt pour pouvoir monter à bord du véhicule
            temps de correspondance mini: le temps de correspondance maxi
            début période: début de la plage horaire à étudier
            fin période: fin de la plage horaire à étudier
            demi-tours interdits: si sélectionné les demi-tours seront interdits
            couche résultat: nom de la couche où seront produits les résultats

Le script génère également un fichier détaillée &lt;couche_résultat&gt;_mat.TXT pour analyser  les correspondances et l&apos;intermodalité</translation>
    </message>
    <message>
        <location filename="nodal_intensity.py" line="341"/>
        <source>
        This scripts generate indicators in order to evaluate the potential of intermodality
        these indicators are:
        - Nodal potential all modes
        - Nodal potential train
        - Nodal intensity all modes
        - Nodal intensity train 
        - Nodal potential rail scheduling all modes
        - Nodal potential rail scheduling train
        - Nodal intensity rail scheduling all modes
        - Nodal intensity rail scheduling train
        Parameters:
            PT stops: a layer that contains all stops to be taken into account
            nodal points: a layer of intermodality points to compute nodal potential and intensity
            node id: nodal point id
            node name: nodal point name
            Musliw network file: Musliw multimodal network file (txt) which contains timetables to analyze
            radius: the radius in meters that define which stops are talken into account (those inside the radius))
            day: day of Musliw file calendar
            min transfer time: the delay minimum to be at the stop to be able to board into the PT vehicule
            max transfer time: the maximum delay of transfer
            start time: beginning of the period of sudy
            end time: end of the period of study
            prohibited uturn: if checke uturn won&apos;t be taken into account
            output layer: name of the result layer
        The script generates two detailed txt files named &lt;out_put layer&gt;origin_mat.txt and &lt;out_put layer&gt;destination_mat.txt to be able to analyze in detail transfers and intermodality either you want to analyse transfers from the incoming or outgoing modes
</source>
        <translation>
        Le script généère des indicateurs destinés à évaluer le potentiel nodal d&apos;intermodalité
        Ces indicateurs sont:
        - Potentiel nodal tous modes
        - Potentiel nodal train
        - Intensité nodale tous modes
        - Intensité nodale train
        - Potentiel nodal cadencement tous modes
        - Potentiel nodal cadencement train
        - Intensité nodale cadencement tous modes
        - Intensité nodale cadencement train
        Paramètres:
            Arrêts TC: Couche contenant les arrêts TC à prendre en compte
            Points nodaux: Couche des pôles d&apos;intermodalité pour lesquels seront calculés les indicateurs de potentiel et intensité nodale
            id noeud: identifiant de noeud
            nom de noeud: libellé du noeud
            fichier réseau Musliw: Nom du fichier réseau Musliw (txt) qui contient les horaires permettant le calcul des indicateurs
            rayon: Le rayon en mètres qui définit les arrêts à prendre en compte (ceux à l&apos;intérieur du réayon)
            jour: jour du calendrier du fichier Musliw
            temps de correspondance mini: le temps minimum à attendre à l&apos;arrêt pour pouvoir monter à bord du véhicule
            temps de correspondance mini: le temps de correspondance maxi
            début période: début de la plage horaire à étudier
            fin période: fin de la plage horaire à étudier
            demi-tours interdits: si sélectionné les demi-tours seront interdits
            couche résultat: nom de la couche où seront produits les résultats

Le script génère également deux fichier détaillés &lt;couche_résultat&gt;_origin_mat.txt et &lt;couche_résultat&gt;_destination_mat.txt pour analyser  les correspondances et l&apos;intermodalité soit du point de vue du mode entrant soit du mode sortant</translation>
    </message>
</context>
<context>
    <name>Interpole</name>
    <message>
        <location filename="interpole.py" line="105"/>
        <source>Network</source>
        <translation>Arcs (Qgis)</translation>
    </message>
    <message>
        <location filename="interpole.py" line="112"/>
        <source>Window</source>
        <translation>Fenêtre</translation>
    </message>
    <message>
        <location filename="interpole.py" line="120"/>
        <source>i-cost</source>
        <translation>Temps i</translation>
    </message>
    <message>
        <location filename="interpole.py" line="128"/>
        <source>j-cost</source>
        <translation>Temps j</translation>
    </message>
    <message>
        <location filename="interpole.py" line="137"/>
        <source>Direction</source>
        <translation>Sens</translation>
    </message>
    <message>
        <location filename="interpole.py" line="146"/>
        <source>Spread</source>
        <translation>Diffusion</translation>
    </message>
    <message>
        <location filename="interpole.py" line="155"/>
        <source>Impassibility</source>
        <translation>Impasse</translation>
    </message>
    <message>
        <location filename="interpole.py" line="163"/>
        <source>Pixels nb x</source>
        <translation>Nb pixels x</translation>
    </message>
    <message>
        <location filename="interpole.py" line="171"/>
        <source>Pixels nb y</source>
        <translation>Nb pixels y</translation>
    </message>
    <message>
        <location filename="interpole.py" line="179"/>
        <source>Pixel size x</source>
        <translation>Taille pixel x</translation>
    </message>
    <message>
        <location filename="interpole.py" line="187"/>
        <source>Pixel size y</source>
        <translation>Taille pixel y</translation>
    </message>
    <message>
        <location filename="interpole.py" line="195"/>
        <source>Decimals</source>
        <translation>Décimales</translation>
    </message>
    <message>
        <location filename="interpole.py" line="203"/>
        <source>Radius(m)</source>
        <translation>Rayon(m)</translation>
    </message>
    <message>
        <location filename="interpole.py" line="211"/>
        <source>Spread speed</source>
        <translation>Vitesse de diffusion</translation>
    </message>
    <message>
        <location filename="interpole.py" line="219"/>
        <source>Impassable?</source>
        <translation>Intraversables?</translation>
    </message>
    <message>
        <location filename="interpole.py" line="235"/>
        <source>Raster file</source>
        <translation>Fichier Raster</translation>
    </message>
    <message>
        <location filename="interpole.py" line="534"/>
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
            Individual values: (Optional) field for individual values polygons (ex: stations access area)
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
            valeurs individuelles : (optionnel) champ pour générer des polygones à base de valeurs individuelles (ex: aires d&apos;influence des gares)
            fichier Raster : fichier Raster généré
            </translation>
    </message>
    <message>
        <location filename="interpole.py" line="511"/>
        <source>Linear interpolation</source>
        <translation>Interpolation linéaire</translation>
    </message>
    <message>
        <location filename="interpole.py" line="518"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="interpole.py" line="226"/>
        <source>Individual values</source>
        <translation>Valeurs individuelles</translation>
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
            network&#xa0;: network layer (linear objects)
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
    <message>
        <location filename="inverser.py" line="82"/>
        <source>Network(Qgis)</source>
        <translation>Arcs(Qgis)</translation>
    </message>
</context>
<context>
    <name>InverserSelection</name>
    <message>
        <location filename="inverser_selection.py" line="145"/>
        <source>Network</source>
        <translation>Reseau</translation>
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
            network&#xa0;: network layer (linear objects) where the selected objects belong
			
        </source>
        <translation>        Inverse la géométrie des objets de la sélection:
        Le script modifie la géométrie d&apos;une sélection d&apos;objets linéiares
       Il ne crée pas une nouvelle table résultat (utiliser les scripts &quot;Inverser arcs&quot; pour cela)
        
        
        Paramètres:
            réseau : couche réseau (objets linéaires) à laquelle la sélection appartient
			
        </translation>
    </message>
    <message>
        <location filename="inverser_selection.py" line="78"/>
        <source>Network(Qgis)</source>
        <translation>Arcs(Qgis)</translation>
    </message>
</context>
<context>
    <name>IsolatedNodes</name>
    <message>
        <location filename="noeuds_isoles.py" line="82"/>
        <source>Nodes</source>
        <translation>Noeuds (Qgis)</translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="89"/>
        <source>Node Id</source>
        <translation>Id noeud</translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="98"/>
        <source>Musliw network</source>
        <translation>Réseau Musliw (txt)</translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="114"/>
        <source>Connected nodes</source>
        <translation>Noeuds connectés</translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="217"/>
        <source>Isolated nodes</source>
        <translation>Noeuds isolés</translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="224"/>
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
        <location filename="noeuds_isoles.py" line="240"/>
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
    <name>MajLinksPole</name>
    <message>
        <location filename="maj_links_pole.py" line="284"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="97"/>
        <source>Travel times file</source>
        <translation>Fichier temps de parcours (txt)</translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="103"/>
        <source>Extent</source>
        <translation>Fenêtre</translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="110"/>
        <source>Departure/arrival</source>
        <translation>Départ/arrivée</translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="110"/>
        <source>Departure</source>
        <translation>Départ</translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="110"/>
        <source>Arrival</source>
        <translation>Arrivée</translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="119"/>
        <source>Intermodality node</source>
        <translation>Noeud d&apos;intermodalité</translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="128"/>
        <source>Origin node</source>
        <translation>Noeud origine</translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="179"/>
        <source>updating pole</source>
        <translation>mise à jour du pôle</translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="226"/>
        <source>updating pole...</source>
        <translation>mise à jour du pôle...</translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="277"/>
        <source>Update links pole</source>
        <translation>Mise à jour du pôle des arcs</translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="300"/>
        <source>
        Read the travel times file &quot;.._temps.txt&quot; computed by Musliw and creates (if they don&apos;t exist) in the network layer fields where intermodaly node and service area node are saved
		        
        Parameters:
            network&#xa0;: network layer (linear objects)
			travel times file: travel times text file ..._temps.txt generated by Musliw
            extent: window for fields update (only links in the window will be updates)
            intermodality node; initial/ final node of intermodality (depends on arrival/departure choice)
            origin node: origin or destination node (depends on arrival/departure choice) in order to determine service areas
        </source>
        <translation>      Lit le fichier temps détaillés &quot;.._temps.txt&quot; généré par Musliw et crée (s&apos;ils n&apos;existent pas) dans le réseau les champs noeud d&apos;intermodalité et noeud origine ou seront sauvegardés les informations
		        
        Paramètres:
            Réseau : Couche réseau (objets liénaires)
			Fichier temps détaillés : fichier temps de parcours  ..._temps.txt généré par Musliw
            fenêtre: Fenêtre pour la mise à jours des arcs (seuls les arcs à l&apos;intérieur de la fenêtre seront mis à jour)
            noeud d&apos;intermodalité: noeud  initial/ final d&apos;intermodalité (dépend du choix arrivée/départ)
            noeud origine: noeud d&apos;origine ou de destination node (dépend du choix arrivée/départ)pour déterminer les zones de desserte
        </translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="90"/>
        <source>Network(Qgis)</source>
        <translation>Arcs(Qgis)</translation>
    </message>
</context>
<context>
    <name>MajLinksTimes</name>
    <message>
        <location filename="maj_links_times.py" line="292"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="98"/>
        <source>Travel times file</source>
        <translation>Fichier temps de parcours (txt)</translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="111"/>
        <source>Departure/arrival</source>
        <translation type="obsolete">Départ/arrivée</translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="111"/>
        <source>Departure</source>
        <translation type="obsolete">Départ</translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="111"/>
        <source>Arrival</source>
        <translation type="obsolete">Arrivée</translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="112"/>
        <source>i-node time</source>
        <translation>temps en i</translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="121"/>
        <source>j-node time</source>
        <translation>temps en j</translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="130"/>
        <source>Initial/final waiting time?</source>
        <translation>temps d&apos;attente initial/final?</translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="182"/>
        <source>updating ti tj</source>
        <translation>Mise à jour ti et tj</translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="230"/>
        <source>updating ti and tj...</source>
        <translation>Mise à jour ti et tj...</translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="285"/>
        <source>Update links times</source>
        <translation>Mise à jour des temps des arcs</translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="301"/>
        <source>
        Read the travel times file &quot;.._temps.txt&quot; computed by Musliw and creates (if they don&apos;t exist) in the network layer fields where i-node and j-node travel times are saved
		        
        Parameters:
            layer&#xa0;: network layer (linear objects)
			travel times file: travel times text file ..._temps.txt generated by Musliw
            fenêtre: fenêtre déterminants les arcs à mettre à jour (seuls ceux à l&apos;intérieur seront mis à jour)
            departure/arrival: departure if &quot;d&quot; in Musliw matrix, arrival if &quot;a&quot;
            i_node time: travel time at i-node field
            j-node time; travel time at j-node field
            initial/final waiting time: in order to take into account or not inital/final waiting time (tatt1)
        </source>
        <translation type="obsolete">        Lit le fichier temps &quot;.._temps.txt&quot; calculé par Musliw et génère(s&apos;ils n&apos;existent pas ) dans le réseau les champs ti et tjoù sont stockés les temps aux noeud i et j
		        
        Paramètres:
           coucher : couche réseau (objets linéaires)
			fichier temps Musliw: fichier temps ..._temps.txt généré par Musliw
            départ/arrivéel: départ si &quot;d&quot; dans la matrice Musliw, arrivée si &quot;a&quot;
            temps en i: colonne temps de parcours en i
            temps en j: colonne temps de parcours en j
            temps d&apos;attente initial/final :Prise en compte ou non du temps d&apos;attnete inital/final (tatt1)
        </translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="104"/>
        <source>Extent</source>
        <translation>Fenêtre</translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="308"/>
        <source>
        Read the travel times file &quot;.._temps.txt&quot; computed by Musliw and creates (if they don&apos;t exist) in the network layer fields where i-node and j-node travel times are saved
		        
        Parameters:
            layer&#xa0;: network layer (linear objects)
			travel times file: travel times text file ..._temps.txt generated by Musliw
            extent: window to select the subset of links (only those inside the window will be updated)
            departure/arrival: departure if &quot;d&quot; in Musliw matrix, arrival if &quot;a&quot;
            i_node time: travel time at i-node field
            j-node time; travel time at j-node field
            initial/final waiting time: in order to take into account or not inital/final waiting time (tatt1)
        </source>
        <translation>        Lit le fichier temps &quot;.._temps.txt&quot; calculé par Musliw et génère(s&apos;ils n&apos;existent pas ) dans le réseau les champs ti et tjoù sont stockés les temps aux noeud i et j
		        
        Paramètres:
           coucher : couche réseau (objets linéaires)
			fichier temps Musliw: fichier temps ..._temps.txt généré par Musliw
            départ/arrivéel: départ si &quot;d&quot; dans la matrice Musliw, arrivée si &quot;a&quot;
            temps en i: colonne temps de parcours en i
            temps en j: colonne temps de parcours en j
            temps d&apos;attente initial/final :Prise en compte ou non du temps d&apos;attnete inital/final (tatt1)
        </translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="91"/>
        <source>Network(Qgis)</source>
        <translation>Arcs(Qgis)</translation>
    </message>
</context>
<context>
    <name>Majtitj</name>
    <message>
        <location filename="maj_titj.py" line="298"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="96"/>
        <source>Travel times file</source>
        <translation>Fichier temps de parcours (txt)</translation>
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
        <location filename="maj_titj.py" line="238"/>
        <source>updating ti and tj...</source>
        <translation>Mise à jour ti et tj...</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="314"/>
        <source>
        Read the travel times file &quot;.._temps.txt&quot; computed by Musliw and creates (if they don&apos;t exist) in the network layer fields where i-node and j-node travel times are saved
		        
        Parameters:
            layer&#xa0;: network layer (linear objects)
			travel times file: travel times text file ..._temps.txt generated by Musliw
            musliw time: Musliw travel time field where travel time is saved (&apos;temps&apos; in general)
            arc time: arc travel time
            departure/arrival: departure if &quot;d&quot; in Musliw matrix, arrival if &quot;a&quot;
            i_node time: travel time at i-node field
            j-node time; travel time at j-node field
            initial/final waiting time: in order to take into account or not inital/final waiting time (tatt1)
        </source>
        <translation>
        Lit le fichier temps &quot;.._temps.txt&quot; calculé par Musliw et génère(s&apos;ils n&apos;existent pas ) dans le réseau les champs ti et tjoù sont stockés les temps aux noeud i et j
		        
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
        <location filename="maj_titj.py" line="291"/>
        <source>Update ti tj</source>
        <translation>Mise à jour ti tj</translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="89"/>
        <source>Network(Qgis)</source>
        <translation>Arcs(Qgis)</translation>
    </message>
</context>
<context>
    <name>MatrixDoubleList</name>
    <message>
        <location filename="matrix_double_liste.py" line="90"/>
        <source>Origins</source>
        <translation>Origines</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="98"/>
        <source>Origins node ID</source>
        <translation>Id noeud origine</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="105"/>
        <source>Destinations</source>
        <translation>Destinations</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="113"/>
        <source>Destinations node ID</source>
        <translation>Id noeud destination</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="120"/>
        <source>Demand</source>
        <translation>Demande</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="128"/>
        <source>Day</source>
        <translation>Jour</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="137"/>
        <source>Start time</source>
        <translation>Heure début</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="145"/>
        <source>End time</source>
        <translation>Heure fin</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="153"/>
        <source>Step</source>
        <translation>Intervalle</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="161"/>
        <source>Departure/Arrival</source>
        <translation>Départ/Arrivée</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="161"/>
        <source>Departure</source>
        <translation>Départ</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="161"/>
        <source>Arrival</source>
        <translation>Arrivée</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="180"/>
        <source>Musliw matrix</source>
        <translation>Matrice Musliw</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="228"/>
        <source>writing Musliw matrix...</source>
        <translation>Ecriture de la matrice Musliw...</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="277"/>
        <source>Musliw matrix double list</source>
        <translation>Matrice Musliw double liste</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="284"/>
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
        <translation type="obsolete">
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
    <message>
        <location filename="matrix_double_liste.py" line="169"/>
        <source>OD label?</source>
        <translation>Texte OD</translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="300"/>
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
            OD label: If True an origin-destination ID will be written combining o and d IDs separated by a &apos;-&apos;
            Musliw matrix: Musliw matrix name (text file with &quot;;&quot; separator 
        </source>
        <translation>        Génère une matrice Musliw à partir de deux couches de points et une période horaire définie par une heure de début, une heure de fin et un intervalle en minutes.
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
            Texte Od: Si coché un identifiant d&apos;origine destination sera écrit (conbinant o et d séparés par un &apos;-&apos;)
            Matrice Musliw : Nom de fichier de la matrice Musliw (fichier texet avec separateur &apos;;&apos; </translation>
    </message>
</context>
<context>
    <name>MatrixSimpleList</name>
    <message>
        <location filename="matrix_simple_liste.py" line="89"/>
        <source>Nodes</source>
        <translation>Noeuds (Qgis)</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="97"/>
        <source>Node ID</source>
        <translation>Id noeud</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="104"/>
        <source>Demand</source>
        <translation>Demande</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="112"/>
        <source>Day</source>
        <translation>Jour</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="121"/>
        <source>Start time</source>
        <translation>Heure début</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="129"/>
        <source>End time</source>
        <translation>Heure fin</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="137"/>
        <source>Step</source>
        <translation>Intervalle</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="145"/>
        <source>Departure/Arrival</source>
        <translation>Départ/Arrivée</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="145"/>
        <source>Departure</source>
        <translation>Départ</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="145"/>
        <source>Arrival</source>
        <translation>Arrivée</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="152"/>
        <source>Diagonal maatrix?</source>
        <translation type="obsolete">Matrice diagonale?</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="172"/>
        <source>Musliw matrix</source>
        <translation>Matrice Musliw</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="223"/>
        <source>Writing Musliw matrix...</source>
        <translation>Ecriture de la matrice Musliw...</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="276"/>
        <source>Musliw matrix simple list</source>
        <translation>Matrice Musliw simple liste</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="283"/>
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
        <translation type="obsolete">        Génère une matrice Musliw à partir d&apos;une couche de points et une période horaire définie par une heure de début, une heure de fin et un intervalle en minutes.
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
    <message>
        <location filename="matrix_simple_liste.py" line="153"/>
        <source>Diagonal matrix?</source>
        <translation>Matrice diagonale?</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="161"/>
        <source>OD label?</source>
        <translation>Texte OD</translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="299"/>
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
            OD label: If True an origin-destination ID will be written combining o and d IDs separated by a &apos;-&apos;
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
            Texte Od: Si coché un identifiant d&apos;origine destination sera écrit (conbinant o et d séparés par un &apos;-&apos;)
            Matrice Musliw : Nom de fichier de la matrice Musliw (fichier texet avec separateur &apos;;&apos; )</translation>
    </message>
</context>
<context>
    <name>MatrixTable</name>
    <message>
        <location filename="matrix_table.py" line="92"/>
        <source>OD Table</source>
        <translation>Table OD (Qgis)</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="100"/>
        <source>Origin</source>
        <translation>Origine</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="107"/>
        <source>Destination</source>
        <translation>Destination</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="114"/>
        <source>Demand</source>
        <translation>Demande</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="123"/>
        <source>Day</source>
        <translation>Jour</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="132"/>
        <source>Start time</source>
        <translation>Heure début</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="140"/>
        <source>End time</source>
        <translation>Heure fin</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="148"/>
        <source>Step</source>
        <translation>Intervalle</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="156"/>
        <source>Departure/Arrival</source>
        <translation>Départ/Arrivée</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="156"/>
        <source>Departure</source>
        <translation>Départ</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="156"/>
        <source>Arrival</source>
        <translation>Arrivée</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="166"/>
        <source>OD label?</source>
        <translation>Texte OD?</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="177"/>
        <source>Musliw matrix</source>
        <translation>Matrice Musliw</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="223"/>
        <source>Writing Musliw matrix...</source>
        <translation>Ecriture de la matrice Musliw...</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="292"/>
        <source>Musliw matrix from table</source>
        <translation>Matrice à partir d&apos;une table</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="299"/>
        <source>Matrix</source>
        <translation>Matrice</translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="315"/>
        <source>
        Generates a Musliw matrix from a table layer and a period of time (from start time to end time with a step in minutes)
        
		
        Parameters:
            Nodes: nodes layer (corresponding to nodes layer or the graph )
			Origin: Field that contains the node Id of the origin
            Destination: Field that contains the node Id of the destination
            Demand: number of passengers for assignment
            Day: number of the day in the calendar (1 first day of the calendar)
            Start time: Beginning of the time period
            Step: Step time in minutes
            Departure/Arrival: Departure (from Start point to end point forward) - Arrival (from end point to start point backward)
            OD label: If True an origin-destination ID will be written combining o and d IDs separated by a &apos;-&apos;
            Musliw matrix: Musliw matrix name (text file with &quot;;&quot; separator
            
            
        </source>
        <translation>        Génère une matrice Musliw à partir d&apos;une table et une période horaire définie par une heure de début, une heure de fin et un intervalle en minutes.
		
        Paramètres:
            Noeuds : Couche des noeuds (correspond aux noeuds du graphe de cheminement)
			Origine : Champ qui contient l&apos;identifiant de noeud origine
			Destination : Champ qui contient l&apos;identifiant de noeud destination
            Demande: nombre de passagers pour l&apos;affectation
            Jour: numéro de jour du calendrier  (1 correspond au 1er jour du calendrier)
            Début période: heure de début de la période
            Fin période: heure de fin de la période
            Intervalle:Intervalle de temps en minutes
            Départ/Arrivée: Depart (du point de départ vers le point d&apos;arrivée en avant) - Arrivée (du point d&apos;arrivée au point de retard à rebours)
            Texte Od: Si coché un identifiant d&apos;origine destination sera écrit (conbinant o et d séparés par un &apos;-&apos;)
            Matrice Musliw : Nom de fichier de la matrice Musliw (fichier texet avec separateur &apos;;&apos; )
</translation>
    </message>
</context>
<context>
    <name>MatrixTableDetailed</name>
    <message>
        <location filename="matrix_table_detailed.py" line="92"/>
        <source>OD Table</source>
        <translation>Table OD (Qgis)</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="100"/>
        <source>Origin</source>
        <translation>Origine</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="107"/>
        <source>Destination</source>
        <translation>Destination</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="114"/>
        <source>Demand</source>
        <translation>Demande</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="123"/>
        <source>Day</source>
        <translation>Jour</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="132"/>
        <source>Start time</source>
        <translation>Heure début</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="140"/>
        <source>End time</source>
        <translation>Heure fin</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="148"/>
        <source>Step</source>
        <translation>Intervalle</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="156"/>
        <source>Departure/Arrival</source>
        <translation>Départ/Arrivée</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="156"/>
        <source>Departure</source>
        <translation>Départ</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="156"/>
        <source>Arrival</source>
        <translation>Arrivée</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="166"/>
        <source>OD label</source>
        <translation>Texte OD</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="179"/>
        <source>Musliw matrix</source>
        <translation>Matrice Musliw</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="225"/>
        <source>Writing Musliw matrix...</source>
        <translation>Ecriture de la matrice Musliw...</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="282"/>
        <source>Musliw matrix from table detailed</source>
        <translation>Matrice détaillée à partir d&apos;une table</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="289"/>
        <source>Matrix</source>
        <translation>Matrice</translation>
    </message>
    <message>
        <location filename="matrix_table_detailed.py" line="305"/>
        <source>
        Generates a detailed Musliw matrix from a table layer and a period of time (from start time to end time with a step in minutes)
        
		
        Parameters:
            Nodes: nodes layer (corresponding to nodes layer or the graph )
			Origin: Field that contains the node Id of the origin
            Destination: Field that contains the node Id of the destination
            Demand: number of passengers for assignment
            Day: number of the day in the calendar (1 first day of the calendar)
            Start time: Beginning of the time period
            Step: Step time in minutes
            Departure/Arrival: Departure (from Start point to end point forward) - Arrival (from end point to start point backward)
            OD label: Expression to put in the matrix file for each OD line
            Musliw matrix: Musliw matrix name (text file with &quot;;&quot; separator
            
            
        </source>
        <translation>        Génère une matrice Musliw à partir d&apos;une table et une période horaire définie par une heure de début, une heure de fin et un intervalle en minutes.
		
        Paramètres:
            Noeuds : Couche des noeuds (correspond aux noeuds du graphe de cheminement)
			Origine : Champ qui contient l&apos;identifiant de noeud origine
			Destination : Champ qui contient l&apos;identifiant de noeud destination
            Demande: nombre de passagers pour l&apos;affectation
            Jour: numéro de jour du calendrier  (1 correspond au 1er jour du calendrier)
            Début période: heure de début de la période
            Fin période: heure de fin de la période
            Intervalle:Intervalle de temps en minutes
            Départ/Arrivée: Depart (du point de départ vers le point d&apos;arrivée en avant) - Arrivée (du point d&apos;arrivée au point de retard à rebours)
            Texte Od: Expression exportée dans le fichier texte matrice pour chaque ligne OD de la matrice
            Matrice Musliw : Nom de fichier de la matrice Musliw (fichier texet avec separateur &apos;;&apos; )
</translation>
    </message>
</context>
<context>
    <name>MintNetwork</name>
    <message>
        <location filename="mint_network.py" line="102"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="mint_network.py" line="25"/>
        <source>Mint network file</source>
        <translation>Fichier réseau Mint (txt)</translation>
    </message>
    <message>
        <location filename="mint_network.py" line="27"/>
        <source>allow alighting</source>
        <translation>Montée autorisée?</translation>
    </message>
    <message>
        <location filename="mint_network.py" line="28"/>
        <source>allow boarding</source>
        <translation>Descente autorisée?</translation>
    </message>
    <message>
        <location filename="mint_network.py" line="29"/>
        <source>vehicle capacity</source>
        <translation>Capacité du véhicule</translation>
    </message>
    <message>
        <location filename="mint_network.py" line="30"/>
        <source>headway</source>
        <translation>Intervalle</translation>
    </message>
    <message>
        <location filename="mint_network.py" line="31"/>
        <source>travel time</source>
        <translation>Temps de parcours</translation>
    </message>
    <message>
        <location filename="mint_network.py" line="32"/>
        <source>i</source>
        <translation>i</translation>
    </message>
    <message>
        <location filename="mint_network.py" line="33"/>
        <source>j</source>
        <translation>j</translation>
    </message>
    <message>
        <location filename="mint_network.py" line="34"/>
        <source>line</source>
        <translation>ligne</translation>
    </message>
    <message>
        <location filename="mint_network.py" line="111"/>
        <source>
        Write a Mint network file (text file with &quot;;&quot; as delimiter) required for a Mint assignment
        Required 
        network: Layer that contains information about i,j line, travel times and headway information
        i: initial node Id
        j: final node Id
        line: line Id
        travel time: arc travel time
        headway: Interval between two consecutive vehicles 
        capacity: number of seats of the vehicle
        allowboarding: 1 if boarding is allowed, 0 otherwise
        alowalighting; 1 if alighting is allowed, 0 otherwise
        </source>
        <translation>        Ecrit un fichier réseau Mint (fichier texte avec&quot;;&quot; comme delimiteur) exigé pour une affectation Mint
        Paramètres
        réseau: Couche qui contient les informations i,j, ligne et sur les temps de parcours et fréquences
        i: Id du noeud initial
        j: Id du noeud final
        ligne: Id de la ligne
        travel time: temps de parcours de l&apos;arc
        temps de parcours: intervalle entre deux véhciules successifs
        capacité: capacité du véhicule
        montée autorisée: 1 si la montée est autorisée, 0 sinon
        descente autorisée: 1 si la descente est autorisée, 0 sinon</translation>
    </message>
    <message>
        <location filename="mint_network.py" line="99"/>
        <source>Mint network</source>
        <translation>Réseau Mint</translation>
    </message>
    <message>
        <location filename="mint_network.py" line="26"/>
        <source>direction</source>
        <translation>sens</translation>
    </message>
    <message>
        <location filename="mint_network.py" line="24"/>
        <source>Network(Qgis)</source>
        <translation>Arcs(Qgis)</translation>
    </message>
</context>
<context>
    <name>MintParameters</name>
    <message>
        <location filename="param_mint.py" line="23"/>
        <source>waiting weight</source>
        <translation>poids temps attente</translation>
    </message>
    <message>
        <location filename="param_mint.py" line="24"/>
        <source>boarding time</source>
        <translation>temps de correspondace</translation>
    </message>
    <message>
        <location filename="param_mint.py" line="25"/>
        <source>boarding weight</source>
        <translation>poids correspondance</translation>
    </message>
    <message>
        <location filename="param_mint.py" line="26"/>
        <source>walking weight</source>
        <translation>poids mode individuel</translation>
    </message>
    <message>
        <location filename="param_mint.py" line="27"/>
        <source>output strategies?</source>
        <translation>export des stratégies?</translation>
    </message>
    <message>
        <location filename="param_mint.py" line="28"/>
        <source>algorithm parameter</source>
        <translation>paramètre de l&apos;agorithme</translation>
    </message>
    <message>
        <location filename="param_mint.py" line="29"/>
        <source>Mint parameters file</source>
        <translation>Fichier de paramètres Mint</translation>
    </message>
    <message>
        <location filename="param_mint.py" line="54"/>
        <source>Mint parameters</source>
        <translation>Paramètres Mint</translation>
    </message>
    <message>
        <location filename="param_mint.py" line="57"/>
        <source>Computations</source>
        <translation>Calculs</translation>
    </message>
    <message>
        <location filename="param_mint.py" line="66"/>
        <source>
        Write a Mint parameters file required for a Mint assignment
        Parameters:
            Waiting weight&#xa0;: waiting time weight
            Boarding time: boarding time
            Boarding weight; boarding weight
            Walking weight: auxiliary transit weight
            Output strategies: If checked, Mint will print detailed strategies
            Algorithm parameter: Algorithm parameter 
            Mint parameter file : the result Mint parameter file that will be written
        </source>
        <translation>        Ecrit un fichier de paramètres Mint requis pour une affectation Mint
        Parametères:
            Poids attente : Poids temps d&apos;attente
            Temps de correspondance: temps de correspondance
            Poids correspondance; poids du temps de correspondance
            Poids mode individuel: Poids du temps de mode individuel 
            Output strategies: If checked, Mint will print detailed strategies
            Paramètre d&apos;algorithmer: Paramètre d&apos;algorithme
            Fichier de paramètres Mint : le fichier de paramètres Mint généré</translation>
    </message>
</context>
<context>
    <name>MultimodalGravityIndicators</name>
    <message>
        <location filename="multimodalgravity.py" line="39"/>
        <source>Amenity</source>
        <translation>Amenité</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="40"/>
        <source>Socioeconomic data</source>
        <translation>Données socioéconomiques (Qgis)</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="41"/>
        <source>Zone Id</source>
        <translation>Zone ID</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="42"/>
        <source>Population</source>
        <translation>Population</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="43"/>
        <source>Number of time periods</source>
        <translation type="obsolete">Nombre de périodes</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="45"/>
        <source>Output</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="287"/>
        <source>Multimodal Gravity Indicators</source>
        <translation>Indicateurs d&apos;accessibilité gravitaire multimodale</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="290"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="299"/>
        <source>
        The algorithm performs a gravity indicator of accessibility with spatial and modal competition based on a decay function 
        (1 for travel time=0, 0.5 for travel time = t0, 0 for infinite travel time
        -  Modes: a table with one row per mode with:
            - name: name of the mode (e.g  car)
            - t0: The value of t0 for which the decay function weighting is 0.5 for this specific mode
            - modal share: a python dict where keys must correspond to socioeconomic data columns, and value to the modal share of this mode for this population (e.g {&apos;pvp0&apos;:1.0,&apos;pvp1&apos;:0.88,&apos;pvp2&apos;:0.74})
            - musliw nodes file: : The name of the Musliw output node file &quot;..._noeuds.txt&quot; (This output need to be activated in Musliw paramaters)
        - Amenity: Attraction field ( as Number of job, numbers of doctors, numbers of school spaces)
        - Socioeconomic data: Name of the table which contains emission field (e.g zones or grid cells with population for example)
        - Zone ID: zone Id
        - Population: Emission field as bumber of inhabitants (for example)
        - Number of time period: Number of time periods for calculations (for a same origin destination)
        - Output: generic output file name (txt)
        
        The algorithm produces 2 result files
        - ..._multi_equip.txt (gravity indicator by amenity), catchment area
        - ..._multi_zones.txt (gravity indicator by zone), accessibility area
        accessibility indicator with spatial and modal competition is in variable &apos;w_pop&apos;
        </source>
        <translation>       L&apos;algorithme calcul des indicateurs d&apos;accessibilité gravitaire avec concurrence spatiale et modale à partir d&apos;une fonction de résistance
        (1 pour un temps de parcours de=0, 0.5 pour un temps de parcours de = t0, 0 temps de parcours infini
        -  Modes:Une table constituée de 1 ligne par mode avec:
            - mode: nom du mode (ex voiture)
            - t0: la valeur de t0 pour lequel la fonction de résistance vaut 0.5 pour ce mode spécifique
            - parts modales: un dictionnaire python où les clés doivent correpondre à des colonnes de table des donénes socio-économique et les valeurs aux parts modales des populations en question (ex {&apos;pvp0&apos;:1.0,&apos;pvp1&apos;:0.88,&apos;pvp2&apos;:0.74})
            - Fichier noeud Musliw: :Le nom du fichier de sortie noeuds de Musliw &quot;..._noeuds.txt&quot; (la sortie doit être activée dans les paramètres de calcul)
- Aménité: Champ aménité (en général volau)
- Données socioéconomiques: Table qui contient les données d&apos;émission (zones ou grille qui contient les populations par exemple)Zone 
- Zone ID: Identifiant de zone
- Population: Champ de population (nb d&apos;habitants par exemple)
- Nombre de périodes: Nombre de période de calcul pour une même OD
- Sortie: nom générique du fichier de sortie (txt)

L&apos;algorithme produit deux fichiers de résultats:
- ..._multi_equip.txt: (indicateur gravitaire par équiepement, zone de chalandise
- ..._multi_zones.txt (indicateur gravitaire par zone), zone d&apos;accessibilité
L&apos;indicateur d&apos;accessibilité avec concurrence spatiale et modale est dans la variable w_pop
</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="38"/>
        <source>Modes</source>
        <translation>Modes</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="38"/>
        <source>mode</source>
        <translation>mode</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="38"/>
        <source>t0</source>
        <translation>t0</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="38"/>
        <source>modal share</source>
        <translation>part modale</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="38"/>
        <source>Musliw nodes file</source>
        <translation>Fichier noeuds Musliw</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="44"/>
        <source>remove initial/Final waiting time?</source>
        <translation>retrancher le temps d&apos;attente initial/final?</translation>
    </message>
</context>
<context>
    <name>MusliwParam</name>
    <message>
        <location filename="param_musliw.py" line="107"/>
        <source>In vehicle weight</source>
        <translation>Pondération temps à bord du véhicule</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="115"/>
        <source>Waiting weight</source>
        <translation>Pondération temps attente</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="122"/>
        <source>Individual modes weight</source>
        <translation>Pondération temps mode individuel</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="130"/>
        <source>Boarding weight</source>
        <translation>Pondération correspondance</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="137"/>
        <source>Individual mode speed factor</source>
        <translation>Facteurd&apos;échelle temps individuel</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="144"/>
        <source>Minimum transfer delay</source>
        <translation>Temps de correspondance mini</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="151"/>
        <source>Maximum transfer delay</source>
        <translation>Temps de correspondance maxi</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="158"/>
        <source>Extra day duration</source>
        <translation>Nombre de jours supplémentaires</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="167"/>
        <source>Max. individual time budget</source>
        <translation>Temps individuel maximum</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="176"/>
        <source>Maximum generalized time</source>
        <translation>Temps généralisé maximum</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="185"/>
        <source>Toll weight</source>
        <translation>Pondération péage</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="192"/>
        <source>Output filter</source>
        <translation>Filtre sortie</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="199"/>
        <source>Output links times?</source>
        <translation>Temps détaillés?</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="199"/>
        <source>No output</source>
        <translation>Aucun</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="199"/>
        <source>Without timetable links</source>
        <translation>Sans les arcs à horaires</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="199"/>
        <source>With timetable links</source>
        <translation>Avec les arcs à horaires</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="207"/>
        <source>Prohibited U-turns?</source>
        <translation>Demi-tours interdits?</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="214"/>
        <source>Output paths?</source>
        <translation>Sortie chemins?</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="222"/>
        <source>Output services?</source>
        <translation>Sortie services?</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="229"/>
        <source>Output transfers?</source>
        <translation>Sortie correspondances?</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="236"/>
        <source>Output node times?</source>
        <translation>Sortie noeud?</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="251"/>
        <source>Algorithm scale?</source>
        <translation>Echelle de l&apos;algorithme</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="260"/>
        <source>Algorithm exponent?</source>
        <translation>Exposant de l&apos;algorithme</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="269"/>
        <source>nb classes?</source>
        <translation>Nombrede classes</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="278"/>
        <source>Parameters file</source>
        <translation>Fichier paramètres Musliw</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="379"/>
        <source>Musliw parameters</source>
        <translation>Paramètres Musliw</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="386"/>
        <source>Computations</source>
        <translation>Calculs</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="400"/>
        <source>
        Create a set of parameters usefull for multimodal routing or acceesibility computation with Musliw
		Produce a parameter file (to be selected in musliw computation):
        
        Parameters:
            In vehicle weight&#xa0;: weight factor for travel time in vehicle (time baseds mode e.g bus, tram, train, metro, airplane, ferry,...)
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
        <location filename="param_musliw.py" line="402"/>
        <source>
        Create a set of parameters usefull for multimodal routing or acceesibility computation with Musliw
        Produce a parameter file (to be selected in musliw computation):
        
        Parameters:
            In vehicle weight&#xa0;: weight factor for travel time in vehicle (time baseds mode e.g bus, tram, train, metro, airplane, ferry,...)
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
    <message>
        <location filename="param_musliw.py" line="331"/>
        <source>;algorithm</source>
        <translation></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="332"/>
        <source>;prohibited U-turns</source>
        <translation>;demi-tours interdits</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="333"/>
        <source>;max buckets</source>
        <translation></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="334"/>
        <source>;number of days</source>
        <translation></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="335"/>
        <source>;matrix file</source>
        <translation></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="336"/>
        <source>;turns and transfers files</source>
        <translation></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="337"/>
        <source>;network file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="338"/>
        <source>;generic output file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="339"/>
        <source>;algorithm parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="340"/>
        <source>;algorithm power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="341"/>
        <source>;output paths</source>
        <translation type="unfinished">;sortie chemins</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="342"/>
        <source>;output services</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="343"/>
        <source>;output travel times</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="344"/>
        <source>;output turns and transfers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="345"/>
        <source>;boarding weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="346"/>
        <source>;individual mode weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="347"/>
        <source>;individual travel time factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="348"/>
        <source>;in-vehicle time weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="349"/>
        <source>;wait time weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="350"/>
        <source>;min transfer time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="351"/>
        <source>;max transfer time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="352"/>
        <source>;max individual travel time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="353"/>
        <source>;toll weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="354"/>
        <source>;output types filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="355"/>
        <source>;max travel cost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="356"/>
        <source>;output nodes</source>
        <translation type="unfinished">;sortie noeuds</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="357"/>
        <source>;output isolated links</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="199"/>
        <source>Compact mode</source>
        <translation>mode compact</translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="243"/>
        <source>Output stops?</source>
        <translation>Sortie arrêts de montée/descente?</translation>
    </message>
</context>
<context>
    <name>Musliw_update</name>
    <message>
        <location filename="musliw_network_update.py" line="25"/>
        <source>Musliw network file</source>
        <translation>Fichier réseau Musliw (txt)</translation>
    </message>
    <message>
        <location filename="musliw_network_update.py" line="26"/>
        <source>Network field</source>
        <translation>Champ réseau</translation>
    </message>
    <message>
        <location filename="musliw_network_update.py" line="27"/>
        <source>Network selection</source>
        <translation>Sélection du réseau</translation>
    </message>
    <message>
        <location filename="musliw_network_update.py" line="28"/>
        <source>Selection filter?</source>
        <translation>Filtrer la sélection?</translation>
    </message>
    <message>
        <location filename="musliw_network_update.py" line="29"/>
        <source>Expression</source>
        <translation>Expression</translation>
    </message>
    <message>
        <location filename="musliw_network_update.py" line="30"/>
        <source>Updated network file</source>
        <translation>Réseau Musliw mis à jour</translation>
    </message>
    <message>
        <location filename="musliw_network_update.py" line="72"/>
        <source>Syntax error</source>
        <translation>Erreur de syntaxe</translation>
    </message>
    <message>
        <location filename="musliw_network_update.py" line="88"/>
        <source>Musliw network update</source>
        <translation>Mise à jour d&apos;un Réseau Musliw</translation>
    </message>
    <message>
        <location filename="musliw_network_update.py" line="91"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="musliw_network_update.py" line="100"/>
        <source>
        The script allow to update a Musliw network file with a expression and to apply simultenaously a filter 
        
        Parameters:
        Musliw network file: the Musliw network file to update
        Network Field: The field to be updated
        Network selection: Expression to select the records to update
        Selection filter: If true, the script will generate an updated Musliw network file on selected records only, if false it will generate a updated Musliw network file with all records
        Expression: the update expression (formula)
        Update network file: the output network file
        </source>
        <translation>        Le script permet de mettre à jour un fichier de réseau au format Musliw avec une expression et de lui appliquer simultanément un filtre
        
        Paramètres:
        Fichier réseau Musliw: le fichier réseau au format Musliw à mettre à jour
        Champ réseau: Le champ à mettre à jour
        Sélection réseau: Expression pour sélectionner les enregistrement de réseau à mettre à jour
        Filtre de sélection: si oui, le script générera un fichie réseau Musliw mis à jour sur les enregistrements sélectionnés uniquement, si non il générera un fichier réseau Musliw avec tous les enregistrements
        Expression: L&apos;expression de mise à jour (formule)
        Réseau Musliw mise à jour: Le réseau au format Musliw mis à jour</translation>
    </message>
</context>
<context>
    <name>NetworksProvider</name>
    <message>
        <location filename="networks_provider.py" line="267"/>
        <source>Networks</source>
        <translation>Networks</translation>
    </message>
</context>
<context>
    <name>NodesFile</name>
    <message>
        <location filename="fichier_noeuds.py" line="82"/>
        <source>Nodes times output file</source>
        <translation>Fichier noeuds Musliw (txt)</translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="94"/>
        <source>Variable</source>
        <translation>Variable</translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="111"/>
        <source>Remove initial/final waiting time?</source>
        <translation>Retrancher le temps d&apos;attente initial/final?</translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="120"/>
        <source>Nodes indicators file</source>
        <translation>Fichier résultat des indicateurs par noeud</translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="214"/>
        <source>ignored element</source>
        <translation>élément ignoré</translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="235"/>
        <source>indicators by node</source>
        <translation>indicateurs par noeud</translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="242"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="225"/>
        <source>
        Produce indicators aggregated by node. 
		
        Parameters:
            nodes times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_noeuds.txt)
			variable: The name of the variable for indicator computation (temps (time) by default)
            remove initial/final boarding time:  If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
            link indicators file: name of the result file (delimited text with &quot;;&quot; as separator) which containes the following attributes 
            numero: node id
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
        <translation type="obsolete">        Produit des indicateurs aggrégés par noeud. 
		
        Paramètres:
            Fichier temps Musliw: Le fichier temps Musliw (&lt;FICHIER&gt;_noeuds.txt)
			variable: Le nom de la variable pour le calcul des indicateurs  (temps par défaut)
            retrancher le temps d&apos;attente initial/final: Si sélectionné, le temps d&apos;attente initial ou final (entre le temps d&apos;arrivée ou de départ souhaité et le réel est soustrait au temps de parcouts total)
           Fichier résultat des indicateurs par noeud: nom du fichier réusltat ( texte délimité avec &quot;;&quot; comme séparateur) qui contient les attributs suivants
            numero:  id noeud
            avg: valeur moyennenombre de lignes dans la matrice traitées pour cette OD
            min: valeur minimum
            max: valeur maximum
            pole_min: premier/dernier noeud d&apos;intermodalité correspondant au temps minimum
            pole_max: premier/dernier noeud d&apos;intermodalité correspondant au temps maximum
            departures: nombre d&apos;horaires de départ différents (nombre d&apos;alternatives différentes) 
            arrivals:nombre d&apos;horaires d&apos;arrivée différents (nombre d&apos;alternatives différentes)
            sdev:valeur d&apos;écart type
            o_min: origine avec la valeur minimum
            o_max:origine avec la valeur maximum</translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="103"/>
        <source>Filter</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="258"/>
        <source>
        Produce indicators aggregated by node. 
		
        Parameters:
            nodes times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_noeuds.txt)
			variable: The name of the variable for indicator computation (temps (time) by default)
            filter: expression to filter nodes times outfile (ex: ncorr&lt;3 )
            remove initial/final boarding time:  If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
            link indicators file: name of the result file (delimited text with &quot;;&quot; as separator) which containes the following attributes 
            numero: node id
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
        <translation>        Produit des indicateurs aggrégés par noeud. 
		
        Paramètres:
            Fichier temps Musliw: Le fichier temps Musliw (&lt;FICHIER&gt;_noeuds.txt)
			variable: Le nom de la variable pour le calcul des indicateurs  (temps par défaut)
			Filtre: expression pour filtrer le fichier noeuds Musliw (ex: ncorr&lt;3)
            retrancher le temps d&apos;attente initial/final: Si sélectionné, le temps d&apos;attente initial ou final (entre le temps d&apos;arrivée ou de départ souhaité et le réel est soustrait au temps de parcouts total)

           Fichier résultat des indicateurs par noeud: nom du fichier réusltat ( texte délimité avec &quot;;&quot; comme séparateur) qui contient les attributs suivants
            numero:  id noeud
            avg: valeur moyennenombre de lignes dans la matrice traitées pour cette OD
            min: valeur minimum
            max: valeur maximum
            pole_min: premier/dernier noeud d&apos;intermodalité correspondant au temps minimum
            pole_max: premier/dernier noeud d&apos;intermodalité correspondant au temps maximum
            departures: nombre d&apos;horaires de départ différents (nombre d&apos;alternatives différentes) 
            arrivals:nombre d&apos;horaires d&apos;arrivée différents (nombre d&apos;alternatives différentes)
            sdev:valeur d&apos;écart type
            o_min: origine avec la valeur minimum
            o_max:origine avec la valeur maximum</translation>
    </message>
</context>
<context>
    <name>NodesFileCustom</name>
    <message>
        <location filename="fichier_noeuds_custom.py" line="84"/>
        <source>Nodes times output file</source>
        <translation>Fichier noeuds Musliw (txt)</translation>
    </message>
    <message>
        <location filename="fichier_noeuds_custom.py" line="96"/>
        <source>Variable</source>
        <translation>Variable</translation>
    </message>
    <message>
        <location filename="fichier_noeuds_custom.py" line="104"/>
        <source>Grouping key</source>
        <translation>Clé de regroupement</translation>
    </message>
    <message>
        <location filename="fichier_noeuds_custom.py" line="112"/>
        <source>Filter</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="fichier_noeuds_custom.py" line="120"/>
        <source>Remove initial/final waiting time?</source>
        <translation>Retrancher le temps d&apos;attente initial/final</translation>
    </message>
    <message>
        <location filename="fichier_noeuds_custom.py" line="129"/>
        <source>Nodes indicators file</source>
        <translation>Fichier résultat des indicateurs par noeud</translation>
    </message>
    <message>
        <location filename="fichier_noeuds_custom.py" line="249"/>
        <source>ignored element</source>
        <translation>élément ignoré</translation>
    </message>
    <message>
        <location filename="fichier_noeuds_custom.py" line="270"/>
        <source>indicators by node customized</source>
        <translation>Indicateurs par noeuds personnalisés</translation>
    </message>
    <message>
        <location filename="fichier_noeuds_custom.py" line="277"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="fichier_noeuds_custom.py" line="293"/>
        <source>
        Produce customized indicators from node file
		
        Parameters:
            nodes times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_noeuds.txt)
			variable: The name of the variable for indicator computation (temps (time) by default)
            grouping key: A set of variables separated by a &apos;;&apos; as grouping key ex: o;numero
            filter: expression to filter nodes times outfile (ex: ncorr&lt;3 )
            remove initial/final boarding time:  If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
            link indicators file: name of the result file (delimited text with &quot;;&quot; as separator) which containes the following attributes 
            numero: node id
            avg: average value 
            nb: number of od rows in the matrix file 
            min: minimum value indicator
            max: maximum value indicator
            sdev: standard deviation value
            o_min: origin with minimum value
            o_max: origin with maximum value
            volau: volume od of the o/d
            
            
        </source>
        <translation>
        Produit des indicateurs personnalisés à partir du fichier de résultat sur les noeuds (_noeuds.txt)
		
        Paramètres:
            Fichier noeuds Musliw: Le fichier de résultats Musliw sur les noeuds (&lt;FILENAME&gt;_noeuds.txt)
			variable:Le nom de la varible de l&apos;indicateur à calculer  (temps par défaut)
            Clé de regroupement: Une suite de variables séparées par &apos;;&apos;
            Filtre: expression pour filtrer les noeuds dans le fichier noeuds.txt (ex: temps&lt;60)
            retrancher le temps d&apos;attente initial/final:  Si sélectionné les temps d&apos;attente intiaux/finaux seront retranchés du temps total
           Fichier résultat des indicateurs par noeud: nom du fichier résultat( texte délimité avec  &quot;;&quot; comme séparateur)qui contient les attributs suivants
            numero:identifiant de numéro de noeud
            avg: valeur moyenne
            nb: nombre de lignes dans la matrice
            min: valeur mini de l&apos;indicateur
            max: valeur maxi de l&apos;indicateur
            sdev: écart type de l&apos;indicateur
            o_min: noeud origine de la  valeur minimale
            o_max: noeud origine de la valeur maximale
            volau: volume sur l&apos;O/D</translation>
    </message>
</context>
<context>
    <name>NodesFileDay</name>
    <message>
        <location filename="fichier_noeud_jour.py" line="83"/>
        <source>Nodes times output file</source>
        <translation>Fichier noeuds Musliw (txt)</translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="95"/>
        <source>Variable</source>
        <translation>Variable</translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="103"/>
        <source>Filter</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="111"/>
        <source>Remove initial/final waiting time?</source>
        <translation>Retrancher les temps d&apos;attente initiaux/finaux</translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="120"/>
        <source>Nodes indicators file</source>
        <translation>Fichier résultat des indicateurs par noeud</translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="216"/>
        <source>ignored element</source>
        <translation>élément ignoré</translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="237"/>
        <source>indicators by node and day</source>
        <translation>Indicateurs par noeud et jour</translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="244"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="260"/>
        <source>
        Produce indicators aggregated by node. 
		
        Parameters:
            nodes times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_noeuds.txt)
			variable: The name of the variable for indicator computation (temps (time) by default)
            filter: expression to filter nodes times outfile (ex: ncorr&lt;3 )
            remove initial/final boarding time:  If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
            link indicators file: name of the result file (delimited text with &quot;;&quot; as separator) which containes the following attributes 
            numero: node id
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
        <translation>        Produit des indicateurs aggrégés par noeud et jour. 
		
        Paramètres:
            Fichier temps Musliw: Le fichier temps Musliw (&lt;FICHIER&gt;_noeuds.txt)
			variable: Le nom de la variable pour le calcul des indicateurs  (temps par défaut)
            retrancher le temps d&apos;attente initial/final: Si sélectionné, le temps d&apos;attente initial ou final (entre le temps d&apos;arrivée ou de départ souhaité et le réel est soustrait au temps de parcouts total)
           Fichier résultat des indicateurs par noeud: nom du fichier réusltat ( texte délimité avec &quot;;&quot; comme séparateur) qui contient les attributs suivants
            numero:  id noeud
            avg: valeur moyennenombre de lignes dans la matrice traitées pour cette OD
            min: valeur minimum
            max: valeur maximum
            pole_min: premier/dernier noeud d&apos;intermodalité correspondant au temps minimum
            pole_max: premier/dernier noeud d&apos;intermodalité correspondant au temps maximum
            departures: nombre d&apos;horaires de départ différents (nombre d&apos;alternatives différentes) 
            arrivals:nombre d&apos;horaires d&apos;arrivée différents (nombre d&apos;alternatives différentes)
            sdev:valeur d&apos;écart type
            o_min: origine avec la valeur minimum
            o_max:origine avec la valeur maximum</translation>
    </message>
</context>
<context>
    <name>PathAnalysis</name>
    <message>
        <location filename="path_analysis.py" line="93"/>
        <source>Arcs</source>
        <translation>Arcs (Qgis)</translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="100"/>
        <source>Result paths Musliw File</source>
        <translation>Fichier chemins Musliw (txt)</translation>
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
    <name>PathIndicators</name>
    <message>
        <location filename="path_indicators.py" line="88"/>
        <source>Path output file</source>
        <translation>Fichier chemins (txt)</translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="100"/>
        <source>Filter</source>
        <translation type="obsolete">Filtre</translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="102"/>
        <source>Remove initial/final waiting time?</source>
        <translation>Retirer le temps d&apos;attente initial/final</translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="110"/>
        <source>Time based links only?</source>
        <translation>Tronçons à horaires uniquement?</translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="120"/>
        <source>Path indicators file</source>
        <translation>Fichier synthèse des chemins</translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="212"/>
        <source>indicators by path</source>
        <translation>Indicateurs par chemins</translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="219"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="243"/>
        <source>
        Produce indicators aggregated by OD. This analysis is usefull when you want to study the variation of travel times during a time period
		
        Parameters:
            OD ouput file: the Musliw origin destination output file (&lt;FILENAME&gt;_od.txt)
			variable: The name of the variable for indicator computation (temps (time) by default)
            remove initial/final boarding time: If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
			time based links only: If checked only time based links are analysed
            filter: filter expression to select a subset of OD. Available variables are:
                &apos;jour&apos;,&apos;heureo&apos;,&apos;heured&apos;,&apos;temps&apos;,&apos;tveh&apos;,&apos;tmap&apos;,&apos;tatt&apos;,&apos;tcorr&apos;,&apos;ncorr&apos;,&apos;tatt1&apos;,&apos;cout&apos;,&apos;longueur&apos;,&apos;volau&apos;,&apos;nbpop&apos;,&apos;toll&apos; as numeric 
                and &apos;id&apos;,&apos;origin&apos;,&apos;destination&apos;,&apos;pole&apos;,&apos;texte&apos; as string
            
            OD indicator file: name of the result file (delimited text with &quot;;&quot; as separator) which contains the following attributes 
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
        <translation type="obsolete">       Calcul des indicateurs aggrégés par OD. Cette analyse est utile lorsque l&apos;on souhaite étduier la variation des temps de parcours durant une période de temps
		
        Paramètres:
            Fichier OD: Le fichier OD résultat du calcul Musliw (&lt;NOM_FICHIER&gt;_od.txt)
			variable: Le nom de la variable sur la quelle on souhaite calculer les indicateurs (temps par défaut)
            retrancher le temps d&apos;attente initial/final: Si sélectionné, le temps d&apos;attente iitial ou final (entre le temps d&apos;arrivée ou d départ souhaité et le temps réel est retranché du temps de parcours total)
			tronçons à horaires seulement: Si sélectionné seuls les tronçons à horaires seront analysés
			filtre: expression filtre pour effectuer une sélection des OD. Les variables disponibles sont:
                &apos;jour&apos;,&apos;heureo&apos;,&apos;heured&apos;,&apos;temps&apos;,&apos;tveh&apos;,&apos;tmap&apos;,&apos;tatt&apos;,&apos;tcorr&apos;,&apos;ncorr&apos;,&apos;tatt1&apos;,&apos;cout&apos;,&apos;longueur&apos;,&apos;volau&apos;,&apos;nbpop&apos;,&apos;toll&apos; as numeric 
                and &apos;id&apos;,&apos;origin&apos;,&apos;destination&apos;,&apos;pole&apos;,&apos;texte&apos; as string


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
    <message>
        <location filename="path_indicators.py" line="243"/>
        <source>
        Produce indicators aggregated by OD. This analysis is usefull when you want to study the variation of travel times during a time period
		
        Parameters:
            path ouput file: the Musliw detailed path output file (&lt;FILENAME&gt;_od.txt)
            remove initial/final boarding time: If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
			time based links only: If checked only time based links are analysed
            path indicator file: name of the result file (delimited text with &quot;;&quot; as separator) which contains the following attributes 
            id: OD id
            temps: total travel time
            temps individuel: individual modes travel time
            temps_attente: wainting time
            temps_TC: timetable travel time
            longueur: length
            voyages: number of boardings
            montee: initial timetable modes text
            descente: final timetable modes text
            temps_individuel1: initial incoming travel time
            longueur1: intinial incoming length
            temps_individuel2: final outgoing travel time
            longueur2: final outgoing length
            
            
        </source>
        <translation type="obsolete">
        Calcul des ndicateurs agregés par chemin. Cette analyse est utile lorsque l&apos;on souhaite étudier sur une OD les différents modes utilisés et les durées/longueurs de rabattement ou diffusion
		
        Paramètres:
            Fichier chemins :le fichier détail des chemins produit par Musliw (&lt;FILENAME&gt;_chemins.txt)
            Retrancher le temps d&apos;attente initial:final: Si coché le temps d&apos;attente sera retranché (entre l&apos;heure réelle et l&apos;heure d&apos;arrivée ou de départ souhaitée)
			Arcs à horaires uniquements: Si coché seuls les arcs à horaires seront étudiés
            Nom du fichier synthèse: Nom du fichier résultat (fichier texte delimitétext avec &quot;;&quot; comme séparateur) qui contient les champs suivants
            id: OD id
            temps: temps de parcours total
            temps individuel:temps en modes individuels
            temps_attente: temps d&apos;attente
            temps_TC: temps à bord des véhicules
            longueur: longueur
            voyages: nombre de voyages
            montee: texte des premiers arcs de chaque voyage
            descente: texte des derniers arcs pour chaque voyage
            temps_individuel1:temps individuel de rabattement initial
            longueur1: longueur de rabattement initial
            temps_individuel2: temps individuel de diffusion finale
            longueur2: longueur de diffusion finale
            
            
        </translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="235"/>
        <source>
        Produce indicators aggregated by OD. This analysis is usefull when you want to study the variation of travel times during a time period
		
        Parameters:
            path ouput file: the Musliw detailed path output file (&lt;FILENAME&gt;_od.txt)
            remove initial/final boarding time: If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
			time based links only: If checked only time based links are analysed
            path indicator file: name of the result file (delimited text with &quot;;&quot; as separator) which contains the following attributes 
            id: OD id
            temps: total travel time
            temps individuel: individual modes travel time
            temps_attente: waiting time
            temps_TC: timetable travel time
            longueur: length
            voyages: number of boardings
            montee: initial timetable modes text
            descente: final timetable modes text
            temps_individuel1: initial incoming travel time
            longueur1: intinial incoming length
            temps_individuel2: final outgoing travel time
            longueur2: final outgoing length
            
            
        </source>
        <translation>        Calcul des ndicateurs agregés par chemin. Cette analyse est utile lorsque l&apos;on souhaite étudier sur une OD les différents modes utilisés et les durées/longueurs de rabattement ou diffusion
		
        Paramètres:
            Fichier chemins :le fichier détail des chemins produit par Musliw (&lt;FILENAME&gt;_chemins.txt)
            Retrancher le temps d&apos;attente initial:final: Si coché le temps d&apos;attente sera retranché (entre l&apos;heure réelle et l&apos;heure d&apos;arrivée ou de départ souhaitée)
			Arcs à horaires uniquements: Si coché seuls les arcs à horaires seront étudiés
            Nom du fichier synthèse: Nom du fichier résultat (fichier texte delimitétext avec &quot;;&quot; comme séparateur) qui contient les champs suivants
            id: OD id
            temps: temps de parcours total
            temps individuel:temps en modes individuels
            temps_attente: temps d&apos;attente
            temps_TC: temps à bord des véhicules
            longueur: longueur
            voyages: nombre de voyages
            montee: texte des premiers arcs de chaque voyage
            descente: texte des derniers arcs pour chaque voyage
            temps_individuel1:temps individuel de rabattement initial
            longueur1: longueur de rabattement initial
            temps_individuel2: temps individuel de diffusion finale
            longueur2: longueur de diffusion finale
            
            </translation>
    </message>
</context>
<context>
    <name>PrepareGTFS</name>
    <message>
        <location filename="prepare_gtfs.py" line="88"/>
        <source>GTFS source folder </source>
        <translation>Répertoire GTFS source</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="96"/>
        <source>GTFS output folder</source>
        <translation>Répertoire GTFS destination</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="104"/>
        <source>Network Id</source>
        <translation>Id réseau</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="111"/>
        <source>Extract stop_id?</source>
        <translation>Extraire stop_id?</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="118"/>
        <source>Extract formula</source>
        <translation>Formule d&apos;extraction</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="519"/>
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
        Scanne un répertoire GTFS et génère des fichiers GTFS formatés en cohérence avec les spécifications de  Musliw notamment dans la description de lignes n
        
        Paramètres:
        Répertoire GTFS source:chemin du répertoire source GTFS
        Répertoire GTFS destination: chemin du répertoire destination GTFS
        Id réseau: id réseau pour différencier les réseaux (line ID, stop ID,...) (ex: LI et 15696 -&gt; stop_id LI15696
        Extraire stop_id: si True l&apos;utilisateur doit écrire une fomule pour extraire le stop_id de la chaine stop_id initiale
        Fomule d&apos;extraction: La formule pour extraire le stop_id: (ex: &quot;OCE:StopArea:87256315&quot;) avec [-8:] comme formule -&gt; &quot;OCE:StopArea:87256315&quot;[-8:]=&quot;87256315&quot;
        </translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="496"/>
        <source>Prepare GTFS</source>
        <translation>Préparer GTFS</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="503"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="125"/>
        <source>Encoding</source>
        <translation>Encodage</translation>
    </message>
</context>
<context>
    <name>RemoveLayer</name>
    <message>
        <location filename="remove_layer.py" line="22"/>
        <source>Vector layer</source>
        <translation>Couche vectorielle</translation>
    </message>
    <message>
        <location filename="remove_layer.py" line="50"/>
        <source>Utilities</source>
        <translation>Utilitaires</translation>
    </message>
    <message>
        <location filename="remove_layer.py" line="47"/>
        <source>Remove layer</source>
        <translation>Supprimer couche vectorielle</translation>
    </message>
</context>
<context>
    <name>ReseauTC</name>
    <message>
        <location filename="reseau_tc.py" line="145"/>
        <source>GTFS folder</source>
        <translation>Répertoire GTFS</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="152"/>
        <source>Calendar start</source>
        <translation>Début calendrier</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="159"/>
        <source>Calendar end</source>
        <translation>Fin calendrier</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="591"/>
        <source>Musliw timetable network</source>
        <translation>Réseau Musliw à horaires </translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="556"/>
        <source>Reading stops</source>
        <translation>Lecture des stops</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="558"/>
        <source>Reading routes</source>
        <translation></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="560"/>
        <source>Reading trips</source>
        <translation>Lecture des routes</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="562"/>
        <source>Reading calendars_dates</source>
        <translation>Lecture des calendar_dates</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="564"/>
        <source>Reading calendars</source>
        <translation>Lecture des calendars</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="566"/>
        <source>Reading stop_times</source>
        <translation>Lecture des stop_times</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="568"/>
        <source>Generating lines</source>
        <translation>Génration des lignes</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="570"/>
        <source>Generation Musliw file</source>
        <translation>Génération du fichier Musliw</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="615"/>
        <source>
        Generates a Musliw timetable network from GTFS data (using prepare_GTFS script before is recommended)
		        
        Parameters:
            GTFs folder&#xa0;: GTFS folder 
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
        <location filename="reseau_tc.py" line="598"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="166"/>
        <source>Line based network?</source>
        <translation>Réseau basé sur des lignes?</translation>
    </message>
</context>
<context>
    <name>ReseauTi</name>
    <message>
        <location filename="reseau_ti.py" line="91"/>
        <source>Road network</source>
        <translation>Arcs (Qgis)</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="99"/>
        <source>Window</source>
        <translation>Fenêtre</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="105"/>
        <source>Direction</source>
        <translation>Sens</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="114"/>
        <source>Time</source>
        <translation>Temps</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="122"/>
        <source>Length</source>
        <translation>Longueur</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="130"/>
        <source>i-node</source>
        <translation>i-node</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="138"/>
        <source>j-node</source>
        <translation>j-node</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="146"/>
        <source>Time category id</source>
        <translation>Id Période</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="157"/>
        <source>Time period id</source>
        <translation>Id plage horaire</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="170"/>
        <source>Start time</source>
        <translation>Heure début</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="180"/>
        <source>End time</source>
        <translation>Heure fin</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="192"/>
        <source>Calendar</source>
        <translation>Calendrier</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="200"/>
        <source>Arc label</source>
        <translation>Texte arc</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="209"/>
        <source>Mode</source>
        <translation>Mode</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="231"/>
        <source>Musliw network</source>
        <translation>Réseau Musliw</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="280"/>
        <source>Writing Musliw network file...</source>
        <translation>Ecriture du réseau Musliw...</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="358"/>
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
        <location filename="reseau_ti.py" line="335"/>
        <source>Musliw individual network</source>
        <translation>Réseau Musliw transport individuel</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="342"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="218"/>
        <source>Toll</source>
        <translation>Péage</translation>
    </message>
</context>
<context>
    <name>Routes</name>
    <message>
        <location filename="routes.py" line="87"/>
        <source>Musliw travel times</source>
        <translation>Temps de parcours Musliw (txt)</translation>
    </message>
    <message>
        <location filename="routes.py" line="94"/>
        <source>Output</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location filename="routes.py" line="214"/>
        <source>Routes</source>
        <translation>Itinéraires</translation>
    </message>
    <message>
        <location filename="routes.py" line="221"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="routes.py" line="236"/>
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
        <translation>Arcs (Qgis)</translation>
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
        <location filename="decaler_lignes.py" line="227"/>
        <source>Shift lines</source>
        <translation>Décaler lignes</translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="234"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="250"/>
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
        <location filename="simple_matrix.py" line="87"/>
        <source>Nodes</source>
        <translation>Noeuds</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="95"/>
        <source>Node ID</source>
        <translation>Id noeud</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="102"/>
        <source>Trip start</source>
        <translation>Point de départ</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="108"/>
        <source>Trip end</source>
        <translation>Point d&apos;arrivée</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="114"/>
        <source>Demand</source>
        <translation>Demande</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="122"/>
        <source>Day</source>
        <translation>Jour</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="130"/>
        <source>Time</source>
        <translation>Horaire</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="138"/>
        <source>Departure/Arrival</source>
        <translation>Départ/Arrivée</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="138"/>
        <source>Departure</source>
        <translation>Départ</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="138"/>
        <source>Arrival</source>
        <translation>Arrivée</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="150"/>
        <source>Musliw matrix</source>
        <translation>Matrice Musliw</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="157"/>
        <source>Write Mode</source>
        <translation>Mode écriture</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="157"/>
        <source>Write</source>
        <translation>Ecriture</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="157"/>
        <source>Append</source>
        <translation>Ajout</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="243"/>
        <source>Musliw simple matrix</source>
        <translation>Matrice Musliw simple</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="250"/>
        <source>Matrix</source>
        <translation>Matrice</translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="266"/>
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
        <translation>Polygones (Qgis)</translation>
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
        <location filename="trafic.py" line="96"/>
        <source>Network</source>
        <translation>Arcs (Qgis)</translation>
    </message>
    <message>
        <location filename="trafic.py" line="102"/>
        <source>Width</source>
        <translation>Largeur</translation>
    </message>
    <message>
        <location filename="trafic.py" line="109"/>
        <source>Scale</source>
        <translation>Echelle</translation>
    </message>
    <message>
        <location filename="trafic.py" line="117"/>
        <source>Max angle(degrees)</source>
        <translation>Angle max (degrés)</translation>
    </message>
    <message>
        <location filename="trafic.py" line="125"/>
        <source>Min distance(m)</source>
        <translation>Min distance(m)</translation>
    </message>
    <message>
        <location filename="trafic.py" line="142"/>
        <source>Both directions?</source>
        <translation>Double sens?</translation>
    </message>
    <message>
        <location filename="trafic.py" line="690"/>
        <source>Variable buffer polygons</source>
        <translation>Polygones à largeur variables</translation>
    </message>
    <message>
        <location filename="trafic.py" line="697"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="trafic.py" line="713"/>
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
    <message>
        <location filename="trafic.py" line="133"/>
        <source>Snap distance(m)</source>
        <translation>Distance d&apos;accrochage</translation>
    </message>
</context>
<context>
    <name>UpdateSpeedBdTopo</name>
    <message>
        <location filename="maj_vitesses_bd_topo.py" line="21"/>
        <source>BDTOPO road layer</source>
        <translation>Routes BDTOPO (qgis)</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_topo.py" line="22"/>
        <source>Nature</source>
        <translation>Nature</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_topo.py" line="23"/>
        <source>Number of lanes</source>
        <translation>Nombre de voies</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_topo.py" line="24"/>
        <source>Urban</source>
        <translation>Urbain</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_topo.py" line="25"/>
        <source>Urban area size</source>
        <translation>Taille de l&apos;aire urbaine</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_topo.py" line="26"/>
        <source>Municipality category</source>
        <translation>Catégorie de commune</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_topo.py" line="27"/>
        <source>Car speed table</source>
        <translation>Tables des vitesses auto</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_topo.py" line="37"/>
        <source>Peak hour factor</source>
        <translation>Coefficient heure de pointe</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_topo.py" line="188"/>
        <source>Warning: The layer is not editable</source>
        <translation>Attention: la couche n&apos;est pas éditable</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_topo.py" line="135"/>
        <source>update car speed peak hour and off-peak hour</source>
        <translation>Mise à jour des vitesses heure de pointe et heure creuse</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_topo.py" line="144"/>
        <source>updating field...</source>
        <translation>mise à jour du champ...</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_topo.py" line="146"/>
        <source>updating field</source>
        <translation>mise à jour du champ</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_topo.py" line="206"/>
        <source>Update IGN BDTOPO car speeds</source>
        <translation>Mise à jour des vitesses auto BD TOPO</translation>
    </message>
</context>
<context>
    <name>UpdateSpeedEgm</name>
    <message>
        <location filename="maj_vitesses_bd_egm.py" line="22"/>
        <source>EGM/ERM roads</source>
        <translation>Routes EGM/ERM (Qgis)</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_egm.py" line="23"/>
        <source>RTT</source>
        <translation>RTT</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_egm.py" line="24"/>
        <source>COR</source>
        <translation>COR</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_egm.py" line="25"/>
        <source>MED</source>
        <translation>MED</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_egm.py" line="26"/>
        <source>Peak hour factor</source>
        <translation>Coefficient heure de pointe</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_egm.py" line="27"/>
        <source>Car speed table</source>
        <translation>Tables des vitesses auto</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_egm.py" line="41"/>
        <source>routes_bdtopo</source>
        <translation type="obsolete">routes_EGM/ERM</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_egm.py" line="160"/>
        <source>Warning: The layer is not editable</source>
        <translation>Attention: la couche n&apos;est pas éditable</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_egm.py" line="123"/>
        <source>update car speed peak hour and off-peak hour</source>
        <translation>Mise à jour des vitesses heure de pointe et heure creuse</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_egm.py" line="132"/>
        <source>updating field...</source>
        <translation>mise à jour du champ...</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_egm.py" line="134"/>
        <source>updating field</source>
        <translation>mise à jour du champ</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_egm.py" line="174"/>
        <source>Update EGM/ERM car speed</source>
        <translation>Mise à jour des vitesses auto EGM/ERM</translation>
    </message>
    <message>
        <location filename="maj_vitesses_bd_egm.py" line="185"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
</context>
<context>
    <name>Updating arcs</name>
    <message>
        <location filename="creer_graphe.py" line="256"/>
        <source>Updating arcs</source>
        <translation>Mise à jour des arcs...</translation>
    </message>
</context>
<context>
    <name>Zones_objects_centroids</name>
    <message>
        <location filename="zones_objects_centroids.py" line="35"/>
        <source>Zones</source>
        <translation>Zones (Qgis)</translation>
    </message>
    <message>
        <location filename="zones_objects_centroids.py" line="36"/>
        <source>Zone_Id</source>
        <translation>Zone_Id</translation>
    </message>
    <message>
        <location filename="zones_objects_centroids.py" line="37"/>
        <source>Objects</source>
        <translation>Objets</translation>
    </message>
    <message>
        <location filename="zones_objects_centroids.py" line="38"/>
        <source>Output</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location filename="zones_objects_centroids.py" line="113"/>
        <source>Zones/objects centroids</source>
        <translation>Zones/objets centroïdes</translation>
    </message>
    <message>
        <location filename="zones_objects_centroids.py" line="119"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
</context>
</TS>
