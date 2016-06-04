/**
	date : 2016-5-28
	author : sailing
	fun : 界面的入口

**/

<style>
	.view {
	  transition: all .5s ease;
	}
	.test-enter, .test-leave {
	  opacity: 0;
	  transform: translate3d(10px, 0, 0);
	}
	.v-link-active {
	  color: red;
	}
	[v-cloak] {
	  display: none;
	}
</style>

<template>
  <div>
  	<top></top>
  	<search></search>
  	<status></status>
    <container></container>
    <login></login>
    <navigation></navigation>
  </div>
  
</template>

<script>
	import login from './components/login.vue'
	import top from './components/top.vue'
	import search from './components/search.vue'
	import status from './components/status.vue'
	import navigation from './components/navigation/index.vue'
	import container from './components/container.vue'
	
	export default {
	  components:{login , top , container , navigation , status , search}
	}
</script>
