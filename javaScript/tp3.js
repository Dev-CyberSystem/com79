// Tareas
console.log("\n\t1- Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.");
let restar = (numero1, numero2) => {console.log(`\tResultado de la resta-> ${numero1} - ${numero2} = ${numero1-numero2}`);}
restar(2,1);


console.log("\n\t2- Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.");
let sumar10 = () => {
    let a=5;
    a+=10;
    console.log("\t-> "+a);
}
sumar10();


console.log("\n\t3- Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.");
let concatenacion = () => {
    let texto1 = "El Pity Martinez";
    let texto2 = "qué loko que está!";
    texto1 += ", "+ texto2;
    console.log("\t-> "+texto1);
}
concatenacion();


console.log("\n\t4- Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.");
let iguales = () => {
    let valor1 = true;
    let valor2 = false;
    let compara = valor1 === valor2;
    console.log("\tComparación: son iguales? -> "+compara);
}
iguales();


console.log("\n\t5- Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.");
let diferentes = () => {
    let valor1 = true;
    let valor2 = false;
    let compara = valor1 !== valor2;
    console.log("\tComparación: son diferentes? -> "+compara);
}
diferentes();


console.log("\n\t6- Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.");
let primeroMayor = () => {
    let primero = 5;
    let segundo = 1;
    console.log(`Comparo si ${primero} > ${segundo} -> ${primero>segundo}`);
}
primeroMayor();


// ================>    VERIFICAR <======================================================== (al final no se utiliza la primer implementacion debido a la inexactitud de la funcion. La dejo para ver si la puedo optimizar.)
console.log("\n\t7- Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.");
// let contarPalabras = () => {
//     let palabras = prompt("Por favor, ingrese una frase:");
//     //console.log("\n\t"+palabras+"tipo->"+typeof(palabras)+"tmaño"+palabras.length);
//     let arreglo = palabras.split(" ");
//     console.log("\n\t"+arreglo+"tipo->"+typeof(arreglo)+"tmaño"+arreglo.length);
//     let espacios = arreglo.length;
//     if(palabras === "" || palabras ===" "){
//         console.log("\tNo se introdujo ninguna palabra.");
//     }else{
//         let cantidad = espacios;
//         console.log("\tPalabras-> "+cantidad);
//     }
// }
let contarPalabras = () => {
    let frase = prompt("Por favor, ingrese una frase:");
    if(frase !== null && frase.trim() !== ""){
        let palabras = frase.split(/\s+/); // '/\s+/' maneja cualquier secuencia de espacios en blanco (espacios, saltos de linea)
        console.log("\tCantidad de palabras ingresadas-> "+palabras.length);
    }
    else{
        console.log("\tNo se ingresó ninguna palabra.");
    }
}
//contarPalabras(); //se lo comenta para que no moleste xd


console.log("\n\t8- Crear una función que tome un número como parámetro y devuelva \"Positivo\" si es mayor a cero, \"Negativo\" si es menor a cero o \"Cero\" si es igual a cero.");
let tipoNumero = valor => {
    if(valor == 0){
        console.log("\tUsted ha ingresado el valor 0.");
    }else if(valor > 0){
        console.log(`\tEl valor ${valor} es positivo.`);
    }else{
        console.log(`\tEl valor ${valor} es negarivo.`);
    }
}
tipoNumero(0);


console.log("\n\t9- Crear una función que tome un número como parámetro y devuelva \"Par\" si es divisible por 2 o \"Impar\" si no lo es.");
let paridad = valor => valor%2 == 0 ? "Par" : "Impar";
console.log("\t-> "+paridad(3));


console.log("\n\t10- Crear un programa que pida al usuario un número y luego muestre si es par o impar.");
let determinarParidad = () => {
    console.log("\n\tEl numero ingresado es: "+paridad(parseInt(prompt("Ingrese un numero:"))));
}
//determinarParidad(); //se lo comenta para que no moleste xd


console.log("\n\t11- Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.");
let determinarSigno = () => {
    tipoNumero(parseInt(prompt("Ingrese un numero:")));
}
//determinarSigno(); //se lo comenta para que no moleste xd


console.log("\n\t12- Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.");
let determinarMayor = () => {
    let valor1 = parseInt(prompt("Ingrese un numero:"));
    let valor2 = parseInt(prompt("Ingrese otro numero:"));

    if(valor1 == valor2){
        alert("\tAmbos valores son iguales.");
    }else if(valor1>valor2){
        alert(`\tEl valor ${valor1} es el mayor.`);
    }else{
        alert(`\tEl valor ${valor2} es el mayor.`);
    }
}
// determinarMayor(); //se lo comenta para que no moleste xd


console.log("\n\t13- Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.");
let solicitarContraseña = () => {
    let regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;           
    let contraseña = prompt("Ingrese su contraseña:");
    if(regEx.test(contraseña)){
        alert("\tContraseña válida!");
    }else{
        alert("\tContraseña inválida! La misma debe tener al menos 8 caracteres, con mayusculas, minusculas y caracteres especiales");
    }
}
//solicitarContraseña(); //se lo comenta para que no moleste xd


console.log("\n\t14- Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).");
let calificacion = () => {
    let nota = parseInt(prompt("Ingrese su nota:"))
    nota >= 70 ? alert("Usted está aprobado!") : alert("Usted ha desaprobado.");
}
//calificacion(); //se lo comenta para que no moleste xd


console.log("\n\t15- Crear una función que tome una cadena como parámetro y devuelva \"Es un palíndromo\" si la cadena es igual al revés, de lo contrario, devolver \"No es un palíndromo\".");
let palindromo = (cadena) => {
    // Eliminar espacios y convertir a minúsculas para evitar problemas con mayúsculas/minúsculas
    let cadenaSinEspacios = cadena.replace(/\s/g,'').toLowerCase();
    // Se divide en un arreglo de char, se invierte el orden de dicho arreglo y se vuelve a conformar la cadena.
    let cadenaAlReves = cadenaSinEspacios.split('').reverse().join('');
    
    return cadenaSinEspacios === cadenaAlReves ? "\tEs un palíndromo" : "\t No es un palíndromo."
}
console.log(palindromo("o s o      OSO"))


console.log("\n\t16- Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.");
let determinarLetra = () => {
    let letra = prompt("Ingrese una letra.");
    letra = letra.replace(/\s/g,'').toLowerCase();
    if(letra.length === 1){
        let regExConsonante = /[bcdfghjklmnpqrstvwxyz]/;
        let regExVocal = /[aeiou]/;
        if(regExVocal.test(letra)){
            console.log("\tEs una Vocal.");
        }else if(regExConsonante.test(letra)){
            console.log("\tEs una Consonante.");
        }else{
            console.log("\tLa letra debe ser del conjunto: abcdefghijklmnopqrstuvwxyz.\n\tIntente nuevamente.");
        }
    }else{
        console.log("\tIngrese una letra válida.");
    }
}
//determinarLetra(); //se lo comenta para que no moleste xd


console.log("\n\t17- Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.");
let diaSemana = () => {
    let numero = parseInt(prompt("Ingrese un numero entre el 1 y el 7:"));
    if(numero >= 1 && numero <= 7){
        let dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
        alert("\t-> "+dias[numero-1]);
    }else{
        alert("\tIngrese un número válido!");
    }

}
//diaSemana(); //se lo comenta para que no moleste xd


console.log("\n\t18- Crear un programa que pida al usuario un número y luego muestre si es primo o no.");
let esPrimo = () => {
    let numero = parseInt(prompt("Ingrese un numero:"));
    if(numero <= 1){
        alert("\tNo es un numero primo.");
    }else{
        for(let i=2; i<=Math.sqrt(numero); i++){
            if(numero%i === 0){
                return alert("\tNo es un numero primo.");
            }
        }
        alert("\tEs un numero primo.");
    }
}
//esPrimo(); //se lo comenta para que no moleste xd


console.log("\n\t19- Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).");
let esMayorEdad = () => {
    let edad = parseInt(prompt("Ingrese su edad:"));
    edad >= 18 ? alert("Es mayor de edad.") : alert("Es menor de edad.");
}
//esMayorEdad(); //se lo comenta para que no moleste xd


console.log("\n\t20- Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.");
let comparaCon100 = () => {
    let valor1 = parseInt(prompt("Ingrese el primer numero:"));
    let valor2 = parseInt(prompt("Ingrese el primer numero:"));
    let suma = valor1 + valor2;
    if(suma === 100){
        alert("\tLa suma es igual a 100.");
    }else if(suma >100){
        alert("\tLa suma es mayor a 100.");
    }else{
        alert("\tLa suma es menor a 100.");
    }
}
//comparaCon100(); //se lo comenta para que no moleste xd


console.log("\n\t21- Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.");
let mostrarMayor = () => {
    let valor1 = parseInt(prompt("Ingrese el primer numero:"));
    let valor2 = parseInt(prompt("Ingrese el primer numero:"));
    let valor3 = parseInt(prompt("Ingrese el tercer numero:"));

    let numeros = [valor1,valor2,valor3];
    console.log("\tEl mayor numero ingresado es el "+Math.max(...numeros));
}
//mostrarMayor(); //se lo comenta para que no moleste xd


console.log("\n\t22- Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.");
let determinarMayuscMinusc = () => {
    let letra = prompt("Ingrese una letra:");

    if(letra.length ===1 && /[a-zA-Z]/.test(letra)){ //Verifico si se trada de UNA letra y corresponde a la regEx
        if(letra === letra.toUpperCase){
            alert("Es mayúscula.");
        }
        else{
            alert("Es minúscula.");
        }
    }else{
        alert("ingrese una letra válida.");
    }
}
//determinarMayuscMinusc(); //se lo comenta para que no moleste xd


console.log("\n\t23- Crear una función que tome un número como parámetro y devuelva \"Fizz\" si es divisible por 3, \"Buzz\" si es divisible por 5 o \"FizzBuzz\" si es divisible por ambos. En cualquier otro caso, devolver el número.");
let fizzOrBuzz = valor => {
    if(valor%3 == 0 && valor%5 == 0){
        return "FizzBuzz";
    }else if(valor%3 == 0){
        return "Fizz";
    }else if(valor%5 == 0){
        return "Buzz";
    }else{
        return valor;
    }
}
console.log("\t-> "+fizzOrBuzz(100));


console.log("\n\t24- Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.");
let esPerfecto = () => {
    let valor = parseInt(prompt("Ingrese un numero:"));
    if(valor <= 0){
        return false;
    }else{
        let sumaDivisores = 0;
        for(let i=1 ; i<=valor/2 ; i++){
            if(valor%i === 0){
                sumaDivisores += i;
            }
        }
        return sumaDivisores === valor;
    }
}
//console.log("\tEs perfecto -> "+esPerfecto());


//Vaya saber como es ¿?
console.log("\n\t25- Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.");


console.log("\n\t26- Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.");
let validarFecha = () => {
    let dia = parseInt(prompt("Ingrese el dia:"));
    let mes = parseInt(prompt("Ingrese el mes:"));
    let anio = parseInt(prompt("Ingrese el año"));

    if(Number.isInteger(anio) > 0){
        if(mes >= 1 && mes <= 12 ){
            let diasDelMes = new Date(anio,mes,0).getDate(); //obtener la cantidad de días en el mes, y luego compara el día ingresado con esta cantidad.
            if(dia >=1 && dia <= diasDelMes){
                alert(`Fecha ingresada: ${dia}/${mes}/${anio} -> Válida`);
            }else{
                alert(`Fecha ingresada: ${dia}/${mes}/${anio} -> Inválida!`);
            }
            }
        }
}
validarFecha()









