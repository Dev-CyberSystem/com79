//JSON JavaScript Object Notation
// JSON es un acrónimo de "JavaScript Object Notation" y es un formato de intercambio de datos ligero y de texto utilizado comúnmente en aplicaciones web. JSON se utiliza para representar objetos de datos estructurados, como listas, diccionarios, matrices y otros tipos de datos, en una forma que sea fácil de transmitir a través de la red y de procesar en aplicaciones de JavaScript.

//Sintaxis JSON

// {
//     "nombre": "iPhone 7",
//     "precio": 699,
//     "cantidad": 1
// }

// JSON.parse() <---- Convierte un string en un objeto JSON

// const jsonParse = '{"nombre": "iPhone 7", "precio": 699, "cantidad": 1}'

// const objeto = JSON.parse(jsonParse)

// console.log(objeto, "<----- Objeto")

// // stringify() <---- Convierte un objeto JSON en un string

// const string = JSON.stringify(objeto)

// console.log(string, "<----- String")

// Sincronismo y asincronismo

// Sincronismo <---- Es la ejecución de una tarea a la vez. (Una tarea a la vez)

// La sincronía en JavaScript se refiere a la forma en que el código se ejecuta de manera secuencial, es decir, que cada línea de código se ejecuta en orden, una después de la otra. Cuando se ejecuta una línea de código, JavaScript espera a que se complete antes de continuar con la siguiente línea de código.

// console.log("Hola")
// console.log("Estoy al medio")
// console.log("Termine")

// Asincronismo <---- Es la ejecución de varias tareas al mismo tiempo. (Varias tareas a la vez)
// cuando se utiliza código asíncrono en JavaScript, las operaciones no se realizan de manera secuencial, sino que se ejecutan en segundo plano mientras el programa continúa ejecutando otras tareas.

console.log("Inicio");

setTimeout(() => {
  alert("Soy el Timeout");
}, 2000);

console.log("Fin");

// Async Await

const mostrarDatos = document.getElementById("datos");

async function obtenerUsuario() {
  try {
    const respuesta = await fetch('../json/fakeApi.json');
    const data = await respuesta.json();
    const datos = JSON.stringify(data);
    mostrarDatos.textContent = `${datos}`;
    console.log(data, "<----- data");
  } catch (error) {
    console.log(error, "<----- error");
  }
}

