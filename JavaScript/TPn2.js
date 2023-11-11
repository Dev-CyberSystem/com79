    //Practico numero 2

//Quiz Javascript - Introducción

//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
let simpleMat = 0;
simpleMat += 80; //Se puede resumir lineas 6 y 7 con -let simpleMat = 0 + 80-
console.log(simpleMat); //Se puede resumir lineas 7 y 8 con -console.log(simpleMat += 80)-
document.write(`<hr> El resultado del primer ejercicio (suma simple) es: ${simpleMat}`);

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
let numValA = 536;
let numValB = 217;
let equalComp = numValA == numValB;
console.log(equalComp); //Se puede resumir lineas 14 y 15 con -console.log(numValA == numValB)-
document.write(`<hr> El resultado del segundo ejercicio (comparación) es: ${equalComp}`);

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
let numValC = 459;
let numValD = 124;
let notEqual = numValC != numValD;
console.log(notEqual); //Se puede resumir lineas 21 y 22 con -console.log(numValc != numValD)-
document.write(`<hr> El resultado del tercer ejercicio (comparación negada) es: ${notEqual}`);

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
let numValE = 264;
numValE ++;
numValE ++;
numValE ++;
numValE ++;
numValE ++; //Se puede resumir lineas 27 al 31 con -numValE += 5-
console.log(numValE); //Se puede resumir lineas 27 al 32 con -console.log(numValE += 5)-
document.write(`<hr> El resultado del cuarto ejercicio (incremento) es: ${numValE}`);

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let numValF = 967;
numValF --;
numValF --;
numValF --;
console.log(numValF); //Se puede resumir lineas 35 al 38 con -console.log(numValF -= 3)-
document.write(`<hr> El resultado del quinto ejercicio (decremento) es: ${numValF}`);

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
let textChain = "Pepita la pistolera"+", Raúl de comodoro";
textChain += `, Irma`; //otra manera de agregar string
console.log(textChain);
document.write(`<hr> El resultado del sexto ejercicio (concatenación) es: ${textChain}`);

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
let boolVal1 = false;
let boolVal2 = true;
console.log(boolVal1 && boolVal2); //De aquí en adelane utilizaré método abreviado (sin agregar variables)
document.write(`<hr> El resultado del séptimo ejercicio (lógica AND) es: ${boolVal1 && boolVal2}`);

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
let boolVal3 = true;
let boolVal4 = false;
console.log(boolVal3 || boolVal4);
document.write(`<hr> El resultado del octavo ejercicio (lógica OR) es: ${boolVal3 || boolVal4}`);

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let numValG = 658;
console.log(numValG > 50);
document.write(`<hr> El resultado del noveno ejercicio (comparación mayor) es: ${numValG > 50}`);

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let numValH = 292;
console.log(numValH <= 888);
document.write(`<hr> El resultado del décimo ejercicio (comparación menor-igual) es: ${numValH <= 888}`);

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
let numValI = parseInt(prompt(`Ingrese un número por favor:`));
console.log(numValI);
document.write(`<hr> El resultado del decimoprimer ejercicio (prompt número) es: ${numValI}`);

// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
let numValJ = prompt(`Ingrese su nombre por favor:`);
console.log(numValJ);
document.write(`<hr> El resultado del decimosegundo ejercicio (prompt string) es: ${numValJ}`);

// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
let numValK = parseInt(prompt(`Ingrese un número por favor:`));
let numValL = parseInt(prompt(`Ahora ingrese otro número por favor:`));
let addVal = numValK + numValL;
console.log(addVal);
document.write(`<hr> El resultado del decimotercer ejercicio (prompt suma) es: ${addVal} <hr>`);