import Home from '@/views/home.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/', component: Home },
    { path: '/home', redirect: '/' },
    { path: '/download', component: Home }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;