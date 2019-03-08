import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {store} from "./store/index";
import jQuery from 'jquery';
global.jQuery = jQuery;
let Bootstrap = require('bootstrap');


Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  Bootstrap,
  render: h => h(App)
}).$mount("#app");
