export default function ({ app, error, $auth }, inject) {
  // inject methods to vue prototype
  const application = app

  // api call method
  const call = (arg) => {
    // arguments
    let method = arg.method || 'get',
      url = arg.url,
      data = arg.data || {},
      msg = arg.msg,
      options = arg.options || {},
      storageName = arg.storage || false,
      loading = arg.loading,
      raise = arg.raise,
      toast = arg.toast,
      config = arg.config

    let params = {
      Version: Date.now(),
    }

    if (loading) {
      application.store.commit('setLoading', true)
    }

    return new Promise((resolve, reject) => {
      // check connectivity
      application
        .$axios({
          method: method,
          url: url,
          data: method != 'get' ? data : {},
          params: method == 'get' ? { ...params, ...data } : params,
          headers: options && options.headers ? options.headers : {},
          ...config,
        })
        .then((res) => {
          console.log(res)
          if (res.headers['x-pagination-per-page']) {
            resolve({
              data: res.data,
              per_page: Number(res.headers['x-pagination-per-page']),
              page_count: (res.headers['x-pagination-page-count']),
              total_count: (res.headers['x-pagination-total-count'])
            })
          } else {
            resolve(res.data)
          }

          if (msg) application.$toast.success(msg)
        })
        .catch(async (err) => {
          // console.log(err.re);
          let message = 'Error while connecting to server'
          let errors = null
          let status = 500
          if (err.response) {
            console.log(err.response);
            if (err.response.data && err.response.data.message)
              message = err.response.data.message
            else if (err.response.message) message = err.response.message

            if (err.response.data && err.response.data.errors) {
              errors = err.response.data.errors
            }
          }

          if (err.response && err.response.status) {
            status = err.response.status
          }
          // set message and status
          err.text = message
          err.status = status
          err.errors = errors

          // check auth
          if (status == 401) {
            $auth.fetchUser().catch(() => {
              $auth.logout()
            })
          }

          // raise error
          if (raise) {
            error({ statusCode: err.status, message: err.text })
          }

          // toast error
          if (toast) {
            application.$toast.error(err.text)
          }
          reject(err)
        })
        .finally((res) => {
          if (loading) {
            application.store.commit('setLoading', false)
          }
        })
    })
  }

  // inject
  inject('call', call)
}

// set localStorage with Expiry
const setWithExpiry = (key, value, ttl) => {
  const now = new Date()
  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl * 1000 * 60 * 60 * 24,
  }
  localStorage.setItem(key, JSON.stringify(item))
}

const updateWithExpiry = (key, value) => {
  let x = localStorage.getItem(key)
  x = JSON.parse(x)
  x.value = value
  localStorage.setItem(key, JSON.stringify(x))
}

// get localStorage with Expiry
// const getWithExpiry = (key) => {
//   const itemStr = localStorage.getItem(key)
//   // if the item doesn't exist, return null
//   if (!itemStr) {
//     return null
//   }
//   const item = JSON.parse(itemStr)
//   const now = new Date()
//   // compare the expiry time of the item with the current time
//   if (now.getTime() > item.expiry) {
//     // If the item is expired, delete the item from storage
//     // and return null
//     localStorage.removeItem(key)
//     return null
//   }
//   return item.value
// }
