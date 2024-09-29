const search = document.querySelector('.search')
const barra = document.querySelector('#barra')

search.addEventListener('click', handleClick)


function handleClick() {
  barra.classList.toggle('active')
}