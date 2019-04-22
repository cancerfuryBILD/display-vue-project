import db from '../../firebase/init';

const state = {
    users: null
}
const getters = {
    users(state) {
        return state.users;
    },
}
const mutations = {
    setUsers(state, payload) {
        state.users = payload
    }
}
const actions = {
    getUsers({commit}) {
        db.collection('users').get((snapshot) => {
            let users = [];
            snapshot.docs.forEach(doc => {
                user = doc.data()
                user.id = doc.id
            })
            commit('setUsers', users)
        })
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}