import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mock/mockServer'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store
})
