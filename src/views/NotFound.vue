<template>
    <div class="not-found container">
        <p>404</p>
        <h1>Page you're looking for is not found</h1>
        <router-link :to="{name: 'home'}">Back to the home page</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.not-found {
    text-align: center;
    padding-top: 150px;
}
.not-found h1 {
    margin-top: 100px;
}
.not-found h1,.not-found p {
    color: #2ecc71;
}
.not-found p {
    font-size: 10rem;
}
.not-found a {
    color: #8a8888;
}
</style>
