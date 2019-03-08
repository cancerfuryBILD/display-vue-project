<template>
    <div>
        <app-category />
       
    </div>
</template>

<script>
import Category from "@/components/Work/Category.vue";
import PageLayout from "@/components/Work/PageLayout.vue";
export default {
    components: {
        'app-category': Category,
        'app-page-layout': PageLayout
        
    }
}
</script>

<style>

</style>
