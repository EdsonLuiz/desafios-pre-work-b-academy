function imageElement(value) {
  const td = document.createElement('td')
  const img = document.createElement('img')
  img.src = value
  img.className = 'img-car'
  td.appendChild(img)
  return td
}

function textElement(value) {
  const td = document.createElement('td')
  td.textContent = value
  return td
}


function buttonElement({plate, handleDelete}) {
  const td = document.createElement('td')
  const btn = document.createElement('button')
  btn.dataset.plate = plate
  btn.textContent = `Excluir`
  btn.addEventListener('click', handleDelete)
  btn.className = 'btn-delete'
  td.appendChild(btn)
  return td
}


function colorElement(value) {
  const td = document.createElement('td')
  td.style.background = value
  td.style.padding = '4px'
  return td
}

export const make = {
  image: imageElement,
  text: textElement,
  color: colorElement,
  button: buttonElement
}
