import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseInput from '@/components/BaseInput.vue'
import Vuelidate from 'vuelidate'

Vue.component('BaseInput', BaseInput)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
