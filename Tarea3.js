
//Tareas
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.

let valor1 = parseInt(prompt("Digite el primer numero"))
let valor2 = parseInt(prompt("Digite el segundo numero"))

resta(valor1, valor2)

function resta(valor1, valor2) {
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

function concatenarString() {
    let cadena1 = prompt("Digite su primera cadena")
    let cadena2 = prompt("Digite su segunda cadena")

    console.log("La cadena 1 es: ", cadena1)
    console.log("La cadena 2 es: ", cadena2)
    console.log("La cadena concatenada es: ", cadena1 + "", cadena2)

}


// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

booleana();

function booleana() {
    let booleana1 = true
    let booleana2 = false
    if (booleana1 == booleana2) {
        console.log("Las variables son iguales")
    }
    else {
        console.log("Las variables son distintas")
    }
}



// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

booleana2();

function booleana2() {
    let booleana1 = true
    let booleana2 = false
    if (booleana1 != booleana2) {
        console.log("Las variables son distintas")
    }
    else {
        console.log("Las variables son iguales")
    }
}



// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

mayorDeUnNumero();

function mayorDeUnNumero() {
    let num1 = parseInt(prompt("Digite el primer valor"))
    let num2 = parseInt(prompt("Digite el segundo valor"))

    if (num1 > num2) {
        console.log(`El primer numero ingresado (${num1}) es mayor que el segundo (${num2})`)
    }
    else if (num2 > num1) {
        console.log(`El segundo numero ingresado (${num2}) es mayor que el primero (${num1})`)
    }
    else {
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

function signo() {
    let valor1 = parseInt(prompt("Digite el numero a analizar"))
    if (valor1 > 0) {
        console.log(`El numero ${valor1} es POSITIVO`)
    }
    else if (valor1 < 0) {
        console.log(`El numero ${valor1} es NEGATIVO`)
    }
    else if (valor1 == 0) {
        console.log(`El numero ${valor1} es IGUAL a 0`)

    }
}



//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es. 
//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
//Unifico dos consigas. (Resuelvo ambas en una sola funcion)

let par = parseInt(prompt("Digite el numero para saber su paridad"))

paridad(par);

function paridad(par) {

    // let resultado;

    if (par % 2 == 0) {
        return resultado = true;
    }
    else {
        return resultado = false;
    }
}

if (resultado == true) {
    console.log(`El numero ${par} es PAR`)
}
else {
    console.log(`El numero ${par} es IMPAR`)
}


// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

valorAbsoluto();

function valorAbsoluto() {
    let valor1 = parseInt(prompt("Digite el numero a analizar"))
    if (valor1 > 0) {
        console.log(`El numero ${valor1} es POSITIVO`)
    }
    else if (valor1 < 0) {
        console.log(`El numero ${valor1} es NEGATIVO`)
    }
    else if (valor1 == 0) {
        console.log(`El numero ${valor1} es IGUAL a 0`)

    }
}



// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

mayorNumero();

function mayorNumero() {
    let num1 = parseInt(prompt("Digite el primer valor"))
    let num2 = parseInt(prompt("Digite el segundo valor"))

    if (num1 > num2) {
        console.log(`El primer numero ingresado (${num1}) es mayor que el segundo (${num2})`)
    }
    else if (num2 > num1) {
        console.log(`El segundo numero ingresado (${num2}) es mayor que el primero (${num1})`)
    }
    else {
        console.log(`Los numeros (${num1})(${num2}) son iguales`)
    }

}



// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

let password = String(prompt(" Ingresa tu contraseña: "))
let patronEspecial = /[!@#$%^&*(),.?":{}|<>]/;

validando(password);

function validando(password) {

    if (password.length > 8 && patronEspecial.test(password)) {
        console.log("contrasenia segura")
    }
    else if (password.length < 8 || patronEspecial.test(password)) {
        console.log("contrasenia insegura")
    }
}


// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

aprobado();

function aprobado() {
    let nota = parseInt(promptf("Digite su nota"))

    if (nota >= 70) {
        console.log("Usted esta APROBADO con:", nota)
    }
    else {
        console.log("Usted esta Desaprobado con:", nota)
    }
}


//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

let cadena = String(prompt("Digite su frase"))
let reverse;

palindromo(cadena);

function palindromo(cadena) {
    cadena = cadena.toLowerCase()
    reverse = cadena.split("").reverse().join("") //Split me divide la cadena en una especie de array, luego reverse invierte el orden para ponerla al reves, y con .join unificamos todos los elementos
    if (cadena == reverse) {
        console.log("La cadena es palindromo")
    } else {
        console.log(reverse, cadena)
        console.log("La cadena no es palindromo")
    }
}


// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

let letra = String(prompt("Digite una letra"))
letra.toLowerCase

vocalConsonante(letra);

function vocalCosonante(letra) {
    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(`Usted digito ${letra} y es una vocal.`)
            break;
        default:
            console.log(`Usted digito ${letra} y es una consonante.`)
            break;
    }
}


// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

diaSemanal();

function diaSemanal() {
    let numeroDia = parseInt(prompt("Digite un numero para saber su dia correspondiente"))

    switch (numeroDia) {
        case 1:
            console.log(`Usted digito ${numeroDia} y corresponde al LUNES`)
            break;
        case 2:
            console.log(`Usted digito ${numeroDia} y corresponde al MARTES`)
            break;

        case 3:
            console.log(`Usted digito ${numeroDia} y corresponde al MIERCOLES`)
            break;
        case 4:
            console.log(`Usted digito ${numeroDia} y corresponde al JUEVES`)
            break;
        case 5:
            console.log(`Usted digito ${numeroDia} y corresponde al VIERNES`)
            break;
        case 6:
            console.log(`Usted digito ${numeroDia} y corresponde al SABADO`)
            break;
        case 7:
            console.log(`Usted digito ${numeroDia} y corresponde al DOMINGO`)
            break;
        default:
            console.log("Su numero no corresponde a ningun dia de la semana")
            break;

    }
}


// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

let numeroPrimo = prompt("Digite el numero a evaluar")

primo(numeroPrimo);

function primo(numeroPrimo) {
    if (numeroPrimo <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
        if (numeroPrimo % i === 0) {
            return false;
        }
    }
    return true;
}

if (primo == true) {
    console.log(`El numero [${numeroPrimo}] ES PRIMO`)
}
else {
    console.log(`El numero [${numeroPrimo}] NO ES PRIMO`)
}



// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

legalidad();

function legalidad() {
    let edad = parseInt(prompt("Digite su edad"))
    if (edad >= 18) {
        console.log(`La persona es MAYOR DE EDAD [${edad}]`)
    }
    else {
        console.log(`La persona es MENOR DE EDAD [${edad}]`)
    }
}


// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.


function comprobarSuma() {
    let numero1 = parseInt(prompt("Digite el primer numero"))
    let numero2 = parseInt(prompt("Digite el segundo numero"))

    let resultado = numero1 + numero2
    parseInt.resultado
    if (resultado > 100) {
        console.log(`El numero1 es:[${numero1}] `)
        console.log(`El numero2 es:[${numero2}] `)
        console.log(`La suma es MAYOR a 100 y es:[${resultado}] `)
    }
    else if (resultado < 100) {
        console.log(`El numero1 es:[${numero1}] `)
        console.log(`El numero2 es:[${numero2}] `)
        console.log(`La suma es MENOR a 100 y es:[${resultado}] `)
    }
    else if (resultado == 100) {
        console.log(`El numero1 es:[${numero1}] `)
        console.log(`El numero2 es:[${numero2}] `)
        console.log("La suma es IGUAL a 100")
    }

}

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

mayorDeTres();

function mayorDeTres() {
    let numero1 = parseInt(prompt("Digite el primer numero"))
    let numero2 = parseInt(prompt("Digite el primer numero"))
    let numero3 = parseInt(prompt("Digite el primer numero"))

    if ((numero1 > numero2) && (numero1 > numero3)) {
        console.log("EL NUMERO1 ES EL MAYOR")
        console.log(`El numero1 es:[${numero1}] `)
        console.log(`El numero2 es:[${numero2}] `)
        console.log(`El numero3 es:[${numero3}] `)
    } else if ((numero2 > numero1) && (numero2 > numero3)) {
        console.log("EL NUMERO2 ES EL MAYOR")
        console.log(`El numero1 es:[${numero1}] `)
        console.log(`El numero2 es:[${numero2}] `)
        console.log(`El numero3 es:[${numero3}] `)
    } else if ((numero3 > numero1) && (numero3 > numero2)) {
        console.log("EL NUMERO3 ES EL MAYOR")
        console.log(`El numero1 es:[${numero1}] `)
        console.log(`El numero2 es:[${numero2}] `)
        console.log(`El numero3 es:[${numero3}] `)
    }
}


// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.


mayusOminus();

function mayusOminus() {

    let letra = String(prompt("Digite una letra"))

    if (letra == letra.toUpperCase()) {
        console.log(`La letra ingresada es: [${letra}] y es MAYUSCULA`)
    }
    else if (letra == letra.toLowerCase()) {
        console.log(`La letra ingresada es: [${letra}] y es MINUSCULA`)
    }
}



//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

let valor4 = parseInt(prompt("Digite el numero"))

divisora(valor4);

function divisora(valor4) {
    if (valor4 % 3 == 0) {
        console.log("Fizz")
    } else if (valor4 % 5 == 0) {
        console.log("Buzz")
    } else if ((valor4 % 3 == 0) && (valor4 % 5 == 0)) {
        console.log("FizzBuzz")
    }
    else {
        console.log(`El numero es: [${valor4}]`)
    }
}


// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

function esNumeroPerfecto(numero) {
    var sumaDivisores = 0;

    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    if (sumaDivisores === numero) {
        return true;
    } else {
        return false;
    }
}


let numeroUsuario = prompt("Ingrese un número: ");
numeroUsuario = parseInt(numeroUsuario);


if (esNumeroPerfecto(numeroUsuario)) {
    console.log(numeroUsuario + " es un número perfecto.");
} else {
    console.log(numeroUsuario + " no es un número perfecto.");
}


// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.


function descomponerEnFactoresPrimos() {
    let numero = parseInt(prompt("Ingrese un número entero positivo:"));

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingrese un número entero positivo válido.");
        return;
    }

    function encontrarFactoresPrimos(num) {
        let factoresPrimos = [];
        for (let i = 2; i <= num; i++) {
            while (num % i === 0) {
                factoresPrimos.push(i);
                num = num / i;
            }
        }
        return factoresPrimos;
    }

    let factoresPrimos = encontrarFactoresPrimos(numero);

    alert("La descomposición en factores primos de " + numero + " es: " + factoresPrimos.join(", "));
}

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

function esFechaValida() {
    let dia = parseInt(prompt("Digite el día:"));
    let mes = parseInt(prompt("Digite el mes:"));
    let anio = parseInt(prompt("Digite el año:"));

    if (isNaN(dia) || isNaN(mes) || isNaN(anio) || mes < 1 || mes > 12 || dia < 1 || dia > diasEnMes(mes, anio)) {
        console.log("La fecha ingresada no es válida.");
    } else {
        console.log("La fecha ingresada es válida.");
    }
}

function diasEnMes(mes, anio) {
    return new Date(anio, mes, 0).getDate();
}