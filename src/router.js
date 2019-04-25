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
import AccessDenied from "./views/AccessDenied.vue";
import Post from "./components/Blog/Post.vue";
import EditPost from "./components/Blog/EditPost.vue";
import ProfilePage from "./components/Users/ProfilePage.vue";
import EditProfile from "./components/Users/EditProfile.vue";
import Users from "./components/Admin/Users.vue";
import Settings from "./components/Admin/Settings.vue";
import firebase from 'firebase/app'
import 'firebase/auth';
import {store} from "./store/index";
Vue.use(Router);

const router = new Router({
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
		path: "/blog/new-post",
		name: "new-post",
		component: NewPost,
		meta: {
			requiresAuth: true,
			roles: ['Blogger', 'Moderator']
		}
	},
	{
		path: "/blog/:id",
		name: "post",
		component: Post
	},
	{
		path: "/post/edit/:id",
		name: "edit-post",
		component: EditPost,
		meta: {
			requiresAuth: true,
			roles: ['Blogger', 'Moderator']
		}
	},
	{
		path: "/profile/:id",
		name: "profile-page",
		component: ProfilePage,
		meta: {
			requiresAuth: true,
			roles: ['Blogger' ,'Moderator'],
			permission: 'blog_edit'
		}
	},
	{
		path: "/profile/edit/:id",
		name: "edit-profile",
		component: EditProfile,
		meta: {
			requiresAuth: true,
			roles: ['Moderator']
		}
	},
	{
		path: "/signup",
		name: "signup",
		component: Signup
	},
	{
		path: "/users",
		name: "users",
		component: Users,
		meta: {
			requiresAuth: true,
			roles: []
		}
	},
	{
		path: "/settings",
		name: "settings",
		component: Settings,
		meta: {
			requiresAuth: true,
			roles: []
		}
	},
	{
		path: "/login",
		name: "login",
		component: Login
	},
	{
		path: "/access-denied",
		name: "access-denied",
		component: AccessDenied
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


router.beforeEach((to, from, next) => {
  const roles = to.meta.roles || [];
	const currentUser = store.getters['auth/currentUser'];
	
	// Checks if user is logged in
	if (!!to.meta.requiresAuth && !currentUser) {
		next({
			name: 'login',
			query: {redirectTo: to.path}
		});
	} else if (roles.length && currentUser && !roles.includes(currentUser.role) && currentUser.role !== 'Admin') {
		next({
			name: 'access-denied'
		});
	} else {
		next();
	}
});

export default router;