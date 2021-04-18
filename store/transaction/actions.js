export async function Fund({ rootGetters }, payload) {
  const data = await this.$axios.$post('/v1/users/transactions', payload, {
    headers: {
      ...rootGetters.Header,
    },
  })
  return data
}

export async function GetTransactions({ rootGetters }) {
  const data = await this.$axios.$get('/v1/users/transactions', {
    headers: {
      ...rootGetters.Header,
    },
  })
  return data
}
