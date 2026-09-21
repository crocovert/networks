import csv

from qgis.PyQt.QtCore import (
    QCoreApplication,
    QMetaType
)

from qgis.core import (
    QgsProcessing,
    QgsProcessingAlgorithm,
    QgsProcessingParameterFile,
    QgsProcessingParameterExpression,
    QgsProcessingParameterBoolean,
    QgsProcessingParameterFileDestination,
    QgsExpression,
    QgsExpressionContext,
    QgsExpressionContextScope,
    QgsFeature,
    QgsField,
    QgsFields,
    QgsProcessingException
)


class FilterCsvAlgorithm(QgsProcessingAlgorithm):

    INPUT = 'INPUT'
    FILTER = 'FILTER'
    SORT = 'SORT'
    ASCENDING = 'ASCENDING'
    OUTPUT = 'OUTPUT'

    def tr(self, string):
        return QCoreApplication.translate(
            'FilterCsvAlgorithm',
            string
        )

    def createInstance(self):
        return FilterCsvAlgorithm()

    def name(self):
        return 'filtersortcsv'

    def displayName(self):
        return self.tr(
            'Filter and sort CSV file'
        )

    def group(self):
        return self.tr('Utilities')

    def groupId(self):
        return 'Utilities'

    def shortHelpString(self):
        return self.tr(
            'Filter and sort a CSV with a'
            'QGIS expression.'
        )

    # ------------------------------------------------------------------
    # PARAMETRES
    # ------------------------------------------------------------------

    def initAlgorithm(self, config=None):

        self.addParameter(
            QgsProcessingParameterFile(
                self.INPUT,
                self.tr('CSV/TXT File'),
                behavior=QgsProcessingParameterFile.File,
                fileFilter='CSV/TXT (*.csv *.txt)'
            )
        )

        self.addParameter(
            QgsProcessingParameterExpression(
                self.FILTER,
                self.tr('Filter'),
                defaultValue=''
            )
        )

        self.addParameter(
            QgsProcessingParameterExpression(
                self.SORT,
                self.tr('Sort'),
                defaultValue='1'
            )
        )

        self.addParameter(
            QgsProcessingParameterBoolean(
                self.ASCENDING,
                self.tr('Increasing order'),
                defaultValue=True
            )
        )

        self.addParameter(
            QgsProcessingParameterFileDestination(
                self.OUTPUT,
                self.tr('Output File'),
                fileFilter='TXT (*.txt)'
            )
        )

    # ------------------------------------------------------------------
    # CONVERSION DES TYPES
    # ------------------------------------------------------------------

    def convert_value(self, value):
        """
        Convertit automatiquement une valeur CSV vers un type
        utilisable correctement par les expressions QGIS.
        """

        if value == '':
            return None

        # Entier
        try:
            if value.isdigit():
                return int(value)

            if (
                value.startswith('-')
                and value[1:].isdigit()
            ):
                return int(value)

        except Exception:
            raise QgsProcessingException(
                'data type conversion error'
            )

        # Nombre réel
        try:
            # On ne convertit que les valeurs ayant une
            # représentation clairement numérique.
            if '.' in value or ',' in value:

                v = value.replace(',', '.')

                return float(v)

        except Exception:
            raise QgsProcessingException(
                'data type conversion error'
            )

        # Texte
        return value

    # ------------------------------------------------------------------
    # TRAITEMENT
    # ------------------------------------------------------------------

    def processAlgorithm(
        self,
        parameters,
        context,
        feedback
    ):

        input_file = self.parameterAsFile(
            parameters,
            self.INPUT,
            context
        )

        filter_expression = self.parameterAsExpression(
            parameters,
            self.FILTER,
            context
        )

        sort_expression = self.parameterAsExpression(
            parameters,
            self.SORT,
            context
        )

        ascending = self.parameterAsBool(
            parameters,
            self.ASCENDING,
            context
        )

        output_file = self.parameterAsFile(
            parameters,
            self.OUTPUT,
            context
        )

        # ==============================================================
        # 1. LECTURE DU FICHIER
        # ==============================================================

        # On conserve les lignes brutes du fichier.
        #
        # newline='' est important pour éviter que Python
        # modifie les fins de ligne.

        with open(
            input_file,
            'r',
            encoding='utf-8-sig',
            newline=''
        ) as f:

            raw_lines = f.readlines()

        if not raw_lines:

            raise QgsProcessingException(
                'Le fichier est vide.'
            )

        # Première ligne = en-tête
        header_raw = raw_lines[0]

        # --------------------------------------------------------------
        # Lecture de l'en-tête avec csv.reader
        # --------------------------------------------------------------

        header_reader = csv.reader(
            [header_raw],
            delimiter=';',
            quotechar='"',
            doublequote=True
        )

        header = next(header_reader)

        if not header:

            raise QgsProcessingException(
                self.tr('Unable to read header.')
            )

        feedback.pushInfo(
            self.tr('Read fields : ')
            + ', '.join(header)
        )

        # Vérification des noms de champs
        if len(set(header)) != len(header):

            raise QgsProcessingException(
                self.tr('Warning: Duplicate fields.')
            )

        # ==============================================================
        # 2. CREATION DES CHAMPS QGIS
        # ==============================================================

        fields = QgsFields()

        # Tous les champs sont initialement en texte.
        # Les valeurs de chaque ligne seront converties
        # individuellement avant d'être placées dans la feature.

        for name in header:

            fields.append(
                QgsField(
                    name,
                    QMetaType.Type.QString
                )
            )

        # ==============================================================
        # 3. EXPRESSIONS
        # ==============================================================

        filter_exp = None
        sort_exp = None

        if filter_expression:

            filter_exp = QgsExpression(
                filter_expression
            )

            if filter_exp.hasParserError():

                raise QgsProcessingException(
                    'Erreur de syntaxe dans le filtre : '
                    + filter_exp.parserErrorString()
                )

        if sort_expression:

            sort_exp = QgsExpression(
                sort_expression
            )

            if sort_exp.hasParserError():

                raise QgsProcessingException(
                    self.tr('Sort syntax error : ')
                    + sort_exp.parserErrorString()
                )

        feedback.pushInfo(
            self.tr('Filter : ')
            + str(filter_expression)
        )

        feedback.pushInfo(
            self.tr('Sort : ')
            + str(sort_expression)
        )

        # ==============================================================
        # 4. CONTEXTE D'EXPRESSION
        # ==============================================================

        expression_context = QgsExpressionContext()

        scope = QgsExpressionContextScope(
            'CSV'
        )

        expression_context.appendScope(
            scope
        )

        # ==============================================================
        # 5. TRAITEMENT DES LIGNES
        # ==============================================================

        selected_rows = []

        # On ignore la première ligne (en-tête)
        data_lines = raw_lines[1:]

        total = len(data_lines)

        for index, raw_line in enumerate(data_lines):

            if feedback.isCanceled():

                break

            # ----------------------------------------------------------
            # Lecture de la ligne CSV
            # ----------------------------------------------------------

            try:

                reader = csv.reader(
                    [raw_line],
                    delimiter=';',
                    quotechar='"',
                    doublequote=True
                )

                row = next(reader)

            except Exception as e:

                raise QgsProcessingException(
                    self.tr('Erreur de lecture à la ligne ')+
                    f'{index + 2} : {e}'
                )

            # ----------------------------------------------------------
            # Vérification du nombre de colonnes
            # ----------------------------------------------------------

            if len(row) != len(header):

                feedback.reportError(
                    self.tr('Ligne')+ f'{index + 2} : '
                    f'{len(row)} '+self.tr('colonnes trouvées, ')+
                    f'{len(header)} '+self.tr('attendues. ')+
                    f'Ligne ignorée.'
                )

                continue

            # ----------------------------------------------------------
            # Conversion des valeurs
            # ----------------------------------------------------------

            values = [
                self.convert_value(value)
                for value in row
            ]

            # ----------------------------------------------------------
            # Création de la feature temporaire
            # ----------------------------------------------------------

            feature = QgsFeature()

            feature.setFields(fields)

            feature.setAttributes(values)

            # Le contexte porte maintenant sur cette ligne.
            expression_context.setFeature(
                feature
            )

            # ----------------------------------------------------------
            # FILTRE
            # ----------------------------------------------------------

            if filter_exp:

                result = filter_exp.evaluate(
                    expression_context
                )

                if filter_exp.hasEvalError():

                    raise QgsProcessingException(
                        self.tr('Erreur d’évaluation du filtre ')+
                        self.tr('à la ligne')+f' {index + 2} : '
                        + filter_exp.evalErrorString()
                    )

                if not bool(result):

                    continue

            # ----------------------------------------------------------
            # TRI
            # ----------------------------------------------------------

            if sort_exp:

                sort_value = sort_exp.evaluate(
                    expression_context
                )

                if sort_exp.hasEvalError():

                    raise QgsProcessingException(
                        self.tr('Erreur d’évaluation du tri ')+
                        self.tr('à la ligne')+f' {index + 2} : '
                        + sort_exp.evalErrorString()
                    )

            else:

                sort_value = None

            # ----------------------------------------------------------
            # CONSERVATION DE LA LIGNE BRUTE
            # ----------------------------------------------------------

            # IMPORTANT :
            #
            # On ne conserve PAS row pour l'écriture.
            # On conserve raw_line.
            #
            # Ainsi le fichier de sortie reprend exactement
            # les caractères de la ligne d'origine.

            selected_rows.append(
                (
                    sort_value,
                    index,
                    raw_line
                )
            )

            # ----------------------------------------------------------
            # Progression
            # ----------------------------------------------------------

            if total:

                feedback.setProgress(
                    int(
                        100
                        * (index + 1)
                        / total
                    )
                )

        # ==============================================================
        # 6. TRI
        # ==============================================================

        if sort_exp:

            try:

                selected_rows.sort(
                    key=lambda item: (
                        item[0] is None,
                        item[0]
                    ),
                    reverse=not ascending
                )

            except TypeError:

                # Si des valeurs de types incompatibles
                # apparaissent, on effectue le tri sur leur
                # représentation textuelle.

                selected_rows.sort(
                    key=lambda item: (
                        item[0] is None,
                        str(item[0])
                    ),
                    reverse=not ascending
                )

        # ==============================================================
        # 7. ECRITURE
        # ==============================================================

        with open(
            output_file,
            'w',
            encoding='utf-8',
            newline=''
        ) as f:

            # ----------------------------------------------------------
            # En-tête original
            # ----------------------------------------------------------

            f.write(header_raw)

            # ----------------------------------------------------------
            # Lignes sélectionnées
            # ----------------------------------------------------------

            for sort_value, index, raw_line in selected_rows:

                f.write(raw_line)

        # ==============================================================
        # 8. INFORMATIONS
        # ==============================================================

        feedback.pushInfo(
            f'{len(selected_rows)} '+self.tr('ligne(s) sélectionnée(s).')
        )

        feedback.pushInfo(
            self.tr('Fichier créé')+f' : {output_file}'
        )

        return {
            self.OUTPUT: output_file
        }