let arrayCarrito = [];

const newProduct = document.getElementById("productInput");
const carrito = document.getElementById("listaCarrito");
const inputSearch = document.getElementById("inputSearchProducts");
const searchList = document.getElementById("searchList");
const filterInput = document.getElementById("inputFilterProducts");
const filterText= document.getElementById("filterList")

function addProduct() {
  let producto = newProduct.value.trim().toLowerCase()
    if (producto !== "") {
      let productList = document.createElement("li");
      arrayCarrito.push(producto)
      productList.textContent = producto;
      productList.setAttribute("class","list-group-item")
      // botón para eliminar
      let deleteButton = document.createElement("button");
      let iconTrash = document.createElement("i")
      iconTrash.setAttribute("class", "bi bi-trash3")
      deleteButton.setAttribute("class", "btn btn-outline-danger position-absolute end-0 translate-middle-y mt-2 pt-1")
      deleteButton.onclick = function () {
        eliminarElemento(productList);
      };
      // termina boton para eliminar
      deleteButton.append(iconTrash);
      productList.appendChild(deleteButton);
      carrito.appendChild(productList);
      document.getElementById("productInput").value= ""
    } else {
      alert("Ingrese un producto válido");
    }
  }
  function eliminarElemento(productToDelete) {
    let carrito = document.getElementById("listaCarrito");
    let filterText= document.getElementById("filterList");
    carrito.removeChild(productToDelete);
    filterText.removeChild(productToDelete);
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

  function filterProduct() {
    const filtro = filterInput.value.toLowerCase().trim();
  
    const filtrado = filtroProducto(filtro);
    filtrado.forEach((producto) => {
    if (producto !== ""){
      let listado= document.createElement("li")
      listado.textContent = producto
    
      filterText.appendChild(listado)
      }
    })
  
    console.log(filtrado, "productos filtrados");
  }
  function filtroProducto(filtro) {
    const productosFiltrados = arrayCarrito.filter((producto) =>
      producto.includes(filtro)
    );
    return productosFiltrados;
  }