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
                        v-model.trim="title"
                        :class="{ error: $v.title.$error }"
                        autocomplete="off"> 

                    <p class="error-message" v-if="!$v.title.required && $v.title.$dirty">Title must not be empty.</p>

                    <textarea name="editor" id="editor" v-model="postText"></textarea>
                    <button class="action-btn" @click="addPost">send</button>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import {required} from 'vuelidate/lib/validators';
import db from '@/firebase/init';
import moment from 'moment';

export default {
    data() {
        return {
            headline: 'Add new post',
             title: null,
             postText: null,
             author: null
        }
    },
    components: {
        PageTitle,
    },
    validations: {
        title: {
            required
        }
    },
    computed: {
        getUser() {
       return this.$store.getters['user/pushUser'];
     }
    },
    methods: {
        addPost() {
            db.collection('posts').add({
                title: this.title,
                postText: CKEDITOR.instances.editor.getData(),
                author: this.getUser.firstName + ' ' + this.getUser.lastName,
                timestamp: Date.now()
            })
        }
    },
		mounted () {
        //    console.log(CKEDITOR.instances.editor1.getData())
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
</style>
