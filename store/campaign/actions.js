import Service from '~/services/campaign'

// ctx -> {state,rootGetters,rootState,getters,dispatch,commit}
// payload -> data send from called action
export const GetCampaigns = async () => {
  const data = await Service.GetCampaigns()
  return data
}

export const GetCampaignsUser = async () => {
  const data = await Service.GetCampaigns()
  return data
}

export const GetCampaign = async (_, id) => {
  const data = await Service.GetCampaign(id)
  return data
}
