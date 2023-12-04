let carrito = [];
const addProducts = document.getElementById('addProductsForm');
const inputAddProducts = document.getElementById('inputAddProducts');
const buttonAddProducts = document.getElementById('buttonAddProducts');
const inputBuscarProducto = document.getElementById('inputBuscarProducto');
const inputFiltrarProducto = document.getElementById('inputFiltrarProducto');
const productoLista = document.getElementById('productoLista');
const buscarLista = document.getElementById ('buscarLista');

buttonAddProducts.addEventListener("click", (event) => {
    event.preventDefault()
    let producto = inputAddProducts.value.trim().toLowerCase();
    carrito.push(producto);
    addProducts.reset();
    listarProductos();
});

function listarProductos() {
    productoLista.innerHTML = "";
    if (carrito.length !== 0){
        carrito.forEach ((producto, index) => {
            const li = document.createElement("li");
            li.textContent = `${index + 1} - ${producto}`;
            productoLista.appendChild(li);
});
} else {
  productoLista.textContent = "El carrito esta Vacio";
  console.log("No hay productos en el carrito");
}
}
function buscarProducto(){
    let buscarProducto = inputBuscarProducto.value.toLowerCase().trim();
    let indice = buscarProductoEnCarrito(buscarProducto);
    if (indice !== -1) {
        buscarLista.textContent = `El producto ${buscarProducto} - esta en la posición ${
        indice + 1
      } del carrito`;
    } else {
      buscarLista.textContent = `El producto ${buscarProducto} - no esta en el carrito`;
    }
  }
  function buscarProductoEnCarrito(producto) {
    console.log(producto);
    return carrito.indexOf(producto);
  }

  function filtrarProducto(){
    const filtro = inputFiltrarProducto.value.toLowerCase().trim();
    const filtrado = filtroProducto(filtro);
  }
  function filtroProducto(filtro) {
    const productosFiltrados = carrito.filter((producto) =>
      producto.includes(filtro)
    );
    return productosFiltrados;
  }
  
