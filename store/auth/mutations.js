// payload -> data send from called action
export const SetUser = (state, payload) => {
  state.user = payload
  state.loggedIn = !!payload
}
