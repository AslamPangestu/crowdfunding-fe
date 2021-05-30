export async function Fund({ rootGetters }, payload) {
  const res = await this.$axios.$post('/v1/users/transactions', payload, {
    headers: {
      ...rootGetters.Header,
    },
  })
  return res
}

export async function GetTransactions({ rootGetters, commit }) {
  const res = await this.$axios.$get('/v1/users/transactions', {
    headers: {
      ...rootGetters.Header,
    },
  })
  commit('ui/SetPagination', res.pagination, { root: true })
  return res.data
}
