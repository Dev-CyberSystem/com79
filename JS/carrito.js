let carrito = [];

const addFormProducts = document.getElementById("formAddProducts");
const addInputProducts = document.getElementById("inputAddProducts");
const addBtnProducts = document.getElementById("buttonAddProducts");
const productList = document.getElementById("productList");
let inputSearch = document.getElementById("inputSearchProducts");
let searchList = document.getElementById("searchList");
let filterInput = document.getElementById("inputFilterProducts");
let filterList = document.getElementById("filterList");

//AGREGAR PRODUCTOS

addBtnProducts.addEventListener("click", (event) => {
  event.preventDefault();
  let producto = addInputProducts.value.toLowerCase().trim();
  carrito.push(producto);
  console.log(carrito, "<--- Soy el Carrito");
  addFormProducts.reset();
  listarProductos();
});

//LISTAR PRODUCTOS

function listarProductos() {
  productList.innerHTML = "";

  if (carrito.length !== 0) {
    carrito.forEach((producto, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1} - ${producto}`;
      productList.appendChild(li);
    });
  } else {
    productList.textContent = "El carrito esta Vacio";
    console.log("No hay productos en el carrito");
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
  console.log(producto, "<--- Soy el producto a buscar");
  return carrito.indexOf(producto);
}

//FILTRAR PRODUCTO 

function filtrarProductos() {
  const filtro = filterInput.value.toLowerCase().trim();

  const filtrado = filtroProducto(filtro);
  filterList.innerHTML = "";

  if (filtrado.length !== 0) {
    filtrado.forEach((producto) => {
      const li = document.createElement("li");
      li.innerHTML = `${producto} <button onclick="eliminarProducto('${producto}')"> Eliminar </button>`;
      filterList.appendChild(li);
    });
  } else if (filtrado.length === 0) {
    const p = document.createElement("p");
    p.textContent = `No hay productos que contengan ${filtro}`;
    filterList.appendChild(p);
  }

  console.log(filtrado, "productos filtrados");
}
function filtroProducto(filtro) {
  const productosFiltrados = carrito.filter((producto) =>
    producto.includes(filtro)
  );
  return productosFiltrados;
}

//ELIMINAR PRODUCTO 

const eliminarProducto = (producto) => {
  console.log(producto, "<--- Soy el producto a eliminar");

  const indice = carrito.indexOf(producto);
  if (indice !== -1) {
    carrito.splice(indice, 1);
    listarProductos();
    filterList.textContent = "";
  }
};