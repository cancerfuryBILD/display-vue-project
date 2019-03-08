const state = {
    imgList: [
        {
           title: 'Colorado Ad Day',
           imgLocation: '/images/img-1.png',
           altTag: '3D Art',
           imgCategory: 'Print'
        },
        {
            title: 'The Most Common Questions Asked on ShopTalk',
            imgLocation: '/images/img-2.png',
            altTag: 'UI Components',
            imgCategory: 'Web'
        },
        {
            title: 'Where Do You Learn HTML & CSS in 2019?',
            imgLocation: '/images/img-3.png',
            altTag: 'Couple in love',
            imgCategory: 'Photography'
        },
        {
            title: 'Responsive Designs and CSS Custom Properties: Defining Variables and Breakpoints',
            imgLocation: '/images/img-4.png',
            altTag: 'Smily face',
            imgCategory: 'Print'
        },
        {
            title: 'Tapping into UGC with Offerpop',
            imgLocation: '/images/img-5.png',
            altTag: 'Social Networks',
            imgCategory: 'Applications'
        },
        {
            title: '5 websites that get design right',
            imgLocation: '/images/img-6.png',
            altTag: 'Jesus in love',
            imgCategory: 'Print'
        },
        {
            title: 'Mariachis, Hats, and Pies, Oh My',
            imgLocation: '/images/img-7.png',
            altTag: 'Colored collage',
            imgCategory: 'Print'
        },
        {
            title: 'Big buzz. Big brands. Reebok does omnichannel',
            imgLocation: '/images/img-8.png',
            altTag: 'Smoking gun',
            imgCategory: 'Photography'
        },
        {
            title: 'Using the Ordinary to Build the Extraordinary',
            imgLocation: '/images/img-9.png',
            altTag: 'Various graffiti',
            imgCategory: 'Print'
        }
    ]
}

const getters = {
    imgList(state) {
        return state.imgList;
    }
}
export default {
    state,
    getters

}