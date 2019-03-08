<template>
    <div class="container category">
        <div class="filter" >
            <label v-for="(category, index) in categories" :key="index">
                <input type="radio" v-model="selectedCategory" :value="category" />{{ category }} </label>
        </div>
        <layout />
        <div class="list-images grid-layout" id="layout">
        <div v-for="(img, index) in filteredImgList" :key="index">
            <router-link to="#"><img :src="img.imgLocation" :alt="img.altTag"></router-link>
        </div>
    </div>
    </div>
</template>

<script>
import Layout from '@/components/Work/Layout.vue';

export default {
    name: 'Category',
    components: {
        Layout,
    },
    data() {
        return {
            selectedCategory: 'All'
        }
    },
    computed: {
        categories() {
            return this.$store.getters.categories;
        },
        filteredImgList() {
        var vm = this;
        var category = vm.selectedCategory;
        
        if(category === "All") {
            return vm.imgList;
        } else {
            return vm.imgList.filter(function(img) {
                return img.imgCategory === category;
            });
        }
    },
    imgList() {
       return this.$store.getters.imgList;
     }
   }
}

</script>

<style>
    label {
        margin: 0 10px;
    }
    label:first-child {
        margin-left: 0;
    }
    .category {
        padding-top: 40px;
        clear: right;
    }
    label [type='radio'] {
        display: none;
    }
    label:hover, label [type='radio'] + label:checked {
        color: #2ecc71;
        cursor: pointer;
    }
    .filter {
        color:#8a8888;
        font-size: 1.1875rem;
        letter-spacing: .02rem;
        display: inline-block;
    }
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
