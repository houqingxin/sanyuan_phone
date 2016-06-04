/***
	date : 2016-6-2
	author : sailing
	fun : 接口
***/

export default {

	setThis (self) {
		this.vm = self;
		this.path = "/equipmentCabinet"
	},

	showCabinet (el) {
		this.setState(true);
	},

	onShow () {
		this.setState(true);
	},

	backUp () {
		this.setState(false);
	},

	setState (flag) {
		const self = this.vm ;
		if(self){
			self.flag = flag ;
		}
	},

	onRouter (r) {

	},

	regBus (bus) {

		bus.on("router" , this.onRouter.bind(this))
		bus.on("portfigure" , this.onShow.bind(this))
		bus.on("backUp" , this.backUp.bind(this))
	}
}