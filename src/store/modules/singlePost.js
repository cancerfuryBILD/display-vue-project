import db from '../../firebase/init'

const state = {
    post: null
}

const getters = {
    post(state) {
        return state.post
    }
}
const mutations = {
    setSinglePost(state, payload) {
        state.post = payload
    }
}
const actions = {
    getSinglePost({commit},payload) {
        db.collection('posts').where('slug', '==', payload).get().then(snapshot => {
            let post = [];
            snapshot.docs.forEach(doc => {
                post.push({
                    ...doc.data(),
                    id: doc.id})
            // })
            })
            commit('setSinglePost', post)
        })
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}