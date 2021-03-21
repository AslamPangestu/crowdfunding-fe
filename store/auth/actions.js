import Service from '~/services/auth'

export const Login = async ({ commit }, payload) => {
  const data = await Service.Login(payload)
  commit('SetUser', data)
}
export const Logout = ({ commit }, _payload) => {
  commit('SetUser')
}
