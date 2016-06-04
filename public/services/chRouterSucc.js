import Config from './config.js'
export default {
	init () {
		Config.Runtime.current =  document.location.href.substring(document.location.href.indexOf('#!') + 2) || "/machineRoom"
		//console.log("Config.Runtime.current : " , Config.Runtime.current)
		Config.Runtime.eventBus.emit("router" , {path:Config.Runtime.current})
		router.afterEach(function (transition) {
			console.log('成功浏览到: ' + transition.to.path)
			Config.Runtime.current = transition.to.path;
			Config.Runtime.eventBus.emit("router" , {path:transition.to.path})
		})
	}
}