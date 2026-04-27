import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Profesionales from '../views/Profesionales.vue'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/profesionales',
        component: Profesionales
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})