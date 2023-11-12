const prompt = require("prompt-sync")({ sigint: true });
//• Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
console.log("🟢 Ejercicio 1")
let array = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
};
console.log(`El resultado de sum es ${sum}`);

//• Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
console.log("\n🟢 Ejercicio 2")
let x1 = 10;
let y1 = 20;
console.log(x1 === y1);

//• Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
console.log("\n🟢 Ejercicio 3")
let x2 = 10;
let y2 = 20;
console.log(x2 != y2);

//• Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
console.log("\n🟢 Ejercicio 4")
let num1 = 10;
for (let i = 0; i < 5; i++) {
    num1++;
};
console.log(`El valor de la variable num1 es ${num1}`);

//• Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
console.log("\n🟢 Ejercicio 5")
let num2 = 20;
for (let i = 0; i < 3; i++) {
    num2--;
};
console.log(`El valor de la variable num2 es ${num2}`);

//• Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
console.log("\n🟢 Ejercicio 6")
let word1 = "Hola! como estas?"
let word2 = word1 + " " + "BUENAS TARDES 😄"
console.log(word2);

//• Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
console.log("\n🟢 Ejercicio 7")
let bool1 = true;
let bool2 = !true;
console.log(bool1 && bool2);
if (bool1 && bool2) {
    console.log("El valor booleano de ambas variables coincide");
} else {
    console.log("El valor booleano de ambas variables difiere");
};

//• Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
console.log("\n🟢 Ejercicio 8")
let bool3 = true;
let bool4 = false;
console.log(bool3 || bool4);
if (bool3 || bool4) {
    console.log("El valor booleano de una de las variables es true");
} else {
    console.log("El valor booleano de ambas variables es false");
};

//• Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
console.log("\n🟢 Ejercicio 9")
let num3 = 100;
console.log(num3 <= num1);
if (num3 > num1) {
    console.log(`${num3} > ${num1}`)
} else {
    console.log(`${num3} <= ${num1}`)
};

//• Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
console.log("\n🟢 Ejercicio 10")
let a = 0;
let b = 1;
console.log(a <= b);
if (a <= b) {
    console.log(`${a} <= ${b}`);
} else {
    console.log(`${a} > ${b}`);
};

//• Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
console.log("\n🟢 Ejercicio 11")
let iNum = prompt("Ingresar número: ");
console.log(`El nùmero ingresado es ${iNum}`);

//• Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
console.log("\n🟢 Ejercicio 12")
let iName = prompt("Ingresar nombre: ");
console.log(`El nombre ingresado es ${iName}`);

//• Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes,
// luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
console.log("\n🟢 Ejercicio 13")
let w = parseInt(prompt("Ingresar número 1: "));
let z = parseInt(prompt("Ingresar número 2: "));
console.log(`El primer nùmero ingresado es ${w} y el segundo ${z}`);
let wplusz = w + z;
console.log(`${w} + ${z} = ${wplusz}`);