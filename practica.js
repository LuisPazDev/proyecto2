let inputField = document.getElementById('nombre')
let boton = document.querySelector('button')

let data = JSON.parse(localStorage.getItem('nombres'))


let nombresArray = data !== [] ? data : []
let nombre = ''
inputField.addEventListener('change', function () {
    nombre = inputField.value
})

boton.addEventListener('click', function () {
    nombresArray.push(nombre)
    localStorage.setItem('nombres', JSON.stringify(nombresArray))
})

let lista = document.createElement('ul')
const crearLista = () => {
    data.map((e, i) => {
        let item = document.createElement('li')
        let borrar = document.createElement('button')
        borrar.innerText = 'Borrar'
        item.innerText = e
        item.appendChild(borrar)
        lista.appendChild(item)
        borrar.addEventListener('click', e => {
            nombresArray.splice(i, 1)
            localStorage.setItem('nombres', JSON.stringify(nombresArray))
    })
})
}
crearLista()
document.body.appendChild(lista)