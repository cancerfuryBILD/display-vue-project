<template>
    <div class="container">
        <div class="row">
            <article class="col-md-6" v-for="(articleText, index) in articleTexts" :key="index" v-html="articleText"></article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutArticle',
    props: ['articleTexts']
}
</script>

<style>
    article h2 {
        margin-bottom: 18px;
        letter-spacing: .02rem;
    }
    article {
        margin-bottom: 23px;
    }
</style>
