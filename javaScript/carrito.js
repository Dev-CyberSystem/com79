let carrito = []

const addFormProducts = document.getElementById('formAddProducts')
const addInputProducts = document.getElementById('inputAddProducts')
const addBtnProducts = document.getElementById('buttonAddProducts')

addBtnProducts.addEventListener('click', (event) => {
    event.preventDefault()
    let producto = addInputProducts.value
    carrito.push(producto)
    console.log(carrito, "<--- Soy el Carrito")
    addFormProducts.reset()
})