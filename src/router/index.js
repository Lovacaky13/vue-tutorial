import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: "/",
        component: () => { import ('../layouts/myLayout.vue') },

        children: [{
            path: '/',
            name: 'HomePage',
            component: () => { import ('../views/Home.vue') }
        }]
    },

    {
        path: '/about',
        component: () => { import ('../layouts/myLayout.vue') },

        children: [{
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { import ( /* webpackChunkName: "about" */ '../views/About.vue') }

        }]
    },

    {
        path: '/test',
        component: () => { import ('../components/FirstComponent.vue') },


    },

]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router