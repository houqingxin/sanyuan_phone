/***
	数据库操作
	主页列表
**/


var mongodb = require('./db');
var mongo = require('./mongo');    
var Schema = mongodb.mongoose.Schema;

var salesSchema = new Schema({
		title:String,
		template:String
	
});

var sales = mongodb.mongoose.model("mainlist", salesSchema);

module.exports = new mongo(sales);

