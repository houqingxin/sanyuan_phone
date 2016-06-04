

var EventBus = function(){
 	this.listeners = {};
}

EventBus.prototype.on = function(event , fn){
 	if(!this.listeners[event]){
	    	
		this.listeners[event] = [];
	}

	if(fn){
		this.listeners[event].push(fn);
	}else{
		console.log("WARNING: invalid callback for event " + event + ". callback is undefine or null" );
	}
}

EventBus.prototype.emit = function(event){
	var callbacks = this.listeners[event] ;
	if(callbacks){
		for(var i = 0; i < callbacks.length; i++ ){
        	var args = Array.prototype.slice.call(arguments, 1);
        	callbacks[i].apply(null,args);
        }
	}
}

export default EventBus;