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
// let imparesHasta=()=>{
//     let numeroUsuario=parseInt(prompt(`ingrese un número`))
//     let arrayNumeros=[]
//     let i=1
//     while(i<=numeroUsuario){
//         arrayNumeros.push(i)
//         i+=2
//     }
//     console.log(arrayNumeros)
// }
// imparesHasta()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// let separadosComaMinimo=()=>{
//     let ingreso=prompt(`ingrese numeros separados por coma`).trim()
//     let arrayNumeros=ingreso.split(",")
//     let minimo=Math.min(...arrayNumeros)
//     console.log(`el menor numero es ${minimo}`)
// }
// separadosComaMinimo()

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// let number;
// let contador=1;

// while (number !== numeroAleatorio) {
//     number = parseInt(prompt("Ingresa un numero entre 1 y 100"));
//     if(number < numeroAleatorio){
//         console.log("El numero que ingresaste es mas chico")
//         contador++
//     } else if (number > numeroAleatorio){
//         console.log("El numero que ingresaste es mas grande")
//         contador++
//     } else {
//         console.log(`ganaste y te Tomo ${contador} intentos`)
//     }
// }

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// let paresHasta=()=>{
//     let num=(prompt(`ingrese un número separado por coma`))
//     let arrayNumeros=num.split(",")
//     let numerosPares=[]
//     for (let i=0; i<arrayNumeros.length; i++){
//         let numero=parseInt(arrayNumeros[i])
//         if (numero%2==0){
//             numerosPares.push(numero)
//         }
//     }

//     console.log(`la cantidas de numeros pares es: ${numerosPares.length}`)
// }
// paresHasta()

// Dado un array de números, escribir una función que retorne el número más grande del array.

// let arrayNumMax=[4, 5 ,6,7,8,9,10,12,14,15,18,16,-2]
// let maxNumArray=()=>{
//     numMax= Math.max(...arrayNumMax)
//     console.log(numMax)
//     return numMax
// }
// maxNumArray()

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
// let arrayNumPares=[4, 5 ,6,7,8,9,10,12,14,15,18,16,-2]
// let paresArray=()=>{
//     paresArrayRetornados=[]
//     for (i=0; i<arrayNumPares.length;i++){
//         if(arrayNumPares[i]%2==0){
//             paresArrayRetornados.push(arrayNumPares[i])
//         }
//     }
//     console.log(paresArrayRetornados)
//     return paresArrayRetornados
// }
// paresArray()

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// let arrayNumSuma=[4, 5 ,6,7,8,9,10,12,14,15,18,16,-2]
// let sumaArray=()=>{
//     sumados=0
//     for (i=0; i<arrayNumSuma.length;i++){
//         sumados += arrayNumSuma[i]
//     }
//     console.log(sumados)
//     return sumados
// }
// sumaArray()

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// let arrayStringMayus=["V","c","D","e","F","g","J"]
// let arrayMayus = ()=>{
//     let soloMayus=[]
//     for (i=0 ; i<arrayStringMayus.length;i++){
//         if(arrayStringMayus[i].charCodeAt(0)>= 65 && arrayStringMayus[i].charCodeAt(0)<=90){
//             soloMayus.push(arrayStringMayus[i])
//         }
//     }
//     console.log(soloMayus)
//     return soloMayus
// }
// arrayMayus()

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// let arrayNumerosX=[14,25,64,15,12,34,17,24]
// let numX= 15
// let numMayoresX=()=>{
//     let numMayorX=[]
//     for (let i=0 ; i<arrayNumerosX.length; i++){
//         if(arrayNumerosX[i]>numX){
//             numMayorX.push(arrayNumerosX[i])
//         }
//     }
//     console.log(numMayorX)
//     return numMayorX
// }
// numMayoresX()

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// let arraySumaMayores=[4, 5 ,6,7,8,9,10,12,14,15,18,16,-2]
// let sumaArrayLista=()=>{
//     sumados=0
//     nuevaLista=[]
//     for (i=0; i<arraySumaMayores.length;i++){
//         sumados += arraySumaMayores[i]
//         if (arraySumaMayores[i]>10){
//             nuevaLista.push(arraySumaMayores[i])
//         }
//     }
//     console.log(sumados)
//     console.log(nuevaLista)
//     return sumados, nuevaLista
// }
// sumaArrayLista()

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// let array5Caracteres=["trabajo", "computadora", "idea", "tiempo", "hola"]
// let cincoCaracteres=()=>{
//     arrayResultado=[]
//     for(let i=0 ; i<array5Caracteres.length; i++){
//         if(array5Caracteres[i].length>5){
//             arrayResultado.push(array5Caracteres[i])
//         }
//     }
//     console.log(arrayResultado)
//     return arrayResultado
// }
// cincoCaracteres()

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// let array5CaracteresA=["arandano", "computadora", "idea", "tiempo", "arboleda", "avioneta"]
// let cincoCaracteresA=()=>{
//     arrayResultado=[]
//     for(let i=0 ; i<array5CaracteresA.length; i++){
//         if(array5CaracteresA[i].length>5 && array5CaracteresA[i].startsWith("a")){
//             arrayResultado.push(array5CaracteresA[i])
//         }
//     }
//     console.log(arrayResultado)
//     return arrayResultado
// }
// cincoCaracteresA()

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// let arrayNumerosXcortar=[14,25,64,15,12,34,17,24]
// let numX2= 15
// let numMayoresXcortar=()=>{
//     let numMayorX=[]
//     for (let i=0 ; i<arrayNumerosXcortar.length; i++){
//         if(arrayNumerosXcortar[i]>numX2){
//             numMayorX.push(arrayNumerosXcortar[i])
//             if(numMayorX.length>3){
//                 numMayorX.pop()
//             }
//         }
//     }
//     console.log(numMayorX)
//     return numMayorX
// }
// numMayoresXcortar()

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// let arrayNumeros1=[14,25,64,15,12,34,17,24]
// let arraySumados1=()=>{
//     nuevoArray=[]
//     for (i=0 ; i< arrayNumeros1.length; i++){
//         nuevoArray.push(arrayNumeros1[i]+1)
//     }
//     console.log(nuevoArray)
//     return nuevoArray
// }
// arraySumados1()
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// let menosUltimo=[14,25,64,15,12,34,17,24]
// let arrayMenosUltimo=()=>{
//     menosUltimo.pop()
//     console.log(menosUltimo)
//     return menosUltimo
// }
// arrayMenosUltimo()

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// let menosUltimoPrimero=[14,25,64,15,12,34,17,24]
// let arrayMenosUltimoPrimero=()=>{
//     menosUltimoPrimero.pop()
//     menosUltimoPrimero.shift()
//     console.log(menosUltimoPrimero)
//     return menosUltimoPrimero
// }
// arrayMenosUltimoPrimero()

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
let menosPosicionX=[14,25,64,15,12,34,17,24]
let PosX=3
let arrayMenosPosicionX=()=>{
    filtrado=menosPosicionX.filter((number,index) => index!=PosX)
    console.log(filtrado)
}
arrayMenosPosicionX()