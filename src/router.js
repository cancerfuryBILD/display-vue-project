import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Work from "./views/Work.vue";
import Contact from "./views/Contact.vue";
import Axios from "./views/Axios.vue";
import Test from "./views/Test.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/work",
      name: "work",
      component: Work
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/axios",
      name: "axios",
      component: Axios
    },
    {
      path: "/test",
      name: "test",
      component: Test
    }
  ]
});
