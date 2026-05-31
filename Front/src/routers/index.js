import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Profesionales from '../views/Profesionales.vue'
import Pacientes from '../views/Pacientes.vue'
import { isAuthenticated } from '../services/authService'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login,
        meta: { requiresGuest: true }
    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    {
        path: '/profesionales',
        component: Profesionales,
        meta: { requiresAuth: true }
    },
    {
        path: '/pacientes',
        component: Pacientes,
        meta: { requiresAuth: true }
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

// ── Guard Navigation
router.beforeEach((to, from, next) => {
    const loggedIn = isAuthenticated()

    // Si quiere ir a una ruta protegida y no está logueado → ir al login
    if (to.meta.requiresAuth && !loggedIn) {
        return next('/login')
    }

    // Si ya está logueado e intenta ir al login → redirigir al dashboard
    if (to.meta.requiresGuest && loggedIn) {
        return next('/dashboard')
    }

    next()
})
