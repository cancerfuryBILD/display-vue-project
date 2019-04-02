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
            {{title}} {{postText}}
            <textarea name="editor" id="editor" v-model="postText"></textarea>
            <button @click="send">send</button>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import {required} from 'vuelidate/lib/validators';

import Vue from "vue";

export default {
    data() {
        return {
            headline: 'Add new post',
             title: '',
             postText: 'kristijan',
             value: {
        type: String
      }
        //     value:'',
        //     toolbar: {
        //         type:[],
        //         default: () => [
        //   ['Undo','Redo'],
        //   ['Bold','Italic','Strike'],
        //   ['NumberedList','BulletedList'],
        //   ['Cut','Copy','Paste'],
        // ]
        //     },
        //     language: {
        //         type: String,
        //         default: 'en'
        //     }
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
    methods: {
        send() {
            console.log(CKEDITOR.instances.editor.getData())
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
        width: 100%;
    }
</style>
