function cartelAlerta(){
    let variableNueva1 = "valor A";
    let variableNueva2 = "1234";

    alert(variableNueva1 + " equivale a "+ variableNueva2);
}
cartelAlerta() //Hasta aquí mensaje de alerta

function infoConsola(){
    let valor1 = "Pepita";
    let valor2 = "la";
    let valor3 = "pistolera";
    
    console.log("Texto de relleno con propósito de pruebas");
    
    console.log(valor1+" " + valor2 +" "+ valor3);
}
infoConsola() //Hasta aquí info consola

function textoAgregado() {
    document.write("<br>"+"<hr>"+"Este es un texto agregado desde JS hoy lunes 06/11/2024"+"<hr>");
    document.write("<br>"+"<hr>"+"realizar F12 para revisar mensajes en consola por favor! ----->"+"<hr>");
}
textoAgregado() //Hasta aquí texto agregado al .html