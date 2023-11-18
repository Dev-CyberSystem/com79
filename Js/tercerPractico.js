//Tareas
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
function restarParametros(a,b){
    let resultado= a-b
    console.log(resultado)
}
restarParametros(5,7)

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
function sumarDiez(){
    let num1=5
    let resultado=num1+10
    console.log(resultado)
}
sumarDiez()

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
function stringConcatenados(){
    let string1=`Facundo`
    let string2= `Gimenez`
    let resultado=`mi nombre es ${string1} ${string2}`
    console.log(resultado)
}
stringConcatenados()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
function compararBooleanos(){
    let bool1=true
    let bool2=true
    let resultado= bool1===bool2
    console.log(resultado)
}
compararBooleanos()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
function compararBooleanosDistintos(){
    let bool1=true
    let bool2=false
    let resultado= bool1!=bool2
    console.log(resultado)
}
compararBooleanosDistintos()

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
function numMayor(){
    let num1=25
    let num2=30
    let resultado=num1>num2
    console.log(resultado)
}
numMayor()

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
function contarPalabras(){
    let frase=prompt("ingrese aqui su frase")
    let fraseDividida=frase.split(" ")
    let resultado= fraseDividida.length
    console.log(resultado)
}
contarPalabras()

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
function numeroPosNeg(a){
    if(a<0){
        return console.log("negativo")
    } else if(a===0){
        return console.log("cero")
    } else {
        return console.log("positivo")
    }
}
numeroPosNeg(-5)

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
function parImpar(num){
    if(num%2==0){
        return console.log(` ${num} es par`)
    } else{
        return console.log(` ${num} es impar`)
    }
}
parImpar(7)

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
function parImparUsuario(){
    let num=parseInt(prompt(`ingrese un número`))
    if(num%2==0){
        return console.log(` ${num} es par`)
    } else{
        return console.log(` ${num} es impar`)
    }
}
parImparUsuario(7)

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
function numeroPosNegUsuario(){
    let num=parseInt(prompt(`ingrese un Numero`))
    if(num<0){
        return console.log("negativo")
    } else if(num===0){
        return console.log("cero")
    } else {
        return console.log("positivo")
    }
}
numeroPosNegUsuario()

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
function dosNumeros(){
    let num1=parseInt(prompt(`ingrse un Numero`))
    let num2= parseInt(prompt(`ingrese otro numero`))
    let mayor=num1>num2
    mayor ? console.log(` el numero mayor es ${num1}`): console.log(`el numero mayor es ${num2}`)
}
dosNumeros()

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
function password(){
    let contrasenia=prompt(`por favor ingrese su contraseña`)

}

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
function calficacion(){
    let nota=parseInt(prompt(`ingrese su calificacion`))
    if (nota>=70){
        console.log(`Esta aprobado`)
    }else{
        console.log("desaprobado")
    }
}

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
function palindromo(){
    let palabra= prompt(`ingrese para verificar si es palindromo`)
    let palabraInvertida= palabra.split("").reverse().join("")
    if (palabra===palabraInvertida){
        console.log(`${palabra} es un palindromo`)
    }else{
        console.log(`${palabra} no es un palindromo`)
    }

}
palindromo()

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
let vocalConsonante = () => {
    let letra=prompt(`ingrese una letra`)
    if(letra===`a`|| letra===`e`|| letra===`i`|| letra===`o`|| letra===`u`){
        console.log(`la letra ingresada es una vocal`)
    }else{
        console.log(`la letra ingresada es una consonante`)
    }
}
vocalConsonante()

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
let diaSemana = ()=> {
    let num=parseInt(prompt(`ingrese un numero del 1 al 7`))
    if(num==1){
        console.log(`Lunes`)
    }else if(num==2){
        console.log(`Martes`)
    }else if(num==3){
        console.log(`Miercoles`)
    }else if(num==4){
        console.log(`Jueves`)
    }else if(num==5){
        console.log(`Viernes`)
    }else if(num==6){
        console.log(`Sabado`)
    }else if(num==7){
        console.log(`Domingo`)
    }else{
        console.log(`debe ingresar un numero del 1 al 7`)
    }
}
diaSemana()

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
let numPrimo= () =>{
    let num= parseInt(prompt(`ingrese un número`))
    if(num==2 || num==3 || num== 5 || num==7 || num==-2 || num==-3 || num== -5 || num==-7){
        console.log(`es primo`)
    }else if(num%2!=0 && num&3!=0 && num%5!=0 && num&7!=0){
        console.log(`Es Primo`)
    }else {
        console.log(`NO es Primo`)
    }
}
numPrimo()
// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
let edad= ()=>{
    let edad=parseInt("ingrese su edad")
    if (edad>=18){
        console.log(`es mayor de edad`)
    }else{
        console.log(`es Menor de edad`)
    }
}
edad()

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
let suma100= ()=>{
    let num1=parseInt(prompt(`ingrese un numero`))
    let num2=parseInt(prompt(`ingrese otro numero`))
    if (num1+num2==100){
        console.log(`la suma de ${num1} y ${num2} es 100`)
    }else if (num1+num2<100){
        console.log(`la suma de ${num1} y ${num2} es menor a 100`)
    }else{
        console.log(`la suma de ${num1} y ${num2} es mayor a 100`)
    }
}
suma100()

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
let mayorTres= () => {
    let num1=parseInt(prompt(`ingrese un numero`))
    let num2=parseInt(prompt(`ingrese otro numero`))
    let num3=parseInt(prompt(`ingrese un tercer numero`))
    const arrayNumeros=[num1,num2,num3]
    let resultado=Math.max(...arrayNumeros)
    console.log(`el mayor numero es: ${resultado}`)
}
mayorTres()
// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
let mayusMinus= ()=>{
    let letra = prompt("Ingrese una letra Mayuscula o Minuscula");
    if (letra.length === 1) {
        let codigoNum = letra.charCodeAt(0);
        if (codigoNum >= 65 && codigoNum <= 90) {
        console.log("La letra ingresada es mayúscula");
        } else if (codigoNum >= 97 && codigoNum <= 122) {
        console.log("La letra ingresada es minúscula");
        } else {
        console.log("No es una letra");
        }
    } else {
    console.log("ingrese solo una letra");
    }
}
mayusMinus()

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
let FizzBuzz=(num)=>{
    if(num%3==0 && num%5 ==0){
        console.log(`FizzBuzz`)
    }else if(num%5==0){
        console.log(`Buzz`)
    }else if(num%3==0){
        console.log(`Fizz`)
    }else{
        console.log(num)
    }
}
FizzBuzz(15)

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios
let numPerfecto= ()=>{
    let num=parseInt(prompt(`ingrese un número`))
    let perfecto=0
    for (let i=1 ; i<=num/2 && num%i==0 ; i++){
        perfecto+=i
    }
    if (num==perfecto){
        console.log(`es numero perfecto`)
    }else{
        console.log(`NO es perfecto`)
    }
}
numPerfecto()

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
function descomposicionFactoresPrimos() {
    let numeroUsuario = parseInt(prompt("Ingresa un número para descomponer en factores primos:"));
    let factoresPrimos = [1];
    console.log(`el numero ingresado es ${numeroUsuario}`)
    while (numeroUsuario > 1) {
        for(let i=2 ; numeroUsuario%i==0;i++){
        factoresPrimos.push(i);
        numeroUsuario /= i;
        }
        return console.log(` sus factores son ${factoresPrimos}`)
    }
}
descomposicionFactoresPrimos()

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
function fechaValida() {
    let diaUsuario = parseInt(prompt("Ingrese el día:"));
    let mesUsuario = parseInt(prompt("Ingrese el mes:"));
    let anioUsuario = parseInt(prompt("Ingrese el año:"));
    let diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((anioUsuario % 4 === 0 && anioUsuario % 100!==0)|| anioUsuario%400 == 0) {
        diasPorMes[1] = 29;
    }
    if (mesUsuario >= 1 && mesUsuario <= 12 && diaUsuario >= 1 && diaUsuario <= diasPorMes[mesUsuario - 1]){
        console.log("La fecha ingresada es válida.");
    } else {
    console.log("La fecha ingresada no es válida.");
    }
}
fechaValida()

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
let nombreMes = ()=> {
    let num=parseInt(prompt(`ingrese un numero del 1 al 12`)).trim()
    if(num==1){
        console.log(`Enero`)
    }else if(num==2){
        console.log(`Febrero`)
    }else if(num==3){
        console.log(`Marzo`)
    }else if(num==4){
        console.log(`Abril`)
    }else if(num==5){
        console.log(`Mayo`)
    }else if(num==6){
        console.log(`Junio`)
    }else if(num==7){
        console.log(`Julio`)
    }else if(num==8){
        console.log(`Agosto`)
    }else if(num==9){
        console.log(`Septiembre`)
    }else if(num==10){
        console.log(`Octubre`)
    }else if(num==11){
        console.log(`Noviembre`)
    }else if(num==12){
        console.log(`Diciembre`)
    }    else{
        console.log(`debe ingresar un numero del 1 al 12`)
    }
}
nombreMes()

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
let diaDeLaSemanaArray=()=>{
    let ingresoUsuario=parseInt(prompt(`ingrese un numero del 1 al 5`))-1
    let diasSemanales=["lunes","martes","miercoles","jueves","viernes"]
    console.log(`es dia ${diasSemanales[ingresoUsuario]}`)
}
diaDeLaSemanaArray()

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

// Imprimir los números pares del 2 al 20 en la consola.
let numerosPares= ()=>{
    ArrayPares=[]
    for (let i=2 ; i<=20; i+=2){
        ArrayPares.push(i)
    }
    console.log(ArrayPares)
}
numerosPares()

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
let letrasMayusculasString=()=>{
    let ingreso=prompt(`ingrese un Frase con mayus o minus`)
    let letrasMayus=[]
    for (i=0; i<ingreso.length; i++){
        if (ingreso[i].charCodeAt(0)<=90 && ingreso[i].charCodeAt(0)>=65){
            letrasMayus.push(ingreso[i])
        }
    }
    console.log(letrasMayus)
}
letrasMayusculasString()

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
let mostrarNumeros=()=>{
    let numeroIngresado=parseInt(prompt(`ingrese un número`))
    let arrayNumeros=[]
    for (let i=1 ; i<=numeroIngresado ; i++){
        arrayNumeros.push(i)
    }
    console.log(arrayNumeros)
}
mostrarNumeros()
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
let separadosComa=()=>{
    let ingreso=prompt(`ingrese numeros separados por coma`).trim()
    let arrayNumeros=ingreso.split(",")
    let numMax= Math.max(...arrayNumeros)
    console.log(numMax)
}
separadosComa()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
let separadosComaSuma=()=>{
    let ingreso=prompt(`ingrese numeros separados por coma`).trim()
    let arrayNumeros=ingreso.split(",")
    let sumaPares=0
    for (i=0; i<arrayNumeros.length; i++){
        if (arrayNumeros[i]%2==0){
            sumaPares+=parseInt(arrayNumeros[i])
        }
    }
    console.log(`la suma de los numeros pares es ${sumaPares}`)
}
separadosComaSuma()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
let separadosComaNegativos=()=>{
    let ingreso=prompt(`ingrese numeros separados por coma`).trim()
    let arrayNumeros=ingreso.split(",")
    let cantidadNegativos=[]
    for (i=0; i<arrayNumeros.length; i++){
        if (arrayNumeros[i]<0){
            cantidadNegativos.push(arrayNumeros[i])
        }
    }
    console.log(`hay ${cantidadNegativos.length} numeros negativos`)
}
separadosComaNegativos()

// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
let imparesHasta=()=>{
    let numeroUsuario=parseInt(prompt(`ingrese un número`))
    let arrayNumeros=[]
    let i=1
    while(i<=numeroUsuario){
        arrayNumeros.push(i)
        i+=2
    }
    console.log(arrayNumeros)
}
imparesHasta()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
let separadosComaMinimo=()=>{
    let ingreso=prompt(`ingrese numeros separados por coma`).trim()
    let arrayNumeros=ingreso.split(",")
    let minimo=Math.min(...arrayNumeros)
    console.log(`el menor numero es ${minimo}`)
}
separadosComaMinimo()

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let number;
let contador=1;

while (number !== numeroAleatorio) {
    number = parseInt(prompt("Ingresa un numero entre 1 y 100"));
    if(number < numeroAleatorio){
        console.log("El numero que ingresaste es mas chico")
        contador++
    } else if (number > numeroAleatorio){
        console.log("El numero que ingresaste es mas grande")
        contador++
    } else {
        console.log(`ganaste y te Tomo ${contador} intentos`)
    }
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
let paresHasta=()=>{
    let num=(prompt(`ingrese un número separado por coma`))
    let arrayNumeros=num.split(",")
    let numerosPares=[]
    for (let i=0; i<arrayNumeros.length; i++){
        let numero=parseInt(arrayNumeros[i])
        if (numero%2==0){
            numerosPares.push(numero)
        }
    }

    console.log(`la cantidas de numeros pares es: ${numerosPares.length}`)
}
paresHasta()

// Dado un array de números, escribir una función que retorne el número más grande del array.
let arrayNumMax=[4, 5 ,6,7,8,9,10,12,14,15,18,16,-2]
let maxNumArray=()=>{
    numMax= Math.max(...arrayNumMax)
    console.log(numMax)
    return numMax
}
maxNumArray()

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
let arrayNumPares=[4, 5 ,6,7,8,9,10,12,14,15,18,16,-2]
let paresArray=()=>{
    paresArrayRetornados=[]
    for (i=0; i<arrayNumPares.length;i++){
        if(arrayNumPares[i]%2==0){
            paresArrayRetornados.push(arrayNumPares[i])
        }
    }
    console.log(paresArrayRetornados)
    return paresArrayRetornados
}
paresArray()

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
let arrayNumSuma=[4, 5 ,6,7,8,9,10,12,14,15,18,16,-2]
let sumaArray=()=>{
    sumados=0
    for (i=0; i<arrayNumSuma.length;i++){
        sumados += arrayNumSuma[i]
    }
    console.log(sumados)
    return sumados
}
sumaArray()

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
let arrayStringMayus=["V","c","D","e","F","g","J"]
let arrayMayus = ()=>{
    let soloMayus=[]
    for (i=0 ; i<arrayStringMayus.length;i++){
        if(arrayStringMayus[i].charCodeAt(0)>= 65 && arrayStringMayus[i].charCodeAt(0)<=90){
            soloMayus.push(arrayStringMayus[i])
        }
    }
    console.log(soloMayus)
    return soloMayus
}
arrayMayus()

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
let arrayNumerosX=[14,25,64,15,12,34,17,24]
let numX= 15
let numMayoresX=()=>{
    let numMayorX=[]
    for (let i=0 ; i<arrayNumerosX.length; i++){
        if(arrayNumerosX[i]>numX){
            numMayorX.push(arrayNumerosX[i])
        }
    }
    console.log(numMayorX)
    return numMayorX
}
numMayoresX()

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
let arraySumaMayores=[4, 5 ,6,7,8,9,10,12,14,15,18,16,-2]
let sumaArrayLista=()=>{
    sumados=0
    nuevaLista=[]
    for (i=0; i<arraySumaMayores.length;i++){
        sumados += arraySumaMayores[i]
        if (arraySumaMayores[i]>10){
            nuevaLista.push(arraySumaMayores[i])
        }
    }
    console.log(sumados)
    console.log(nuevaLista)
    return sumados, nuevaLista
}
sumaArrayLista()

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
let array5Caracteres=["trabajo", "computadora", "idea", "tiempo", "hola"]
let cincoCaracteres=()=>{
    arrayResultado=[]
    for(let i=0 ; i<array5Caracteres.length; i++){
        if(array5Caracteres[i].length>5){
            arrayResultado.push(array5Caracteres[i])
        }
    }
    console.log(arrayResultado)
    return arrayResultado
}
cincoCaracteres()

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
let array5CaracteresA=["arandano", "computadora", "idea", "tiempo", "arboleda", "avioneta"]
let cincoCaracteresA=()=>{
    arrayResultado=[]
    for(let i=0 ; i<array5CaracteresA.length; i++){
        if(array5CaracteresA[i].length>5 && array5CaracteresA[i].startsWith("a")){
            arrayResultado.push(array5CaracteresA[i])
        }
    }
    console.log(arrayResultado)
    return arrayResultado
}
cincoCaracteresA()

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
let arrayNumerosXcortar=[14,25,64,15,12,34,17,24]
let numX2= 15
let numMayoresXcortar=()=>{
    let numMayorX=[]
    for (let i=0 ; i<arrayNumerosXcortar.length; i++){
        if(arrayNumerosXcortar[i]>numX2){
            numMayorX.push(arrayNumerosXcortar[i])
            if(numMayorX.length>3){
                numMayorX.pop()
            }
        }
    }
    console.log(numMayorX)
    return numMayorX
}
numMayoresXcortar()

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
let arrayNumeros1=[14,25,64,15,12,34,17,24]
let arraySumados1=()=>{
    nuevoArray=[]
    for (i=0 ; i< arrayNumeros1.length; i++){
        nuevoArray.push(arrayNumeros1[i]+1)
    }
    console.log(nuevoArray)
    return nuevoArray
}
arraySumados1()

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
let menosUltimo=[14,25,64,15,12,34,17,24]
let arrayMenosUltimo=()=>{
    menosUltimo.pop()
    console.log(menosUltimo)
    return menosUltimo
}
arrayMenosUltimo()

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
let menosUltimoPrimero=[14,25,64,15,12,34,17,24]
let arrayMenosUltimoPrimero=()=>{
    menosUltimoPrimero.pop()
    menosUltimoPrimero.shift()
    console.log(menosUltimoPrimero)
    return menosUltimoPrimero
}
arrayMenosUltimoPrimero()

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
let menosPosicionX=[14,25,64,15,12,34,17,24]
let PosX=3
let arrayMenosPosicionX=()=>{
    filtrado=menosPosicionX.filter((number,index) => index!=PosX)
    console.log(filtrado)
}
arrayMenosPosicionX()

