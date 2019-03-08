<template>
    <div class="page-title">
        <div class="container">
            <h1>{{headline}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['headline']
}
</script>

<style>
.page-title {
    background-color: #2ecc71;
    padding: 32px 0px;
    letter-spacing: 0.02;
}
.page-title h1{
    color: #fff;
    margin: 0px;
}

</style>
