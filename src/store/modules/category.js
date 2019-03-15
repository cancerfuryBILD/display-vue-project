const state = {
    categories: ['All', 'Print', 'Photography', 'Web','Applications']
}
const getters = {
    categories(state) {     
        return state.categories;
    }
}
const mutations = {
    ADD_CATEGORY(state, link) {
        state.categories.push(link);
    }
}
const actions = {
    addCategory(context, category) {
        context.commit('ADD_CATEGORY', category);
    }
}
export default {
    state,
    getters,
    mutations,
    actions
};