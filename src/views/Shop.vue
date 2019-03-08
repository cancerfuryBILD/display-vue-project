<template>
    <div class="container">
        <h2>Call from Axios</h2>
        <div class="posts" v-for="post in posts" :key="post.index">
            <img :src="post.urlToImage" alt="">
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Axios',
    data() {
        return {
            posts: []
        }
    },
    created() {
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-04&sortBy=publishedAt&apiKey=a8aec5f2dee24f5eb5a93558c107fb91')
        .then(response => {
            console.log(response)
            this.posts = response.data.articles
        })
    }
}
</script>

<style scoped>
    h2 {
        margin-bottom: 30px;
    }
    .posts {
        margin-bottom: 25px;
        border-bottom: 1px solid #8a8888;
        overflow: hidden;
    }
    .posts:last-child {
        border-bottom: none
    }
    img {
        width: 190px;
        height: 130px;
        float: left;
        padding: 0 15px 15px 0;
    }
    .container {
        margin-bottom: 230px;
    }
</style>
 