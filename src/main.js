import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {store} from "./store/index";
var VueCookie = require('vue-cookie');
import jQuery from 'jquery';
import Bootstrap from 'bootstrap';
import Vuelidate from 'vuelidate'
import * as svgicon from 'vue-svgicon';
import firebase from 'firebase';

Vue.use(Vuelidate);
Vue.use(svgicon, {
  classPrefix: 'AppIcon-',
});
Vue.use(VueCookie);
global.jQuery = jQuery;

Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  validations: {},
  Bootstrap,
  render: h => h(App)
}).$mount("#app");
