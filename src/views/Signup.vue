<template>
    <div>
        <page-title :headline="headline"/>
        <div class="container">
            <div class="login shadow container">
                <form @submit.prevent="signup" >
                    <h2>Signup</h2>
                    <input placeholder="Email" type="email" name="email" v-model="email"><br>
                    <input placeholder="Password" type="password" name="password" v-model="password"><br>
                    <!-- <p class="red-text center" v-if="feedback">{{ feedback }}</p> -->
                    <button>Signup</button>
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
            headline: 'Fill out the form below'
        }
    }
}
</script>

<style>
/* .login h2 {
    text-transform: uppercase;
    font-family: 'Novecentosanswide-DemiBold'
}
.login {
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
  padding: 10px;
  max-width: 400px;
  margin: 50px auto 0 auto;
  text-align: center;
}
.login input, .login h2 {
    margin-bottom: 20px;
} */
</style>
