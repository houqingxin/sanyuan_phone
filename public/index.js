
	import Vue from 'vue'
	import appV from './app.vue'
	import VueRouter from './src'
	import { configRouter } from './route-config'
	import Config from './services/config'
	import main from './services/main'
	import jquery  from 'jquery'
    window.$ = jquery;
	window.jQuery = jquery;

	import miancss from './main.css'
    
	require('es6-promise').polyfill()
	Vue.use(VueRouter)
	const router = new VueRouter({
	  history: false,
	  saveScrollPosition: true
	})
	
	configRouter(router)
	
	const App = Vue.extend(appV)
	router.start(App, '#app')
	
	window.router = router

	main.start();
