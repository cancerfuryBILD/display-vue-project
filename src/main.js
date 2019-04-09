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
// import CKEDITOR from 'ckeditor';
// Vue.use(CKEDITOR);
Vue.use(Vuelidate);
Vue.use(svgicon, {
  classPrefix: 'AppIcon-',
});
Vue.use(VueCookie);
global.jQuery = jQuery;

Vue.config.productionTip = false;

let app = '';

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
      app = new Vue({
      router,
      store,
      validations: {},
      Bootstrap,
      render: h => h(App),
      
    }).$mount("#app");
  };
  if(firebase.auth().currentUser) {
    store.dispatch('auth/autoSignIn', firebase.auth().currentUser.uid);
}
});

