/*  Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
 */
const num1 = 5;
const num2 = 10;

console.log("El valor de la suma es", num1 + num2);
/* Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola. */

const num3 = 8;
const num4 = 15;

num3 == num4 ? console.log("Son iguales") : console.log("No son iguales");
/* • Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.

 */
const num5 = 9;
const num6 = 12;

num5 != num6 ? console.log("Son diferentes") : console.log("Son iguales");
/*  Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola. */

let num7 = 10;
num7++;
num7++;
num7++;
num7++;
num7++;
console.log("Numero Aumentado 5 veces5:", num7);

/* Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola. */
let num8 = 15;
num8--;
num8--;
num8--;
console.log("Numero Decrementado 3 veces:",num8);

const texto1 = "Hola";
console.log(texto1 + " Soy" + " dalto");
/* • Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola. */

const bool1 = true;
const bool2 = false;

bool1 && bool2 ? console.log("Son verdaderos") : console.log("Son falsos");

/* • Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola. */
const bool3 = true;
const bool4 = false;

bool3 || bool4 ? console.log("Son verdaderos") : console.log("Son falsos");

/* Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola. */

const num9 = 5;
const num10 = 10;

num9 > num10
  ? console.log("El numero es mayor")
  : console.log("El numero es menor");
/* Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola. */

const num11 = 15;
const num12 = 15;

num11 <= num12
  ? console.log("El numero es menor o igual")
  : console.log("El numero es mayor");

/* • Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola. */

const ingresoNum = prompt("Ingrese un numero");
console.log("Numero ingresado por Pantalla : ",ingresoNum);
/* • Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola. */
const ingresoNombre = prompt("Ingrese su nombre");
console.log(ingresoNombre);

/* • Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento. */

const num13 = prompt("Ingrese un numero");
const num14 = prompt("Ingrese otro numero");

const suma = parseFloat(num13) + parseFloat(num14);
console.log(`La suma de los numeros ingresado por pantalla es: ${suma}`);
