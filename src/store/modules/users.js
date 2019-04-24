import db from '../../firebase/init';

const state = {
    users: null,
    singleUser: null
}
const getters = {
    users(state) {
        return state.users;
    },
    singleUser(state) {
        return state.singleUser;
    }
}
const mutations = {
    setUsers(state, payload) {
        state.users = payload
    },
    setSingleUser(state, payload) {
        state.singleUser = payload
    }
}
const actions = {
    getUsers({commit}) {
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
    getSingleUser({commit}, payload) {
        db.collection('posts').doc(payload).get().then(doc => {
            let user = doc.data();
           
        })
            commit('setSinglePost', post)
        }
}
export default {
    state,
    getters,
    actions,
    mutations
}