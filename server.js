
Conversation opened. 1 unread message.

Skip to content
Using Gmail with screen readers
1 of 7,694
Fwd:
Inbox

supriya sonawane
8:27 PM (1 minute ago)
to shrutisingh082000, me, snsandhya9923



---------- Forwarded message ---------
From: supriya sonawane <supriyasanjays@gmail.com>
Date: Wed, Dec 28, 2022 at 5:32 PM
Subject:
To: patilrajashri1712@gmail.com <patilrajashri1712@gmail.com>


var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");


//server configuration
app.use(express.static(path.join(__dirname,'public')));

 app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});
 

app.get('/hello', function (req, res) {
  console.log("CAlling rest api");
  var person={firstName:'Ravi',lastName:'Tambade',age:43};
  res.send(person);
});

 
var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8888", host, port)
})
