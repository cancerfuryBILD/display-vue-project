import firebase from 'firebase/app';
import db from '../../firebase/init';
import router from "../../router";

const state = {
    feedback: null,
    user: '',


}
const getters = {
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
    setFeedback(state, payload) {
        state.feedback = payload
    }
}
const actions = {
    // SIGNUP USER
    signup({commit}, payload) {
        admin.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            // CREATE USER IN 'USERS' COLLECTION
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
                commit('setUser', firebase.auth().currentUser.uid)
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

    // SET USER 
    setUser({commit}, payload) {
        var user = firebase.auth().currentUser.uid
        if(firebase.auth().currentUser) {
            db.collection('users').where('user_id', '==', user).get().then(snapshot => {
                let user = [];
                snapshot.docs.forEach(doc => {
                    user = doc.data()
                })
                commit('setUser', user)
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