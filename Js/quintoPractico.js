let arrayCarrito = [];

const newProduct = document.getElementById("productInput");
const carrito = document.getElementById("listaCarrito");
let inputSearch = document.getElementById("inputSearchProducts");
let searchList = document.getElementById("searchList");

function addProduct() {
  let producto = newProduct.value.trim().toLowerCase()
    if (producto !== "") {
      let productList = document.createElement("li");
      arrayCarrito.push = producto
      productList.textContent = producto;
      // botón para eliminar
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.onclick = function () {
        eliminarElemento(productList);
      };
      // termina boton para eliminar
      productList.appendChild(deleteButton);
      carrito.appendChild(productList);
      document.getElementById("productInput").value= ""
    } else {
      alert("Ingrese un producto válido");
    }
  }
  function eliminarElemento(productToDelete) {
    let carrito = document.getElementById("listaCarrito");
    carrito.removeChild(productToDelete);
  }

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
  function buscarProductoEnCarrito(productToSearch) {
    console.log(productToSearch, "<--- Soy el producto a buscar");
    return arrayCarrito.indexOf(productToSearch);
  }