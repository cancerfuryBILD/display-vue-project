import db from '../../firebase/init'

const state = {
    posts: [],
    lastVisible: ''
}
const getters = {
    posts(state) {
        return state.posts;
    }
}
const mutations = {
    setPosts(state, payload) {
        payload.forEach(article => {
            state.posts.push(article)
        })
    },
    setLastVisible(state, payload) {
        state.lastVisible = payload
    }
}
const actions = {
    async getPosts({commit}, ) {
        commit('loader/setLoading', true, { root: true })
        await db.collection('posts').orderBy('timestamp', 'desc').startAfter(state.lastVisible).limit(1).onSnapshot((snapshot) => {
            let posts = [];
            let lastVisible = snapshot.docs[snapshot.docs.length - 1];
            snapshot.docs.forEach(doc => {
                posts.push({
                    ...doc.data(),
                    id: doc.id});
            })
            commit('setPosts', posts);
            commit('setLastVisible', lastVisible);
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