import Init from './init'

export default {
  Fund: async (data, header) => {
    try {
      const res = await Init(process.env.baseURL).post(
        '/users/transactions',
        data,
        {
          headers: {
            ...header,
          },
        }
      )
      console.debug('Fund', res)
      return res.data.data
    } catch (error) {
      console.error('Err Fund', error)
    }
  },
}
