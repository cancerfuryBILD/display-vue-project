<template>
    <div>
        <page-title :headline="headline"/>
        <div class="container blog-posts">
            <action-button v-if="currentUser.role == 'Blogger' || 
                                currentUser.role == 'Admin' || 
                                currentUser.role == 'Moderator'" 
                                :buttonTitle="buttonTitle" 
                                :buttonType="buttonType" 
                                :buttonLink="buttonLink"/>
            <div v-for="(post, index) in posts" :key="index">
                <article>
                    <div class="row">
                        <div class="col-sm-4">
                           <img v-if="post.thumbnail == ''" src="/images/no-image.png" alt="">
                            <img v-if="post.thumbnail !== ''" :src="post.thumbnail" alt="">
                        </div>
                        <div class="col-sm-8">
                            <div class="d-flex justify-content-between">
                                <router-link v-if="post.uid == currentUser.id || currentUser.role == 'Admin' || currentUser.role == 'Moderator'" :to="'/post/edit/' + post.slug">
                                    <button>Edit Post</button>
                                </router-link>
                                <button @click="deletePost(post.id)"
                                        class="delete-btn" 
                                        v-if="post.uid == currentUser.id || currentUser.role == 'Admin' || currentUser.role == 'Moderator'">Delete Post</button>
                            </div>
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
import db from '@/firebase/init';
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
    mixins: [asyncDataStatus],
    computed: {
        posts() {
            return this.$store.getters['blog/posts'];
        },
        currentUser() {
            return this.$store.getters['auth/currentUser'];
        }
    },
    created() {
        this.$store.dispatch('blog/getPosts')

        // this.$store.dispatch('prompt/showPrompt', {
        //     message: 'Are y',
        //     confirmationLabel: 'OK',
        //     cancelLabel: 'Cancel',
        //     onConfirm: () => {
        //         this.$store.dispatch('blog/delete'. 'adsfasdfsadf')
        //     },
        //     onCancel: () => {
        //         dkfjksd
        //     }
        // })
    },
    methods:{
        dateFormating(date){
            return moment(date).format('DD / MM / YYYY')
        },
        deletePost(id) {
            db.collection("posts").doc(id).delete()
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
    .blog-posts img {
        width: 100%;
    }
    article button, .post-content button {
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
    .delete-btn, .post-content .delete-btn {
        background-color: #c72b2b;
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
        margin-top: 30px;
    }
</style>
