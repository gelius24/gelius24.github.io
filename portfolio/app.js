const autodidacte = document.querySelector(".autodidacte")
const text = "(autodidacte)"

function textAnimation(elem, text, i = 0) {
    elem.textContent += text[i];
    if (i === text.length - 1)
        return
    setTimeout(() => textAnimation(elem, text, i+1), 150)
    
}
textAnimation(autodidacte, text);