<template>
<div>
    <page-title :headline="headline"/>
    <div class="container user-info">
        <div class="statistics">
            <span class="small">posts: </span>
            <span class="small">{{posts.length}}</span>
        </div>
        <div class="user-photo">
            <img v-if="singleUser.img !== ''" :src="singleUser.img" alt="">
            <img v-if="!singleUser.img" src="/images/no-img.jpg" alt="">
        </div>
        <div class="update-profile">
            <router-link v-if="singleUser" :to="'/profile/edit/' + singleUser.id">
                <button>Edit Profile</button>
            </router-link>
        </div>
    </div>
    <div class="info text-center container" v-if="singleUser">
        <span>{{singleUser.firstName}} {{singleUser.lastName}}, 38</span><br>
        <span class="small">{{singleUser.occupation}}</span><br>
        <div class="biography">
            <span class="small">Biography</span><br>
            <p>{{singleUser.biography}}</p>
        </div>
    </div>
    <div class="container blog-posts-user ">
        <h2 class="text-center">{{singleUser.firstName}}'s Posts</h2>
        <div v-for="(post, index) in posts" :key="index">
            <article>
                <div class="row">
                    <div class="col-sm-4">
                        <img v-if="post.thumbnail == ''" src="/images/no-image.png" alt="">
                        <img v-if="post.thumbnail !== ''" :src="post.thumbnail" alt="">
                    </div>
                    <div class="col-sm-8 flex-column d-flex">
                        <div class="d-flex justify-content-between">
                                <router-link v-if="singleUser.user_id === post.uid" :to="'/post/edit/' + post.slug">
                                    <button>Edit Post</button>
                                </router-link>
                                <button @click="deletePost(post.id)" class="delete-btn" v-if="singleUser.user_id === post.uid">Delete Post</button>
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

<script scoped>
import PageTitle from '@/components/Common/PageTitle.vue';
import moment from 'moment';
import {store} from '@/store/index';
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
    name: 'ProfilePage',
    data() {
        return {
            headline: ' '
        }
    },
    components: {
        PageTitle
    },
     computed: {
        posts() {
            return this.$store.getters['profile/userPosts'];
        },
        singleUser() {
			return this.$store.getters['users/singleUser'];
        },
        editUsers(){
            return this.$store.getters['users/editUsers']
        },
        currentUser() {
			return this.$store.getters['auth/currentUser'];
		}
    },
    beforeDestroy(){
            this.$store.commit('users/seteditUsers', false)
    },
    mounted() {
        if(!this.editUsers)
            {this.$store.commit('users/setSingleUser', this.currentUser)}
    },
    methods:{
        dateFormating(date){
            return moment(date).format('DD / MM / YYYY')
        },
        deletePost(id) {
            db.collection("posts").doc(id).delete()
        }
    },

// beforeRouteEnter (to, from, next) {
//         const id = store.getters['auth/user'].user_id
//         console.log(id)
//         store.dispatch('profile/getUserPosts',id )
//         setTimeout(() => {
//             next()
//         },  1500);
//     },
    // ev.sender.dataItem(ev.sender.select().parent())
}
</script>

<style>
    .user-info {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .update-profile, .user-photo, .statistics {
        margin-left: auto;
        margin-right: auto;
    }
    .update-profile {
        margin-top: 50px;
    }
    .statistics {
        margin-top: 56px;
    }
    .user-photo {
        width: 200px;

        margin-top: -50px;
    }
    .user-photo img {
        width: 100%;
        border-radius: 50%;
        
    }
    .page-title {
        height: 100px;
    }
    .info {
        margin-top: 30px;
    }
    .small {
        font-size: .8rem;
    }
    .biography {
        padding-top: 10px;
        margin-top: 20px;
        border-top: 1px solid #8a8888;
    }
    .blog-posts-user {
        margin-top: 100px;
    }
    .blog-posts-user h1 {
        color: #737373
    }
    .blog-posts-user button {
        margin-bottom: 30px;
    }
    .blog-posts-user img {
        width: 100%;
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
    h2 {
        margin-bottom: 50px;
    }
    .update-profile button {
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
</style>
