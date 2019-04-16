<template>
<div>
    <page-title :headline="headline"/>
    <div class="container user-info">
        <div class="statistics">
            <span class="small">posts: </span>
            <span class="small">3</span>
        </div>
        <div class="user-photo">
            <img v-if="user.img !== ''" :src="user.img" alt="">
            <img v-if="user.img == ''" src="/images/no-img.jpg" alt="">
        </div>
        <div class="update-profile">
            <action-button :buttonTitle="buttonTitle"/>
        </div>
    </div>
    <div class="info text-center container" v-if="user">
        <span>{{user.firstName}} {{user.lastName}}, 38</span><br>
        <span class="small">{{user.occupation}}</span><br>
        <div class="biography">
            <span class="small">Biography</span><br>
            <p>{{user.biography}}</p>
        </div>
    </div>
    <div class="container blog-posts-user ">
        <h2 class="text-center">{{user.firstName}}'s Posts</h2>
        <div v-for="(post, index) in posts" :key="index">
            <article>
                <div class="row">
                    <div class="col-sm-4">
                        <img :src="post.thumbnail" alt="">
                    </div>
                    <div class="col-sm-8 flex-column d-flex">
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
import ActionButton from '@/components/Common/ActionButton.vue';
import moment from 'moment';
export default {
    name: 'ProfilePage',
    data() {
        return {
            headline: ' ',
            buttonTitle: 'Update Profile',
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
			return this.$store.getters['auth/user'];
		},
    },
    created() {
        this.$store.dispatch('blog/getPosts')
    },
    methods:{
        dateFormating(date){
            return moment(date).format('DD / MM / YYYY')
        }
    },

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
</style>
