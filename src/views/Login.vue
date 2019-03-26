<template>
    <div>
        <page-title :headline="headline"/>
        <div class="container">
            <div class="login shadow">
                <form  @submit.prevent="login">
                    <h2>Login</h2>
                    <input placeholder="Email" type="email" name="email"><br>
                    <input placeholder="Password" type="password" name="password" ><br>
                    <!-- <p class="red-text center" v-if="feedback">{{ feedback }}</p><br> -->
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import '@/assets/style/login-style.css';

export default {
    components: {
        PageTitle
    },
    data() {
        return {
            headline: 'Fill in your credentials below'
        }
    }
}
</script>

<style>

</style>
