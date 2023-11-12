// Ejercicio JS - Trabajo Practico 2
/* 1-  Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola. */ 
function ejercicio1(){
    var a = 5;
    var b = 10;
    var resultado =  a + b;
    console.log("El resultado de la suma es: " + resultado);
}

/* 2 - Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola. */
function ejercicio2(){
    var a = 5;
    var b = 10;
    var resultado = a == b ;
    console.log(resultado) ;
}

/* 3 -Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola. */
function ejercicio3(){
    var a = 5;
    var b = 10;
    var resultado = (a != b) ;
    console.log(resultado) ;
}

/* 4 -Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola. */
function ejercicio4(){
    var a = 20;
    a += 5 ;
    console.log(a);
}

/* 5-  Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola */ 
function ejercicio5(){
    var a = 20;
    a -= 3 ;
    console.log(a);
}

/* 6 -  Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.*/
function ejercicio6(){
    var cadenaCaracteres = "Hola soy Axel";
    cadenaCaracteres += "y tengo 23 años";
    console.log(cadenaCaracteres); 
}

/* 7- Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.. */
function ejercicio7(){
var A = true;
var B = false;
var resultado = A && B;
console.log(resultado);
}

/* 8 - Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola */
function ejercicio8(){
var A = true;
var B = false;
var resultado = A || B;
console.log(resultado);
}

/* 9 - Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola. */
function ejercicio9(){
    var A = 20;
    var B = 5;
    var resultado = A > B;
    console.log(resultado);
}

/* 10 - Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola */
function ejercicio10(){
    var A = 20;
    var B = 5;
    var resultado = A <= B;
    console.log(resultado);
}

/* 11 - Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola. */
function ejercicio11(){
    var numeroIngresado = prompt ("Ingrese un numero entero: ");
    var numeroConvertido = parseInt(numeroIngresado);
    console.log("El numero ingresado es: " + numeroConvertido);
}

/* 12- Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola. */
function ejercicio12(){
    var nombreIngresado = prompt("Ingresa tu nombre: ");
    console.log(nombreIngresado);
}

/* 13 - Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento. */
function ejercicio13(){
    var numeroA = parseFloat(prompt("Ingresa un numero: "));
    var numeroB = parseFloat(prompt("Ingresa otro numero: "));
    var resultado = numeroA + numeroB;
    console.log(resultado);
}