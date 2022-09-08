import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseInput from '@/components/BaseInput.vue'

Vue.component('BaseInput', BaseInput)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
