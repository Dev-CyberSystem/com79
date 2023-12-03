let carrito = []

const addFormProducts = document.getElementById('formAddProductos')
const addInputProducts = document.getElementById('inputAddProductos')
const addBtnProducts = document.getElementById('buttonAddProductos')
const productList = document.getElementById('productList')


addBtnProductos.addEventListener('click', (event) => {
    event.preventDefault()
    // verificamos que el input tenga una entrada 
    let producto = addInputProducts.value.toLowerCase().trim();
    carrito.push(producto)
    console.log(carrito, "<--- Soy el Carrito")
    addFormProductos.reset()
    listarProductos()
});

function listarProductos()
{   
    productList.innerHTML = "" // para resetear el productoList

    if(carrito.length !== 0 )
    {
        carrito.forEach((producto, index) => {
            const li = document.createElement("li");
            li.textContent = `${index + 1} + ${producto}`;
            productList.appendChild(li);
          });
    }
    else{
        productList.textContent(`El carrito esta vacio`)
        alert(`No hay producto en el carrito`);
    }
 

}