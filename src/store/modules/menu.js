const state = {
    navLinks: [
        {name: 'home', link: '/'},
        {name: 'about', link: '/about'},
        {name: 'work', link: '/work'},
        {name: 'contact', link: '/contact'},
        {name: 'blog', link: '/blog'},
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