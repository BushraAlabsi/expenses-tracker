var express = require('express');
var db = require('./db');

// Middleware
var parser = require('body-parser');
var path =require('path');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// parsing
app.use(parser.json());
app.use(parser.urlencoded({extended:true}))
// Set up our routes
app.use('/', router); 

//Serve the client files
app.use(express.static(path.join(__dirname , '../')));
app.get('/', function (req, res) {
	res.render("index");	
});

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

