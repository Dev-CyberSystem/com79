// Trabajo Practico N° 2
// Autor: Fernández Cristian Javier
// Comisión 79i 
// Mentores: Diego Olmi - Francisco Iturburu
// Año: 2023
//1)Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
let multiplicacionSimple = 234 * 77;
console.log(multiplicacionSimple);

//2)Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
let num1=2333;
let num2=222222223;
console.log(num1==num2);

//3)Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
let num3=6423;
let num4=5664323;
console.log(num3!=num4);

//4)Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
let num5=6400;
num5++;
num5++;
num5++;
num5++;
num5++;
console.log(num5);

//5)Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let num6=0;
num6-=5;
console.log(num6);

//6)Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
let txt1="texto de la cadena "+ "--> agregado texto concatenado";
console.log(txt1);

//7)Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
let bool1=true;
let bool2=false;
console.log(bool1&&bool2);

//8)Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
let bool3=true;
let bool4=false;
console.log(bool4||bool3);

//9)Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let num7=6423;
let num8=-4323;
console.log(num8>num7);

//10)Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let num9=63;
let num10=932;
console.log(num9<=num10);

//11)Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
let anioNac = prompt("Ingrese su año de nacimiento: ");
console.log(anioNac);

//12)Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
let nombreUsuario = prompt("Ingrese su nombre: ");
console.log(nombreUsuario);

//13)Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
let a = prompt("Ingresar el primer número:");
let b = prompt("Ingresar el segundo número:");
let sumaSimple= parseInt (a) + parseInt(b);
console.log("El resultado de la suma es: " + sumaSimple);









