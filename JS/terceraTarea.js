//Tarea 3
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.

function resta (num1,num2){
    resultado = num1 - num2
    console.log("Este es el resultado de la resta:" + resultado)
}resta(5,3)

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

function suma(numeroValor= 5){
    resultadoValor = numeroValor + 10
    console.log("Este es el resultado de la suma:" + resultadoValor)
}suma()

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

function nombreCompleto(nombre= "Georgina", apellido= "Costilla"){

    console.log(`${nombre} ${apellido}`)

}nombreCompleto()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

function valorBool(valorUno= true, valorDos=false){
    resultadoBooleano= valorUno == valorDos
    console.log("Los valores de las variables son iguales:" + resultadoBooleano)
}valorBool()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

function valorBooleano(primerValor= true, segundoValor=false){
    resultadoBool= primerValor != segundoValor
    console.log("Los valores de las variables son diferentes:" + resultadoBool)
}valorBooleano()

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

function valorNum(num1= 10, num2= 5){
    resultValor= num1 > num2
    console.log("El primer numero es mayor en comparación al segundo número?" + resultValor)
}valorNum() 

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.

// Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

function numParametro(numPositivo){
    if (numPositivo < 0) {
        console.log("Su número es negativo")
    } else if (numPositivo === 0){
      console.log("Su número es 0")
    } else{
        console.log("Su número es positivo")
    }
}numParametro(9)

// Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

function numPar(numRecibido){
    if (numRecibido % 2 === 0) {
        console.log("El número recibido es par")
    } else {
      console.log("El número recibido es impar")
    }
}numPar(3)

// Crear un programa que pida al usuario un número y luego muestre si es par o impar.

let numUsuario = prompt("Ingresa un número: ")
numUsuario = parseInt(numUsuario)

if (numUsuario % 2 === 0) {
    console.log("El número ingresado es par")
} else {
  console.log("El número ingresado es impar")
}

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

let numeroUsuario = prompt("Ingresa un número: ")
numeroUsuario = parseInt(numeroUsuario)

if (numeroUsuario < 0) {
    console.log("Su número es negativo")
} else if (numeroUsuario === 0){
  console.log("Su número es 0")
} else {
    console.log("Su número es positivo")
}

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

let valorUsuario = prompt("Ingresa el 1er número: ")
valorUsuario = parseInt(valorUsuario)

let valorUsuarioDos = prompt("Ingresa el 2do número: ")
valorUsuarioDos = parseInt(valorUsuarioDos)

numeroMayor = valorUsuario > valorUsuarioDos ? valorUsuario : valorUsuarioDos;

console.log(`El número mayor es: ${numeroMayor}`)

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

let contrasena = prompt("Por favor, ingrese su contraseña (la misma debe tener aunque uno, de los siguientes caracteres /[!#$*()_+:;?\\-]/)")

if (contrasena.length < 6) {
    console.log("La contraseña debe tener al menos 8 caracteres")
} else {
    let caracteresEspeciales = /[!#$*()_+:;?\\-]/

    if (!contrasena.match (caracteresEspeciales)) {
        console.log("La contraseña debe contener al menos un caracter especial");
    } else {
        console.log("Contraseña correcta");
    }
}

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

let nota = prompt("Por favor, ingrese su calificación:")
nota = parseFloat(nota)

if(nota >= 70){
    console.log("Usted está aprobado!")
} else {
    console.log("Usted ha desaprobado")
}
// Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

let letra = prompt("Por favor, ingrese una letra:")
letraEnMayuscula = letra.toUpperCase()

switch (letraEnMayuscula) {
    case "A":
        console.log("La letra es una vocal")
        break;
    case "E":
        console.log("La letra es una vocal")
        break;
    case "I":
        console.log("La letra es una vocal")
        break;
    case "O":
        console.log("La letra es una vocal")
        break;
    case "U":
        console.log("La letra es una vocal")
        break;
    default:
        console.log("La letra es una consonante")
}

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

let dia = prompt("Por favor, ingrese un número del 1 al 7:");
dia = parseInt(dia);

switch (dia) {
    case 1:
        console.log(`El número ${dia} corresponde al día lunes`)
        break;
    case 2:
        console.log(`El número ${dia} corresponde al día martes`)
        break;
    case 3:
        console.log(`El número ${dia} corresponde al día miércoles`)
        break;
    case 4:
        console.log(`El número ${dia} corresponde al día jueves`)
        break;
    case 5:
        console.log(`El número ${dia} corresponde al día viernes`)
        break;
    case 6:
        console.log(`El número ${dia} corresponde al día sábado`)
        break;
    case 7:
        console.log(`El número ${dia} corresponde al día domingo`)
        break;
    default:
        console.log("número incorrecto")
}

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

let edadUsuario = prompt("Ingrese su edad:")
edadUsuario = parseInt(edadUsuario)

if (edadUsuario >= 18) {
    console.log("Usted es mayor de edad")
} else {
    console.log("Usted es menor de edad")
}

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

let numIngresado = prompt("Ingrese un número:")
numIngresado = parseInt(numIngresado)

let numeroIngresado = prompt("Ingrese un 2do. número:")
numeroIngresado = parseInt(numeroIngresado)

let resultNum = numIngresado + numeroIngresado

if (resultNum == 100) {
    console.log("El resultado de sumar los dos números que ingreso es igual a 100")
} else if (resultNum <= 100){
    console.log("El resultado de sumar los dos números que ingreso es menor a 100")
} else {
    console.log("El resultado de sumar los dos números que ingreso es mayor a 100")
}

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

let numUno = prompt("Ingrese un número:")
numUno = parseInt(numUno)

let numDos = prompt("Ingrese un 2do. número:")
numDos = parseInt(numDos)

let numTres = prompt("Ingrese un 3er. número:")
numTres = parseInt(numTres)

if (numUno > numDos && numTres){
    console.log(numUno + " es el mayor")
} else if (numDos > numUno && numTres){
    console.log(numDos + " es el mayor")
} else{
    console.log(numTres + " es el mayor")
}

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

let letraIngresada = prompt("Ingrese una letra:")

if (letraIngresada === letraIngresada.toUpperCase()) {
    console.log("La letra ingresada es mayúscula.")
} else if (letraIngresada === letraIngresada.toLowerCase()) {
    console.log("La letra ingresada es minúscula.")
} else {
    console.log("Por favor, ingrese una letra.")
}

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

// Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

let mes = prompt("Por favor, ingrese un número del 1 al 12:");
mes = parseInt(mes);

switch (mes) {
    case 1:
        console.log(`El número ${mes} corresponde al mes de enero`)
        break;
    case 2:
        console.log(`El número ${mes} corresponde al mes de febrero`)
        break;
    case 3:
        console.log(`El número ${mes} corresponde al mes de marzo`)
        break;
    case 4:
        console.log(`El número ${mes} corresponde al mes de abril`)
        break;
    case 5:
        console.log(`El número ${mes} corresponde al mes de mayo`)
        break;
    case 6:
        console.log(`El número ${mes} corresponde al mes de junio`)
        break;
    case 7:
        console.log(`El número ${mes} corresponde al mes de julio`)
        break;
    case 8:
        console.log(`El número ${mes} corresponde al mes de agosto`)
        break;
    case 9:
        console.log(`El número ${mes} corresponde al mes de septiembre`)
        break;
    case 10:
        console.log(`El número ${mes} corresponde al mes de octubre`)
        break;
    case 11:
        console.log(`El número ${mes} corresponde al mes de noviembre`)
        break;
    case 12:
        console.log(`El número ${mes} corresponde al mes de diciembre`)
        break;
    default:
        console.log("el número ingresado es incorrecto")
}

// Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.

let numeroSemana = parseInt(prompt("Ingrese un número del 1 al 5:"))
let diaSemana = ["lunes", "martes", "miércoles", "jueves", "viernes"]

if (numeroSemana >= 1 && numeroSemana <= 5) {
    console.log(`El número ${numeroSemana} corresponde al día ${diaSemana[numeroSemana - 1]}`);
} else {
    console.log("Ingrese un número válido del 1 al 5");
}

// Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

let numNota = parseInt(prompt("Ingrese su nota:"))

if (numNota < 4){
    console.log("Su nota esta suspenso")
} else if (numNota >= 4 && numNota <= 6){
    console.log("Usted esta aprobado")
} else if(numNota >=7 && numNota == 8){
    console.log("Usted está aprobado y su nota se considera como: notable")
}else if (numNota >= 9 && numNota == 10){
    console.log("Usted está aprobado y su nota se considera como: sobresaliente")
} else{
    console.log("Ingrese una nota válida")
}

// Imprimir los números pares del 2 al 20 en la consola.

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.

let numIngresar = parseInt(prompt("Ingrese un número:"))

for (let i = 1; i <= numIngresar; i ++) {
    console.log(i);
}

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