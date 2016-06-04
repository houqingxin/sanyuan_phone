export default {
	
	getPageHeight () {
		
		return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	
	},

	getPageWidth (){
	
		return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	}
}