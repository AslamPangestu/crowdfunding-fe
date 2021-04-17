export const HasImage = (state) => state.user.image_url !== ''

export const Avatar = (state, _getters, rootState) => {
  if (!state.user || !state.user.image_url) {
    return './avatar.jpg'
  }
  return `${state.user.image_url}`
}
export const Header = (state) => ({
  Authorization: `Bearer ${state.user.token}`,
})
