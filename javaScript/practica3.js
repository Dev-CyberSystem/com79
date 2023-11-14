// Ejercicio 1 :Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.

/*function resta (num1, num2){
    console.log(num1-num2)
}

resta (78,53);

function restar(){
  let numero3= prompt("Ingrese un número")
    let numero4= prompt("Ingrese otro número")
    let resultado5= numero3 - numero4
    console.log(resultado5)
}
restar();*/

// Ejercicio 2: Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola. 


function sumaDiez(){
    let soloCinco= 5
    let sumaleACinco= soloCinco+10
    console.log(sumaleACinco)
   // alert("Tu resultado es "+ sumaleACinco)
}
sumaDiez();

// Ejercicio 3: Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

function combinadas (){
    let combi1= "Auto"
    let combi2= "Movil"
    console.log(combi1+combi2)
}
combinadas()

//Ejercicio 4:  Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

function sonIguales(){
    let verdad1= true
    let falso2 = false

    console.log(verdad1==falso2)
}
sonIguales();

// Ejercicio 5: Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

function sonDistintos (){
    let verdad2= true
    let verdad4= true
    console.log(verdad2!=verdad4)
}
sonDistintos();

// Ejercicio 6: Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

function esMayor(){
    let numero5=17
    let numero6=23

    if(numero5 > numero6){
        console.log("El número " +" "+ numero5 + "es mayor que " + numero6)
    } else {
        console.log("El número " + numero5 + " no es mayor que " + numero6)
    }
}
esMayor();

