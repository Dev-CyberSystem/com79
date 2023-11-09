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



                            //RESOLUCIONES

//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

let num1 = 1
let num2 = 2
let resultado = num1 + num2
console.log("Ejercicio1)",resultado)                    


// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.

let variable1 = 6
let variable2 = 7

console.log("Ejercicio2)",variable1==variable2)         //Otorga como resultado "false" debido a que no son numeros iguales.



// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.

let diferente1 = "hola"
let diferente2 = "chau"

console.log("Ejercicio3)",diferente1!=diferente2)       //Otorga como resultado "false" al ser cadenas distintas.



// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.

let incremento = 0
console.log("Ejercicio4)",incremento+5)                 



// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.

let decremento = 3
console.log("Ejercicio5)",decremento-3)                 



// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.

let cadena1 = "Primera cadena"
console.log("Ejercicio6)",cadena1+". Soy la segunda cadena") 



// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.

let booleano1 = true
let booleano2 = false

console.log("Ejercicio7)",booleano1 && booleano2)



// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.


let booleano3 = false
let booleano4 = true

console.log("Ejercicio8)",booleano3 || booleano4)


// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let variable3 = 10

console.log("Ejercicio9)",variable3>9)



// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let variable4 = 222

console.log("Ejercicio10)",variable4<=221)



// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.

let variable5 = prompt("Digita un numero")

console.log("Ejercicio11)",variable5)


// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.

let nombre = prompt ("Digite su nombre")

console.log("Ejercicio11)",nombre)



// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.

let numero1 = parseInt(prompt ("Digite el primer numero"))
// let numero2 = parseInt(prompt ("Digite el segundo numero"))
let numero2 = prompt ("Digite el segundo numero")


let suma = numero1+parseIntnumero2          //Utilizo el parseInt para que el resultado sea una op matematica y no una concatenacion de caracteres.

console.log("Ejercicio12)",suma)