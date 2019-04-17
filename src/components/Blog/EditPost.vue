<template>
    <div class="new-post">
        <page-title :headline="headline"/>
        <div v-if="post" class="container">
            <!-- HEADING INPUT -->
                    <input name="title" 
                        type="text" 
                        placeholder="Title" 
                        id="title" 
                        v-model="post[0].title"
                        autocomplete="off">
            <p>{{slugify(post[0].title)}}</p>

            <!-- THUMBNAIL INPUT -->
            <input name="thumbnail" 
                type="text" 
                placeholder="Thumbnail URL" 
                id="thumbnail" 
                v-model="post[0].thumbnail"
                autocomplete="off">

            <textarea name="editor" id="editor" v-model="post[0].postText"></textarea>
            <button @click="updatePost" class="action-btn">Update</button>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import moment from 'moment';
import {store} from "../../store/index";

export default {
    name: 'EditPost',
    data() {
        return {
            headline: 'Edit post',
            error: 'error',
        }
    },
    components: {
        PageTitle,
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
                postText: CKEDITOR.instances.editor.getData(),
                thumbnail: this.post[0].thumbnail,
                slug: this.slugify(this.post[0].title)
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
	mounted () {
        CKEDITOR.replace('editor');
    }
}

</script>

<style>
    .new-post input {
        margin-top: 50px;
        margin-bottom: 30px;
        width: 100%;
        border: 1px solid #d1d1d1;
        text-transform: uppercase;
        color: #737373;
    }
    .new-post button {
        margin-top: 30px;
    }
    .new-post input[name="thumbnail"] {
        margin-top: 0;
    }
    .error {
        border: 2px solid red !important;
    }
</style>
