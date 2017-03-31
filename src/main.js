import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/router'
import App from './App.vue'           //appÊÇÈë¿ÚÒ³

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router:router,
  render: a => a(App)
})
