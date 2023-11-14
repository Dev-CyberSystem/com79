//Tareas
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
function restarParametros(a,b){
    let resultado= a-b
    console.log(resultado)
}
restarParametros(5,7)

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
function sumarDiez(){
    let num1=5
    let resultado=num1+10
    console.log(resultado)
}
sumarDiez()

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
function stringConcatenados(){
    let string1=`Facundo`
    let string2= `Gimenez`
    let resultado=`mi nombre es ${string1} ${string2}`
    console.log(resultado)
}
stringConcatenados()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
function compararBooleanos(){
    let bool1=true
    let bool2=true
    let resultado= bool1===bool2
    console.log(resultado)
}
compararBooleanos()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
function compararBooleanosDistintos(){
    let bool1=true
    let bool2=false
    let resultado= bool1!=bool2
    console.log(resultado)
}
compararBooleanosDistintos()

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
function numMayor(){
    let num1=25
    let num2=30
    let resultado=num1>num2
    console.log(resultado)
}
numMayor()

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
function contarPalabras(){
    let frase=prompt("ingrese aqui su frase")
    let fraseDividida=frase.split(" ")
    let resultado= fraseDividida.length
    console.log(resultado)
}
contarPalabras()

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
function numeroPosNeg(a){
    if(a<0){
        return console.log("negativo")
    } else if(a===0){
        return console.log("cero")
    } else {
        return console.log("positivo")
    }
}
numeroPosNeg(-5)

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
function parImpar(num){
    if(num%2==0){
        return console.log(` ${num} es par`)
    } else{
        return console.log(` ${num} es impar`)
    }
}
parImpar(7)

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
function parImparUsuario(){
    let num=parseInt(prompt(`ingrese un número`))
    if(num%2==0){
        return console.log(` ${num} es par`)
    } else{
        return console.log(` ${num} es impar`)
    }
}
parImparUsuario(7)

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
function numeroPosNegUsuario(){
    let num=parseInt(prompt(`ingrese un Numero`))
    if(num<0){
        return console.log("negativo")
    } else if(num===0){
        return console.log("cero")
    } else {
        return console.log("positivo")
    }
}
numeroPosNegUsuario()

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
function dosNumeros(){
    let num1=parseInt(prompt(`ingrse un Numero`))
    let num2= parseInt(prompt(`ingrese otro numero`))
    let mayor=num1>num2
    mayor ? console.log(` el numero mayor es ${num1}`): console.log(`el numero mayor es ${num2}`)
}
dosNumeros()

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
function password(){
    let contrasenia=prompt(`por favor ingrese su contraseña`)

}

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
function calficacion(){
    let nota=parseInt(prompt(`ingrese su calificacion`))
    if (nota>=70){
        console.log(`Esta aprobado`)
    }else{
        console.log("desaprobado")
    }
}

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
function palindromo(){
    let palabra= prompt(`ingrese para verificar si es palindromo`)
    let palabraInvertida= palabra.split("").reverse().join("")
    if (palabra===palabraInvertida){
        console.log(`${palabra} es un palindromo`)
    }else{
        console.log(`${palabra} no es un palindromo`)
    }

}
palindromo()

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
let vocalConsonante = () => {
    let letra=prompt(`ingrese una letra`)
    if(letra===`a`|| letra===`e`|| letra===`i`|| letra===`o`|| letra===`u`){
        console.log(`la letra ingresada es una vocal`)
    }else{
        console.log(`la letra ingresada es una consonante`)
    }
}
vocalConsonante()

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
let diaSemana = ()=> {
    let num=parseInt(prompt(`ingrese un numero del 1 al 7`))
    if(num==1){
        console.log(`Lunes`)
    }else if(num==2){
        console.log(`Martes`)
    }else if(num==3){
        console.log(`Miercoles`)
    }else if(num==4){
        console.log(`Jueves`)
    }else if(num==5){
        console.log(`Viernes`)
    }else if(num==6){
        console.log(`Sabado`)
    }else if(num==7){
        console.log(`Domingo`)
    }else{
        console.log(`debe ingresar un numero del 1 al 7`)
    }
}
diaSemana()

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
let numPrimo= () =>{
    let num= parseInt(prompt(`ingrese un número`))
    if(num==2 || num==3 || num== 5 || num==7 || num==-2 || num==-3 || num== -5 || num==-7){
        console.log(`es primo`)
    }else if(num%2!=0 && num&3!=0 && num%5!=0 && num&7!=0){
        console.log(`Es Primo`)
    }else {
        console.log(`NO es Primo`)
    }
}
numPrimo()
// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
let edad= ()=>{
    let edad=parseInt("ingrese su edad")
    if (edad>=18){
        console.log(`es mayor de edad`)
    }else{
        console.log(`es Menor de edad`)
    }
}
edad()

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
let suma100= ()=>{
    let num1=parseInt(prompt(`ingrese un numero`))
    let num2=parseInt(prompt(`ingrese otro numero`))
    if (num1+num2==100){
        console.log(`la suma de ${num1} y ${num2} es 100`)
    }else if (num1+num2<100){
        console.log(`la suma de ${num1} y ${num2} es menor a 100`)
    }else{
        console.log(`la suma de ${num1} y ${num2} es mayor a 100`)
    }
}
suma100()

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
let mayorTres= () => {
    let num1=parseInt(prompt(`ingrese un numero`))
    let num2=parseInt(prompt(`ingrese otro numero`))
    let num3=parseInt(prompt(`ingrese un tercer numero`))
    const arrayNumeros=[num1,num2,num3]
    let resultado=Math.max(...arrayNumeros)
    console.log(`el mayor numero es: ${resultado}`)
}
mayorTres()
// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
let mayusMinus= ()=>{
    let letra = prompt("Ingrese una letra Mayuscula o Minuscula");
    if (letra.length === 1) {
        let codigoNum = letra.charCodeAt(0);
        if (codigoNum >= 65 && codigoNum <= 90) {
        console.log("La letra ingresada es mayúscula");
        } else if (codigoNum >= 97 && codigoNum <= 122) {
        console.log("La letra ingresada es minúscula");
        } else {
        console.log("No es una letra");
        }
    } else {
    console.log("ingrese solo una letra");
    }
}
mayusMinus()

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
let FizzBuzz=(num)=>{
    if(num%3==0 && num%5 ==0){
        console.log(`FizzBuzz`)
    }else if(num%5==0){
        console.log(`Buzz`)
    }else if(num%3==0){
        console.log(`Fizz`)
    }else{
        console.log(num)
    }
}
FizzBuzz(15)

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios
let numPerfecto= ()=>{
    let num=parseInt(prompt(`ingrese un número`))
    

}

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
