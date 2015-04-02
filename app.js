
'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

global.config = require('./config.js');

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('./public'));
require('./controllers')(app, bodyParser);

http.createServer(app).listen(3000, function(){
	console.log('App started');
});

app.get('/', function(req, res){
	res.render('index');
});

var sources = require('./controllers/source');
app.get('/sources', sources.show);

