import firebase from 'firebase/app';
import db from '../../firebase/init';
import router from "../../router";

const state = {
    feedback: null,
    currentUser: null,
    redirect: '',
    permission: null


}
const getters = {
    currentUser(state) {
        return state.currentUser
    },
    feedback(state) {
        return state.feedback
    },
    redirect(state) {
        return state.redirect
    },
    permission(state) {
        return state.permission
    }
}
const mutations = {
    setCurrentUser(state, payload) {
        state.currentUser = payload
    },
    setFeedback(state, payload) {
        state.feedback = payload
    },
    setRedirect(state, payload) {
        state.redirect = payload
    },
    setPermission(state, payload) {
        state.permission = payload
    }
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
                    user_id: cred.user.uid,
                    role: 'Role.User'
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
        commit('setUser', null)
        firebase.auth().signOut().then(() => {
            router.push({ name: 'login' })
        }).catch(error =>  {
            commit('setFeedback', error.message)
        })
    },

    // SET CURRENT USER 
    setCurrentUser({commit}, payload) {
        if(payload) {
            db.collection('users').where('user_id', '==', payload.uid).get().then(snapshot => {
                let user = {};
                //  SET USER DATA
                snapshot.docs.forEach(doc => {
                    user = doc.data()
                    user.id = doc.id
                })
                commit('setCurrentUser', user)
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