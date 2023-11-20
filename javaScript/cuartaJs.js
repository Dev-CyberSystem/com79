// Switch
// Sintaxis

// switch (expresion) {
//     case valor1:
//         // Declaraciones ejecutadas cuando el resultado de expresion coincide con el valor1
//         break;
//     case valor2:
//         // Declaraciones ejecutadas cuando el resultado de expresion coincide con el valor2
//         break;
//     case valorN:
//         // Declaraciones ejecutadas cuando el resultado de expresion coincide con valorN
//         break;
//         default:
//         // Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
//         break;
// }

// Ejemplo

// let diaDeLaSemana = prompt("Ingrese un dia de la semana").toUpperCase().trim();

// switch (diaDeLaSemana) {
//   case "LUNES":
//   case "MARTES":
//   case "MIERCOLES":
//     console.log("Es dia laboral");
//     break;
//   default:
//     console.log("No es ningun dia de la semana");
//     break;
// }

// let numero = prompt("Ingrese un numero");

// switch (true) {
//   case numero > 2 && numero < 5:
//     console.log("Es positivo");
//     break;
//   case numero < 0:
//     console.log("Es negativo");
//     break;
//   default:
//     console.log("No es un numero");
//     break;
// }

// let foo = 10;
// let output = "Salida: ";
// switch (foo) {
//   case 10:
//     output += "¿Y ";
//   case 1:
//     output += "Cuál ";
//     output += "Es ";
//   case 2:
//     output += "Tu ";
//   case 3:
//     output += "Nombre";
//   case 4:
//     output += "?";
//     console.log(output);
//     break;
//   case 5:
//     output += "!";
//     console.log(output);
//     break;
//   default:
//     console.log("Por favor, selecciona un valor del 1 al 6.");
// }


// Bucles o ciclos o loops
// For while do while

// for es el mas utilizado. Se utiliza cuando sabemos la cantidad de veces que se va a ejecutar el codigo

// for (inicializacion; condicion; incremento) {
//     // codigo a ejecutar
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// let array = ["hola", "como", "estas", "hoy"];
// let contadorArray = array.length;
// let posicion = array[0]
// console.log(posicion)

// let i = 0;
// for (i ; i < array.length; i++) {
//     console.log(array[i]);
// }  

// while se utiliza cuando no sabemos la cantidad de veces que se va a ejecutar el codigo
//sintaxis 

// while (condicion) {
//     // codigo a ejecutar
//     // incrementador o decrementador
// }

// let i = 5 

// while (i <= 10) {
//     console.log(i);
//     // i++;
// }

// while con decrementador 

//  while (i >= 1) {
//         console.log(i);
//         i--;
//     }

// do while se utiliza cuando no sabemos la cantidad de veces que se va a ejecutar el codigo

// sintaxis

// do {    
//     // codigo a ejecutar
//     // incrementador o decrementador
// } while (condicion);


// let number

// do {
//     number = prompt("Ingrese un numero");
//     
    
// } while (number <= 0);

// Pedir al usuario que adivine un número aleatorio entre 1 y 10 utilizando while.

// let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
// console.log(numeroAleatorio, "numero aleatorio");
// let number;

// while (number !== numeroAleatorio) {
//     number = parseInt(prompt("Ingresa un numero entre 1 y 10"));
//     if(number < numeroAleatorio){
//         console.log("El numero que ingresaste es mas chico")
//     } else if (number > numeroAleatorio){
//         console.log("El numero que ingresaste es mas grande")
//     } else {
//         console.log("Ganaste")
//     }
// }

// Metodos de arrays

// creacion de un array

// let array = ["hola", 2, true, [1, 2, 3], { nombre: "juan" }];

//Encontrar una posicion de un elemento en el array

// console.log(array[0]) // hola
// console.log(array[1]) // 2
// console.log(array[2]) // true
// console.log(array[3]) // [1,2,3]

// Agregar elementos a un array
let numerosAdd = [1, 2, 3];
numerosAdd.push(4);

// agregar elementos al principio del array

numerosAdd.unshift(0);

//agregar un elemento en una posicion especifica

 numerosAdd.splice(2, 1, 5);

// Eliminar elementos de un array

numerosAdd.pop(); // elimina el ultimo elemento del array


// eliminar el primer elemento del array

numerosAdd.shift();

// contar la cantida de elementos de un array
numerosAdd.length;

// console.log(numerosAdd);

// Para encontrar la posicion de un elemento en un array

let numeros2 = [ 7, 8, 9, 9];

let posicion = numeros2.indexOf(9);
console.log(posicion);

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
// 7 Imprimir los números pares del 2 al 20 en la consola.
// 8 Recorrer un string y mostrar en la consola cada letra en mayúsculas.
//9  Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// 10 Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// 11 Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// 12 Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// 13 Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
//14 Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
//15 Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
//16 Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
//17 Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
//18 Dado un array de números, escribir una función que retorne el número más grande del array.
//19 Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
//20 Dado un array de números, escribir una función que retorne la suma de todos los números del array.
//21 Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
//22 Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
//23 Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
//24 Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
//25 Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
//26 Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
//27 Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
//28 Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
//29 Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
//30 Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
