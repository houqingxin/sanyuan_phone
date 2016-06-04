<style>
	.check{
		width:20px;
		height:20px;
		border-radius:25px;
		position:relative;
		border:1px solid #a7a1a1;
	}
	
	.selectCheck{
		background:url(../image/x_ic_camera_check_pressed.png) no-repeat;
		background-size:50px;
		height:50px;
		width:50px;
		left:-15px;
		top:-15px;
		position:absolute;
	}
	
</style>
<template>
  <div class="check">
  	<p  v-bind:class="selected"></p>
  </div>
</template>

<script>
export default {
	props:{
		selected:String
	},
	
	methods:{
		
	},
	
	ready(){
		//console.log("this:" , this)
	}
	
	
}
</script>