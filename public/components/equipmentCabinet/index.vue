<style>
.equipmentCabinet {
	height:100%;
	width:100%;
	position:relative;
	overflow-y: scroll;
}

.equipmentCabinet .equContainer {
	padding-left:10px;
	padding-right:10px;
	height:100%;
	overflow-y: scroll;
}

.equipmentCabinet .equContainer .equipment {
	height:60px;
	
	border-bottom:1px solid #ccc ;
}

.equipmentCabinet .equContainer .equipment li{
	width:100%;
	height:30px;
	line-height:30px;
}

.equipmentCabinet .equContainer .equipment .rightImage{
	right:10px;
	margin-top:-32px;
	position:relative;
	float:right;
}

.equipmentCabinet .equContainer .equipment .liname{
	width:100%;
	height:30px;
	line-height:30px;
}

.equipmentCabinet .equContainer .equipment .liMessage{
	width:100%;
	height:20px;
	line-height:20px;
	color:#ccc;
	font-size:12px;
}
</style>

<template>
	<div class="equipmentCabinet">

		<div class="equContainer">
			<div class="equipment" v-for = "equipment in equipmentList" v-on:click="gotoCabinet(equipment)">
				<ul>
					<li class="liname">{{equipment.name}}</li>
					<li class="liMessage">{{equipment.message}}</li>
				</ul>
				<span class="rightImage">
					<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    					<path fill="#8e8e8e" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
					</svg>
				</span>
			</div>
		</div>

	</div>

	<cabinet></cabinet>
	<portfigure></portfigure>
</template>

<script>

import cabinet from './cDiagram.vue'
import cabinetMrg from '../../services/equipmentCabinet/cabinet'
import portfigure from "./portfigure.vue"

export default {
	
	data () {
		return {
			equipmentList:[{
				name : '设备1',
				message : 'message'
			},{
				name : '设备2',
				message : 'message'
			},{
				name : '设备2t',
				message : 'messagedfdf'
			}]
		}
	},

	init () {
		
	},

	methods :{
		gotoCabinet (el) {
			cabinetMrg.gotoCabinet(el);
		}
	},

	ready () {
		cabinetMrg.setThis.call(cabinetMrg, this);
		
	},

	initBus (bus) {
	    status.regBus(bus);
	},

	components : {cabinet , portfigure}
}
</script>