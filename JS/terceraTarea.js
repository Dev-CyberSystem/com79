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
} else{
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

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

// Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

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