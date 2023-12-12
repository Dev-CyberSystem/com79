// Clase de Practica

// 1.- Crear un repo en github.
// 2.- Crear la rama dev.
// 3.- Vamos a tener solo un archivo index.html y un archivo script.js
// 4.- Crear una rama por cada integrante del equipo.
// 5.- Mergeamos las branch a dev.

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

// DOM <Document Object Model>

console.log(document);

// QuerySelector -> Devuelve un elemento
// document.querySelector('h1').textContent = 'Hola Mundo desde el DOM'

// QuerySelectorAll -> Devuelve un NodeList

//  document.querySelectorAll('h1')[1].textContent = 'Hola Mundo desde el DOM2'

//getElementById -> Devuelve un elemento

// let vamosConElID = document.getElementById('soyElH12')
// console.log(vamosConElID)

// getElementsByClassName -> Devuelve un HTMLCollection

let className = document.getElementsByClassName("elementoClass");
// console.log(className)

let queryClase = document.querySelector(".elementoClass");
// console.log(queryClase, "<---- queryClase")

// getElementsByTagName -> Devuelve un HTMLCollection

let p = (document.getElementsByTagName("p")[1].textContent =
  "Mitad de estadio");
// console.log(p)

//  document.getElementsByTagName('p')[2].innerHTML = '<b>Boca sin libertadores</b>'

//Change Style

let change = document.querySelector("h3");
change.style.color = "red";
change.style.fontSize = "50px";

let div = document.querySelector("div");

//Add class
div.classList.add("div1");

let div1 = document.querySelector(".div1");
div1.style.backgroundColor = "green";

//Remove class

div.classList.remove("div1");

//Eventos en js
const boton = document.querySelector("button");

// addEventListener('evento', callback)

boton.addEventListener("click", () => {
  alert("Me hiciste Click");
});

const clicks = () => {
  console.log("no funciona");
  return alert("Me hiciste Click desde un onclick");
};

// Agregar nodos al DOM

// const ul = document.querySelector("ul");
// const variableLi = document.createElement("li");
// variableLi.textContent = "Soy un elemento li"
// ul.appendChild(variableLi)

const lista = document.getElementById("lista");
let arrayProductos = ["Hielo", "Pepsi", "Sprite", "Fanta", "Fernet"];

// arrayProductos.forEach((producto) => {
//   const li = document.createElement("li");
//   li.textContent = producto;
//   lista.appendChild(li);
// });

arrayProductos.forEach( producto => lista.innerHTML += `<li>${producto}</li>`)

// clonar un nodo

const li = document.querySelectorAll("li")[2];
const liClonado = li.cloneNode(true);
lista.appendChild(liClonado);

// Eliminar un nodo
lista.removeChild(liClonado);
