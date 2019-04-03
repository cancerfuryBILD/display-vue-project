import db from '../../firebase/init'

const state = {
    posts: []
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
        db.collection('posts').orderBy('timestamp').onSnapshot((snapshot) => {
            let posts = [];
            snapshot.docs.forEach(doc => {
                posts.push(doc.data())
            })
            // console.log(posts)
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