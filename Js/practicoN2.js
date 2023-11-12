//  Autor Paz Matias Andres

//punto 1
console.log("punto 1")
let op = 30 * 60


console.log("El resultado es:", op)
console.log("------------------------------")

//punto 2
console.log("punto 2")
let A = 30
let B = 20

console.log(A==B)
console.log("------------------------------")

//punto 3
console.log("punto 3")
let C = 10
let D = 20
console.log(C!=D) 
console.log("------------------------------")

//punto 4
console.log("punto 4")
let E = 5

console.log(E+=5) 
console.log("------------------------------")

//punto 5
console.log("punto 5")
let F = 16

console.log(F-=3) 
console.log("------------------------------")

//punto 6

console.log("punto 6")
let cadena = "Hola como estan?, "

console.log( cadena + "soy un estudiante de Rolling") 
console.log("------------------------------")

//punto 7
console.log("punto 7")
let casado = true;
let pareja = true;
let casa = true;

if((casa == casado) && (casa == pareja))
{
    console.log(true)
}
console.log("------------------------------")

//punto 8
console.log("punto 8")

let soltero = false;

if( (casa == soltero) || (casado != soltero))
{
    console.log(false)
}
console.log("------------------------------")
//punto 9
console.log("punto 9")
let n1 = 13


if((n1 > 6) && (n1 > 10))
{
    console.log(true)
}
console.log("------------------------------")

//punto 10
console.log("punto 10")

let n2 = 100
if( n2 <= 10000 )
{
    console.log(true)
}

console.log("------------------------------")

//punto 11
console.log("punto 11")

let numero = prompt("Ingrese un numero: ")
console.log(numero)

console.log("------------------------------")


//punto 12
console.log("punto 12")

let nombre = prompt("Ingrese su nombre: ")
console.log(nombre)

console.log("------------------------------")

//punto 13
console.log("punto 13")

console.log("Estamos por hacer una suma: ");

    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el primer número:");

   
   let suma = parseInt(num1) + parseInt(num2);

   document.writeln(suma);
  
console.log("------------------------------")