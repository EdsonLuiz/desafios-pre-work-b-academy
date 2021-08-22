import { fetchClient } from './http'
import { make } from './makeElements'
import {showToaster} from './toaster'

const BASE_URL = 'http://localhost:3333/cars'
const form = document.querySelector('[data-js="cars-form"]')
const table = document.querySelector('[data-js="table"]')
const tbody = document.querySelector('[data-js="tbody"]')

function appendData(inputElement, trReference) {
  const td = make[inputElement.type](inputElement.value)
  trReference.appendChild(td)
}


async function handleSubmit(e) {
  e.preventDefault()
  const image = e.target.elements['image'].value
  const brandModel = e.target.elements['model'].value
  const year = Number(e.target.elements['year'].value)
  const plate = e.target.elements['plate'].value
  const color = e.target.elements['color'].value

  const inputElements = {image, brandModel, year, plate, color}
  const result = await fetchClient.post(BASE_URL, inputElements)

  removeNoContent()
  renderTableRows(inputElements)

  e.target.reset()
  e.target.elements['image'].focus()
  // image.focus()
}

form.addEventListener('submit', handleSubmit)

//

async function handleDelete (e) {
  console.log('deleteou');
  const btn = e.target
  const plate = btn.dataset.plate

  const result = await fetchClient.del(BASE_URL, {plate})

  const tr = document.querySelector(`tr[data-plate="${plate}"]`)
  tbody.removeChild(tr)

  btn.removeEventListener('click', handleDelete)

  const hasTrs = tbody.querySelector('tr')

  if(!hasTrs) {
    showMessageWhenNoData()
  }
}

function renderTableRows(tableData) {
  const tr = document.createElement('tr')
  const inputElements = [
    {type: 'image', value: tableData.image},
    {type: 'text', value: tableData.brandModel},
    {type: 'text', value: tableData.year},
    {type: 'text', value: tableData.plate},
    {type: 'color', value: tableData.color},
    {type: 'button', value: {plate: tableData.plate, handleDelete }},
  ]

  const tableRow = document.createElement('tr')
  tableRow.dataset.plate = tableData.plate

  inputElements.forEach(element => appendData(element, tableRow))

  tbody.appendChild(tableRow)
}

function removeNoContent() {
  const tr = document.querySelector('.no-content')
  if(tr) {
    tbody.removeChild(tr)
  }
}

function showMessageWhenNoData() {
    const tr = document.createElement('tr')
    tr.className = "no-content"
    const td = document.createElement('td')
    td.setAttribute('colspan', 6)
    td.style.textAlign = "center"
    td.textContent = 'Nenhum carro encontrado'
    tr.appendChild(td)
    tbody.appendChild(tr)
}

async function onLoad(httpClient) {
  const data = await httpClient.get(BASE_URL)

  if(data.message) {
    showToaster(data.message, 'warning')
    return
  }

  if(Object.is(data.length, 0)) {
    showMessageWhenNoData()
    return
  }

  data.forEach(singleCarData => {
    renderTableRows(singleCarData)
  })

}

onLoad(fetchClient)

