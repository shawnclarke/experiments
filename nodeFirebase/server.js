var express = require('express'); //import express 
var app = express();
var firebase = require('firebase');
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAeAijlkTXJRaXBI5lvK00NBwylZf8wXSY",
    authDomain: "h2oclock.firebaseapp.com",
    databaseURL: "https://h2oclock.firebaseio.com",
    projectId: "h2oclock",
    storageBucket: "h2oclock.appspot.com",
    messagingSenderId: "305979491314",
    appId: "1:305979491314:web:e4ca2f69225af1c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize Cloud Firestore through Firebase
 
  var db = firebase.firestore();

//to handle HTTP get request
/* app.get('/', function (req, res) {
  console.log("Get Request");
  res.send("Get Request ha ha");
}); */

app.get('/', function (req, res) {
  
    console.log("HTTP Get Request");
    res.send("HTTP GET Request");
    //Insert key,value pair to database
    //firebase.database().ref('/TestMessages').set({TestMessage: 'GET Request'});

    
  });

  db.collection("users").doc("eDBm5tgcsCmvnjXqJWBa")
  .onSnapshot(function(doc) {
      console.log("Current data: ", doc.data());
  });

  db.collection("users").doc("eDBm5tgcsCmvnjXqJWBa").collection("schedule").doc("TjDjKPsXt799GxYhN1BB")
  .onSnapshot(function(doc) {
      console.log("Current data: ", doc.data());
  });

var fs = require('fs');

try {  
    var data = fs.readFileSync('/id.txt', 'utf8');
    console.log(data);    
} catch(e) {
    console.log('Error:', e.stack);
}

//start server on port: 8080
var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("server listening at http://%s:%s", host, port);
});


