// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.

function Resta(num1 , num2){
    console.log("El resultado de la resta es:", num1 - num2)
}
Resta(10,5)

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

function Suma(){
console.log(suma1 + 10)
}
let suma1 = 5
Suma()

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

function saludo(){
    console.log(`Mi nombre es ${nombre} y mi apellido ${apellido}`)
}
let apellido = "Skibski"
let nombre = "Ignacio"
saludo()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.



// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

let numeros = () => {
let validacion = numero1 > numero2
console.log(validacion)
}
let numero1 = 12
let numero2 = 3
numeros()


// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.



//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.


function comparar(numero3){

    if(numero3 > 0){
        console.log("Es positivo")
    }
    else if (numero3 == 0){
        console.log("Es igual a cero")
    }
    else{
        console.log("Es negativo")
    }
}
comparar(5)

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

function divisible(numero4){
if (numero4%2 == 0) {
    console.log("Es par")
} else {
    console.log("Es impar")
}
}
divisible(9)

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.

function usuario(){
    let num1 = parseInt(prompt("Ingrese un numero")) 
    if (num1%2 == 0) {
        console.log("Es par")
    } else {
        console.log("Es impar")
    }

}
usuario()

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

let comparacion = () => {
    let num2 = parseInt(prompt("Ingrese un numero"))
    if (num2 > 0) {
        console.log("El numero es positivo")
    } else if (num2 == 0){
        console.log("El numero es cero")
    }
    else {
        console.log("El numero es negativo")
    }
}
comparacion()



// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
let calificación = () =>{
    let nota = parseInt(prompt("Ingrese su nota"))

    if (nota >= 70) {
        console.log("Aprobo")
    } else {
        console.log("Su nota no es suficiente para aprobar")
    }
}
calificación()


// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

let usuario1 = () => {
    let letra = prompt("Ingrese una letra")
    
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ) {
        console.log("Es una vocal")
    } else {
        console.log("Es una consonante")
    }
}
usuario1()

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.


// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

