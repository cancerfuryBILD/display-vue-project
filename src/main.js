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

new Vue({
  router,
  store: store,
  validations: {},
  Bootstrap,
  render: h => h(App),
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('user/getUser', user.email)
        this.user = user
        // console.log(user)
      } else {
        this.user = null
      }
    });
  }
}).$mount("#app");
