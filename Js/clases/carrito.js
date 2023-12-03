let carrito = [];

const addFormProducts = document.getElementById('formAddProducts');
const addInputProducts = document.getElementById('inputAddProducts');
const addBtnProducts = document.getElementById('buttonAddProducts');
const productList = document.getElementById('productList');


addBtnProducts.addEventListener("click", (event) => {
    event.preventDefault()
    // verificamos que el input tenga una entrada 
    let producto = addInputProducts.value.toLowerCase().trim();
    carrito.push(producto);
    console.log(carrito, "<--- Soy el Carrito");
   // document.getElementById('formAddProductos').reset()
   addFormProducts.reset();
   listarProductos();
});

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
      alert("No hay productos en el carrito");
    }
  }