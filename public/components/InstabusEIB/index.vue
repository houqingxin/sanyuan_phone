/**
	date : 2016-5-29
	author : sailing
	fun : 智能布线
**/

<style>
.InstabusEIB {
	width: 100%;
	height: 100%;
	position:relative;
	overflow-y: scroll;
	color:#fff;
	background:#000;
}

.InstabusEIB .elbcontainer{
	padding-left:10px;
	padding-right:10px;
	height:100%;
	overflow-y:scroll;
}



.InstabusEIB .elbcontainer .ulList{
	height:150px;
	margin-top:10px;
	border-bottom:1px solid #00a4b2 ;
}

.InstabusEIB .elbcontainer .ulList .leftLi{
	width:150px;
	display:inline-block;
	height:100%;
	position:relative;
}

.InstabusEIB .elbcontainer .ulList .rightLi{
	display:inline-block;
	height:100%;
	position:relative;
}
</style>

<template>
	<div class="InstabusEIB">
		<div class="elbcontainer">
			<ul class="ulList" v-for="elb in elbList">
				<li class="leftLi">日期
				</li>

				<li class="rightLi">
                 启动
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

import InstabusEIB from "../../services/InstabusEIB/InstabusEIB"

export default {

	data () {
		return {
			elbList :[{name:1},{name:2},{name:8},{name:9}]
		}
	},

	init () {

	},

	initBus (bus) {
	    InstabusEIB.regBus(bus);
	},

	ready () {
	
	}
}
</script>

