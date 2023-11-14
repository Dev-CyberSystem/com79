//Funciones 
//Funciones sin parametros
function saludo(){
    console.log("Hola estoy en la clase de rolling")

}

saludo();

//Funcion con parametros

function saludo2(nombre, apellido)
{
  console.log(`Hola ${nombre} ${apellido}`);
}
saludo2("Enzo", "Perez");

function multi(a,b)
{
  console.log(a*b);
}
multi(66,6);

// return

function restar()
{
    console.log("Antes del return")
    return 5;
   // console.log("despues del return")// el return nos corta la ejecución de la funcion
}

let resultado = restar();
console.log(resultado)

//Funciones con parametro con valores predeterminados

function  saludo3(nombre="Diego", apellido="Simeone")
{
    console.log(`Hola ${nombre} ${apellido}`)
}
saludo3();
saludo3("Matias");

//Funciones anonimas

let funcionAnonima = function(){
    console.log("Hola soy anonima") //funcion que ejecuta otra funcion
}
funcionAnonima()

//funciones flecha o arrow function
//arrow funtcion trbajan como funciones anonimas ..... vemos en react

const arrowFunction = (nombre,apellido) => {
    console.log("Esta es una funcion de flecha" + nombre + apellido)
}

arrowFunction("Diego", "Paz")

let arrow = club =>{
    console.log(club)
}  // cuando es un parametro no hace falta pasarlo con parentisi

arrow("River Plate")

let estadio = nombre2 => console.log(nombre2)  // NO hace falta poner return

estadio("Jose Fierro")
let estadios = (nombre2, canchas) => `${canchas} ${nombre2}`  // NO hace falta poner return

let estad = estadios("Monumental", "Estadio completo")
console.log(estad)

let objeto = () => ({ nombre: "Julian",
                apellido: "Paz"})
console.log(objeto());

let personita = () => {
   let persona = { nombre: "Julian",
                apellido: "Paz"}
            
            return persona}

            let newPersona = personita()

    console.log("Esto lo sacamos desde el objeto en la funcion" , newPersona.apellido)

//Ejercicio 

// escribe un progrma que solicite al usuario su año de nacimiento y calcule su edad actual y
// y muestre si es  o no mayor de edad. Luego, muestra la eddad en una cadena de texto.

/*// Paso a paso
1- Escribir un programa
2- Solicitar al usuario el año de nacimiento, parsear el resultado
3- Calcular la edad de la persona. 
4- Validar si es o no mayor de edad.
5- Mostrar la edad  en una cadena de texto.
*/

let legalidad = () =>{

     let anioNacimiento = parseInt (prompt("Ingrese su año de nacimiento: "))
    let anioActual = 2023
    let edad = anioActual - anioNacimiento
     let validacion = edad >= 18  // devuelve un booleano

  //   console.log(`Usted es mayor de edad: ${validacion}` )
//     console.log(`Su edad es: ${edad}`)
     //console.log(`Usted ${validacion} es Mayor de edad`)
     /* if(edad >= 18){
        return `Usted es mayor de edad`
      }*/
      /* if(validacion === true)
      {
        alert(`Usted tiene ${edad} años y es Mayor de edad`);
      } else
      {
        alert(`Usted tiene ${edad} años es Menor de edad`)
      } 
      */
 validacion ? alert(`Usted tiene ${edad} años y es mayor de edad`): alert(`Usted tiene ${edad} años y es menor de edad`)
}
legalidad()

//Condicionales en estructura de control

//if, else if, else
/*
if(){ // siempre que sea true
 //accionable
}
else{
    //accionable 
}*/

if(15>18)
{
    console.log("Es mayor")
}
else{
    console.log("Es menor")
}

//Math
//Encontrar el valor absoluto
let nume = -15
let valorAbsoluto = Math.abs(nume)
console.log(valorAbsoluto)


let numeros = [1,2,3,4,5,6,4,10,2342]
let numMax = Math.max(...numeros) // express operatio recuperamos todos los valores de ese array
let numMin = Math.min(...numeros)
console.log("numero maximo", numMax)
console.log("numero minimo", numMin)

// redonde
let decimales = 5.6
let redondeo = Math.round(decimales)

console.log(redondeo)

// floor
let numero3 = 5.4
let floor = Math.floor(numero3)
let ceil1 = Math.ceil(numero3)
console.log(ceil1)
console.log(floor)

//truncar
let numero4 = 3.143333
let truncar =  Math.trunc(numero4)
console.log(truncar)


//random

let numeroAleatorio = Math.random()
console.log(numeroAleatorio)

// Ejercicio 

let tragamonedas = Math.floor(Math.random()*10) + 1//floor para tener numeros enteros
console.log("tragamonedas" + " " + tragamonedas)

let numerosAleatorios = () => {
    return Math.floor(Math.random() * 7) + 1
}

let girarTragaMonedas = () =>{

    let n1 = numerosAleatorios()
    let n2 =  numerosAleatorios()
    let n3 = numerosAleatorios()
    let n4 = numerosAleatorios()
    let n5 = numerosAleatorios()

    let resultadosTragaMonedas = document.getElementById("resultado")
    resultadosTragaMonedas.textContent = `Resultados ${n1} - ${n2} - ${n3} - ${n4} - ${n5}`
    //console.log(`${n1} - ${n2} - ${n3} - ${n4} - ${n5}`)
}

girarTragaMonedas()