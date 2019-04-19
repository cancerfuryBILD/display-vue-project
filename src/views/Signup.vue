<template>
    <div>
        <page-title :headline="headline"/>
        <div class="container">
            <div class="login shadow container">
                <form @submit.prevent="signup" >
                    <h2>Signup</h2>

                    <!-- FIRST NAME INPUT -->
                    <div>
                        <input name="firstName" 
                            type="text" 
                            placeholder="First Name" 
                            id="firstName" 
                            v-model.trim="firstName"
                            autocomplete="off"
                            :class="{ 'error': $v.firstName.$error }"> 
                        <div v-if="$v.firstName.$error">
                            <p class="error-message" v-if="!$v.firstName.required">First Name must not be empty.</p>
                        </div>
                    </div>

                    <!-- LAST NAME INPUT -->
                    <div>
                        <input name="lastName" 
                            type="text" 
                            placeholder="Last Name" 
                            id="lastName" 
                            v-model.trim="lastName"
                            autocomplete="off"
                            :class="{ 'error': $v.lastName.$error }"> 
                        <div v-if="$v.lastName.$error">
                            <p class="error-message" v-if="!$v.lastName.required">Last Name must not be empty.</p>
                        </div>
                    </div>

                    <!-- EMAIL INPUT -->
                    <div >
                        <input name="email" 
                            type="email" 
                            placeholder="Email Address" 
                            id="email" 
                            v-model.trim="email"
                            autocomplete="off"
                            :class="{ 'error': $v.email.$error }"> 
                        <div v-if="$v.email.$error">
                            <p class="error-message" v-if="!$v.email.email">Please enter a valid email address.</p>
                            <p class="error-message" v-if="!$v.email.required">Email must not be empty.</p>
                        </div>
                    </div>

                    <!-- PASSWORD INPUT -->
                    <div>
                        <input name="password" 
                            type="password" 
                            placeholder="Password" 
                            id="password" 
                            v-model.trim="password"
                            autocomplete="off"
                            :class="{ 'error': $v.password.$error }">
                        <div v-if="$v.password.$error">
                            <p class="error-message" v-if="!$v.password.required">Password must not be empty.</p>
                            <p class="error-message" v-if="!$v.password.minLength">Password must have at least {{$v.password.$params.minLength.min}} letters.</p>
                            <p class="error-message" v-if="!$v.password.maxLength">Password must not exceed {{$v.password.$params.maxLength.max}} letters.</p>
                            <p class="error-message" v-if="feedback">{{ feedback }}</p>
                            <p class="error-message" v-if="getfeedback">{{ getfeedback }}</p>
                        </div>
                    </div>

                    <button :disabled="submited === 'PENDING'" type="submit" >Signup</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import '@/assets/style/login-style.css';
import {required, email, minLength, maxLength} from 'vuelidate/lib/validators';
import db from '@/firebase/init';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    components: {
        PageTitle
    },
    data() {
        return {
            headline: 'Fill out the form below',
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            user_id: '',
            thumbnail: '',
            role: 'Role.User',
            feedback: null,
            error: 'error',
            submited: ''
        }
    },
    computed: {
        getfeedback() {
            return this.$store.getters['auth/feedback'];
        },
    },
    methods: {
        signup() {
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
                this.$store.dispatch('auth/signup', 
                {email: this.email, 
                password: this.password,
                firstName: this.firstName,
                user_id: this.user_id,
                thumbnail: this.thumbnail,
                lastName: this.lastName,
                role: this.role})
                this.submited = ''
        }},
    },
    validations: {
        firstName: {
            required
        },
        lastName: {
            required
        },
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(40)
        }
    }
}
</script>

<style>

</style>
