export const HasImage = (state) => state.user.image_url !== ''
export const Avatar = (state, _getters, rootState) => {
  if (!state.user) {
    return './avatar.jpg'
  }
  return `${rootState.baseURL}/${state.user.image_url}`
}
export const Header = (state) => ({
  Authorization: `Bearer ${state.user.token}`,
})
