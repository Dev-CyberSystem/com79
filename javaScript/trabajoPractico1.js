// Autor Fernández Cristian

console.log("Mi primer console.log");

let nombre = prompt("ingrese su nombre");

alert("Bienvenido: " + nombre + " a esta pagina");

console.log("Prueba de función");

function multiplicarDosnumeros() {
  let a = prompt("Ingresar el primer número:");
  let b = prompt("Ingresar el segundo número:");

  let multiplicacionSimple = a * b;

  console.log("El resultado de la sumaes: " + multiplicacionSimple);
}
multiplicarDosnumeros();
