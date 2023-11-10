//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
let suma = 12 + 7
console.log(suma)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
let numero1 = 2
let numero2 = 2
console.log(numero1==numero2)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
let numero3 = 2
let numero4 = 5
console.log(numero3!=numero4)

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
let numero5 = 1
numero5++
numero5++
numero5++
numero5++
numero5++
console.log(numero5)

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let numero6 = 10
numero6--
numero6--
numero6--
console.log(numero6)

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
let texto1 = "hola soy un"
console.log(texto1 + " texto")

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
let variable1 = true
let variable2 = false
let comparacion = variable1 && variable2
console.log(comparacion)

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
let variable3 = true
let variable4 = false
let comparacion1 = variable3 || variable4
console.log(comparacion1)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let numero7 = 25
console.log(numero7 > 20)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let numero8 = 30
console.log(numero8 <= 22)

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
let numUser = prompt("Ingresa un numero")
console.log(numUser)

// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
let nameUser = prompt("Ingresa un nombre")
console.log(nameUser)

// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
let numero9 = parseInt(prompt("ingrese el primer numero para la suma"))
let numero10 = parseInt(prompt("ingrese el segundo numero para la suma"))
let resultado = numero9 + numero10
document.write(resultado)