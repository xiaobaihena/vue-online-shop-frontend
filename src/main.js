import Vue from "vue";
import { ValidationProvider } from 'vee-validate';

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>',
});
