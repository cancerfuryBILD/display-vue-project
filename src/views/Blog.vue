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
            <svg @click="sort('asc')" class="svg svg-right" height="20" viewBox="0 0 1792 1792" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1255 408h177l-72-218-12-47q-2-16-2-20h-4l-3 20q0 1-3.5 18t-7.5 29zm-455 1032q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zm836 119v233h-584v-90l369-529q12-18 21-27l11-9v-3q-2 0-6.5.5t-7.5.5q-12 3-30 3h-232v115h-120v-229h567v89l-369 530q-6 8-21 26l-11 11v2l14-2q9-2 30-2h248v-119h121zm89-897v106h-288v-106h75l-47-144h-243l-47 144h75v106h-287v-106h70l230-662h162l230 662h70z"/></svg>
            <svg @click="sort('desc')" class="svg" height="20" viewBox="0 0 1792 1792" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1255 1432h177l-72-218-12-47q-2-16-2-20h-4l-3 20q0 1-3.5 18t-7.5 29zm-455 8q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zm925 246v106h-288v-106h75l-47-144h-243l-47 144h75v106h-287v-106h70l230-662h162l230 662h70zm-89-1151v233h-584v-90l369-529q12-18 21-27l11-9v-3q-2 0-6.5.5t-7.5.5q-12 3-30 3h-232v115h-120v-229h567v89l-369 530q-6 8-21 26l-11 10v3l14-3q9-1 30-1h248v-119h121z"/></svg>
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
                                <button type="button"
                                        data-toggle="modal" 
                                        data-target="#exampleModal"
                                        class="delete-btn" 
                                        @click="deletePost(post.id, post.title)"
                                        v-if="post.uid == currentUser.id || currentUser.role == 'Admin' || currentUser.role == 'Moderator'">Delete Post</button>
                            </div>
                            <router-link :to="'/blog/' + post.slug">
                                <h1>{{ post.title }}</h1>
                            </router-link>
                            <div class="post" v-html="post.postText"></div>
                            <div class="d-flex justify-content-between  mt-auto mb-3 ">
                                <span class="author">Author: {{ post.author }}</span>
                                <span class="published">Published: {{ formatDate(post.timestamp.toDate()) }} </span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <button @click="loadMore" class="action-btn" v-if="loadMoreButton">Load More</button>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import ActionButton from '@/components/Common/ActionButton.vue';
import moment from 'moment';
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
        ActionButton,
    },
    computed: {
        posts() {
            return this.$store.getters['blog/posts'];
        },
        currentUser() {
            return this.$store.getters['auth/currentUser'];
        },
        loadMoreButton() {
            return this.$store.getters['blog/loadMoreButton'];
        },
    },
    created() {
        this.$store.dispatch('blog/getPosts', {
            limit: 3
        });
    },
    methods:{
        formatDate(date) {
            moment(date).utc().startOf("day").format();
            return moment(date).format("DD / MM / YYYY")
        },
        loadMore() {
            this.$store.dispatch('blog/getPosts', {
                limit: 3,
            })
        },
        sort(value) {
            this.$store.dispatch('blog/getPosts', {
                limit: 3,
                orderDirection: value
            })
        },
        async deletePost(id, title) {
            await this.$store.commit('prompt/promptSetup', {
                message: 'Are you sure you want to delete',
                confirmationLabel: 'OK',
                cancelLabel: 'Cancel',
                onConfirm: () => {
                    this.$store.dispatch('blog/deletePost', id, {root:true})
                },
                onCancel: () => {
                    return
                }
            });
            await this.$store.commit('prompt/setShowModal', true)
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
    .svg-right {
        margin: 0 20px;
    }
    .svg {
        fill: #2ecc71;
    }
</style>
