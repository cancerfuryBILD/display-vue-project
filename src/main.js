import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {store} from "./store/index";
var VueCookie = require('vue-cookie');
import jQuery from 'jquery';
import Bootstrap from 'bootstrap';
import Vuelidate from 'vuelidate'
import * as svgicon from 'vue-svgicon';
import firebase from 'firebase/app';
import 'firebase/auth';
import './firebase/init';
import CxltToastr from 'cxlt-vue2-toastr';
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Grid } from '@progress/kendo-vue-grid'

const toastrConfigs = {
  position: 'top right',
  showDuration: 3000,
  timeOut: 3500
}


Vue.use(CxltToastr, toastrConfigs)
Vue.use(Vuelidate);
Vue.use(svgicon, {classPrefix: 'AppIcon-',});
Vue.use(VueCookie);
global.jQuery = jQuery;

Vue.config.productionTip = false;

let app = '';

firebase.auth().onAuthStateChanged(() => {
  if(firebase.auth().currentUser) {
    let currentUser = firebase.auth().currentUser;
    store.dispatch('auth/setCurrentUser', currentUser);
  }
  setTimeout(() => {
    if (!app) {
        app = new Vue({
        router,
        store,
        validations: {},
        Bootstrap,
        Grid,
        render: h => h(App),
      }).$mount("#app");
    };
  }, 400);
});

