async function get(url) {
  const response = await fetch(url)
    .then(res => res.json())
    .catch(e => ({ error: true, message: e.message }))
  return response
}

async function post(url, bodyData) {
  const options = {
    method: "POST",
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(bodyData)
  }

  const response = await fetch(url, options)
    .then(res => res.json())
    .catch(e => ({ error: true, message: e.message }))
  return response
}

async function del(url, bodyData) {
  const options = {
    method: "DELETE",
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(bodyData)
  }

  const response = await fetch(url, options)
    .then(res => res.json())
    .catch(e => ({ error: true, message: e.message }))
  return response
}


export const fetchClient = {
  get,
  post,
  del
}
