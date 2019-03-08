<template>
    <div class="about-main container">
        <div class="clearfix">
            <img :class="imageClass" :title="imageTitle" :src="image" :alt="imageAlt">
            <div v-html="text"></div>
        </div>
    </div>
</template>

<script>
import AboutImg from '@/assets/about.jpg';
export default {
    name: 'AboutMain',
    data() {
        return {
            //images: {
           //     imageLink: require('@/assets/about.jpg')
          //  },
            imageClass: ['float-left', 'img-float'],
            text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, 
                faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, 
                quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, 
                luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla 
                facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>
                <p>Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. 
                Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. 
                Pellentesque pellentesque arcu a elit congue lacinia. Lorem ipsum dolor 
                sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel 
                congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis 
                tortor. Suspendisse non urna mi, quis tincidunt eros. Lorem ipsum dolor 
                sit amet, consectetur adipiscing elit.</p>`,
            image: AboutImg,
            imageTitle: 'Man in the office talking over the phone',
            imageAlt: 'Man on the phone'
        }
    }
}
</script>

<style>
.img-float {
    padding: 5px 28px 10px 0px;
}
.clearfix {
    overflow: hidden;
}
.about-main  p:last-child {
    margin-top: 22px;
}
.about-main {
    margin-bottom: 30px;
    margin-top: 44px;
}
@media (max-width: 425) {
    .img-float {
        width: 100%;
        padding: 5px 0px 15px 0px;
}
}
</style>
