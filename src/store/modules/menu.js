const state = {
    navLinks: [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/about'},
        {name: 'Work', link: '/work'},
        {name: 'Contact', link: '/contact'},
        {name: 'Axios', link: '/axios'},
        {name: 'Test', link: '/test'},
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