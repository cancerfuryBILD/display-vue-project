import db from '../../firebase/init'
import asyncDataStatus from '@/mixins/asyncDataStatus';
const state = {
    posts: {}
}
const getters = {
    posts(state) {
        return state.posts;
    }
}
const mutations = {
    setPosts(state, payload) {
        state.posts = payload
    }
}
const actions = {
    getPosts({commit}) {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            let posts = [];
            snapshot.docs.forEach(doc => {
                posts.push({
                    ...doc.data(),
                    id: doc.id})
            })
            commit('setPosts', posts)
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};