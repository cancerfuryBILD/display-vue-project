<template>
    <div class="new-post">
        <page-title :headline="headline"/>
        <div class="container">
            <!-- HEADING INPUT -->
                    <input name="title" 
                        type="text" 
                        placeholder="Title" 
                        id="title" 
                        @blur="$v.title.$touch()" 
                        v-model="title"
                        :class="{ error: $v.title.$error }"
                        autocomplete="off">
            <p>{{slugify(title)}}</p>
            <p class="error-message" v-if="!$v.title.required && $v.title.$dirty">Title must not be empty.</p>

            <!-- THUMBNAIL INPUT -->
                    <input name="thumbnail" 
                        type="text" 
                        placeholder="Thumbnail URL" 
                        id="thumbnail" 
                        @blur="$v.thumbnail.$touch()" 
                        v-model="thumbnail"
                        :class="{ error: $v.thumbnail.$error }"
                        autocomplete="off">

                    <p class="error-message" v-if="!$v.thumbnail.required && $v.thumbnail.$dirty">Thumbnail must not be empty.</p>

                    <textarea name="editor" id="editor" v-model="postText"></textarea>
                    <button class="action-btn" @click="addPost">send</button>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import {required} from 'vuelidate/lib/validators';
import moment from 'moment';
import db from '../../firebase/init';

export default {
    name: 'NewPost',
    data() {
        return {
            headline: 'Add new post',
            title: '',
            postText: null,
            author: null,
            thumbnail: '',
            slug: "",
            error: 'error',
        }
    },
    components: {
        PageTitle,
    },
    validations: {
        title: {
            required
        },
        thumbnail: {
            required
        }
    },
    computed: {
        user() {
            return this.$store.getters['auth/user'];
        },
        post() {
            return this.$store.getters['singlePost/post'];
        }
    },
    methods: {
        addPost() {
            db.collection('posts').add({
                title: this.title,
                postText: CKEDITOR.instances.editor.getData(),
                author: this.user.firstName + ' ' + this.user.lastName,
                thumbnail: this.thumbnail,
                uid: this.user.user_id,
                timestamp: moment(Date.now()).utc().startOf('day').format(),
                slug: this.slugify(this.title)
            }).then(() => {
                this.$router.push({ name: 'blog' })
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
		mounted () {
            CKEDITOR.replace('editor')
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
