// var nombre = "LucasPratto"
// var nombre = "Pity"
// let apellido = "Martinez"
const PI = 3.1416;

// tipos de datos

// string --> cadena de caracteres
// let nombre = prompt("Ingresa tu nombre")
// let apellidos = prompt("Ingresa tu apellido")
// let club = `River Plate , formacion ${nombre}  `
// let saludo = `Hola ${nombre} ${apellidos} como estas`
// let bienvenida = "Hola " + nombre + " " + apellidos + " como estas"

// number --> numeros

let edad = 25;
let suma = edad + "5";
// let anios = prompt("Ingresá tus años");

// booleanos --> true o false

let numero1 = 10
let num2 = 20
let resultado = numero1 > num2 //sentencia
console.log(resultado)

// arrays --> arreglos

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let variado = [1, "hola", true, 4, 5, null]

// objetos --> objetos

let persona = {
    nombre: "Enzo",
    apellido: "Perez",
    edad: 35,
    direcciones: {
        calle: "Av. Libertador",
        numero: 1234
    },
    funciones:  function(){
        return "Hola"
    }
}

// operadores aritmeticos

10 + 2 // suma
10 - 2 // resta
10 * 2 // multiplicacion
10 / 2 // division
10 % 2 // modulo


let incremento = 20
incremento++ // incremento en 1
incremento += 5 // incremento en 5

// operadores de comparacion

10 == 10 // igualdad
10 === 10 // igualdad estricta // true
10 === "10" // false
10 == "10" // true
10 != 10 // desigualdad // false
10 !== 10 // desigualdad estricta // false
10 !== "10" // true
10 > 10 // mayor que
10 < 10 // menor que
10 >= 11 // mayor o igual que // false
10 <= 11 // menor o igual que // true

// operadores logicos

// && and 
// || or

// if (10 && 15) { //Si o si tiene que ser verdadero
//     console.log("Hola")
// } 
// if (10 || 15) { // Si alguno es verdadero
//     console.log("Hola")
// }

// Metodos Strings

let texto = "Hola Mundo"

// obtener longitud

let longitud =  texto.length 

// obtener posicion

let posicion = texto.indexOf("m")

// let mayuscula = prompt("Ingresa tu nombre").toUpperCase()
// let minuscula = prompt("Ingresa tu nombre").toLowerCase()

// reemplazar
let reemplazo = texto.replace("Hola", "Chau")

//  Hola Mundo 
 // Obtener una subcadena
    let subcadena = texto.slice(0, 6) 
    //separar una cadena en un arreglo (array) con un delimitador

    let texto2 = "River-Racing-Independiente-Atletico"
    let canchas = texto2.split("-")

    //Quitarle los espacios vacios.

    // let texto3 = prompt("Ingresa tu nombre").trim()          
     //Verificar si tenemos una palabra

    let incluye = texto.includes("Holaaa")

    // parseInt() --> convierte un string a un numero
    let entero = parseInt("10")
    let entero2 = parseInt("20ABC")
    console.log(entero2)

    //parseFloat() --> convierte un string a un numero decimal

    let floa = parseFloat("55")

    console.log(floa)

    //Practico numero 2
//Quiz Javascript - Introducción
//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.