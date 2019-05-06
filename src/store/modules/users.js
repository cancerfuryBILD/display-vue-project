import db from '../../firebase/init';

const state = {
    users: null,
    singleUser: null,
    editUsers: false
}
const getters = {
    users(state) {
        return state.users;
    },
    singleUser(state) {
        return state.singleUser;
    },
    editUsers(state) {
        return state.editUsers;
    }
}
const mutations = {
    setUsers(state, payload) {
        state.users = payload
    },
    setSingleUser(state, payload) {
        state.singleUser = payload
    },
    seteditUsers(state, payload) {
        state.editUsers = payload
    }
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
    getSingleUser({commit}, payload) {
        if(payload) {
            var user = {};
            db.collection('users').doc(payload).get().then(doc => {
                
                //  SET USER DATA
                user = doc.data()
                user.id = doc.id
                console.log(user)
                
            });
            commit('setSingleUser', user)
        }
    },
}
export default {
    state,
    getters,
    actions,
    mutations
}