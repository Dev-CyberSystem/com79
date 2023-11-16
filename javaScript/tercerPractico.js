//Tareas
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
// function restar() {
//     let numero1 = parseInt(prompt("Ingrese aqui el primer numero"))
//     let numero2 = parseInt(prompt("Ingrese aqui el segundo numero"))
//     console.log(numero1 - numero2)
// }
// restar()
// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
// function suma() {
//     let numero3 = 5
//     console.log(numero3 + 10)
// }
// suma()

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
// function concatenacion() {
//     let palabra1 = "hola"
//     let palabra2 = " como estas?"
//     console.log(palabra1 + palabra2)
// }
// concatenacion()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
// function comparacion() {
//     let valor1 = true
//     let valor2 = true
//     console.log(valor1 == valor2)
// }
// comparacion()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
// function comparacion2() {
//     let valor3 = true
//     let valor4 = false
//     console.log(valor3 !== valor4)
// }
// comparacion2()

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
// function comparacionNumerica() {
//     let numero4 = 10
//     let numero5 = 15
//     console.log(numero4 > numero5)
// }
// comparacionNumerica()

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
// function contar() {
//     let palabras = 1
//     let texto = prompt("Ingrese aqui una frase")
//     if (texto !== "") {
//         for (let i = 0; i < texto.length; i++) {
//             if (texto[i] === ' ') {
//                 palabras++;
//             }
//         }
//         console.log("La Frase tiene " + palabras + " palabras")
//     }
//     else {
//         console.log("No ingresaste ninguna frase")
//     }
// }
// contar()

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
// function mayorA0() {
//     let numero6 = 0
//     if (numero6 === 0) {
//         console.log("Cero");
//     } else if (numero6 > 0) {
//         console.log("Positivo");
//     } else {
//         console.log("Negativo");
//     }
// }
// mayorA0()

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
// function parImpar() {
//     let numero7 = parseInt(prompt("Ingrese un numero para verificar si es par o impar"))
//     if (numero7 % 2 === 0) {
//         console.log("El numero es par")
//     } else {
//         console.log("El numero es impar")
//     }
// }
// parImpar()

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
// function mayorA0Dos() {
//     let numero8 = parseInt(prompt("Ingrese un numero"));
//     switch (true) {
//         case numero8 > 0:
//             console.log("Es positivo");
//             break;
//         case numero8 < 0:
//             console.log("Es negativo");
//             break;
//         case numero8 === 0:
//             console.log("Cero")
//             break
//         default:
//             console.log("No es un numero");
//             break;
//     }
// }
// mayorA0Dos()

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
// function numeroMayor() {
//     let numero9 = parseInt(prompt("Ingrese un numero"))
//     let numero10 = parseInt(prompt("Ingrese otro numero"))
//     if (numero9 > numero10) {
//         console.log(numero9)
//     } else if (numero9 === numero10) {
//         console.log("Los numeros son iguales");
//     } else {
//         console.log(numero10)
//     }
// }
// numeroMayor()

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
function validarContrasenia () {
    let contrasenia = prompt("Ingrese su contraseña")
    if (contrasenia.length >= 6) {
        console.log('tu contraseña SI cumple con el requisito de longitud');
    }else{
        console.log('tu contraseña NO cumple con el requisito de longitud');
    }
    
}
validarContrasenia()

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
