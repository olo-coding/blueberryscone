
'use strict';

module.exports = function(app, bodyParser, dbModel){

	console.log('controllers/index.js');
	require('./test.js')(app, bodyParser, dbModel);
};