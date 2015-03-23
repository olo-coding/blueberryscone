
'use strict';

module.exports = function(sequelize, Sequelize) {

	var Test = sequelize.define('Test', {
		id: {
			autoIncrement: true,
			type: Sequelize.BIGINT
		},
		title: Sequelize.STRING
	},
	{
		freezeTableName: true,
		timestamps: false,
		tableName: 'test'
	});

	return Test;
};