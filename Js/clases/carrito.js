let carrito = [];

const addFormProducts = document.getElementById('formAddProducts');
const addInputProducts = document.getElementById('inputAddProducts');
const addBtnProducts = document.getElementById('buttonAddProducts');
const productList = document.getElementById('productList');
let inputBuscar = document.getElementById('inputBuscarProducts');
let buscarList = document.getElementById('searchList');
let filtroinput = document.getElementById('inputFilterProducts');
let filtroList = document.getElementById('filterList')

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

  function buscarProductos()
  {
        let productBuscr = inputBuscar.value.toLowerCase().trim();
        let indice = buscarEnElCarrito(productBuscr);
        if(indice !== -1)
        {
            buscarList.textContent = `El producto ${productBuscr} - esta en la posición ${indice + 1} del carrito`;
        }
        else
        {
            buscarList.textContent = `El producto ${productBuscr} - no esta en el carrito`;

        }
  }

  const buscarEnElCarrito = (producto) => {
    console.log(producto, "<--- Soy el producto a buscar");
    return carrito.indexOf(producto);
  };

  const filtrarProducts = () =>
  {
    const  filtroP = filtroinput.value.toLowerCase().trim();
    const filtradoP = filtroProd(filtroP)
    console.log(filtradoP, "productos filtrados");
   if(carrito.length !== 0)
   {
     filtroList.textContent = `El producto es ${ filtradoP} `
   }
   else{
     filtroList.textContent = `El producto ${filtradoP} no se encuentra registrado`
   }
  };

 function filtroProd(filtroP) 
  {
   const filtradoDeProductos = carrito.filter((producto) => producto.includes(filtroP));
   return filtradoDeProductos;
  };