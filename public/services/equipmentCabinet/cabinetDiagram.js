/***
	date : 2016-6-1
	author : sailing
	fun : 显示具体机柜
***/

import Config from '../config'

export default {

	setThis (self) {
		this.vm = self;
		this.path = "/equipmentCabinet"
	},

	showCabinet (el) {
		this.setState(true)
	},

	backUp () {
		this.setState(false)
	},

	gotoInterface (el) {
		Config.Runtime.eventBus.emit("portfigure" , {el:el})
		Config.Runtime.eventBus.emit("changeState" , {el:"返回机柜列表"})  //修改状态头
	},

	setState (flag) {
		var  self = this.vm ;
		if(self){
			console.log("setStatu:" , self , flag)
			self.cabinet = flag ;
		}
	},

	onRouter (r) {

	},

	regBus (bus) {

		bus.on("router" , this.onRouter.bind(this))
		bus.on("showCabinet" , this.showCabinet.bind(this))
		bus.on("backUp" , this.backUp.bind(this))
	}
}