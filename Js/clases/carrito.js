let productos  = []


const addFromProductos = document.getElementById(`formAddProducts`)
const addInputProductos = document.getElementById(`inputAddProducts`)
const addBtnProductos = document.getElementById(`buttonAddProductos`)


addBtnProductos.addEventListener('click', (event) => {
    event.preventDefault()
    let producto = addInputProductos.value
    productos.push(producto)
    console.log(producto)
    
})
