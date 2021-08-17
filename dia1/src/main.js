import './style.css'

const visibilityLink = document.querySelector('[data-js="visibility-link"]')
const appCSSClass = document.querySelector('.app')

document.querySelector('[data-js="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

visibilityLink.addEventListener('click', (event) => {
  event.preventDefault()
  appCSSClass.classList.toggle('not-visible')
}, false)
