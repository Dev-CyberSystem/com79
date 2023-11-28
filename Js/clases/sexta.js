/*document model
Document Object Model, la interfaz utiliza la estructura de árbol antes mencionada, que hace posible organizar los objetos renderizados en consecuencia.

La estructura precisa de un dom tree siempre dependerá del documento HTML o XML subyacente. En el primer tipo de documento, se respeta la jerarquía básica en todo el proyecto:
El objetivo del Document Object Model es facilitar al máximo a los programadores el acceso a los componentes de un proyecto web para que puedan añadir, eliminar o editar contenido, atributos y estilos. DOM sirve como un enlace de lenguaje neutro e independiente de la plataforma entre lenguajes de programación como JavaScript y el documento web subyacente mediante la representación del documento en una estructura de árbol en la que cada nodo es un objeto independiente y controlable.
*/

console.log(document)

//query Selector
document.querySelector('h1').textContent = 'hola mundo desde el DOM'

//console.log(query)
//querySelectorAll  -> devuelve una coleccion de nodos
// Tengo que pasarle el nodo que será afectado por el selectorAll
let all = document.querySelectorAll('h1')[1].textContent = 'Hola mundo desde el DOM2'
//console.log(all)
//devuelde el elemento que tiene ese id
let vamosConELID = document.getElementById('soyElH13')
console.log(vamosConELID)

//getElementByClass --> Devuelve un HTMLCollection
//pasa la coleccion de elementos con ese nombre
let className = document.getElementsByClassName('elementoClass')
console.log(className)
//buscara el primero elemento que se encuentre con ese nombre
let queryClase = document.querySelector('.elementoClass')
console.log(queryClase,"<--queryClase")

//getElementsByTagName -> Devuelve un HTMLCollection
//let tag =document.getElementsByTagName('p')
let tag =document.getElementsByTagName('p')[1].textContent = 'Mitad del estadio'
console.log(tag)

document.getElementsByTagName('p')[2].innerHTML = '<b> Boca sin libertadores </b>'

//Change style

const cambio = document.querySelector('h3')
cambio.style.color = 'blue'
cambio.style.fontSize = '50px'

let div =document.querySelector('div')
//Add class
div.classList.add('div1')

let div1 = document.querySelector('.div1')
div1.style.backgroundColor = 'green'

//remove class
div.classList.remove('div1')

//Eventos en js

const boton = document.querySelector('button')
// addEventListener('evento',callback)

boton.addEventListener('click', ()=>{alert('Me hiciste click')});

const click2 = () => {
    alert(`Me hiciste un click 2`)
}

// Agregar nodos al DOM

/*
const ul = document.querySelector("ul");
const variableLi = document.createElement("li");
variableLi.textContent = "soy un elemento li"
ul.appendChild(variableLi)*/
/*
const lista = document.getElementById("lista");
const vli = document.createElement("li")
lista.appendChild(vli);*/

const lista = document.getElementById("lista");
const arrayProductos = ["Coca", "Pepsi", "Sprite", "Fanta", "Manaos"]

//arrayProductos.forEach((prod) => { const li = document.createElement("li"); li.textContent = prod; lista.appendChild(li)});
// cuando tiene un parametro el forEach  no hace falta poner el parentise
arrayProductos.forEach( prodt => {lista.innerHTML += `<li>${prodt}</li>`})
//click2()

//clonar un nodo

const li = document.querySelector("li");
const liClonado = li.cloneNode(true);

lista.appendChild(liClonado);
//const lista2 = document.getElementById("lista");

//eliminar un nodo
//lista.removeChild(liClonado);