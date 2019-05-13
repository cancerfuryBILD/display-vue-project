import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../../firebase/init';
import router from "../../router";

const state = {
    feedback: null,
    currentUser: '',
    redirect: ''
}
const getters = {
    currentUser(state) {
        return state.currentUser
    },
    feedback(state) {
        return state.feedback
    },
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
}
const actions = {
    // SIGNUP USER
    async signup({commit}, payload) {
        await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            // CREATE USER IN 'USERS' COLLECTION
            .then(cred => {
                db.collection("users").doc().set({
                    firstName: payload.firstName,
                    lastName: payload.lastName,
                    email: payload.email,
                    user_id: cred.user.uid,
                    role: 'User'
                }).then(() => {
                    // dispatch('getCurrentUser', firebase.auth().currentUser.uid)
                    const redirectTo = state.redirect || {name: 'blog'}
                    router.push(redirectTo)
                    })
            })
            .catch(error =>  {
                alert(error)
                commit('setFeedback', error.message)
        });
    },

    // LOGIN USER
    async login({commit, dispatch ,state}, payload) {
        await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                dispatch('getCurrentUser', {uid: user.user.uid})
            }).catch(error =>  {
                commit('setFeedback', error.message)
        });
    },

    // LOGOUT USER
    logout({commit}) {   
        commit('setCurrentUser', '')
        state.redirect = null
        firebase.auth().signOut().then(() => {
            router.push({ name: 'login' })
        }).catch(error =>  {
            commit('setFeedback', error.message)
        })
    },

    // SET CURRENT USER 
    async getCurrentUser({commit,state}, payload) {
        if(payload) {
            await db.collection('users').where('user_id', '==', payload.uid).get().then(snapshot => {
                let user = {};
                //  SET USER DATA
                snapshot.docs.forEach(doc => {
                    user = doc.data()
                    user.id = doc.id
                })
                const redirectTo = state.redirect || {name: 'blog'};
                commit('setCurrentUser', user);
                router.push(redirectTo);
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