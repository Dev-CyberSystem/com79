// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

function mesesAnio() {
let meses =  [" ","Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let elegiMes= meses.length;
let posicion = meses[prompt("Escribí un número del 1 al 12")];
console.log(posicion);
}
mesesAnio()