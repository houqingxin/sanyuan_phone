<style>
	.statusText {
		position:relative;
		height: 40px;
		text-align:center;
		line-height:40px;
		width:100%;
		background:#e6e6e6;
	}
	.statusText .back{
		float:left;
		margin-left:10px;
	}
</style>

<template>
<div class="statusText">
	<p class="back" v-show="flag" v-on:click="backUp()">< {{back}}</p>
	<p v-show="!flag">{{statusText}}</p>
</div>
</template>

<script>

import status from '../services/status'

export default {

	data () {
		return {
			statusText:"机房",
			flag:false,
			back:'后退'
		}
	},

	init () {

	},

	ready () {
		status.setThis.call(status, this);
	},

	methods : {
		backUp () {
			status.backUp();
		}
	},

	initBus (bus) {
	    status.regBus(bus);
	},

	components : {}
}
</script>