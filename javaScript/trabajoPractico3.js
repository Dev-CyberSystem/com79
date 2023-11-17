
// Autor: Fernández Cristian Javier
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
