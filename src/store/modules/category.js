import Vue from "vue";
var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

const state = {
    layoutCookie: Vue.cookie.get('cookieLayout') === null ? Vue.cookie.set('cookieLayout', 'grid-layout', {expires: 999}) : Vue.cookie.get('cookieLayout'),
    selectedCategory: 'all',
    categories: ['all', 'print', 'photography', 'web','applications'],
    imgList: [
        {
           title: 'Colorado Ad Day',
           imgLocation: '/images/img-1.png',
           altTag: '3D Art',
           imgCategory: 'print',
           headline: '3D Art',
           text: `In the previous example, we constrained our user’s response to only one of four possibilities. Now
           that we know how to take advantage of event objects and handlers, we’re going to accept a much
           wider range of responses and move on to a more typical use of forms: text input.
           To showcase text input we’ll create an inquiry form to allow the user to record a list of new clothing
           items to add to the Fullstack clothing list.`
        },
        {
            title: 'The Most Common Questions Asked on ShopTalk',
            imgLocation: '/images/img-2.png',
            altTag: 'UI Components',
            imgCategory: 'web',
            headline: 'UI Components',
            text: `Our click handler function receives an event object, evt. evt has an attribute target that is a
            reference to the button that the user clicked. This way we can access the button the user clicked
            without creating a function for each button. With this we’re able to log the button name and button
            value.
            With the new onButtonClick event method declared, we need to update the button elements to use
            this event handler. In addition, we’ll specify a name and value for each button that is used within
            the onButtonClick method to help dictate which button was clicked. This makes the button-row
            component template be`
        },
        {
            title: 'Where Do You Learn HTML & CSS in 2019?',
            imgLocation: '/images/img-3.png',
            altTag: 'Couple in love',
            imgCategory: 'photography',
            headline: 'Couple in love',
            text: `In the previous section, we were able to perform different actions (log different messages) depending
            on the action of the user. However, with the way we’ve set it up, we needed to create separate
            functions for each action. Instead, it would be much cleaner if we provided the same event handler
            to all buttons, and used information from the event itself to determine our response.
            To do this, we’ll replace the separate event handlers onHoodieClick, onTeeClick, onFittedCap,
            and onJacketClick with a single event handler, onButtonClick. This would make our button-row
            component methods property become.`
        },
        {
            title: 'Responsive Designs and CSS Custom Properties: Defining Variables and Breakpoints',
            imgLocation: '/images/img-4.png',
            altTag: 'Smily face',
            imgCategory: 'print',
            headline: 'Smily face',
            text: `And those are only the mouse events. There are also clipboard, composition, keyboard, focus,
            form, selection, touch, ui, wheel, media, image, animation, and transition event groups. Each
            group has its own types of events, and not all events are appropriate for all elements. Here,
            we’ll mainly work with the events click, change, submit, and input which are often used
            with form and input elements.`
        },
        {
            title: 'Tapping into UGC with Offerpop',
            imgLocation: '/images/img-5.png',
            altTag: 'Social Networks',
            imgCategory: 'applications',
            headline: 'Social Networks',
            text: `Andrea Passaglia was born in Genoa, in northern Italy. Interested about technology since
            his parents gave him a toy computer when he was a boy, he started studying web
            technologies at an early age. After obtaining his master's degree in computer engineering he
            worked on the design and implementation of web interfaces for companies of various sizes
            and in different industries (healthcare, fashion, tourism, and transport).`
        },
        {
            title: '5 websites that get design right',
            imgLocation: '/images/img-6.png',
            altTag: 'Jesus in love',
            imgCategory: 'print',
            headline: 'Jesus in love',
            text: `I would like to thank Packt for giving me the opportunity to write this book--Narendra
            Tripathi, Smeet Thakkar, Siddharth Mandal, and the whole team for being so professional
            and supporting. A big thank you to Bogdan Bâlc for his attention to detail, and all the
            people that helped me with reviewing the book; I'm talking to Alesya Kholodova, Eamon
            McNamee, and Yomi Eluande. Thank you guys for your practical suggestions and useful
            additions to the book.`
            
        },
        {
            title: 'Mariachis, Hats, and Pies, Oh My',
            imgLocation: '/images/img-7.png',
            altTag: 'Colored collage',
            imgCategory: 'print',
            headline: 'Colored collage',
            text: `There are a series of websites such as JSFiddle that let you write a Vue application right
            from the browser (CodePen and JS Bin among others) and those are very good to test new
            functionalities and try recipes in this book. On the other hand, they are too limited in terms
            of code organization to develop anything more. In first recipe of this chapter, this style of
            development is used so please refer to that to learn how to develop with only the browser.
            In general, you should take what you learn by doing the recipes this way and transfer it into
            more structured projects, depending on what you are developing`
        },
        {
            title: 'Big buzz. Big brands. Reebok does omnichannel',
            imgLocation: '/images/img-8.png',
            altTag: 'Smoking gun',
            imgCategory: 'photography',
            headline: 'Smoking gun',
            text: `Vue is powerful, but if you need a backend, it can't do much alone; at a minimum you will
            need a server to deploy your software. In this section, you will actually build small, but
            complete and working, applications with popular frameworks. Electron is used to bring
            Vue apps to the desktop. Firebase is a modern cloud backend and, finally, FeatherJS is a
            minimalistic but full-featured JavaScript backend. When you are finished with these, you
            will have all the tools required to interact with them and quickly build professional
            applications.`
        },
        {
            title: 'Using the Ordinary to Build the Extraordinary',
            imgLocation: '/images/img-9.png',
            altTag: 'Various graffiti',
            imgCategory: 'print',
            headline: 'Various graffiti',
            text: `The simple template will create a page similar to what we have done a few paragraphs
            before. I invite you to run vue init simple and check it out; spot the difference between
            that and what we have done. What we are doing now instead is a step further. We are going
            to use a more involved template that includes a bundler. There is one for webpack and
            browserify; we are going with the first.`
        }
    ]
}

const getters = {
    layoutCookie(state) {
        return state.layoutCookie
    },
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
    },
    setLayoutCookie(state, payload) {
        state.layoutCookie = payload;
    }
}
const actions = {
    addCategory(context, category) {
        context.commit('ADD_CATEGORY', category.toLowerCase());
    },
    setCookieLayout({commit}, payload) {
        commit('setLayoutCookie', payload);
        Vue.cookie.set('cookieLayout', payload)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}