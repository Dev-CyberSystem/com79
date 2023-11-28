// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
function diferencia(num1,num2){
    resta=num1-num2;
    console.log(resta);
}
diferencia(5,4);
// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
function suma(){
    let num3= 5;
    let suma= num3+10;
    console.log(suma);
}
suma();

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
function string(){
    let stringUno='Buenas ';
    let stringDos= 'tardes';
    stringFinal = stringUno + stringDos;
    console.log(stringFinal);
}
string();
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
function booleanos(){
    let booleanoUno=false;
    let booleanoDos=true;
    booleanoTres=booleanoUno == booleanoDos;
    console.log(booleanoTres);
}
booleanos();


// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
function booleanosDos(){
    let booleanoCuatro=false;
    let booleanoCinco=true;
    booleanoSeis=booleanoCuatro !== booleanoCinco;
    console.log(booleanoSeis);
}
booleanosDos();

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
function numeros(){
    let num200=200;
    let num1000=1000;
    let comparacion=num200>num1000;
    console.log(`Es ${comparacion} que el número ${num200} es mayor que ${num1000}`);
}
numeros();

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
function usuario(){
    let frase=prompt("Ingresa una frase");


}
//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
function parametro(numeroUno){
if(numeroUno>0){
    console.log (`positivo`) ;
} else if(numeroUno<0){
    console.log(`negativo`) ;
} else{
    console.log(`El numero es igual a 0`);
}
}
parametro(100);
//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

function pares(numeroDado){
    if (numeroDado % 2 === 0) {
        console.log(`${numeroDado} es par`);
      } else {
        console.log(`${numeroDado} es impar`);
      }
}
pares(20);
//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
function paresUsuario (){
    let numeroIngre=prompt("ingrese un numero:");
    if(numeroIngre% 2===0){
        console.log(`${numeroIngre} es par`)
    } else{
        console.log(`${numeroIngre} es impar`)
    }
}
paresUsuario();

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
function numeroPos(){
    let numeroIngrePos=prompt("Ingrese un numero: ");
    if(numeroIngrePos>0){
        console.log(`${numeroIngrePos} es positivo`) ;
    } else if(numeroIngrePos<0){
        console.log(`${numeroIngrePos} es negativo`) ;
    } else{
        console.log(`${numeroIngrePos} es 0`);
    }
    }
numeroPos();
// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
function numerosMay(){
    let numeroUnoMay=prompt("Ingresa el primer numero:");
    let numeroDosMay=prompt("Ingresa el segundo numero:");
    if(numeroUnoMay>numeroDosMay) {
    console.log(`${numeroUnoMay} es mayor que ${numeroDosMay}`);
}else if(numeroUnoMay<numeroDosMay) {
    console.log(`${numeroUnoMay} es menor que ${numeroDosMay}`);
}else{
    console.log(`${numeroUnoMay} es igual que ${numeroDosMay}`); 
}
}
numerosMay();
// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.










// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
function notas(){
    let notaIngresada = prompt("Ingrese la calificación obtenida:");
    if(notaIngresada>=70&&notaIngresada<=100){
        console.log(`Usted aprobó`);
    }else{
        console.log(`Usted no aprobó`)
    }
}
notas();







//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".








// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
function letra(){
    let letraAnalizar=prompt("Ingrese una letra:").toUpperCase();
    switch(letraAnalizar){
        case "A":
            console.log(`La letra ${letraAnalizar} es una vocal`);
        break;

        case "E":
            console.log(`La letra ${letraAnalizar} es una vocal`);
        break;

        case "I":
            console.log(`La letra ${letraAnalizar} es una vocal`);
        break;

        case "O":
            console.log(`La letra ${letraAnalizar} es una vocal`);
        break;

        case "U":
            console.log(`La letra ${letraAnalizar} es una vocal`);
        break;

        default:
            console.log('La letra ingresada no es una vocal');

    }
}
letra();

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
function diaDeSemana(){
    let diaIngresado=prompt("Ingrese un numero del 1 al 7: ");
    switch(diaIngresado){
        case "1":
            console.log(Lunes);
            break;
        case "2":
            console.log(Martes);
            break;
        case "3":
            console.log("Miercoles");
            break;
        case "4":
            console.log("Jueves");
            break;
        case"5":
        console.log("Viernes");
        break;
        case "6":
            console.log("Sabado");
            break;
        case "7":
            console.log("Domingo");
            break;
        default:
            console.log("El numero ingresado no corresponde a un dia de la semana");
    }
}
diaDeSemana();

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.










// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

function edad(){
    let edadIngresada = prompt("Ingrese su edad:");

    if(edadIngresada > 18){
        console.log("Usted es mayor de edad");
    } else if(edadIngresada < 18){
        console.log("Usted es menor de edad");
    } else if(edadIngresada===18){
        console.log("Usted tiene 18 años");
    } else{
        console.log("Usted no ingreso un valor valido");
    }
}
edad();



// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
function sumaNumeros(){
    let numUno=parseFloat(prompt("Ingrese el primer numero:"));
    let numDos=parseFloat(prompt("Ingrese el segundo numero:"));
    let sumaNum= numUno+numDos
    if(sumaNum<100){
        console.log("la suma de ambos numeros es menor a 100");
    } else if(sumaNum>100){
        console.log("la suma de ambos numeros es mayor a 100");
    } else if(sumaNum===100){
        console.log("La suma de ambos numeros es igual a 100");
    } else{
        console.log("usted no ingreso valores validos");
    }
}
sumaNumeros();









// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

function mayor(){
    let numero1 = parseFloat(prompt("Ingrese el primer numero:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo numero:"));
    let numero3 = parseFloat(prompt("Ingrese el tercer numero:"));

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        console.log("Por favor, ingrese números válidos.");
        return;
    }
    let resultadoNumMayor = Math.max(numero1, numero2, numero3);
}
mayor();









// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
function verificarLetra() {
 
    let letra = prompt("Ingrese una letra:");

    if (letra.length !== 1 || !(/[a-zA-Z]/).test(letra)) {
        console.log("Por favor, ingrese una única letra válida.");
        return;
    }

    if (letra === letra.toUpperCase()) {
        console.log("La letra ingresada es mayúscula.");
    } else {
        console.log("La letra ingresada es minúscula.");
    }
}

verificarLetra();


//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

function fizzOBuzz (){
    let numeroIngresado =parseFloat(prompt("Ingrese un numero"));
    let divisible3 = numeroIngresado%3
    let divisible5 = numeroIngresado%5
    if(divisible5 === 0 && divisible3 === 0){
        console.log("FizzBuzz");
    } else if(divisible5 === 0){
        console.log("Buzz");
    } else if (divisible3 === 0){
        console.log("Fizz");
    } else{
        console.log(`${numeroIngresado}`)
    }
}
fizzOBuzz();








// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

function esNumeroPerfecto(numero) {
    let sumaDivisores = 0;

    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    return sumaDivisores === numero;
}

function verificarNumeroPerfecto() {
    let numeroIngresado = parseInt(prompt("Ingrese un número:"));

    if (isNaN(numeroIngresado) || numeroIngresado <= 0) {
        console.log("Por favor, ingrese un número entero positivo.");
        return;
    }

    if (esNumeroPerfecto(numeroIngresado)) {
        console.log(`${numeroIngresado} es un número perfecto.`);
    } else {
        console.log(`${numeroIngresado} no es un número perfecto.`);
    }
}
verificarNumeroPerfecto();








// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.










// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
