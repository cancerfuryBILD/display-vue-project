const state = {
    categories: ['All', 'Print', 'Photography', 'Web','Applications']
};
const getters = {
    categories(state) {     
        return state.categories;
    },
};
export default {
    state,
    getters
};