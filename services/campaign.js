import Init from './init'

export default {
  GetCampaigns: async () => {
    try {
      const res = await Init(process.env.baseURL).get('/campaigns')
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
