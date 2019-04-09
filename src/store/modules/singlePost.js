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
        // console.log(state.post, 'String')
    }
}
const actions = {
    getSinglePost({commit},payload) {
        db.collection('posts').where('slug', '==', payload).get().then(snapshot => {
            let post = [];
            snapshot.docs.forEach(doc => {
                post = doc.data()
            })
            // console.log(post)
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