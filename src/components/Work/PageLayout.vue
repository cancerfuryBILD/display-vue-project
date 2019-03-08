<template>
    <div class="list-images grid-layout" id="layout">
        <div v-for="(img, index) in imgList" :key="index">
            <router-link to="#"><img :src="img.imgLocation" :alt="img.altTag"></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageLayout',
    computed: {
     imgList() {
       return this.$store.getters.imgList;
     }
   }
}



</script>

<style>
    .grid-layout {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.4em;
    }
   .grid-layout img {
        width: 100%;
    }
    .list-layout {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.4em;
    }
  .list-images {
        margin-bottom: 249px;
        margin-top: 36px;
    }
  
  .list-images img:hover {
        opacity: .3;
    }
</style>
