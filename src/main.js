import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'https://rbferreyra-grupo-a.herokuapp.com/api/v1'

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
