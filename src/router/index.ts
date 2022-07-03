import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/register',
        name: 'Register',
        component: Register
    },

    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;