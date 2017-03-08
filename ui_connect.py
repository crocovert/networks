# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'connect.ui'
#
# Created: Thu Sep 18 11:53:58 2014
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

class Ui_Connect(object):
    def setupUi(self, Connect):
        Connect.setObjectName(_fromUtf8("Connect"))
        Connect.resize(400, 174)
        self.buttonBox = QtGui.QDialogButtonBox(Connect)
        self.buttonBox.setGeometry(QtCore.QRect(50, 120, 341, 32))
        self.buttonBox.setOrientation(QtCore.Qt.Horizontal)
        self.buttonBox.setStandardButtons(QtGui.QDialogButtonBox.Cancel|QtGui.QDialogButtonBox.Ok)
        self.buttonBox.setObjectName(_fromUtf8("buttonBox"))
        self.comboBox = QtGui.QComboBox(Connect)
        self.comboBox.setGeometry(QtCore.QRect(130, 30, 261, 22))
        self.comboBox.setObjectName(_fromUtf8("comboBox"))
        self.lineEdit = QtGui.QLineEdit(Connect)
        self.lineEdit.setGeometry(QtCore.QRect(130, 80, 113, 20))
        self.lineEdit.setObjectName(_fromUtf8("lineEdit"))
        self.label = QtGui.QLabel(Connect)
        self.label.setGeometry(QtCore.QRect(20, 30, 101, 16))
        self.label.setObjectName(_fromUtf8("label"))
        self.label_2 = QtGui.QLabel(Connect)
        self.label_2.setGeometry(QtCore.QRect(20, 80, 101, 16))
        self.label_2.setObjectName(_fromUtf8("label_2"))

        self.retranslateUi(Connect)
        QtCore.QObject.connect(self.buttonBox, QtCore.SIGNAL(_fromUtf8("accepted()")), Connect.accept)
        QtCore.QObject.connect(self.buttonBox, QtCore.SIGNAL(_fromUtf8("rejected()")), Connect.reject)
        QtCore.QMetaObject.connectSlotsByName(Connect)

    def retranslateUi(self, Connect):
        Connect.setWindowTitle(_translate("Connect", "Connect points", None))
        self.lineEdit.setText(_translate("Connect", "500", None))
        self.label.setText(_translate("Connect", "Point layer:", None))
        self.label_2.setText(_translate("Connect", "Search radius:", None))

