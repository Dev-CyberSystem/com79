console.log("\n\tMuestra del tp2 -------------------------------------------------------------------------------");
console.log("\n\t1 - Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.");
let a = 3;
let b = 1;
let suma = a + b;

console.log("\n\tLa suma de a="+a+" con b="+b+" es "+suma);


console.log("\n\t2- Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad(==). Muestra el resultado en la consola.");
console.log(`\n\tComparamos(por valor) el entero a=${a} con b=${b} y su resultado es a==b -> ${a==b}`);


console.log("\n\t3- Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.")
console.log(`\n\tComparamos(por valor) el entero a=${a} con b=${b} y su resultado es a!=b -> ${a!=b}`);


console.log("\n\t4- Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.");
let incremento = 0;
console.log(`\tEl incremento en 5 del valor ${incremento}`);
incremento+=5;
console.log(`\tes -> ${incremento}`);

console.log("\n\t5- Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.");
let decremento = 0;
console.log(`\tEl decremento en 5 del valor ${decremento}`);
decremento-=5;
console.log(`\tes -> ${decremento}`);

console.log("\n\t6- Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.");
let cadena = "Hola!";
console.log("\t"+cadena+" Cómo estás?");

console.log("\n\t7- Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.");
let verdadero = true;
let falso = false;
console.log(`\tLa operacion lógica AND: ${verdadero} && ${falso} -> ${verdadero&&falso}`);

console.log("\n\t8- Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.");
console.log(`\tLa operacion lógica OR: ${verdadero} || ${falso} -> ${verdadero||falso}`);

console.log("\n\t9- Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.");
let valor = 10;
console.log(`\tComparo ${valor} con 0: ${valor} > 0 -> ${valor>0}`);

console.log("\n\t10- Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.");
console.log(`\tComparo ${valor} con 0: ${valor} < 0 -> ${valor<0}`);


console.log("\n\t11- Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.");
let ingreso = prompt("Ingrese un numero:");
let regEx = "^[0-9]+$";
if(ingreso.match(regEx)!=null){
    console.log("\tUsted ha ingresado el valor -> "+ingreso);
}else{
    console.log("\tNumero ingresado INVALIDO.")
}


console.log("\n\t12- Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.");
let nombre = prompt("Ingrese su nombre:");
console.log(`Hola, ${nombre}. Bienvenido!`);


console.log("\n\t13- Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.");
let numero1 = parseInt(prompt("Ingrese el primer valor:"));
let numero2 = parseInt(prompt("Ingrese el primer valor:"));
let adicion = numero1+numero2;
document.write("La suma "+numero1+" + "+numero2+" = "+adicion);