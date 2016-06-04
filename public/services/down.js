import Config from './config.js'

export default {
	
	setThis (self) {
		this.vm = self;
	},
	
	onShow (data) {
		let self = this.vm;
		if(!self) return
		self.movecss = "fadeIn";
		if(data) self.Len = data.len ;
		
		Config.Runtime.eventBus.emit("transferShow" , {show:false})
	},
	
	onHide () {
		
		let self = this.vm;
		if(!self) return
		self.movecss = "fadeOut";
		Config.Runtime.eventBus.emit("transferShow" , {show:true})
	},
	
	regBus (bus) {

		bus.on("showDown" , this.onShow.bind(this));
		bus.on("hideDown" , this.onHide.bind(this));
	}
}