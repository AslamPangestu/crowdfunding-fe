import Service from '~/services/campaign'

// ctx -> {state,rootGetters,rootState,getters,dispatch,commit}
// payload -> data send from called action
export const GetCampaigns = () => {
  const data = Service.GetCampaigns()
  return data
}

export const GetCampaign = (_, id) => {
  const data = Service.GetCampaign(id)
  return data
}
