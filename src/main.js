import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import Meta from 'vue-meta'
import backgroundImageLazyLoad from '@/directives/backgroundImageLazyLoad'
import '@/assets/scss/_core.scss'

Vue.config.productionTip = false

Vue.use(Meta)

Vue.directive('background-image-lazyload', backgroundImageLazyLoad)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
