/*//Tarea
// 1) Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
// 2) Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
// 3) Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
// 4) Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
// 5) Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
// 6) Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
// 7) Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
//8) Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
//9) Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
// 10) Crear un programa que pida al usuario un número y luego muestre si es par o impar.
//11) Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
//12) Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
//13) Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
//14) Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
//15) Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
// 16) Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
// 17) Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
// 18) Crear un programa que pida al usuario un número y luego muestre si es primo o no.
// 19) Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
// 20) Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
//21)  Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
//22) Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
//23) Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
//24) Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
//25) Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
//26) Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
*/



// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
console.log("-------Ejercicio 1-----------")
/*function restar(n1,n2)
{
   n1 = parseInt (prompt("Ingrese el primer numero para la resta: "))
   n2 = parseInt(prompt("Ingrese el segundo numero para la resta: "))

   let resta = n1-n2;
   console.log(resta)
}
restar()*/
console.log("------------------")
// 2) Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola

console.log("-------Ejercicio 2-----------")/*
let a = 5
function valorSuma(a)
{   
   let sumaV= parseInt(a + 10)
   console.log(sumaV)
}
valorSuma(a)
*/
console.log("------------------")
// 3) Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

console.log("-------Ejercicio 3-----------")/*
let cad1 = "Hola soy de "
let cad2 = "Tucumán"
function concaCadena(cad1,cad2)
{   
   console.log("La siguiente cadena es la union de ambas: ")
   console.log(cad1+""+cad2)

}
concaCadena(cad1,cad2)
console.log("------------------")
*/
// 4) Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

console.log("-------Ejercicio 4-----------")
/*
function compararBool()
{   let b = true
   let a = true

   a==b
   console.log("Son iguales?: ",a===b)
 /* 
 Opcion con IF
   if(a===b)
   {
      console.log("Son iguales")
   }
   else
   {
      console.log("NO son iguales")
   }
   console.log("------------------")  */
/*}
compararBool()*/
//5) Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
console.log("-------Ejercicio 5-----------")
/*
function compararBool2()
{   let b = true
   let a = false

  
  console.log("Son diferentes?: ",a!==b)
 
 //Opcion con IF
 /*  if(a!==b)
   {
      console.log(" SI son diferentes")
   }
   else
   {
      console.log("NO son iguales")
   }*/
   console.log("------------------")  
/*}
compararBool2()*/
console.log("-------Ejercicio 6-----------")
// 6) Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
/*
num1 = parseInt (prompt("Ingrese el primer numero para ser comparado: "))
num2 = parseInt(prompt("Ingrese el segundo numero para ser comparado: "))

function compararNum(num1,num2)
{
      console.log("El primero numero es mayor? ", num1>num2)
      
}
compararNum(num1,num2)
console.log("------------------")  */
// 7) Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
console.log("-------Ejercicio 7-----------")
/*
function contarPalabras() {
	let f = prompt("Ingresa una frase").trim()
	let p = f.split(" ").length
	
   console.log(p)
}
contarPalabras()
console.log("------------------")*/
//8) Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
console.log("-------Ejercicio 8-----------")
/*
let num3 = -1

function igualAcero(num3)
{
      if(num3>0)
      {
         console.log("Es mayor a 0: ")
      }
      else if(num3<0)
      {
         console.log("Es menor a 0: ")
      }
      else 
      console.log("Es igual a 0: ")
}
igualAcero(num3)*/
console.log("------------------")

//9) Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
console.log("-------Ejercicio 9-----------")
/*
let num5 = 10
function parOimpar2(num5){

   if (num5 % 2 === 0) {
       console. log(`El numero ${num5} es Par`);
      }
   else
   {
       console. log(`El numero ${num5} es Impar`);
   }
}
parOimpar2(num5)*/
console.log("------------------")
// 10) Crear un programa que pida al usuario un número y luego muestre si es par o impar.
console.log("-------Ejercicio 10-----------")
/*let num4 = parseInt(prompt("Ingrese un numero para saber si es par o impar: "))

function parOimpar(num4){

   if (num4 % 2 === 0) {
       console. log(`El numero ${num4} es Par`);
      }
   else
   {
       console. log(`El numero ${num4} es Impar`);
   }
}
parOimpar(num4)*/
console.log("------------------")
//11) Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
console.log("-------Ejercicio 11-----------")
/*
let numb = parseInt(prompt("Ingrese un numero positivo o negativo para ser comparado: "))

function igualAcero(numb)
{
      if(numb!==0)
      { 
         switch(numb)
         {
            case 1: 
            console.log(`El numero ${numb} es mayor a 0 `);
               break;
            default:
               console.log(`El numero ${numb} es menor a 0 `);
             break; 
            } 
         }
      else{
          console.log(`El numero ${numb} es igual 0 `);
      }          
}
igualAcero(numb)*/
console.log("------------------")

//12) Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
console.log("-------Ejercicio 12-----------")
/*
function numM(){
   let nu1 = parseInt(prompt("Ingrese el primer numero: "))
   let nu2 = parseInt(prompt("Ingrese el segundo numero: "))
  
   if(nu1===0 && nu2===0)
   {
      console.log(`El numero ${nu2} y ${nu1} son iguales a 0 `);
   }
   else if(nu1>nu2)
   {
      console.log(`El numero ${nu1} es mayor a ${nu2} `);
   }
   else
   {
      console.log(`El numero ${nu2} es mayor a ${nu1} `);
   }
   
}
numM()*/
console.log("------------------")
//13) Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
console.log("-------Ejercicio 13-----------")
/*
let contra = String(prompt("Ingresa una contraseña: "))

function contraValida(contra)
{
      if(contra.length > 10)
      {
         if ((contra.match(/[A-z]/) || contra.match(/[A-Z]/)) && contra.match(/\d/)) {
            
            
                 console.log("La contraseña es valida")
            
         }
         else{
            console.log("La contraseña no cumple con las caracteristicas especificadas de mayusculas")
         }
      }
      else{
         console.log("La contraseña no cumple con la longitud mayor a 10.")
      }
}
contraValida(contra)*/
console.log("------------------")
//14) Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
console.log("-------Ejercicio 14-----------")
/*
let califica = parseInt(prompt("Ingrese una calificacion en decimal por ejemplo 10 = 1 es desprobado y calificaciones mayor a 70 es Aprobado: "))

function calificacion(califica)
{
   if( (califica >=70 && califica <=100))
   {
      console.log("La calificacion ingreso es mayor o igual a 70 esta aprobado")
   }
   else
   {
      console.log("La calificacion que ingresó no esta aprobado o no ingresó la calificacion en decimal.")
   }
}
calificacion(califica)
*/
console.log("-----------------------")


//15) Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
console.log("-------Ejercicio 15-----------")
/*
let cadena1 = String(prompt("Ingrese una cadena para saber si es palidromo"))

function palidromo1(cadena1){
   const cadenaR = cadena1.split("").reverse().join("");
   if(cadena1 === cadenaR)
   {
      console.log("Es palindromo.")
   }
   else
   {
      console.log("No es palindromo.")
   }
}
palidromo1(cadena1)*/
console.log("----------------------")
// 16) Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
console.log("-------Ejercicio 16-----------")
/*
let letra = String(prompt("Ingres una letra: "))

function vocalCons(letra){

   if(letra.length === 1)
   {
      switch(letra)
   {
      case `a`:{ console.log(`Es una vocal ${letra}`); break;}
      case `e`: {console.log(`Es una vocal ${letra}`); break;}
      case `i`:{console.log(`Es una vocal ${letra}`); break;}
      case `o`: {console.log(`Es una vocal ${letra}`); break;}
      case `u`: {console.log(`Es una vocal ${letra}`); break;}
         case `A`:{ console.log(`Es una vocal ${letra}`) ; break;}
         case `E`: {console.log(`Es una vocal ${letra}`); break;}
         case `I`:{console.log(`Es una vocal ${letra}`); break;}
         case `O`: {console.log(`Es una vocal ${letra}`); break;}
         case `U`: {console.log(`Es una vocal ${letra}`); break;}
    default:
      {
         console.log(`Es una consonante ${letra}`)
         break;
      }
   }
   }
   else{
      console.log("No ingreso una letra..-")
   }

}
vocalCons(letra)*/
console.log("----------------------")

// 17) Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
console.log("-------Ejercicio 17-----------")
/*
let n7 = parseInt(prompt("Ingrese un numero del 1 al 7: "))

function semanaC(n7)
{
      switch (n7) {
         case 1:{console.log("Lunes")} ;break;
         case 2:{console.log("Martes")} ;break;
         case 3:{console.log("Miercoles")} ;break;
         case 4:{console.log("Jueves")} ;break;
         case 5:{console.log("Viernes")} ;break;
         case 6:{console.log("Sabados")} ;break;
         case 7:{console.log("Domingos")} ;break;
         default:
            console.log("El numero ingresado no corresponde al dia de la semana.")
            break;
      }
}
semanaC(n7)*/
console.log("-----------------------")
// 18) Crear un programa que pida al usuario un número y luego muestre si es primo o no.
console.log("-------Ejercicio 18-----------")
/*
let n6 = parseInt(prompt("Ingrese un numero para saber si es primo: "))

function esPrimo(n6)
{
   if (n6 === 0 || n6 === 1 || n6 === 4) return console.log(`NO es primo ${n6}`);
	for (let i = 2; i < n6 / 2; i++) {
		if (n6 % i === 0) return console.log(`No es primo ${n6}`);
	}
   return console.log(`Es primo ${n6}`);
}
esPrimo(n6)*/
console.log("-----------------------")

// 19) Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
console.log("-------Ejercicio 19-----------")
/*
function mayorDeEdad(){
   let anioNac = parseInt (prompt("Ingrese su año de nacimiento: "))
let anioActual = 2023
let edad = anioActual - anioNac
 let validacion = edad >= 18
 if( validacion===true )
 {
   console.log(`Usted tiene ${edad} años y es mayor de edad`)
 } 
 else{
   console.log(`Usted tiene ${edad} años y es menor de edad`)
 } 
}
mayorDeEdad()
*/
console.log("-----------------------")
// 20) Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
console.log("-------Ejercicio 20-----------")
/*
let n8 = parseInt(prompt("Ingrese el primero numero para hacer la suma: "))
let n9 = parseInt(prompt("Ingrese el segundo numero para hacer la suma: "))

function sumaMa(n8,n9)
{
   let r = n8 + n9;
         if(r>100)
         {
            console.log("El resultado es mayor a 100 y es: ",r)
         }
         else if(r<100)
         {
            console.log("El resultado es menor a 100 y es: ",r)
         }
         else
         {
            console.log("El resultado es igual a 100: ",r)
         }
}
sumaMa(n8,n9)*/
console.log("-----------------------")
//21)  Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
console.log("-------Ejercicio 21-----------")
/*
let nu3 = parseInt(prompt("Ingrese el primero numero para comparar: "))
let nu4 = parseInt(prompt("Ingrese el segundo numero para comparar: "))
let nu5 = parseInt(prompt("Ingrese el tercer numero para comparar: "))

function mayorTres(nu3,nu4,nu5)
{
   if(nu3 > nu4 && nu3 > nu5)
   {
      console.log(`El primero numero ${nu3} es mayor a ${nu4} y ${nu5}`)
   }
   else if(nu4>nu3 && nu4>nu5)
   {
      console.log(`El primero numero ${nu4} es mayor a ${nu3} y ${nu5}`)
   }
   else{
      console.log(`El primero numero ${nu5} es mayor a ${nu3} y ${nu4}`)
   }

}
mayorTres(nu3,nu4,nu5)*/
console.log("-----------------------")
//22) Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
console.log("-------Ejercicio 22-----------")
/*
function letraMM()
{
   let letra3 = prompt("Ingrese una letra: ")
   var regex = new RegExp("^[a-zA-Z ]+$");
   if(letra3.length === 1 && regex.test(letra3))
   {
      console.log(`La letra es: ${letra3}`)
   }
   else
   {
      console.log("La letra que ingreso supera la especificaciones establecidas: ")
   }
}
letraMM()*/
console.log("-----------------------")
//23) Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
console.log("-------Ejercicio 23-----------")
/*
let nm = parseInt(prompt("Ingresar un numero para saber si es divisible en 3 o 5 : "))
function divisibleFizz(nm)
{
      if(nm%3===0 && nm%5===0)
      {
         console.log("FizzBuzz")
      }
      else if(nm%3===0)
      {
         console.log("Fizz")
      }
      else if(nm%5===0)
      {
         console.log("Buzz")
      }
      else
      {
         console.log(`El numero ${nm} no es divisible en 3 o 5. `)
      }
}
divisibleFizz(nm)*/
console.log("-----------------------")
//24) Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
console.log("-------Ejercicio 24-----------")


console.log("-----------------------")
//25) Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
console.log("-------Ejercicio 25-----------")

console.log("-----------------------")
//26) Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
console.log("-------Ejercicio 26-----------")

console.log("-----------------------")