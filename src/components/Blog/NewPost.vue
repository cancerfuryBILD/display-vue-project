<template>
    <div class="new-post">
        <page-title :headline="headline"/>
        <div class="container">
            <!-- HEADING INPUT -->
            <label for="title">Title</label>
            <input name="title" 
                type="text"
                id="title" 
                @blur="$v.title.$touch()" 
                v-model="title"
                :class="{ error: $v.title.$error }"
                autocomplete="off">
            <p>URL: http://localhost:8080/blog/{{slugify(title)}}</p>
            <p class="error-message" v-if="!$v.title.required && $v.title.$dirty">Title must not be empty.</p>

            <!-- THUMBNAIL INPUT -->
            <label for="title">Thumbnail URL</label>
            <input name="thumbnail" 
                type="text"
                id="thumbnail" 
                @blur="$v.thumbnail.$touch()" 
                v-model="thumbnail"
                :class="{ error: $v.thumbnail.$error }"
                autocomplete="off">
            <p class="error-message" v-if="!$v.thumbnail.required && $v.thumbnail.$dirty">Thumbnail must not be empty.</p>

            <!-- DATEPICKER INPUT -->
            <label for="title">Select Date</label>
            <datepicker v-model="date"></datepicker>

            <!-- POST TEXT INPUT -->
            <vue-ckeditor v-model="postText" />

            <!-- PUBLIS POST OPTION -->
            <div class="publish">
                <input type="checkbox" id="publish" v-model="publish" style="display:none"/>
                <label for="publish"></label>
                <span>Publish Post</span><br>
            </div>
            
            <button class="action-btn" @click="addPost">send</button>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import {required} from 'vuelidate/lib/validators';
import moment from 'moment';
import db from '../../firebase/init';
import VueCkeditor from 'vue-ckeditor2';
import firebase from 'firebase/app';
import Datepicker from 'vuejs-datepicker';

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
            date: Date.now(),
            publish: false
        }
    },
    components: {
        PageTitle,
        VueCkeditor,
        Datepicker
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
        currentUser() {
            return this.$store.getters['auth/currentUser'];
        },
        post() {
            return this.$store.getters['singlePost/post'];
        }
    },
    methods: {
        addPost() {
            var date1 = moment(this.date).utc().startOf('day').format();
            var date2 = (new Date(date1))
            db.collection('posts').add({
                title: this.title,
                postText: this.postText,
                author: this.currentUser.firstName + ' ' + this.currentUser.lastName,
                thumbnail: this.thumbnail,
                uid: this.currentUser.id,
                timestamp: date2,
                slug: this.slugify(this.title),
                publish: this.publish
            })
            .then(() => {
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
    }
}
</script>

<style>
    .new-post input[type="text"]{
        margin-bottom: 20px;
        width: 100%;
        border: 1px solid #d1d1d1;
        text-transform: uppercase;
        color: #737373;
    }
    .new-post label {
        margin-top: 20px;
        margin-bottom: 0px;
        color: #8a8888;
    }
    .new-post input[type="checkbox"]{
        margin-left: 30px;
        width: 25px;
        height: 25px;
    }
    .new-post button {
        margin-top: 30px;
    }
    .new-post p{
        margin-bottom: 0px;
    }
    .error {
        border: 2px solid red !important;
    }

    /* CHECKBOX TOGGLE */
    .publish span {
        font-size: 1.1rem;
    }
    .publish input {
        position: absolute;
        left: -100vw;
    }
    .publish input:checked +  label {
        --s: 1;
    }
    .publish label {
        --s: 0;
        margin-right: 25px;
        margin-bottom: -15px;
        display: inline-block;
        position: relative;
        --c: #2ecc71;
        text-indent: -100vw;
        filter: blur(0.5px);
        cursor: pointer;
    }
    .publish label, .publish label:before {
        border: solid 0.3125em transparent;
        width: 6em;
        height: 2.625em;
        border-radius: 1.3125em;
        box-shadow: inset 0 0.125em 0.75em rgba(0, 0, 0, .5);
        background: repeating-linear-gradient(-45deg, rgba(119, 119, 119, .04) 0, rgba(119, 119, 119, .04) 2px, transparent 0, transparent 5px) padding-box, repeating-linear-gradient(45deg, rgba(119, 119, 119, .04) 0, rgba(119, 119, 119, .04) 2px, transparent 0, transparent 5px) padding-box, linear-gradient(transparent, rgba(0, 0, 0, .32)) padding-box, linear-gradient(var(--c), var(--c)) padding-box, linear-gradient(#bebebb, #fdfdfc) border-box;
    }
    .publish label:before, .publish label:after {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
    }
    .publish label:before {
        margin: -0.3125em;
        opacity: calc(1 - var(--s));
        --c: #f89183;
        transition: 0.2s opacity;
    }
    .publish label:after {
        border: solid 3px transparent;
        width: 2.6875em;
        height: 2em;
        border-radius: 1em;
        transform: translate(calc(var(--s)*100%));
        box-shadow: 0 2px 9px rgba(0, 0, 0, .8);
        background: linear-gradient(#d1d1d1, #edede9) padding-box, linear-gradient(#fcfcfc, #b2b2b2) border-box;
        transition: 0.2s transform ease-in;
    }
</style>
