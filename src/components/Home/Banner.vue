<template>
  <div class="banner">
    <img class="img-fluid mx-auto d-block bannerAnimate" :src="BannerImg" alt="Banner photo">
  </div>
</template>

<script>
import ImgBanner from '@/assets/slider.svg';

export default {
  name: 'Banner',
  props: ['bannerImg'],
  data() {
    return {
      BannerImg: ImgBanner
    }
  }
}
</script>

<style>
.banner {
    background-image: url('../../assets/sunburst.svg');
    max-height: 525px;
    background-color: #2ecc71;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 120px;
    padding-right: 55px;
}
@media (max-width: 768px) {
    .banner {
    max-height: 455px;
    padding-right: 40px;
    padding-left: 40px;
    }
}
@media (max-width: 576px) {
    .banner {
      max-height: 335px;
      padding-top: 90px;
  }
}
@media (max-width: 425px) {
  .banner {
      max-height: 215px;
      padding-top: 50px;
  }
}
@media (max-width: 375px) {
  .banner {
      max-height: 195px;
      padding-top: 50px;
  }
}
@media (max-width: 320px) {
  .banner {
      max-height: 155px;
      padding-top: 40px;
  }
}
</style>
