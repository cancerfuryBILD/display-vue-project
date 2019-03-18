const state = {
    categories: ['all', 'print', 'photography', 'web','applications']
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

        context.commit('ADD_CATEGORY', category.toLowerCase());
    }
}
export default {
    state,
    getters,
    mutations,
    actions
};