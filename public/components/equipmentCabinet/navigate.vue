/**
	date : 2016-6-2
	author : sailing
	fun : 机柜机箱的跳着头
**/

<style>
.linkNav {
	width:100%;
	height:30px;
	line-height:30px;
	border-bottom:1px solid #ccc;
}

.linkNav li {
	display:inline-block;
	background:red;
	margin-left:2px;
}
</style>

<template>
	<div class="linkNav">
		<ul>
			<li v-for="el in navList">
				{{el.name}}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			navList:[{
				name:"后视图"
			},{
				name: "跳线信息"
			},{
				name : "其他设备"
			}]
		}
	}
}

</script>




