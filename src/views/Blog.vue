<template>
    <div>
       <spinner v-if="loading"></spinner>
        <page-title v-if="!loading" :headline="headline"/>
        <div  class="container blog-posts">
            <action-button v-if="user" :buttonTitle="buttonTitle" :buttonType="buttonType" :buttonLink="buttonLink"/>
            <div v-for="(post, index) in posts" :key="index">
                <article>
                    <div class="row">
                        <div class="col-sm-4">
                            <img :src="post.thumbnail" alt="">
                        </div>
                        <div class="col-sm-8 flex-column d-flex">
                            <router-link v-if="user" :to="'/post/edit/' + post.slug">
                                <button>Edit Post</button>
                            </router-link>
                            <router-link :to="'/blog/' + post.slug">
                                <h1>{{ post.title }}</h1>
                            </router-link>
                            <div class="post" v-html="post.postText"></div>
                            <div class="d-flex justify-content-between  mt-auto mb-3 ">
                                <span class="author">Author: {{ post.author }}</span>
                                <span class="published">Published: {{ dateFormating(post.timestamp) }} </span>
                            </div>
                           
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import ActionButton from '@/components/Common/ActionButton.vue';
import moment from 'moment';
import asyncDataStatus from '@/mixins/asyncDataStatus';
import Spinner from '@/components/Common/Spinner.vue';

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
        ActionButton,
        Spinner
    },
    mixins: [asyncDataStatus],
    computed: {
        posts() {
            return this.$store.getters['blog/posts'];
        },
        user() {
            return this.$store.getters['auth/user'];
        },
        loading() {
            return this.$store.getters['blog/loading'];
        }
    },
    created() {
        this.$store.dispatch('blog/getPosts')
    },
    methods:{
        dateFormating(date){
            return moment(date).format('DD / MM / YYYY')
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
    article button {
        font-size: 14px;
        text-transform: uppercase;
        font-family: 'Novecentosanswide-DemiBold';
        padding: 3px 8px;
        margin-top: -2px;
        background-color: #2ecc71;
        border: none;
        color: #fff;
        border: none;
        outline: none;
    }
    .post img {
        display: none;
    }
    .post p, .post h3 {
        display: none;
    }
    .post p:first-child {
        display: block;
    }
    .published, .author {
        font-size: .8rem;
        font-family: 'Helvetica', Arial, sans-serif;
        text-transform: none
    }
    article {
        min-height: 200px;
    }
</style>
