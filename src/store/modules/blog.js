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
    async getPosts({commit}, ) {
        commit('loader/setLoading', true, { root: true })
        await db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            let posts = [];
            snapshot.docs.forEach(doc => {
                posts.push({
                    ...doc.data(),
                    id: doc.id})
                    
            })
            commit('setPosts', posts)
            commit('loader/setLoading', false, { root: true })
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};