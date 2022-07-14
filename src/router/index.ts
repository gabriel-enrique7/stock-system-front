import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import PageNotFound from '@/views/PageNotFound.vue';

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

    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;