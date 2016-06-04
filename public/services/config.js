
define([], function(){
/********全局配置参数**********/
	
	var Map = function(){
		this.container = new Object();
	}
	Map.prototype.put = function(key, value){
		this.container[key] = value;
	}
	Map.prototype.get = function(key){
		var value = key.toLowerCase();
		return this.container[value];
	}
	Map.prototype.keySet = function(){
		var keyset = new Array();
		var count = 0;
		for(var key in this.container){
			if(key == 'extend'){
				continue;
			}
			keyset[count] = key;
			count ++;
		}
		return keyset;
	}
	Map.prototype.size = function(){
		var count = 0;
		for(var key in this.container){
			if(key == 'extend'){
				continue;
			}
			count ++;
		}
		return count;
	}
	Map.prototype.remove = function(key){
		delete this.container[key];
	}
	Map.prototype.toString = function(){
		var str = "";
		for(var i=0, keys=this.keySet(), len=keys.length; i<len; i++){
			str = str + keys[i] + "=" + this.container[keys[i]] + ";\n";
		}
		return str;
	};
	
	
	var musicType = {
			'.mp3': true,	
			'.wav': true,	
			'.x-ogg': true,	
			'.mid': true,	
			'.midi': true,	
			'.wma': true,	
			'.aac': true,	
			'.ra': true,	
			'.amr': true,	
			'.au': true,	
			'.aiff': true,	
			'.ogm': true,	
			'.m4a': true,	
			'.f4a': true,	
			'.flac': true,	
			'.ape': true	
	}
	
	var vMap = new Map();
	vMap.put(".mpeg", "video/mpeg");
	vMap.put(".rm", "video/rm");
	vMap.put(".rmvb", "video/rmvb");
	vMap.put(".avi", "video/avi");
	vMap.put(".wmv", "video/wmv");
	vMap.put(".mp4", "video/mp4");
	vMap.put(".3gp", "video/3gp");
	vMap.put(".m4v", "video/m4v");
	vMap.put(".flv", "video/flv");
	vMap.put(".fla", "video/fla");
	vMap.put(".f4v", "video/f4v");
	vMap.put(".mov", "video/mov");
	vMap.put(".MOV", "video/MOV");
	vMap.put(".mpg", "video/mpg");
	vMap.put(".asf", "video/asf");
	vMap.put(".rv", "video/rv");
	vMap.put(".mkv", "video/x-matroska");
	//console.log("vMap:" , vMap)
	
	var Config = {
			Runtime:{
				imei: "unknow",
				isDirect: false,											// 记录当前模块、当前操作(home/imgModule/musicModule/docModule)
				isDirectChannel:false,
				directChannelURL:undefined,
				curOperation: 'show',
				channelURL: '',
				connect:false,
				current:"",
				channelstatus: "channel未连接",
				fileType: 'home',
				subModule: 'sms',
				uploadType:"image",
				channelV: "weline",
				isWepai: false
			},
			Config:{
				minWidth: '862',
				minHeight: '650',
				version: '1.0',
			
				directUpload:null
			},
			imgHeight:150,
			marginTop:81,
			Module:{},
			
			extMap : Map,
			limitSize:10*1024*1024,
			downLoad:{},
			lang:'',
			loadBase64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY3jy5AkABVwCrcUBMd4AAAAASUVORK5CYII=",
			music:musicType,
			block:null,
			vMap:vMap,
			uploadpath:""
	}
	return Config;
});