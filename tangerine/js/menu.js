const burger = document.getElementById('burger')
const close_menu = document.getElementById('close_menu')
const menu = document.getElementById('menu')

burger.addEventListener('click', () => {
    menu.classList.add('show')
    burger.style.display = 'none'
})

close_menu.addEventListener('click', () => {
    menu.classList.remove('show')
    burger.style.display = 'block'
})