menu = document.getElementById('burger')
toggle = false
function handleMenuClick() {
    !toggle ? (menu.classList.add('show'), toggle=true) : (menu.classList.remove('show'), toggle=false)
}