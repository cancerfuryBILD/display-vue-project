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
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </div>
  </nav>
</template>     

<script>

export default {
   name: 'MainNavigation',
   computed: {
     navLinks() {
       return this.$store.getters['menu/navLinks'];
     }
   }
}
// $('.nav a').on('click', function(){
//     $('.btn-navbar').click(); //bootstrap 2.x
//     $('.navbar-toggle').click(); //bootstrap 3.x by Richard
//     $('.navbar-toggler').click(); //bootstrap 4.x
// });
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
.main-navigation .router-link-exact-active, .auth a:hover, .auth .router-link-active {
  color: #2ecc71;
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
