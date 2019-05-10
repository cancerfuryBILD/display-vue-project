<template>
    <div class="grid-wrapper container">
        <kendo-grid :data-source="users"
                    :height="250"
                    :sortable="'true'"
                    :sortable-allow-unsort="true"
                    :selectable="'true'"
                    v-on:change="userProfile"
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
        </kendo-grid>
    </div>
</template>

<script>
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import Vue from 'vue'
import {store} from "@/store/index";

Vue.use(GridInstaller)

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
            const element = event.sender.select();
            const id = event.sender.dataItem(element[0]).id 
            this.$router.push('/profile/' + id);
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
