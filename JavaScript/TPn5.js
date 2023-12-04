let carrito = [];

const addFormProducts = document.getElementById("formAddProducts");
const addInputProducts = document.getElementById("inputAddProducts");
const addBtnProducts = document.getElementById("buttonAddProducts");
const productList = document.getElementById("productList");
let inputSearch = document.getElementById("inputSearchProducts");
let searchList = document.getElementById("searchList");
let filterInput = document.getElementById("inputFilterProducts");
let filterForm = document.getElementById("formFilterProducts");
let filterList = document.getElementById("filterList");
let cartProdAmount = document.getElementById(`cartProdAmount`);

//AGREGAR PRODUCTOS
addBtnProducts.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    addInputProducts.value !== `` &&
    !carrito.includes(addInputProducts.value)
  ) {
    let producto = addInputProducts.value.trim();
    carrito.push(producto);
    console.log(carrito, "<--- Soy el Carrito");
    addFormProducts.reset();
    listarProductos();
    cartProdAmount.innerText = carrito.length;
  } else if (carrito.includes(addInputProducts.value)) {
    alert(`Ya existe un producto con el nombre "${addInputProducts.value}".`);
  } else {
    alert(`Debe ingresar un nombre de producto válido.`);
  }
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
  let productSearch = inputSearch.value.trim();
  let indice = buscarProductoEnCarrito(productSearch);
  if (indice !== -1) {
    searchList.textContent = `El producto "${productSearch}" esta en la posición ${
      indice + 1
    } del carrito`;
  } else {
    searchList.textContent = `El producto "${productSearch}" no esta en el carrito`;
  }
}
function buscarProductoEnCarrito(producto) {
  console.log(producto, "<--- Soy el producto a buscar");
  return carrito.indexOf(producto);
}

//Filtrar Productos

let filtrado;
function filtrarProductos() {
  const filtro = filterInput.value.trim();

  filtrado = filtroProducto(filtro);

  console.log(filtrado, "productos filtrados");
  listarFiltrados();
}
function filtroProducto(filtro) {
  const productosFiltrados = carrito.filter((producto) =>
    producto.includes(filtro)
  );
  return productosFiltrados;
}

//LISTAR FILTRADOS
function listarFiltrados() {
  filterList.innerHTML = "";

  if (filtrado.length !== 0) {
    filtrado.forEach((producto, index) => {
      const liFilter = document.createElement("li");
      liFilter.innerHTML = `${index + 1} - ${producto} <button type="button" onclick="carrito.splice(${index}, 1)">Eliminar</button>`;
      filterList.appendChild(liFilter);
    });
  }
  //   else {
  //     filterList.textContent = "El carrito esta Vacio";
  //     console.log("No hay productos en el carrito");
  //   }
}

// let reCount = () => {
//     cartProdAmount.innerText = orderCart.length;
//     listCart.innerHTML = ``;
//     orderCart.forEach((item) => listCart.insertAdjacentHTML(`beforeend`, `► ${item} <br>`));
// };
