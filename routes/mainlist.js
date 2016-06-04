var mainlist = require('../module/mainlist.js')
var url = require('url');
var querystring = require("querystring")

var getStatic = function(res){
	 var json = [
    	{
    		title:"闪传功能1",
    		template:"weibo"
    	},
    	{
    		title:"闪传功能2",
    		template:"template2"
    	},
    	{
    		title:"闪传功能3",
    		template:"template3"
    	},
    	{
    		title:"闪传功能4",
    		template:"template4"
    	},
    	{
    		title:"闪传功能5",
    		template:"template5"
    	},
    	{
    		title:"闪传功能6",
    		template:"template6"
    	}
    ]

   // var str = JSON.stringify(obj);
    
	res.send(json)
}

module.exports.getlist = function(req , res){
	getStatic(res);
	return 
	mainlist.find({} , function(err , doc){
    	//console.log("error:error:" , doc.template)
    	if(err){
    		res.send('')
    	}else{
    		res.send(doc)
    	}
    })
}

module.exports.setlist = function(req , res){
	var urlParam = url.parse(req.url);
	var json = querystring.parse(urlParam.query);
	var obj = {
		title:json.title,
		template:json.template
	}
    mainlist.updateById({template:json.template} ,obj ,  function(err){
    	console.log("error:error:" , err)
    })
}

