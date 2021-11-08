import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import SignUp from '@/views/SignUp.vue';
import Login from '@/views/Login.vue';
import Feed from '@/views/Feed.vue';
import Publish from '@/views/Publish.vue';
import Profile from '@/views/Profile.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    }, {
        name: 'signup',
        path: '/signup',
        component: SignUp,
    }, {
        name: 'login',
        path: '/login',
        component: Login,
    }, {
        name: 'feed',
        path: '/feed',
        component: Feed,
    }, {
        name: 'publish',
        path: '/publish',
        component: Publish,
    }, {
        name: 'profile',
        path: '/profile',
        component: Profile,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
