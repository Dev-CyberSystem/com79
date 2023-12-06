let carrito = [];

const addFormProducts = document.getElementById('formAddProducts');
const addInputProducts = document.getElementById('inputAddProducts');
const addBtnProducts = document.getElementById('buttonAddProducts');
const productList = document.getElementById('productList');
let inputSearch = document.getElementById('inputSearchProducts');
let searchList = document.getElementById('searchList');
let filterInput = document.getElementById('inputFilterProducts');
let deleteInput = document.getElementById('inputDeleteProducts');

//AGREGAR PRODUCTOS
addBtnProducts.addEventListener('click', (event) => {
  event.preventDefault();
  let producto = addInputProducts.value.toLowerCase().trim();
  carrito.push(producto);
  console.log(carrito, '<--- Soy el Carrito');
  addFormProducts.reset();
  listarProductos();
});

//LISTAR PRODUCTOS
function listarProductos() {
  productList.innerHTML = '';

  if (carrito.length !== 0) {
    carrito.forEach((producto, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1} - ${producto}`;
      productList.appendChild(li);
    });
  } else {
    productList.textContent = 'El carrito esta Vacio';
    console.log('No hay productos en el carrito');
  }
}

//BUSCAR PRODUCTOS

function buscarProductos() {
  let productSearch = inputSearch.value.toLowerCase().trim();
  let indice = buscarProductoEnCarrito(productSearch);
  if (indice !== -1) {
    searchList.textContent = `El producto ${productSearch} - esta en la posición ${
      indice + 1
    } del carrito`;
  } else {
    searchList.textContent = `El producto ${productSearch} - no esta en el carrito`;
  }
}
function buscarProductoEnCarrito(producto) {
  console.log(producto, '<--- Soy el producto a buscar');
  return carrito.indexOf(producto);
}

//Filtrar Productos

function filtrarProductos() {
  const filtro = filterInput.value.toLowerCase().trim();

  const filtrado = filtroProducto(filtro);

  console.log(filtrado, 'productos filtrados');
}
function filtroProducto(filtro) {
  const productosFiltrados = carrito.filter((producto) =>
    producto.includes(filtro)
  );
  return productosFiltrados;
}

//Eliminar Un producto

function eliminarProductos() {
  console.log(productList);
  const valorInput = deleteInput.value.toLowerCase().trim();

  let carritoActualizado = carrito.filter(
    (producto) => producto !== valorInput
  );
  console.log(carritoActualizado);
  actualizarCarritoHTML(carritoActualizado);
}

function actualizarCarritoHTML(carrito) {
  // productList.innerHTML = '';

  if (carrito.length !== 0) {
    carrito.forEach((producto, index) => {
      limpiarHTML(productList);
      const li = document.createElement('li');
      li.textContent = `${index + 1} - ${producto}`;
      productList.appendChild(li);
    });
  } else {
    productList.textContent = 'El carrito esta Vacio';
    console.log('No hay productos en el carrito');
  }
}

function limpiarHTML(selector) {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}
