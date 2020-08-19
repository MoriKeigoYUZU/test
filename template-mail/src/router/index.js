import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from '../pages/Top'
import MyInformation from '../pages/MyInformation'
import DestinationInformation from '../pages/DestinationInformation'
import Result from '../pages/Result'
import SuperiorResult from '../pages/SuperiorResult'
import FriendResult from '../pages/FriendResult'
import RelativeResult from '../pages/RelativeResult'

import Main from '../pages/Main'
import Props from '../pages/Props'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Top',
        component: Top
    },
    {
        path: '/MyInformation',
        name: 'MyInformation',
        component: MyInformation
    },
    {
        path: '/DestinationInformation',
        name: 'DestinationInformation',
        component: DestinationInformation
    },
    {
        path: '/Result',
        name: 'Result',
        component: Result
    },
    {
        path: '/SuperiorResult',
        name: 'SuperiorResult',
        component: SuperiorResult
    },
    {
        path: '/FriendResult',
        name: 'FriendResult',
        component: FriendResult
    },
    {
        path: '/RelativeResult',
        name: 'RelativeResult',
        component: RelativeResult
    },
    {
        path: '/Main',
        name: 'Main',
        component: Main
    },
    {
        path: '/Props',
        name: 'Props',
        component: Props
    },
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
//
// export default router


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router