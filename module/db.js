/***
	数据库链接模块
**/
var config = require("./config");
/*
var dbSql = {};
	dbSql.mongoose = require("mongoose");
	dbSql.Schema = new dbSql.mongoose.Schema({
		name:String,
		tel:String,
		address:String
	});
	dbSql.db = dbSql.mongoose.connect(config.db.host);

module.exports = dbSql;
*/

var mongoose = require('mongoose');
mongoose.connect(config.db.host);
exports.mongoose = mongoose;
