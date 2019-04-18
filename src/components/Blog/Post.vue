<template>
    <div class="single-post" v-if="post">
        <page-title :headline="post[0].title"/>
        <div class="post-content container">
            <div class="d-flex justify-content-between article-meta mt-auto mb-5 ">
                <span class="author">Author: {{ post[0].author }}</span>
                <span class="published">Published: {{ dateFormating(post[0].timestamp) }} </span>
            </div>
            <div v-html="post[0].postText"></div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import moment from 'moment';

export default {
    name: 'Post',
    components: {
      	PageTitle
    },
    methods:{
        dateFormating(date){
            return moment(date).format('DD / MM / YYYY')
        }
    },
    computed: {
     	 post() {
        	return this.$store.getters['singlePost/post']
      	}
    },
    beforeCreate() {
      	let id = this.$route.params.id;
          this.$store.dispatch('singlePost/getSinglePost', id)
          console.log(id)
    }
}
</script>

<style>
	.single-post img {
		width: 100%;
	}
    .post-content {
        padding-top: 50px;
    }
    .article-meta span {
        font-size: 1rem
    }
</style>
