<template>
    <div>
        <page-title :headline="headline"/>
        <div class="container">
            <div class="login shadow container">
                <form @submit.prevent="signup" >
                    <h2>Signup</h2>
                    <!-- EMAIL INPUT -->
                    <input name="email" 
                        type="email" 
                        placeholder="Email Address" 
                        id="inputEmail" 
                        @blur="$v.inputEmail.$touch()" 
                        v-model.trim="inputEmail"
                        :class="{ error: $v.inputEmail.$error }"
                        autocomplete="off"> 

                    <p class="error-message" v-if="!$v.inputEmail.email">Please enter a valid email address.</p>
                    <p class="error-message" v-if="!$v.inputEmail.required && $v.inputEmail.$dirty">Email must not be empty.</p>
                    
                    <!-- PASSWORD INPUT -->
                    <input name="password" 
                        type="password" 
                        placeholder="Password" 
                        id="inputPassword" 
                        v-model.trim="inputPassword"
                        @blur="$v.inputPassword.$touch()" 
                        :class="{ error: $v.inputPassword.$error }"
                        autocomplete="off">

                        <p class="error-message" v-if="!$v.inputPassword.required && $v.inputPassword.$dirty">Password must not be empty.</p>
                        <p class="error-message" v-if="!$v.inputPassword.minLength">Password must have at least {{$v.inputPassword.$params.minLength.min}} letters.</p>

                    <button :disabled="$v.$invalid">Signup</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import '@/assets/style/login-style.css';
import {required, email, minLength} from 'vuelidate/lib/validators';

export default {
    components: {
        PageTitle
    },
    data() {
        return {
            headline: 'Fill out the form below',
            inputPassword: '',
            inputEmail: '',
            error: 'error'
        }
    },
    validations: {
        inputEmail: {
            required,
            email
        },
        inputPassword: {
            required,
            minLength: minLength(6)
        }
    }
}
</script>

<style>

</style>
