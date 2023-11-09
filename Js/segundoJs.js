var nombre1 = "Pity"
var nombre2 = "LucasPratto"

console.log(nombre1);

let apellido1 = "Alario"

function prueba()
{
    let apellido3 = "Driussi"
    console.log(apellido3);
}
prueba()


const edad = 25 // const es una variable global
const PI = 3.14

// tipos de datos

// string --> cadena de caracteres

let nombre = "Matias"
let apellido = 'Paz'
let club = `River plate`
let club2 = `River Plate, formacion ${nombre}`
let saludo = `Hola ${nombre} ${apellido} como estas`

let bienvenida = "Hola " + nombre + " " + apellido1 + " como estas?"
console.log(saludo)
console.log(bienvenida);
console.log("Hola", nombre, apellido1)

// number --> numeros

let edad4 = "25"
let suma = edad4 + "5"
console.log(suma)
console.log(edad)

let anios = prompt("Ingresá tus años")

// booleanos --> true o false

let numero1 = 10
let num2 = 20
let resultado = numero1 < num2 // sentencia

console.log(resultado)

// arrays --> arreglos

let numeros = [1,2,3,4,5,6,7,8,9]
let variados = [1, "hola", true, 4, 5, null]

//Objetos --> objetos
let persona = {
    nombre: "Enzo",
    apellido: "Perez",
    edad: 35,
    direcciones: {
        calle: "Av. Libertador",
        num: 2132
    },
    funciones: function(){
        return "Hola"
    }
}

// Operadores aritmeticos
10 + 2 // suma
10 - 2 // resta
10 * 2 // multi
10 / 2 // div
10 % 2 // modulo

let incremento = 20
incremento++ // incremento en 1
incremento += 5 // incremento en 5

// operadores de comparación
10 == 10 // igualdad
10 === 10 // igualdad estricta // true porque taambien se compara el tipo de dato
10 === "10" // false
10 == "10" // true
10 != 10 // desigualdad // false
10 !== 10 // desigualdad estricta // false
10 > 10 // mayor que
10 < 10 // menor que
10 >= 11 // mayor o igual que // false
11 <= 11 // menor o igual que // true

// operadores logicos

//&& and 
//|| or

if(10 && 15) // si o si  tiene que ser verdadero
{
    console.log("Hola")
}
if(10 || 15)
{
    console.log("Hola") // si alguno tiene que ser verdadero
}

//Metodos Strings
let texto = "Hola mundo"

//Obtner longitud
let longitud = texto.length
console.log(longitud)
// obtener posicion --  empieza de la posicion 0

let posicion = texto.indexOf("mundo") // probar con caracteres

console.log(posicion)

let mayuscula = prompt("Ingresa tu nombre").toUpperCase()

let minuscula = prompt("Ingresa tu nombre").toLowerCase()
console.log(mayuscula)
console.log(minuscula)

// reemplazar

let reemplazo = texto.replace("Hola", "Chau")
let subcadena =  texto.slice(0,6)
console.log(reemplazo)
console.log(subcadena)

let texto2 =  "River, Racing, Independiente, Atletico Tucuman"
let canchas =  texto2.split(",")
let texto3 =  "River-Racing-Independiente-Atletico Tucuman"
let cancha1 =  texto2.split("-")
console.log(canchas)
console.log(cancha1)

//Quitarle los espacios vacios

let texto4 = prompt("Ingresa tu nombre").trim()
console.log(texto4)

// verificar si tenemos una palabra
let incluye = texto.includes("Holaaaa")
console.log(incluye)
//parseInt() --> convierte a un string en un numero
let entero = parseInt("10")
let entero2 = parseInt("20ABC") // no te toma los numeros consiguiente a las letras
console.log(entero2)

//parseFloat()  --> convierte un string en un float

let floa =  parseFloat("17.5ASDCF65") // no te toma los numeros consiguiente a las letras
console.log(floa)