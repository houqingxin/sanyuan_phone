<style>
	.titleDiv .titlelImg {
		width:30px;
		height:30px;
		background:url(../image/x_ic_home.png) no-repeat;
		background-size:26px;
		display:inline-block;
		margin-left:15px;
		margin-top:3px;
	}

	.titleDiv {
		width:100%;
		height:30px;
		margin-top:10px;
		color:#ECE7E7;
	}

	.tword {
		margin-left:15px;
        font-size:17px;
        height:30px;
        line-height:30px;
        position:absolute;
	}
</style>


<template>
  <div class="titleDiv">
   	<span class="titlelImg"></span>
   	<span class="tword">连接手机</span>
   	 
  </div>
</template>

<script>

import Config from '../services/config.js'
export default {
	methods:{
		showLeftbar () {
			Config.Runtime.eventBus.emit("showLeftbar")
		}
	}
}
</script>