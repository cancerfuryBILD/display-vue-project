import db from '../../firebase/init'
import _ from 'lodash';
import router from "@/router";

const state = {
    posts: [],
    lastVisible: '',
    loadMoreButton: true,
    config : {orderDirection: ''}
}
const getters = {
    posts(state) {
        return state.posts;
    },
    loadMoreButton(state) {
        return state.loadMoreButton;
    }
}
const mutations = {
    setPosts(state, payload) {
        payload.forEach(article => {
            state.posts.push(article)
        })
    },
    setEmptyPost(state) {
        state.posts = [];
        state.lastVisible = '';
        state.loadMoreButton = true;
    },
    setLastVisible(state, payload) {
        state.lastVisible = payload
    },
    setLoadMoreButton(state, payload) {
        state.loadMoreButton = payload
    },
    removePost(state, payload) {
        state.posts = state.posts.filter(post => post.id !== payload);
      },
}
const actions = {
    // GET BLOG POSTS
    async getPosts({commit}, options) {
        // SET LOADER
        commit('loader/setLoading', true, { root: true })
        // DEFAULT OPTIONS
        const defaultOptions = {
            limit: 1,
            orderBy: 'timestamp',
            orderDirection: state.orderDirection ? state.orderDirection : 'desc',
            collection: 'posts'
        };

        
        // CHECK FOR ORDER DIRECTION VALUE
        let settings;
        if(options.orderDirection) {
            commit('setEmptyPost');
            state.config.orderDirection = options.orderDirection
            settings = _.merge(defaultOptions, options, state.config)
        }else{
            settings = _.merge(defaultOptions, options)
        }
        const query = db.collection(settings.collection);

        // GET POSTS
        await db.collection(settings.collection)
            .orderBy(settings.orderBy, settings.orderDirection)
            .startAfter(state.lastVisible)
            .limit(settings.limit)
            .onSnapshot((snapshot) => {
            let posts = settings.loadMore ? state.posts : [];
            let lastVisible = snapshot.docs[snapshot.docs.length - 1];
            state.loadMoreButton = !!snapshot.docs.length;
            snapshot.docs.forEach(doc => {
                posts.push({
                    ...doc.data(),
                    id: doc.id});
            })
            commit('setPosts', posts);
            commit('setLastVisible', lastVisible);
            commit('loader/setLoading', false, { root: true })
        })
    },
    async deletePost({commit}, id) {
        await db.collection("posts").doc(id).delete();
        commit('setEmptyPost');
        commit('prompt/setShowModal', false, { root: true });
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};

https://router.vuejs.org/guide/essentials/named-views.html#nested-named-views
https://levelup.gitconnected.com/multiple-layouts-for-vue-spa-app-fafda6b2bfc7
https://markus.oberlehner.net/blog/dynamic-vue-layout-components/
https://medium.com/@tbutcaru/good-solution-to-provide-multiple-layouts-via-meta-properties-and-vue-router-hooks-cc573f656847
https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/layouts/baseline.vue
https://itnext.io/anyway-heres-how-to-create-a-multiple-layout-system-with-vue-and-vue-router-b379baa91a05


<div class="user">
    <slot name="sidebar">
    <slot>
    <slot name="blade"></slot>
</div>

<App>
    <router-view></router-view>
</App>

<Layout>
    ovo je main content
    <router-view slot="blade"></router-view>
</Layout>