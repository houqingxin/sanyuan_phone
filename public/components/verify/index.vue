/**
	date :2016-5-28
	author : sailing
	fun : 待确认模块
	http://demo.3ddcim.com/unconfirmed/list_as_json/?_dc=1464701557848&page=1&start=0&limit=50
**/

<style>
.machineVerify{
	width:100%;
	height:100%;
	
}

.machineVerify .verifyContainer {
	padding-left:10px;
	padding-right:10px;
	height:100%;
	overflow-y: scroll;
}

.machineVerify .verifyContainer .verifyLine {
	height:60px;
	
	border-bottom:1px solid #ccc ;
}

.machineVerify .verifyContainer .verifyLine li{
	width:100%;
	height:30px;
	line-height:30px;
}

.machineVerify .verifyContainer .verifyLine .liname{
	width:100%;
	height:30px;
	line-height:30px;
}

.machineVerify .verifyContainer .verifyLine .liMessage{
	width:100%;
	height:20px;
	line-height:20px;
	color:#ccc;
	font-size:12px;
}

</style>

<template>
	<div class="machineVerify">
		<div class="verifyContainer">
			<div class="verifyLine" v-for = "rom in romList">
				<ul>
					<li class="liname">{{rom.room}}</li>
					<li class="liMessage">{{rom.room_serial}} . {{rom.cabinet}} . {{rom.serial}} . {{rom.serial}}</li>
				</ul>
			</div>
		</div>
	</div>
	<operation></operation>
</template>

<script>

import verify from "../../services/verify/verify.js"
import operation from "./operation.vue"
export default {
	data () {
		return {
			romList:[{
            "status": "上架", 
            "product": "SYSTIMAX PATCHMAX GS3", 
            "room_serial": "信息机房", 
            "product_type": 5, 
            "room": "信息机房", 
            "level": 1, 
            "pos": 0, 
            "cabinet": "A06", 
            "cabinet_id": 100088, 
            "height": 2, 
            "id": 101615, 
            "serial": "A06-S10", 
            "name": "A06-S10"
        }, 
        {
            "status": "上架", 
            "product": "SYSTIMAX 1000 G2", 
            "room_serial": "信息机房", 
            "product_type": 5, 
            "room": "信息机房", 
            "level": 1, 
            "pos": 25, 
            "cabinet": "A06", 
            "cabinet_id": 100088, 
            "height": 4, 
            "id": 101640, 
            "serial": "A06-ODF1", 
            "name": "A06-ODF1"
        }]
		}
	},

	init () {

	},

	ready () {

	},

	initBus (bus) {
	    status.regBus(bus);
	},

	components : {operation}
}
</script>