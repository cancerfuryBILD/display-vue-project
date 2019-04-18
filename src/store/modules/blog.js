import db from '../../firebase/init'

const state = {
    posts: {},
    loading: false
}
const getters = {
    posts(state) {
        return state.posts;
    },
    loading(state) {
        return state.loading
    }
}
const mutations = {
    setPosts(state, payload) {
        state.posts = payload
        state.loading = false
    }
}
const actions = {
    getPosts({commit}) {
        state.loading = true;
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