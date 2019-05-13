const state = {
    loading: false
}
const getters = {
    loading(state) {
        return state.loading
    }
}
const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    }
}
export default {
    state,
    getters,
    mutations
}