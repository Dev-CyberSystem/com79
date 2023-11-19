// // 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

// let numeroMes = parseInt(prompt("Digite un numero de mes"))

// saberMes(numeroMes);

// function saberMes(numeroMes) {

//     switch (numeroMes) {
//         case 1:
//             console.log("Usted ha ingresado 1 y Corresponde al mes de ENERO")
//             break;
//         case 2:
//             console.log("Usted ha ingresado 2 y Corresponde al mes de FEBRERO")
//             break;
//         case 3:
//             console.log("Usted ha ingresado 3 y Corresponde al mes de MARZO")
//             break;
//         case 4:
//             console.log("Usted ha ingresado 4 y Corresponde al mes de ABRIL")
//             break;
//         case 5:
//             console.log("Usted ha ingresado 5 y Corresponde al mes de MAYO")
//             break;
//         case 6:
//             console.log("Usted ha ingresado 6 y Corresponde al mes de JUNIO")
//             break;
//         case 7:
//             console.log("Usted ha ingresado 7 y Corresponde al mes de JULIO")
//             break;
//         case 8:
//             console.log("Usted ha ingresado 8 y Corresponde al mes de AGOSTO")
//             break;
//         case 9:
//             console.log("Usted ha ingresado 9 y Corresponde al mes de SEPTIEMBRE")
//             break;
//         case 10:
//             console.log("Usted ha ingresado 10 y Corresponde al mes de OCTUBRE")
//             break;
//         case 11:
//             console.log("Usted ha ingresado 11 y Corresponde al mes de NOVIEMBRE")
//             break;
//         case 12:
//             console.log("Usted ha ingresado 12 y Corresponde al mes de DICIEMBRE")
//             break;

//         default:
//             console.log("Usted ha ingresado un numero que no corresponde a ningun mes")
//             break;

//     }

// }

// // 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.

// let numeroDia = parseInt(prompt("Digite un numero de dia"))

// saberDia(numeroDia);

// function saberDia(numeroDia) {

//     switch (numeroDia) {
//         case 1:
//             console.log("Usted ha ingresado 1 y Corresponde al dia LUNES")
//             break;
//         case 2:
//             console.log("Usted ha ingresado 2 y Corresponde al dia MARTES")
//             break;
//         case 3:
//             console.log("Usted ha ingresado 3 y Corresponde al dia MIERCOLES")
//             break;
//         case 4:
//             console.log("Usted ha ingresado 4 y Corresponde al dia JUEVES")
//             break;
//         case 5:
//             console.log("Usted ha ingresado 5 y Corresponde al dia VIERNES")
//             break;
//         case 6:
//             console.log("Usted ha ingresado 6 y Corresponde al dia SABADO")
//             break;
//         case 7:
//             console.log("Usted ha ingresado 7 y Corresponde al dia DOMINGO")
//             break;
//         default:
//             console.log("Usted digito un numero que no corresponde")
//             break;

//     }
// }

// // Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.

// let arrayDias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

// let i = parseInt(prompt("Digite un numero del 1 al 5"))

// console.log(`El numero que usted digito es: [${i}] y corresponde al dia: ${arrayDias[i - 1]}`)

// console.log(`El array completo es: [${arrayDias}]`)


// // Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

// let nota = parseInt(prompt("Digite la nota del alumno"))

// if (nota >= 0 && nota <= 4) {
//     console.log(`La nota del alumno es: [${nota} y corresponde a SUSPENSO]`)
// } else if (nota >= 5 && nota < 7) {
//     console.log(`La nota del alumno es: [${nota} y corresponde a APROBADO]`)
// } else if (nota == 7) {
//     console.log(`La nota del alumno es: [${nota} y corresponde a NOTABLE]`)
// } else if (nota >= 8) {
//     console.log(`La nota del alumno es: [${nota} y corresponde a SOBRESALIENTE]`)
// }


// // Imprimir los números pares del 2 al 20 en la consola.

// // No me funciona, no entiendo por que :(

// for (let i = 2; i <= 20; i++) {

//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }


// // Recorrer un string y mostrar en la consola cada letra en mayúsculas.

// let miCadena = String(prompt("Digita tu cadena"));

// console.log(miCadena.toUpperCase())



// // Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.

// let arrayNum = [];

// let n = parseInt(prompt("Digita la cantidad de elementos del array"))


// for (let i = 0; i < n; i++) {
//     parseInt(arrayNum.push(prompt(`Digita el elemento [${i + 1}] del array`)))
// }

// console.log(`El array completo es: ${arrayNum}`)


// console.log(`El elemento mas grande del array es: [${Math.max(...arrayNum)}]`)


// // Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.

// let arrayNumPar = [];
// let sumaPares = parseInt(0);

// let n1 = parseInt(prompt("Digita la cantidad de elementos del array"))

// for (let i = 0; i < n1; i++) {
//     parseInt(arrayNumPar.push(prompt(`Digita el elemento [${i + 1}] del array`)))
// }

// console.log(`El array completo es: ${arrayNumPar}`)

// for (let i = 0; i < n1; i++) {
//     if (arrayNumPar[i] % 2 == 0) {
//         console.log(`El numero [${arrayNumPar[i]}] es par y se agregara a la suma total`)
//         sumaPares = Number(sumaPares) + Number(arrayNumPar[i]);
//     }
// }

// console.log(`La suma de numeros pares del array es: ${sumaPares}`)


// // Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.

// let arrayNumNegativo = [];
// let contadorNegativos = parseInt(0);

// let n2 = parseInt(prompt("Digita la cantidad de elementos del array"))

// for (let i = 0; i < n2; i++) {
//     parseInt(arrayNumNegativo.push(prompt(`Digita el elemento [${i + 1}] del array`)))
// }

// console.log(`El array completo es: ${arrayNumNegativo}`)

// for (let i = 0; i < n2; i++) {
//     if (arrayNumNegativo[i] <= 0) {
//         console.log(`El numero [${arrayNumNegativo[i]}] es negativo`)
//         Number(contadorNegativos++);
//     }
// }

// console.log(`La cantidad de numeros negativos es: ${contadorNegativos}`)


// // Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.

// let topeNumero = parseInt(prompt("Digita un numero"))
// // let arrayImpares = [];

// for (let i = 1; i <= topeNumero; i++) {
//     if (i % 2 != 0) {
//         console.log(i)
//     }
// }



// // Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.

// let arrayMasPeque = [];

// let n3 = parseInt(prompt("Digita la cantidad de elementos del array"))


// for (let i = 0; i < n3; i++) {
//     parseInt(arrayMasPeque.push(prompt(`Digita el elemento [${i + 1}] del array`)))
// }

// console.log(`El array completo es: ${arrayMasPeque}`)


// console.log(`El elemento minimo del array es: [${Math.min(...arrayMasPeque)}]`)


// // Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.

// let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// let intentos = 0;

// let numeroUsuario = parseInt(prompt("Adivina el número entre 1 y 100:"));

// console.log("numeroUsuario", numeroUsuario)
// console.log("numeroAleatorio", numeroAleatorio)


// while (numeroUsuario) {

//     intentos++;

//     if (numeroUsuario === numeroAleatorio) {
//         console.log("¡Felicidades! Adivinaste el número.");
//         console.log("Número aleatorio: " + numeroAleatorio);
//         console.log("Intentos: " + intentos);
//         break;
//     } else {
//         if (numeroUsuario > numeroAleatorio) {
//             console.log("Intenta con un número más bajo.");
//             numeroUsuario = parseInt(prompt("Intenta con un número más bajo:"));

//         } else {
//             console.log("Intenta con un número más alto.");
//             numeroUsuario = parseInt(prompt("Intenta con un número más alto:"));
//         }
//     }
// }



// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.


// let arrayNum1 = [];
// let nParaNum1 = parseInt(prompt("Digita la cantidad de elementos del array"))

// for (let i = 0; i < nParaNum1; i++) {
//     parseInt(arrayNum1.push(prompt(`Digita el elemento [${i + 1}] del array`)))
// }

// console.log(`El primer array es: ${arrayNum1}`)

// averiguarPar(arrayNum1);

// function averiguarPar (array) {
//     let resultadoPares = array.filter((par) => par %2 == 0)
//     console.log(`El array con los numeros pares es: [${resultadoPares}]`)
// }


// Dado un array de números, escribir una función que retorne la suma de todos los números del array.

// let totalSumaArray = 0
// arrayASumar = [1, 2, 3, 4, 5];
// for (let i = 0; i < arrayASumar.length; i++) {
//     totalSumaArray += arrayASumar[i];

// }
// console.log(totalSumaArray);

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.

// let arrayOriginal = ["hola", "mundo", "javascript"];
// let arrayEnMayusculas = convertirAMayusculas(arrayOriginal);

// function convertirAMayusculas(arrayDeStrings) {

//     let arrayMayusculas = arrayDeStrings.map(function (str) {
//         return str.toUpperCase();
//     });

//     return arrayMayusculas;
// }

// console.log(arrayOriginal);
// console.log(arrayEnMayusculas);


// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.

// let arrayOriginal2 = [1, 5, 10, 15, 20];
// let numeroX = 10;
// let arrayMayoresQueX = filtrarNumerosMayoresQueX(arrayOriginal, numeroX);


// function filtrarNumerosMayoresQueX(arrayDeNumeros, X) {
//     let arrayMayoresQueX = arrayDeNumeros.filter(function(numero) {
//         return numero > X;
//     });

//     return arrayMayoresQueX;
// }

// console.log(arrayMayoresQueX);

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".

// let totalSumaArray2 = 0
// let arrayASumar2 = [1, 2, 3, 4, 5, 10, 20,3];
// let arrayGrandes = [];

// for (let i = 0; i < arrayASumar2.length; i++) {
//     totalSumaArray2 += arrayASumar2[i];
// }

// console.log(totalSumaArray2);

// arrayGrandes = arrayASumar2.filter((res) => res>=10 )

// console.log(`[${arrayGrandes}]`)

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.

// let arrayString = []
// let nuevoArrayString = []
// let n4 = parseInt(prompt("Digita la cantidad de Strings de tu array"))

// for (let i = 0; i<n4 ; i++){
// String(arrayString.push(prompt(`Digita el string [${i+1}] de tu array`)));
// }

// console.log(arrayString)

// nuevoArrayString = arrayString.filter((res) => res.length>String(5))

// console.log(`[${nuevoArrayString}]`)

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".

// let arrayString2 = []
// let nuevoArrayString2 = []
// let n5 = parseInt(prompt("Digita la cantidad de Strings de tu array"))

// for (let i = 0; i<n5 ; i++){
//      String(arrayString2.push(prompt(`Digita el string [${i+1}] de tu array`)));
// }

//  console.log(arrayString2)

//  nuevoArrayString2 = arrayString2.filter((res) => (res.length>String(5) && res.charAt(0).toLowerCase()=== 'a' ))

//  console.log(`[${nuevoArrayString2}]`)

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.

// let arrayNumeros = []
// let nNumeros = parseInt(prompt("Digita la cantidad de numeros de tu array"))
// let numeroX = parseInt(prompt("Digita el numero X"))
// let arrayNumerosNuevo = [];

// for(let i = 0; i<nNumeros; i++){
//     parseInt(arrayNumeros.push(prompt(`Digita el elemento [${i+1}] de tu array`)))
// }

// console.log(arrayNumeros)


// for(i=0;i<=3;i++){
//     arrayNumerosNuevo = arrayNumeros.filter((res) => res>numeroX)
// }

// console.log(arrayNumerosNuevo)


// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.

// let arrayOriginal3 = []
// let n6 = parseInt(prompt("Digita la cantidad de elementos de tu array"))

// for(let i = 0; i<n6 ; i++){
//     parseInt(arrayOriginal3.push(prompt(`Digita el elemento [${i+1}] de tu array`)))
// }

// function sumarUno(array) {

//     let resultado = array.map(function (numero) {
//         return Number(numero) + Number(1);
//     });

//     return resultado;
// }



// let arraySumado = sumarUno(arrayOriginal3);

// console.log(arrayOriginal3)
// console.log(arraySumado);


// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.

// function eliminarUlt(array) {

//     if (array.length < 2) {
//       console.error("El array debe tener al menos dos elementos.");
//       return null;
//     }


//      let resultado = arrayOriginal7.pop();
//      console.log(arrayOriginal7)

//      return resultado;
//   }

//   let arrayOriginal7 = [1, 2, 3, 4, 5];
//   let arrayModificado8 = eliminarUlt(arrayOriginal7);

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.

// function eliminarPrimeroYUlt(array) {

//     if (array.length < 2) {
//       console.error("El array debe tener al menos dos elementos.");
//       return null;
//     }


//     let resultado = array.slice(1, -1);

//     return resultado;
//   }

//   let arrayOriginal3 = [1, 2, 3, 4, 5];
//   let arrayModificado4 = eliminarPrimeroYUlt(arrayOriginal3);

//   console.log(arrayModificado4);


// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.

// function eliminarPosicion(array, posicion) {
//     if (posicion < 0 || posicion >= array.length) {
//       console.error("La posición proporcionada no es válida.");
//       return null;
//     }
  
//     let resultado = array.filter(function (_, index) {
//       return index !== posicion;
//     });
  
//     return resultado;
//   }
  

//   let arrayOriginal = [1, 2, 3, 4, 5];
//   let posicionX = 2;
  
//   let arrayModificado = eliminarPosicion(arrayOriginal, posicionX);
  
//   console.log(arrayModificado);
  

