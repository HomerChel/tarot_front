import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import AccountPage from './components/AccountPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage
    },
    {
        path: '/account',
        name: 'account',
        component: AccountPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
