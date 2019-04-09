<template>
    <div class="single-post">
        <page-title :headline="post.title"/>
        <div class="container" v-if="post">
            <div class="d-flex justify-content-between  mt-auto mb-3 ">
                <span class="author">Author: {{ post.author }}</span>
                <span class="published">Published: {{ dateFormating(post.timestamp) }} </span>
            </div>
            <div v-html="post.postText"></div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import moment from 'moment';
import db from '../../firebase/init';

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
    },
}
</script>

<style>
	h4, h1 {
		color: black;
	}
	.single-post img {
		width: 100%;
	}
</style>
