<template>
    <div class="single-post" v-if="post">
        <page-title :headline="post[0].title"/>
        <div class="post-content container">
            <div class="d-flex justify-content-between">
                <router-link v-if="post.uid == currentUser.id || currentUser.role == 'Admin' || currentUser.role == 'Moderator'" :to="'/post/edit/' + post[0].slug">
                    <button>Edit Post</button>
                </router-link>
                <button @click="deletePost(post.id)"
                        class="delete-btn" 
                        v-if="post.uid == currentUser.id || currentUser.role == 'Admin' || currentUser.role == 'Moderator'">Delete Post</button>
            </div>
            <div class="d-flex justify-content-between article-meta mt-auto mb-5 ">
                <span class="author">Author: {{ post[0].author }}</span>
                <span class="published">Published: {{ dateFormating(post[0].timestamp) }} </span>
            </div>
            <div v-html="post[0].postText"></div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import moment from 'moment';
import db from '@/firebase/init';
export default {
    name: 'Post',
    components: {
      	PageTitle
    },
    methods:{
        dateFormating(date){
            return moment(date).format('DD / MM / YYYY')
        },
        deletePost(id) {
            db.collection("posts").doc(id).delete()
        }
    },
    computed: {
     	 post() {
        	return this.$store.getters['singlePost/post']
          },
          currentUser() {
            return this.$store.getters['auth/currentUser'];
        }
    },
    beforeCreate() {
      	let id = this.$route.params.id;
          this.$store.dispatch('singlePost/getSinglePost', id)
    }
}
</script>

<style>
	.single-post img {
		width: 100%;
	}
    .post-content {
        padding-top: 50px;
    }
    .article-meta span {
        font-size: 1rem
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
    .delete-btn {
        background-color: #c72b2b;
    }
</style>
