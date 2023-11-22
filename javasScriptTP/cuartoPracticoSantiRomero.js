//let numero = 10;

//console.log("Valor de la variable:", numero);


//numero++;

//console.log("Nuevo valor de la variable:", numero);


//let miVariable = 10;
//miVariable--;

//console.log("El valor inicial de la variable es: 10");
//console.log("Después de utilizar el operador de decremento (--), el nuevo valor es: " + miVariable);

//let miCadena = "Hola, ";
//miCadena = miCadena + "esto es un ";

//miCadena = miCadena + "ejemplo de "

//miCadena = miCadena + "concatenación.";
//console.log(miCadena);

//let booleano1 = true;
//let booleano2 = false;


//let resultado = booleano1 && booleano2;


//console.log("El resultado de la operación AND es: " + resultado);

//let booleano1 = true;
//let booleano2 = false;

//let resultado = booleano1 || booleano2;


//console.log("El resultado de la operación OR es: " + resultado);

//let valor1 = 15;
//let valor2 = 10;


//let resultado = valor1 > valor2;


//console.log("¿El valor1 es mayor que valor2? " + resultado);

//let valor1 = 11;
//let valor2 = 10;

//let resultado = valor1 <= valor2;

//console.log("¿El valor1 es menor o igual que valor2? " + resultado);


//let numeroIngresado = prompt("Por favor, ingrese un número:");
//console.log("Número ingresado por el usuario: " + numeroIngresado);

//let nombreIngresado = prompt("Por favor, ingresa tu nombre:");

//console.log("Nombre ingresado por el usuario: " + nombreIngresado);

 //   let numero1 = prompt("Ingrese el primer número:");
 //   let numero2 = prompt("Ingrese el segundo número:");

  //  numero1 = parseFloat(numero1);
   // numero2 = parseFloat(numero2);

    //let resultadoSuma = numero1 + numero2;

    //document.write("<h2>Resultado de la suma:</h2>");
   // document.write("<p>" + numero1 + " + " + numero2 + " = " + resultadoSuma + "</p>");

   //TERCER PRACTICOOOOOO 



//resta con dos parametros
function resta(a, b, c) {
    const resultado = a - b - c;
    console.log("El resultado de esta resta es:", resultado);
}
resta(15, 7, 6); 

//sumaaa
function suma() {
 let numero = 5;
 numero += 10;
 console.log("El resultado de esta suma es:", numero);
}
suma();
//concatenación
function concatenación() {
    let texto1 = "Hola, comisión ";
    let texto2 = "esta es mi concatenación, ";
    let texto3 = "no es mucho ";
    let texto4 = "pero es trabajo honesto";
    let resultado = texto1 + texto2 + texto3 + texto4; 

    console.log( resultado);
}
concatenación();
//comparacion de igualdad
function comparar() {
    let calle1 = false;
    let calle2 = true;

    if (calle1 == calle2) {
        console.log("las calles son iguales.");
    } else {
        console.log("Las calles son diferentes.");
    }
}
comparar()
//comparación de desigualdad
function comparar2() {
    let casa1 = false;
    let casa2= false;

    let resultado = casa1 !== casa2; 

    if (resultado) {
        console.log("Las casas son diferentes.");
    } else {
        console.log("Las casas son iguales.");
    }
}
comparar2();

//mayor que...
function mayorQue() {
    let numero1 = 68;
    let numero2 = 67;

    if (numero1 > numero2) {
        console.log("El primer número es mayor que el segundo.");
    } else {
        console.log("El primer número no es mayor que el segundo.");
    }
}
mayorQue();
 //longitud de palabras 
  
 function longitud(palabra) {
 return palabra.length;
  }
  
 //let palabraUsuario = prompt("Ingresar una oración:");
 //let cantidadCaracteres = longitud(palabraUsuario);
 //console.log(`La oración tiene ${cantidadCaracteres} caracteres.`);

 
 //valor absouto
 function verifNum(numero) {
    if (numero > 0) {
      return "Positivo";
    } 
     else if (numero < 0) {
      return "Negativo";
    }
    return "Cero";
  }
  

  //let num = prompt("Ingresa un número:");
  //let resultado = verifNum(Number(num));
  //console.log(`El número es ${resultado}.`);
  
  //verificar si es par o impar 
  function ParImpar(numero) {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Impar";
    }
  }
  
  //let num = prompt("Ingresa un número:");
  //let resultado = ParImpar(num);
  //console.log(`El número es ${resultado}.`);
  
// Solicitar al usuario un número y almacenarlo en una variable
//let numeroUsuario = prompt("Ingresa un número:");


//if (numeroUsuario % 2 === 0) {
 // console.log(`El número ${numeroUsuario} es Par.`);
//} else {
 // console.log(`El número ${numeroUsuario} es Impar.`);
//}



// Solicitar al usuario un número y verifiacar si es positivo o negativo
//let numero = parseFloat(prompt("Ingresa un número:"));
//if (numero > 0) {
  //console.log(`El número ${numero} es Positivo.`);
//} else if (numero < 0) {
//  console.log(`El número ${numero} es Negativo.`);
//} else {
//  console.log("El número es Cero.");
//}

// Solicitar al usuario dos números y compararloss
//let numero1 = parseFloat(prompt("Ingresa el primer número:"));
//let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

//if (numero1 > numero2) {
//  console.log(`El número ${numero1} es mayor que el número ${numero2}.`);} else if (numero2 > numero1) {
//  console.log(`El número ${numero2} es mayor que el número ${numero1}.`);} else {
    //  console.log("Los dos son iguales.");}

//function Contrasenia(contrasenia) {
   
  //  if (contrasenia.length < 8) {
    //  return "La contraseña debe tener mínimo 8 caracteres.";}
    
   // let caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
   // if (!caracteresEspeciales.test(contrasenia)) {
   //   return "La contraseña debe contener al menos un carácter especial (!@#$%^&*()_+-=[]{};:'\"\\|,.<>/?)."; }
   // return "La contraseña es válida.";}
  //let contrasenia = prompt("Ingresa una contraseña:");
  //let resultado = Contrasenia(contrasenia);
  //console.log(resultado);
  
  
  // Solicitar al usuario una calificación y verificar si está aprobado o desaprobado
//let calificacion = parseFloat(prompt("Ingresa tu calificación:"));

//if (calificacion >= 70) {
//  console.log(`Tu calificación es ${calificacion}, ¡estás aprobado!`);} else {
//  console.log(`Tu calificación es ${calificacion}, estas desaprobado. No te desanimes peor es ser de boca.`);}
 
//vocales y consonantes
//let vocales = prompt("ingrese una letra").toUpperCase().trim();

//switch (vocales) {
  //case "A":
  //case "E":
//  case "I":
  //case "O":
  //case "U":
 //   console.log("Es una vocal");
   // break;
  //case "1":
 //   case "2":
 //   case "3":
//  case "4":
//  case "5":   
//  case "6":
//  case "7":
//  case "8":
//  case "9":
//  case "0":
//      console.log("No es una letra"); 
//      break; 
//  default:
//    console.log("Es una consonante");
//    break;}

//dia de la semana

//let numeroDia = parseInt(prompt("ingrese un número del 1 al 7"))



//switch (numeroDia) {
  //case 1:
 //   dia = "Lunes";
 //   break;
 // case 2:
 //   dia = "Martes";
 //   break;
  //case 3:
   // dia = "Miércoles";
    //break;
  //case 4:
   // dia = "Jueves";
   // break;
  //case 5:
  //  dia = "Viernes";
   // break;
 // case 6:
   // dia = "Sábado";
 //   break;
  //case 7:
    //dia = "Domingo";
 //   break;
 // default:
  // dia = "Número inválido";
    //break;}

//console.log(`El número ${numeroDia} es el día  ${dia}`);

//números primos.

function Primo(num) {
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

//function verificarPrimo() {
  //const numero = parseInt(prompt("Ingresa un número mayor que 1: "));
  
 // if (Primo(numero)) { console.log(`${numero} es un número primo.`);
 // } else {
  //console.log(`${numero} no es un número primo.`);}}

//verificarPrimo();

//verificando si es mayor

//function verificarEdad() {
//  const edad = parseInt(prompt("Por favor, ingresa tu edad: "));
  
  //if (edad >= 18) {
 //     console.log("Eres legal.");
  //} else {
 //     console.log("No eres legal.");}}

//verificarEdad();

//sumando 2 números 
//function Sumamos() {
 // const num1 = parseFloat(prompt("Ingresa el primer número: "));
 // const num2 = parseFloat(prompt("Ingresa el segundo número: "));
  
 // const suma = num1 + num2;
  
 // if (suma > 100) {
  //    console.log(`La suma de ${num1} y ${num2} es mayor a 100.`);
//  } else if (suma < 100) {
//      console.log(`La suma de ${num1} y ${num2} es menor a 100.`);
//  } else {
//      console.log(`La suma de ${num1} y ${num2} es igual a 100.`);
 // }}

//Sumamos();
// el hermano mayor de los 3

//function encontrarMayor() {
  //  const num1 = parseFloat(prompt("Ingresa el primer hermano: "));
   // const num2 = parseFloat(prompt("Ingresa el segundo hermano: "));
  //  const num3 = parseFloat(prompt("Ingresa el tercer hermano: "));
    
//    let mayor = num1;

//    if (num2 > mayor) {
//        mayor = num2;  }
 //   if (num3 > mayor) {
 //       mayor = num3;  }

 //   console.log(`El mayor de los tres hermanos (${num1}, ${num2}, ${num3}) es: ${mayor}`);
//}

//encontrarMayor();

//MAYUSCULA minuscula

//function verificarLetra() {
//  const letra = prompt("Ingresa una letra: ");
//  if (letra.length !== 1) {
//      console.log("Por favor, ingresa solo una letra.");
 //     return; }

  //const esMayuscula = letra === letra.toUpperCase();
  //const esMinuscula = letra === letra.toLowerCase();

 // if (esMayuscula) {
 
    //     console.log(`La letra "${letra}" es mayúscula.`);
 // } else if (esMinuscula) {
 //     console.log(`La letra "${letra}" es minúscula.`);
//  } else {
//      console.log(`"${letra}" no es una letra válida.`); }
      //}

//verificarLetra();

//fiizBuzz
//function fizzBuzz(numero) {
//  if (numero % 3 === 0 && numero % 5 === 0) {
//      return "FizzBuzz";
 // } else if (numero % 3 === 0) {
 //     return "Fizz";
//  } else if (numero % 5 === 0) {
  //    return "Buzz";
//  } else (numero % 2 === 0); {
//      return "el número no es divisble en ninguno";}}

//function probarFizzBuzz() {
//  const numero = parseInt(prompt("Ingresa un número: "));
// const resultado = fizzBuzz(numero)
//  console.log(`El resultado para el número ${numero} es: ${resultado}`)}

//probarFizzBuzz()



 //Número perfect..... 

 //function esNumeroPerfecto(numero) {
//  let sumaDivisores = 0;
//  for (let i = 1; i < numero; i++) {
  //    if (numero % i === 0) {
    //      sumaDivisores += i;  }    }

 // return sumaDivisores === numero;}

//function NumeroPerfecto() {
  //const numero = parseInt(prompt("Ingresa un número: "));
//if (esNumeroPerfecto(numero)) {
 //     console.log(`${numero} es un número perfecto.`);
 // } else {
  //    console.log(`${numero} no es un número perfecto.`);}}
//NumeroPerfecto();

//Descomposición de un número

/*function obtenerFactoresPrimos(numero) {
  let factor = 2;
  let factores = [];

  while (numero > 1) {
      if (numero % factor === 0) {
          factores.push(factor);
          numero /= factor;
      } else {
          factor++;
      }
  }

  return factores;
}

function mostrarDescomposicion() {
  const num = parseInt(prompt("Ingresa un número para descomponer: "));

  if (isNaN(num) || num <= 1) {
      console.log("Por favor, ingresa un número entero mayor que 1.");
      return;
  }

  const factoresPrimos = obtenerFactoresPrimos(num);
  if (factoresPrimos.length === 1) {
      console.log(`${num} es un número primo.`);
  } else {
      console.log(`La descomposición en factores primos de ${num} es: ${factoresPrimos.join(' * ')}`);
  }
}

mostrarDescomposicion();*/

//anio bisiesto
/*function esFechaValida(dia, mes, anio) {

  const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);


  const diasPorMes = [31, (esBisiesto ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  
  return (mes >= 1 && mes <= 12) && (dia >= 1 && dia <= diasPorMes[mes - 1]);
}



function verificarFecha() {
  const dia = parseInt(prompt("Ingresa el día: "));
  const mes = parseInt(prompt("Ingresa el mes: "));
  const anio = parseInt(prompt("Ingresa el año: "));

  if (esFechaValida(dia, mes, anio)) {
      console.log(`La fecha ${dia}/${mes}/${anio} es válida.`);
  } else {
      console.log(`La fecha ${dia}/${mes}/${anio} no es válida.`);
  }
}

verificarFecha();*/
 
//meses del anio

/*let mesesDelAnio = parseInt(prompt("ingrese un número del 1 al 12"))

switch (mesesDelAnio) {
  case 1: 
  mes = "Enero";
  break;
  case 2: 
  mes = "Febrero";
  break;
  case 3: 
  mes = "Marzo";
  break;
  case 4:
  mes = "Abril";
  break;
  case 5: 
  mes = "Mayo";
  break
  case 6: 
  mes = "Junio";
  break;
  case 7: 
  mes = "Julio";
  break;
  case 8: 
  mes = "Agosto";
  break;
  case 9:   
  mes = "Septiembre";
  break;
  case 10:  
  mes = "Octubre";
  break;
  case 11: 
  mes = "Noviembre";
  break;
  case 12: 
  mes = "Diciembre";
  break;
  default:
    mes = "inexistente";
    break;
}
 console.log(`El número ${mesesDelAnio} es el mes ${mes}`)*/

/*let diaDeLaSemana = parseInt(prompt("Ingrese un número del 1 al 7"))
   switch (diaDeLaSemana) {
    case 1:
      dia = "Lunes";
      break;
    case 2:
      dia = "Martes";
      break;
      case 3:
        dia = "Miercoles";
        break;
    case 4:
      dia = "jueves";
      break;
    case 5:
      dia = "Viernes";
      break;
    case 6:
      dia = "Sabado";
      break;
    case 7:
      dia = "Domingo";
      break;
   }
   console.log(`El número ${diaDeLaSemana} es el dia ${dia}`)*/

   //Consonante o vocal

  
  /*let vocales = prompt("ingrese una letra").toUpperCase().trim();

  switch (vocales) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
     console.log("Es una vocal");
     break;
    case "1":
      case "2":
      case "3":
      case "4":
      case "5":   
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
          console.log("No es una letra"); 
          break; 
      default:
        console.log("Es una consonante");
        break;}*/

  //dia de la semana

  
/*var diaSemana = prompt("Ingresa un número del 1 al 5:");
diaSemana = parseInt(diaSemana);

function obtenerDiaSemana(numero) {
  var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  if (numero >= 1 && numero <= 5) {
    var diaCorrespondiente = diasSemana[numero - 1];
    return diaCorrespondiente;
  } else {
    return "Por favor, ingresa un número válido del 1 al 5.";
  }
}

var diaCorrespondiente = obtenerDiaSemana(diaSemana);
console.log("El día correspondiente es: " + diaCorrespondiente);*/


//MAYUSCULA minuscula

/*function verificarLetra() {
  const letra = prompt("Ingresa una letra: ");
  if (letra.length !== 1) {
    console.log("Por favor, ingresa solo una letra.");
     return; }

  const esMayuscula = letra === letra.toUpperCase();
  const esMinuscula = letra === letra.toLowerCase();

  if (esMayuscula) {
 
        console.log(`La letra "${letra}" es mayúscula.`);
   } else if (esMinuscula) {
      console.log(`La letra "${letra}" es minúscula.`);
   } else {
     console.log(`"${letra}" no es una letra válida.`); }
      }

verificarLetra();*/

//notas de examen
 /* let notas =prompt("Ingrese un número del 0 al 10")
   switch (notas) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
      console.log("Aplazado")
      break;
    case "5":
    case "6":
    case "7":
      console.log("Aprobado")
      break;
    case "8":
    case "9":
      console.log("Notable")
      break;
    case "10":
      console.log("Sobresaliente")
      break;}*/

      // de 2 en 2
     /* for (let i = 2; i <= 20; i += 2) {
        console.log(i);
      }*/
      
      //todas MAYUSCULAS

      /*const palabra = prompt("Ingresa una palabra:");

      for (let i = 0; i < palabra.length; i++) {
       const letraMayus = palabra[i].toUpperCase();
       console.log(letraMayus);
       }*/

       //desde 0 hasta el seleccionado

       /*const numeroIngresado = parseInt(prompt("Ingresa un número:"));

        for (let i = 0; i <= numeroIngresado; i++) {
        console.log(i);
         }*/
         
  // números negativos

/*const numeros = prompt("Ingrese números separados por coma:");
const numerosArray = numeros.split(",");

let contadorNegativos = 0;

numerosArray.forEach(numero => {
    if (parseFloat(numero) < 0) {
        contadorNegativos++;
    }
});

console.log(`La cantidad de números negativos es: ${contadorNegativos}`);*/
 
//impares desde el 1 hasta elelegido

/*const numeroIngresado = parseInt(prompt("Ingresa un número:"));

console.log(`Números impares desde 1 hasta ${numeroIngresado}:`);
for (let i = 1; i <= numeroIngresado; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}*/

//el mas pequeño 


/*const numeros = prompt("Ingrese números separados por la coma:");

const numerosArray = numeros.split(",").map(num => parseFloat(num.trim()));

const numeroMasPequeno = Math.min(...numerosArray);

console.log(`El número más pequeño es el : ${numeroMasPequeno}`);*/

//adivina adivinador
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let intentos = 0;
let adivinado = false;

while (!adivinado) {
    const numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));

    if (numeroUsuario === numeroAleatorio) {
        adivinado = true;
    } else {
        intentos++;
        alert("¡Intenta de nuevo! Ese no es el número.");
    }
}

console.log(`¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);






