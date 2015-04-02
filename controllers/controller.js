/*jslint node: true */
/*jslint nomen: true */
'use strict';

var sourceMock = require('../models/source_mock');
var builder = require('../models/source_builder');

var sourceBuilder = builder(sourceMock());

/**
 * Get the result with json format for the request.
 */
var getSource = function(req, res) {
	var result = sourceBuilder.build(req.params.id);
  if (!result) {
    return res.status(404).end();
  } else {
    res.contentType('application/json');
    res.send(JSON.stringify(result));
  }
};

module.exports = function(app, bodyParser, dbModels) {
	app.get('/source/:id', getSource);
};
