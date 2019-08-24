import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import Meta from 'vue-meta'
import '@/assets/scss/_core.scss'

Vue.config.productionTip = false

Vue.use(Meta)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
