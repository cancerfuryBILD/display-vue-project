<template>
    <div class="new-post">
        <page-title :headline="headline"/>
        <div v-if="post" class="container">
            <!-- HEADING INPUT -->
            <label for="title">Title</label>
            <input name="title" 
                type="text"
                id="title" 
                v-model="post[0].title"
                autocomplete="off">
            <p>URL: http://localhost:8080/blog/{{slugify(post[0].title)}}</p>

            <!-- THUMBNAIL INPUT -->
            <label for="title">Thumbnail URL</label>
            <input name="thumbnail" 
                type="text"
                id="thumbnail" 
                v-model="post[0].thumbnail"
                autocomplete="off">

            <!-- DATEPICKER INPUT -->
            <label for="title">Select Date</label>
            <datepicker v-model="date"></datepicker>

            <!-- POST TEXT INPUT -->
            <vue-ckeditor v-model="post[0].postText" />

            <!-- PUBLIS POST OPTION -->
            <div class="publish">
                <input type="checkbox" id="publish" v-model="post[0].publish" style="display:none"/>
                <label for="publish"></label>
                <span>Publish Post</span><br>
            </div>

            <button @click="updatePost" class="action-btn">Update</button>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import moment from 'moment';
import {store} from "../../store/index";
import db from '@/firebase/init';
import Datepicker from 'vuejs-datepicker';
import VueCkeditor from 'vue-ckeditor2';

export default {
    name: 'EditPost',
    data() {
        return {
            headline: 'Edit post',
            error: 'error',
            date: null
        }
    },
    components: {
        PageTitle,
        Datepicker,
        VueCkeditor
    },
    computed: {
        post() {
            return this.$store.getters['singlePost/post'];
        }
    },
    methods: {
        updatePost() {
            db.collection('posts').doc(this.post[0].id).update({
                title: this.post[0].title,
                postText: this.post[0].postText,
                thumbnail: this.post[0].thumbnail,
                slug: this.slugify(this.post[0].title),
                timestamp: this.date,
                publish: this.post[0].publish
            }).then(() => {
                this.$router.push({ path: '/blog/' + this.slugify(this.post[0].title) })
                })
        },
        slugify(url) {
           return url.toString().toLowerCase()
               .replace(/\s+/g, '-')
               .replace(/č/g, 'c')
               .replace(/ć/g, 'c')
               .replace(/đ/g, 'dj')
               .replace(/š/g, 's')
               .replace(/ž/g, 'z')
               .replace(/[^\w\-]+/g, '')
               .replace(/\-\-+/g, '-')
               .replace(/^-+/, '')
               .replace(/-+$/, '');
       },
    },
    beforeRouteEnter (to, from, next) {
        const id = to.params.id;
        store.dispatch('singlePost/getSinglePost', id);
        setTimeout(() => {
          next();
        }, 400);
        
    },
	created () {
        this.date = this.post[0].timestamp.toDate();
    }
}

</script>

<style>

</style>
