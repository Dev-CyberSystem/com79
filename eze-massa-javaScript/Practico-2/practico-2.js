//Practico numero 2
//Quiz Javascript - Introducción

//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
const numeroUno = 15
const numeroDos = 16
const suma = parseInt(numeroUno) + parseInt(numeroDos)
console.log(`El resultado de la suma es ${suma}`)
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
const edad = 17
const mayorDeEdad = 18
edad == mayorDeEdad ? console.log(`Eres mayor de edad`) : console.log(`Eres menor de edad`)
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
const numeroPensado = 10
const numeroSorteado = 15
numeroPensado != numeroSorteado
	? console.log(`El numero pensado no es el mismo`)
	: console.log(`El numero pensado es el mismo`)
// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
let inflacionNoviembre = 140
inflacionNoviembre++
inflacionNoviembre++
inflacionNoviembre++
inflacionNoviembre++
inflacionNoviembre++
console.log(`La inflación del mes de noviembre es de ${inflacionNoviembre}%`)
// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let valorDolarNoviembre = 900
valorDolarNoviembre--
valorDolarNoviembre--
valorDolarNoviembre--
console.log(`El valor del dolar en noviembre es de ${valorDolarNoviembre}$`)
// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
const nombre = 'Ezequiel'
console.log('Hola mi nombre es ' + nombre + ' Massa')
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
const booleano1 = true
const booleano2 = false
console.log(`El resultado de la comparacion de 
${booleano1} y ${booleano2} es ${booleano1 && booleano2}`)
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
const booleano3 = true
const booleano4 = false
console.log(`El resultado de la comparacion de 
${booleano3} o ${booleano4} es ${booleano3 || booleano4}`)
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
const dineroEnCuenta = 100
dineroEnCuenta > 90 ? console.log(`Puedes comprar el producto`) : console.log(`No puedes comprar el producto`)
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
110 <= dineroEnCuenta ? console.log(`Puedes comprar el producto`) : console.log(`No puedes comprar el producto`)
// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
const numeroIngresado = prompt('Ingresa un numero')
const resultado = parseInt(numeroIngresado)
console.log(`El numero que ingresaste es ${resultado}`)
// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
const nombreIngresado = prompt('Ingresa tu nombre')
const resultadoNombre = nombreIngresado
console.log(`El nombre que ingresaste es ${resultadoNombre.trim()}`)
// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
const primerNumeroIngresado = prompt('Ingresa un numero a sumar')
const segundoNumeroIngresado = prompt('Ingresa un segundo numero a sumar')
const resultadoSuma = parseFloat(primerNumeroIngresado) + parseFloat(segundoNumeroIngresado)
document.write(`El resultado de la suma es ${resultadoSuma}`)
