/**
	date :2016-5-28
	author : sailing
	fun : 机房管理住模块
**/

<style>
.machineRome{
	width:100%;
	height:100%;
	
}

.machineRome .romContainer {
	padding-left:10px;
	padding-right:10px;
	height:100%;
	overflow-y: scroll;
}

.machineRome .romContainer .romLine {
	height:60px;
	
	border-bottom:1px solid #ccc ;
}

.machineRome .romContainer .romLine .rightImage{
	right:10px;
	margin-top:-32px;
	position:relative;
	float:right;
}

.machineRome .romContainer .romLine li{
	width:100%;
	height:30px;
	line-height:30px;
}

.machineRome .romContainer .romLine .liname{
	width:100%;
	height:30px;
	line-height:30px;
}

.machineRome .romContainer .romLine .liMessage{
	width:100%;
	height:20px;
	line-height:20px;
	color:#ccc;
	font-size:12px;
}

</style>

<template>
	<div class="machineRome">
		<div class="romContainer">
			<div class="romLine" v-for = "rom in romList" v-on:click="selectRoom(rom)">
				<ul>
					<li class="liname">{{rom.name}}</li>
					<li class="liMessage">{{rom.name}} . {{rom.serial}}</li>
				</ul>

				<span class="rightImage">
					<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    					<path fill="#8e8e8e" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
					</svg>
				</span>
			</div>
		</div>
	</div>
</template>

<script>

import machineRoom from '../../services/machineRoom/machineRoom'

export default {
	data () {
		return {
			romList:[{
            "remark": "呵呵", 
            "name": "信息机房", 
            "level": 1, 
            "height": 0, 
            "width": 0, 
            "position": " 一楼", 
            "serial": "信息机房", 
            "id": 1
        }, 
        {
            "remark": null, 
            "name": "调度机房", 
            "level": 1, 
            "height": 0, 
            "width": 0, 
            "position": "", 
            "serial": "调度机房", 
            "id": 198496
        }, 
        {
            "remark": "hehehe", 
            "name": "通信机房", 
            "level": 1, 
            "height": 0, 
            "width": 0, 
            "position": "", 
            "serial": "通信机房", 
            "id": 198581
        }]
		}
	},

	init () {

	},

	methods : {
		selectRoom (room) {
			//console.log("roome:" , router)
			router.go("/equipmentCabinet");
			machineRoom.selectRoom(room)
		}
	},

	ready () {
		machineRoom.setThis.call(machineRoom, this);
		//machineRoom.getRoomList();
	},

	initBus (bus) {
	    status.regBus(bus);
	},

	components : {}
}
</script>