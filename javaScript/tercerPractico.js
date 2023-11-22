//Practico Numero 3

// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.

function resta (num1,num2) {
    console.log("Los numeros a restar son 3-4");
    console.log(num1-num2);
}
resta (3,4)

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

function  sumar10 () {
    let num5 = 5;
    console.log(num5 + 10);
}
sumar10();

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

function concatenar() {
    let a = "Hola";
    let b = "Mundo";
    console.log(a + " " + b );
}
concatenar();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

function comparación() {
    let c = true;
    let d = false;
    console.log(c == d);
}
comparación();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

function comparación2() {
    let c = true;
    let d = false;
    console.log(c != d);
}
comparación2();

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

function comparación3() {
    let a = 13;
    let b = 3;
    console.log(a > b);
}
comparación3();

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.

function contar() {

let palabra = prompt("Ingrese una frase: ");

let palabras = palabra.split(" ");
let cantidadDePalabras = palabras.length;

console.log("El numero de palabras es: " + cantidadDePalabras);
}
contar();

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

function comparacion3(num3) {
    if (num3 > 0) {
        console.log("Positivo");
      }      else if (num3 < 0) { 
                console.log("Negativo");
                                 } else {
                                console.log("Cero");
                                         }    
}
comparacion3(4);

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

function comparacion4(num4) {
    if ((num4 % 2)==0) {
        console.log("Es par");
      }      else { 
                console.log("Es impar");
                                 }
}
comparacion4(4);

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.

function comparacion5() {

    let num5= prompt("Ingrese el primer numero: ");

    if ((num5 % 2)==0) {
        console.log("Es par");
      }      else { 
                console.log("Es impar");
                                 }
}
comparacion5();

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

function comparacion6() {
    let num6= prompt("Ingrese el segundo numero: ");
    if (num6 > 0) {
        console.log("Positivo");
      }      else if (num6 < 0) { 
                console.log("Negativo");
                                 } else {
                                console.log("Cero");
                                         }    
}
comparacion6();

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

function comparacion7() {
    let num7 = prompt("Ingrese el primer numero a comparar: ");
    let num8 = prompt("Ingrese el segundo numero a comparar: ");

    if (num7>num8) {
        console.log("El mayor es: " + num7);
    } else {
        console.log("El mayor es: " + num8);
    }
}
comparacion7();

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

/*function validacion() {
let clave = prompt("Ingrese una contraseña: ");
let caractEspecial = /^(?=.*[A-Z])(?=.*[a-z]{2,})(?=.*\d{4,})(?=.*[!@#$%^&*()]).{6,12}$/;
let validar = caractEspecial.test(clave);

if (validar) {
    console.log("Válida");
  } else {
    console.log("Inválida");
  }
}
validacion();*/

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

function notas() {

let nota = prompt("Ingrese una calificación: ");

if (nota >= 70 && nota <= 100) {
    console.log("Está aprobado")
} else {
    console.log("Esta desaprobado");
    }
}
notas();
//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

// Definir la función esPalindromo
function palindromo(cadena) {

    cadena = cadena.toLowerCase().replace(/\s/g, "");

    let cadenaInvertida = cadena.split("").reverse().join("");

    if (cadena === cadenaInvertida) {
      console.log("Es palindromo");
    } else {
      console.log("No es palindromo");
    }
  }
palindromo("Logre ver gol");


// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

function letras() {

let letra = prompt("Ingrese una letra: ");
letra = letra.toLocaleLowerCase();

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log("La letra ingresada es una vocal")
}else {
    console.log("La letra ingresada es una consonante");
    }
}
letras();

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

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
// Imprimir los números pares del 2 al 20 en la consola.
// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// Dado un array de números, escribir una función que retorne el número más grande del array.
// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.