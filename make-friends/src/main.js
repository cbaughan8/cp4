import Vue from 'vue'
import App from './App.vue'
import router from './router'
import json from './avatars.json'

Vue.config.productionTip = false

let data = {
  avatars: json, 
  friends: [],
  
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')



