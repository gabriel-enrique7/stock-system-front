import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';

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
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;