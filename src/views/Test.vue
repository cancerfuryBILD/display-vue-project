<template>
    <div>
    <page-title :headline="headline"/>
        <div class="test container">
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
export default {
    
}
</script>

<style>
/* .test {
    margin-bottom: 255px;
} */

</style>
