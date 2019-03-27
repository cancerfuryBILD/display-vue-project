<template>
    <div class="test container">
        <page-title :headline="headline"/>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" 
            type="button" 
            id="dropdownMenuButton" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false">
            CATEGORIES
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <label @click="changeCategory(category)" v-for="(category, index) in categories" :key="index">
                <input type="radio" v-model="selectedCategory" :value="category" />{{ category }} </label>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';

export default {
    data() {
        return {
            headline: 'Fill out the form below',
        }},
    components: {
        PageTitle
    },
}
</script>

<style>
/* .test {
    margin-bottom: 255px;
} */

</style>
