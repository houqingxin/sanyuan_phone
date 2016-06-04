/**
	date : 2016-6-2
	author : sailing
	fun : 机柜图设置
**/

<style>

.interface {
	width : 100%;
	height:100%;
	position:absolute;
	left:0;
	top:0;
	background:#fff;
	z-index:1000;

}

</style>

<template>
	<div v-show="flag" class="interface">
		<navigate></navigate>
		<position :data="pm"></position>
		<maincanvas></maincanvas>
	</div>
</template>

<script>
import portfigure from "../../services/equipmentCabinet/portfigure"
import navigate from './navigate.vue'
import position from './position.vue'
import maincanvas from './maincanvas.vue'

export default {
	data () {
		return {
			flag : false	,
			pm:{
				p:"3-4",
				c:"A07"
			}
		}
	},

	init () {

	},

	ready () {
		portfigure.setThis.call(portfigure, this);
	},

	initBus (bus) {
	    portfigure.regBus(bus);
	},

	components : {navigate , position , maincanvas}
}

</script>

