import Init from './init'

export default {
  Login: async (data) => {
    try {
      const res = await Init(process.env.baseURL).post('/login', data)
      console.debug('Login', res)
      return res.data.data
    } catch (error) {
      console.error('Err Login', error)
    }
  },
  Register: async (data) => {
    try {
      const res = await Init(process.env.baseURL).post('/register', data)
      console.debug('Register', res)
      return res.data.data
    } catch (error) {
      console.error('Err Register', error)
    }
  },
  UploadAvatar: async (data, header) => {
    try {
      const res = await Init(process.env.baseURL).post('/upload-avatar', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...header,
        },
      })
      console.debug('UploadAvatar', res)
      return res.data.data
    } catch (error) {
      console.error('Err UploadAvatar', error)
    }
  },
}
