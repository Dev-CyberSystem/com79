//Tareas
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.



 let valor1 = parseInt(prompt("Digite el primer numero"))
 let valor2 = parseInt(prompt("Digite el segundo numero"))

 resta(valor1,valor2)

 function resta (valor1,valor2){
     console.log(valor1 - valor2)
 } 


// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

// sumaVariable();

// function sumaVariable() {
//     let numero5 = 5
//     let suma = 5 + 10
//     console.log(suma)
// }

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

concatenarString();

function concatenarString(){
    let cadena1 = prompt("Digite su primera cadena")
    let cadena2 = prompt("Digite su segunda cadena")

    console.log("La cadena 1 es: ",cadena1)
    console.log("La cadena 2 es: ",cadena2)
    console.log("La cadena concatenada es: ",cadena1+"",cadena2)

}


// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

booleana();

function booleana (){
    let booleana1 = true
    let booleana2 = false
    if(booleana1 == booleana2 ){
        console.log("Las variables son iguales")
    }
    else{
        console.log("Las variables son distintas")
    }
}



// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

booleana2();

function booleana2 (){
    let booleana1 = true
    let booleana2 = false
    if(booleana1 != booleana2 ){
        console.log("Las variables son distintas")
    }
    else{
        console.log("Las variables son iguales")
    }
}



// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

mayorDeUnNumero();

function mayorDeUnNumero(){
    let num1 = parseInt(prompt("Digite el primer valor"))
    let num2= parseInt(prompt("Digite el segundo valor"))

    if(num1>num2){
        console.log(`El primer numero ingresado (${num1}) es mayor que el segundo (${num2})`)
    }
    else if(num2>num1){
        console.log(`El segundo numero ingresado (${num2}) es mayor que el primero (${num1})`)
    }
    else{
        console.log(`Los numeros (${num1})(${num2}) son iguales`)
    }

}



// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
//FALTA COMPLETAR
// contadorPalabras();

// function contadorPalabras(str){
//     let cadena1 = prompt("Digite su cadena")
//     console.log(cadena1.split(''))
// }



//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

signo();

function signo(){
    let valor1 = parseInt(prompt("Digite el numero a analizar"))
    if(valor1>0){
        console.log(`El numero ${valor1} es POSITIVO`)
    }
    else if (valor1<0){
        console.log(`El numero ${valor1} es NEGATIVO`)
    }
    else if(valor1==0){
        console.log(`El numero ${valor1} es IGUAL a 0`)

    }
}



//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es. 
//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
//Unifico dos consigas. (Resuelvo ambas en una sola funcion)

let par = parseInt(prompt("Digite el numero para saber su paridad"))

paridad (par);

function paridad(par){

    // let resultado;

    if (par%2==0){
        return resultado=true;
    }
    else{
        return resultado=false;
    }
}

if(resultado == true){
    console.log(`El numero ${par} es PAR`)
}
else{
    console.log(`El numero ${par} es IMPAR`)
}


// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

valorAbsoluto();

function valorAbsoluto(){
    let valor1 = parseInt(prompt("Digite el numero a analizar"))
    if(valor1>0){
        console.log(`El numero ${valor1} es POSITIVO`)
    }
    else if (valor1<0){
        console.log(`El numero ${valor1} es NEGATIVO`)
    }
    else if(valor1==0){
        console.log(`El numero ${valor1} es IGUAL a 0`)

    }
}



// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

mayorNumero();

function mayorNumero(){
    let num1 = parseInt(prompt("Digite el primer valor"))
    let num2= parseInt(prompt("Digite el segundo valor"))

    if(num1>num2){
        console.log(`El primer numero ingresado (${num1}) es mayor que el segundo (${num2})`)
    }
    else if(num2>num1){
        console.log(`El segundo numero ingresado (${num2}) es mayor que el primero (${num1})`)
    }
    else{
        console.log(`Los numeros (${num1})(${num2}) son iguales`)
    }

}



// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.



// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

aprobado();

function aprobado(){
    let nota = parseInt(promptf("Digite su nota"))

    if(nota>=70){
        console.log("Usted esta APROBADO con:",nota)
    }
    else{
        console.log("Usted esta Desaprobado con:",nota)
    }
}



//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

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