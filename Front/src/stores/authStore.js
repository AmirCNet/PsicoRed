import { defineStore } from 'pinia'
import * as authService from '../services/authService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token:   authService.getToken(),
    usuario: authService.getUsuario()
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    rol:             (state) => state.usuario?.rol ?? null,
    esAdmin:         (state) => state.usuario?.rol === 'administrador',
    esProfesional:   (state) => state.usuario?.rol === 'profesional'
  },

  actions: {
    async login(email, password) {
      const data = await authService.login(email, password)
      this.token   = data.token
      this.usuario = data.usuario
    },

    logout() {
      authService.logout()
      this.token   = null
      this.usuario = null
    }
  }
})
