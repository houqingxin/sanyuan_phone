<style>
	.mainContainer{
		margin:0 auto;
		position:relative;
		background:#fff;
	}
</style>

<template>
	<div class="mainContainer" v-on:touchStart="touchStart($event)" v-on:touchMove="touchMove($event)" v-on:touchEnd="touchEnd($event)" v-bind:style="{height : mHeight + 'px'}">
		<router-view :is="currentView" class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
	</div>
</template>

<script>
//import tools from '../services/tools.js'
import Container from '../services/Container.js'
import ts from '../services/ts.js'
export default {
	data () {
		return {
			mHeight:300
		}
	},

	 methods:{
	  	touchEnd (e) {
	  		Container.touchEnd(this.$route.path , e);
	  	},
	  	
	  	touchStart (e) {
	  		//e.preventDefault();
	  		Container.touchStart(e);
	  	},
	  	
	  	touchMove (e) {
	  		Container.touchMove(e);
	  	},
	  	
	  	touchcancel (e) {
	  		console.log("touch cancel");
	  	} 
	 },

	ready () {

		this.mHeight = ts.getPageHeight() - 210 ;
	}
}
</script>