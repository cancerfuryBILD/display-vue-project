<template>
  <div class="home">
    <app-banner />
    <app-call-to-action-1 />
    <app-video />
    <app-projects />
    <app-carousel />
  </div>
</template>

<script>
import Banner from '@/components/Home/Banner.vue';
import CallToAction1 from "@/components/Home/CallToAction1.vue";
import Video from "@/components/Home/Video.vue";
import Projects from "@/components/Home/Projects.vue";
import Carousel from "@/components/Home/Carousel.vue";


export default {
  name: "home",
  components: {
    'app-banner': Banner,
    'app-call-to-action-1': CallToAction1,
    'app-video': Video,
    'app-projects': Projects,
    'app-carousel': Carousel
  },
  data() {
    return {
      
     
    }
  }
};
</script>

<style>
  @keyframes bannerAnimation {
    0% {
        opacity: 0;
        }
    100% {
        opacity: 1;
        }
}
.bannerAnimate {
    animation: bannerAnimation 1s 1 0s ease-in;
}
@keyframes paragraphAnimation{
    0% {
        transform: translateX(-2000px);
        }
    100% {
        transform: translateX(0);
        }
}
.paragraphAnimate {
    animation: paragraphAnimation 1s 1 0s ease-in;
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 24px;
}
@keyframes buttonAnimation {
    0% {
        transform: translateX(2000px);
        }
    100% {
        transform: translateX(0);
        }
}
.buttonAnimate {
    animation: buttonAnimation 1s 1 0s ease-in;
}
</style>

