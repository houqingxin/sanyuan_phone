/**
	date : 2016-5-29
	author : sailing
	fun :机房
**/

export default {
	setThis (self) {
		this.vm = self;
		this.path = "/machineRoom"
	},
/*
	getRoomList () {
		$.ajax({
			url : 'http://demo.3ddcim.com/room/list_as_json/?_dc=1464700799175&page=1&start=0&limit=50',
			dataType :"json",
			type:"GET",
			success: function(response){
				//self.romList = response.items;
				console.log("response:" , response)
			},

			error: function(){
				console.log("error")
			}
		})
	},

*/
	getRoomList () {
		
		this.vm.romList
		const self = this.vm ;
		$.ajax({
			url : 'rome.json',
			dataType :"json",
			type:"GET",
			success: function(response){
				self.romList = response.items;
				//console.log("response:" , response)
			},

			error: function(){

			}
		})

	},

	selectRoom (room) {

	},


	onRouter (r) {

	},

	regBus (bus) {

		bus.on("router" , this.onRouter.bind(this))
	}
}