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
    console.log(`Resultado ejercicio 2 (suma): ${valueA+10}`);
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
    console.log(`Resultado ejercicio 4 (comparación): ${valueD==valueE}`);
};
boolEqComp();


// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
let boolDifComp = () => {
    let valueF = false;
    let valueG = false;
    console.log(`Resultado ejercicio 5 (diferente de): ${valueF!=valueG}`);
};
boolDifComp();


// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
let numBigComp = () => {
    let valueH = 734;
    let valueI = 652;
    console.log(`Resultado ejercicio 6 (mayor que): ${valueH>valueI}`);
}
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
}
filterFunc();


//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
let evenOdd = (numberIn2) => {
    let state;
    if (numberIn2%2==0) {
        state = `Par`;
    } else if (numberIn2==undefined) {
        state= `Ingrese un número por favor...`;
    } else {
        state = `Impar`;
    }
    console.log(`Resultado ejercicio 9 (par-impar): ${state}`);
}
evenOdd();


//Crear un programa que pida al usuario un número y luego muestre si es par o impar. COMPLETADO EN EJERCICIO 9 !!

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero. COMPLETADO EN EJERCICIO 8 !!


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
// validationChain ? alert(`"${userInChain}" Es un palíndromo`) : alert(`"${userInChain}" No es un palíndromo`);
// console.log(`Resultado ejercicio 13 (palíndromo): ${validationChain}`);


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



// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.