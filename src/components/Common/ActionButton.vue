<template>
    <!-- Declare in parent component data() properties 'buttonTitle', 'buttonType', 'buttonLink' with
    their values and pass them as a props to <action-button/> -->
     <button :type="buttonType" class="action-btn"><router-link :to="buttonLink">{{ buttonTitle }}</router-link></button>
</template>

<script>
export default {
    name: 'ActionButton',
    props: ['buttonTitle', 'buttonType', 'buttonLink']
}
</script>

<style scoped>
.action-btn {
    font-size: 14px;
    padding: 10px 22px;
    margin-top: -2px;
    background-color: #2ecc71;
    border: none;
    color: #fff;
    border: none;
}
.action-btn a {
    color: #fff;
    text-decoration: none;
}
</style>
