
'use strict';

module.exports = function(app, bodyParser, dbModel){
	console.log('controllers/index.js');
	require('./controller.js')(app, bodyParser, dbModel);
};
