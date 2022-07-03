import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Register from '@/views/Register.vue';
import Home from '@/views/Home.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    
    {
        path: '/register',
        name: 'Register',
        component: Register
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;