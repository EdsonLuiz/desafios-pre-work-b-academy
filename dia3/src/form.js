const inputName = document.querySelector('[data-js="username"]')
const form = document.querySelector('[data-js="simple"]')

const select = document.createElement('select')
const fieldset = document.createElement('fieldset')
const legend = document.createElement('legend')

const cores = ['red', 'green', 'tomato', 'blue', 'pink']

function withUpperCaseMatch(match) {
  return match.toUpperCase()
}

function formatName(name) {
  const firstLeterExcludingdPrpositions = /(?:^|\s)(?!da\s|de\s|do\s|dos\s)\S/g
  return name.toLowerCase()
    .replace(firstLeterExcludingdPrpositions, withUpperCaseMatch)

}

function handleInputChange(e) {
  const  rawInputName= e.target.value
  const formatedInputName = formatName(rawInputName)

    e.target.value = formatedInputName
}

inputName.addEventListener('input', handleInputChange)

// EX 02
// add fieldset to form
legend.textContent = 'Cores'
fieldset.appendChild(legend)
form.appendChild(fieldset)

// add select to fieldset and add options
fieldset.appendChild(select)
select.setAttribute('multiple', '')


const divColorsContainer = document.createElement('div')
divColorsContainer.className = 'color-container'

cores.forEach(cor => {
  const option = document.createElement('option')
  option.value = cor
  option.textContent = cor
  select.appendChild(option)
})

function toNewColorDiv(option) {
  const div = document.createElement('div')
  div.className = 'color-div'
  div.style.background = option.value
  return div
}

function elementAppendToContainer(element) {
  divColorsContainer.appendChild(element)
}

function handleSelectChangeEvent(e) {
  divColorsContainer.innerHTML = ''
  const arrayOptions = [...e.target.selectedOptions]
  arrayOptions
    .map(toNewColorDiv)
    .forEach(elementAppendToContainer)
  fieldset.appendChild(divColorsContainer)
}

select.addEventListener('change', handleSelectChangeEvent )
