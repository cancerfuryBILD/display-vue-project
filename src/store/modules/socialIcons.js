import db from '../../firebase/init'

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
        state.iconInfo = payload
    }
};
const actions = {
    getSocialIcons({commit}) {
       
        db.collection('socialLinks').onSnapshot((snapshot) => {
            let arrIcons = [];
            snapshot.docs.forEach(doc => {
                arrIcons.push(doc.data())
            })
            // console.log(arrIcons)
            commit('set_socialIcons', arrIcons)
        })
    }
}
export default {
    state,
    getters,
    actions,
    mutations
};