
import Config from './config.js'

export default {

	setThis (self) {
		this.vm = self;
		console.log("login out:", this)
	},

	getVm () {
		if(this.vm){
			return true
		}else{
			return false
		}
	},

	execFun (callback) {
		const self = this;
		return function () {
			console.log("recve:" , self)
            if(self.getVm){
				callback.call(self , arguments);
			}
			
		}
	},

	qrcodeurl (data) {
		
	},

	getSessionId () {
		var c_name = 'JSESSIONID';
			if(document.cookie.length>0){
			   c_start=document.cookie.indexOf(c_name + "=")
			   if(c_start!=-1){ 
			     c_start=c_start + c_name.length+1 
			     c_end=document.cookie.indexOf(";",c_start)
			     if(c_end==-1) c_end=document.cookie.length
			     return unescape(document.cookie.substring(c_start,c_end));
			   }
			}
		},
	
	login (d) {
		var d = {
			username:'admin',
			password:'1qaz3EDC'
		}
		var that = this ;
		$.ajax({
			type : "POST",
			url : "http://demo.3ddcim.com/user/login/",
			data :d ,
			success : function(response){
				var session = that.getSessionId();
				console.log("session : " , session)
				that.vm.login = true ;
			},
			dataType:'text' 
		})
	},
	
	phoneDisconnected () {
		this.vm.login = true;
		window.location.href= Config.Config.baseUrl + "webclient?action=logout&t=" + new Date().getTime();
	},

	regBus (bus) {
		
	}
}