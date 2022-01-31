<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS><TS version="2.0" language="fr_FR" sourcelanguage="">
<context>
    <name>AjoutChamp</name>
    <message>
        <location filename="ajout_champ.py" line="95"/>
        <source>Field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="105"/>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="113"/>
        <source>Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="124"/>
        <source>Precision</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="136"/>
        <source>Filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="150"/>
        <source>Formula</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="211"/>
        <source>updating field...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="213"/>
        <source>updating field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="273"/>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="86"/>
        <source>Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="242"/>
        <source>Update field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ajout_champ.py" line="249"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ArcsTi</name>
    <message>
        <location filename="create_ti_arcs.py" line="80"/>
        <source>Road network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="88"/>
        <source>i-node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="97"/>
        <source>j-node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="107"/>
        <source>Node ID concatenator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="117"/>
        <source>Output layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="169"/>
        <source>Create individual networks arcs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="176"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_ti_arcs.py" line="192"/>
        <source>
        Generates a arcs layer for individual transport mode similarly to arcs layers from GTFS Import
        in order to concatenate every netwrok element for multimodal routing visualization
<byte value="x9"/><byte value="x9"/>
        Parameters:
            road network: road network layer (linear objects)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>i-node: i_node id field
            j-node: j-node id field
            Node id concatenator: a character or a string to build ij field by concatenating i-node and j-node field 
            output layer: name of teh result output layer
            
            
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AutoConnecteurs</name>
    <message>
        <location filename="autoconnectors.py" line="86"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="93"/>
        <source>node_id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="101"/>
        <source>mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="108"/>
        <source>Radius(m)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="118"/>
        <source>Speed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="129"/>
        <source>Connectors file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="210"/>
        <source> connected nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="230"/>
        <source>Auto-connectors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="237"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="autoconnectors.py" line="250"/>
        <source>
        Generate a layer of linear objects corresponding to connections between points closest within a layer (e.g. PT stops)
        
        Parameters:
            nodes&#xa0;: nodes layer
<byte value="x9"/><byte value="x9"/><byte value="x9"/>node_id: node id
<byte value="x9"/><byte value="x9"/><byte value="x9"/>radius: search radius(m)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>mode: mode at node
<byte value="x9"/><byte value="x9"/><byte value="x9"/>speed: travel speed on connectors (0= infinite speed)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>connectors file: name of the resulting connectors layer
<byte value="x9"/><byte value="x9"/><byte value="x9"/>NB: the tool generates in the same time a txt file in Musliw format (same name as connectors file with txt extension)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Building graph</name>
    <message>
        <location filename="creer_graphe.py" line="235"/>
        <source>Building graph</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CalculMusliw</name>
    <message>
        <location filename="calcul_musliw.py" line="89"/>
        <source>Musliw network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="95"/>
        <source>Musliw matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="101"/>
        <source>Musliw parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="107"/>
        <source>Musliw penalties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="114"/>
        <source>Output</source>
        <translation type="unfinished">Sortie</translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="173"/>
        <source>Multimodal calculations... That could take some time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="198"/>
        <source>Musliw computation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="205"/>
        <source>Computations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="123"/>
        <source>Accept to download Musliw binary from Github</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="153"/>
        <source>Downloading Muslic binary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="155"/>
        <source>Muslic downloaded succesfully</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="calcul_musliw.py" line="221"/>
        <source>
        Perform a calculation of multimodal accessibility and routing
<byte value="x9"/><byte value="x9"/>Can download the Muslic.exe binary for multimodal routing and accessibility computation (if checked)
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
<byte value="x9"/><byte value="x9"/><byte value="x9"/>output : Mulsiw results file (without extension)
            Accept to download Muslic binary: If checked, the algorithm will download Muslic.exe on the github repository
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ConcatFolder</name>
    <message>
        <location filename="concat_reseaux.py" line="82"/>
        <source>Network elements folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="89"/>
        <source>Global network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="143"/>
        <source>Concatenate networks folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="150"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="concat_reseaux.py" line="166"/>
        <source>
        Concatenate Musliw networks elements,
<byte value="x9"/><byte value="x9"/>timetable based network elements, indivudal modes elements and connector elements in order to generate a global multimodal network as input for Musliw tool
        
        Parameters:
            network elements folder&#xa0;: Musliw networks elements folder
<byte value="x9"/><byte value="x9"/><byte value="x9"/>global network: name of the global network file (txt)
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ConcatNetworkFiles</name>
    <message>
        <location filename="concat_files.py" line="83"/>
        <source>Network files to concatenate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="concat_files.py" line="90"/>
        <source>Global network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="concat_files.py" line="143"/>
        <source>Concatenate network files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="concat_files.py" line="150"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="concat_files.py" line="166"/>
        <source>
        Concatenate Musliw networks elements,
<byte value="x9"/><byte value="x9"/>timetable based network elements, indivudal modes elements and connector elements in order to generate a global multimodal network as input for Musliw tool
        
        Parameters:
            network elements files&#xa0;: Musliw networks elements files
<byte value="x9"/><byte value="x9"/><byte value="x9"/>global network: name of the global network file (txt)
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ConnectNodes2Lines</name>
    <message>
        <location filename="connect_nodes2lines.py" line="209"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="89"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="96"/>
        <source>Radius(m)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="133"/>
        <source>Split polylines at connections</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="136"/>
        <source>Connecting points to lines...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="202"/>
        <source>Connect nodes to lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connect_nodes2lines.py" line="222"/>
        <source>
        Connect points to a a linear objetcs layers within a search radius. Points are conencted to the closest line. 
        The closest line is splitted at the shorstest distance point in two lines, and a line is generated between the point and the closest point
        The lines layer is in editable mode in order to be alble to cancel the connections.
        
        Parameters:
            lines&#xa0;: lines layer (linear objects)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>nodes: points layer
            radius: search radius (m)
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ConnecteursGeo</name>
    <message>
        <location filename="connecteurs_geo.py" line="95"/>
        <source>Stops</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="102"/>
        <source>Stop_id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="110"/>
        <source>i-text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="117"/>
        <source>i-mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="124"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="131"/>
        <source>node_id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="139"/>
        <source>j-text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="146"/>
        <source>j-mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="153"/>
        <source>Radius(m)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="163"/>
        <source>Speed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="173"/>
        <source>Maximum number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="195"/>
        <source>Connectors file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="249"/>
        <source>length</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="250"/>
        <source>time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="251"/>
        <source>mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="303"/>
        <source> connected nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="343"/>
        <source>
        Generate a layer of linear objects corresponding to connections between two ponts layers (e.g. PT stops and roads nodes)
        
        Parameters:
            stops&#xa0;: stops layer
<byte value="x9"/><byte value="x9"/><byte value="x9"/>stop_id: stop id
<byte value="x9"/><byte value="x9"/><byte value="x9"/>nodes: nodes layer
<byte value="x9"/><byte value="x9"/><byte value="x9"/>node_id: node id
<byte value="x9"/><byte value="x9"/><byte value="x9"/>radius: search radius(m)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>i-text: text at node i (start node)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>i-mode: mode at node i (start node)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>j-text: text at node j (end node)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>j-mode: mode at node j (end node)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>speed: travel speed on connectors (0= infinite speed)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>connectors file: name of the resulting connectors layer
<byte value="x9"/><byte value="x9"/><byte value="x9"/>NB: the tool generates in the same time a txt file in Musliw format (same name as connectors file with txt extension)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>
        </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="323"/>
        <source>Build connectors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="330"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="connecteurs_geo.py" line="183"/>
        <source>ID field size</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Contours</name>
    <message>
        <location filename="contours.py" line="97"/>
        <source>Raster</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="contours.py" line="103"/>
        <source>Band</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="contours.py" line="111"/>
        <source>Min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="contours.py" line="119"/>
        <source>Max</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="contours.py" line="127"/>
        <source>Interval</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="contours.py" line="135"/>
        <source>No Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="contours.py" line="143"/>
        <source>Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="contours.py" line="349"/>
        <source>Isovalue polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="contours.py" line="236"/>
        <source>Grid interpolation...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="contours.py" line="288"/>
        <source>Generating isovalue polygons...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="contours.py" line="356"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="contours.py" line="740"/>
        <source>
        Generates isovalue polygons from a rester layer (ex: in order to genarate isochrones areas)
<byte value="x9"/><byte value="x9"/>        
        Parameters:
            raster: input raster layer name
<byte value="x9"/><byte value="x9"/><byte value="x9"/>band: band to compute
<byte value="x9"/><byte value="x9"/><byte value="x9"/>min: minimum isovalue area to generate
<byte value="x9"/><byte value="x9"/><byte value="x9"/>max: maximum isovalue area to generate
<byte value="x9"/><byte value="x9"/><byte value="x9"/>interval: step between each isovalue
<byte value="x9"/><byte value="x9"/><byte value="x9"/>no_value: value corresponding to the raster no_value
<byte value="x9"/><byte value="x9"/><byte value="x9"/>polygons: True= genarates polygons: False generates Polylines
            individual values: if checked generate a polygon for each individual raster value (no interpolation)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>result: name of the resulted isovalue polygons layer
        </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="contours.py" line="150"/>
        <source>Individual Values</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CreateUpdateLinks</name>
    <message>
        <location filename="create_update_links.py" line="279"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="96"/>
        <source>Travel times file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="102"/>
        <source>Extent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="111"/>
        <source>Initial/final waiting time?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="120"/>
        <source>Result network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="209"/>
        <source>updating ti and tj...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="272"/>
        <source>Create updated links</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="create_update_links.py" line="295"/>
        <source>
        Read the travel times file &quot;.._temps.txt&quot; computed by Musliw and creates a the network layer with i-node and j-node travel times from travel time file included
<byte value="x9"/><byte value="x9"/>        
        Parameters:
            layer&#xa0;: network layer (linear objects)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>travel times file: travel times text file ..._temps.txt generated by Musliw
            extent: window that defines the updated links  (only those inside the window)
            departure/arrival: departure if &quot;d&quot; in Musliw matrix, arrival if &quot;a&quot;
            initial/final waiting time: in order to take into account or not inital/final waiting time (tatt1)
            result network: name of the network layer subset with updated travel times (ti &amp; tj)
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CreerGraphe</name>
    <message>
        <location filename="creer_graphe.py" line="301"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="93"/>
        <source>Direction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="112"/>
        <source>Prefix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="122"/>
        <source>Nodes layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="294"/>
        <source>Build graph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="102"/>
        <source>Node Id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="317"/>
        <source>
        Build a graph from a linear layer (create a node layer, i and j fields filled with node id at start and end node) taking into account the direction of flows
        
        Parameters:
            network&#xa0;: Network layer (linear objects)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>prefix: prefix for node ids (ex: &apos;MAP&apos; and n&#xb0; 12563 =&gt; MAP12563)
            node_id: the format of the node_id string: number series or geographic string (uniqueid which is consistent when you add several adjacent layers)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>direction: flow direction (&apos;0&apos; prohibited, &apos;1&apos; one way objet direction, &apos;2&apos;, one way inverse object direction, &apos;3&apos; both directions
<byte value="x9"/><byte value="x9"/><byte value="x9"/>nodes_file: nodes layer (arcs ends)
        </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="102"/>
        <source>Number series</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="creer_graphe.py" line="102"/>
        <source>Geographic string(unique)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FichierAff</name>
    <message>
        <location filename="fichier_aff.py" line="86"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="95"/>
        <source>ij</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="106"/>
        <source>Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="116"/>
        <source>Flows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="123"/>
        <source>Link type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="133"/>
        <source>aff output file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="143"/>
        <source>Encoding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="150"/>
        <source>Flows layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="273"/>
        <source>Get link flows data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="280"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="fichier_aff.py" line="296"/>
        <source>
        Generate a linear objects layer with the links used in assignment (with a volume of passengers&gt;0) in particular to produce flows maps.
<byte value="x9"/><byte value="x9"/>
        Parameters:
            network: the network links layer 
<byte value="x9"/><byte value="x9"/><byte value="x9"/>ij: an expression do describe the link id (&quot;id&quot; attribute or expression)
            line (optonal): the line id. If line id is filled the layer will have as many superposed links as they have identical links but with a different transit line id (You should used &quot;shift lines&apos; alg to view flows maps in this case
<byte value="x9"/><byte value="x9"/><byte value="x9"/>link type: the type of link
            aff ouput file: Choose a network corresponding &lt;FILENAME&gt;_aff.txt output file
            enconding: text encoding
            flows layer: name of the flows layer generated
            
            
            
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FichierOD</name>
    <message>
        <location filename="fichier_od.py" line="89"/>
        <source>OD output file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="101"/>
        <source>Variable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="117"/>
        <source>Remove initial/final waiting time?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="125"/>
        <source>Time based links only?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="135"/>
        <source>OD indicator file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="262"/>
        <source>indicators by OD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="269"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="109"/>
        <source>Filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_od.py" line="285"/>
        <source>
        Produce indicators aggregated by OD. This analysis is usefull when you want to study the variation of travel times during a time period
<byte value="x9"/><byte value="x9"/>
        Parameters:
            OD ouput file: the Musliw origin destination output file (&lt;FILENAME&gt;_od.txt)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>variable: The name of the variable for indicator computation (temps (time) by default)
            remove initial/final boarding time: If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
<byte value="x9"/><byte value="x9"/><byte value="x9"/>time based links only: If checked only time based links are analysed
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FichierTemps</name>
    <message>
        <location filename="fichier_temps.py" line="84"/>
        <source>Link times output file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="96"/>
        <source>Variable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="112"/>
        <source>Remove initial/final waiting time?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="120"/>
        <source>Time based links only?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="128"/>
        <source>Link indicators file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="255"/>
        <source>indicators by link</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="262"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="104"/>
        <source>Filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps.py" line="278"/>
        <source>
        Produce indicators aggregated by link. This analysis is usefull when you want to study the variation of travel times during a time period
<byte value="x9"/><byte value="x9"/>
        Parameters:
            link times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_temps.txt)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>variable: The name of the variable for indicator computation (temps (time) by default)
            filter: expression to filter nodes times outfile (ex: ncorr&lt;3 )
            remove initial/final boarding time:  If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
<byte value="x9"/><byte value="x9"/><byte value="x9"/>time based links only: If checked only time based links are analysed
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FichierTempsJour</name>
    <message>
        <location filename="fichier_temps_jour.py" line="84"/>
        <source>Link times output file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="96"/>
        <source>Variable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="111"/>
        <source>Remove initial/final waiting time?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="119"/>
        <source>Time based links only?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="127"/>
        <source>Link indicators file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="255"/>
        <source>indicators by link and day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="262"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="104"/>
        <source>Filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps_jour.py" line="278"/>
        <source>
        Produce indicators aggregated by link and day. This analysis is usefull when you want to study the variation of travel times during a time period
<byte value="x9"/><byte value="x9"/>
        Parameters:
            link times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_temps.txt)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>variable: The name of the variable for indicator computation (temps (time) by default)
            filter: expression to filter nodes times outfile (ex: ncorr&lt;3 )
            remove initial/final boarding time:  If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
<byte value="x9"/><byte value="x9"/><byte value="x9"/>time based links only: If checked only time based links are analysed
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FichierTempsMulti</name>
    <message>
        <location filename="fichier_temps_multi.py" line="84"/>
        <source>Link times output file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="98"/>
        <source>Filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="106"/>
        <source>Remove initial/final waiting time?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="114"/>
        <source>Time based links only?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="122"/>
        <source>Link indicators file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="253"/>
        <source>indicators by link multiple points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="260"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="fichier_temps_multi.py" line="276"/>
        <source>
        Produce indicators aggregated by link. This analysis is usefull when you want to study the variation of travel times during a time period
<byte value="x9"/><byte value="x9"/>
        Parameters:
            link times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_temps.txt)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>variable: The name of the variable for indicator computation (temps (time) by default)
            filter: expression to filter nodes times outfile (ex: ncorr&lt;3 )
            remove initial/final boarding time:  If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
<byte value="x9"/><byte value="x9"/><byte value="x9"/>time based links only: If checked only time based links are analysed
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Generating nodes</name>
    <message>
        <location filename="creer_graphe.py" line="218"/>
        <source>Generating nodes</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GravityIndicators</name>
    <message>
        <location filename="gravityindicator.py" line="36"/>
        <source>Musliw Output Nodes File</source>
        <translation>Fichier noeuds Musliw</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="37"/>
        <source>Amenity</source>
        <translation>Aménité</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="39"/>
        <source>Socioeconomic data</source>
        <translation>Donénes socioéconomiques</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="40"/>
        <source>Zone Id</source>
        <translation>Zone ID</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="41"/>
        <source>Population</source>
        <translation>Population</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="42"/>
        <source>Number of time periods</source>
        <translation>Nombre de périodes</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="43"/>
        <source>Output</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="245"/>
        <source>Gravity Indicators</source>
        <translation>Indicateurs gravitaires</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="248"/>
        <source>Analysis</source>
        <translation>Analyses</translation>
    </message>
    <message>
        <location filename="gravityindicator.py" line="257"/>
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
        <location filename="import_gtfs.py" line="93"/>
        <source>GTFS Folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="100"/>
        <source>Calendar start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="108"/>
        <source>Calendar end</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="115"/>
        <source>Start time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="126"/>
        <source>End time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="136"/>
        <source>Table names</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="143"/>
        <source>CRS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="151"/>
        <source>Ouput folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="157"/>
        <source>Encoding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="284"/>
        <source>Reading calendars...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="314"/>
        <source>reading calendar dates...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="341"/>
        <source>Reading routes...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="366"/>
        <source>Reading trips...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="390"/>
        <source>Reading stop times...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="501"/>
        <source>Generating arcs and lines...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="596"/>
        <source>GTFS import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="603"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="import_gtfs.py" line="616"/>
        <source>
        Scan a GTFS folder and generates the layer of stops, and the layer of simplified arcs and lines
<byte value="x9"/><byte value="x9"/>Computes the transport offer for the specified time period  and calendar (number of stops)
        
        Parameters:
            GTFS_folder&#xa0;: GTFS folder path
<byte value="x9"/><byte value="x9"/><byte value="x9"/>calendar start: calendar date of the first day of the period (dd/mm/YYYY)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>calendar_end: calendar date of the last day of the period (dd/mm/YYYY)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>start_time: start time of the period (hh:mm:ss)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>end_time: end time of the period (hh:mm:ss)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>table names: root for generated tables (ex: IC =&gt; IC_nodes.shp, IC_arcs.shp and IC_lines.shp)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>CRS: generated tables CRS
<byte value="x9"/><byte value="x9"/><byte value="x9"/>encoding: encoding
<byte value="x9"/><byte value="x9"/><byte value="x9"/>
<byte value="x9"/><byte value="x9"/><byte value="x9"/>
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Interpole</name>
    <message>
        <location filename="interpole.py" line="105"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="112"/>
        <source>Window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="120"/>
        <source>i-cost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="128"/>
        <source>j-cost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="137"/>
        <source>Direction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="146"/>
        <source>Spread</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="155"/>
        <source>Impassibility</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="163"/>
        <source>Pixels nb x</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="171"/>
        <source>Pixels nb y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="179"/>
        <source>Pixel size x</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="187"/>
        <source>Pixel size y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="195"/>
        <source>Decimals</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="203"/>
        <source>Radius(m)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="211"/>
        <source>Spread speed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="219"/>
        <source>Impassable?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="235"/>
        <source>Raster file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="475"/>
        <source>Linear interpolation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="482"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="interpole.py" line="498"/>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="interpole.py" line="226"/>
        <source>Individual values</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Inverser</name>
    <message>
        <location filename="inverser.py" line="175"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="inverser.py" line="89"/>
        <source>Reverted network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="inverser.py" line="97"/>
        <source>Add to network?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="inverser.py" line="129"/>
        <source>Add direction &apos;2&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="inverser.py" line="168"/>
        <source>Reverse arcs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="inverser.py" line="191"/>
        <source>
        Reverse arc directions and update i, j and ij fields to preserve the graph consistency
        
        
        Parameters:
            network&#xa0;: network layer (linear objects)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>reverted network: name of the reverted network layer
            add_to_network: if True adds the reverted network to the initial one
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InverserSelection</name>
    <message>
        <location filename="inverser_selection.py" line="145"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="inverser_selection.py" line="138"/>
        <source>Reverse selection geometries</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="inverser_selection.py" line="161"/>
        <source>
        Reverse arc directions from a selection of linear objcts:
        The script modify the geoometry of the existing table and 
        do not create a new table with the reult (use &quot;revert arcs&quot; for that)
        
        
        Parameters:
            network&#xa0;: network layer (linear objects) where the selected objects belong
<byte value="x9"/><byte value="x9"/><byte value="x9"/>
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>IsolatedNodes</name>
    <message>
        <location filename="noeuds_isoles.py" line="82"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="89"/>
        <source>Node Id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="98"/>
        <source>Musliw network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="114"/>
        <source>Connected nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="218"/>
        <source>Isolated nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="225"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="105"/>
        <source>Network Id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="noeuds_isoles.py" line="241"/>
        <source>
        Create a layer of connected nodes from a nodes layer (ex: generated by the build graph algorithm) and a Musliw network. The algorithm build the different graphs corresponding to the Musliw network 
        and create a node layer corresponding to the graph having the largest number of nodes. The interest of this algorithm is to analyse the connections of graph and 
        to prevent a Musliw computation based on an isolated node
<byte value="x9"/><byte value="x9"/>
        Parameters:
            Nodes: nodes layer (ex: generated by the build graph algorithm )
<byte value="x9"/><byte value="x9"/><byte value="x9"/>Node id: Field that contains the node Id
            Musliw Network: A Musliw network with corresponding node id corresponding to the nodes layer id
            Network Id: Number of the network graph to select for conencted nodes (networks are sorted by the number of connected nodes. 0 (default value)  is the largest
            Connected nodes: Name of the output nodes layer generated from the graph with the largest number of nodes
            
            
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MajLinksPole</name>
    <message>
        <location filename="maj_links_pole.py" line="283"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="97"/>
        <source>Travel times file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="103"/>
        <source>Extent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="110"/>
        <source>Departure/arrival</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="110"/>
        <source>Departure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="110"/>
        <source>Arrival</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="119"/>
        <source>Intermodality node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="128"/>
        <source>Origin node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="179"/>
        <source>updating pole</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="226"/>
        <source>updating pole...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="276"/>
        <source>Update links pole</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_pole.py" line="299"/>
        <source>
        Read the travel times file &quot;.._temps.txt&quot; computed by Musliw and creates (if they don&apos;t exist) in the network layer fields where intermodaly node and service area node are saved
<byte value="x9"/><byte value="x9"/>        
        Parameters:
            network&#xa0;: network layer (linear objects)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>travel times file: travel times text file ..._temps.txt generated by Musliw
            extent: window for fields update (only links in the window will be updates)
            intermodality node; initial/ final node of intermodality (depends on arrival/departure choice)
            origin node: origin or destination node (depends on arrival/departure choice) in order to determine service areas
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MajLinksTimes</name>
    <message>
        <location filename="maj_links_times.py" line="286"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="98"/>
        <source>Travel times file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="112"/>
        <source>i-node time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="121"/>
        <source>j-node time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="130"/>
        <source>Initial/final waiting time?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="177"/>
        <source>updating ti tj</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="225"/>
        <source>updating ti and tj...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="279"/>
        <source>Update links times</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="104"/>
        <source>Extent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_links_times.py" line="302"/>
        <source>
        Read the travel times file &quot;.._temps.txt&quot; computed by Musliw and creates (if they don&apos;t exist) in the network layer fields where i-node and j-node travel times are saved
<byte value="x9"/><byte value="x9"/>        
        Parameters:
            layer&#xa0;: network layer (linear objects)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>travel times file: travel times text file ..._temps.txt generated by Musliw
            extent: window to select the subset of links (only those inside the window will be updated)
            departure/arrival: departure if &quot;d&quot; in Musliw matrix, arrival if &quot;a&quot;
            i_node time: travel time at i-node field
            j-node time; travel time at j-node field
            initial/final waiting time: in order to take into account or not inital/final waiting time (tatt1)
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Majtitj</name>
    <message>
        <location filename="maj_titj.py" line="296"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="96"/>
        <source>Travel times file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="102"/>
        <source>Musliw time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="109"/>
        <source>Arc time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="118"/>
        <source>Departure/arrival</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="118"/>
        <source>Departure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="118"/>
        <source>Arrival</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="127"/>
        <source>i-node time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="136"/>
        <source>j-node time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="145"/>
        <source>Initial/final waiting time?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="189"/>
        <source>updating ti tj</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="237"/>
        <source>updating ti and tj...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="289"/>
        <source>Update ti tj</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="maj_titj.py" line="312"/>
        <source>
        Read the travel times file &quot;.._temps.txt&quot; computed by Musliw and creates (if they don&apos;t exist) in the network layer fields where i-node and j-node travel times are saved
<byte value="x9"/><byte value="x9"/>        
        Parameters:
            layer&#xa0;: network layer (linear objects)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>travel times file: travel times text file ..._temps.txt generated by Musliw
            musliw time: Musliw travel time field where travel time is saved (&apos;temps&apos; in general)
            arc time: arc travel time
            departure/arrival: departure if &quot;d&quot; in Musliw matrix, arrival if &quot;a&quot;
            i_node time: travel time at i-node field
            j-node time; travel time at j-node field
            initial/final waiting time: in order to take into account or not inital/final waiting time (tatt1)
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MatrixDoubleList</name>
    <message>
        <location filename="matrix_double_liste.py" line="90"/>
        <source>Origins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="98"/>
        <source>Origins node ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="105"/>
        <source>Destinations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="113"/>
        <source>Destinations node ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="120"/>
        <source>Demand</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="128"/>
        <source>Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="137"/>
        <source>Start time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="145"/>
        <source>End time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="153"/>
        <source>Step</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="161"/>
        <source>Departure/Arrival</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="161"/>
        <source>Departure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="161"/>
        <source>Arrival</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="180"/>
        <source>Musliw matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="228"/>
        <source>writing Musliw matrix...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="277"/>
        <source>Musliw matrix double list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="284"/>
        <source>Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="169"/>
        <source>OD label?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_double_liste.py" line="300"/>
        <source>
        Generates a Musliw matrix from two point layers and a period of time (from start time to end time with a step in minutes)
        the script generates a rectangular matrix (NxM od). The first layer (N records) corresponds to origins and the second layer (M records) to destinations
<byte value="x9"/><byte value="x9"/>
        Parameters:
            Origins: origin nodes  (corresponding to nodes layer or the graph )
<byte value="x9"/><byte value="x9"/><byte value="x9"/>Origins node id: Field that contains the node Id of the origin nodes
            Destinations: destination nodes  (corresponding to nodes layer or the graph )
<byte value="x9"/><byte value="x9"/><byte value="x9"/>Destinations node id: Field that contains the node Id of the origin nodes
            Demand: number of passengers for assignment
            Day: number of the day in the calendar (1 first day of the calendar)
            Start time: Beginning of the time period
            Step: Step time in minutes
            Departure/Arrival: Departure (from Start point to end point forward) - Arrival (from end point to start point backward)
            OD label: If True an origin-destination ID will be written combining o and d IDs separated by a &apos;-&apos;
            Musliw matrix: Musliw matrix name (text file with &quot;;&quot; separator 
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MatrixSimpleList</name>
    <message>
        <location filename="matrix_simple_liste.py" line="89"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="97"/>
        <source>Node ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="104"/>
        <source>Demand</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="112"/>
        <source>Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="121"/>
        <source>Start time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="129"/>
        <source>End time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="137"/>
        <source>Step</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="145"/>
        <source>Departure/Arrival</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="145"/>
        <source>Departure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="145"/>
        <source>Arrival</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="172"/>
        <source>Musliw matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="223"/>
        <source>Writing Musliw matrix...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="276"/>
        <source>Musliw matrix simple list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="283"/>
        <source>Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="153"/>
        <source>Diagonal matrix?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="161"/>
        <source>OD label?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_simple_liste.py" line="299"/>
        <source>
        Generates a Musliw matrix from a point layer and a period of time (from start time to end time with a step in minutes)
        the script generates a full square matrix (NxN od) or a diagonal matrix (N od with same origin and same destination)
<byte value="x9"/><byte value="x9"/>
        Parameters:
            Nodes: nodes layer (corresponding to nodes layer or the graph )
<byte value="x9"/><byte value="x9"/><byte value="x9"/>Node id: Field that contains the node Id
            Demand: number of passengers for assignment
            Day: number of the day in the calendar (1 first day of the calendar)
            Start time: Beginning of the time period
            Step: Step time in minutes
            Departure/Arrival: Departure (from Start point to end point forward) - Arrival (from end point to start point backward)
            Diagonal matrix: Check if you want only a digonal matrix instead of a full square matrix
            OD label: If True an origin-destination ID will be written combining o and d IDs separated by a &apos;-&apos;
            Musliw matrix: Musliw matrix name (text file with &quot;;&quot; separator
            
            
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MatrixTable</name>
    <message>
        <location filename="matrix_table.py" line="89"/>
        <source>OD Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="97"/>
        <source>Origin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="104"/>
        <source>Destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="111"/>
        <source>Demand</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="119"/>
        <source>Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="128"/>
        <source>Start time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="136"/>
        <source>End time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="144"/>
        <source>Step</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="152"/>
        <source>Departure/Arrival</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="152"/>
        <source>Departure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="152"/>
        <source>Arrival</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="162"/>
        <source>OD label?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="173"/>
        <source>Musliw matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="219"/>
        <source>Writing Musliw matrix...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="264"/>
        <source>Musliw matrix from table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="271"/>
        <source>Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="matrix_table.py" line="287"/>
        <source>
        Generates a Musliw matrix from a table layer and a period of time (from start time to end time with a step in minutes)
        
<byte value="x9"/><byte value="x9"/>
        Parameters:
            Nodes: nodes layer (corresponding to nodes layer or the graph )
<byte value="x9"/><byte value="x9"/><byte value="x9"/>Origin: Field that contains the node Id of the origin
            Destination: Field that contains the node Id of the destination
            Demand: number of passengers for assignment
            Day: number of the day in the calendar (1 first day of the calendar)
            Start time: Beginning of the time period
            Step: Step time in minutes
            Departure/Arrival: Departure (from Start point to end point forward) - Arrival (from end point to start point backward)
            OD label: If True an origin-destination ID will be written combining o and d IDs separated by a &apos;-&apos;
            Musliw matrix: Musliw matrix name (text file with &quot;;&quot; separator
            
            
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MultimodalGravityIndicators</name>
    <message>
        <location filename="multimodalgravity.py" line="38"/>
        <source>Amenity</source>
        <translation type="unfinished">Aménité</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="39"/>
        <source>Socioeconomic data</source>
        <translation type="unfinished">Donénes socioéconomiques</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="40"/>
        <source>Zone Id</source>
        <translation type="unfinished">Zone ID</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="41"/>
        <source>Population</source>
        <translation type="unfinished">Population</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="42"/>
        <source>Number of time periods</source>
        <translation type="unfinished">Nombre de périodes</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="43"/>
        <source>Output</source>
        <translation type="unfinished">Sortie</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="251"/>
        <source>Multimodal Gravity Indicators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="254"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="263"/>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="37"/>
        <source>Modes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="37"/>
        <source>mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="37"/>
        <source>t0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="37"/>
        <source>modal share</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="multimodalgravity.py" line="37"/>
        <source>Musliw nodes file</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MusliwParam</name>
    <message>
        <location filename="param_musliw.py" line="106"/>
        <source>In vehicle weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="114"/>
        <source>Waiting weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="121"/>
        <source>Individual modes weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="129"/>
        <source>Boarding weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="136"/>
        <source>Individual mode speed factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="143"/>
        <source>Minimum transfer delay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="150"/>
        <source>Maximum transfer delay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="157"/>
        <source>Extra day duration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="166"/>
        <source>Max. individual time budget</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="175"/>
        <source>Maximum generalized time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="184"/>
        <source>Toll weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="191"/>
        <source>Output filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="198"/>
        <source>Output links times?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="198"/>
        <source>No output</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="198"/>
        <source>Without timetable links</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="198"/>
        <source>With timetable links</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="206"/>
        <source>Prohibited U-turns?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="213"/>
        <source>Output paths?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="221"/>
        <source>Output services?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="228"/>
        <source>Output transfers?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="235"/>
        <source>Output node times?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="243"/>
        <source>Algorithm scale?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="252"/>
        <source>Algorithm exponent?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="261"/>
        <source>nb classes?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="270"/>
        <source>Parameters file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="368"/>
        <source>Musliw parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="375"/>
        <source>Computations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="391"/>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="198"/>
        <source>Compact mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="320"/>
        <source>;algorithm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="322"/>
        <source>;max buckets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="323"/>
        <source>;number of days</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="324"/>
        <source>;matrix file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="325"/>
        <source>;turns and transfers files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="326"/>
        <source>;network file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="327"/>
        <source>;generic output file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="328"/>
        <source>;algorithm parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="329"/>
        <source>;algorithm power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="331"/>
        <source>;output services</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="332"/>
        <source>;output travel times</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="333"/>
        <source>;output turns and transfers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="334"/>
        <source>;boarding weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="335"/>
        <source>;individual mode weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="336"/>
        <source>;individual travel time factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="337"/>
        <source>;in-vehicle time weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="338"/>
        <source>;wait time weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="339"/>
        <source>;min transfer time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="340"/>
        <source>;max transfer time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="341"/>
        <source>;max individual travel time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="342"/>
        <source>;toll weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="343"/>
        <source>;output types filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="344"/>
        <source>;max travel cost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="346"/>
        <source>;output isolated links</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="321"/>
        <source>;prohibited U-turns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="330"/>
        <source>;output paths</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="param_musliw.py" line="345"/>
        <source>;output nodes</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NetworksProvider</name>
    <message>
        <location filename="networks_provider.py" line="227"/>
        <source>Networks</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NodesFile</name>
    <message>
        <location filename="fichier_noeuds.py" line="82"/>
        <source>Nodes times output file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="94"/>
        <source>Variable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="111"/>
        <source>Remove initial/final waiting time?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="120"/>
        <source>Nodes indicators file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="214"/>
        <source>ignored element</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="235"/>
        <source>indicators by node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="242"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="103"/>
        <source>Filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeuds.py" line="258"/>
        <source>
        Produce indicators aggregated by node. 
<byte value="x9"/><byte value="x9"/>
        Parameters:
            nodes times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_noeuds.txt)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>variable: The name of the variable for indicator computation (temps (time) by default)
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NodesFileDay</name>
    <message>
        <location filename="fichier_noeud_jour.py" line="83"/>
        <source>Nodes times output file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="95"/>
        <source>Variable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="103"/>
        <source>Filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="111"/>
        <source>Remove initial/final waiting time?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="120"/>
        <source>Nodes indicators file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="216"/>
        <source>ignored element</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="237"/>
        <source>indicators by node and day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="244"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="fichier_noeud_jour.py" line="260"/>
        <source>
        Produce indicators aggregated by node. 
<byte value="x9"/><byte value="x9"/>
        Parameters:
            nodes times ouput file: the Musliw link times  output file (&lt;FILENAME&gt;_noeuds.txt)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>variable: The name of the variable for indicator computation (temps (time) by default)
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PathAnalysis</name>
    <message>
        <location filename="path_analysis.py" line="93"/>
        <source>Arcs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="100"/>
        <source>Result paths Musliw File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="107"/>
        <source>ij</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="114"/>
        <source>Flows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="121"/>
        <source>Arc Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="128"/>
        <source>By lines?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="135"/>
        <source>Encoding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="142"/>
        <source>Output</source>
        <translation type="unfinished">Sortie</translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="298"/>
        <source>Path analysis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="305"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="path_analysis.py" line="320"/>
        <source>
        Intercepts the demand that use on the selected arcs
        The result is a layer that containes arcs from trips using these arcs
        with the selected demand
<byte value="x9"/><byte value="x9"/>        
        Parameters:
            arcs: network layer 
<byte value="x9"/><byte value="x9"/><byte value="x9"/>result paths Musliw file: Result file from Musliw computation containing detailed shortest paths (*_chemins.txt)
            ij: arc ID (combining i-node and j-node ex: m1456-m3256
            Flows: field containing flow values
            arc type: field containig arc_type
            by line: if selected the total flows are computed by lines instead of by arc
            Enconding: Encoding of the Reuslt Musliw file utf_8_sig normally
            output: layer of the slect link analysis
<byte value="x9"/><byte value="x9"/><byte value="x9"/>
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PathIndicators</name>
    <message>
        <location filename="path_indicators.py" line="87"/>
        <source>Path output file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="101"/>
        <source>Remove initial/final waiting time?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="109"/>
        <source>Time based links only?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="119"/>
        <source>Path indicators file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="210"/>
        <source>indicators by path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="217"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="path_indicators.py" line="233"/>
        <source>
        Produce indicators aggregated by OD. This analysis is usefull when you want to study the variation of travel times during a time period
<byte value="x9"/><byte value="x9"/>
        Parameters:
            path ouput file: the Musliw detailed path output file (&lt;FILENAME&gt;_od.txt)
            remove initial/final boarding time: If checked the initial or final waiting time (between the excepted arrival or departure time
            and the real one is substracted from the total travel time
<byte value="x9"/><byte value="x9"/><byte value="x9"/>time based links only: If checked only time based links are analysed
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PrepareGTFS</name>
    <message>
        <location filename="prepare_gtfs.py" line="87"/>
        <source>GTFS source folder </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="95"/>
        <source>GTFS output folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="103"/>
        <source>Network Id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="110"/>
        <source>Extract stop_id?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="117"/>
        <source>Extract formula</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="464"/>
        <source>Prepare GTFS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="471"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="prepare_gtfs.py" line="487"/>
        <source>
        Scan a GTFS Folder and generates a well-formated GTFS consistent with Musliw in particular for lines 
        
        Parameters:
        GTFS source folder: the folder of the GTFS source files
        GTFS destination folder: folder of the Musliw well formated GTFS
        Network id: id in order to differenciate networks (line ID, stop ID,...) (ex: LI and 15696 -&gt; stop_id LI15696
        Extract stop_id: if true the user must write a formula to extract the stop_id from the initial node_id string
        Extract formula: the formula to extract stop_id: (ex: &quot;OCE:StopArea:87256315&quot;) with [-8:] formula -&gt; &quot;OCE:StopArea:87256315&quot;[-8:]=&quot;87256315&quot;
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ReseauTC</name>
    <message>
        <location filename="reseau_tc.py" line="145"/>
        <source>GTFS folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="152"/>
        <source>Calendar start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="159"/>
        <source>Calendar end</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="590"/>
        <source>Musliw timetable network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="555"/>
        <source>Reading stops</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="557"/>
        <source>Reading routes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="559"/>
        <source>Reading trips</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="561"/>
        <source>Reading calendars_dates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="563"/>
        <source>Reading calendars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="565"/>
        <source>Reading stop_times</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="567"/>
        <source>Generating lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="569"/>
        <source>Generation Musliw file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="597"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="614"/>
        <source>
        Generates a Musliw timetable network from GTFS data (using prepare_GTFS script before is recommended)
<byte value="x9"/><byte value="x9"/>        
        Parameters:
            GTFs folder&#xa0;: GTFS folder 
<byte value="x9"/><byte value="x9"/><byte value="x9"/>calendar start: date of the first day of the period
            caldendar_end: dat of the last day of the periode
            musliw_timetable_network: name of the generated Musliw network file
        </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_tc.py" line="166"/>
        <source>Line based network?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ReseauTi</name>
    <message>
        <location filename="reseau_ti.py" line="90"/>
        <source>Road network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="98"/>
        <source>Window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="104"/>
        <source>Direction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="113"/>
        <source>Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="121"/>
        <source>Length</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="129"/>
        <source>i-node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="137"/>
        <source>j-node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="145"/>
        <source>Time category id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="152"/>
        <source>Time period id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="159"/>
        <source>Start time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="166"/>
        <source>End time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="173"/>
        <source>Calendar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="180"/>
        <source>Arc label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="188"/>
        <source>Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="200"/>
        <source>Musliw network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="239"/>
        <source>Writing Musliw network file...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="282"/>
        <source>Musliw individual network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="289"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="reseau_ti.py" line="305"/>
        <source>
        Generates a Musliw network for individual mode (car, walking, cycling,...) from a netowrk layer
<byte value="x9"/><byte value="x9"/>
        Parameters:
            road network: road network layer (linear objects)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>window: area of the generated network (could be a sub area from the whole network layer)
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Routes</name>
    <message>
        <location filename="routes.py" line="87"/>
        <source>Musliw travel times</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="routes.py" line="94"/>
        <source>Output</source>
        <translation type="unfinished">Sortie</translation>
    </message>
    <message>
        <location filename="routes.py" line="213"/>
        <source>Routes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="routes.py" line="220"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="routes.py" line="235"/>
        <source>
        Display shortest paths from a selection of starting or ending arcs and a 
        a Musliw travel times files
<byte value="x9"/><byte value="x9"/>        
        Parameters:
            Mulsiw travel times: Musliw travel times file &quot;*_temps.txt&quot;
<byte value="x9"/><byte value="x9"/><byte value="x9"/>Output: Output layer containing shortest paths traces
<byte value="x9"/><byte value="x9"/><byte value="x9"/>
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ShiftLines</name>
    <message>
        <location filename="decaler_lignes.py" line="84"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="93"/>
        <source>ij</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="104"/>
        <source>Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="113"/>
        <source>Quantitative variable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="121"/>
        <source>Shift variable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="225"/>
        <source>Shift lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="232"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="248"/>
        <source>
        Update a field from a line layer (with superposed geographic links but with different line ids) to produce map layer with shifted links. 
        The algorithm will update an numeric attribute with a number that allows to produce flows maps with shifted lines. For example, if there is two superposed links from A to B with line 1 (100 passangers)
        and line 2 (200passengers) and you want to produce the flow maps of the total number of passengers, 
        the algorithm will update an attribute &quot;shift&quot; that will have 0 for line 1 (no shift) and 100 for line 2.
<byte value="x9"/><byte value="x9"/>
        Parameters:
            network: lines network 
<byte value="x9"/><byte value="x9"/><byte value="x9"/>ij: link id (ij attribute or expression)
            line: line id
            quantitative value: the exprerssion you want to visualize in the flows map (flow variable)
            shift variable: field to be update with the shift value
            
            
        </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="decaler_lignes.py" line="156"/>
        <source>add field </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SimpleMatrix</name>
    <message>
        <location filename="simple_matrix.py" line="87"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="95"/>
        <source>Node ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="102"/>
        <source>Trip start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="108"/>
        <source>Trip end</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="114"/>
        <source>Demand</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="122"/>
        <source>Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="130"/>
        <source>Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="138"/>
        <source>Departure/Arrival</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="138"/>
        <source>Departure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="138"/>
        <source>Arrival</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="150"/>
        <source>Musliw matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="157"/>
        <source>Write Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="157"/>
        <source>Write</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="157"/>
        <source>Append</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="243"/>
        <source>Musliw simple matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="250"/>
        <source>Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="simple_matrix.py" line="266"/>
        <source>
        Generates a Musliw matrix from clicking on 2 nodes to define an origin(1st point)-destination(2nd point)
<byte value="x9"/><byte value="x9"/>
        Parameters:
            Nodes: nodes layer (corresponding to the routing arc layer )
<byte value="x9"/><byte value="x9"/><byte value="x9"/>Node id: Field that contains the node Id
            Trip start: Start point (origin)
            Trips end: End point (destination)
            Demand: number of passengers for assignment
            Day: number of the day in the calendar (1 first day of the calendar)
            Time : Time of earliest departure or latest arrival
            Departure/Arrival: Departure (from Start point to end point forward) - Arrival (from end point to start point backward)
            Write mode: Write erase filname if exists/ Append add trip definition at the end of the file 
            Musliw matrix: Musliw matrix name (text file with &quot;;&quot; separator
            
            
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SpatialAggregation</name>
    <message>
        <location filename="spatial_aggregation.py" line="91"/>
        <source>Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="98"/>
        <source>Id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="105"/>
        <source>Source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="112"/>
        <source>Variable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>Aggregator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>mean</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>sum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="119"/>
        <source>max</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="127"/>
        <source>Output</source>
        <translation type="unfinished">Sortie</translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="218"/>
        <source>Spatial aggregation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="240"/>
        <source>
        Perform a spatial aggregation between 2 layers in order to estimate 
        for example the proportion of population which belongs to a polygon (ex: area &lt;30min)
<byte value="x9"/><byte value="x9"/>        
        Parameters:
            polygons: the polygon layer (ex: iso-value layer)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>id: field containing the polygon id (ex: 30min iso-value)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>source: a polygon layer with a variable to compute (ex: municipalities layer)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>variable: the variable to compute from the source layer (ex: population from mumicipalities layer)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>aggregator: aggregator (min,max, mean, sum) 
<byte value="x9"/><byte value="x9"/><byte value="x9"/>output: the result of aggration layer (containing the same objects as the polygons layer)
        </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="spatial_aggregation.py" line="225"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
</context>
<context>
    <name>Trafic</name>
    <message>
        <location filename="trafic.py" line="95"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="trafic.py" line="101"/>
        <source>Width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="trafic.py" line="108"/>
        <source>Scale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="trafic.py" line="116"/>
        <source>Max angle(degrees)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="trafic.py" line="124"/>
        <source>Min distance(m)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="trafic.py" line="132"/>
        <source>Both directions?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="trafic.py" line="677"/>
        <source>Variable buffer polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="trafic.py" line="684"/>
        <source>Analysis</source>
        <translation type="unfinished">Analyses</translation>
    </message>
    <message>
        <location filename="trafic.py" line="700"/>
        <source>
        Generates variable buffer polygons from a linear layer and a field containing a width variable
<byte value="x9"/><byte value="x9"/>        
        Parameters:
            network: input layer name (linear objects)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>width: width field
<byte value="x9"/><byte value="x9"/><byte value="x9"/>scale: scale factor for width in (m)
<byte value="x9"/><byte value="x9"/><byte value="x9"/>max_angle: maximum angle for nice cuts
<byte value="x9"/><byte value="x9"/><byte value="x9"/>min_distance: smi distance from arcs ends for angle estimation
<byte value="x9"/><byte value="x9"/><byte value="x9"/>Both directions?: check if two ways arc
<byte value="x9"/><byte value="x9"/><byte value="x9"/>Variable buffer polygons: Result layer (polygons proportionnal with proportionnal width)
        </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Updating arcs</name>
    <message>
        <location filename="creer_graphe.py" line="236"/>
        <source>Updating arcs</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
