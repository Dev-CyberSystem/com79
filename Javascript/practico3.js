const prompt = require("prompt-sync")({ sigint: true });

// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
function function1(x, y) {
  console.log("La resta entre ambos numeros es:", x - y);
};
//function1(10, 20);

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
let function2 = function () {
  var a = 5;
  a += 10;
  console.log(a);
};
//function2();

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
let function3 = function () {
  var a = "Rolling"
  var b = a + " Code"
  console.log(b);
};
//function3();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
let function4 = function () {
  let a = true;
  let b = false;
  console.log(a === b);
};
//function4();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
let function5 = function () {
  let a = true;
  let b = false;
  console.log(a !== b);
};
//function5();

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
let function6 = function () {
  let a = 10;
  let b = 10;
  console.log(a > b);
};
//function6();

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
function function7() {
  let word = prompt("Escriba algo: ");
  let length = 0;
  if (word.length > 0) {
    length = 1;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === ' ') {
        length++;
      };
    };
  };
  console.log(`Cantidad de palabras: ${length}`);
};
//function7();

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
function function8(num) {
  if (num > 0) {
    console.log("Positivo")
  } else if (num < 0) {
    console.log("Negativo");
  } else {
    console.log("Cero");
  };
};
//function8(1);
//function8(0);
//function8(-9);

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
function function9(num) {
  if (num % 2 === 0) {
    console.log("Par")
  } else {
    console.log("Impar");
  };
};
//function9(1850);
//function9(1851);

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
function function10() {
  let num = prompt("Ingrese un numero: ");
  function9(num);
};
//function10();

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
function function11() {
  let num = prompt("Ingrese un numero: ");
  function8(num);
};
//function11();

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
function function12() {
  let num1 = prompt("Ingrese el primer numero: ");
  let num2 = prompt("Ingrese el segundo numero: ");
  if (num1 > num2) {
    console.log(`${num1} > ${num2}`);
  } else {
    console.log(`${num2} > ${num1}`);
  };
};
//function12();

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
function function13() {
  let password = prompt("Ingrese una contraseña de 8 a 12 caracteres y al menos un caracter especial: ");
  const caracteresEspeciales = /[!@#$%^&*(),.?":{}|<>]/;
  if (password.length < 8 || password.length > 12) {
    console.log("Contraseña invalida, respetar cantidad de caracteres");
  } else if (!caracteresEspeciales.test(password)) {
    console.log("Contraseña invalida, ingresar al menos un caracter especial");
  } else {
    console.log("Contraseña valida jeje")
  }
};
//function13();

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
function function14() {
  let calification = prompt("Ingrese una calificacion de 0 a 100: ");
  if (calification < 0 || calification > 100) {
    console.log("Numero ingresado invalido.");
  } else if (calification < 70) {
    console.log("Desaprobado 😥");
  } else {
    console.log("Aprobado 👏");
  };
};
//function14();

// Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
function function15(x) {
  let y = x.toLowerCase();
  let esPalindromo = true;
  let i = 0;
  let j = y.length - 1;
  while (esPalindromo && i <= y.length / 2) {
    if ((y[i] === " ")) {
      i++;
    }
    if ((y[j] === " ")) {
      j--;
    }
    if (y[i] !== y[j]) {
      esPalindromo = false;
    }
    i++;
    j--;
  };
  console.log(esPalindromo);
};
/* function15("somos");
function15("anita lava la tina");
function15("Anita lava la tina");
function15("Sometamos o matemos");
function15("arriba la birra");
function15("Hice la funcion en 2 minutos solita sin ayuda, que inteligente que soy"); */

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

function letraValida(letra) {
  // ^ comienza a recorrer la letra
  // [a-zA-Z] verifica que sea valida
  // $ termina en esa letra y testea hasta ahi
  // caso contrario seria [^a-zA-Z$]
  return /^[a-zA-Z]$/.test(letra);
};
function esVocal(letra) {
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  if (vocales.includes(letra.toLowerCase())) {
    return "Es una vocal";
  } else {
    return "Es una constante"
  };
};
function function16() {
  let letra = prompt("Ingrese una letra: ");
  if (letraValida(letra)) {
    console.log(esVocal(letra));
  } else {
    console.log("Letra no valida");
  };
}
//function16();

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
function function17() {
  i = prompt("Ingrese un numero del 1 al 7: ");
  switch (i) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miercoles");
      break;
    case 4:
      console.log("Jueves");
      break;
    case 5:
      console.log("Viernes");
      break;
    case 6:
      console.log("Sabado");
      break;
    case 7:
      console.log("Domingo");
      break;
    default:
      console.log("Numero no valido. Ingrese del 1 al 7");
      break;
  }
}
//function17();

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
function numeroPrimo(num) {
  let esPrimo = true;
  if (num <= 1) {
    esPrimo = false;
  }
  // Para saber si un número es primo basta con probar si el número no es divisible por los primos hasta su raiz cuadrada
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      esPrimo = false;
    }
  }
  return esPrimo;
}
function function18() {
  let i = parseInt(prompt("Ingrese un numero: "));
  if (isNaN(i)) {
    console.log("Entrada invalida. Ingrese un numero");
  } else {
    if (numeroPrimo(i)) {
      console.log("Es numero primo");
    } else {
      console.log("No es numero primo");
    }
  }
}
//function18();

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
function mayorDeEdad(edad) {
  let esMayor = false;
  if (edad >= 18) {
    esMayor = true;
  }
  return esMayor;
};

function function19() {
  let i = parseInt(prompt("Ingrese su edad: "));
  if (isNaN(i) || Math.sign(i) === -1) {
    console.log("Entrada invalida. Ingrese un numero");
  } else {
    if (mayorDeEdad(i)) {
      console.log("Es mayor de edad")
    } else {
      console.log("No es mayor de edad")
    }
  }
};
//function19();

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
function suma100(x, y) {
  if (x + y < 100) {
    console.log(`${x}+${y} es menor a 100`)
  } else if (x + y > 100) {
    console.log(`${x}+${y} es mayor a 100`)
  } else {
    console.log(`${x}+${y} es igual a 100`)
  }
};

function function20() {
  let i = parseInt(prompt("Ingrese el primer numero: "));
  let j = parseInt(prompt("Ingrese el segundo numero: "));
  if (isNaN(i) || isNaN(j)) {
    console.log("Entrada invalida. Ingrese un numero");
  } else {
    suma100(i, j);
  }
};
//function20();

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
function function21() {
  let i = parseInt(prompt("Ingrese el primer numero: "));
  let j = parseInt(prompt("Ingrese el segundo numero: "));
  let k = parseInt(prompt("Ingrese el segundo numero: "));
  if (isNaN(i) || isNaN(j) || isNaN(k)) {
    console.log("Entrada invalida. Ingrese un numero");
  } else {
    console.log("El mayor numero es:", Math.max(i, j, k));
  }
};
//function21();

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
function function22() {
  let i = prompt("Ingrese una letra: ");
  const caracteresEspeciales = /[!@#$%^&*(),.?":{}|<>]/;
  if (!isNaN(i) || i.length > 1 || caracteresEspeciales.test(i)) {
    console.log("Entrada invalida. Ingrese una letra");
  } else {
    if (i === i.toUpperCase()) {
      console.log("Es mayuscula");
    } else {
      console.log("Es minuscula");
    }
  }
};
//function22();

// Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
function function23() {
  let i = parseInt(prompt("Ingrese un numero: "));
  if (isNaN(i)) {
    console.log("Entrada invalida. Ingrese una letra");
  } else {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
//function23();

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
function esNumeroPerfecto(numero) {
  if (numero <= 1) {
    return false; // Los números menores o iguales a 1 no son perfectos
  };
  let sumaDivisores = 1; // Inicializamos con 1 porque todos los números son divisibles por 1

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      sumaDivisores += i;
      // Si los divisores son diferentes, añadimos el divisor complementario
      if (i !== numero / i) {
        sumaDivisores += numero / i;
      }
    }
  };
  return sumaDivisores === numero;
};

function function24() {
  let i = parseInt(prompt("Ingrese un numero: "));
  if (isNaN(i) || i < 0) {
    console.log("Entrada invalida. Ingrese numero entero positivo");
  } else {
    if (esNumeroPerfecto(i)) {
      console.log(`${i} es un número perfecto.`);
    } else {
      console.log(`${i} no es un número perfecto.`);
    }
  };
};
//function24();

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
function factoresPrimos(numero) {
  let factoresPrimos = [];
  let divisor = 2;
  while (numero > 1) {
    while (numero % divisor === 0) {
      factoresPrimos.push(divisor);
      numero /= divisor;
    };
    divisor++;
  };
  return factoresPrimos;
};

function function25() {
  let i = parseInt(prompt("Ingrese un numero: "));
  if (isNaN(i) || i <= 1) {
    console.log("Entrada invalida. Ingrese numero entero mayor que 1");
  } else {
    const fp = factoresPrimos(i);
    console.log(`Descomposicion de ${i} en fp: ${fp.join(" * ")}`);
  }
};
//function25();

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
function esAnoBisiesto(ano) {
  // Un año es bisiesto si es divisible por 4, pero no por 100, a menos que también sea divisible por 400
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
};

function esFechaValida(dia, mes, ano) {
  if (mes < 1 || mes > 12 || dia < 1) {
    return false; // Mes y día deben estar dentro de rangos válidos
  }
  const diasEnMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Ajustar la cantidad de días en febrero para años bisiestos
  if (mes === 2 && esAnoBisiesto(ano)) {
    diasEnMes[1] = 29;
  }
  return dia <= diasEnMes[mes - 1];
};

function function26() {
  let i = prompt("Ingrese una fecha formato DD/MM/AAAA: ");
  const partesFecha = i.split('/');
  const dia = parseInt(partesFecha[0]);
  const mes = parseInt(partesFecha[1]);
  const ano = parseInt(partesFecha[2]);
  if (
    partesFecha.length === 3 &&
    !isNaN(dia) && !isNaN(mes) && !isNaN(ano) &&
    esFechaValida(dia, mes, ano)
  ) {
    console.log('La fecha ingresada es válida.');
  } else {
    console.log('Fecha no válida. Por favor, ingrese una fecha válida.');
  }
};
//function26();