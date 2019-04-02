import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Work from "./views/Work.vue";
import Contact from "./views/Contact.vue";
import Axios from "./views/Axios.vue";
import Blog from "./views/Blog.vue";
import NewPost from "./components/Blog/NewPost.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import NotFound from "./views/NotFound.vue";

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
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/new-post",
      name: "new-post",
      component: NewPost
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/404",
      name: "404",
      component: NotFound
    },
    {
      path: "*",
      redirect: { name: '404'}
    }
  ]
});
