export async function GetCampaigns(
  { commit },
  { page, pageSize } = { page: 1, pageSize: 0 }
) {
  const res = await this.$axios.$get('/v1/campaigns', {
    params: { page, page_size: pageSize },
  })
  commit('ui/SetPagination', res.pagination, { root: true })
  return res.data
}

export async function GetCampaignsUser(
  { rootGetters, commit },
  { page, pageSize } = { page: 1, pageSize: 0 }
) {
  const res = await this.$axios.$get('/v1/campaigns', {
    headers: {
      ...rootGetters.Header,
    },
    params: { user_id: rootGetters['auth/UserID'], page, page_size: pageSize },
  })
  commit('ui/SetPagination', res.pagination, { root: true })
  return res.data
}

export async function GetCampaignTransactions(
  { rootGetters, commit },
  { campaignId }
) {
  const res = await this.$axios.$get(
    `/v1/campaigns/${campaignId}/transactions`,
    {
      headers: {
        ...rootGetters.Header,
      },
    }
  )
  commit('ui/SetPagination', res.pagination, { root: true })
  return res.data
}

export async function GetCampaign(_, id) {
  const res = await this.$axios.$get(`/v1/campaigns/${id}`)
  return res
}

export async function PostNewCampaign({ rootGetters }, payload) {
  const res = await this.$axios.$post('/v1/campaigns', payload, {
    headers: {
      ...rootGetters.Header,
    },
  })
  return res
}

export async function PatchCampaign({ rootGetters }, { payload, id }) {
  const res = await this.$axios.$patch(`/v1/campaigns/${id}`, payload, {
    headers: {
      ...rootGetters.Header,
    },
  })
  return res
}

export async function UploadCampaignImages({ rootGetters }, payload) {
  const res = await this.$axios.$post('/v1/campaign-images', payload, {
    headers: {
      ...rootGetters.Header,
      'Content-Type': 'multipart/form-data',
    },
  })
  return res
}
