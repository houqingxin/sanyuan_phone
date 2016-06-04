export default {
	
	getDirection () {
		if(this.endPos.x >0){
			return 'r';
		}else{
			return 'l';
		}
	},
	
	getAllLink () {
		return [
		        	'machineRoom',
		        	'equipmentCabinet',
		        	'InstabusEIB'
		        ]
	},
	
	setLink (path , link) {
		const d = this.getDirection();
		for(var i=0 ; i<link.length;i++){
			if(path == link[i])break;
		}
		console.log(" d i:" , d , i)
		if((i == 0 && d=='r') || (i == link.length -1 && d=='l')){
			return ;
		}else if(d=='r'){
			router.go(link[i-1]);
		}else if(d=='l'){
			router.go(link[i+1]);
		}
	},
	
	getAngle (x1 , y1 , x2 , y2) {
		 var x = Math.abs(x1 - x2);
	     var y = Math.abs(y1 - y2);
	     var z = Math.sqrt(x*x + y*y);
	     return  Math.round((Math.asin(y / z) / Math.PI*180));
	},
	
	touchEnd (path , e) {
	//	e.preventDefault();
		const angle = this.getAngle(this.startPosX , this.startPosY , this.endX , this.endY)
		
		
		
		if(angle > 45 || !this.endPos) return;
		//console.log(this.endPos.x , (angle > 45 || !this.endPos))
		if(this.endPos.x <=30 && this.endPos.x >=-30) return
		
		const p = path.substring(1);
		const link = this.getAllLink();
		this.setLink(p , link);
	},
	
	touchStart (e) {
		//e.preventDefault();
		const touch = e.touches[0];
		this.startPosX = touch.pageX;
		this.startPosY = touch.pageY;
		this.endPos = null;
		this.endX = 0;
		this.endY = 0;

	},
	
	touchMove (e) {
	/*	const angle = this.getAngle(this.startPosX , this.startPosY , this.endX , this.endY)
		if(angle < 45 || !this.endPos){
			e.preventDefault();  
		}
		
		*/
		/*
		vat that  = this;
		
		 window.clearInterval(timerId);  
		    timerId = window.setTimeout(myTouchEnd, 200);  
	   */
	    const touch = e.touches[0];
	    
		this.endPos = {x:touch.pageX - this.startPosX,y:touch.pageY - this.startPosY};
		this.endX = touch.pageX;
		this.endY = touch.pageY;
		
	}
}