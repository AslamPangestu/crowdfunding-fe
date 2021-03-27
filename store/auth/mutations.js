// payload -> data send from called action
export const SetUser = (state, payload) => {
  state.user = payload
  state.loggedIn = !!payload
}

export const SetUserAvatar = (state, payload) => {
  state.user.image_url = payload
}

export const Logout = (state) => {
  state.user = null
  state.loggedIn = false
}
