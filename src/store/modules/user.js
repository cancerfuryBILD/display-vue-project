import db from '../../firebase/init';

const state = {
    user: ''
};

const getters = {
    pushUser(state) {
        return state.user;
    }
};

const mutations = {
    set_user(state, payload) {
        state.user = payload
    }
};
const actions = {
    getUser({commit}, payload) {
       let user = {}
    //    console.log(payload)
        db.collection('users').where('email', '==', payload).get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                user = doc.data()
            })
            commit('set_user', user)  
        }); 
       
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};