const inputName = document.querySelector('[data-js="username"]')

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
