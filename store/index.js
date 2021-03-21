import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import auth from './auth'
import campaign from './campaign'

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
    modules: {
      auth,
      campaign,
    },

    plugins: [vuexLocal.plugin],
  })
}
