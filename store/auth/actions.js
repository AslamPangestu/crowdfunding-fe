import Service from '~/services/auth'

export const Login = async ({ commit }, payload) => {
  const data = await Service.Login(payload)
  commit('SetUser', data)
}
export const Register = async ({ commit }, payload) => {
  const data = await Service.Register(payload)
  commit('SetUser', data)
}
export const UploadAvatar = async ({ commit, getters }, payload) => {
  const data = await Service.UploadAvatar(payload, getters.Header)
  commit('SetUserAvatar', data.file)
}
export const Logout = ({ commit }, _payload) => {
  commit('Logout')
}
