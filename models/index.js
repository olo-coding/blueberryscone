
'use strict';

var db = [];
var fs = require("fs");
var path      = require("path");
var Sequelize = require('sequelize');
var sequelize_options = {
      dialect: 'mysql',
      host: global.config.blueberryscone_db.host,
      port: 3306,
      pool: { 
        maxConnections: global.config.blueberryscone_db.max_connections
      },
      dialectOptions: {
      }
};
var sequelize;
sequelize = new Sequelize(global.config.blueberryscone_db.name, global.config.blueberryscone_db.user, global.config.blueberryscone_db.password, sequelize_options);


var model = sequelize["import"](path.join(__dirname,'/test'));
db[model.name] = model;


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;