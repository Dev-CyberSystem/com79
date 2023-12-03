let carrito = []

const addFormProducts = document.getElementById('formAddProductos')
const addInputProducts = document.getElementById('inputAddProductos')
const addBtnProducts = document.getElementById('buttonAddProductos')
const productList = document.getElementById('productList')

addBtnProductos.addEventListener('click', (event) => {
    event.preventDefault()
    // verificamos que el input tenga una entrada 
    let producto = addInputProductos.value
    carrito.push(producto)
    console.log(carrito, "<--- Soy el Carrito")
    addFormProductos.reset()
    listarProductos()
})

function listarProductos()
{   
    console.log()

}