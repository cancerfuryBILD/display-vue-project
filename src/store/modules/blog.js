import db from '../../firebase/init'
import _ from 'lodash';

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
            orderDirection: 'desc',
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
        // GET POSTS
        await db.collection(settings.collection)
            .orderBy(settings.orderBy, settings.orderDirection)
            .startAfter(state.lastVisible)
            .limit(settings.limit)
            .onSnapshot((snapshot) => {
            let posts = [];
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
    deletePost(id) {
        db.collection("posts").doc(id).delete()
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};