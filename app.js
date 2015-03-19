
'use strict';

//
var http = require('http');
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

//
app.set('view engine', 'jade');
app.set('views', './views');

//
http.createServer(app).listen(3000, function(){
	console.log('App started');
});

//
app.get('/', function(req, res){
	res.render('index');
});
