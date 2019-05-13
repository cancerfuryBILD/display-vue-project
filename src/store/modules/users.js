import db from '../../firebase/init';

const state = {
    userPosts: [],
    users: null,
    singleUser: null,
    loading: false
}
const getters = {
    users(state) {
        return state.users;
    },
    singleUser(state) {
        return state.singleUser;
    },
    userPosts(state) {
        return state.userPosts
    }
}
const mutations = {
    setUserPosts(state, payload) {
        state.userPosts = payload
        state.loading = false;
    },
    setUsers(state, payload) {
        state.users = payload
    },
    setSingleUser(state, payload) {
        state.singleUser = payload
    },
}
const actions = {
    // GET USERS LIST
    async getUsersList({commit}) {
        commit('loader/setLoading', true, { root: true })
        await db.collection('users').onSnapshot((snapshot) => {
            let users = [];
            snapshot.docs.forEach(doc => {
                users.push({
                    ...doc.data(),
                    id: doc.id})
            })
            commit('setUsers', users)
            commit('loader/setLoading', false, { root: true })
        })
    },

    // GET SINGLE USER 
    async getSingleUser({commit, dispatch}, payload) {
        if(payload) {
            commit('loader/setLoading', true, { root: true })
            var user = {};
            await db.collection('users').doc(payload).get().then(doc => {
                //  SET USER DATA
                user = doc.data()
                user.id = doc.id
                commit('setSingleUser', user)
                dispatch('getUserPosts', payload)
            })
        }
    },

    // GET USER POSTS
    async getUserPosts({commit}, payload) {
        let post = [];
        await db.collection('posts').where('uid', '==', payload).get().then(snapshot => {
            if(snapshot.docs.length) {
            snapshot.docs.forEach(doc => {
                post.push({
                    ...doc.data(),
                    id: doc.id})
                    commit('setUserPosts', post)
                    commit('loader/setLoading', false, { root: true })
            })}
             else {
                    commit('setUserPosts', [])
                    commit('loader/setLoading', false, { root: true })
            }
        })
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}