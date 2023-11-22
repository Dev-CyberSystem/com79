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
function obtenerNombreMes(numero) {
    let nombreMes;

    switch (numero) {
        case 1:
            nombreMes = "Enero";
            break;
        case 2:
            nombreMes = "Febrero";
            break;
        case 3:
            nombreMes = "Marzo";
            break;
        case 4:
            nombreMes = "Abril";
            break;
        case 5:
            nombreMes = "Mayo";
            break;
        case 6:
            nombreMes = "Junio";
            break;
        case 7:
            nombreMes = "Julio";
            break;
        case 8:
            nombreMes = "Agosto";
            break;
        case 9:
            nombreMes = "Septiembre";
            break;
        case 10:
            nombreMes = "Octubre";
            break;
        case 11:
            nombreMes = "Noviembre";
            break;
        case 12:
            nombreMes = "Diciembre";
            break;
        default:
            nombreMes = "Por favor, ingrese un número válido del 1 al 12.";
    }

    return nombreMes;
}


let numeroMes = prompt("Ingrese un número del 1 al 12:");


numeroMes = parseInt(numeroMes);


let nombreMes = obtenerNombreMes(numeroMes);
console.log("El nombre del mes correspondiente al número " + numeroMes + " es: " + nombreMes);

// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
function obtenerDiaSemana(numero) {
    let diaSemana;

    switch (numero) {
        case 1:
            diaSemana = "Domingo";
            break;
        case 2:
            diaSemana = "Lunes";
            break;
        case 3:
            diaSemana = "Martes";
            break;
        case 4:
            diaSemana = "Miércoles";
            break;
        case 5:
            diaSemana = "Jueves";
            break;
        case 6:
            diaSemana = "Viernes";
            break;
        case 7:
            diaSemana = "Sábado";
            break;
        default:
            diaSemana = "Por favor, ingrese un número válido del 1 al 7.";
    }

    return diaSemana;
}

let numeroDia0= prompt("Ingrese un número del 1 al 7:");

numeroDia = parseInt(numeroDia0);

let diaSemana = obtenerDiaSemana(numeroDia);
console.log("El día de la semana correspondiente al número " + numeroDia + " es: " + diaSemana);

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
function determinarTipoCaracter(caracter) {
    caracter = caracter.toLowerCase();

    if (caracter.length === 1) {
        if ("aeiou".indexOf(caracter) !== -1) {
            return "Es una vocal.";
        } else {
            return "Es una consonante.";
        }
    } else {
        return "Por favor, ingrese solo un carácter.";
    }
}
let inputCaracter = prompt("Ingrese un carácter:");
let resultado = determinarTipoCaracter(inputCaracter);
console.log("El carácter ingresado '" + inputCaracter + "' es: " + resultado);

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
function obtenerNombreDia(numero) {
    let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    if (numero >= 1 && numero <= 5) {
        var nombreDia = diasSemana[numero - 1];
        return nombreDia;
    } else {
        return "Por favor, ingrese un número válido del 1 al 5.";
    }
}
let numeroDia = prompt("Ingrese un número del 1 al 5:");
numeroDia = parseInt(numeroDia);
let nombreDia = obtenerNombreDia(numeroDia);
console.log("El nombre del día de la semana correspondiente al número " + numeroDia + " es: " + nombreDia);

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
function determinarTipoLetra(letra) {
    if (letra.length === 1) {
        // Verificar si la letra es mayúscula o minúscula
        if (letra >= 'A' && letra <= 'Z') {
            return "Es una letra mayúscula.";
        } else if (letra >= 'a' && letra <= 'z') {
            return "Es una letra minúscula.";
        } else {
            return "No es una letra válida.";
        }
    } else {
        return "Por favor, ingrese solo una letra.";
    }
}

// Solicitar al usuario ingresar una letra
let inputLetra = prompt("Ingrese una letra:");

// Obtener y mostrar el tipo de letra (mayúscula o minúscula)
const resultado1 = determinarTipoLetra(inputLetra);
console.log("La letra ingresada '" + inputLetra + "' es: " + resultado1);


// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
function obtenerCalificacion(nota) {
    if (nota >= 0 && nota <= 10) {
        if (nota < 5) {
            return "Suspenso";
        } else if (nota < 7) {
            return "Aprobado";
        } else if (nota < 9) {
            return "Notable";
        } else {
            return "Sobresaliente";
        }
    } else {
        return "Por favor, ingrese una nota válida del 0 al 10.";
    }
}

let inputNota = prompt("Ingrese una nota del 0 al 10:");

let nota = parseFloat(inputNota);

let calificacion = obtenerCalificacion(nota);
console.log("La calificación correspondiente a la nota " + nota + " es: " + calificacion);


// Imprimir los números pares del 2 al 20 en la consola.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
let miString = "hola";

for (let i = 0; i < miString.length; i++) {
    let letraMayuscula = miString[i].toUpperCase();
    console.log(letraMayuscula);
}

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
function mostrando (){
     const num3 = prompt("Ingrese un numero")
    for(i=1;i<=num3;i++){
    console.log(i)}}
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
let inputNumeros = prompt("Ingrese una serie de números separados por coma:");
let numeros = inputNumeros.split(",").map(Number);
let numeroMasGrande = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMasGrande) {
        numeroMasGrande = numeros[i];
    }
}
console.log("El número más grande de la serie es: " + numeroMasGrande);

// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
let inputPalabra = prompt("Ingrese una palabra:");
let palabra = inputPalabra.toLowerCase().replace(/\s/g, '');
let palabraInvertida = palabra.split('').reverse().join('');
if (palabra === palabraInvertida) {
    console.log("La palabra '" + inputPalabra + "' es un palíndromo.");
} else {
    console.log("La palabra '" + inputPalabra + "' no es un palíndromo.");
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// Solicitar al usuario ingresar una serie de números separados por coma
let inputNumeros2 = prompt("Ingrese una serie de números separados por coma:");
let numeros3 = inputNumeros2.split(",").map(Number);
let sumaPares = 0;
for (let i = 0; i < numeros3.length; i++) {
    if (numeros[i] % 2 === 0) {
        sumaPares += numeros[i];
    }
}
console.log("La suma de los números pares es: " + sumaPares);

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
let inputNumeros4 = prompt("Ingrese una serie de números separados por coma:");

let numeros4 = inputNumeros4.split(",").map(Number);
let cantidadNegativos = 0;
for (let i = 0; i < numeros4.length; i++) {
    if (numeros[i] < 0) {
        cantidadNegativos++;
    }
}
console.log("La cantidad de números negativos es: " + cantidadNegativos);

// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
let inputNumero = prompt("Ingrese un número:");
let numero = parseInt(inputNumero);
if (!isNaN(numero) && numero > 0) {
    for (let i = 1; i <= numero; i += 2) {
        console.log(i);
    }
} else {
    console.log("Por favor, ingrese un número válido y mayor que 0.");
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
let inputNumeros5 = prompt("Ingrese una serie de números separados por coma:");
let numeros5 = inputNumeros5.split(",").map(Number);
if (numeros5.length > 0) {
    let numeroMasPequeno = numeros5[0];
    for (let i = 1; i < numeros5.length; i++) {
        if (numeros5[i] < numeroMasPequeno) {
            numeroMasPequeno = numeros5[i];
        }
    }
    console.log("El número más pequeño de la serie es: " + numeroMasPequeno);
} else {
    console.log("Por favor, ingrese al menos un número.");
}

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
while (true) {
    let inputAdivinanza = prompt("Adivina el número (entre 1 y 100):");

    let intentoUsuario = parseInt(inputAdivinanza);

    if (!isNaN(intentoUsuario)) {
        intentos++;

        if (intentoUsuario === numeroAleatorio) {
            console.log("¡Felicidades! Adivinaste el número " + numeroAleatorio + " en " + intentos + " intentos.");
            break;
        } else {
            let pista = intentoUsuario < numeroAleatorio ? "mayor" : "menor";
            console.log("Intento #" + intentos + ": El número es " + pista + ".");
        }
    } else {
        console.log("Por favor, ingrese un número válido.");
    }
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
let inputNumeros6 = prompt("Ingrese una serie de números separados por coma:");
let numeros6 = inputNumeros6.split(",").map(Number);
let cantidadPares = 0;
for (let i = 0; i < numeros6.length; i++) {
    if (numeros6[i] % 2 === 0) {
        cantidadPares++;
    }
}
console.log("La cantidad de números pares es: " + cantidadPares);

// Dado un array de números, escribir una función que retorne el número más grande del array.

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
function filtrarNumerosPares(arrayOriginal) {
    let numerosPares = [];

    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] % 2 === 0) {
            numerosPares.push(arrayOriginal[i]);
        }
    }

    return numerosPares;
}

let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado4 = filtrarNumerosPares(arrayOriginal);
console.log("Números pares del array original: " + resultado4);

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
function filtrarNumerosMayoresQueX(arrayOriginal, X) {
    let numerosMayoresQueX = [];

    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] > X) {
            numerosMayoresQueX.push(arrayOriginal[i]);
        }
    }

    return numerosMayoresQueX;
}

// Ejemplo de uso
let arrayOriginal2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let X = 5;
let resultado7 = filtrarNumerosMayoresQueX(arrayOriginal2, X);
console.log("Números mayores que " + X + ": " + resultado7);

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
function sumarUnoAArray(arrayOriginal) {
    let nuevoArray = [];

    for (let i = 0; i < arrayOriginal.length; i++) {
        nuevoArray.push(arrayOriginal[i] + 1);
    }

    return nuevoArray;
}

// Ejemplo de uso
let arrayOriginal5 = [1, 2, 3, 4, 5];
let resultado9 = sumarUnoAArray(arrayOriginal5);
console.log("Nuevo array sumándole 1: " + resultado9);

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
