/*jslint node: true */
/*jslint nomen: true */
'use strict';

var models;

var sourceMock = require('../models/source_mock');
var builder = require('../models/source_builder');

var sourceBuilder = builder(sourceMock());

/**
 * Get the result with json format for the request.
 */
var getSource = function(req, res) {
	var result = sourceBuilder.build('sample');

	res.contentType('application/json');
	res.send(JSON.stringify(result));
};

module.exports = function(app, bodyParser, dbModels) {
	models = dbModels;

	app.get('/test/db', function(req, res){

		console.log('/test/db in');

		models.Test.find({
				where: {id: '1'}
			}).complete(function(err, testObj){
				console.log('TEST data: ' + testObj.title);
			});

		res.send('TEST DB select success!');
	});

	app.get('/source', getSource);
};
