var mongo = function(model){
	this.model = model;
};

mongo.prototype.save = function(obj, callback) {
  var instance = new this.model(obj);
  instance.save(function(err){
    callback(err);
  });
};

mongo.prototype.findByIdAndUpdate = function(obj,callback){
  var _id=obj._id;
  var options={new:false}
  delete obj._id;
  console.log("updata obj:" , obj , _id)
  this.model.findOneAndUpdate(_id, obj, options,  function(err,obj){
    callback(err, obj);
  });
}


mongo.prototype.findByName = function(opttion, callback) {
  this.model.findOne(opttion, function(err, obj){
    callback(err, obj);
  });
};

mongo.prototype.find = function(query , callback , other) {
	console.log("数据库查询find条件:" , query)
  this.model.find(query , function(err, obj){
  	console.log("数据库查询错误条件:" , err , obj)
    callback(err, obj , other);
  });
};

mongo.prototype.updateById = function(id ,options , callback){
  var that = this;
	this.model.findOne(id , function(err , doc){
		if(doc){
        for(var i in options){
          doc[i] = options[i]
        }
      console.log("start save !!!!!!!!!!!!!!!!!!")
       doc.save();
    }else{
      console.log("doc empoty;" , this.save)
      that.save(options , function(){})
    }
		
		callback(err , doc);
	});
}

module.exports = mongo ;