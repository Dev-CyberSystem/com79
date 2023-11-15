//Funciones

function saludo() {
  console.log("Hola desde JavaScript");
}
saludo();

// Funcion con parametros

function suma(num1, num2) {
  console.log(num1 + num2);
}
suma(5, 5);

function restar() {
  console.log("Antes del return");
  return 5;
  console.log("Despues del return");
}

let resultado = restar();
console.log(resultado);

// Funcion con parametros con valores predeterminados

function saludo2(apellido = "Simeone", nombre = "Diego") {
  console.log(`Hola ${nombre} ${apellido}`);
}
saludo2();
saludo2("a", "Lionel");

// funciones anonimas

let funcionAnonima = function () {
  console.log("Hola soy anonima");
};
funcionAnonima();

// funciones flecha o arrow function

let arrowFunction = (nombre, apellido) => {
  console.log("Esta es una funcion de flecha" + nombre + apellido);
};
arrowFunction("Diego", "olmi");

let arrow = (club) => {
  return club;
};
let futbol = arrow("River Plate");
console.log(futbol);

let estadio = (nombre, cancha) => `${cancha} ${nombre}`;

let estad = estadio("Monumental", "Estadio completo");
console.log(estad);

let personita = () => {
  let persona = { nombre: "Julian", apellido: "alvarez" };
  return persona;
};

let newPersona = personita();
console.log(
  "Esto lo sacamos desde el objeto en la funcion",
  newPersona.apellido
);

// Ejercicio

//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.

//Paso a paso.
// 1- Escribir un programa
// 2- Solicitar al usuario el año de nacimiento, parsear el resultado
// 3- Calcular la edad de la persona. restar el año actual con el año de nacimiento.
// 4- Validar si es o no mayor de edad.
// 5- Mostrar la edad en una cadena de texto.

let legalidad = () => {
  let anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
  let anioActual = 2023;
  let edad = anioActual - anioNacimiento;
  let validacion = edad >= 18;

//   if (validacion === true) {
//     alert(`Usted tiene ${edad} años y es mayor de edad`);
//   } else {
//     alert(`Usted tiene ${edad} años y es menor de edad`);
//   }

validacion ? alert(`Usted tiene ${edad} años y es mayor de edad`) : alert(`Usted tiene ${edad} años y es menor de edad`);

};
// legalidad();

// Condicionales en estructura de control

// if, else if ,else

// if(){ // siempre que sea true
//     // accionable
// } else {
//     //accionable
// }

if (15 > 18) {
  //true
  console.log("true");
} else if (15 != 15) {
  console.log("Es igual");
} else {
  console.log("false");
}

//Math 

// Encontrar el valor absoluto.
let numero1 = -12
let valorAbsoluto = Math.abs(numero1)
// console.log(valorAbsoluto)

let numeros = [1,5,8,9,10,7]
let numMax = Math.max(...numeros)
let numMin = Math.min(...numeros)
console.log("numero maximo", numMin)

//redonde 

let decimales = 9.1218
let redondeo = Math.round(decimales)

console.log(redondeo)

//Floor
let numero3 = 5.3
let floor = Math.floor(numero3)
let ceil = Math.ceil(numero3)
console.log(ceil)

//truncar
let numero4 = 3.99
let truncar = Math.trunc(numero4)
console.log(truncar)

//random

let numeroAleatorio = Math.random()
console.log(numeroAleatorio)

// Ejercicio

// let tragamonedas = Math.floor(Math.random() * 10) + 1
// console.log("Tragamonedas" + " " + tragamonedas)

let numerosAleatorios = () => {
    return Math.floor(Math.random() * 7) + 1
}

let girarTragaMonedas = () => {

    let numero1 = numerosAleatorios()
    let numero2 = numerosAleatorios()

    let resultadosTragaMonedas = document.getElementById("resultado")
    resultadosTragaMonedas.textContent = `Resultado ${numero1} - ${numero2}`

    console.log(`${numero1} - ${numero2}`)
}


//Tareas
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
let restar=(x,y)=>{
  console.log(x-y)
}
// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
let sumandoDiez = ()=>{
  let valor = 5
  let final=10+valor
  console.log(final)
}
// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
let frase =()=>{
  let x ="hola"
  let y= "como estas"
  let fraseFinal = x+y
  console.log(fraseFinal)
}
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
let vOf = ()=>{
  x = true
  y = false 
  {x == y ? console.log("ambas son iguales") : console.log("no son iguales")}
}
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
let iguales = ()=>{
  x = true
  y = false 
  {x != y ? console.log("ambas son distintas") : console.log("no son distintas")}
}
// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
let mOm = ()=>{
  x = 5
  y = 2
  x>y?console.log("x es mayor") :console.log("y es mayor")
}
// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
let palabra = String(prompt("Ingrese una palabra"))
let contenedor = palabra.split(" ")
let  cantidadPalabras =contenedor=>{
  console.log(`Tu frase tiene ${contenedor.length} palabras`)
}
//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
const x = parseFloat(prompt("Ingresa el numero que quieras"))
let numero = (x)=>{
x > 0.0 ? console.log("Numero positivo")? x < 0 : console.log("Numero negativo"): console.log("El numero es 0")
}
//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
function div2(x){
  if(x%2 == 0 ){
    console.log("Par")
  } console.log("Impar")
}
//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
const z = parseInt(prompt("Ingresa un numero entero"))
let parImpar = (z)=>{
  z %2 == 0 ? console.log("El numero es par") : console.log("El numero es impar")
}
// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
const v = parseInt(prompt("Ingresa un numero entero"))
let pN0 = (v)=>{
  v>0 ? console.log("Mayor a 0") ? v<0:console.log("Menor a cero") : console.log("Es cero")
}
// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
const n  = parseInt(prompt("Ingrese un numero entero"))
const n2 = parseInt(prompt("Ingrese un segundo numero"))
if(n>n2){
  console.log("n es mayor")
} console.log("n2 es mayor")

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
const psw = String(prompt("Ingrese una contrasena: "))
const caractEspeciales = /[!@#$%^&*(),.?":{}|<>]/;
function validando(psw){
  if(psw.length > 8 && caractEspeciales.test(psw)){
    console.log("contrasena segura")
  }console.log("contrasena insegura")
}

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
const nota = parseInt(prompt("Ingrese su clasiciacion"))
function aprobado(nota){
  nota>=70 ? console.log("aprobado"):console.log("Desaprobado")
} 

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
function esPalindromo(cadena) {
  const cadenaSinEspacios = cadena.replace(/\s/g, '').toLowerCase();
  const cadenaAlReves = cadenaSinEspacios.split('').reverse().join('');
  if (cadenaSinEspacios === cadenaAlReves) {
      return "Es un palíndromo";
  } else {
      return "No es un palíndromo";
  }
}
// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
const l = String(prompt("Ingrese una letra"))
let vocal = l=>{
  l == a || l ==e|| l ==i|| l ==o|| l ==u ? console.log("Es una vocal"):console.log("Es una consonante")
}
// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
let dia = prompt("Ingrese un numero del 1 al 7")

switch (dia) {
  case 1:
    console.log("Hoy es lunes")
    break;
  case 2:
    console.log("Hoy es martes")
    case 3:
      console.log("Hoy es miervoles")
      case 4:
        console.log("Hoy es jueves")
        case 5:
          console.log("Hoy es viernes")
          case 6:
            console.log("Hoy es sabado")
            case 7:
              console.log("Hoy es domingo")
  default:
    console.log("Ingrese el numero de vuelta")
    break;
}
// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
let num = parseInt(prompt("Ingrese un numero: "))
function esPrimo(num) {
  if (num <= 1) {
      console.log("No es primo")
  } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
              console.log("No es primo")
          }
      }
     console.log("Es primo")
  }
}
// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
function mayorDeEdad(e){
  e>=18?console.log("Es mayor de edad"):console.log("Es menor de edad")
}
// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
function mayorMenorOigualA100(a,b){
  a+b>= 100 ?console.log("la suma de sus numeros es mayor o igual a 100"):console.log("la suma de los numeros es menor a 100")
}
// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
function mayorDeTres(a,b,c){
  if(a>b && a>c){
    console.log("El primer numero es el mayor de todos")
  } else if(b>a&&b>c){
    console.log("El segundo numero es el mayor de todos")
  } else {
    console.log("El tercer numero es el mayor de todos")
  }
}
// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
const letra = String(prompt("Ingrese una letra"))
const regxs = {
  "lower": /^[a-z0-9 ]+$/,
  "upper": /^[A-Z0-9 ]+$/,
}
function mayOmin(letra,regxs){
  if(regxs.lower.test(letra)){
    console.log("Es minuscula")
  }else if(regxs.upper.test(letra)){
    console.log("Es mayuscula")
  }else{
    console.log("Es un caracter distinto")
  }
}
//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
      return "FizzBuzz";
  } else if (numero % 3 === 0) {
      return "Fizz";
  } else if (numero % 5 === 0) {
      return "Buzz";
  } else {
      return numero;
  }
}
// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
let nu = Number(prompt("Ingresa un número"));
let sumaDivisores = 1;
for (var i = 2; i <= Math.ceil(nu/2); i++) {
    if (numero % i == 0)
      sumaDivisores += i;
}

if (sumaDivisores === nu){
  console.log(`${nu} es un número perfecto`);}
else
{
  console.log(`${nu} no es un número perfecto`);}
// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
function obtenerDescomposicionEnFactoresPrimos(numero) {
  let factoresPrimos = [];
  let divisor = 2;

  while (numero > 1) {
      while (numero % divisor === 0) {
          factoresPrimos.push(divisor);
          numero /= divisor;
      }
      divisor++;
  }

  return factoresPrimos;
}

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
function esAnioBisiesto(anio) {
  // Un año es bisiesto si es divisible por 4, pero no por 100, excepto si es divisible por 400.
  return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

function esFechaValida(dia, mes, anio) {
  // Verificar el rango del mes
  if (mes < 1 || mes > 12) {
      return false;
  }

  // Verificar el rango del día
  const diasEnMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Ajustar días en febrero para años bisiestos
  if (mes === 2 && esAnioBisiesto(anio)) {
      diasEnMes[1] = 29;
  }

  if (dia < 1 || dia > diasEnMes[mes - 1]) {
      return false;
  }

  // Si pasa todas las validaciones, la fecha es válida
  return true;
}

// Pedir al usuario una fecha
let diaUsuario = parseInt(prompt("Ingrese el día:"));
let mesUsuario = parseInt(prompt("Ingrese el mes:"));
let anioUsuario = parseInt(prompt("Ingrese el año:"));

// Validar la fecha
if (esFechaValida(diaUsuario, mesUsuario, anioUsuario)) {
  console.log("La fecha ingresada es válida.");
} else {
  console.log("La fecha ingresada no es válida.");
}
