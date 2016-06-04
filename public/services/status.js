/**
	date : 2016-6-1
	author : sailing
	fun : router切换的时候改变显示状态
**/
import Config from "./config"

export default {
	setThis (self) {
		this.vm = self;
	},

	getText () {
		return {
			"/machineRoom":'机房',
			"/equipmentCabinet":'机柜',
			"/InstabusEIB":'机房布线',
			"/verify":'待确认设备'
		}
	},

	onRouter (r) {
		const self = this.vm ;
		const obj = this.getText();

		if(self){
			self.statusText = obj[r.path]
		}
	},

	backUp () {
		var self = this.vm ;
		self.flag = false;
		Config.Runtime.eventBus.emit("backUp")
	},

	changeState (obj) {
		var self = this.vm ;
		self.flag = true;
		self.back = obj.el ;
	},

	regBus (bus) {

		bus.on("router" , this.onRouter.bind(this))
		bus.on("changeState" , this.changeState.bind(this))
	}
}