import Init from './init'

export default {
  GetCampaigns: async ({ page, pageSize }) => {
    try {
      const res = await Init(process.env.baseURL).get('/campaigns', {
        params: { page, page_size: pageSize },
      })
      console.debug('GetCampaigns', res)
      return res.data.data
    } catch (error) {
      console.error('Err GetCampaigns', error)
    }
  },
  GetCampaign: async (id) => {
    try {
      const res = await Init(process.env.baseURL).get(`/campaigns/${id}`)
      console.debug('GetCampaigns', res)
      return res.data.data
    } catch (error) {
      console.error('Err GetCampaigns', error)
    }
  },
}
