const form = document.querySelector('[data-js="cars-form"]')
const table = document.querySelector('[data-js="table"]')
const tbody = document.querySelector('[data-js="tbody"]')

function appendData(inputElement, trParameter) {
  const td = document.createElement('td')
  td.textContent = inputElement.value
  trParameter.appendChild(td)
}

function handleSubmit(e) {
  e.preventDefault()
  const image = e.target.elements['image']
  const brand = e.target.elements['model']
  const year = e.target.elements['year']
  const plate = e.target.elements['plate']
  const color = e.target.elements['color']

  const inputElements = [image, brand, year, plate, color]
  const tableRow = document.createElement('tr')

  inputElements.forEach(element => appendData(element, tableRow))
  table.appendChild(tableRow)

  e.target.reset()
  image.focus()
}

form.addEventListener('submit', handleSubmit)
