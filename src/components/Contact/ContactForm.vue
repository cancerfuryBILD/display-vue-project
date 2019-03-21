<template>
    <section class="form">
        <h2>{{ formHeading }}</h2>
        <p>{{ formText }}</p>
        <form @submit.prevent="onSubmit" method="POST">

            <!-- NAME INPUT -->
            <input name="name" 
                type="text" 
                placeholder="Name" 
                id="inputName" 
                v-model.trim="inputName"
                @blur="$v.inputName.$touch()" 
                :class="{ error: $v.inputName.$error }"
                autocomplete="off">

                <p class="error-message" v-if="!$v.inputName.required && $v.inputName.$dirty">Name must not be empty.</p>
                <p class="error-message" v-if="!$v.inputName.minLength">Name must have at least {{$v.inputName.$params.minLength.min}} letters.</p>
                <p class="error-message" v-if="!$v.inputName.maxLength">Name must not exceed {{$v.inputName.$params.maxLength.max}} letters.</p>


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

            <!-- SUBJECT INPUT -->
            <input name="subject" 
                type="text" 
                placeholder="Subject" 
                id="inputSubject" 
                v-model.trim="inputSubject" 
                @blur="$v.inputSubject.$touch()" 
                :class="{ error: $v.inputSubject.$error }"
                autocomplete="off">

                <p class="error-message" v-if="!$v.inputSubject.required && $v.inputSubject.$dirty">Subject must not be empty.</p>
                <p class="error-message" v-if="!$v.inputSubject.minLength">Subject must have at least {{$v.inputSubject.$params.minLength.min}} letters.</p>
                <p class="error-message" v-if="!$v.inputSubject.maxLength">Subject must not exceed {{$v.inputSubject.$params.maxLength.max}} letters.</p>
      

            <!-- MESSAGE INPUT -->
            <textarea name="message" 
                type="textarea" 

                id="inputMessage" 
                v-on:keyup="countdown" 
                v-model="inputMessage"
                @blur="$v.inputMessage.$touch()" 
                :class="{ error: $v.inputMessage.$error }">
            </textarea>

                <p class="error-message" v-if="!$v.inputMessage.required && $v.inputMessage.$dirty">Message must not be empty.</p>
                <p class="error-message" v-if="!$v.inputMessage.minLength">Message must have at least {{$v.inputMessage.$params.minLength.min}} letters.</p>
                <p class="error-message" v-if="!$v.inputMessage.maxLength">Message must not exceed {{$v.inputMessage.$params.maxLength.max}} letters.</p>

            <p v-bind:class="{'text-danger': hasError }">{{remainingCount}} characters left!</p>
            <button :disabled="$v.$invalid">send message</button>
            <action-button :disabled="$v.$invalid" :buttonTitle="buttonTitle" :buttonType="buttonType" :buttonLink="buttonLink"/>
        </form>
    </section>
</template>

<script>
import ActionButton from '@/components/Common/ActionButton.vue';
import {required, email, minLength, maxLength} from 'vuelidate/lib/validators';

export default {
    name: 'ContactForm',
    components: {
        'action-button': ActionButton
    },
    data() {
        return {
            maxCount: 1000,
            remainingCount: 1000,
            hasError: false,
            error: 'error',
            inputName: '',
            inputEmail: '',
            inputSubject: '',
            inputMessage: '',
            formHeading: 'Contact Form',
            formText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec tincidunt dolor et tristique bibendum. Aenean sollicitudin vitae dolor ut posuere.`,
            buttonTitle: 'Send message',
            buttonType: 'submit',
            buttonLink: 'none'
        }
    },
    methods: {
        countdown: function() {
        this.remainingCount = this.maxCount - this.inputMessage.length;
        this.hasError = this.remainingCount < 0;
        }
    },
    validations: {
        inputEmail: {
            required,
            email
        },
        inputName: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(25)
        },
        inputSubject: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(50)
        },
        inputMessage: {
            required,
            minLength: minLength(20),
            maxLength: maxLength(1000)
        }
    }
}
</script>

<style>
    .error {
    border: 2px solid red;
    }
    .error-message {
    color: red;
    }
    form {
        margin-top: 16px;
    }
    .contact-form {
        display: grid;
        grid-template-columns: 60% 40%;
        margin-bottom: 249px;
    }
    input, textarea {
        padding: 9px 20px;
        margin: 8px 0px;
        display: inline-block;
        border: #8a8888 2px solid;
    }
    input {
        width: 350px;
        outline: none;

    }
    textarea {
        width: 99%;
        min-height: 220px;
        margin-bottom: 11px;
    }
    .form h2 {
        margin-bottom: 18px;
    }
    @media (max-width: 576px) {
        textarea, input {
            width: 100%;
        }
    }
</style>
