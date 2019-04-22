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
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'

const toastrConfigs = {
  position: 'top right',
  showDuration: 3000,
  timeOut: 3500
}

Vue.use(GridInstaller)
Vue.use(CxltToastr, toastrConfigs)
Vue.use(Vuelidate);
Vue.use(svgicon, {classPrefix: 'AppIcon-',});
Vue.use(VueCookie);
global.jQuery = jQuery;

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
// 	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
// 	const user = store.getters['auth/user']
	
// 	if (requiresAuth) {
// 	 // this route requires auth, check if logged in
// 	 // if true, redirect to main page.
// 	 if (user) {
// 	   if (!to.meta.permission) {
// 		 return next()
// 	   }
// 	   if (to.meta.permission.includes(user.role)) {
//       switch (user.role) {
//         case 'Admin':
//         next()
//         break;
//         case 'Moderator':
//         next()
//         break;
//         case 'Blogger':
//         next()
//         break;
//         default:
//         next({
//           name: 'work'
//         })
//       }
// 	  }
// 	} else {
//       next()
//     }
//   }
// });

let app = '';

firebase.auth().onAuthStateChanged(() => {
  if(firebase.auth().currentUser) {
    store.dispatch('auth/setUser', firebase.auth().currentUser);
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

