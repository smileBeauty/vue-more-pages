import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = true
Vue.config.devtools = true
Vue.config.performance = true

window.__myVueAdmin = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
