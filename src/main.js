import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' 
import { Tabbar, TabbarItem } from 'vant';
import { Icon } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
Vue.use(Icon);
Vue.use(axios);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
