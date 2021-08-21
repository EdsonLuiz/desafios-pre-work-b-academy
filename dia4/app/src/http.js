async function get(url) {
  const response = await fetch(url).then(res => res.json())
  return response
}

export const fetchClient = {
  get
}
