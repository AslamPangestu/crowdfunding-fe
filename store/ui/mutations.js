// payload -> data send from called action
// export const MutationName = (state, payload) => {}
export const SetPagination = (state, payload) => {
  state.pagination = payload
}
