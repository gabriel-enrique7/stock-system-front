import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Register from '@/views/Register.vue';

const routes: RouteRecordRaw[] = [
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