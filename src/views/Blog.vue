<template>
    <div>
        <page-title :headline="headline"/>
        <div  class="container blog-posts">
            <action-button v-if="user" :buttonTitle="buttonTitle" :buttonType="buttonType" :buttonLink="buttonLink"/>
            <div v-for="(post, index) in posts" :key="index">
                <router-link :to="'/blog/' + post.url">
                <article>
                    <div class="row">
                        <div class="col-sm-5">
                            <img :src="post.thumbnail" alt="">
                        </div>
                        <div class="col-sm-7 flex-column d-flex">
                            <h1>{{ post.title }}</h1>
                            <div class="post" v-html="post.postText"></div>
                            <div class="d-flex justify-content-between  mt-auto mb-3 ">
                                <span class="author">Author: {{ post.author }}</span>
                                <span class="published">Published: {{ dateFormating(post.timestamp) }} </span>
                            </div>
                        </div>
                    </div>
                </article>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import ActionButton from '@/components/Common/ActionButton.vue';
import moment from 'moment';

export default {
    name: 'Blog',
    data() {
        return {
            headline: 'Our latest posts ',
            buttonTitle: 'Add new post',
            buttonType: 'button',
            buttonLink: '/blog/new-post',
        
        }
    },
    components: {
        PageTitle,
        ActionButton
    },
    computed: {
     posts() {
       return this.$store.getters['blog/posts'];
     },
     user() {
       return this.$store.getters['user/pushUser'];
     }
   },
    created() {
       this.$store.dispatch('blog/getPosts')
   },
   methods:{
       dateFormating(date){
           return moment(date).format('DD/MM/YYYY')
       }
   }
}
</script>

<style>
    .blog-posts {
        margin-top: 30px;
    }
    .blog-posts h1 {
        color: #737373
    }
    .blog-posts button {
        margin-bottom: 30px;
    }
    .blog-posts img {
        width: 100%;
    }
    .post img {
        display: none;
    }
    .post p, .post h3 {
        display: none;
    }
    .post p:first-child, .post p:nth-child(2) {
        display: block;
    }
    .published, .author {
        font-size: .8rem;
        font-family: 'Helvetica', Arial, sans-serif;
        text-transform: none
    }
    article {
        min-height: 250px;
    }
</style>
