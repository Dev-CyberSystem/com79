
// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

// let Mes = parseInt(prompt("Ingrese un numero del 1 al 12 para ver el mes").trim());

// switch (Mes) {
//     case (1):
//         console.log("Enero")
//         break;
//     case (2):
//         console.log("Febrero")
//         break;
//     case (3):
//         console.log("Marzo")
//         break
//     case (4):
//         console.log("Abril")
//         break
//     case (5):
//         console.log("Mayo")
//         break
//     case (6):
//         console.log("Junio")
//         break
//     case (7):
//         console.log("Julio")
//         break
//     case (8):
//         console.log("Agosto")
//         break
//     case (9):
//         console.log("Septiembre")
//         break
//     case (10):
//         console.log("Octubre")
//         break
//     case (11):
//         console.log("Noviembre")
//         break
//     case (12):
//         console.log("Diciembre")
//         break
//     default:
//         console.log("Ingrese un numero valido")
//         break;
// }


// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.

// let Dia = parseInt(prompt("Ingrese un numero del 1 al 7 para saber el dia de la semana"))

// switch (Dia) {
//     case 1:
//         console.log("Lunes")
//         break;
//     case 2:
//         console.log("Martes")
//         break;
//     case 3:
//         console.log("Miercoles")
//         break;
//     case 4:
//         console.log("Jueves")
//         break;
//     case 5:
//         console.log("Viernes")
//         break;
//     case 6:
//         console.log("Sabado")
//         break;
//     case 7:
//         console.log("Domingo")
//         break;
//     default:
//         console.log("Ingrese un numero valido")
//         break;
// }

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.

// let vocal = prompt("Ingrese una letra")

// switch (vocal) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("Es una vocal")
//         break;
//     default:
//         console.log("Es una consonante")
//         break;
// }

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.

// let array = ["","Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
// let RecibirNumero = prompt("Ingrese un numero del 1 al 5")
// console.log(array[RecibirNumero])


// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

// let Nota = parseInt(prompt("Ingrese su nota"))

// switch (true) {
//     case Nota <= 3:
//         console.log("Suspenso")
//         break;
//     case Nota <= 6 :
//         console.log("Aprobado")
//         break;
//     case Nota <= 8:
//         console.log("Notable")
//         break;
//     case Nota <= 10:
//         console.log("Sobresaliente")
//         break;
//     default:
//         console.log("Ingrese un nota valida")
//         break;
// }

// Imprimir los números pares del 2 al 20 en la consola.

// for (i = 2; i <= 20; i++){
//     if (i%2 == 0) {
//         console.log("Los numeros pares son:" + i)
//     }
// }

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.

// let i = 1
// let NumeroIngresado = prompt("Ingrese un numero")

// while (i <= NumeroIngresado) {
//     console.log(i);
//     i++;
// }


        // Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.

        // let numeros = prompt("Imgrese una serie de numeros separados por coma")

        // let numeroComa = numeros.split(",")
        // let suma = 0

        // if (numeroComa%2 == 0) {
        //     numeroComa += suma
            
        // }
// console.log("la suma de los numeros pares es:" + numeroComa)

// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.

// let i = 1
// let NumeroIngresado = prompt("Ingrese un numero")

// for (i; i <= NumeroIngresado ; i++){
//     if (i%2 != 0) {
//         console.log("Los numeros impares son" + i)
//     }
// }


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.

// let numeros = prompt("Ingrese una serie de numeros separados por coma")

// let numeroComa = numeros.split(",")
// console.log(numeroComa)
// console.log(Math.min(...numeroComa))

// Dado un array de números, escribir una función que retorne el número más grande del array.

// let array = [1, 2, 3, 4, 5, 6]

// function arreglo() {
//     console.log(Math.max(...array))
// }
// arreglo()








