
'use strict';

var  models;

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
};