let carrito = [];

const addFormProducts = document.getElementById("formAddProducts");
const addInputProducts = document.getElementById("inputAddProducts");
const addBtnProducts = document.getElementById("buttonAddProducts");
const productList = document.getElementById("productList");
let inputSearch = document.getElementById("inputSearchProducts");
let searchList = document.getElementById("searchList");
let filterInput = document.getElementById("inputFilterProducts");
let listaDeFiltrados = document.getElementById("filterList")
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

//Filtrar Productos

function filtrarProductos() {
  const filtro = filterInput.value.toLowerCase().trim();
  const filtrado = filtroProducto(filtro);
  //aca la vacia para que muestre la coincidencia actual
  listaDeFiltrados.innerHTML=""
  //para mostrar los productos filtrados por pantalla verificamos que hayan y en ese caso lo recorremos al array que tiene los filtrados y los agregamos como elementos de la lista y sino mostramos que no hay coincidencia.
if(filtrado.length>0){
  filtrado.forEach(p => {
  const li = document.createElement("li");
  const boton = document.createElement("button")
  boton.classList.add("boton")
  boton.textContent='eliminar'
  li.textContent=`El/los producto/s filtrados son ${p}` 
  listaDeFiltrados.appendChild(li)
  listaDeFiltrados.appendChild(boton)
 
  
  boton.addEventListener("click",(event)=>{
    event.preventDefault();
    li.remove();
    boton.remove()
  })
})
}else{
  listaDeFiltrados.textContent="No hay coincidencias"
  console.log("No hay coincidencias")
  }
 
}
function filtroProducto(filtro) {
  const productosFiltrados = carrito.filter( producto =>
    producto.includes(filtro)
  );
  return productosFiltrados;
}

