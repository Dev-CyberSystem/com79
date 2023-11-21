const prompt = require("prompt-sync")({ sigint: true });

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
function function1() {
  i = parseInt(prompt("Ingrese un numero del 1 al 12: "));
  switch (i) {
    case 1:
      console.log("Enero");
      break;
    case 2:
      console.log("Febrero");
      break;
    case 3:
      console.log("Marzo");
      break;
    case 4:
      console.log("Abril");
      break;
    case 5:
      console.log("Mayo");
      break;
    case 6:
      console.log("Junio");
      break;
    case 7:
      console.log("Julio");
      break;
    case 8:
      console.log("Agosto");
      break;
    case 9:
      console.log("Septiembre");
      break;
    case 10:
      console.log("Octubre");
      break;
    case 11:
      console.log("Noviembre");
      break;
    case 12:
      console.log("Diciembre");
      break;
    default:
      console.log("Numero no valido. Ingrese del 1 al 12");
      break;
  }
};
//function1();

// Imprimir los números pares del 2 al 20 en la consola.
function function2() {
  for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
//function2();

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
function function3() {
  let a = "Hola Te Amo Mucho"
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i].toUpperCase()) {
      console.log(a[i]);
    }
  }
};
//function3();

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
function function4() {
  let i = parseInt(prompt("Ingresar numero: "));
  if (isNaN(i) || i < 1) {
    console.log("Entrada invalida. Ingrese un numero mayor igual a 1");
  } else {
    for (let j = 1; j <= i; j++) {
      console.log(j);
    }
  }
};
//function4();

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
function function5() {
  let i = prompt("Ingresar numeros separados por coma: ");
  let numeros = i.split(/[,\s]+/).map(numero => parseInt(numero.trim(), 10));
  if (numeros.some(isNaN)) {
    console.log("Entrada invalida. Ingresar numeros");
  } else {
    let maxNum = -Infinity;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > maxNum) {
        maxNum = numeros[i];
      }
    }
    console.log(`El maximo numero es ${maxNum}`);
  }
};
//function5();

/**
 * [ ]: Indica un conjunto de caracteres.
 * ,: Coincide con una coma literal.
 * \s: Coincide con cualquier carácter de espacio en blanco (como espacios, tabuladores, etc.).
 * +: Coincide con uno o más de los caracteres dentro del conjunto.
 * ==> [,\s]+ significa "una o más comas o espacios en blanco".
 * Por lo tanto, cuando usas split(/[,\s]+/), divides la cadena en un array utilizando comas y espacios en blanco como delimitadores,
 * eliminando así las comas del array resultante.
 */

// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
function function6(x) {
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
/* function6("somos");
function6("anita lava la tina");
function6("Anita lava la tina");
function6("Sometamos o matemos");
function6("arriba la birra");
function6("Hice la funcion en 2 minutos solita sin ayuda, que inteligente que soy"); */

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
function function7() {
  let i = prompt("Ingresar numeros separados por coma: ");
  let numeros = i.split(/[,\s]+/).map(numero => parseInt(numero.trim(), 10));
  if (numeros.some(isNaN)) {
    console.log("Entrada invalida. Ingresar numeros");
  } else {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma = suma + numeros[i];
    }
    console.log(`La suma de los numeros es ${suma}`);
  }
};
//function7();

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
function function8() {
  let i = prompt("Ingresar numeros separados por coma: ");
  let numeros = i.split(/[,\s]+/).map(numero => parseInt(numero.trim(), 10));
  if (numeros.some(isNaN)) {
    console.log("Entrada invalida. Ingresar numeros");
  } else {
    let cantidad = 0;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] < 0) {
        cantidad++;
      }
    }
    console.log(`La cantidad de los numeros negativos es ${cantidad}`);
  }
};
//function8();

// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
function function9() {
  let num = prompt("Ingresar un numero: ");
  if (isNaN(num) || num < 1) {
    console.log("Entrada invalida. Ingresar numeros enteros positivos");
  } else {
    for (let index = 1; index <= num; index++) {
      if (index % 2 === 1) {
        console.log(index);
      }
    }
  }
};
//function9();

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
function function10() {
  let i = prompt("Ingresar numeros separados por coma: ");
  let numeros = i.split(/[,\s]+/).map(numero => parseInt(numero.trim(), 10));
  if (numeros.some(isNaN)) {
    console.log("Entrada invalida. Ingresar numeros");
  } else {
    let minNum = Infinity;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] < minNum) {
        minNum = numeros[i];
      }
    }
    console.log(`El menor numero es ${minNum}`);
  }
};
//function10();

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
function function11() {

};

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
function function12() {
  let i = prompt("Ingresar numeros separados por coma: ");
  let numeros = i.split(/[,\s]+/).map(numero => parseInt(numero.trim(), 10));
  if (numeros.some(isNaN)) {
    console.log("Entrada invalida. Ingresar numeros");
  } else {
    let cantidad = 0;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        cantidad++;
      }
    }
    console.log(`La cantidad de los numeros pares es ${cantidad}`);
  }
};
//function12();

// Dado un array de números, escribir una función que retorne el número más grande del array.
function function13() {
  let array = [-1000, 200, 40, 80, 10, 20, 30];
  let maxNum = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
    }
  }
  console.log(`El maximo numero es ${maxNum}`);
};
//function13();

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
function function14() {
  let array = [-1000, 200, 40, 11, 3, -189, 80, 10, 20, 30];
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  console.log(`array con los números pares del array original: ${newArray}`);
};
//function14();

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
function function15() {
  let array = [-1000, 200, 40, 11, 3, -189, 80, 10, 20, 30];
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }
  console.log(`suma de los elementos del array: ${suma}`);
};
//function15();

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
function function16() {
  let array = ["me", "llamo", "macarena", "mucho", "gusto"];
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].toUpperCase());
  }
  console.log(`${newArray}`);
};
//function16();

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
function function17() {
  let array = [-1000, 200, 40, 11, 3, -189, 80, 10, 20, 30];
  let newArray = [];
  let x = 30;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > x) {
      newArray.push(array[i]);
    }
  }
  console.log(`Elementos del array mayores a ${x}: ${newArray}`);
};
//function17();

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
function function18() {
  let array = [-1000, 200, 40, 11, 3, -189, 80, 10, 20, 30];
  let numerosGrandes = [];
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
    if (array[i] > 10) {
      numerosGrandes.push(array[i]);
    }
  }
  console.log(`La suma de los elementos del array es: ${suma}\nY los elementos mayores a 10 son: ${numerosGrandes}`);
};
//function18();

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
function function19() {
  let array = ["me", "llamo", "macarena", "mucho", "gusto"];
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      newArray.push(array[i]);
    }
  }
  console.log(`${newArray}`);
};
//function19();

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
function function20() {
  let array = ["me", "llamo", "macarena", "mucho", "gusto", ". ", "Aguante", "Racing", "Club"];
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5 && array[i].toLowerCase().startsWith('a')) {
      newArray.push(array[i]);
    }
  }
  console.log(`${newArray}`);
};
//function20();

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// Además, cortar el array resultante para que tenga solamente los primeros 3 números.
function function21() {
  let array = [-1000, 200, 40, 11, 3, -189, 900, 80, 10, 20, 30, 50];
  let newArray = [];
  let x = 30;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > x) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray.slice(0, 3));
};
//function21();

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
function function22() {
  let array = [-1000, 200, 40, 11, 3, -189, 900, 80, 10, 20, 30, 50];
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }
  console.log(`${newArray}`);
};
//function22();

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
function function23() {
  let array = [-1000, 200, 40, 11, 3, -189, 900, 80, 10, 20, 30, 50];
  let newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  console.log(`${newArray}`);
};
//function23();

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
function function24() {
  let array = [-1000, 200, 40, 11, 3, -189, 900, 80, 10, 20, 30, 50];
  let newArray = [];
  for (let i = 1; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  console.log(`${newArray}`);
};
//function24();

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
function function25() {
  let array = [-1000, 200, 40, 11, 3, -189, 900, 80, 10, 20, 30, 50];
  const x = 5;
  let i = 0;
  let newArray = [];
  while (i < array.length) {
    if (i !== x) {
      newArray.push(array[i]);
    }
    i++;
  }
  console.log(`${newArray}`);
};
//function25();