<template>
    <div class="container category">
        <div class="filter" >
            <label @click="changeCategory(category)" v-for="(category, index) in categories" :key="index">
                <input type="radio" v-model="selectedCategory" :value="category" />{{ category }} </label>
        </div>
        <layout />
        <!-- <form @submit.prevent="addCategory">
            <input class="category-input" type="text" placeholder="Add a Category" v-model="newCategory" /> 
            <button type="submit">Add Category</button>
            <p class="error-message" id="error-name"></p>
        </form> -->
        <div class="list-images" id="layout">
            <div v-for="(img, index) in filteredImgList" :key="index">
                <router-link to="#"><img :src="img.imgLocation" :alt="img.altTag"></router-link>
                <h2>{{ img.headline }}</h2>
                <p>{{ img.text }}</p>
            </div>
            

            </div>
        
    </div>
</template>

<script>
import Layout from '@/components/Work/Layout.vue';
import {mapState, mapMutations, mapActions} from 'vuex'


export default {
    name: 'Category',
    components: {
        Layout,
    },

    data() {
        return {
            newCategory: '',
            grid: 'grid-layout',
            list: 'list-layout'
        }
    },

    computed: {
        categories() {
            return this.$store.getters.categories;
        },
        selectedCategory() {
            return this.$store.getters.selectedCategory;
        },
        imgList() {
            return this.$store.getters.imgList;
        },
        filteredImgList() {
            return this.$store.getters.filteredImgList;
        }
    },

    methods: {
        ...mapMutations([
           'ADD_CATEGORY',
           'changeCategory'
        ]),
        ...mapActions([
            'addCategory'
        ]),
        addCategory() {
            if(this.categories.includes(this.newCategory.toLowerCase())) {
                document.getElementById('error-name').innerHTML = "Category already exist"
            } else {
            this.$store.dispatch('addCategory', this.newCategory)
            // this.$store.commit('ADD_CATEGORY', this.newCategory)
            // this.ADD_CATEGORY(this.newCategory)
            this.newCategory = '';
            }
        }
    }
}

</script>

<style>
    label {
        margin: 0 4px;
    }
    label:first-child {
        margin-left: 0;
    }
    label:after {
        content: '/';
    }
    label:last-child:after {
        content: '';
    }
    .category {
        padding-top: 40px;
        clear: right;
    }
    label [type='radio'] {
        display: none;
    }
    .category-input {
        border: 1px solid black;
        margin-right: 20px;
    }
    label:hover, input [type='radio'] + input:checked {
        color: #2ecc71;
        cursor: pointer;
    }
    .filter {
        color:#8a8888;
        font-size: 1.16rem;
        letter-spacing: .02rem;
        display: inline-block;
    }
    .grid-layout {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.29em;
    }
   .grid-layout img {
        width: 100%;
    }
    .grid-layout p, .grid-layout h2 {
        display: none;
    }
    .list-layout {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.29em;
    }
    .list-layout img {
        float: left;
        margin: 0 20px 0px 0;
    }
    .list-images {
        margin-bottom: 251px;
        margin-top: 44px;
    }
  
     .list-images img:hover {
        opacity: .3;
    }
</style>
