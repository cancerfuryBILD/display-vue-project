<template>
  <nav class="navbar navbar-expand-sm pl-0 pr-0">
    <div class="container pl-0">
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav main-navigation">
          <li class="nav-item" v-for="(navLink, index) in navLinks" :key="index" >
            <router-link :to="navLink.link">{{ navLink.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>     

<script>

export default {
   name: 'MainNavigation',
   computed: {
     navLinks() {
       return this.$store.getters.navLinks;
     }
   }
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
.main-navigation .router-link-exact-active {
  color: #2ecc71;
}
nav .container {
  border-top: #dadada 1px solid;
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
