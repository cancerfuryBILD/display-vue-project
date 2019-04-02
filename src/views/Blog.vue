<template>
    <div>
        <page-title :headline="headline"/>
        <div  class="container blog-posts">
            <action-button :buttonTitle="buttonTitle" :buttonType="buttonType" :buttonLink="buttonLink"/>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import ActionButton from '@/components/Common/ActionButton.vue';

export default {
    data() {
        return {
            headline: 'Our latest posts ',
            buttonTitle: 'Add new post',
            buttonType: 'button',
            buttonLink: '/new-post'
        }
    },
    components: {
        PageTitle,
        ActionButton
    },
}
</script>

<style>
    .blog-posts {
        margin-top: 50px;
    }
</style>
