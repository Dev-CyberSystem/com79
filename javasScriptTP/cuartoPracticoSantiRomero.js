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

function verificarLetra() {
  const letra = prompt("Ingresa una letra: ");

  if (letra.length !== 1) {
      console.log("Por favor, ingresa solo una letra.");
      return;
  }

  const esMayuscula = letra === letra.toUpperCase();
  const esMinuscula = letra === letra.toLowerCase();

  if (esMayuscula) {
      console.log(`La letra "${letra}" es mayúscula.`);
  } else if (esMinuscula) {
      console.log(`La letra "${letra}" es minúscula.`);
  } else {
      console.log(`"${letra}" no es una letra válida.`);
  }
}

verificarLetra();



