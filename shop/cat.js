let option = undefined
function getValue(){
    option = document.getElementById('cat').value
    console.log('categorie selectioné : ',option)
    if(option !== undefined){
      const items = document.getElementsByClassName('product')
      for(let i = 0; i < items.length; i++){
          if (items[i].classList.contains(option)){
            items[i].classList.remove('hide')
          } else {
              items[i].classList.add('hide')
          }
      }
    }
    if(option === 'all'){
        const items = document.getElementsByClassName('product')
        for(let i = 0; i < items.length; i++){
            items[i].classList.remove('hide')
        }
    }
}