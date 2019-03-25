const state = {
    selectedCategory: 'all',
    categories: ['all', 'print', 'photography', 'web','applications'],
    imgList: [
        {
           title: 'Colorado Ad Day',
           imgLocation: '/images/img-1.png',
           altTag: '3D Art',
           imgCategory: 'print',
           text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci numquam itaque, obcaecati deleniti distinctio minima. Sequi iusto itaque, deserunt natus reprehenderit odit! Et, soluta!'
        },
        {
            title: 'The Most Common Questions Asked on ShopTalk',
            imgLocation: '/images/img-2.png',
            altTag: 'UI Components',
            imgCategory: 'web',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci numquam itaque, obcaecati deleniti distinctio minima. Sequi iusto itaque, deserunt natus reprehenderit odit! Et, soluta!'
        },
        {
            title: 'Where Do You Learn HTML & CSS in 2019?',
            imgLocation: '/images/img-3.png',
            altTag: 'Couple in love',
            imgCategory: 'photography',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci numquam itaque, obcaecati deleniti distinctio minima. Sequi iusto itaque, deserunt natus reprehenderit odit! Et, soluta!'
        },
        {
            title: 'Responsive Designs and CSS Custom Properties: Defining Variables and Breakpoints',
            imgLocation: '/images/img-4.png',
            altTag: 'Smily face',
            imgCategory: 'print',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci numquam itaque, obcaecati deleniti distinctio minima. Sequi iusto itaque, deserunt natus reprehenderit odit! Et, soluta!'
        },
        {
            title: 'Tapping into UGC with Offerpop',
            imgLocation: '/images/img-5.png',
            altTag: 'Social Networks',
            imgCategory: 'applications',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci numquam itaque, obcaecati deleniti distinctio minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci numquam itaque, obcaecati deleniti distinctio minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci numquam itaque, obcaecati deleniti distinctio minima. Sequi iusto itaque, deserunt natus reprehenderit odit! Et, soluta!'
        },
        {
            title: '5 websites that get design right',
            imgLocation: '/images/img-6.png',
            altTag: 'Jesus in love',
            imgCategory: 'print',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci numquam itaque, obcaecati deleniti distinctio minima. Sequi iusto itaque, deserunt natus reprehenderit odit! Et, soluta!'
        },
        {
            title: 'Mariachis, Hats, and Pies, Oh My',
            imgLocation: '/images/img-7.png',
            altTag: 'Colored collage',
            imgCategory: 'print',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci numquam itaque, obcaecati deleniti distinctio minima. Sequi iusto itaque, deserunt natus reprehenderit odit! Et, soluta!'
        },
        {
            title: 'Big buzz. Big brands. Reebok does omnichannel',
            imgLocation: '/images/img-8.png',
            altTag: 'Smoking gun',
            imgCategory: 'photography',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci numquam itaque, obcaecati deleniti distinctio minima. Sequi iusto itaque, deserunt natus reprehenderit odit! Et, soluta!'
        },
        {
            title: 'Using the Ordinary to Build the Extraordinary',
            imgLocation: '/images/img-9.png',
            altTag: 'Various graffiti',
            imgCategory: 'print',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci numquam itaque, obcaecati deleniti distinctio minima. Sequi iusto itaque, deserunt natus reprehenderit odit! Et, soluta!'
        }
    ]
}

const getters = {
    imgList(state) {
        return state.imgList;
    },

    categories(state) {     
        return state.categories;
    },

    selectedCategory(state) {     
        return state.selectedCategory;
    },

    filteredImgList() {

        var category = state.selectedCategory;
        
        if(category === "all") {
            return state.imgList;
        } else {
            return state.imgList.filter(function(img) {
                return img.imgCategory === category;
            });
        }
    }
}

const mutations = {
    ADD_CATEGORY(state, link) {
        state.categories.push(link);
    },
    changeCategory:(state,category)=>{
        state.selectedCategory = category;
    }
}
const actions = {
    addCategory(context, category) {
        context.commit('ADD_CATEGORY', category.toLowerCase());
    }     
}

export default {
    state,
    getters,
    mutations,
    actions
};