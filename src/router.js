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
		component: Users
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
	const user = store.getters['auth/user'];
	
	// Checks if user is logged in
	if (!!to.meta.requiresAuth && !user) {
		next({
			name: 'login',
			query: {redirectTo: to.path}
		});
	} else if (roles.length && user && !roles.includes(user.role) && user.role !== 'Admin') {
		next({
			name: 'access-denied'
		});
	} else {
		next();
	}

		
	// if (requiresAuth && !user) {
	// 	store.commit('auth/setRedirect', to.path)
	// 	next({
	// 		name: 'login',
	// 		query: {redirectTo: to.path}
	// 	});
	// }else if (to.meta.permission.indexOf(user.role) !== -1) {
	// 	switch (user.role) {
	// 		case 'Admin':
	// 			next()
	// 		break;
	// 		case 'Moderator':
	// 			next()
	// 		break;
	// 		case 'Blogger':
	// 			next()
	// 		break;
	// 		default:
	// 			next({name: 'work'})
	// 		break;
	// }}else if (to.meta.permission.indexOf(user.role) == -1){
	// 	next({
	// 		name: 'work',
	// 		query: {redirectTo: to.path}
	// 	});
	// }
});





// router.beforeEach((to, from, next) => {
// 	// const currentUser = firebase.auth().currentUser;
//     const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
// 	const user = store.getters['auth/user']
// 	// store.commit('auth/setPermission', to.meta.permission)
// 	console.log(to.meta.permission, '11')
// 	// const permission = to.meta.permission.indexOf(user.role)
// 	// 	console.log(permission)
		
// 	if (requiresAuth && !user) {
// 		store.commit('auth/setRedirect', to.path)
// 		next({
// 			name: 'login',
// 			query: {redirectTo: to.path}
// 		});
// 	}else if (to.meta.permission.includes(user.role)) {
// 		// console.log(to, '22')
// 		switch (user.role) {
// 			case 'Admin':
// 				next()
// 			break;
// 			case 'Moderator':
// 				next()
// 			break;
// 			case 'Blogger':
// 				next()
// 			break;
// 			default:
// 				next({name: 'work'})
// 			break;
// 	}}else if (to.meta.permission.indexOf(user.role) == -1){
// 		next({
// 			name: 'work',
// 			query: {redirectTo: to.path}
// 		});
// 	}
// });






// router.beforeEach((to, from, next) => {
// 	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
// 	const user = store.getters['auth/user'];
	
// 	if (requiresAuth) {
// 		if (user) {
// 			if (!to.meta.permission) {
// 				return next()
// 			}
// 			if (to.meta.permission.includes(user.role)) {
// 				switch (user.role) {
// 					case 'Admin':
// 						next()
// 						break;
// 					case 'Moderator':
// 						next()
// 						break;
// 					case 'Blogger':
// 						next()
// 						break;
// 					default:
// 						next({
// 							name: 'work'
// 						})
// 				}
// 			}
// 		} else {
// 			next()
// 		}
//    	}
// });

export default router;