<template>
	<nav class="navbar navbar-expand-sm pl-0 pr-0">
		<div class="container pl-0 pr-0">
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav main-navigation">
				<li class="nav-item" v-for="(navLink, index) in navLinks" :key="index" >
					<router-link :to="navLink.link">{{ navLink.name }}</router-link>
				</li>
				</ul>
			</div>
			<div class="auth">
				<router-link v-if="!currentUser" :to="{ name: 'login' }">Login</router-link>
				<router-link v-if="!currentUser" :to="{ name: 'signup' }">Signup</router-link>
				<span class="user" v-if="currentUser" @click="userProfile">{{ currentUser.firstName }}</span>
				<a v-if="currentUser" @click="logout">Logout</a>
			</div>
		</div>
	</nav>
</template>     

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
	name: 'MainNavigation',
	computed: {
		navLinks() {
			return this.$store.getters['menu/navLinks'];
		},
		currentUser() {
			return this.$store.getters['auth/currentUser'];
		},
	},
	methods: {
		logout() {
			// console.log(currentUser)
			this.$store.dispatch('auth/logout')
		},
		 userProfile(event) {
            // this.$store.commit('users/seteditUsers', true);
			let id = this.currentUser.id;
			this.$router.push('/profile/' + id);
			
        }
	},
	// beforeCreate() {
	// 	let currentUser = firebase.auth().currentUser;
	// 	if  (currentUser) {
	// 		this.$store.dispatch('auth/setUser', currentUser.uid);
	// 	}
    // },
}
</script>

<style>
.main-navigation {
  	margin-top: 22px;
}
nav {
    margin-top: 22px;
    padding-bottom: 0px !important;
}
.navbar-nav a {
    color: #737373;
    text-transform: uppercase;
    font-size: 1.125rem;
    letter-spacing: 0.02em !important;
    text-decoration: none;
}
.main-navigation .nav-item {
    margin-right: 26px;
}
.main-navigation .router-link-exact-active, .auth a:hover, .auth .router-link-active, .auth span, .auth a:hover, .user {
  	color: #2ecc71 !important;
}
nav .container {
  	border-top: #dadada 1px solid;
}
.auth {
        font-size: .8rem;
        float: right;
        margin-top: 27px;
    }
    .auth a {
        color: #8a8888;
        margin-left: 15px;
        text-decoration: none;
        cursor: pointer;
	}
	.auth a:last-child {
		color: #8a8888;
	}
    .auth span {
      	font-size: .8rem;
      	letter-spacing: .05rem;
		  cursor: pointer;
    }
  
@media (max-width: 576px) {
	nav .container {
		border-top: none;
	}
	nav {
		display: none;
	}
}
</style>
