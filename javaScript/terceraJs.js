//Funciones

function saludo() {
  console.log("Hola desde JavaScript");
}
saludo();

// Funcion con parametros

function suma(num1, num2) {
  console.log(num1 + num2);
}
suma(5, 5);

function restar() {
  console.log("Antes del return");
  return 5;
  console.log("Despues del return");
}

let resultado = restar();
console.log(resultado);

// Funcion con parametros con valores predeterminados

function saludo2(apellido = "Simeone", nombre = "Diego") {
  console.log(`Hola ${nombre} ${apellido}`);
}
saludo2();
saludo2("a", "Lionel");

// funciones anonimas

let funcionAnonima = function () {
  console.log("Hola soy anonima");
};
funcionAnonima();

// funciones flecha o arrow function

let arrowFunction = (nombre, apellido) => {
  console.log("Esta es una funcion de flecha" + nombre + apellido);
};
arrowFunction("Diego", "olmi");

let arrow = (club) => {
  return club;
};
let futbol = arrow("River Plate");
console.log(futbol);

let estadio = (nombre, cancha) => `${cancha} ${nombre}`;

let estad = estadio("Monumental", "Estadio completo");
console.log(estad);

let personita = () => {
  let persona = { nombre: "Julian", apellido: "alvarez" };
  return persona;
};

let newPersona = personita();
console.log(
  "Esto lo sacamos desde el objeto en la funcion",
  newPersona.apellido
);

// Ejercicio

//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.

//Paso a paso.
// 1- Escribir un programa
// 2- Solicitar al usuario el año de nacimiento, parsear el resultado
// 3- Calcular la edad de la persona. restar el año actual con el año de nacimiento.
// 4- Validar si es o no mayor de edad.
// 5- Mostrar la edad en una cadena de texto.

let legalidad = () => {
  let anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
  let anioActual = 2023;
  let edad = anioActual - anioNacimiento;
  let validacion = edad >= 18;

//   if (validacion === true) {
//     alert(`Usted tiene ${edad} años y es mayor de edad`);
//   } else {
//     alert(`Usted tiene ${edad} años y es menor de edad`);
//   }

validacion ? alert(`Usted tiene ${edad} años y es mayor de edad`) : alert(`Usted tiene ${edad} años y es menor de edad`);

};
// legalidad();

// Condicionales en estructura de control

// if, else if ,else

// if(){ // siempre que sea true
//     // accionable
// } else {
//     //accionable
// }

if (15 > 18) {
  //true
  console.log("true");
} else if (15 != 15) {
  console.log("Es igual");
} else {
  console.log("false");
}

//Math 

// Encontrar el valor absoluto.
let numero1 = -12
let valorAbsoluto = Math.abs(numero1)
// console.log(valorAbsoluto)

let numeros = [1,5,8,9,10,7]
let numMax = Math.max(...numeros)
let numMin = Math.min(...numeros)
console.log("numero maximo", numMin)

//redonde 

let decimales = 9.1218
let redondeo = Math.round(decimales)

console.log(redondeo)

//Floor
let numero3 = 5.3
let floor = Math.floor(numero3)
let ceil = Math.ceil(numero3)
console.log(ceil)

//truncar
let numero4 = 3.99
let truncar = Math.trunc(numero4)
console.log(truncar)

//random

let numeroAleatorio = Math.random()
console.log(numeroAleatorio)

// Ejercicio

// let tragamonedas = Math.floor(Math.random() * 10) + 1
// console.log("Tragamonedas" + " " + tragamonedas)

let numerosAleatorios = () => {
    return Math.floor(Math.random() * 7) + 1
}

let girarTragaMonedas = () => {

    let numero1 = numerosAleatorios()
    let numero2 = numerosAleatorios()

    let resultadosTragaMonedas = document.getElementById("resultado")
    resultadosTragaMonedas.textContent = `Resultado ${numero1} - ${numero2}`

    console.log(`${numero1} - ${numero2}`)
}


//Tareas
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
