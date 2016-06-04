var template = require('../module/template.js')
var url = require('url');
var querystring = require("querystring")
module.exports.getlist = function(req , res){
	template.find({} , function(err , doc){
    	//console.log("error:error:" , doc.template)
    	if(err){
    		res.send('')
    	}else{
    		res.send(doc)
    	}
    })
}

module.exports.getTemplate = function(req , res){
	var urlParam = url.parse(req.url);
	var json = querystring.parse(urlParam.query);
    console.log("get temlate json:" , json)
	template.findByName({name:json.name} , function(err , doc){
    	
        if(doc){
            res.send(doc.template)
            console.log("error:error:" , doc.template)
        }else{
            res.send("not found !")
        }
    })
}

module.exports.savepage = function(req , res){
	//var urlParam = url.parse(req.url);
	//var json = querystring.parse(urlParam.query);
	var obj = {
		name:req.body.templeName,
		template:req.body.filename
	}
    console.log("save json:" , obj)
    template.updateById({name:req.body.templeName} ,obj ,  function(err){
    	console.log("error:error:" , err)
    })
	
	res.send('succ')
}

