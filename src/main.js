import Vue from 'vue'
import 'normalize-css/normalize.css'
import './tailwind/main.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
