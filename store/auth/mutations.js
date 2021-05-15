// payload -> data send from called action
export const SetUser = (state, payload) => {
  if (!payload.token) delete payload.token
  state.user = {
    ...state.user,
    ...payload,
  }
  state.loggedIn = !!payload
}

export const SetUserAvatar = (state, payload) => {
  state.user.image_url = payload
}

export const Logout = (state) => {
  state.user = null
  state.loggedIn = false
}
