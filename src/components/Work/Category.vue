<template>
    <div class="container category">
        <div class="filter" >
            <label v-for="(category, index) in categories" :key="index">
                <input type="radio" v-model="selectedCategory" :value="category" />{{ category }} </label>
        </div>
        <layout />
        <form @submit.prevent="addCategory">
            <input class="category-input" type="text" placeholder="Add a Category" v-model="newCategory" /> 
            <button type="submit">Add Category</button>
            <p class="error-message" id="error-name"></p>
        </form>
        <div class="list-images grid-layout" id="layout">
            <div v-for="(img, index) in filteredImgList" :key="index">
                <router-link to="#"><img :src="img.imgLocation" :alt="img.altTag"></router-link>
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
            selectedCategory: 'all',
            newCategory: ''
        }
    },

    computed: {
        categories() {
            return this.$store.getters.categories;
        },

        filteredImgList() {
        var vm = this;
        var category = vm.selectedCategory;
        
        if(category === "all") {
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
    },

    methods: {
        ...mapMutations([
           'ADD_CATEGORY'
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
    .category-input {
        border: 1px solid black;
        margin-right: 20px;
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
        gap: 1.29em;
    }
   .grid-layout img {
        width: 100%;
    }
    .grid-layout p {
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
        margin-bottom: 249px;
        margin-top: 36px;
    }
  
  .list-images img:hover {
        opacity: .3;
    }
</style>
