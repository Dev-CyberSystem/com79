let carrito = [];

const addFormProducts = document.getElementById("formAddProducts");
const addInputProducts = document.getElementById("inputAddProducts");
const addBtnProducts = document.getElementById("buttonAddProducts");
const productList = document.getElementById("productList");
let inputSearch = document.getElementById("inputSearchProducts");
let searchList = document.getElementById("searchList");
let filterInput = document.getElementById("inputFilterProducts");
let filterList = document.getElementById("filterList");
const toDelete = document.getElementById("deleteProduct")

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
      //boton  para eliminar
      const deleteButton= document.createElement("button")
      deleteButton.setAttribute("type","button")
      deleteButton.textContent= "eliminar"
      deleteButton.onclick = function () {
        eliminarProducto(li);
      };
      li.textContent = `${index + 1} - ${producto}`;
      productList.appendChild(li);
      li.appendChild(deleteButton);
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

//Filtrar Productos

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

const eliminarProducto = (producto) => {
  console.log(producto, "<--- Soy el producto a eliminar");

  const indice = carrito.indexOf(producto);
  if (indice !== -1) {
    carrito.splice(indice, 1);
    listarProductos();
    filterList.textContent = "";
  }
};

// otra manera de filtrar y eliminar.

// Función para filtrar productos desde el DOM y mostrar en el DOM
// function filtrarProductosDesdeDOM() {
//   const filtroInput = document.getElementById("filtroInput");
//   const resultadoFiltrado = document.getElementById("resultadoFiltrado");

//   const filtro = filtroInput.value.trim();
//   const productosFiltrados = filtrarProductos(filtro); // Llamar a la función filtrarProductos para obtener los productos filtrados por el filtro ingresado en el input de filtro de productos desde el DOM y guardarlos en una variable productosFiltrados para mostrarlos en el DOM con la función mostrarProductosFiltrados en el elemento resultadoFiltrado del DOM 

//   if (productosFiltrados.length === 0) {
//     resultadoFiltrado.textContent = `No hay productos que coincidan con "${filtro}".`;
//   } else {
//     resultadoFiltrado.innerHTML = `<p>Productos que coinciden con "${filtro}":</p>`;
//     const ul = document.createElement("ul");

//     productosFiltrados.forEach((producto, index) => { // Crear un elemento <li> por cada producto
//       const li = document.createElement("li");
//       li.textContent = `${index + 1}. ${producto}`;
//       // Agregar un botón para eliminar el producto
//       const botonEliminar = document.createElement("button");
//       botonEliminar.textContent = "Eliminar";
//       botonEliminar.addEventListener("click", function () {
//         eliminarProducto(producto);
//         listarProductos();
//         resultadoFiltrado.textContent = ""; // Vaciar el elemento resultadoFiltrado del DOM antes de volver a mostrar los productos filtrados para evitar duplicados.
//       });

//       li.appendChild(botonEliminar); // Agregar el botón eliminar al elemento <li> del producto
//       ul.appendChild(li); // Agregar el elemento <li> del producto a la lista de productos
//     });

//     resultadoFiltrado.appendChild(ul); // Agregar la lista de productos al elemento resultadoFiltrado del DOM
//   }
// }

// // Función para filtrar productos por palabra, parte de ella o letra
// function filtrarProductos(filtro) { // Recibe el filtro ingresado en el input de filtro de productos desde el DOM
//   const productosFiltrados = carrito.filter((producto) => // Filtrar los productos del carrito por el filtro ingresado en el input de filtro de productos desde el DOM
//     producto.toLowerCase().includes(filtro.toLowerCase()) // includes() devuelve true si el producto incluye el filtro ingresado en el input de filtro de productos desde el DOM y false si no lo incluye (no distingue entre mayúsculas y minúsculas)  
//   );

//   return productosFiltrados;
// }

// // Función para eliminar un producto del carrito por su nombre
// function eliminarProducto(producto) {
//   const indice = carrito.indexOf(producto);
//   if (indice !== -1) {
//     carrito.splice(indice, 1);
//     console.log(`Producto "${producto}" eliminado del carrito.`);
//   } else {
//     console.log(`Producto "${producto}" no encontrado en el carrito.`);
//   }
// }

