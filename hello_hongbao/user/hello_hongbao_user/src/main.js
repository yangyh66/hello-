import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import store from './store';

import Mint from'mint-ui'
import'mint-ui/lib/style.css'

Vue.use(Mint);
Vue.use(Vuex);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

