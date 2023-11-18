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
        if(letra === letra.toUpperCase()){
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
//validarFecha(); //se lo comenta para que no moleste xd



//==============================================================================================
// ========================>>>>>>>>>>   SEGUNDA PARTE  <<<<<<<<<<===============================
//==============================================================================================
console.log("\n==============================================================================================\n========================>>>>>>>>>>   SEGUNDA PARTE  <<<<<<<<<<================================\n==============================================================================================");

console.log("\n\t1- Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.");
let determinarMes = valor => {
    switch(valor){
        case 1:
            alert("\tEl mes correspondiente al valor "+valor+" es -> ENERO");
            break;
        case 2:
            alert("\tEl mes correspondiente al valor "+valor+" es -> FEBRERO");
            break;
        case 3:
            alert("\tEl mes correspondiente al valor "+valor+" es -> MARZO");
            break;
        case 4:
            alert("\tEl mes correspondiente al valor "+valor+" es -> ABRIL");
            break;
        case 5:
            alert("\tEl mes correspondiente al valor "+valor+" es -> MAYO");
            break;
        case 6:
            alert("\tEl mes correspondiente al valor "+valor+" es -> JUNIO");
            break;
        case 7:
            alert("\tEl mes correspondiente al valor "+valor+" es -> JULIO");
            break;
        case 8:
            alert("\tEl mes correspondiente al valor "+valor+" es -> AGOSTO");
            break;
        case 9:
            alert("\tEl mes correspondiente al valor "+valor+" es -> SEPTIEMBRE");
            break;
        case 10:
            alert("\tEl mes correspondiente al valor "+valor+" es -> OCTUBRE");
            break;
        case 11:
            alert("\tEl mes correspondiente al valor "+valor+" es -> NOVIEMBRE");
            break;
        case 12:
            alert("\tEl mes correspondiente al valor "+valor+" es -> DICIEMBRE");
            break;
        default:
            alert("\tNo se ingresó un valor válido");
            break;
    }
}
//determinarMes(12); 


console.log("\n\t2- Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.");
let determinarDia = valor => {
    switch(valor){
        case 1:
            alert("\tEl día correspondiente al valor "+valor+" es -> Lunes");
            break;
        case 2:
            alert("\tEl día correspondiente al valor "+valor+" es -> Martes");
            break;
        case 3:
            alert("\tEl día correspondiente al valor "+valor+" es -> Miercoles");
            break;
        case 4:
            alert("\tEl día correspondiente al valor "+valor+" es -> Jueves");
            break;
        case 5:
            alert("\tEl día correspondiente al valor "+valor+" es -> Viernes");
            break;
        case 6:
            alert("\tEl día correspondiente al valor "+valor+" es -> Sábado");
            break;
        case 7:
            alert("\tEl día correspondiente al valor "+valor+" es -> Domingo");
            break;
        default:
            alert("\tNo se ingresó un valor válido");
            break;
    }
}
//determinarDia(7);


console.log("\n\t3- Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.");
console.log("\t=======>>>   IMPLEMENTADO EN EL EJERCICIO 16 DE LA PRIMERA PARTE.   <<<=======");


console.log("\n\t4- Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.");
let diaSemana5 = valor => {
    if(valor >= 1 && valor <= 7){
        let dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
        alert("\t-> "+dias[valor-1]);
    }else{
        alert("\tEl número ingresado es inválido!");
    }

}
//diaSemana5(5);


console.log("\n\t5- Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.");
let esMayuscMinusc = letra => {
    letra = letra.replace(/\s/g,'');
    if(letra.length ===1 && /[a-zA-Z]/.test(letra)){ //Verifico si se trada de UNA letra y corresponde a la regEx
        if(letra === letra.toUpperCase()){
            alert("Es mayúscula.");
        }
        else{
            alert("Es minúscula.");
        }
    }else{
        alert("ingrese una letra válida.");
    }
}
//esMayuscMinusc(" A   ");


console.log("\n\t6- Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).");
let calificacionSemantica = valor =>{
    
    switch(true){
        case valor>=0 && valor<6:
            console.log("\tSuspenso");
            break;
        case (valor>=6 && valor<8):
            console.log("\tAprobado");
            break;
        case (valor>=8 && valor<10):
            console.log("\tNotable");
            break;
        case (valor===10):
            console.log("\tSobresaliente");
            break;
        default:
            console.log("\tNo se ingresó una nota válida.");
            break;
    }
}
//calificacionSemantica(9);


console.log("\n\t7- Recorrer un string y mostrar en la consola cada letra en mayúsculas.");
let recorrerEnMayusculas = cadena => {
    cadena = cadena.replace(/\s/g,'').split('');
    cadena.forEach(letra => {
        console.log("\t-> "+ letra.toUpperCase());
    });
}
//recorrerEnMayusculas("  vs d cA");


console.log("\n\t8- Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.");
let cuentaHasta = () => {
    let cota = parseInt(prompt("Ingrese un numero para contar desde el 1:"));
    
    if(cota >= 1){
        for(let i=1; i<=cota; i++){
            console.log("\t-> "+i);
        }
    }else{
        alert("\tIngrese un valor válido.");
    }
}
//cuentaHasta();


console.log("\n\t9- Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.");
let mostrarMaxCadena = () => {
    let numeros = prompt("Ingrese una secuencia de numeros separados por coma:");
    numeros = numeros.replace(/\s/g,'').split(',');
    let aEnteros=[];
    numeros.forEach(numero => {
        aEnteros.push(parseInt(numero));
    });
    console.log("\tEl mayor es -> "+Math.max(...aEnteros));
}
//mostrarMaxCadena();


console.log("\n\t10- Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.");
let esPalindromo = () => {
    let palabra = prompt("Ingrese una palabra:")
    // Eliminar espacios y convertir a minúsculas para evitar problemas con mayúsculas/minúsculas
    let palabraSinEspacios = palabra.replace(/\s/g,'').toLowerCase();
    // Se divide en un arreglo de char, se invierte el orden de dicho arreglo y se vuelve a conformar la palabra.
    let palabraAlReves = palabraSinEspacios.split('').reverse().join('');
    
    return palabraSinEspacios === palabraAlReves ? console.log("\tEs un palíndromo") : console.log("\t No es un palíndromo.");
}
//esPalindromo();


console.log("\n\t11- Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.");
let sumaPares = () => {
    let numeros = prompt("Ingrese una secuencia de numeros separados por coma:");
    numeros = numeros.replace(/\s/g,'').split(',');
    let contador = 0;

    numeros.forEach(numero => {
        if(parseInt(numero)%2 ===0){
            contador += parseInt(numero);
        }
    });

    console.log("\n\tLa suma de los numeros pares del conjunto ingresado es -> "+contador);
}
//sumaPares();


console.log("\n\t12- Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.");
let cantidadNegativos = () => {
    let numeros = prompt("Ingrese una secuencia de numeros separados por coma:");
    numeros = numeros.replace(/\s/g,'').split(',');
    let contador = 0;

    numeros.forEach(numero => {
        if(parseInt(numero) < 0){
            console.log("\n\t->"+numero);
            contador++;
        }
    });

    console.log("\n\tLa suma de los numeros negativos del conjunto ingresado es -> "+contador);
}
//cantidadNegativos();


console.log("\n\t13- Imprimir los números pares del 2 al 20 en la consola.");
let imprimirPares20 = () => {
    for(let i=1; i<=20; i++){
        if(i%2===0){
            console.log("\t-> "+i);
        }
    }
}
//imprimirPares20();


console.log("\n\t14- Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.");
let imprimirImparesHasta = () => {
    while(true){
        let cota = parseInt(prompt("Ingrese un valor hasta el cual se los imprimiran impares:"));
        if(cota>=1){
            for(let i=1; i<=cota; i++){
                if(!(i%2==0)){
                    console.log("\t-> "+i);
                }
            }
            return;
        }else{
            console.log("\tIngrese un valor mayor o igual a 1.");
        }
    }
}
//imprimirImparesHasta();


console.log("\n\t15- Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.");
let mostrarMinCadena = () => {
    let numeros = prompt("Ingrese una secuencia de numeros separados por coma:");
    numeros = numeros.replace(/\s/g,'').split(',');
    let aEnteros=[];
    numeros.forEach(numero => {
        aEnteros.push(parseInt(numero));
    });
    console.log("\tEl menor es -> "+Math.min(...aEnteros));
}
//mostrarMinCadena();


console.log("\n\t16- Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.");
let adivinar1Al100 = () => {
    let aleatorio = Math.floor(Math.random()*100)+1;
    console.log("\n\t->"+aleatorio);
    let numero;
    let intentos=0;
    while(numero!==aleatorio){
        numero = parseInt(prompt("Ingrese un numero entre 1 y 100:"));
        intentos++;
        if(numero < aleatorio){
            console.log("\tDebe ser más grande.");
        }else if(numero > aleatorio){
            console.log("\tDebe ser mas pequeño.");
        }else{
            console.log(`\tFelicitaciones, el numero ${numero} es correcto. GANASTE!\n\tNumero de intentos: ${intentos}`);
        }
    }
}
//adivinar1Al100();


console.log("\n\t17- Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.");
let mostrarParesCadena = () => {
    let numeros = prompt("Ingrese una secuencia de numeros separados por coma:");
    numeros = numeros.replace(/\s/g,'').split(',');
    let aEnteros=[];
    let contador=0;
    numeros.forEach(numero => {
        if(parseInt(numero)%2 == 0) contador++;
    });
    console.log("\tNumeros pares ingresados -> "+contador);
}
//mostrarParesCadena();


console.log("\n\t18- Dado un array de números, escribir una función que retorne el número más grande del array.");
let numeros = [1,2,4,7,23,90,0,100];
let masGrande = array => {
    return Math.max(...array);
}
console.log("\tMas grande ->"+masGrande(numeros));


console.log("\n\t19- Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.");
let soloPares = array => {
    return array.filter(numero => numero%2 === 0);
}
let nuevo = soloPares(numeros);
console.log(nuevo);
console.log(numeros);


console.log("\n\t20- Dado un array de números, escribir una función que retorne la suma de todos los números del array.");
let sumaTotal = array => {
    let suma = 0;
    suma = array.map(numero => suma+=numero); //Crea un nuevo array, cada elemento como resultado de una serie: Ai = ai+a(i-1) ->No recuerdo la notacion de las series xd
    return suma[array.length-1]; // Devuelve el ultimo elemento ingresado, que es la suma de todos.
}
console.log("\t"+sumaTotal(numeros));


console.log("\n\t21- Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.");
let cadenas = ["Ahí va","Juanfer", "El taco no", "hace la personal", "!"];
let cadenasMayusculas = array => {
    return array.map(cadena => cadena.toUpperCase());
}
let nuevaCadena = cadenasMayusculas(cadenas);
console.log("\tEn mayusculas -> "+nuevaCadena);
console.log("\tCadenas originales -> "+cadenas);

console.log("\n\t22- Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.");
let retornaMayores = (array, valor) => {
    return array.filter(numero => numero>valor);
}
console.log("\tMayores a 4-> "+retornaMayores(numeros, 4));
console.log("\tArray original -> "+numeros);


console.log("\n\t23- Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de \"números grandes\"."); // ->>>>> CÓMO HAGO PARA RETORNAR LA SUMA Y UN ARRAY DE "GRANDES"? => c limó diego jajaja
let sumaTotalYControlGrandes = array => {
    let suma = 0;
    let grandes = array.filter(numero => numero > 10);
    console.log("\tNumeros grandes -> "+grandes);
    suma = array.map(numero => suma+=numero); //Crea un nuevo array, cada elemento como resultado de una serie: Ai = ai+a(i-1) ->No recuerdo la notacion de las series xd
    return suma[array.length-1]; // Devuelve el ultimo elemento ingresado, que es la suma de todos.
}
console.log("\tTotal -> "+sumaTotalYControlGrandes(numeros));


console.log("\n\t24- Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.");
let masDe5char = array => {
    return array.filter(cadena => cadena.length > 5);
}
let cadenasDe5char = masDe5char(cadenas);
console.log("\tCadenas de mas de 5 caracteres-> "+ cadenasDe5char);


console.log("\n\t25- Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra \"a\".");
let masDe5charInicioA = array => {
    return array.filter(cadena => cadena.length > 5 && cadena.toLowerCase().startsWith('a'));
}
let cadenasDe5charInicianA = masDe5charInicioA(cadenas);
console.log("\tCadenas de mas de 5 caracteres y empiecen con A -> "+ cadenasDe5charInicianA);


console.log("\n\t26- Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.");
let retorna3Mayores = (array, valor) => {
    return array.filter(numero => numero>valor).splice(0,3);
}
console.log("\tPrimeros tres numeros mayores a 4-> "+retorna3Mayores(numeros, 4));
console.log("\tArray original -> "+numeros);


console.log("\n\t27- Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.");
let sumar1 = array => {
    return array.map(numero => numero+=1)
}
console.log("\tArray con un incremento de 1-> "+sumar1(numeros));
console.log("\tArray original -> \t\t\t\t"+numeros);


console.log("\n\t28- Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.");
let eliminarUltimoNumero = array => {
    array.pop();
    return array;
}
console.log("\tEliminamos el ultimo elemento-> "+eliminarUltimoNumero(numeros));


console.log("\n\t29- Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.");
let eliminar1erYUltimo = array => {
    array.shift();
    array.pop();
    return array;
}
console.log("\tSe eliminó el primer y el ultimo elemento-> "+eliminar1erYUltimo(numeros));


console.log("\n\t30- Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.");
let eliminarEnPosicion = (array, pos) => {
    let nuevo = array.slice(); //Genero copia del arrary, ya que 'splice' modifica el array original del parámetro
    nuevo.splice(pos, 1);
    return nuevo;
}
console.log("\tEliminar elemento en la posicion 4 -> "+eliminarEnPosicion(numeros, 4));
console.log("\tArray original -> \t\t\t\t"+numeros);



/** =================>>>>>   ACLARACIÓN    <<<<<<==========
 * En los ultimos ejercicios se asume que al realizar un console.log('funcion del ejercicio'), se esta 'mostrando' el nuevo array que pide el enunciado, sin antes declararlo. Esto es para ahorrar lineas repetitivas (ya que en los primeros si se hace y ademas se compara con el array original, lugo no) y asi solo mostrar el FUNCIONAMIENTO de la funcion.
 */