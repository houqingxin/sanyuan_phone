import Config from './config.js'
export default {
	run (self , callback) {
		var start = function(){
			
			if(Config.Runtime.connect){
				callback.call(self);
				return;
			}

			setTimeout(function(){
				if(Config.Runtime.connect){
					callback.call(self);
				}else{
					start()
				}
			} , 200)
		}
		
		start();
		
	}
}