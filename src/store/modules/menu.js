const state = {
    navLinks: [
        {name: 'home', link: '/'},
        {name: 'about', link: '/about'},
        {name: 'work', link: '/work'},
        {name: 'contact', link: '/contact'},
        {name: 'axios', link: '/axios'},
        {name: 'test', link: '/test'},
    ]
};

const getters = {
    navLinks(state) {
        return state.navLinks;
    }
};

export default {
    state,
    getters
};