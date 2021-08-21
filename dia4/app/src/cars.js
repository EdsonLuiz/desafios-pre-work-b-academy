import { fetchClient } from './http'
import { make } from './makeElements'

const BASE_URL = 'http://localhost:3333/cars'
const form = document.querySelector('[data-js="cars-form"]')
const table = document.querySelector('[data-js="table"]')
const tbody = document.querySelector('[data-js="tbody"]')

function appendData(inputElement, trReference) {
  const td = make[inputElement.type](inputElement.value)
  trReference.appendChild(td)
}


function handleSubmit(e) {
  e.preventDefault()
  const image = e.target.elements['image'].value
  const brandModel = e.target.elements['model'].value
  const year = e.target.elements['year'].value
  const plate = e.target.elements['plate'].value
  const color = e.target.elements['color'].value

  const inputElements = {image, brandModel, year, plate, color}

  renderTableRows(inputElements)

  e.target.reset()
  e.target.elements['image'].focus()
  // image.focus()
}

form.addEventListener('submit', handleSubmit)

//


function renderTableRows(tableData) {
  const tr = document.createElement('tr')
  const inputElements = [
    {type: 'image', value: tableData.image},
    {type: 'text', value: tableData.brandModel},
    {type: 'text', value: tableData.year},
    {type: 'text', value: tableData.plate},
    {type: 'color', value: tableData.color},
  ]

  const tableRow = document.createElement('tr')

  inputElements.forEach(element => appendData(element, tableRow))
  tbody.appendChild(tableRow)
}

function showMessageWhenNoData() {
    const tr = document.createElement('tr')
    const td = document.createElement('td')
    td.setAttribute('colspan', 6)
    td.style.textAlign = "center"
    td.textContent = 'Nenhum carro encontrado'
    tr.appendChild(td)
    tbody.appendChild(tr)
}

async function onLoad(httpClient) {
  const data = await httpClient.get(BASE_URL)
  console.log(data);

  if(Object.is(data.length, 0)) {
    showMessageWhenNoData()
    return
  }

  data.forEach(singleCarData => {
    renderTableRows(singleCarData)
  })

}

onLoad(fetchClient)

