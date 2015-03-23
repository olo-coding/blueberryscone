
'use strict';

var config = {};

config.blueberryscone_db = {};

config.blueberryscone_db.host = process.env.BLUEBERRYSCONE_DB_HOST || 'localhost';
config.blueberryscone_db.user = process.env.BLUEBERRYSCONE_DB_USER || 'root';
config.blueberryscone_db.password = process.env.BLUEBERRYSCONE_DB_PASSWORD ||'mega2011';
config.blueberryscone_db.name = process.env.BLUEBERRYSCONE_DB_NAME ||'blueberryscone';
config.blueberryscone_db.max_connections = process.env.BLUEBERRYSCONE_DB_MAX_CONNECTIONS || 10;

module.exports = config;