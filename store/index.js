import Vuex from 'vuex'

import test from './test'

export default function (/* { ssrContext } */) {
  return new Vuex.Store({
    modules: {
      test,
    },
  })
}
