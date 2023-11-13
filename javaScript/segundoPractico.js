    //Practico Numero 2

//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

let num1 = 5
let num2 = 8

let resultado = num1 + num2
console.log("El resultado de la suma entre los numeros es: " + resultado)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.

let resultado2 = (num1 == num2) 
console.log("La comparación es: " + resultado2)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.

let resultado3 = (num1 != num2) 
console.log("La comparación es: " + resultado3)

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.

console.log("El numero sin incrementar es: " + num1)
let resultado5 = num1
resultado5 += 5
console.log("El numero incrementado en 5 es: " + resultado5)

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.

console.log("El numero sin disminuir es: " + num1)
let resultado6 = num1
resultado6 -= 3
console.log("El numero disminuido en 3 es: " + resultado6)

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.

let apellido = "Avalos"
let nombreCompleto = "Jorge" + " " + apellido
console.log("Hola mi nombre es: " + nombreCompleto)

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.

let booleanos = resultado2 && resultado3
console.log("La comparación (AND) de dos variables con valores booleanos diferentes es: " + booleanos)

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.

let booleanos2 = resultado2 || resultado3
console.log("La comparación (OR) de dos variables con valores booleanos diferentes es: " + booleanos2)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let mayor = num1 > num2
console.log("El resultado a>b es: " + mayor)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let menorOigual = num1 < num2
console.log("El resultado a<b es: " + menorOigual)

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.

let valor1 =prompt("Ingrese un numero: ")
console.log(valor1)

// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.

let nombre =prompt("Ingrese su nombre: ")
console.log(nombre)

// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.

let primerNumero = prompt("Ingrese el primer numero: ")
let segundoNumero = prompt("Ingrese el segundo numero: ")

let resultado7 = parseInt(primerNumero) + parseInt(segundoNumero)
document.write("El resultado de la suma de los numeros ingresado es: " + resultado7)