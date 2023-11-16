// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// let nombreMes = ()=> {
//     let num=parseInt(prompt(`ingrese un numero del 1 al 12`)).trim()
//     if(num==1){
//         console.log(`Enero`)
//     }else if(num==2){
//         console.log(`Febrero`)
//     }else if(num==3){
//         console.log(`Marzo`)
//     }else if(num==4){
//         console.log(`Abril`)
//     }else if(num==5){
//         console.log(`Mayo`)
//     }else if(num==6){
//         console.log(`Junio`)
//     }else if(num==7){
//         console.log(`Julio`)
//     }else if(num==8){
//         console.log(`Agosto`)
//     }else if(num==9){
//         console.log(`Septiembre`)
//     }else if(num==10){
//         console.log(`Octubre`)
//     }else if(num==11){
//         console.log(`Noviembre`)
//     }else if(num==12){
//         console.log(`Diciembre`)
//     }    else{
//         console.log(`debe ingresar un numero del 1 al 12`)
//     }
// }
// nombreMes()

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// let diaDeLaSemanaArray=()=>{
//     let ingresoUsuario=parseInt(prompt(`ingrese un numero del 1 al 5`))-1
//     let diasSemanales=["lunes","martes","miercoles","jueves","viernes"]
//     console.log(`es dia ${diasSemanales[ingresoUsuario]}`)
// }
// diaDeLaSemanaArray()


// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
// Imprimir los números pares del 2 al 20 en la consola.
// let numerosPares= ()=>{
//     ArrayPares=[]
//     for (let i=2 ; i<=20; i+=2){
//         ArrayPares.push(i)
//     }
//     console.log(ArrayPares)
// }
// numerosPares()

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// let letrasMayusculasString=()=>{
//     let ingreso=prompt(`ingrese un Frase con mayus o minus`)
//     let letrasMayus=[]
//     for (i=0; i<ingreso.length; i++){
//         if (ingreso[i].charCodeAt(0)<=90 && ingreso[i].charCodeAt(0)>=65){
//             letrasMayus.push(ingreso[i])
//         }
//     }
//     console.log(letrasMayus)
// }
// letrasMayusculasString()

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// let mostrarNumeros=()=>{
//     let numeroIngresado=parseInt(prompt(`ingrese un número`))
//     let arrayNumeros=[]
//     for (let i=1 ; i<=numeroIngresado ; i++){
//         arrayNumeros.push(i)
//     }
//     console.log(arrayNumeros)
// }
// mostrarNumeros()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// let separadosComa=()=>{
//     let ingreso=prompt(`ingrese numeros separados por coma`).trim()
//     let arrayNumeros=ingreso.split(",")
//     let numMax= Math.max(...arrayNumeros)
//     console.log(numMax)
// }
// separadosComa()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// let separadosComaSuma=()=>{
//         let ingreso=prompt(`ingrese numeros separados por coma`).trim()
//         let arrayNumeros=ingreso.split(",")
//         let sumaPares=0
//         for (i=0; i<arrayNumeros.length; i++){
//             if (arrayNumeros[i]%2==0){
//                 sumaPares+=parseInt(arrayNumeros[i])
//             }
//         }
//         console.log(`la suma de los numeros pares es ${sumaPares}`)
// }
// separadosComaSuma()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// let separadosComaNegativos=()=>{
//     let ingreso=prompt(`ingrese numeros separados por coma`).trim()
//     let arrayNumeros=ingreso.split(",")
//     let cantidadNegativos=[]
//     for (i=0; i<arrayNumeros.length; i++){
//         if (arrayNumeros[i]<0){
//             cantidadNegativos.push(arrayNumeros[i])
//         }
//     }
//     console.log(`hay ${cantidadNegativos.length} numeros negativos`)
// }
// separadosComaNegativos()

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
