/**
	data : 2016-6-2
	author : sailing
	fun : 
**/

export default {
	
	setThis (self) {
		this.vm = self;
		this.path = "/InstabusEIB";
	},

	onRouter (r) {

	},

	regBus (bus) {

		bus.on("router" , this.onRouter.bind(this))
	}
}