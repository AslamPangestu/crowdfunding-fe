import Service from '~/services/transaction'
// ctx -> {state,rootGetters,rootState,getters,dispatch,commit}
// payload -> data send from called action
export const Fund = async ({ rootGetters }, payload) => {
  const data = await Service.Fund(payload, rootGetters.Header)
  return data
}
