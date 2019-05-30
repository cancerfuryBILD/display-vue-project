const state = {
    showModal: false,
    config: {}
}
const getters = {
    showModal(state) {
        return state.showModal
    },
    config(state) {
        return state.config
    }
}
const mutations = {
    setShowModal(state, payload) {
        state.showModal = payload
    },
    promptSetup(state, payload) {
        state.config = payload
    }
}
const actions = {
    
}
export default {
    state,
    getters,
    mutations,
    actions
}