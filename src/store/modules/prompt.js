const state = {
    showModal: false
}
const getters = {
    showModal(state) {
        return state.showModal
    }
}
const mutations = {
    setShowModal(state, payload) {
        state.showModal = payload
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