<template>
  <div id="app">
    <app-header/>
    <router-view />
    <app-footer/> 
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from "@/components/Footer/Footer.vue";


export default {
  name: "app",
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}


</script>

<style>
.container {
  max-width: 970px;
}
@font-face {
  font-family: 'Novecentosanswide-DemiBold';
  src: url('assets/Novecentosanswide-DemiBold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Helvetica';
  src: url('assets/Helvetica.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
p,
h2,
h3,
span,
.services-list,
table,
form,
.category-list {
  color: #8a8888;
}
body,
.action-btn,
.paragraphAnimate {
  font-family: 'Novecentosanswide-DemiBold', Arial, sans-serif;
  text-transform: uppercase;
}
p,
.services-list,
table,
form {
  font-family: 'Helvetica', Arial, sans-serif;
  text-transform: none;
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 400;
}
h1 {
  font-size: 1.875rem;
  color: #ffffff;
}
h2, h4, span {
  font-size: 1.5rem;
}
h3 {
  font-size: 1.125rem;
}
@media (max-width: 576px) {
  h1, h4 {
    font-size: 1.5rem;
  }
}
@media (max-width: 425px) {
  h1, h4 {
    font-size: 1.2rem;
  }
}
</style>
