export async function Login({ commit }, payload) {
  const data = await this.$axios.$post('/v1/login', payload)
  commit('SetUser', data)
}

export async function Register({ commit }, payload) {
  const data = await this.$axios.$post('/v1/register', payload)
  commit('SetUser', data)
}

export async function UploadAvatar({ commit, rootGetters }, payload) {
  const data = await this.$axios.$post('/v1/upload-avatar', payload, {
    headers: {
      ...rootGetters.Header,
      'Content-Type': 'multipart/form-data',
    },
  })
  commit('SetUserAvatar', data.file)
}

export async function GetProfile({ commit, rootGetters }) {
  const data = await this.$axios.$get('/v1/profile', {
    headers: {
      ...rootGetters.Header,
    },
  })
  commit('SetUser', data)
  return data
}

export async function UpdateProfile({ commit, rootGetters }, payload) {
  const data = await this.$axios.$patch('/v1/profile', payload, {
    headers: {
      ...rootGetters.Header,
    },
  })
  commit('SetUserAvatar', data.file)
}

export const Logout = ({ commit }) => {
  commit('Logout')
}
