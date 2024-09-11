// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import PrivacyPolicy from './pages/PrivacyPolicy.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/privacypolicy',
        name: 'privacypolicy',
        component: PrivacyPolicy,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
