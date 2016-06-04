/**
	date : 2016-6-2
	author : sailing
	fun : 
**/

export default {
	setThis (self) {
		this.vm = self;
		this.path = "/verify";
	},

	onRouter (r) {
		if(r.path == this.path){
			console.log("do something verify")
		}
	},

	regBus (bus) {

		bus.on("router" , this.onRouter.bind(this))
	}
}