/**
	data:2016-6-2
	author : sailing
	fun : 机箱位置信息
**/

<style>
.imgPosition{
	height:30px;
	width:100%;
	position:relative;
	
	margin-top:10px;
	line-height:30px;
}

.imgPosition .pcontainer{
	margin:0 auto;
	margin-left:10px;
	margin-right:10px;
	background:#ccc;
}

.imageTitle {
	margin-top:5px;
	margin-left:10px;
	width:100px;
}
</style>

<template>
	<div class="imgPosition">
		<p class="pcontainer">
		<span>所属机柜:</span> <span>{{data.c}}</span>
		<span>/ 位置:</span> <span>{{data.p}}</span>
		</p>
	</div>
	<p class="imageTitle">A面</p>
</template>

<script>
export default {
	props :{
		data : Object
	}
}
</script>