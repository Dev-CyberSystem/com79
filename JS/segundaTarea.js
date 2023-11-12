//Tarea 2:
//• Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

let resultado = 5 + 3
console.log("El resultado de la operación es: " + resultado)

//• Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.

let primerValor = 8
let segundoValor = 4

console.log("En las variables utilizadas sus valores son iguales: " + (primerValor == segundoValor))

//• Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.

let valorUno = 9
let valorDos = 2

console.log("En las variables utilizadas sus valores no son iguales: " + (valorUno != valorDos))

//• Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.

let numero = 20 

console.log("El resultado del incremento de la variable numero es: "+ (numero += 5))

//• Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.

let valor = 10

console.log("El resultado del decremento de la variable valor es: "+ (valor -= 3))

//• Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.

let miNombre = "Georgina"
let miEdad = 32

console.log(`Hola! mi nombre es ${miNombre} y tengo ${miEdad} años`)

//• Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.

let haceCalor = true
let deboLLevarCampera = false

let llevarCampera = haceCalor && deboLLevarCampera;
console.log("¿Debo llevar una campera? " + llevarCampera)

//• Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.

let deboEstudiar = true
let deboJugaralCandy = false

let estudiar = deboEstudiar || deboJugaralCandy
console.log("¿Debo estudiar? " + estudiar)

//• Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let datoNumerico = 13
console.log(`¿el número ${datoNumerico} es mayor que el numero 7?: ${datoNumerico > 7}`)

//• Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let valorNumerico = 4
console.log(`¿el número ${valorNumerico} es menor que el numero 17?: ${valorNumerico <= 17}`)

//• Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.

let nuevoIngreso = prompt ("Ingrese un número: ")
nuevoIngreso = parseInt(nuevoIngreso)

console.log("El numero ingresado es: " + (nuevoIngreso))

//• Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.

let nombreUsuario = prompt ("Ingrese su nombre: ")

console.log("El nombre ingresado es: " + (nombreUsuario))

/*• Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, 
luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.*/

let primerNum = prompt ("Ingrese el primer número para realizar la suma: ")
primerNum = parseInt(primerNum)

let segundoNum = prompt ("Ingrese el segundo número para realizar la suma: ")
segundoNum = parseInt(segundoNum)

let resultadoNum = primerNum + segundoNum
document.write("El resultado de la suma es: " + (resultadoNum));
