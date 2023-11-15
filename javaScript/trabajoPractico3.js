//Tareas
// 1- Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
function ejercicio1(num1 , num2){
    console.log("El resultado de la resta es: ",  num1-num2);
}
ejercicio1(10,5);


// 2 -Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
function ejercicio2(){
    let variableA = 5;
    console.log("El resultado de la suma es: ", variableA + 10);
}
ejercicio2();

// 3- Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
function ejercicio3(){
    let palabra1 = "20" ;
    let palabra2 = "23";
    console.log(palabra1 + palabra2);
}
ejercicio3();

// 4- Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
function ejercicio4(){
    let verdadero = true;
    let falso = false;
    let resultado = (verdadero === falso);
    console.log(resultado);
}
ejercicio4();

// 5- Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
function ejercicio5(){
    let verdadero = true;
    let falso = false;
    let resultado = (verdadero !== falso);
    console.log(resultado);
}

// 6-  Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
function ejercicio6(){
    let numero1 = 10;
    let numero2 = 15;
    if(numero1>numero2){
        console.log("El numero 1 es mayor");
    }
    else{
        console.log("El numero 2 es mayor");
    }
}
ejercicio6();
// 7- Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
function ejercicio7(palabra){
    let calcularCantidadPalabras = palabra.length;
    console.log("La palabra ingresada tiene ", calcularCantidadPalabras, " caracteres");
}
ejercicio7("Axeeeel");
// 8- Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
function ejercicio8(numero){
    if(numero>0){
        console.log("Positivo");
    }
    else if(numero<0){
        console.log("Negativo")
    }
    else{
        console.log("Cero");
    }
}
ejercicio8(5);
// 9 - Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
function ejercicio9(numero){
    if(numero %2 === 0){
        console.log("Par");
    }
    else{
        console.log("Impar");
    }
}
ejercicio9(2);
//10 - Crear un programa que pida al usuario un número y luego muestre si es par o impar.
function ejercicio10(){
    let numero = parseInt(prompt("Ingrese un numero: "));
    if(numero %2 === 0){
        console.log("Par");
    }
    else{
        console.log("Impar");
    }
}
ejercicio10();
//11 - Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
function ejercicio11(){
    let numero = parseInt(prompt("Ingrese un numero: "));
    if(numero>0){
        console.log("Positivo");
    }
    else if(numero<0){
        console.log("Negativo")
    }
    else{
        console.log("Cero");
    }
}
ejercicio11();
// 12- Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
function ejercicio12(){
    let numero1 = parseInt(prompt("Ingrese un numero: "));
    let numero2 = parseInt(prompt("Ingrese un numero: "));
    if(numero1 > numero2){
        console.log(numero1);
    }
    else{
        console.log(numero2);
    }
}

// 13-  Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
function ejercicio13(){
    let caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let contrasena = prompt("Ingrese una contraseña: ");
    if(contrasena.length < 8){
        console.log("La contraseña debe tener al menos 8 caracteres");
    } else if(!caracteresEspeciales.test(contrasena)){
        console.log("La contraseña debe contener al menos un carácter especial");
    } else {
        console.log("La contraseña es válida");
    }
}
ejercicio13();
// 14-  Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
function ejercicio14(){
    let calificacion = prompt("Ingrese una calificacion: ");
    if(calificacion>=70){
        console.log("Aprobado");
    }
    else{
        console.log("Desaprobado");
    }
}
ejercicio14();
// 15- Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
function ejercicio15(){
    let cadenaTexto = prompt("Ingrese una palabra: ")
    cadenaTexto = cadenaTexto.toLowerCase().replace(/ /g,'');

    let cadenaAlReves = cadena.split('').reverse().join('');


    if (cadenaTexto === cadenaAlReves) {
        console.log("Es un palíndromo"); 
    } else {
        console.log("No es un palíndromo");
    }
}
ejercicio15("Reconocer");
// 16-  Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
function ejercicio16(){
    let letra = prompt("Ingrese una letra: ");
    letra = letra.toLowerCase();
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log("Es una vocal");
    } else if (letra >= 'a' && letra <= 'z') { 
        console.log("Es una consonante");
    } else {
        console.log("No es una letra válida");
    }
}
ejercicio16("a");

// 17- Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
function ejercicio17(){
    let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
    ];
    let numero = prompt("Ingrese un numero: ");
    if (numero >= 1 && numero <= 7) {
        return (
            numero === 1 ? "Domingo" :
            numero === 2 ? "Lunes" :
            numero === 3 ? "Martes" :
            numero === 4 ? "Miércoles" :
            numero === 5 ? "Jueves" :
            numero === 6 ? "Viernes" :
            "Sábado"
        );
    } else {
        return "Número inválido, por favor ingresa un número del 1 al 7";
    }

}
ejercicio17();
// 18- Crear un programa que pida al usuario un número y luego muestre si es primo o no.
function ejercicio18(){
    let numero = parseInt(prompt("Ingrese un numero: "));
    if (numero <= 2) {
        return (numero === 2) ? "Es primo" : "No es primo"; 
    }
    
    if (numero % divisor === 0) {
        return (numero === divisor) ? "Es primo" : "No es primo"; 
    }

    return ejercicio18(numero, divisor + 1); 

}
ejercicio18();
// 19- Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
function ejercicio19(){
    let edadUsuario = parseInt(prompt("Ingrese su edad: "));
    if(edadUsuario >= 18){
        console.log("Mayor de edad"); 
    }
    else{
         console.log("Menor de edad" );
    }
}
ejercicio19();
// 20- Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
function ejercicio20(){
    let numero1 = parseInt(prompt("Ingrese un numero: "));
    let numero2 = parseInt(prompt("Ingrese su numero: "));
    suma = numero1 + numero2;
    if( suma > 100 ){
        console.log("La suma es mayor a 100");
    }
    else if( suma < 100){
        console.log("La suma es menor a 100"); 
    }
    else{
        console.log("La suma es igual a 100"); 
    }
}
ejercicio20();
// 21- Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
function ejercicio21(){
    let numero1 = parseInt(prompt("Ingrese un numero: "));
    let numero2 = parseInt(prompt("Ingrese un numero: "));
    let numero3 = parseInt(prompt("Ingrese un numero: "));

    if(numero1 >= numero2 && numero1 >= numero3){
        console.log("El mayor es numero 1 con el valor: ", numero1);
    }
    else if(numero2 >= numero1 && numero2 >= numero3){
        console.log("El mayor es numero 2 con el valor: ", numero2);
    }
    else{
        console.log("El mayor es numero 3 con el valor: ", numero3);
    }
}
ejercicio21();
// 22- Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
function ejercicio22(){
    let letra = prompt("Ingrese una letra: ");
    if(letra >= 'A' && letra <= 'Z'){
        console.log("Es una letra Mayuscula");
    }
    else if(letra >= 'a' && letra <= 'z'){
        console.log("Es una letra minuscula");
    }
    else{
        console.log("No es una letra valida");
    }
}
ejercicio22();

// 23- Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
function ejercicio23(numero){
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("FizzBuzz") ;
    } else if (numero % 3 === 0) {
        return console.log("Fizz");
    } else if (numero % 5 === 0) {
        return console.log("Buzz");
    } else {
        console.log(numero);
    }
}
ejercicio23(20);

// 24- Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
function ejercicio24(){
    
}

// 25- Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// 26- Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
