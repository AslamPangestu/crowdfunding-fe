/* eslint-disable camelcase */
// export const GetterName = (state, getters, rootState, rootGetters) => {}
export const GetPagination = (state, getters, rootState, rootGetters) => {
  const { has_prev, has_next, current_page, last_page } = state.pagination

  const pages = []
  for (let index = 1; index <= last_page; index++) {
    pages.push(index)
  }

  return {
    hasPrev: has_prev,
    hasNext: has_next,
    nextPage: current_page + 1,
    prevPage: current_page - 1,
    firstPage: 1,
    lastPage: last_page,
    currentPage: current_page,
    pages,
  }
}
