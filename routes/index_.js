var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var mainlist = require("./mainlist")
var template = require('./template.js')
/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
	res.send("f")
});
/**读取主页列表**/

router.get('/list' , function(req , res){
	mainlist.getlist(req , res);
})

/**设置主页列表**/
router.get('/setlist' , function(req , res){
	mainlist.setlist(req , res);
})

router.get('/template' , function(req, res, next){
	console.log("get gemplate");
	template.getTemplate(req , res);
})
/*
router.get('/list' , function(req, res, next){
	console.log("get list:");
	
    var json = [
    	{
    		title:"闪传功能1",
    		template:"weibo"
    	},
    	{
    		title:"闪传功能2",
    		template:"template2"
    	}
    ]

   // var str = JSON.stringify(obj);
    
	res.send(json)
})
*/

router.post('/upload', multipartMiddleware , function(req, res, next) {
	
	console.log("upload express ##########################:")
	template.savepage(req , res)
});

module.exports = router;
