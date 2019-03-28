<template>
  <div>
    <page-title :headline="headline"/>
    <Category />
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import Category from '@/components/Work/Category.vue';

export default {
  name: "Work",
  components: {
    PageTitle,
    Category
  },
  data() {
    return {
       headline: 'Check out what I can do'
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
  /* .category {
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
  } */
  @media (max-width: 576px) {
        .list-images {
            grid-template-columns: 1fr 1fr;
        }
        /* .layout {
            display: none;
        } */
    }
    @media (max-width: 425px) {
        .list-images {
            grid-template-columns: 1fr;
        }
    }
    </style>