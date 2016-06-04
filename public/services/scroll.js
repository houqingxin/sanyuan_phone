export default {
	bottomEvent (id , callback) {
		var scrollTop = document.getElementById(id).scrollTop;
        var scrollHeight = document.getElementById(id).scrollHeight;
        var clientHeight = document.getElementById(id).clientHeight;
        
        if(scrollTop + clientHeight+20 >= scrollHeight){
        	callback();
        }
	}
}