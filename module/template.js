/***
	数据库操作
**/


var mongodb = require('./db');
var mongo = require('./mongo');    
var Schema = mongodb.mongoose.Schema;

var salesSchema = new Schema({
		name:String,
		template:String
	
});

var sales = mongodb.mongoose.model("openIDmsg", salesSchema);

module.exports = new mongo(sales);

