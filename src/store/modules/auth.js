import firebase from 'firebase/app';
import db from '../../firebase/init';
import router from "../../router";

const state = {
    feedback: null,
    user: {},
    redirect: ''


}
const getters = {
    user(state) {
        return state.user
    },
    feedback(state) {
        return state.feedback
    },
    redirect(state) {
        return state.redirect
    }
}
const mutations = {
    setUser(state, payload) {
        state.user = payload
    },
    setFeedback(state, payload) {
        state.feedback = payload
    },
    setRedirect(state, payload) {
        state.redirect = payload
    },
}
const actions = {
    // SIGNUP USER
    signup({commit}, payload) {
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            // CREATE USER IN 'USERS' COLLECTION
            .then(cred => {
                db.collection("users").doc().set({
                    firstName: payload.firstName,
                    lastName: payload.lastName,
                    email: payload.email,
                    user_id: cred.user.uid
                }).then(() => {
                    const redirectTo = state.redirect || {name: 'blog'}
                    router.push(redirectTo)
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
                const redirectTo = state.redirect || {name: 'blog'}
                router.push(redirectTo)
            }).catch(error =>  {
                commit('setFeedback', error.message)
        });
    },

    // LOGOUT USER
    logout({commit}) {   
        commit('setUser', '') //passing empty string rather then NULL, throw error
        firebase.auth().signOut().then(() => {
            router.push({ name: 'login' })
        }).catch(error =>  {
            commit('setFeedback', error.message)
        })
    },

    // SET USER 
    setUser({commit}, payload) {
        // console.log(payload)
        if(payload) {
            db.collection('users').where('user_id', '==', payload.uid).get().then(snapshot => {
                let user = {};
                snapshot.docs.forEach(doc => {
                    user = doc.data()
                    user.id = doc.id
                })
                commit('setUser', user)
            })
        }
    },

}
export default {
    state,
    getters,
    actions,
    mutations
}