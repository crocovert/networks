# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'ui_reseaux.ui'
#
# Created: Mon Sep 15 11:17:16 2014
#      by: PyQt4 UI code generator 4.11.1
#
# WARNING! All changes made in this file will be lost!

from PyQt4 import QtCore, QtGui

try:
    _fromUtf8 = QtCore.QString.fromUtf8
except AttributeError:
    def _fromUtf8(s):
        return s

try:
    _encoding = QtGui.QApplication.UnicodeUTF8
    def _translate(context, text, disambig):
        return QtGui.QApplication.translate(context, text, disambig, _encoding)
except AttributeError:
    def _translate(context, text, disambig):
        return QtGui.QApplication.translate(context, text, disambig)

class Ui_reseaux(object):
    def setupUi(self, reseaux):
        reseaux.setObjectName(_fromUtf8("networks"))
        reseaux.resize(400, 119)
        self.buttonBox = QtGui.QDialogButtonBox(reseaux)
        self.buttonBox.setGeometry(QtCore.QRect(20, 70, 301, 32))
        self.buttonBox.setOrientation(QtCore.Qt.Horizontal)
        self.buttonBox.setStandardButtons(QtGui.QDialogButtonBox.Cancel|QtGui.QDialogButtonBox.Ok)
        self.buttonBox.setObjectName(_fromUtf8("buttonBox"))
        self.lineEdit = QtGui.QLineEdit(reseaux)
        self.lineEdit.setGeometry(QtCore.QRect(80, 20, 113, 21))
        self.lineEdit.setObjectName(_fromUtf8("lineEdit"))
        self.label = QtGui.QLabel(reseaux)
        self.label.setGeometry(QtCore.QRect(30, 20, 46, 13))
        self.label.setObjectName(_fromUtf8("label"))
        self.checkBox = QtGui.QCheckBox(reseaux)
        self.checkBox.setGeometry(QtCore.QRect(80, 50, 300, 17))
        self.checkBox.setObjectName(_fromUtf8("checkBox"))

        self.retranslateUi(reseaux)
        QtCore.QObject.connect(self.buttonBox, QtCore.SIGNAL(_fromUtf8("accepted()")), reseaux.accept)
        QtCore.QObject.connect(self.buttonBox, QtCore.SIGNAL(_fromUtf8("rejected()")), reseaux.reject)
        QtCore.QMetaObject.connectSlotsByName(reseaux)

    def retranslateUi(self, reseaux):
        reseaux.setWindowTitle(_translate("networks", "Build graph", None))
        self.label.setText(_translate("networks", "Prefix:", None))
        self.checkBox.setText(_translate("networks", "Load node layer in active map", None))

