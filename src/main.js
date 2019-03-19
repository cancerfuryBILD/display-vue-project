import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {store} from "./store/index";
import jQuery from 'jquery';
global.jQuery = jQuery;
let Bootstrap = require('bootstrap');
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);
import * as svgicon from 'vue-svgicon';
Vue.use(svgicon, {
  classPrefix: 'AppIcon-',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  validations: {},
  Bootstrap,
  render: h => h(App)
}).$mount("#app");
