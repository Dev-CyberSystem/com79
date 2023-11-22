 //Practico numero 2
//Quiz Javascript - Introducción
//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
let trabajo1=1+2
console.log(trabajo1)
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
let segundotrabajo1=10
let segundotrabajo2=20
let comparación=segundotrabajo1==segundotrabajo2
console.log(comparación)
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
let tercertrabajo1=12
let tercertrabajo2=22
let comparación2=tercertrabajo1!=tercertrabajo2
console.log(comparación2)
// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
let cuartotrabajo=1
cuartotrabajo+=5
console.log(cuartotrabajo)
// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let quintotrabajo=100
quintotrabajo-=3
console.log(quintotrabajo)
// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
let sextotrabajo=`lionel`
let sextotrabajo2=`${sextotrabajo} messi`
console.log(sextotrabajo2)
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
let septimotp=true
let septimotp2=false
let septimotpresultado=septimotp&&septimotp2
console.log(septimotpresultado)
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
let octavotp=true
let octavotp2=false
let octavotpresultado=octavotp||octavotp2
console.log(octavotpresultado)
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let novenotp=10
let novenotpresultado=novenotp>5
console.log(novenotpresultado)
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let decimotp=10
let decimotpresultado=decimotp<=20
 console.log(decimotpresultado)
// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
let ingresenumero=parseInt(prompt(`ingrese su numero aqui`))
console.log(ingresenumero)
// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
let ingresesunombre=parseInt(prompt(`ingrese su nombre`))
console.log(ingresesunombre)
// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
let ingresenumero1=parseInt(prompt(`ingrese su primer numero aqui`))
let ingresenumero2=parseInt(prompt(`ingrese su segundo numero aqui`))
let resultadosuma=ingresenumero1+ingresenumero2
document.write(`el resultado de la suma ${ingresenumero1} y {ingresenumero2} es: ${resultadosuma}`)