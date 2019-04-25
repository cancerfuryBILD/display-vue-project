<template>
    <div class="grid-wrapper container">
        <Grid :style="{height: 'auto'}"
            :data-items="users"
            :columns="columns"
            @rowclick="userProfile">
        </Grid>

        <!-- <kendo-grid :data-source="users"
                    :height="550"
                    :sortable="'true'"
                    :sortable-allow-unsort="true"
                    :selectable="'true'"
                    v-on:change="onChange"
                    :selected-field="selectedField">
            <kendo-grid-column :field="'firstName'"
                                :title="'First Name'"
                                :width="80">
            </kendo-grid-column>
            <kendo-grid-column :field="'lastName'"
                                :title="'Last Name'"
                                :width="80">
            </kendo-grid-column>
            <kendo-grid-column :field="'email'"
                                :title="'Email'"
                                :width="120">
            </kendo-grid-column>
            <kendo-grid-column :field="'role'"
                                :title="'Role'"
                                :width="50">
            </kendo-grid-column>
        </kendo-grid> -->
    </div>
</template>

<script>
import { Grid } from '@progress/kendo-vue-grid'
import Vue from 'vue'
Vue.component('Grid', Grid);
export default {
    name: 'Users',
    data() {
        return {
            selectedField: 'selected',
            columns: [
                { field: 'firstName', title: 'First Name'},
                { field: 'lastName', title: 'Last Name' },
                { field: 'email', title: 'Email' },
                { field: 'role', title: 'Role' }
            ]
        }
    },
    computed: {
        users() {
			return this.$store.getters['users/users'];
		},
    },
    methods: {
        userProfile(event) {
            this.$store.commit('users/seteditUsers', true);
            let user = event.dataItem;
            this.$store.commit('users/setSingleUser', user);
            this.$router.push('/profile/' + user.id);
        }
    },
    created() {
        this.$store.dispatch('users/getUsersList')
    }
}
</script>

<style>
    .grid-wrapper td:hover {
        cursor: pointer;
    }
</style>
