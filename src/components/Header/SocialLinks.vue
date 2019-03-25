<template>
    <ul class="navbar-nav social">
        <li class="nav-item" v-for="socialIcon in socialIcons" :key="socialIcon.index"><a class="nav-link" :href="socialIcon.link" target="_blank">
            <svg 
                :width="width"
                :height="height"
                :viewBox="viewBox">
                <defs><path :id="socialIcon.id" :d="socialIcon.path"/></defs><g><g :transform="socialIcon.transform"><use :fill="color" :xlink:href="'#' + socialIcon.id"/></g></g>
            </svg></a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SocialLinks',
    data() {
      return {
        height: '35',
        width: '35',
        viewBox: '0 0 35 35',
        color: '#dadada',
      }
   },
   computed: {
     socialIcons() {
       return this.$store.getters.socialIcons;
     }
   },
   created() {
       this.$store.dispatch('getSocialIcons')
   }
}
</script>

<style>
.social {
    float: right;
    margin-top: 8px;
    flex-direction: row;
}
.social li {
    margin-left: 7px;
}
a svg:hover #facebook {
    fill: #3b5998;
}
a svg:hover #twitter {
    fill: #00acee;
}
a svg:hover #rss {
    fill: #ee802f;
}
a svg:hover #pinterest {
    fill: #c8232c;
}
a svg:hover #google {
    fill: #db4a39;
}
a svg:hover #dribbble {
    fill: #ea4c89;
}
@media (max-width: 576px) {
    .social {
        display: none;
    }
}
</style>
