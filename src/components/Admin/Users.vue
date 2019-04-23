<template>
    <div class="grid-wrapper container">
        <kendo-grid :data-source="users"
                    :height="550"
                    :sortable="'true'"
                    :sortable-allow-unsort="true">
            <kendo-grid-column :field="'firstName'"
                                :title="'First Name'"
                                :width="120">
            </kendo-grid-column>
            <kendo-grid-column :field="'lastName'"
                                :title="'Last Name'"
                                :width="120">
            </kendo-grid-column>
            <kendo-grid-column :field="'email'"
                                :title="'Email'"
                                :width="120">
            </kendo-grid-column>
            <kendo-grid-column :field="'role'"
                                :title="'Role'"
                                :width="120">
            </kendo-grid-column>
        </kendo-grid>
    </div>
</template>

<script>


export default {
    name: 'Users',
    computed: {
        users() {
			return this.$store.getters['users/users'];
		},
    },
    created() {
        this.$store.dispatch('users/getUsers')
    }
}
</script>

<style>

</style>
