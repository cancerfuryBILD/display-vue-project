<template>
  <div class="portfolio-slider">
    <div class="image-area-carousel">
      <slick class="slider-nav" ref="slick" :options="slickOptions">
        <div v-for="(imgItem, index) in imgContent" :key="index">
          <a><img :src="imgItem.src" :alt="imgItem.alt"></a>
        </div>
      </slick>
    </div>
    <div class="container text-center">
      <svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="31" viewBox="0 0 21 31"><defs><path id="left" d="M392.294 1746l-15.293 15.5 15.293 15.5 5.705-5.702-9.667-9.798 9.667-9.798z"/></defs><g><g transform="translate(-377 -1746)"><use fill="#efefef" xlink:href="#left"/></g></g></svg>

      <div class="paragraph-area-carousel">
        <slick class='slider-for' ref="slick" :options="slickOptions2"> 
          <div v-for="(item, index) in textContent" :key="index">
            <h3>{{item.title}}</h3>
            <p>{{item.text}}</p>
          </div>
        </slick>
      </div>
      <svg class="slick-next" id="slick-next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="31" viewBox="0 0 21 31"><defs><path id="right" d="M1005.706 1777l15.293-15.5-15.293-15.5-5.705 5.702 9.667 9.798-9.667 9.798z"/></defs><g><g transform="translate(-1000 -1746)"><use fill="#efefef" xlink:href="#right"/></g></g></svg>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import img1 from '@/assets/img-1.png';
import img2 from '@/assets/img-2.png';
import img3 from '@/assets/img-3.png';
import img4 from '@/assets/img-4.png';
import img5 from '@/assets/img-5.png';
import img6 from '@/assets/img-6.png';
import img7 from '@/assets/img-7.png';
import img8 from '@/assets/img-8.png';
import img9 from '@/assets/img-9.png';
import prev from '@/assets/prev.svg';
import next from '../../assets/next.svg';


export default {
  name: 'Carousel',
  components: { 
    Slick 
  },

  data() {
    return {
      imgNext: next,
      imgPrev: prev,
      imgContent: [
        {
          src: img1,
          alt: 'lorem tey'
        },
        {
          src: img2,
          alt: 'lorem tey'
        },
        {
          src: img3,
          alt: 'lorem tey'
        },
        {
          src: img4,
          alt: 'lorem tey'
        },
        {
          src: img5,
          alt: 'lorem tey'
        },
        {
          src: img6,
          alt: 'lorem tey'
        },
        {
          src: img7,
          alt: 'lorem tey'
        },
        {
          src: img8,
          alt: 'lorem tey'
        },
        {
          src: img9,
          alt: 'lorem tey'
        },
      ],
      textContent: [
        {
          title: 'Dark UI Kit Freebie',
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, 
          vel congue mauris. Fusce velit justo, faucibus eu sagittis.`
        },
        {
          title: 'Lorem ipsum fadar',
          text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis excepturi, 
          earum quia molestias magni quis.`
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis veritatis autem, molestias culpa maxime ducimus 
          distinctio, doloremque odit minus tempore possimus assumenda ullam optio dicta totam nihil repellat, ex rem.`
        },
        {
          title: 'Lorem ipsum',
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. A cumque adipisci, laborum fugit illum nesciunt 
          temporibus facilis iure autem ipsam vel voluptate dicta earum consequuntur voluptates.`
        },
        {
          title: 'Lorem ipsum dolor',
          text: `Sapiente aspernatur ab dignissimos, 
          dolore repudiandae. Incidunt vero adipisci repudiandae iure nihil.`
        },
        {
          title: 'Lorem',
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. A cumque adipisci, laborum fugit illum nesciunt 
          temporibus.`
        },
        {
          title: 'Fusce velit justo',
          text: `Fusce velit justo, faucibus eu sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, 
          vel congue mauris.`
        },
        {
          title: 'Incidunt vero',
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`
        },
      ],
      slickOptions: {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        variableWidth: true,
        prevArrow: '.slick-prev',
        nextArrow: '.slick-next',
      },
      slickOptions2: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      },
    }
  },
    // All slick methods can be used too, example here
      methods: {
        next() {
          this.$refs.slick.next();
        },
        prev() {
          this.$refs.slick.prev();
        },
        reInit() {
          // Helpful if you have to deal with v-for to update dynamic lists
          this.$nextTick(() => {
            this.$refs.slick.reSlick();
          });
        }
      }
}
</script>

<style>
.image-area-carousel {
    margin-bottom: 38px;
}
  .image-area-carousel .slick-slide {
    transition: all ease-in-out .5s;
    opacity: .3;
    margin: 0px 10px;
}
.image-area-carousel .slick-current {
    opacity: 1;
}
.paragraph-area-carousel {
    max-width: 600px;
    padding: 0px 50px;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
}
.paragraph-area-carousel h3 {
    margin-bottom: 18px;
}
.portfolio-slider svg {
    margin-top: -150px;
}
.portfolio-slider svg:hover #left, 
.portfolio-slider svg:hover #right { 
    fill: #2ecc71;
    cursor: pointer;
}
@media (max-width: 576px) {
    .portfolio-slider svg #left, 
.portfolio-slider svg #right {
    display: none;
}
.image-area-carousel {
    margin-bottom: 0px;
}
.paragraph-area-carousel {
    display: block;
    text-align: center;
}
}
</style>
