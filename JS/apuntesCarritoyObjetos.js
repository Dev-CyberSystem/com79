// Otra manera de filtrar y eliminar:

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

// Agregar un botón para eliminar el producto:
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

// Función para filtrar productos por palabra, parte de ella o letra:

// function filtrarProductos(filtro) { // Recibe el filtro ingresado en el input de filtro de productos desde el DOM
//   const productosFiltrados = carrito.filter((producto) => // Filtrar los productos del carrito por el filtro ingresado en el input de filtro de productos desde el DOM
//     producto.toLowerCase().includes(filtro.toLowerCase()) // includes() devuelve true si el producto incluye el filtro ingresado en el input de filtro de productos desde el DOM y false si no lo incluye (no distingue entre mayúsculas y minúsculas)  
//   );

//   return productosFiltrados;
// }

// Función para eliminar un producto del carrito por su nombre:

// function eliminarProducto(producto) {
//   const indice = carrito.indexOf(producto);
//   if (indice !== -1) {
//     carrito.splice(indice, 1);
//     console.log(`Producto "${producto}" eliminado del carrito.`);
//   } else {
//     console.log(`Producto "${producto}" no encontrado en el carrito.`);
//   }
// }

class Animal {
    constructor(nombre, especie, edad) {
        this.nombre = nombre,
        this.especie = especie,
        this.edad  = edad
    }
}

class Perro extends Animal {
    constructor(nombre, especie, edad, sonido) {
       super(nombre, especie, edad) 
       this.nombre = nombre,
       this.especie = especie,
       this.edad  = edad,
       this.sonido = sonido,
       this.juego = function() {
           console.log('Moviendo la cola')
       }
    }
}

class Gato extends Animal {
    constructor(nombre, especie, edad, vidas) {
       super(nombre, especie, edad) 
       this.nombre = nombre,
       this.especie = especie,
       this.edad  = edad,
       this.vidas = vidas,
       this.juego = function() {
              console.log('Comiendo Lasagna')
         }
    }
}

// const perro = new Perro('Tobi', 'Caniche', 5, 'guau')
// const gato = new Gato('Michi', 'Siames', 3, 1)

// console.log(perro, "<----- Perro")
// perro.juego()
// console.log(gato, "<----- Gato")

const animalito = new Animal("Odie", 'caniche', 1)

console.log(animalito, "<----- Animalito")

const perro = new Perro( 'guau')
console.log(perro, "<----- Perro")