//Clase de practica

//1.- Crear un repo en github
//2.- Crear la rama dev
//3.- Crear una rama por cada integrante del equipo
//4.- Vamos a tener solo un archivo index.html y un archivo script.js
//5.-Mergeamos las branch a dev

//Trabajo en equipo
//Carrito de productos
//Carrito de compras con Array
//Crear una aplicacion de carrito de compras donde se ingresen
//productos como elementos en un array
//las tareas que debe hacer son las siguientes:
//Agregar producto al carrito
//Listar los productos del carrito
//Buscar un producto en el carrito
//Filtrar productos que coincidan con una palabra, parte de ella 
//una letra
//Eliminar producto del carrito

//Lunes 5 de febrero PROYECTO JS

const productos = ['television', 'celular', 'tablet', 'reloj'];
let carrito = [];

const ingresarProductos = (productos) => {
  productos.forEach((producto) => carrito.push(producto));

  console.log(carrito);
  listarProductos(carrito);
};

const listarProductos = (carrito) => {
  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
  }
};

//const buscarProducto = ()=> {
    
  //  const nuevoCarrito = carrito.map((producto)=>  )
//}

ingresarProductos(productos)