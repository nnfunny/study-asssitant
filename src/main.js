import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/src/jquery.js"
import "popper.js/dist/popper.js"
import "bootstrap/dist/js/bootstrap.min.js"
import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
