/*
 * Copyright (c) 2014-2018 MKLab. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

const xmi21reader = require('./xmi21-reader')
const xmi21writer = require('./xmi21-writer')
require('./uml2-import')
require('./uml2-export')

const XMI_FILE_FILTERS = [
  {name: 'XMI Files', extensions: ['xmi']},
  {name: 'All Files', extensions: ['*']}
]

function _handleXMI21Import (fullPath) {
  if (fullPath) {
    xmi21reader.loadFromFile(fullPath)
  } else {
    var files = app.dialogs.showOpenDialog('Select a XMI File (.xmi)', null, XMI_FILE_FILTERS)
    if (files && files.length > 0) {
      try {
        xmi21reader.loadFromFile(files[0])
      } catch (err) {
        app.dialogs.showErrorDialog('Failed to load the file.', err)
        console.log(err)
      }
    }
  }
}

function _handleXMI21Export (fullPath) {
  if (fullPath) {
    xmi21writer.saveToFile(fullPath)
  } else {
    var _filename = app.project.getProject().name
    var filename = app.dialogs.showSaveDialog('Export Project As XMI', _filename + '.xmi', XMI_FILE_FILTERS)
    if (filename) {
      xmi21writer.saveToFile(filename)
    }
  }
}

function init () {
  app.commands.register('xmi:import', _handleXMI21Import)
  app.commands.register('xmi:export', _handleXMI21Export)
}

exports.init = init
staruml-xmi/main.js

websevice DigitalLibrary("http://www.mydigitallibrary.com/schema/test")
{
	void displayBookDetails(string bookId, string author, string name, float price,int trackNo, string status, string edition, string date0fPurchase);
	void updateStatus(string bookId, string date0fPurchase, string Status, string name);
	string search Book(stringBookId, stirng name, string author);
	string verifyMember(string memberId, string memberName);
	string issueBook(string memberId, int noBookIssued, int maxBookLimit);
	float calculateFine(string memberId, string date0fPurschase, string date, string type);
	void createBill(int billNo, string memberId, float amount);
	void returnBook(string memberId, string bookId, string status);
	void createTransaction(string memberId, string BookId, int transId, string dateOfIssue, string dueDate);
	void deleteTransaction(string memberId, string bookId, int transId, string dateOfIssue, string dueDate);
	void retrieveTransaction(string memberId, strig bookId, int transId, string dateOfIssue, string dueDate);
	string retrieveMember(string memberId, int phone, string memberName, string type);
	void increaseBookIssued(string memberId, string type,int noBookIssued, int maxBookLimit);
	void decreaseBookIssued(string memberId, string type,int noBookIssued, int maxBookLimit);
	void payBill(int billNo, string memberId, float amount);
	void billCreate(int billNo, string memberId,float amount);
	void billUpdate(int billNo, string memberId,float amount, string date);

}

class Book
  {
        int bookId;
        string author;
        string name;
        float price;
        int trackNo;
        string status;
        string edition;
        string dateOfPurshase;
  }

class Librarian
 {
     string memberName;
     string password;
  }

class Transaction
 {
     int transId;
     int memberId;
     int bookId;
     string dateOfIssue;
     string dueDate;
  }


class MemberRecord
 {
    int memerId;
    string type;
    string dateOfMembership;
    string noBookIssued;
    int maxBooLimit;
    string name;
    string address;
    int phoneNo;
  }

class Bill
 {
   int billNo;
   string date;
   int memberId;
   float amount;
  }
