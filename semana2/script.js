//mostrar o cultar div
//declaraciones de variables siempre aqui arriba

//HAROLD ENOC SANTOS MORILLO SMIS001621

const hidebtn = document.querySelector('#hideElements')
const listDiv = document.querySelector('#list')

//constantes para agregar elementos
const addItemInput = document.querySelector('#addItem') //input : text
const addItemButton = document.querySelector('button#addItemButton')

//constante para el botón quitar
const removeItem = document.querySelector('button#removeItem')



//agregar los eventos al boton ocultar/mostrar

hidebtn.addEventListener('click',() => {
    if(listDiv.style.display == 'none'){
        listDiv.style.display = 'block'
        hidebtn.textContent = 'Ocultar'
    }else{
        listDiv.style.display = 'none'
        hidebtn.textContent = 'Mostrar'
    }

})


//agregar elementos a la lista

addItemButton.addEventListener('click', () => {
    let list = document.querySelector('ul')
    let li = document.createElement('li')

    if( addItemInput.value){
        li.textContent = addItemInput.value 
        list.appendChild(li)

        addItemInput.value = ""
        addItemInput.focus();
    }else {
        confirm("El input está vacío por lo tanto no se puede agregar la fruta")
    }

})


//funcion para obtener el indice del elemento en la lista
var list = document.getElementById('listItems'),
    items = list.getElementsByTagName('li')

const findIndex = (element) => {
    var len = items.length
    for(var i = 0; i<len; i++){
        if(items[i] === element){
            return i
        }
    }
}

list.onclick = (e) =>{
    let event = e || window.event
    src = event.target

    let myIndex = findIndex(src)
    index = myIndex
    //alert(myIndex)
    list.querySelectorAll('li').forEach(el => el.classList.remove('alert', 'alert-danger')) 
   
    items[myIndex].classList.add('alert', 'alert-danger')
}

//eliminar el elemento de la lista
removeItem.addEventListener('click', () => {

    let apro = window.confirm("Está seguro que desea eliminar esta fruta")

    if (apro === true ){
        items[index].parentNode.removeChild(items[index])

    }

})
