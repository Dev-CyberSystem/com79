let miCadena = "georgina"
console.log(miCadena[miCadena.length-2])

let alumnos = ["geor","sabi","lolo"]
let notas = [6, 7, 8]

console.log(alumnos + notas)

let primos = [["sabi", 8],["loli", 7],["geor", 32]]
console.log(primos)

function proximoEnLaFila (arreglo, elemento){
    arreglo.push(elemento)
    return arreglo.shift()
}

let miArreglo = [1,2,3,4,5]

console.log("Antes: " + JSON.stringify(miArreglo))

console.log(proximoEnLaFila(miArreglo,6)) //llamo a la función

console.log("Después: " + JSON.stringify(miArreglo))

function valorFuncion (valorNum){
    if (valorNum % 3 === 0 && valorNum % 5 === 0){
        console.log("FizzBuzz")
    }else if(valorNum % 5 == 0){
        console.log("Buzz")
    } else if (valorNum % 3 == 0){
        console.log("Fizz")
    }else{
        console.log(`${valorNum} este valor ingresado, no es divisible por 3 y/o 5`)
    }
}valorFuncion(30)

//crear objetos

let perro = {
    "nombre":"theo",
    "edad": 12,
    "peso": 20,
    "raza": "callejerito",
    caracteristicas_theo: ["lindo", "inteligente", "perfecto"]
}

console.log(perro.nombre)

perro.nombre = "theodoro" // le cambio el valor de una propiedad del objeto perro

perro.caracteristicas_theo.push("peludo") //agrega un elemento al final del array - pop remueve el último elemento del array
perro.caracteristicas_theo.unshift("hermoso") // agrega un elemento al principio del array y shift quita un elemento al principio del array.

console.log(perro.caracteristicas_theo[0])

/*------------------------------------------------------*/

// Trabajo en equipo
// Carrito de productos 
// Carrito de compras con Array
// ■ Crear una aplicación de carrito de compras donde se ingresen
// productos como elementos en un array.
// ■ las tareas que debe hacer son las siguientes:
// ● Agregar producto al carrito
// ● Listar los productos del carrito
// ● Buscar un producto en el carrito
// ● Filtrar productos que coincidan con una palabra, parte de ella
// o una letra
// ● Eliminar producto del carrito


/* crea un arrar de compras */

let carritoCompras = ["manzana","pera","anana","frutilla"];
console.log(carritoCompras);

/* Agregar producto al carrito con funciones */
function agregarProducto(producto){
    let resultado = carritoCompras.push(producto);
    return resultado;
}
agregarProducto("uva"); 
console.log("Agregamos Uva", carritoCompras)

/*borrar producto*/
function borrarProducto(){
    delete carritoCompras [3]
    console.log(carritoCompras)
}borrarProducto()


/* Funcion listar carrito */
function listarProductos(){
    console.log("Productos en el carrito:");
    for(let i = 0; i < carritoCompras.length; i++) {
        console.log(i, "-", carritoCompras[i]);
    }
}listarProductos()

//Buscar un producto en el carrito 

let nombreABuscar = 'uva';
let indice = carritoCompras.indexOf(nombreABuscar);


if (indice !== -1) {
  console.log('El producto encontrado es:', nombreABuscar);
} else {
  console.log('No encontrado', nombreABuscar);
}


const filtrarProductos = (palabraClave) => {
    const resultado = carritoCompras.filter(producto =>
      producto.includes(palabraClave.toLowerCase())
    );
    return resultado;
}

const resultadoFiltrado = filtrarProductos("man");
console.log("El producto filtrado es:", resultadoFiltrado);

