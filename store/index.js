import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import auth from './auth'
import campaign from './campaign'
import transaction from './transaction'
import ui from './ui'

// Persist State Config
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth'],
})

export default function (/* { ssrContext } */) {
  return new Vuex.Store({
    // Global State
    state: {
      baseURL: process.env.baseURLStatic,
    },
    getters: {
      Header(state) {
        return {
          Authorization: `Bearer ${state.auth.user.token}`,
        }
      },
    },
    // Modules
    modules: {
      auth,
      campaign,
      transaction,
      ui,
    },
    // Plugins
    plugins: [vuexLocal.plugin],
  })
}
