<template>
    <div>
        <page-title :headline="headline"/>
        <div class="container">
            <div class="login shadow container">
                <form @submit.prevent="signup" >
                    <h2>Signup</h2>
                    <!-- FIRST NAME INPUT -->
                    <input name="firstName" 
                        type="text" 
                        placeholder="First Name" 
                        id="firstName" 
                        @blur="$v.firstName.$touch()" 
                        v-model.trim="firstName"
                        :class="{ error: $v.firstName.$error }"
                        autocomplete="off"> 

                    <p class="error-message" v-if="!$v.firstName.required && $v.firstName.$dirty">First Name must not be empty.</p>
                    
                    <!-- LAST NAME INPUT -->
                    <input name="lastName" 
                        type="text" 
                        placeholder="Last Name" 
                        id="lastName" 
                        @blur="$v.lastName.$touch()" 
                        v-model.trim="lastName"
                        :class="{ error: $v.lastName.$error }"
                        autocomplete="off"> 

                    <p class="error-message" v-if="!$v.lastName.required && $v.lastName.$dirty">Last Name must not be empty.</p>
                    
                    <!-- EMAIL INPUT -->
                    <input name="email" 
                        type="email" 
                        placeholder="Email Address" 
                        id="email" 
                        @blur="$v.email.$touch()" 
                        v-model.trim="email"
                        :class="{ error: $v.email.$error }"
                        autocomplete="off"> 

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

                        <p class="error-message" v-if="!$v.password.required && $v.password.$dirty">Password must not be empty.</p>
                        <p class="error-message" v-if="!$v.password.minLength">Password must have at least {{$v.password.$params.minLength.min}} letters.</p>
                        <p class="error-message" v-if="feedback">{{ feedback }}</p>

                    <button type="submit" :disabled="$v.$invalid">Signup</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import '@/assets/style/login-style.css';
import {required, email, minLength} from 'vuelidate/lib/validators';
import db from '@/firebase/init';
import firebase from 'firebase';

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
            feedback: null,
            error: 'error'
        }
    },
    methods: {
        signup() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(cred => {
                    db.collection("users").doc().set({
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        user_id: cred.user.uid
                    }).then(() => {
                            this.$router.replace({ name: 'login' })
                        })
                })
                .catch(error =>  {
                    this.feedback = error.message
            });
        }
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
            minLength: minLength(6)
        }
    }
}
</script>

<style>

</style>
