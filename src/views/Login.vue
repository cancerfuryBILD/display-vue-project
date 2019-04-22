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
                        :class="{ 'error': $v.email.$error }" 
                        v-model.trim="email">

                    <div v-if="$v.email.$error">
                        <p class="error-message" v-if="!$v.email.email">Please enter a valid email address.</p>
                        <p class="error-message" v-if="!$v.email.required">Email must not be empty.</p>
                    </div>

                    <!-- PASSWORD INPUT -->
                    <input name="password" 
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        v-model.trim="password"
                        autocomplete="off"
                        :class="{ 'error': $v.password.$error }"> 

                        <div v-if="$v.password.$error">
                            <p class="error-message" v-if="!$v.password.required">Password must not be empty.</p>
                            <p class="error-message" v-if="getfeedback">{{ getfeedback }}</p>
                        </div>
                    <button :disabled="submited === 'PENDING'" type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import '@/assets/style/login-style.css';
import {required, email} from 'vuelidate/lib/validators';
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
            feedback: '',
            error: 'error',
            submited: ''
        }
    },
    computed: {
        getfeedback() {
            return this.$store.getters['auth/feedback'];
        },
        redirect() {
            return this.$store.getters['auth/redirect']
        }
    },
    methods: {
        login() {
            this.submited = 'PENDING'
            this.$v.$touch()

            if (this.$v.$invalid) {
                this.feedback = 'All fields are required!'
                this.submited = ''
                this.$toast.error({
                    title:'ERROR',
                    message:'Please fill in all required fields!'
                })
            } else {
                this.submited = 'PENDING'
            this.$store.dispatch('auth/login', {email: this.email, password: this.password})
            }
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
    }
}
</script>

<style>

</style>
