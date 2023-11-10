// console.log("Hola mundo desde JavaScript")
// alert("Hola mundo con js")

// document.write("Hola mundo desde fichero externo")

// var nombre = "Almiron"

let nombre = "Kennedy";

function funcionAnonima() {

  console.log(nombre);
}
funcionAnonima();


// console.log(nombre);

// crear variables y mostrar en pantalla ya sea con un document.write o un alert o un console.log
let edad = prompt("ingrese su edad")
let profesion = "estudiante";
console.log("yo soy "+{profesion} +"de programacion")
let array = ["pancho","rocco","willy","milo"]
for (i=0;i<array.length;i++){
  console.log(array[i])
}
// if(edad >= 18){
//   alert("mayor puede pasar porque tiene" +{edad}+ "años")
// }  alert("menor puede pasar porque tiene" +{edad}+ "años")
{edad >=18 ? alert("mayor puede pasar porque tiene" +{edad}+ "años") : alert("menor puede pasar porque tiene" +{edad}+ "años")}