/**
	date : 2016-6-2
	author : sailing
	fun : "机箱办卡接口图"
**/

<style>
.maincanvas{
	width:100%;
	margin-top:10px;
	height:200px;
	position:relative;
}

.maincanvas .contain{
	background:red;
	margin:0 auto;
	height:100%;
	margin-left:10px;
	margin-right:10px;
	position:relative;
}

.maincanvas .contain .mycanvas{
	position:absolute;
	width:100px;
	height:50px;
	left:0px;
	top:0px;
	background:yellow
}
</style>

<template>
	<div class="maincanvas">
		<div class="contain">
			<div class="mycanvas"></div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	}


}
</script>