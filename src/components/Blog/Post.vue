<template>
    <div>
        <page-title :headline="headline"/>
        <div class="container">
            <h1>{{ post.title }}</h1>
            <h4>{{ post.author }}</h4>
            <div v-html="post.postText"></div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import moment from 'moment';

export default {
    name: 'Post',
    data() {
      return {
        post: {}
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then(res => {
            this.post = res.data
          }).catch(res => {
            console.log(res)
          })
      }
    },
    created() {
      this.getPost()
    }
}
</script>

<style>

</style>
