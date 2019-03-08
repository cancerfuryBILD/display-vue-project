<template>
    <section class="form">
        <h2>{{ formHeading }}</h2>
        <p>{{ formText }}</p>
        <form action="#" method="POST">
            <input name="name" type="text" placeholder="Name" id="input-name" required>
            <div id="input-name-error"></div>
            <input name="email" type="email" placeholder="Email Address" id="input-email" required>
            <div id="input-email-error"></div>
            <input name="subject" type="text" placeholder="Subject" id="input-subject" required>
            <div id="input-email-subject"></div>
            <textarea name="message" type="textarea" maxlength="1000" id="input-message" required></textarea>
            <div id="input-email-message"></div>
            <action-button :buttonTitle="buttonTitle" :buttonType="buttonType" :buttonLink="buttonLink"/>
        </form>
    </section>
</template>

<script>
import ActionButton from '@/components/Common/ActionButton.vue';

export default {
    name: 'ContactForm',
    components: {
        'action-button': ActionButton
    },
    data() {
        return {
            formHeading: 'Contact Form',
            formText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec tincidunt dolor et tristique bibendum. Aenean sollicitudin vitae dolor ut posuere.`,
            buttonTitle: 'Send message',
            buttonType: 'submit',
            buttonLink: 'none'

        }
    }
}
</script>

<style>
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
