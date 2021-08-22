
export function showToaster(message, type = 'success') {

  const div = document.querySelector('[data-js="toaster"]')
  div.textContent = message

  const defineType = {
    success: () => div.classList.add("success"),
    warning: () => div.classList.add("warning")
  }

  div.classList.add("show")
  defineType[type]()

  setTimeout(() => {
    div.classList.remove("show")
    div.classList.remove("success")
    div.classList.remove("warning")
  }, 2000);
}
