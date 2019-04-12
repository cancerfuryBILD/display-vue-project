<template>
    <div>
        <page-title :headline="headline"/>
        <div class="container">
            <div class="login shadow">
                <form  @submit.prevent="login">
                    <h2>Login</h2>
                    
                    <!-- EMAIL INPUT -->
                    <input name="email" 
                        type="email" 
                        placeholder="Email Address" 
                        id="email" 
                        @blur="$v.email.$touch()" 
                        v-model.trim="email"
                        :class="{ error: $v.email.$error }"> 

                    <p class="error-message" v-if="!$v.email.email">Please enter a valid email address.</p>
                    <p class="error-message" v-if="!$v.email.required && $v.email.$dirty">Email must not be empty.</p>
                    
                    <!-- PASSWORD INPUT -->
                    <input name="password" 
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        v-model.trim="password"
                        @blur="$v.password.$touch()" 
                        :class="{ error: $v.password.$error }"
                        autocomplete="off">

                        <p class="error-message" v-if="!$v.password.required">Password must not be empty.</p>
                        <p class="error-message" v-if="feedback">{{ feedback }}</p>

                    <button type="submit" :disabled="$v.$invalid">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import '@/assets/style/login-style.css';
import {required, email, minLength} from 'vuelidate/lib/validators';
import firebase from 'firebase/app';

export default {
    components: {
        PageTitle
    },
    data() {
        return {
            headline: 'Fill in your credentials below',
            password: '',
            email: '',
            // feedback: '',
            error: 'error'
        }
    },
    computed: {
        feedback() {
            return this.$store.getters['auth/feedback'];
        }
    },
    methods: {
        login() {
            this.$store.dispatch('auth/login', {email: this.email, password: this.password})       
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required
        }
    },
    beforeCreated() {
         firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
    },
    beforeDestroy() {
         firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    }
}
</script>

<style>

</style>
