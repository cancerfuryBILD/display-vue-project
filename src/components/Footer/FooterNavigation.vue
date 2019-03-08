<template>
    <ul class="footer-navigation">
        <li v-for="(navLink, index) in navLinks" :key="index" >
            <router-link :to="navLink.link">{{ navLink.name }}</router-link>
        </li>
    </ul>
</template>

<script>

export default {
   name: 'FooterNavigation',
   computed: {
     navLinks() {
       return this.$store.getters.navLinks;
     }
   }
}
</script>

<style>
    .footer-navigation li {
        display: inline;
        list-style: none;
    }
    .footer-navigation {
        float: right;
    }
    footer a:hover {
        text-decoration: none;
        color: #2ecc71;
    }
    .footer-navigation li a {
        margin: 0px 5px;
    }
    .footer-navigation li:after {
        content: "/";
    }
    .footer-navigation li:last-child:after {
        content: "";
    }
    @media (max-width: 576px) {
        .footer-navigation {
            float: none;
            padding-left: 0px;
        }  
    }
</style>
