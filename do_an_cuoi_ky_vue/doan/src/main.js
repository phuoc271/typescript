import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AppFooter from './components/AppFooter.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


// import ToastPlugin from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-default.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

// Vue.use(ToastPlugin)

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('AppFooter', AppFooter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
