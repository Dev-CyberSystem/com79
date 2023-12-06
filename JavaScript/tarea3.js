//Funciones

// function saludo() {
//   console.log('Hola desde JavaScript');
// }
// saludo();

// // Funcion con parametros

// function suma(num1, num2) {
//   console.log(num1 + num2);
// }
// suma(5, 5);

// function restar() {
//   console.log('Antes del return');
//   return 5;
//   console.log('Despues del return');
// }

// let resultado = restar();
// console.log(resultado);

// // Funcion con parametros con valores predeterminados

// function saludo2(apellido = 'Simeone', nombre = 'Diego') {
//   console.log(`Hola ${nombre} ${apellido}`);
// }
// saludo2();
// saludo2('a', 'Lionel');

// // funciones anonimas

// let funcionAnonima = function () {
//   console.log('Hola soy anonima');
// };
// funcionAnonima();

// // funciones flecha o arrow function

// let arrowFunction = (nombre, apellido) => {
//   console.log('Esta es una funcion de flecha' + nombre + apellido);
// };
// arrowFunction('Diego', 'olmi');

// let arrow = (club) => {
//   return club;
// };
// let futbol = arrow('River Plate');
// console.log(futbol);

// let estadio = (nombre, cancha) => `${cancha} ${nombre}`;

// let estad = estadio('Monumental', 'Estadio completo');
// console.log(estad);

// let personita = () => {
//   let persona = { nombre: 'Julian', apellido: 'alvarez' };
//   return persona;
// };

// let newPersona = personita();
// console.log(
//   'Esto lo sacamos desde el objeto en la funcion',
//   newPersona.apellido
// );

// Ejercicio

//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.

//Paso a paso.
// 1- Escribir un programa
// 2- Solicitar al usuario el año de nacimiento, parsear el resultado
// 3- Calcular la edad de la persona. restar el año actual con el año de nacimiento.
// 4- Validar si es o no mayor de edad.
// 5- Mostrar la edad en una cadena de texto.

// let legalidad = () => {
//   let anioNacimiento = parseInt(prompt('Ingrese su año de nacimiento'));
//   let anioActual = 2023;
//   let edad = anioActual - anioNacimiento;
//   let validacion = edad >= 18;

//   if (validacion === true) {
//     alert(`Usted tiene ${edad} años y es mayor de edad`);
//   } else {
//     alert(`Usted tiene ${edad} años y es menor de edad`);
//   }

//   validacion
//     ? alert(`Usted tiene ${edad} años y es mayor de edad`)
//     : alert(`Usted tiene ${edad} años y es menor de edad`);
// };
// legalidad();

// Condicionales en estructura de control

// if, else if ,else

// if(){ // siempre que sea true
//     // accionable
// } else {
//     //accionable
// }

// if (15 > 18) {
//   //true
//   console.log('true');
// } else if (15 != 15) {
//   console.log('Es igual');
// } else {
//   console.log('false');
// }

//Math

// Encontrar el valor absoluto.
// let numero1 = -12;
// let valorAbsoluto = Math.abs(numero1);
// console.log(valorAbsoluto)

// let numeros = [1, 5, 8, 9, 10, 7];
// let numMax = Math.max(...numeros);
// let numMin = Math.min(...numeros);
// console.log('numero maximo', numMin);

//redonde

// let decimales = 9.1218;
// let redondeo = Math.round(decimales);

// console.log(redondeo);

//Floor
// let numero3 = 5.3;
// let floor = Math.floor(numero3);
// let ceil = Math.ceil(numero3);
// console.log(ceil);

//truncar
// let numero4 = 3.99;
// let truncar = Math.trunc(numero4);
// console.log(truncar);

//random

// let numeroAleatorio = Math.random();
// console.log(numeroAleatorio);

// Ejercicio

// let tragamonedas = Math.floor(Math.random() * 10) + 1
// console.log("Tragamonedas" + " " + tragamonedas)

// let numerosAleatorios = () => {
//     return Math.floor(Math.random() * 7) + 1
// }

// let girarTragaMonedas = () => {

//     let numero1 = numerosAleatorios()
//     let numero2 = numerosAleatorios()

//     let resultadosTragaMonedas = document.getElementById("resultado")
//     resultadosTragaMonedas.textContent = `Resultado ${numero1} - ${numero2}`

//     console.log(`${numero1} - ${numero2}`)
// }

//Tareas
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.

function restar(a, b) {
  return console.log(a - b);
}

restar(3, 4); //-1

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

const suma = () => {
  const numero1 = 5;
  const numero2 = 10;

  console.log(numero1 + numero2);
};

suma(); //15

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

const stringConcatenado = () => {
  const saludo = 'hola';
  const nombre = 'Nicolas';

  console.log(saludo + ' ' + nombre);
};

stringConcatenado();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

const comparacionBooleanIguales = () => {
  const prendido = true;
  const apagado = false;

  if (prendido === apagado) {
    return console.log('Si son iguales');
  }
  console.log('No son iguales');
};

comparacionBooleanIguales(); // No son iguales

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

const comparacionBooleanDiferentes = () => {
  const prendido = true;
  const apagado = false;

  if (prendido !== apagado) {
    return console.log('Si son diferentes');
  }
  console.log('No son diferentes');
};

comparacionBooleanDiferentes(); // No son iguales

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

const comparacionNumeroMayor = () => {
  const numero1 = 20;
  const numero2 = 10;

  if (numero1 > numero2) {
    return console.log('El numero si es mayor');
  }
  console.log('No es mayor');
};

comparacionNumeroMayor(); //El numero si es mayor

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.

const contarPalabras = (frase) => {
  // Utilizamos el método split para dividir la frase en palabras
  // utilizando los espacios en blanco como separadores
  const palabras = frase.split(' ');
  return console.log(palabras.length);
};

contarPalabras('Hola como estas'); // 3

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

const negativoOPositivo = (numero) => {
  if (numero < 0) {
    console.log('Negativo');
  } else {
    console.log('Positivo');
  }
};

negativoOPositivo(-3); //Negativo

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

const divisible = (numero) => {
  if (numero % 2 === 0) {
    return console.log('Si es par');
  }
  console.log('No es par');
};

divisible(4); //Si es divisible por 2

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

const ponerContrasena = (contraseña) => {
  const tieneCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const longitudMinima = 8;
  const longitudMaxima = 15;

  if (
    tieneCaracterEspecial.test(contraseña) ||
    contraseña.length < longitudMinima ||
    contraseña.length > longitudMaxima
  ) {
    console.log('Contraseña no válida');
  } else {
    console.log('Contraseña válida');
  }
};

ponerContrasena('contrasena'); // Contraseña valida

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

const aprobarMateria = (numero) => {
  const aprobar = numero > 70;

  if (aprobar) {
    return console.log('Estas aprobado');
  }
  console.log('No estas aprobado');
};

aprobarMateria(80); //Estas aprobado

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

const esPalindromo = (cadena) => {
  const cadenaProcesada = cadena.toLowerCase().replace(/ /g, '');

  const cadenaInvertida = cadenaProcesada.split('').reverse().join('');

  if (cadenaProcesada === cadenaInvertida) {
    return 'Es un palíndromo';
  } else {
    return 'No es un palíndromo';
  }
};

// Ejemplo de uso
console.log(esPalindromo('Anita lava la tina')); //  Es un palíndromo
console.log(esPalindromo('Hola mundo')); // No es un Palindromo

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

function verificarLetra(letra) {
  letra = letra.toLowerCase();

  if (
    letra === 'a' ||
    letra === 'e' ||
    letra === 'i' ||
    letra === 'o' ||
    letra === 'u'
  ) {
    return console.log('Es una vocal');
  } else if (letra >= 'a' && letra <= 'z') {
    return console.log('Es una consonante');
  } else {
    return console.log('No es una letra válida');
  }
}

verificarLetra('i'); //Es una vocal

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

function diaSemana(numero) {
  let dia = '';
  switch (numero) {
    case 1:
      dia = 'Lunes';
      break;
    case 2:
      dia = 'Martes';
      break;
    case 3:
      dia = 'Miércoles';
      break;
    case 4:
      dia = 'Jueves';
      break;
    case 5:
      dia = 'Viernes';
      break;
    case 6:
      dia = 'Sábado';
      break;
    case 7:
      dia = 'Domingo';
      break;
    default:
      dia = 'Número inválido';
      break;
  }
  return dia;
}

console.log(diaSemana(5)); //Viernes

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

const esPrimo = (numero) => {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
};

const conseguirPrimo = (numero) => {
  if (esPrimo(numero)) {
    return console.log('Este número es primo');
  }
  return console.log('Este no es un número primo');
};

conseguirPrimo(6);

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

const pedirEdad = (numero) => {
  if (numero >= 18) {
    return console.log('Si es mayor de edad');
  }
  console.log('No es mayor de edad');
};

pedirEdad(18); //Si es mayor de edad

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

const sumaNumeros = (a, b) => {
  if (a + b >= 100) {
    return console.log('Si es mayor a 100');
  }
  console.log('No es mayor a 100');
};

sumaNumeros(50, 70); //Si es mayor a 100

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

const encontrarMayor = (a, b, c) => {
  if (a >= b && a >= c) {
    console.log(`${a} es el mayor de los tres`);
  } else if (b >= a && b >= c) {
    console.log(`${b} es el mayor de los tres`);
  } else if (c >= a && c >= b) {
    console.log(`${c} es el mayor de los tres`);
  } else {
    console.log('Al menos dos números son iguales');
  }
};

encontrarMayor(10, 20, 50);

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

const verificarLetra1 = (letra) => {
  if (letra >= 'A' && letra <= 'Z') {
    console.log(`La letra "${letra}" es mayúscula.`);
  } else if (letra >= 'a' && letra <= 'z') {
    console.log(`La letra "${letra}" es minúscula.`);
  } else {
    console.log(`"${letra}" no es una letra.`);
  }
};

verificarLetra1('L'); //La letra es mayúscula

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

for (let i = 0; i <= 50; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
    continue;
  } else if (i % 3 === 0) {
    console.log('Fizz');
    continue;
  } else if (i % 5 === 0) {
    console.log('Buzz');
    continue;
  } else {
    console.log(i);
  }
}

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

const esNumeroPerfecto = (numero) => {
  let sumaDivisores = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      sumaDivisores += i;
    }
  }

  if (sumaDivisores === numero) {
    return true;
  } else {
    return false;
  }
};

const numeroIngresado = parseInt(
  prompt('Ingresa un número para verificar si es un número perfecto:')
);

if (esNumeroPerfecto(numeroIngresado)) {
  console.log(`${numeroIngresado} es un número perfecto.`);
} else {
  console.log(`${numeroIngresado} no es un número perfecto.`);
}

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

const descomponerFactoresPrimos = (numero) => {
  let factoresPrimos = [];
  let divisor = 2;

  while (numero > 2) {
    if (numero % divisor === 0) {
      factoresPrimos.push(divisor);
      numero = numero / divisor;
    } else {
      divisor++;
    }
  }

  return factoresPrimos;
};

const numeroIngresado2 = parseInt(
  prompt('Ingresa un número para descomponer en factores primos:')
);
const factoresPrimos = descomponerFactoresPrimos(numeroIngresado);

if (factoresPrimos.length === 0 || numeroIngresado2 === 1) {
  console.log('El número ingresado no tiene factores primos o es 1.');
} else {
  console.log(
    `La descomposición en factores primos de ${numeroIngresado} es: ${factoresPrimos.join(
      ' * '
    )}`
  );
}

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

const esFechaValida = (dia, mes, anio) => {
  const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;

  const diasMaximos = [
    31,
    esBisiesto ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  return mes >= 1 && mes <= 12 && dia >= 1 && dia <= diasMaximos[mes - 1];
};

const diaIngresado = parseInt(prompt('Ingresa el día:'));
const mesIngresado = parseInt(prompt('Ingresa el mes:'));
const anioIngresado = parseInt(prompt('Ingresa el año:'));

if (esFechaValida(diaIngresado, mesIngresado, anioIngresado)) {
  console.log('La fecha ingresada es válida.');
} else {
  console.log('La fecha ingresada no es válida.');
}
