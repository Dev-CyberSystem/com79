//switch

let diaDeLaSemana = prompt("Ingrese un dia de la semana").toUpperCase();

/*
switch(diaDeLaSemana){
    case "LUNES":
    // console.log("Hoy es martes")
    case "MARTES":
    case "MIERCOLES":
        console.log("Es dia laboral");
     break;
     default:
        console.log("NO ES NINGUN DIA DE LA SEMANA");
        break;

}*/

let numero = 5

switch (true)
{
    //podemos poner las condiciones que nosotros quieramos
    //case numero> 2 && numero < 5:
    case numero >0:
        console.log("Es positivo");
        break;
     case numero<0:
        console.log("Es negativo");
        break;
    default:
        console.log("No es un numero");   
        break;
}

if(numero > 2 && numero < 5)
{
    console.log("Es positivo");
}
else if(numero<0)
{
    console.log("Es negativo")
}
else{
    console.log("No es un numero")
}

//bucles o ciclos o loops 
//for while do while

// for es el mas utilizado. Se utiliza cuando sabemos la cantidad de veces que se va a ejecutar el codigo
// for(inicializacion; condicion; incremento)
//{
    // codigo
//}

/*for(let i =0; i<10;i++)
{
    console.log(i)
}

let array = ["hola", "como","estas","hoy"]
let contadorArray = Array.length;
let posicion = array[0]
console.log(posicion)
console.log(contadorArray)

let i = 0;
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}*/

//while se utiliza cuando no sabemos la cantidad de veces que se va a ejecutar el codigo
//sintaxis
// while(condicion)
//{ codigo a ejecutar
//incrementador o decrementador
//}
/*
let i=1

while(i<=10)
{
    console.log(i);
    i++;
}  siempre es necesario tener un incrementador ya que seria un bucle infinito*/

/* do while se utiliza cuando no sabemos la cantidad de veces que se va a ejecutar el codigo 
 sintaxis
 
 do{
    codigo a ejecutar
    incrementado o descrementador
 } while(codicion)*/

 let number

 do{
    number = prompt("Ingrese un numero")
    console.log(number)
 } while(number<=0)


 // pedir un numero aletorio
 //pedir al usuario que adivine un número aleatorio entre 1 y 10 utilizando while
//ejercicio
 let numeroAleatorio = Math.floor(Math.random()*10) +1;

 let number1;
 while(number1 !== numeroAleatorio)
 {
    number1 = parseInt(prompt("Ingresa un numero entre 1 y 10"));
    if(number<numeroAleatorio)
    {
        console.log("El numero que ingresaste es mas chico")
    }else if(number1 > numeroAleatorio)
    {
        console.log("El numero ingresaste es mas grande")
    }else{
        console.log("Ganaste")
    }
 }

 //Metodo de Array

// creación de un array

let array = ["hola",2,true,[1,2,3],{nombre:"juan"}]; 
// encontrar una posicion de un elemento en el array

console.log(array[0]) //hola
console.log(array[1])//2
console.log(array[2])//true
console.log(array[3])// [1,2,3]

//Agregar elementos a un array

let numerosAdd = [1,2,3];
numerosAdd.push(4) // se agrega en la ultima posicion del array
console.log(numerosAdd)

// Agregar elementos al principio del array
numerosAdd.unshift(0);
//numerosAdd.unshift("boca")

//Agregar un elemento en una posicion especifica

//el primero es en que posicion debo agregar el numero, en el segundo cuando elementos quiero eliminar en posiciones

numerosAdd.splice(2,0,"especifico")
//numerosAdd.splice(0,2,"saliste de la copa")

//Eliminar elementos de un array
numerosAdd.pop();//elimina el ultimo elemento del Array
console.log(numerosAdd)

//eliminar el primer elemento del array
numerosAdd.shift()

//contar la cantidad de elementos de un array
numerosAdd.length;
console.log(numerosAdd);

//Para encontrar la posicion de un elemento en un array

let numeros2 = [7,8,9]
console.log(numeros2.indexOf(3))
console.log(posicion)