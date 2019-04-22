<template>
    <div class="grid-wrapper">
    <kendo-grid :data-source="'users'"
                :height="550">

    <kendo-grid-column :field="'firstName'"
                           :title="'First Name'"
                           :width="120"></kendo-grid-column>
</kendo-grid>
    </div>
</template>

<script>
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

export default {
    name: 'Users',
    components: {
        Grid
    },
    computed: {
        users() {
			return this.$store.getters['users/users'];
		},
    }
}
</script>

<style>

</style>
