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
    getUsersList({commit}) {
        db.collection('users').onSnapshot((snapshot) => {
            let users = [];
            snapshot.docs.forEach(doc => {
                users.push({
                    ...doc.data(),
                    id: doc.id})
            })
            commit('setUsers', users)
        })
    },

    // GET SINGLE USER 
    async getSingleUser({commit, dispatch}, payload) {
        if(payload) {
            // state.loading = true;
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
            snapshot.docs.forEach(doc => {
                post.push({
                    ...doc.data(),
                    id: doc.id})
                    commit('setUserPosts', post)
            })
        })
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}