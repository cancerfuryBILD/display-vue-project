<template>
  <div>
    <page-title :headline="headline"/>
    <div class="container category">
      <div class="filter">
        <label><input type="radio" v-model="selectedCategory" value="All" />All </label> / 
        <label><input type="radio" v-model="selectedCategory" value="Print" /> Print</label> / 
        <label><input type="radio" v-model="selectedCategory" value="Photography" /> Photography </label> / 
        <label><input type="radio" v-model="selectedCategory" value="Web" /> Web </label> / 
        <label><input type="radio" v-model="selectedCategory" value="Applications" /> Applications </label>

        
      </div>
      <layout />
      <div class="list-images grid-layout" id="layout">
        <div v-for="(img, index) in filteredImgList" :key="index">
          <router-link to="#"><img :src="img.imgLocation" :alt="img.altTag"></router-link>
        </div>
      </div>
   



  </div></div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import Layout from '@/components/Work/Layout.vue';

export default {
  name: "Work",
  components: {
    PageTitle,
    Layout
  },
  data() {
    return {
       headline: 'Check out what I can do',
       selectedCategory: "All",
       
    }
  },
  methods: {
    list() {
      var list = document.getElementById("layout");
      list.classList.remove("grid-layout");
      list.classList.add("list-layout");
    },
    grid() {
      var grid = document.getElementById("layout");
      grid.classList.remove("list-layout");
      grid.classList.add("grid-layout");
    }
  },
  computed: {
		filteredImgList() {
			var vm = this;
			var category = vm.selectedCategory;
			
			if(category === "All") {
				return vm.imgList;
			} else {
				return vm.imgList.filter(function(img) {
					return img.imgCategory === category;
				});
			}
    },
    imgList() {
          return this.$store.getters.imgList;
     }
	}
};
</script>

<style>
  .category {
    padding-top: 40px;
    clear: right;
}
  .grid-layout {
    display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.4em;
  }
   .grid-layout img {
     width: 100%;
   }
    .list-layout {
    display: grid;
        grid-template-columns: 1fr;
        gap: 1.4em;
  }
  .list-images {
      margin-bottom: 249px;
      margin-top: 36px;
  }
  
  .list-images img:hover {
      opacity: .3;
  }
  label [type='radio'] {
    display: none;
  }
  label:hover, label [type='radio'] + label:checked {
    color: #2ecc71;
    cursor: pointer;
  }
  .filter {
    color:#8a8888;
    font-size: 1.1875rem;
    letter-spacing: .02rem;
  }
  @media (max-width: 576px) {
        .list-images {
            grid-template-columns: 1fr 1fr;
        }
        .layout {
            display: none;
        }
    }
    @media (max-width: 425px) {
        .list-images {
            grid-template-columns: 1fr;
        }
    }
    </style>