/* eslint-disable no-console */
export default function ({ $axios, redirect }) {
  $axios.onRequest(({ url, data, method, headers }) => {
    if (method === 'post') {
      console.debug(`[REQ-POST] ${url}`, { header: headers, data })
    } else if (method === 'get') {
      console.debug(`[REQ-GET] ${url}`, { header: headers })
    }
  })

  $axios.onResponse(({ config, data }) => {
    const { url, method } = config
    console.debug(`[RES-${method}] ${url}`, data)
    return data
  })
  $axios.onError((error) => {
    console.error('ERR', error)
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/error')
    }
  })
}
