import firebase from 'firebase';
import db from '../../firebase/init';
import router from "../../router";

const state = {
    feedback: null,
    user: null,
    userData: {}

}
const getters = {
    userData(state) {
        return state.userData
    },
    user(state) {
        return state.user
    },
    feedback(state) {
        return state.feedback
    }
}
const mutations = {
    setUser(state, payload) {
        state.user = payload
    },
    setUserData(state, payload) {
        state.userData = payload
    },
    setFeedback(state, payload) {
        state.feedback = payload
    }
}
const actions = {
    // SET USER
    autoSignIn({ commit }, payload) {
        commit('setUser', payload);
    },

    // SIGNUP USER
    signup({commit}, payload) {
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(cred => {
                db.collection("users").doc().set({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    user_id: cred.user.uid
                }).then(() => {
                    router.push({ name: 'login' })
                    })
            })
            .catch(error =>  {
                commit('setFeedback', error.message)
        });
    },

    // LOGIN USER
    login({commit}, payload) {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                // const loginUser = { id: firebase.auth().currentUser.uid };
                commit('setUser', firebase.auth().currentUser.uid)
                // console.log(state.user)
                router.push({ name: 'blog' })
            }).catch(error =>  {
                commit('setFeedback', error.message)
        });
    },

    // LOGOUT USER
    logout({commit}) {   
        commit('setUser', null)
        firebase.auth().signOut().then(() => {
            router.push({ name: 'login' })
            
        }).catch(error =>  {
            commit('setFeedback', error.message)
        })
    },

    // GET USER DATA 
    getUserData({commit}, payload) {
        if(firebase.auth().currentUser) {
            let user = {}
            db.collection('users').where('user_id', '==', payload).get().then(snapshot => {
                let user = [];
                snapshot.docs.forEach(doc => {
                    user = doc.data()
                })
                // console.log(user)
                commit('setUserData', user)
            })
        }
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}