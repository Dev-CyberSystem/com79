/* 1- Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola. */
const restar = (a, b) => {
  let resultado = a - b;
  console.log("Resultado de la resta:", resultado);
};
restar(5, 3);
/* 2- Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola. */
const sumar = (a) => {
  let resultado = a + 10;
  console.log("Resultado de la suma:", resultado);
};
sumar(5);
/* 3- Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola. */
const concatenar = (a, b) => {
  let resultado = a + b;
  console.log("Resultado de la concatenacion:", resultado);
};
concatenar("Hola", " Mundo");
/* 4- Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola. */
const comparar = (a, b) => {
  let resultado = a === b;
  console.log("Resultado de la comparacion:", resultado);
};
comparar(true, false);
/*  5- Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.*/
const comparar2 = (a, b) => {
  let resultado = a !== b;
  console.log("Resultado de la comparacion:", resultado);
};
comparar2(true, false);
/* 6- Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola. */
const comparar3 = (a, b) => {
  let resultado = a > b;
  console.log("Resultado de la comparacion:", resultado);
};
comparar3(3, 2);
/* 7- Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco. */

const contarPalabras = (frase) => {
  let palabras = frase.split(" ");
  palabras = palabras.filter(function (palabra) {
    return palabra.trim() !== "";
  });
  return palabras.length;
};
let fraseUsuario = prompt("Introduce una frase:");
let numeroPalabras = contarPalabras(fraseUsuario);
console.log("Número de palabras en la frase: " + numeroPalabras);
/* 8- Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero. */

const determinarSigno = (numero) => {
  if (numero > 0) {
    return "Positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Cero";
  }
};
let resultadoSigno = determinarSigno(-5);
console.log(resultadoSigno);
/* 9- Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es. */

const determinarParImpar = (numero) => {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
};
let resultadoParImpar = determinarParImpar(7);
console.log(resultadoParImpar);

/* 10- Crear un programa que pida al usuario un número y luego muestre si es par o impar. */
let numeroUsuario = prompt("Ingrese un numero");
const esParImpar = (numero) => {
  if (numero % 2 === 0) {
    return "El numero es par";
  } else {
    return "El numero es impar";
  }
};
console.log(esParImpar(numeroUsuario));
/* 11- Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero. */
let numeroUsuario2 = prompt("Ingrese un numero");
const esPositivoNegativoCero = (numero) => {
  if (numero > 0) {
    return "El numero es positivo";
  } else if (numero < 0) {
    return "El numero es negativo";
  } else {
    return "El numero es cero";
  }
};
console.log(esPositivoNegativoCero(numeroUsuario2));
/* 12- Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos. */
let numeroUsuario3 = prompt("Ingrese un numero PARA COMPARAR");
let numeroUsuario4 = prompt("Ingrese EL otro numero PARA COMPRAR");
const mayorNumero = (numero1, numero2) => {
  if (numero1 > numero2) {
    return "El numero mayor es: " + numero1;
  } else {
    return "El numero mayor es: " + numero2;
  }
};
console.log(mayorNumero(numeroUsuario3, numeroUsuario4));
/* 13- Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales. */
const validarContrasena = (contrasena) => {
  if (contrasena.length < 8) {
    return false;
  }
  const caracteresEspeciales = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  if (!caracteresEspeciales.test(contrasena)) {
    return false;
  }
  return true;
};
const contrasenaUsuario = prompt("Ingrese una contraseña:");

if (validarContrasena(contrasenaUsuario)) {
  console.log("La contraseña es válida.");
} else {
  console.log("La contraseña no cumple con los requisitos.");
}
/* 14- Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70). */
let calificacionUsuario = prompt("Ingrese una calificacion");
const esAprobatoria = (calificacion) => {
  if (calificacion >= 70) {
    return true;
  } else {
    return false;
  }
};
if (esAprobatoria(calificacionUsuario)) {
  console.log("La calificacion es aprobatoria");
} else {
  console.log("La calificacion es reprobatoria");
}
/* 15- Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo". */
const Palindromo = (cadena) => {
  const cadenaFormateada = cadena.toLowerCase().replace(/\s/g, "");

  const reverso = cadenaFormateada.split("").reverse().join("");

  if (cadenaFormateada === reverso) {
    return "Es un palíndromo";
  } else {
    return "No es un palíndromo";
  }
};

const resultadoUno = Palindromo("Anita lava la tina");
console.log(resultadoUno);
const resultadoDos = Palindromo("Hola mundo");
console.log(resultadoDos);
/* 16- Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante. */

let letraUsuario = prompt("Ingrese una letra");
if (letraUsuario.length === 1) {
  let letra = letraUsuario.toLowerCase();
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    console.log("Es una vocal");
  } else {
    console.log("Es una consonante");
  }
}
/* 17- Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente. */

let numeroDia = prompt("Ingrese un número del 1 al 7:");
let numero = parseInt(numeroDia);

if (!isNaN(numero) && numero >= 1 && numero <= 7) {
  let diaSemana;
  switch (numero) {
    case 1:
      diaSemana = "Lunes";
      break;
    case 2:
      diaSemana = "Martes";
      break;
    case 3:
      diaSemana = "Miércoles";
      break;
    case 4:
      diaSemana = "Jueves";
      break;
    case 5:
      diaSemana = "Viernes";
      break;
    case 6:
      diaSemana = "Sábado";
      break;
    case 7:
      diaSemana = "Domingo";
      break;
  }

  console.log("El número " + numero + " corresponde a " + diaSemana + ".");
} else {
  console.log("Por favor, ingrese un número válido del 1 al 7.");
}
/* 18- Crear un programa que pida al usuario un número y luego muestre si es primo o no. */

// Solicitar al usuario que ingrese un número
let numeroUsuarioPrimo = prompt("Ingrese un número:");

// Convertir la entrada del usuario a un número entero
let numeroPrimo = parseInt(numeroUsuarioPrimo);

// Verificar si el número es primo
function esPrimo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

if (!isNaN(numero)) {
  if (esPrimo(numero)) {
    console.log("El número " + numero + " es primo.");
  } else {
    console.log("El número " + numero + " no es primo.");
  }
} else {
  console.log("Por favor, ingrese un número válido.");
}

/* 19- Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años). */

let edadUsuario = prompt("Ingrese su edad:");
let edad = parseInt(edadUsuario);

function esMayorEdad(edad) {
  return edad >= 18;
}

if (!isNaN(edad)) {
  if (esMayorEdad(edad)) {
    console.log("Eres mayor de edad.");
  } else {
    console.log("Eres menor de edad.");
  }
} else {
  console.log("Por favor, ingrese una edad válida.");
}
/* 20- Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100. */
let numeroUsuario20 = prompt("Ingrese un numero para Sumar");
let numeroUsuario21 = prompt("Ingrese otro numero para Sumar");
let suma = parseInt(numeroUsuario20) + parseInt(numeroUsuario21);

if (suma > 100) {
  console.log("La suma es mayor a 100");
} else if (suma < 100) {
  console.log("La suma es menor a 100");
} else {
  console.log("La suma es igual a 100");
}
/* 21- Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres. */

let numeroUsuario22 = prompt("Ingrese un numero para comparar");
let numeroUsuario23 = prompt("Ingrese otro numero para comparar");
let numeroUsuario24 = prompt("Ingrese otro numero para comparar");

if (numeroUsuario22 > numeroUsuario23 && numeroUsuario22 > numeroUsuario24) {
  console.log("El numero", numeroUsuario22, "es el mayor");
} else if (
  numeroUsuario23 > numeroUsuario22 &&
  numeroUsuario23 > numeroUsuario24
) {
  console.log("El numero", numeroUsuario23, "es el mayor");
} else {
  console.log("El numero", numeroUsuario24, "es el mayor");
}
/* 22- Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula. */

/* 23- Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número. */
const fizzBuzz = (numero) => {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
  } else if (numero % 3 === 0) {
    return "Fizz";
  } else if (numero % 5 === 0) {
    return "Buzz";
  } else {
    return numero;
  }
};

console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
