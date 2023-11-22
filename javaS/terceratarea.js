//Tareas
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
function restar(a,b){
    let resultado=a-b
    console.log(resultado)
}
restar(10,50)
// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
function sumadiez(){
    let numero=10
    let resultado=numero+10
    console.log(resultado)
}
sumadiez ()
// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
function stringyseconcatenen(){
    let string1=`lionel`
    let string2=`messi`
    let resultado=`el mejor del mundo es ${string1} ${string2}`
    console.log(resultado)
}
stringyseconcatenen()
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
function comparaciondebooleanos(){
    let booleanos1=true
    let booleanos2=true
    let resultado= booleanos1===booleanos2
    console.log(resultado)
}
comparaciondebooleanos()
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
function booleanosdiferentes(){
    let booleanos1=true
    let booleanos2=false
    let resultado= booleanos1!=booleanos2
    console.log(resultado)
}
booleanosdiferentes
// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
function numeromayor(){
    let numero1=10
    let numero2=1
    let resultado=numero1>numero2
    console.log(resultado)
}
numeromayor()
// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
function contadordetexto(){
    let palabra=prompt("ingrese su frase")
    let palabra2=palabra.split(" ")
    let resultado=palabra2.length
    console.log(resultado)
}
contadordetexto()
//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
function numerospn(x){
    if(x<0){
        return console.log("negativo")    
    } else if (x===0){
        return console.log("cero")
    } else {
        return console.log("positivo") 
    }
    }
    numerospn(-1)
//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
function numerospares(num){
    if(num%2==0){
        return console.log(` ${num} es par`)
    } else{
        return console.log(` ${num} es impar`)
    }
}
numerospares(21)
//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
function paresimpares(){
    let num=parseInt(prompt(`ingresar su numero`))
    if(num%2==0){
        return console.log(` ${num} es par`)
    }else{
        return console.log(` ${num} es impar`)
    }
}
paresimpares(21)
// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
function numerospn(x){
    let num=parseInt(prompt(`ingresar su numero`))
    if(x<0){
        return console.log("negativo")    
    } else if (x===0){
        return console.log("cero")
    } else {
        return console.log("positivo") 
    }
}
numerospn()
// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
function nummayores(){
    let num1=parseInt(prompt(`ingresar su primer numero`))
    let num2=parseInt(prompt(`ingresar su segundo numero`))
    let resultado=num1<num2
     console.log(`el numero mayor es ${num1}`), console.log(`el numero mayor es ${num2}`)
}
nummayores()
// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
function contraseña(){
    let contraseña=prompt(`ingresar contraseña`)
}
contraseña()
// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
function calificaciones(){
    let calificacion=parseInt(prompt(`ingresar calificacion`))
    if (calificacion>=70){
        console.log(`aprobadisimo crackkk`)
    } else{
        console.log(`desaprobado casi rey`)
    }
}
calificaciones()
//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
function cadena(){
    let cadena=parseInt(prompt(`ingresar palindromo`))
    let cadena2=palabra.split("").reverse().join("")
    if (cadena===cadena2){
        console.log(`${cadena} es un palindromo`)
    }else{
        console.log(`${cadena} no es un palindromo`)
    }
}
cadena()
// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
let letra=()=>{
    let letra1=prompt(`ingresar una letra`)
    if(letra===`a`||letra===`e`||letra===`i`||letra===`o`||letra===`u`){
        console.log(`es una consonante`)
    }
}
letra()
// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
let semana=()=>{
    let dia=parseInt(prompt(`ingrasar numero de 1 al 7`))
    if (dia==1){
        console.log(`lunes`)
    }else if(dia==2){
        console.log(`martes`)
    }else if(dia==3){
        console.log(`miercoles`)
    }else if(dia==4){
        console.log(`jueves`)
    }else if(dia==5){
        console.log(`viernes`)
    }else if(dia==6){
        console.log(`sabado`)
    }else if(dia==7){
        console.log(`domingo`)
    }else{
        console.log(`ingrese un numero del 1 al 7`)
    }
}
    semana()
// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
let primos= ()=>{
    let primos1=parseInt(prompt(`ingrasar numero`))
    
}
primos ()
// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
let edad= ()=>{
    let edad1=parseInt(prompt(`ingrasar edad`))
    if (edad>=18){
    console.log(`mayor de edad`)
    }else{
        console.log(`menor de edad`)
    }
}
edad()
// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
let suma= ()=>{
     let suma1=parseInt(prompt(`ingrese un numero`))
      let suma2=parseInt(prompt(`ingrese otro numero`))
       if (suma1+suma2==100){ console.log(`la suma de ${suma1} y ${suma2} es 100`)
     }else if (suma1+suma2<100){ console.log(`la suma de ${suma1} y ${suma2} es menor a 100`)
     }else{ console.log(`la suma de ${suma1} y ${suma2} es mayor a 100`)
     }
     }
      suma()
// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
let tres= ()=>{
    let tres1=parseInt(prompt(`ingrese un numero`))
    let tres2=parseInt(prompt(`ingrese un segundo numero`))
    let tres3=parseInt(prompt(`ingrese un tercer numero`))
    const numb=[tres1,tres2,tres3]
    let resultado=Math.max(...numb)
    console.log(`numero mayor es:${resultado}`)
}
tres()
// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
let letramaymin= ()=>{
    let letra=parseInt(prompt(`ingrese una letra`))
    
}
//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

