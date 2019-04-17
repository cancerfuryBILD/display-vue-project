import db from '../../firebase/init';

const state = {
    userPosts: []
}
const getters = {
    userPosts(state) {
        return state.userPosts
    }
}
const mutations = {
    setUserPosts(state, payload) {
        state.userPosts = payload
    }
}
const actions = {
    getUserPosts({commit}, payload) {
        let post = [];
        // console.log(payload)
        db.collection('posts').where('uid', '==', payload.uid).get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                post.push({
                    ...doc.data(),
                    id: doc.id})
            })
            commit('setUserPosts', post)
        })
    }

}
export default {
    state,
    getters,
    actions,
    mutations
}