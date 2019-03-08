<template>
  <section class="action-call-1 text-center">
    <div class="container" v-html="paragraph">
    </div>
    <action-button class="buttonAnimate" :buttonTitle="buttonTitle" :buttonType="buttonType" :buttonLink="buttonLink"/>
  </section>
</template>

<script>
import ActionButton from '@/components/Common/ActionButton.vue';
export default {
  name: 'CallToAction1',
  components: {
    'action-button': ActionButton
  },
  data() {
    return {
      paragraph: `<p class="paragraphAnimate text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu.</p>`,
      buttonTitle: 'Browse portfolio',
      buttonType: 'button',
      buttonLink: '#'
    }
  }
}
</script>

<style>
.action-call-1 {
  margin-top: 109px;
}
.action-call-1 p {
  font-size: 1.125rem;
  margin-bottom: 26px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  color: #aeadad;
}
@media (max-width: 576px) {
    .action-call-1 {
  margin-top: 90px;
  }
}
@media (max-width: 320px) {
    .action-call-1 {
  margin-top: 60px;
  }
}
</style>
