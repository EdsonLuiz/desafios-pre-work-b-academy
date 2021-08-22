async function get(url) {
  const response = await fetch(url).then(res => res.json())
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
    .catch(e => console.log(e.message))
  return response
}


export const fetchClient = {
  get,
  post
}
