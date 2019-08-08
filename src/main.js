// Bootstrap + JQuery + Popper
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/src/jquery.js"
import "popper.js/dist/popper.js"
import "bootstrap/dist/js/bootstrap.min.js"
// Vue
import Vue from 'vue'
import App from './App.vue'
// Router
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);
Vue.config.productionTip = false
// Router
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})


// Render App
new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})




