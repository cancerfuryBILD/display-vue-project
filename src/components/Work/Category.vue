<template>
    <div class="container category">
        <div class="filter" >
            <label @click="changeCategory(category)" v-for="(category, index) in categories" :key="index">
                <input type="radio" v-model="selectedCategory" :value="category" />{{ category }} </label>
        </div>

        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" 
            type="button" 
            id="dropdownMenuButton" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false">
            CATEGORIES
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <label @click="changeCategory(category)" v-for="(category, index) in categories" :key="index">
                <input type="radio" v-model="selectedCategory" :value="category" />{{ category }} </label>
            </div>
        </div>



        <layout />
        <!-- <form @submit.prevent="addCategory">
            <input class="category-input" type="text" placeholder="Add a Category" v-model="newCategory" /> 
            <button type="submit">Add Category</button>
            <p class="error-message" id="error-name"></p>
        </form> -->
        <div v-if="layoutCookie" class="list-images" :class="layoutCookie" id="layout">
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
        }
    },

    computed: {
        layoutCookie() {
            return this.$store.getters['category/layoutCookie'];
        },
        categories() {
            return this.$store.getters['category/categories'];
        },
        selectedCategory() {
            return this.$store.getters['category/selectedCategory'];
        },
        imgList() {
            return this.$store.getters['category/imgList'];
        },
        filteredImgList() {
            return this.$store.getters['category/filteredImgList'];
        },
    },

    methods: {
        ...mapMutations('category', [
           'ADD_CATEGORY',
           'changeCategory'
        ]),
        ...mapActions('category', [
            'addCategory'
        ]),
        addCategory() {
            if(this.categories.includes(this.newCategory.toLowerCase())) {
                document.getElementById('error-name').innerHTML = "Category already exist"
            } else {
            this.$store.dispatch('addCategory', this.newCategory)
            this.newCategory = '';
            }
        }
    },
    created() {
        if(!this.layoutCookie){
        this.$store.dispatch('category/setCookieLayout', 'grid-layout')
    }}
}

</script>

<style>
    .filter label {
        margin: 0 4px;
    }
    .filter label:first-child {
        margin-left: 0;
    }
    .filter label:after {
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
        margin-top: 44px;
    }
  
     .list-images img:hover {
        opacity: .3;
    }
    .dropdown {
        display: none;
    }
    .dropdown button {
        border-radius: unset;
        background-color: #2ecc71;
        border-color: #2ecc71;
    }
    @media (max-width: 576px) {
        .dropdown {
            display: initial;
        }
        label {
            display: block;
            margin-left: 10px;
        }
        .filter {
            display: none;
        }
    }
</style>
