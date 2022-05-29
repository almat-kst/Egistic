import { createStore } from 'vuex'
import worker from './modules/worker.js'
import employer from './modules/employer.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    worker,
    employer
  },
})
