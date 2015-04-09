
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

var sourceMock = require('./models/source_mock');
var sourceList = sourceMock().getSourceList();
app.get('/', function(req, res){
  res.render('index', {
    list: sourceList || [],
  });
});

app.get('/sources', function (req, res) {
  res.send(sourceList);
});
