export function configRouter (router) {

  // normal routes
//  console.log("router:" , router)
  router.hashbang=true
  router.map({

    '/machineRoom': {
      component: require('./components/machineRoom/index.vue')
    },

    '/InstabusEIB': {
      component: require('./components/InstabusEIB/index.vue')
    },

    '/verify': {
      component: require('./components/verify/index.vue')
    },

    '/setting': {
      component: require('./components/setting/index.vue')
    },


    '*': {
      component: require('./components/equipmentCabinet/index.vue')
    },

  })

  // redirect
  /*
  router.redirect({
    '*': '/machineRoom'
  })
*/

  /*
  router.beforeEach((transition) => {
	  
    if (transition.to.path === '/forbidden') {
      router.app.authenticating = true
      setTimeout(() => {
        router.app.authenticating = false
        transition.abort()
      }, 3000)
    } else {
      transition.next()
    }
  })
  */
}
