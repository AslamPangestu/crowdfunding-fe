export const Avatar = (state, _getters, rootState) => {
  if (!state.user || !state.user.image_url) {
    return './avatar.jpg'
  }
  return `${state.user.image_url}`
}

export const UserID = (state) => {
  return state.user.id
}
