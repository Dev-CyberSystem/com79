// • Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

const resultado = 25 + 50;
console.log(resultado); // 75

// • Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.

const num1 = 25;
const num2 = 50;
const comparacion = num1 === num2;
console.log(comparacion); // false

// • Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.

const num3 = 40;
const num4 = 25;
const diferenciador = num3 !== num4;
console.log(diferenciador); // true

// • Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.

let num5 = 25;
num5 += 5;
console.log(num5); //30

// • Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let num6 = 26;
num6 -= 6;
console.log(num6); //20

// • Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.

const saludo = 'hola ';
console.log(saludo + '¿como estas?'); //hola ¿como estas?

// • Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
const saldo = true;
const deuda = false;

function validacion() {
  if (saldo && deuda) {
    return console.log('las dos son true');
  }
  console.log('No pasan validacion porque no todas son true');
}

validacion(); // Una no es verdadera

// • Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.

const saldo1 = true;
const deuda2 = false;

function validacion2() {
  if (saldo1 || deuda2) {
    return console.log('al menos una es true');
  }
  console.log('ninguna es true');
}

validacion2(); // al menos una es true

// • Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.

const num7 = 50;
const num8 = 60;

console.log(num7 > num8); //false

// • Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.

const num9 = 20;
const num10 = 25;
console.log(num9 <= num10); // True

// • Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.

// const ingresarNumero = prompt('ingresa un numero');
// console.log(ingresarNumero);

// • Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.

// const ingresaNombre = prompt('Ingresa tu nombre');
// console.log(ingresaNombre);

// • Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.

let inputNumero1 = prompt('Ingresa el primer número:');
let inputNumero2 = prompt('Ingresa el segundo número:');

let numero1 = parseFloat(inputNumero1);
let numero2 = parseFloat(inputNumero2);

if (!isNaN(numero1) && !isNaN(numero2)) {
  let result = numero1 + numero2;

  document.write('La suma de ' + numero1 + ' y ' + numero2 + ' es: ' + result);
} else {
  document.write('Ingresa números válidos');
}
