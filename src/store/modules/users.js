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
        db.collection('users').onSnapshot((snapshot) => {
            let users = [];
            snapshot.docs.forEach(doc => {
                users.push({
                    ...doc.data(),
                    id: doc.id})
            })
            console.log(users)
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