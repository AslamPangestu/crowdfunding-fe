import Service from '~/services/campaign'

// ctx -> {state,rootGetters,rootState,getters,dispatch,commit}
// payload -> data send from called action
export const GetCampaigns = (ctx, payload) => {
  const data = Service.GetCampaigns()
  return data
}
