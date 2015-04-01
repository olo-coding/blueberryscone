/*jslint node: true */
/*jslint nomen: true */
'use strict';

var models;

var source = require('../models/source_mock');
var mock = source();

/*
	get source & entities

	by Rachel
*/
var getSource = function(req, res) {

	var result = {}, entitiyMap, entityArray = [];

	// 1. search source

	// 2. create JSON object
	result.source = mock.getSource('sample');

	entitiyMap = mock.getEntityMap();
	entitiyMap.forEach(function(value, key) {
    	entityArray.push({name: key, url: value.url});
	});
	result.entity = entityArray;

	// 3. return JSON
	res.contentType('application/json');
	res.send(JSON.stringify(result));
};

/*
	global module
*/
module.exports = function(app, bodyParser, dbModels){

	models = dbModels;

	//
	app.get('/test/db', function(req, res){

		console.log('/test/db in');

		models.Test.find({
				where: {id: '1'}
			}).complete(function(err, testObj){
				console.log('TEST data: ' + testObj.title);
			});

		res.send('TEST DB select success!');
	});

	// 
	app.get('/source', getSource);
};