"""
Model exported as python.
Name : Modèle
Group :
With QGIS : 33803
"""

from qgis.core import (
    QgsProcessing,
    QgsProcessingAlgorithm,
    QgsProcessingParameterFile,
    QgsProcessingParameterString,
    QgsProcessingParameterBoolean,
    QgsProcessingParameterFileDestination,
    QgsProcessingParameterEnum,
    QgsExpression,
    QgsExpressionContext,
    QgsExpressionContextScope
)

from qgis.PyQt.QtCore import QCoreApplication
import io


class Musliw_update(QgsProcessingAlgorithm):

    def initAlgorithm(self, config=None):

        self.addParameter(
            QgsProcessingParameterFile(
                'musliw_network_file',
                self.tr('Musliw network file'),
                behavior=QgsProcessingParameterFile.File,
                fileFilter='Fichier texte (*.txt)'
            )
        )

        self.addParameter(
            QgsProcessingParameterEnum(
                'network_field',
                self.tr('Network field'),
                [
                    'inode',
                    'jnode',
                    'time',
                    'length',
                    'line',
                    'service',
                    'start',
                    'end',
                    'calendar',
                    'label',
                    'type',
                    'toll'
                ]
            )
        )

        self.addParameter(
            QgsProcessingParameterString(
                'network_selection',
                self.tr('Network selection'),
                defaultValue='1'
            )
        )

        self.addParameter(
            QgsProcessingParameterBoolean(
                'selection_filter',
                self.tr('Selection filter?'),
                defaultValue=True
            )
        )

        self.addParameter(
            QgsProcessingParameterString(
                'expression',
                self.tr('Expression'),
                defaultValue='0'
            )
        )

        self.addParameter(
            QgsProcessingParameterFileDestination(
                'UpdatedNetworkFile',
                self.tr('Updated network file'),
                fileFilter='*.txt'
            )
        )


    def createExpressionContext(self, e, fields):

        context = QgsExpressionContext()
        scope = QgsExpressionContextScope()

        for name, info in fields.items():

            index = info[0]
            typ = info[1]

            value = e[index]

            if typ == 'float':
                try:
                    value = float(value)
                except:
                    value = None

            scope.setVariable(name, value)

        context.appendScope(scope)

        return context



    def evaluateExpression(self, expression, context):

        exp = QgsExpression(expression)

        if exp.hasParserError():
            raise Exception(exp.parserErrorString())

        result = exp.evaluate(context)

        if exp.hasEvalError():
            raise Exception(exp.evalErrorString())

        return result



    def processAlgorithm(self, parameters, context, feedback):


        network = parameters['musliw_network_file']

        output = parameters['UpdatedNetworkFile']

        field_index = parameters['network_field']

        selection = parameters['network_selection']

        update_expression = parameters['expression']

        filter_active = parameters['selection_filter']


        fields = {
            'inode': (0, 'float'),
            'jnode': (1, 'float'),
            'time': (2, 'float'),
            'length': (3, 'float'),
            'line': (4, 'float'),
            'service': (5, 'float'),
            'start': (6, 'float'),
            'end': (7, 'float'),
            'calendar': (8, 'str'),
            'label': (9, 'str'),
            'type': (10, 'str'),
            'toll': (11, 'float')
        }


        with io.open(network, encoding='utf8') as network_file, \
             io.open(output, 'w', encoding='utf8') as output_file:


            for line in network_file:

                e = line.strip().strip('"').strip("'").split(';')


                # contexte d'expression QGIS
                expr_context = self.createExpressionContext(e, fields)


                # test de sélection
                try:
                    selected = self.evaluateExpression(
                        selection,
                        expr_context
                    )

                except Exception as err:
                    feedback.reportError(
                        self.tr(
                            'Selection expression error: '
                        ) + str(err)
                    )
                    return {}


                new_value = None


                if selected:

                    try:
                        new_value = self.evaluateExpression(
                            update_expression,
                            expr_context
                        )

                    except Exception as err:
                        feedback.reportError(
                            self.tr(
                                'Update expression error: '
                            ) + str(err)
                        )
                        return {}


                    e[field_index] = str(new_value)


                if (not filter_active) or selected:

                    output_file.write(
                        ';'.join(e) + '\n'
                    )


        return {
            'UpdatedNetworkFile': output
        }



    def name(self):
        return 'musliw_network_update'


    def displayName(self):
        return self.tr('Musliw network update')


    def group(self):
        return self.tr('Network')


    def groupId(self):
        return 'Network'


    def tr(self, string):
        return QCoreApplication.translate(
            'Musliw_update',
            string
        )


    def shortHelpString(self):

        return self.tr(
            """
            Update a Musliw network file using QGIS expressions.

            Network selection:
            QGIS expression used to select records.

            Expression:
            QGIS expression used to calculate the new value.
            """
        )
    
    def createInstance(self):
        return Musliw_update()