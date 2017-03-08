# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'ui_isopoly.ui'
#
# Created: Thu Apr 16 16:55:51 2015
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

class Ui_Isopoly(object):
    def setupUi(self, Isopoly):
        Isopoly.setObjectName(_fromUtf8("Isopoly"))
        Isopoly.resize(449, 340)
        self.buttonBox = QtGui.QDialogButtonBox(Isopoly)
        self.buttonBox.setGeometry(QtCore.QRect(100, 300, 341, 32))
        self.buttonBox.setOrientation(QtCore.Qt.Horizontal)
        self.buttonBox.setStandardButtons(QtGui.QDialogButtonBox.Cancel|QtGui.QDialogButtonBox.Ok)
        self.buttonBox.setObjectName(_fromUtf8("buttonBox"))
        self.lineEdit = QtGui.QLineEdit(Isopoly)
        self.lineEdit.setGeometry(QtCore.QRect(130, 70, 241, 20))
        self.lineEdit.setObjectName(_fromUtf8("lineEdit"))
        self.lineEdit_2 = QtGui.QLineEdit(Isopoly)
        self.lineEdit_2.setGeometry(QtCore.QRect(130, 110, 241, 20))
        self.lineEdit_2.setObjectName(_fromUtf8("lineEdit_2"))
        self.lineEdit_3 = QtGui.QLineEdit(Isopoly)
        self.lineEdit_3.setGeometry(QtCore.QRect(130, 160, 241, 20))
        self.lineEdit_3.setObjectName(_fromUtf8("lineEdit_3"))
        self.label = QtGui.QLabel(Isopoly)
        self.label.setGeometry(QtCore.QRect(20, 70, 101, 16))
        self.label.setObjectName(_fromUtf8("label"))
        self.label_2 = QtGui.QLabel(Isopoly)
        self.label_2.setGeometry(QtCore.QRect(20, 110, 101, 16))
        self.label_2.setObjectName(_fromUtf8("label_2"))
        self.label_3 = QtGui.QLabel(Isopoly)
        self.label_3.setGeometry(QtCore.QRect(20, 160, 101, 16))
        self.label_3.setObjectName(_fromUtf8("label_3"))
        self.groupBox = QtGui.QGroupBox(Isopoly)
        self.groupBox.setGeometry(QtCore.QRect(130, 230, 241, 61))
        self.groupBox.setObjectName(_fromUtf8("groupBox"))
        self.radioButton = QtGui.QRadioButton(self.groupBox)
        self.radioButton.setGeometry(QtCore.QRect(10, 30, 82, 17))
        self.radioButton.setObjectName(_fromUtf8("radioButton"))
        self.radioButton_2 = QtGui.QRadioButton(self.groupBox)
        self.radioButton_2.setGeometry(QtCore.QRect(150, 30, 82, 17))
        self.radioButton_2.setChecked(True)
        self.radioButton_2.setObjectName(_fromUtf8("radioButton_2"))
        self.label_4 = QtGui.QLabel(Isopoly)
        self.label_4.setGeometry(QtCore.QRect(20, 30, 101, 16))
        self.label_4.setObjectName(_fromUtf8("label_4"))
        self.lineEdit_5 = QtGui.QLineEdit(Isopoly)
        self.lineEdit_5.setGeometry(QtCore.QRect(130, 200, 311, 20))
        self.lineEdit_5.setObjectName(_fromUtf8("lineEdit_5"))
        self.pushButton = QtGui.QPushButton(Isopoly)
        self.pushButton.setGeometry(QtCore.QRect(10, 200, 111, 23))
        self.pushButton.setObjectName(_fromUtf8("pushButton"))
        self.spinBox = QtGui.QSpinBox(Isopoly)
        self.spinBox.setGeometry(QtCore.QRect(130, 30, 42, 22))
        self.spinBox.setMinimum(1)
        self.spinBox.setMaximum(3)
        self.spinBox.setObjectName(_fromUtf8("spinBox"))

        self.retranslateUi(Isopoly)
        QtCore.QObject.connect(self.buttonBox, QtCore.SIGNAL(_fromUtf8("accepted()")), Isopoly.accept)
        QtCore.QObject.connect(self.buttonBox, QtCore.SIGNAL(_fromUtf8("rejected()")), Isopoly.reject)
        QtCore.QMetaObject.connectSlotsByName(Isopoly)

    def retranslateUi(self, Isopoly):
        Isopoly.setWindowTitle(_translate("Isopoly", "Isolines generation", None))
        self.label.setText(_translate("Isopoly", "Min:", None))
        self.label_2.setText(_translate("Isopoly", "Max:", None))
        self.label_3.setText(_translate("Isopoly", "Step:", None))
        self.groupBox.setTitle(_translate("Isopoly", "Object type", None))
        self.radioButton.setText(_translate("Isopoly", "Polyline", None))
        self.radioButton_2.setText(_translate("Isopoly", "Polygon", None))
        self.label_4.setText(_translate("Isopoly", "Band:", None))
        self.pushButton.setText(_translate("Isopoly", "Save as...", None))

