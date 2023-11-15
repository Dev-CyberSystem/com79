//Tareas
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.

function restar(n1,n2)
{
   n1 = parseInt (prompt("Ingrese el primer numero para la resta: "))
   n2 = parseInt(prompt("Ingrese el segundo numero para la resta: "))

   let resta = n1-n2;
   console.log(resta)
}
restar()