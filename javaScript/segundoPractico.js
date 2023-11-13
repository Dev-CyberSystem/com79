  //Practico numero 2
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

//RESOLUCION:

//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
let num1 = 5
let num2 = 3

let suma = num1 + num2
console.log("El resultado de la suma es: "+suma)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.

let igualdad = num1 == num2
console.log("El resultado de la igualdad es: "+igualdad)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
let desigualdad = num1 != num2
console.log("El resultado de la desigualdad es: "+desigualdad)

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
let incremento = 10
incremento +=5

console.log("La variable incrementada en 5 da como resultado: "+incremento)

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let decremento = 20
decremento -=3

console.log("La variable decrementada en 3 da como resultado: "+decremento)

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
 let textfinal = "no se olviden de tomar aguita"
 let cadena = "Hola bienvenidos al segundo practico de JS" + " " +textfinal

 console.log(cadena)

 // Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
 let verdadero = true
 let falso = false

 let booleanos = verdadero && falso
 console.log(booleanos)

 // Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
 let booleanos2 = verdadero || falso
 console.log(booleanos2)

 // Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let num3 = 6
let mayor = num1 > num3

console.log(mayor)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let menor = num1 <= num3

console.log(menor)

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
let valor = prompt("Ingrese un numero")
console.log("El numero ingresado es: "+valor)

// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
let nombre = prompt("Ingrese su nombre")
console.log("Bienvenido: "+nombre)

// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
let valor1 = prompt("Ingrese el primer numero")
let valor2 = prompt("Ingrese el segundo numero")

let resultado = parseInt(valor1) + parseInt(valor2)

document.write("El resultado de la suma es: "+resultado)


