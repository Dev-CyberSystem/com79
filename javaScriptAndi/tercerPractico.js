// holi
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
function restarParametros(a,b){
    let resultado= a-b
    console.log(resultado)
}
restarParametros(5,7)

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

function sumaDiez(){
    let num1= 5
    let resultado= num1+10
    console.log(resultado)
}
sumaDiez();


// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
function string(){
    let string1= `Andi`
    let string2= `Orlandi`
    let resultado= `Mi nombre es ${string1} ${string2}`
    console.log(resultado)
}
string();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

function compararBooleanos(){
    let bool1= true
    let bool2= false
    let resultado= bool1 === bool2
    console.log(resultado)
}

compararBooleanos();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

function compararBooleanosDistintos(){
    let bool1= true
    let bool2= false
    let resultado= bool1 ==! bool2
    console.log(resultado)
}
compararBooleanosDistintos();

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

function numMayor(){
    let num1= 15
    let num2= 60
    let resultado= num1 > num2
    console.log (resultado)
}

numMayor();

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.

function contadorDePalabras(){
    let frase= prompt(`Ingrese su frase aqui:`)
    let fraseDividida= frase.split(" ")
    let resultado= fraseDividida.length
    console.log(resultado)
}
contadorDePalabras();



//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

function signo(){
    let a= parseInt(prompt(`Ingrese un numero para ver su signo:`))

   if (a > 0){
    console.log(`El numero ${a} es Positivo`)
   } else if (a === 0){
    console.log(`El numero ${a} es un Cero`)
   } else {
    console.log(`El numero ${a} es Negativo`)
   }
    
}
signo()

// Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

function parImpar(b){

    if (b % 2 === 0){
        console.log(`Par`)
    }else{
        console.log(`Impar`)
    }

}
parImpar(2);

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
function paridad(){
    let num= parseInt(prompt(`Ingrese un numero para ver su paridad:`))

    if(num % 2 === 0){
        console.log(`El numero ${num} es PAR`)
    } else{
        console.log(`El numero ${num} es IMPAR`)
    }
}
paridad();

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

function cualEsMayor(){
    let num1= parseInt(prompt(`Ingrese un numero:`))
    let num2= parseInt(prompt(`Ingrese un segundo numero:`))
    
    if (num1 > num2){
        console.log(`El numero ${num1} es mayor`)
    } else if (num1 < num2){
        console.log(`El numero ${num2} es mayor`)
    }
}

cualEsMayor();


// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

let password= String(prompt(`Ingrese aqui su contraseña:`))
let caracterEspecial= /[!,-&%?¡¿#@;:+´*/|°=<>]/;

function validacion(){

    if (password.length < 8 && caracterEspecial.test(password)){ //
        console.log(`Contrasenia Correcta`)

    } else if (password.length > 8 || caracterEspecial.test(password)){
        console.log(`Contrasenia Incorrecta`)

    }
}

validacion();


// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

function calificacion(){
    let nota= parseInt(prompt(`Ingrese su calificacion:`))

    if(nota > 70){
        console.log(`Usted es un genio su ${nota} significa que esta APROBADO`)

    } else if (nota < 70){
        console.log(`Usted tiene que estudiar mas, su ${nota} significa que esta DESAPROBADO`)
    }
}
calificacion();



//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

function vocalOCons(){

    let letra= prompt(`Ingrese una letra:`)
    let vocal= ["a","e","i","o","u"]

    if (letra.toLowerCase() === vocal){
        console.log(`Esta ${letra} es una VOCAL`)
    
    } else {
        console.log(`Esta ${letra} es una CONSONANTE`)
    }
}

vocalOCons();

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

