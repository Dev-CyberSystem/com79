//Tareas 2 parte
// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente. DUPLICADO EN LA PARTE 1
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante. DUPLICADO EN LA PARTE 1
// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula. 
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
// 7)Imprimir los números pares del 2 al 20 en la consola.
// 8)Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// 9)Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// 10)Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// 11)Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no. DUPLICADO EN LA PARTE 1
// 12)Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// 13)Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// 14)Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// 15)Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// 16)Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// 17)Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// 18)Dado un array de números, escribir una función que retorne el número más grande del array.
// 19)Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
// 20)Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// 21)Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// 22)Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// 23)Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// 24)Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// 25)Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// 26)Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// 27)Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// 28)Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// 29)Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// 30)Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
console.log("-------Ejercicio 1-----------")
/*
let numero = parseInt(prompt("Ingresar un numero del 1 al 12: "))

function mesC(numero)
{
    switch(numero)
    {
        case 1: {alert(`Enero`)};break;
        case 2: {alert(`Febrero`)};break;
        case 3: {alert(`Marzo`)};break;
        case 4: {alert(`Abril`)};break;
        case 5: {alert(`Mayo`)};break;
        case 6: {alert(`Junio`)};break;
        case 7: {alert(`Julio`)};break;
        case 8: {alert(`Agosto`)};break;
        case 9: {alert(`Septiembre`)};break;
        case 10: {alert(`Octubre`)};break;
        case 11: {alert(`Noviembre`)};break;
        case 12: {alert(`Diciembre`)};break;
        default: {alert(`Debe ingresar un numero del 1 al 12`)};break;
        
    }
}
mesC(numero)*/
console.log("--------------------")
//4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
console.log("-------Ejercicio 4-----------")
/*
let semanaArray=()=>{
    let nm3=parseInt(prompt(`ingrese un numero del 1 al 5`))-1
    let dias=["lunes","martes","miercoles","jueves","viernes"];
    if(nm3>0&&nm3<6)
    {
         {alert(`El es dia ${dias[nm3]}`)}
    }
   else{
    {alert(`Ingresar un numero dentro de 1 a 5.`)}
   }
}
semanaArray()*/
console.log("--------------------")
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula. 
console.log("-------Ejercicio 5-----------")
/*
let regExNu = /[0-9]/ ///[A-Za-z]/
let letra2 = String(prompt("Ingres una letra: "))

if(!regExNu.test(letra2) &&letra2.length===1)
{
    if(letra2.match(/[a-z]/))
    {
        alert(`La letra es Miniscula: ${letra2}`)
    }
    else{
        alert(`La letra es Mayuscula: ${letra2}`)
    }
}
else{
    alert(`Debe ingresar una letra.`)
}*/
console.log("--------------------")
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
console.log("-------Ejercicio 6-----------")
/*
let cali = parseInt(prompt("Ingrese un numero del 1 al 10: "))
let regexn= /[0-9]/ 
let catNotas = ["suspenso","aprobado","notable","sobrealiente"]

if(!regexn.test(cali))
{
    alert("Solo se permiten numeros.")
}
else{
    calificacionN(cali)
}
function calificacionN(cali)
{
    if(cali<=10 && cali>0)
    {
    if(cali<5)
    {
        alert(`La calificacion correspondiente es ${catNotas[0]}`)
    }
    else if(cali<=6)
    {
        alert(`La calificacion correspondiente es ${catNotas[1]}`)
    }
    else if(cali<=8)
    {
        alert(`La calificacion correspondiente es ${catNotas[2]}`)
    }
    else
    {
        alert(`La calificacion correspondiente es ${catNotas[3]}`)
    }
    }
    else{
        alert("El numero 0 no corresponde a una calificacion")
    }
}
calificacionN(cali)*/
console.log("--------------------")

// 7)Imprimir los números pares del 2 al 20 en la consola.
console.log("-------Ejercicio 7-----------")
/*
let numeroArray = []

for(let a=2; a<=20; a++)
{
    if(a % 2 ===0)
    {
        numeroArray.push(a);
    }
}
console.log(`Los numero pares: ${numeroArray.join(` , `)}`)

*/
console.log("--------------------")
// 8)Recorrer un string y mostrar en la consola cada letra en mayúsculas.
console.log("-------Ejercicio 8-----------")
/*
let cadenaL = prompt("Ingrese una cadena: ")
   let letritas = []

   for(let b=0;b<cadenaL.length;b++)
   {
        letritas.push(cadenaL[b].toUpperCase())
   }
   alert(`El string ingresado quedó de la siguiente manera ${letritas.join(` , `)}`)*/
console.log("--------------------")
// 9)Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
console.log("-------Ejercicio 9-----------")
/*
let numb2 = parseInt(prompt("Ingrese un numero para hacer un conteo al mismo: "))
let numeroA = []

for(let c=0;c<numb2;c++)
{
    numeroA.push(c)
}
alert(`Los numero son: ${numeroA.join(` , `)}`)*/

console.log("--------------------")
// 10)Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
console.log("-------Ejercicio 10-----------")
/*
let numeroSeparados=()=>{
    let cantidadN=prompt(`ingrese numeros separados por coma`).trim()
    let arrayN=cantidadN.split(",")
    let elMayor= Math.max(...arrayN)
    alert(`El numero más grande es: ${elMayor}`)
}
numeroSeparados()*/
console.log("--------------------")
// EL 11 Duplicado

// 12)Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
console.log("-------Ejercicio 12-----------")
/*
let serieSeparados=()=>
{
    let serieEnt = prompt(`Ingrese los numeros separados por coma`).trim()
    let arrayNum = serieEnt.split(",")
    let sumaPar=0
    for(let f=0;f<arrayNum.length;f++)
    {
        if(arrayNum[f]%2===0)
        {
                sumaPar+=parseInt(arrayNum[f])
        }
    }
    alert(`La suma pares es ${sumaPar}`)
}
serieSeparados()*/
console.log("--------------------")
// 13)Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
console.log("-------Ejercicio 13-----------")
/*
let serieSeperadosNegativos=()=>
{
    let serieEnt2 = prompt(`Ingrese los numeros separados por coma`).trim()
    let arrayNum2 = serieEnt2.split(`,`)
    let arrayNeg = []

    for(let h=0; h<arrayNum2.length;h++)
    {
            if(arrayNum2[h]<0)
            {
                arrayNeg.push(arrayNum2[h])
            }
    }
    console.log(`Los numeros negativos ${arrayNeg.join(` , `)}`)
}
serieSeperadosNegativos()*/

console.log("--------------------")

// 14)Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
console.log("-------Ejercicio 14-----------")
/*
let numerosImpares=()=>
{
        let numb3 = parseInt(prompt("Ingrese un numero por favor: "))
        let contarImpares=[];
        for (let l = 1; l < numb3; l++) {
        if ((l % 2) !== 0) {
            contarImpares.push(l)
        }
    }
    return alert(`Los numeros impares son: ${contarImpares.join(` - `)}`);
    }

numerosImpares()*/
console.log("--------------------")
// 15)Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
console.log("-------Ejercicio 15-----------")
/*
let numeroSeparadosComa=()=>
{
    let serieEnt3 = prompt(`Ingrese los numeros separados por coma`).trim()
    let arrayNum3 = serieEnt3.split(`,`)
    let menorN = Math.min(...arrayNum3)

    console.log(`El numero más pequeño es: ${menorN}`)
}
numeroSeparadosComa()*/
console.log("--------------------")
// 16)Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
console.log("-------Ejercicio 16-----------")
/*
let numeroAleatorio = Math.floor(Math.random()*100) +1;

let c = 0;
 let numb4;
 while(numb4 !== numeroAleatorio)
 {
    numb4 = parseInt(prompt("Ingresa un numero entre 1 y 100"));
    if(numb4<numeroAleatorio)
    {
        alert(`El numero ${numb4} es mas chico`)
        c++
    }else if(numb4 > numeroAleatorio)
    {
        alert(`El numero  ${numb4} es mas grande`)
        c++
    }else{
        alert(`Ganaste`)
    }
 }*/
 console.log("--------------------")
// 17)Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
console.log("-------Ejercicio 17-----------")
/*
let serieSeparadosPares=()=>
{
    let serieEnt4 = prompt(`Ingrese los numeros separados por coma`).trim()
    let arrayNum4 = serieEnt4.split(",")
    let arrayPares = []
    
    for(let g=0;g<arrayNum4.length;g++)
    {
        if(arrayNum4[g]%2===0)
        {
              arrayPares.push(arrayNum4[g])
        }
    }
    console.log(`La cantidad de numeros pares: ${arrayPares.join(`-`)}`)
}
serieSeparadosPares()*/
console.log("--------------------")
// 18)Dado un array de números, escribir una función que retorne el número más grande del array.
console.log("-------Ejercicio 18-----------")
/*
let arrayN22 = [0,5,43,3,2,200,34,5,3,6,8,34,32,345,63,2,1,7]

function arrayNumMayor()
{
    let numMay = Math.max(...arrayN22)
    alert(`El numero mayor del array es: ${numMay}`)
}
arrayNumMayor()*/
console.log("--------------------")
// 19)Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
console.log("-------Ejercicio 19-----------")
/*
let arrayN23 = [0,5,60.40,34,12,43,3,2,200,34,5,3,6,8,34,32,345,63,2,1,8,16,50,7]

function retornarParesArray()
{
    let paresArrayN =[]
    for(let s=0;s<arrayN23.length;s++)
    {
        if(arrayN23[s]%2===0)
        {
              paresArrayN.push(arrayN23[s])
        }
    }
    alert(`El numero array de numeros pares es: [${paresArrayN}]`)
}
retornarParesArray()*/
console.log("--------------------")
// 20)Dado un array de números, escribir una función que retorne la suma de todos los números del array.
console.log("-------Ejercicio 20-----------")
/*
let arrayNM = [0,5,60,40,34,12,43,3,2,200,34,5,3,6,8,34,32,345,63,2,1,8,16,50,7,11]

function retonarSumaArray()
{
    let sumaArray=0
    for(let j=0;j<arrayNM.length;j++)
    {
        sumaArray+=arrayNM[j]
    }
    alert(`La suma del Array es: [${sumaArray}]`)
}
retonarSumaArray()*/
console.log("--------------------")
// 21)Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
console.log("-------Ejercicio 21-----------")
/*
let arrayCadena = [`hola`,`como`,`edad`,`nombre`,`chau`]

function retonarArrayM()
{
    let arrayNMY 
    
    for(let j=0;j<=arrayCadena.length;j++)
    {   
       //arrayCadena[j].toUpperCase()
        arrayNMY.push(arrayCadena[j])
    }
    alert(`El array quedó: [${arrayNMY}]`)
}
retonarArrayM()*/
console.log("--------------------")
// 22)Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
console.log("-------Ejercicio 22-----------")
let arrayN10 = [2,3,4,5,6,10,12,23,3,4,40,32,22,21,20]
let numX = 11

function arrayNX(){
    let arrayOr =[]

    for (let i = 0; i< arrayN10.length; i++) 
    {
        if(arrayN10[i]>numX)
        {
            arrayOr.push(arrayN10[i])
        }
    }
    alert(`[${arrayOr}]`)
 }
arrayNX()
console.log("--------------------")
// 23)Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// 24)Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// 25)Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// 26)Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// 27)Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// 28)Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// 29)Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// 30)Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.