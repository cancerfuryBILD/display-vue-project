const state = {
    iconInfo: []
};

const getters = {
    socialIcons(state) {
        return state.iconInfo;
    }
};

const mutations = {
    set_socialIcons(state, payload) {
        state.iconsInfo = payload
    }
};
const actions = {
    getSocialIcons({commit}) {
        arrIcons = []
        db.collection('socialLinks')
    }
}
export default {
    state,
    getters,
    actions,
    mutations
};