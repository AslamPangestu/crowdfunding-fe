export async function GetCampaigns(
  _,
  { page, pageSize } = { page: 1, pageSize: 0 }
) {
  const res = await this.$axios.$get('/v1/campaigns', {
    params: { page, page_size: pageSize },
  })
  return res
}

export async function GetCampaignsUser(
  { rootGetters },
  { page, pageSize } = { page: 1, pageSize: 0 }
) {
  const res = await this.$axios.$get('/v1/campaigns', {
    params: { user_id: rootGetters['auth/UserID'], page, page_size: pageSize },
  })
  return res
}

export async function GetCampaignTransactions(_, { campaignId }) {
  const res = await this.$axios.$get(`/v1/campaigns/${campaignId}/transactions`)
  return res
}

export async function GetCampaign(_, id) {
  const res = await this.$axios.$get(`/v1/campaigns/${id}`)
  return res
}

export async function PostNewCampaign({ rootGetters }, payload) {
  const res = await this.$axios.$post('/v1/campaigns/', payload, {
    headers: {
      ...rootGetters.Header,
    },
  })
  return res
}
