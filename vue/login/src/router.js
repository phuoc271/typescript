import Home from './components/Home.vue'
import signup from './components/signup.vue'
import login from './components/login.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'signup',
        component: signup,
        path: '/sign-up'
    },
    {
        name: 'login',
        component: login,
        path: '/login'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;