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
// 11)Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
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



console.log("--------------------")