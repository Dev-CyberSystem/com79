// Practico número 3

//Tareas

// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
// let subtTwoPar = (parA=parseInt(prompt(`Ejercicio 1 - Ingrese un número`)), parB=parseInt(prompt(`Ejercicio 1 - Ingrese otro número`))) => {
//     console.log(`Resultado ejercicio 1 (resta): ${parA-parB}`);
// };
// subtTwoPar();

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
let addNum = () => {
  let valueA = 5;
  console.log(`Resultado ejercicio 2 (suma): ${valueA + 10}`);
}; //también funciona abreviado con -let addNum = (valueA=5) => console.log(`Resultado ejercicio 2 (suma): ${valueA+10}`);-
addNum();

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
let concTwoStr = () => {
  let valueB = `River`;
  let valueC = `es pésimo ;)`;
  console.log(`Resultado ejercicio 3 (concatenado): ${valueB} ${valueC}`);
}; //También funciona con -let concTwoStr = (valueB=`River`,valueC=`es pésimo ;) ...`) => console.log(`Resultado ejercicio 3 (concatenado): ${valueB} ${valueC}`);-
concTwoStr();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
let boolEqComp = () => {
  let valueD = true;
  let valueE = false;
  console.log(`Resultado ejercicio 4 (comparación): ${valueD == valueE}`);
};
boolEqComp();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
let boolDifComp = () => {
  let valueF = false;
  let valueG = false;
  console.log(`Resultado ejercicio 5 (diferente de): ${valueF != valueG}`);
};
boolDifComp();

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
let numBigComp = () => {
  let valueH = 734;
  let valueI = 652;
  console.log(`Resultado ejercicio 6 (mayor que): ${valueH > valueI}`);
};
numBigComp();

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
// let wordQuant = (phrase=prompt(`Ingrese sus nombres y apellidos completos por favor:`)) => {
//     let wordCount = phrase.split(" ").length;
//     let letterCount = phrase.split(" ").join("").length;
//     console.log(`Resultado ejercicio 7 (palabras) es: ${wordCount}`);
//     console.log(`Resultado ejercicio 7 bis (caracteres) es: ${letterCount}`);
// }
// wordQuant();

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
let filterFunc = (numberIn) => {
  let tempData;
  if (numberIn > 0) {
    tempData = `Positivo`;
  } else if (numberIn < 0) {
    tempData = `Negativo`;
  } else if (numberIn === 0) {
    tempData = `Cero`;
  } else {
    tempData = `Ingrese un número por favor...`;
  }
  console.log(`Resultado ejercicio 8 (signo): ${tempData}`);
};
filterFunc();

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
let evenOdd = (numberIn2) => {
  let state;
  if (numberIn2 % 2 == 0) {
    state = `Par`;
  } else if (numberIn2 == undefined) {
    state = `Ingrese un número por favor...`;
  } else {
    state = `Impar`;
  }
  console.log(`Resultado ejercicio 9 (par-impar): ${state}`);
};
evenOdd();

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
// COMPLETADO EN EJERCICIO 9 !!

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
// COMPLETADO EN EJERCICIO 8 !!

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
// let higherNum = (numA, numB) => {
//     numA = parseInt(prompt(`Por favor ingrese el primer número a comparar:`));
//     numB = parseInt(prompt(`Por favor ingrese el segundo número a comparar:`));
//     let compareNum = Math.max(numA, numB);
//     console.log(`Resultado ejercicio 10 (mayor): ${compareNum}`);
// }
// higherNum();

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
// let finalPass;
// let passValidation = () => {
//     let tempInPass = prompt(`Ingrese su nueva contraseña por favor:`);
//     let passLengthValidate = 8<=tempInPass.length && tempInPass.length<=32;
//     let passSpecCharValidate = tempInPass.includes(`~`)||tempInPass.includes(`@`)||tempInPass.includes(`_`)||tempInPass.includes(`/`)||tempInPass.includes(`+`)||tempInPass.includes(`:`);
//     if (passLengthValidate && passSpecCharValidate) {
//         finalPass = tempInPass;
//         alert(`Gracias, su contraseña ha sido guardada`);
//     } else if (tempInPass == ``) {
//         alert(`Su contraseña no puede estar vacia`);
//         passValidation();
//     } else if (passLengthValidate == false) {
//         alert(`Su contraseña debe ser mayor que 4 y menor que 32 caracteres`);
//         passValidation();
//     } else if (passSpecCharValidate == false) {
//         alert(`Su contraseña debe contener al menos 1 caracter especial:  ~ @ _ / + :`);
//         passValidation();
//     }
// }
// passValidation();
// console.log(`Resultado ejercicio 11 (validación): ${finalPass}`);

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
// let userRatingApproved;
// let ratingChecked = () => {
//     let userRating = parseInt(prompt(`Por favor ingrese su calificación en una escala del 0 al 100`));
//     if (userRating>0 && userRating<100) {
//         userRatingApproved = userRating;
//     } else {
//         alert(`Solo se permiten números positivos entre 0 y 100`);
//         ratingChecked();
//     }
// }
// ratingChecked();
// let validation = userRatingApproved >= 70;
// validation ? alert(`Gracias por su calificación (${userRatingApproved}/100), la misma es aprobatoria`) : alert(`Gracias por su calificación (${userRatingApproved}/100), la misma es desaprobatoria`);
// console.log(`Resultado ejercicio 12 (calificador): ${userRatingApproved}`);

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
// let userInChain = prompt(`Por favor ingrese un palíndromo`).trim().toUpperCase();
// let stdChain = userInChain.split("");
// let invChain = [...stdChain].reverse();
// let validationChain = stdChain.join("")===invChain.join("");
// validationChain ? (alert(`"${userInChain}" Es un palíndromo`),console.log(`Resultado ejercicio 13 (palíndromo):"${userInChain}" Es un palíndromo`)) : (alert(`"${userInChain}" No es un palíndromo`), console.log(`Resultado ejercicio 13 (palíndromo):"${userInChain}" No es un palíndromo`));

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
// let filteredLetter;
// let filterLetter = () => {
//     let userInLetter = prompt(`Por favor introduzca una letra`).trim().toLowerCase();
//     if (userInLetter.match(/[a-z]/) && userInLetter.length===1) {
//         filteredLetter = userInLetter;
//     } else {
//         alert(`Por favor introduzca una sola letra`);
//         filterLetter();
//     }
// }
// filterLetter();
// let vocalValidation = filteredLetter.match(/[aeiou]/);
// alert(`La letra "${filteredLetter}" es una ${vocalValidation ? `vocal` : `consonante`}.`);
// console.log(`Resultado ejercicio 14 (vocal-consonante): "${filteredLetter}" es una ${vocalValidation ? `vocal` : `consonante`}.`);

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
// let filteredDayNum;
// const weekDays = [null, `Lunes`, `Martes`, `Miercoles`, `Jueves`, `Viernes`, `Sábado`, `Domingo`]
// let filterDayNum = () => {
//     let userInDayNum = prompt(`Por favor ingrese un número del 1 al 7:`).trim();
//     if (userInDayNum.match(/[1-7]/) && userInDayNum.length===1) {
//         filteredDayNum = parseInt(userInDayNum);
//     } else {
//         alert(`Por favor ingrese solo un número entre 1 y 7`);
//         filterDayNum();
//     }
// }
// filterDayNum();
// let selectedDay = weekDays[filteredDayNum];
// alert(`El número ingresado (${filteredDayNum}) corresponde al día ${selectedDay}.`);
// console.log(`Resultado ejercicio 15 (seleccion día): ${selectedDay}`);

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
//TODAVIA NO LO PUEDO RESOLVER!!

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
// let adultCheck = () => {
//     let ageValidate;
//     let userAge = prompt(`Por favor ingrese su edad:`).trim();
//     if (userAge.match(/[0-9]/) && userAge.length<=3 && userAge!=1) {
//         ageValidate = userAge>=18;
//         alert(`Usted tiene ${userAge} años y es ${ageValidate ? `mayor de edad` : `menor de edad`}`);
//         console.log(`Resultado ejercicio 17 (mayor de edad): ${ageValidate ? `mayor de edad` : `menor de edad`} (${userAge} años)`);
//     } else {
//         alert(`Por favor ingrese su edad con digitos numéricos (2-999)`);
//         adultCheck();
//     }
// }
// adultCheck();

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
// let passedNumA;
// let passedNumB;
// let validateNumA = () => {
//     let userInNumA = prompt(`Por favor ingrese un número de dos dígitos máximo:`).trim();
//     if (userInNumA.match(/[0-9]/) && userInNumA.length<=2) {
//         passedNumA = parseInt(userInNumA);
//     } else {
//         alert(`Por favor ingrese un máximo de dos dígitos`);
//         validateNumA();
//     }
// }
// validateNumA();
// let validateNumB = () => {
//     let userInNumB = prompt(`Por favor ingrese otro número de dos dígitos máximo:`).trim();
//     if (userInNumB.match(/[0-9]/) && userInNumB.length<=2) {
//         passedNumB = parseInt(userInNumB);
//     } else {
//         alert(`Por favor ingrese un máximo de dos dígitos`);
//         validateNumB();
//     }
// }
// validateNumB();
// let addNumAB = passedNumA + passedNumB;
// let validationState;
// let equalLowerHigher = () => {
//     if (addNumAB>100) {
//         validationState = `mayor`;
//     } else if (addNumAB<100) {
//         validationState = `menor`;
//     } else {
//         validationState = `igual`;
//     }
// }
// equalLowerHigher();
// alert(`La suma de los números ingresados es ${validationState} que 100`);
// console.log(`Resultado ejercicio 18 (igual menor mayor): "${passedNumA}" más "${passedNumB}" es ${validationState} que 100`);

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
// let passedNumC;
// let passedNumD;
// let passedNumE;
// let validateNumC = () => {
//     let oneOfThreeNum = prompt(`Por favor ingrese el primer número (1 de 3) para comparar:`).trim();
//     if (oneOfThreeNum.match(/[0-9]/)) {
//         passedNumC = parseInt(oneOfThreeNum);
//     } else {
//         alert(`Por favor ingrese solo números`);
//         validateNumC();
//     }
// }
// validateNumC();
// let validateNumD = () => {
//     let twoOfThreeNum = prompt(`Por favor ingrese el segundo número (2 de 3) para comparar:`).trim();
//     if (twoOfThreeNum.match(/[0-9]/)) {
//         passedNumD = parseInt(twoOfThreeNum);
//     } else {
//         alert(`Por favor ingrese solo números`);
//         validateNumD();
//     }
// }
// validateNumD();
// let validateNumE = () => {
//     let threeOfThreeNum = prompt(`Por favor ingrese el tercer número (3 de 3) para comparar:`).trim();
//     if (threeOfThreeNum.match(/[0-9]/)) {
//         passedNumE = parseInt(threeOfThreeNum);
//     } else {
//         alert(`Por favor ingrese solo números`);
//         validateNumE();
//     }
// }
// validateNumE();
// let compareThreeNum = Math.max(passedNumC, passedNumD, passedNumE);
// alert(`El mayor de los números ingresados es "${compareThreeNum}"`);
// console.log(`Resultado ejercicio 19 (mayor de tres): "${compareThreeNum}" es el mayor`);

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
// let passedLetter;
// let caseState;
// let validateInLetter = () => {
//     let inLetter = prompt(`Por favor ingrese una letra:`).trim();
//     if (inLetter.match(/[a-z]/) && inLetter.length===1) {
//         passedLetter = inLetter;
//         caseState = true;
//     } else if (inLetter.match(/[A-Z]/) && inLetter.length===1) {
//         passedLetter = inLetter;
//         caseState = false;
//     } else {
//         alert(`Por favor ingrese solo un caracter no numérico`);
//         validateInLetter();
//     }
// }
// validateInLetter();
// alert(`La letra ingresada "${passedLetter}" es una letra ${caseState ? `minúscula` : `mayúscula`}.`);
// console.log(`Resultado ejercicio 20 (minúscula mayúscula): "${passedLetter}" es ${caseState ? `minúscula` : `mayúscula`}`);

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos.
// En cualquier otro caso, devolver el número.
let fizzBuzz = (fbNum) => {
  if (fbNum == undefined) {
    return `Ingrese un número por favor`;
  } else if (fbNum % 3 === 0 && fbNum % 5 != 0) {
    return `Fizz`;
  } else if (fbNum % 3 != 0 && fbNum % 5 === 0) {
    return `Buzz`;
  } else if (fbNum % 3 === 0 && fbNum % 5 === 0) {
    return `FizzBuzz`;
  } else {
    return fbNum;
  }
};
console.log(`Resultado ejercicio 21 (Fizz Buzz): ${fizzBuzz()}`);

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
// let checkedNumP;
// let perfectState;
// let checkInNum = () => {
//     let userInNumP = prompt(`Por favor ingrese un número:`).trim();
//     if (userInNumP.match(/[0-9]/)) {
//         checkedNumP = parseInt(userInNumP);
//     } else {
//         alert(`Por favor ingrese solo números`);
//         checkInNum();
//     }
// }
// checkInNum();
// let perfectNum = (checkedNumP) => {
//     if (checkedNumP===)
// } TODAVÍA NO LO PUEDO TERMINAR DE RESOLVER!!

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
// TODAVÍA NO LO PUEDO RESOLVER!!

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
// let userInDate = prompt(`Por favor introduzca una fecha en formato dd/mm/aaaa:`).split("/");
// let dayValue = parseInt(userInDate[0].trim());
// let monthValue = parseInt(userInDate[1].trim());
// let yearValue = parseInt(userInDate[2].trim());
// let isYearLeap = yearValue%4===0 && (yearValue%100!==0 || yearValue%400===0);
// const regularYear = {
//     1: 31,
//     2: 28,
//     3: 31,
//     4: 30,
//     5: 31,
//     6: 30,
//     7: 31,
//     8: 31,
//     9: 30,
//     10: 31,
//     11: 30,
//     12: 31,
// };
// const leapYear = {
//     1: 31,
//     2: 29,
//     3: 31,
//     4: 30,
//     5: 31,
//     6: 30,
//     7: 31,
//     8: 31,
//     9: 30,
//     10: 31,
//     11: 30,
//     12: 31,
// }
// let validatorDate = () => {
//     if ((isYearLeap && dayValue<=leapYear[monthValue] && String(yearValue).length<=4) || (!isYearLeap && dayValue<=regularYear[monthValue] && String(yearValue).length<=4)) {
//         console.log(`Resultado ejercicio 24 (fecha válida): Fecha válida (${dayValue}/${monthValue}/${yearValue})`);
//         alert(`La fecha ingresada es válida!`);
//     } else {
//         console.log(`Resultado ejercicio 24 (fecha válida): Fecha inválida (${dayValue}/${monthValue}/${yearValue})`);
//         alert(`La fecha ingresada es inválida, por favor intente nuevamente`);
//     }
// }
// validatorDate();

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// let monthNum = parseInt(prompt(`Por favor ingrese un número del 1 al 12`).trim());
// switch (monthNum) {
//   case 1:
//     console.log(`Usted a seleccionado el mes de enero (${monthNum})`);
//     break;
//   case 2:
//     console.log(`Usted a seleccionado el mes de febrero (${monthNum})`);
//     break;
//   case 3:
//     console.log(`Usted a seleccionado el mes de marzo (${monthNum})`);
//     break;
//   case 4:
//     console.log(`Usted a seleccionado el mes de abril (${monthNum})`);
//     break;
//   case 5:
//     console.log(`Usted a seleccionado el mes de mayo (${monthNum})`);
//     break;
//   case 6:
//     console.log(`Usted a seleccionado el mes de junio (${monthNum})`);
//     break;
//   case 7:
//     console.log(`Usted a seleccionado el mes de julio (${monthNum})`);
//     break;
//   case 8:
//     console.log(`Usted a seleccionado el mes de agosto (${monthNum})`);
//     break;
//   case 9:
//     console.log(`Usted a seleccionado el mes de setiembre (${monthNum})`);
//     break;
//   case 10:
//     console.log(`Usted a seleccionado el mes de octubre (${monthNum})`);
//     break;
//   case 11:
//     console.log(`Usted a seleccionado el mes de noviembre (${monthNum})`);
//     break;
//   case 12:
//     console.log(`Usted a seleccionado el mes de diciembre (${monthNum})`);
//     break;
//   default:
//     console.log(`El valor ingresado es incorrecto`);
//     break;
// }

// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
// let dayNum = parseInt(prompt(`Por favor ingrese un número del 1 al 7`).trim());
// switch (dayNum) {
//   case 1:
//     console.log(`Usted a seleccionado el día lunes`);
//     break;
//   case 2:
//     console.log(`Usted a seleccionado el día martes`);
//     break;
//   case 3:
//     console.log(`Usted a seleccionado el día miércoles`);
//     break;
//   case 4:
//     console.log(`Usted a seleccionado el día jueves`);
//     break;
//   case 5:
//     console.log(`Usted a seleccionado el día viernes`);
//     break;
//   case 6:
//     console.log(`Usted a seleccionado el día sábado`);
//     break;
//   case 7:
//     console.log(`Usted a seleccionado el día domingo`);
//     break;
//   default:
//     console.log(`El valor ingresado es incorrecto`);
//     break;
// }

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// RESUELTO EN EJERCICIO 14 1ra tanda!!

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// let dayNum = parseInt(prompt(`Por favor ingrese un número del 1 al 5`).trim());
// let arrayNum = [`El`, `día`, `seleccionado`, `es`, `el`];
// switch (dayNum) {
//   case 1:
//     arrayNum.push(`lunes`);
//     break;
//   case 2:
//     arrayNum.push(`martes`);
//     break;
//   case 3:
//     arrayNum.push(`miercoles`);
//     break;
//   case 4:
//     arrayNum.push(`jueves`);
//     break;
//   case 5:
//     arrayNum.push(`viernes`);
//     break;
//   default:
//     console.log(`El valor ingresado es incorrecto`);
//     arrayNum.push(`INCORRECTO`);
//     break;
// }
// let stringNum = arrayNum.join(" ");
// console.log(arrayNum);
// console.log(stringNum);

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
// RESUELTO EN EJERCICIO 20 1ra tanda!!

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
// let userInScore = parseInt(prompt(`Por favor ingrese un número del 1 al 5`).trim());
// let scoreNote;
// switch (userInScore) {
//   case 0:
//     scoreNote = `suspenso`;
//     break;
//   case 1:
//     scoreNote = `suspenso`;
//     break;
//   case 2:
//     scoreNote = `suspenso`;
//     break;
//   case 3:
//     scoreNote = `suspenso`;
//     break;
//   case 4:
//     scoreNote = `suspenso`;
//     break;
//   case 5:
//     scoreNote = `suspenso`;
//     break;
//   case 6:
//     scoreNote = `aprobado`;
//     break;
//   case 7:
//     scoreNote = `aprobado`;
//     break;
//   case 8:
//     scoreNote = `aprobado`;
//     break;
//   case 9:
//     scoreNote = `notable`;
//     break;
//   case 10:
//     scoreNote = `sobresaliente`;
//     break;
//   default:
//     console.log(`El valor ingresado es incorrecto`);
//     scoreNote = `nula`;
//     break;
// }
// console.log(`La nota ingresada (${userInScore}) es: "${scoreNote}".`);

// 7) Imprimir los números pares del 2 al 20 en la consola.
let arrayEven = [];
let i = 2;
for (i; i <= 20; i++) {
  if (i % 2 === 0) {
    arrayEven.push(i);
  }
}
console.log(`Números pares entre 2-20: ${arrayEven}`);

// 8) Recorrer un string y mostrar en la consola cada letra en mayúsculas.
let stringPhrase = `Esto es tan solo el mejor texto de prueba`;
let onlyWords = stringPhrase.trim().split(" ").join("");
let wordsAmount = onlyWords.length;
let arrayPhrase = [];
let ii = 0;
for (ii; ii<=wordsAmount-1; ii++) {
    arrayPhrase.push(onlyWords.toUpperCase()[ii]);
};
console.log(arrayPhrase);

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// Dado un array de números, escribir una función que retorne el número más grande del array.
// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
