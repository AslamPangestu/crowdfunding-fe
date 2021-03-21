import Init from './init'

export default {
  Login: async ({ email, password }) => {
    try {
      const data = { email, password }
      const res = await Init(process.env.baseURL).post('/login', data)
      console.debug('Login', res)
      return res.data.data
    } catch (error) {
      console.error('Err Login', error)
    }
  },
}
