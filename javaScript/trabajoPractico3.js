/* // Autor: Fernández Cristian Javier
// Trabajo Practico N° 3
// Comisión 79i 
// Mentores: Diego Olmi - Francisco Iturburu
// Año: 2023

//1- Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
let num1 = 1599;
let num2 = 234;
function resta(a,b){
    let resultadoResta = a - b;
    console.log("El resultado de la resta es:",resultadoResta);
}
resta(num1,num2);

//2- Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

function sumaSimple(){
    let num3 = 5;
    let resultadoSuma = num3 + 10;
    console.log("El resultado de la suma es:",resultadoSuma);
}
sumaSimple();

//3- Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

function concatenarDosString(){
    let string1 ="Javascript es un" ;
    let string2 = "lenguaje de programación de alto nivel.";
    let concatenarString= string1 + " "+string2
    console.log(concatenarString);
}
concatenarDosString();
   
//4- Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
function compararBooleanos(){
    let bool1 =true ;
    let bool2 = true;
    if(bool1==bool2){
    console.log("La dos variables con valores booleanos son iguales");
    }
    else{
        console.log("La dos variables con valores booleanos son distintas");
    }
}
compararBooleanos();
        
//5- Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
function compararBooleanos2(){
    let bool3 =false ;
    let bool4 = true;
    if(bool3!==bool4){
    console.log("La dos variables con valores booleanos son distintas");
    }
    else{
        console.log("La dos variables con valores booleanos son iguales");
    }
}
compararBooleanos2();

//6- Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
function compararDosNumeros(){
    let num3 = 1599;
    let num4 = 234;
    if(num3>num4){
    console.log("El primer numero es mayor");
    }
    else{
        console.log("El numero es menor");
    }
}
compararDosNumeros();

//7- Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.

function contarPalabrasFrase(){
    let string3 = prompt("Ingrese la frase que desee contar las palabras que contiene");
    let arrayDePalabras= string3.split(" ");
   // console.log(arrayDePalabras);
    console.log("La cantidad de palabras de la frase ingresada es: ",arrayDePalabras.length);
}
contarPalabrasFrase();

//8- Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

let num5 = -1;
let c;
function numEs(c){
    if(c>0) {
        console.log("El numero es: Positivo")
    }  else if (c<0) {
        console.log("El numero es: Negativo")
    } else {
        console.log("El numero es: Cero")
   
    }
}
numEs(num5);

//9- Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

let num6 = 4;
let param;
function esPar(param){
    let resto = param % 2;
    if(resto==0) {
        console.log("El numero es: Par")
    } else {
        console.log("El numero es: ImPar")
    }
}
esPar(num6);

//10- Crear un programa que pida al usuario un número y luego muestre si es par o impar.
function esPar(){
    let num7 =parseInt( prompt("Ingrese el numero a procesar"));
    let num8 = num7 % 2;
    if(num8==0) {
        console.log("El numero ingresado es: Par")
    } else {
        console.log("El numero ingresado es: Impar")
    }
}
esPar();

//11- Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
function numEs2(){
    let num55 =parseInt(prompt("ingrese el numero:"));
    if(num55>0) {
        console.log("El numero es: Positivo")
    }  else if (num55<0) {
        console.log("El numero es: Negativo")
    } else {
        console.log("El numero es: Cero")
   
    }
}
numEs2();

//12- Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
function esMayor(){
    let num9 =parseInt(prompt("ingrese el numero:"));
    let num10 =parseInt(prompt("ingrese el numero:"));
    if(num9>num10) {
        console.log("El numero "+num9+" es mayor")
    } else if (num10>num9) {
        console.log("El numero "+num9+" es mayor")        
    }else{
        console.log("los numeros ingresados son iguales")

    }
}
esMayor();

//13-  Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.


function validarContrasena() {
    
    let contrasenaUsuario = prompt("Introduzca la contraseña a validar:");
    let longitudMin = 12;
    let longitudMax = 25;
    let contieneCaracterEspecial = /[¡!¿#$%^&?@°*]/.test(contrasenaUsuario);

    if (contrasenaUsuario.length >= longitudMin &&contrasenaUsuario.length <= longitudMax &&contieneCaracterEspecial ) {
        alert( "La contraseña es valida" );
        console.log("la contraseña valida");
    } else {
        console.log("La contraseña no es válida. Debe tener entre 12 -s 25 caracteres y contener al menos un carácter especial.");
        alert("La contraseña no es válida. Debe tener entre 12 -s 25 caracteres y contener al menos un carácter especial.");
    }
}
validarContrasena();

//14- Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

function clasificar() {
    
    let nota = parseInt(prompt("Introduzca la nota a clasificar:"));
     if (nota >= 70) {
        alert( "Estas aprobado" );
        console.log("Estas aprobado");
    } else {
        console.log("Estas desaprobado");
        alert("Estas desaprobado");
    }
}
clasificar();

//15- Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

function esPalindromo2(cadena) {
    var cadenaReversa = cadena.split('').reverse().join('');
    if (cadena === cadenaReversa) {
        console.log("Es un palindromo");
        return "Es un palíndromo";
    } else {
        return "No es un palíndromo";
    }
}
esPalindromo2(palabra=prompt("ingrese la palabra a procesar"));

//16- Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
function clasificarletra() {
    
    let letra = prompt("Introduzca una letra:");
    let c = /[aeiouAEIOU]/.test(letra);
    if (c==true) {
        alert( "Es vocal" );
    } else {
        alert("Es consonante");
    }
}
clasificarletra();

//17-  Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

function diaSemana() {
let nroDia = parseInt(prompt("ingrese el numero "));
switch (nroDia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
        console.log("Martes");
        break;
        
  case 3:
        console.log("Miercoles");
        break;
  case 4:
        console.log("Jueves");
        break;
  case 5:
        console.log("Viernes");
        break;
  case 6:
        console.log("Sabado");
        break;
  case 7:
        console.log("Domingo");
        break;
          case "1":
    console.log("Lunes");
    break;
    default:
        console.log("INGRESE UN NRO VALIDO, ENTRE 1 AL 7");
}
}
diaSemana();


// 19) Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

function esmayorDeEdad() {
    let edad = parseInt(prompt("ingrese su edad:"));
    if (edad >= 18) {
        console.log("es mayor de edad");
    }
    else {
        console.log("es menor de edad");
    }
}
esmayorDeEdad();

//20- Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.


function sumaDosNumeros() {
    let num11 = parseInt(prompt("ingrese el 1° numero:"));
    let num12 = parseInt(prompt("ingrese el 2° numero:"));

    let resultadoSuma2 = num11 + num12;
    if (resultadoSuma2 > 100) {
        console.log("la suma de los dos numeros ingresados es mayor a 100");
    }
    else if (resultadoSuma2 < 100) {
        console.log("la suma de los dos numeros ingresados es menor a 100");
    }
    
    else if (resultadoSuma2 == 100) {
        console.log("la suma de los dos numeros ingresados es igual a 100");

    }

}
sumaDosNumeros();

//21- Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

function compararTresNumeros() {
    let num13 = parseInt(prompt("ingrese el 1° numero:"));
    let num14 = parseInt(prompt("ingrese el 2° numero:"));
    let num15 = parseInt(prompt("ingrese el 3° numero:"));

    if (num13>num14 && num13>num15) {
        console.log("El Mayor de los tres numeros ingresados es: "+num13);
    }
    else if (num14>num13 && num14>num15) {
        console.log("El Mayor de los tres numeros ingresados es: "+num14);
    }
    
    else {
        console.log("El Mayor de los tres numeros ingresados es: "+num15);
    }

}
compararTresNumeros();

//22- Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

function EsMayusculaOMinuscula() {
    let letra = prompt("ingrese una letra:");
    let letra2= letra.toLocaleLowerCase();
    let letra3=letra.toLocaleUpperCase();
    if (letra === letra2) {
        console.log("La letra ingresada es minuscula");
    }
    else if (letra === letra3 ) {
        console.log("La letra ingresada es mayuscula");
    }
}
EsMayusculaOMinuscula();
 

//Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

let numMes = parseInt(prompt("ingrese un nro de 1 al doce"))

function saberMes(numeroMes) {
    
    switch (numeroMes) {
        case 1:
            console.log("Ese nro corresponde al mes de Enero")
            break;
            case 2:
            console.log("Ese nro corresponde al mes de Febrero")
            break;
            case 3:
            console.log("Ese nro corresponde al mes de Marzo")
            break;
            case 4:
            console.log("Ese nro corresponde al mes de Abril")
            break;
            case 5:
            console.log("Ese nro corresponde al mes de Mayo")
            break;
            case 6:
            console.log("Ese nro corresponde al mes de Junio")
            break;
            case 7:
            console.log("Ese nro corresponde al mes de Julio")
            break;
            case 8:
            console.log("Ese nro corresponde al mes de Agosto")
            break;
            case 9:
            console.log("Ese nro corresponde al mes de Septiembre")
            break;
            case 10:
            console.log("Ese nro corresponde al mes de Octubre")
            break;
            case 11:
            console.log("Ese nro corresponde al mes de Noviembre")
            break;
            case 12:
            console.log("Ese nro corresponde al mes de Diciembre")
            break;                   
            default:
            console.log("El nro ingresado no tiene ningun mes asociado")
            break;
                             
            }
                           
                }                        
saberMes(numMes);

//Imprimir los números pares del 2 al 20 en la consola.

function imprimirPares(){

    for (let i=2; i<=20; i++){

       if (i%2==0){
        console.log(i);
       } 
    }
}
imprimirPares();

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.

//let listaMayuscula=/[A-Z]/g;

function mostrarMayusculas() {
    let string4 = "HELLO"


    for (let i = 0; i < string4.length; i++) {
      if (string4[i] === string4[i].toUpperCase()) {
        console.log(string4[i]);
      }
    }
  }

  mostrarMayusculas();
  
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
  function function7() {
    let i = prompt("Ingresar numeros separados por coma: ");
    let numeros = i.split(/[,\s]+/).map(numero => parseInt(numero.trim(), 10));
    if (numeros.some(isNaN)) {
      console.log("Entrada invalida. Ingresar numeros");
    } else {
      let suma = 0;
      for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
      }
      console.log(`La suma de los numeros es ${suma}`);
    }
  }; 
  function7();
 */

  // Dado un array de números, escribir una función que retorne el número más grande del array.
   function maxNumeroArray() {
    let array = [-1000, 200, 40, 80, 10, 20000, 30];
    let maxNum = -Infinity;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maxNum) {
        maxNum = array[i];
      }
    }
    console.log(`El maximo numero es ${maxNum}`);
  };
  maxNumeroArray();
 