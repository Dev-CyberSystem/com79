//Tareas
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
const btnRestar = document.getElementById('btnRestar')
btnRestar.addEventListener('click', () => {
	restarDosNumeros()
})
const restarDosNumeros = () => {
	numeroUno = parseFloat(prompt('Ingresa el primer numero')) || 0
	numeroDos = parseFloat(prompt('Ingresa el segundo numero')) || 0
	let resultado = numeroUno - numeroDos
	alert(`El resultado de la resta es ${resultado}`)
}
// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
const btnSumarleDiez = document.getElementById('btnSumarleDiez')
btnSumarleDiez.addEventListener('click', () => {
	sumarleDiez()
})
const sumarleDiez = () => {
	let numeroCinco = 5
	alert(`El resultado de la suma es ${numeroCinco + 10}`)
}
// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
const btnConcatenar = document.getElementById('btnConcatenar')
btnConcatenar.addEventListener('click', () => {
	concatenarStrings()
})
const concatenarStrings = () => {
	let stringUno = String(prompt('Ingresa el primer string').trim())
	let stringDos = String(prompt('Ingresa el segundo string').trim())
	let resultado = `El resultado de la concatenacion es ${stringUno} ${stringDos}`
	alert(resultado)
}
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
const btnCompararBooleanos = document.getElementById('btnCompararBooleanos')
btnCompararBooleanos.addEventListener('click', () => {
	compararBooleanos()
})
const compararBooleanos = () => {
	let booleanoUno = true
	let booleanoDos = true
	booleanoUno === booleanoDos
		? alert(`Los booleanos ${booleanoUno} y ${booleanoDos} son iguales`)
		: alert(`Los booleanos ${booleanoUno} y ${booleanoDos} son diferentes`)
}
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
const btnCompararBooleanosDiferentes = document.getElementById('btnCompararBooleanosDiferentes')
btnCompararBooleanosDiferentes.addEventListener('click', () => {
	compararBooleanosDiferentes()
})
const compararBooleanosDiferentes = () => {
	let booleanoUno = true
	let booleanoDos = false
	booleanoUno != booleanoDos
		? alert(`Los booleanos ${booleanoUno} y ${booleanoDos} son diferentes`)
		: alert(`Los booleanos ${booleanoUno} y ${booleanoDos} son iguales`)
}
// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
const btnCompararMayor = document.getElementById('btnCompararMayor')
btnCompararMayor.addEventListener('click', () => {
	compararMayor()
})
const compararMayor = () => {
	let numeroUno = parseFloat(prompt('Ingresa el primer numero')) || 0
	let numeroDos = parseFloat(prompt('Ingresa el segundo numero')) || 0
	if (numeroUno === numeroDos) {
		alert(`Los numeros ${numeroUno} y ${numeroDos} son iguales`)
	} else if (numeroUno > numeroDos) {
		alert(`El numero ${numeroUno} es mayor que ${numeroDos}`)
	} else {
		alert(`El numero ${numeroUno} no es mayour que ${numeroDos}`)
	}
}
// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
const btnCantidadPalabras = document.getElementById('btnCantidadPalabras')
btnCantidadPalabras.addEventListener('click', () => {
	contarPalabras()
})
const contarPalabras = () => {
	let frase = String(prompt('Ingresa una frase').trim())
	let palabras = frase.split(' ').length
	alert(`La frase ${frase} tiene ${palabras} palabras`)
}
//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
const btnNumeroPositivo = document.getElementById('btnNumeroPositivo')
btnNumeroPositivo.addEventListener('click', () => {
	numeroPositivo()
})
const numeroPositivo = () => {
	let numero = parseFloat(prompt('Ingresa un numero')) || 0
	if (numero > 0) {
		alert(`El numero ${numero} positivo`)
	} else if (numero < 0) {
		alert(`El numero ${numero} negativo`)
	} else {
		alert(`El numero ${numero} es cero`)
	}
}
//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
const btnParImparCinco = document.getElementById('btnParImparCinco')
btnParImparCinco.addEventListener('click', () => {
	parImpar(5)
})
const parImpar = (numero) => {
	numero % 2 === 0 ? alert(`El numero ${numero} es par`) : alert(`El numero ${numero} es impar`)
}
//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
const btnParImpar = document.getElementById('btnParImpar')
btnParImpar.addEventListener('click', () => {
	parImpar(parseFloat(prompt('Ingresa un numero')) || 0)
})

//Tarea duplicada
// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
const btnMayorNumero = document.getElementById('btnMayorNumero')
btnMayorNumero.addEventListener('click', () => {
	alert(mayorNumero())
})
const mayorNumero = () => {
	let numeroUno = parseFloat(prompt('Ingresa el primer numero')) || 0
	let numeroDos = parseFloat(prompt('Ingresa el segundo numero')) || 0
	if (numeroUno === numeroDos) {
		return 'Los numeros son iguales'
	} else if (numeroUno > numeroDos) {
		return 'El mayor numero es ' + numeroUno
	} else {
		return 'El mayor numero es ' + numeroDos
	}
}
// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
const inputPassword = document.getElementById('inputPassword')
const inputPasswordError = document.getElementById('inputPasswordError')
const formPasswordSubmit = document.getElementById('formPasswordSubmit')
const btnPasswordSubmit = document.getElementById('btnPasswordSubmit')

btnPasswordSubmit.addEventListener('click', ($event) => {
	$event.preventDefault()
	validarPassword()
})

const validarPassword = () => {
	if (inputPassword.value.length < 8 || inputPassword.value == '') {
		inputPasswordError.innerHTML = 'La contraseña debe tener entre 8 y 20 caracteres'
	} else if (inputPassword.value.length < 8) {
		inputPasswordError.innerHTML = 'La contraseña debe tener al menos 8 caracteres'
	} else if (inputPassword.value.length > 20) {
		inputPasswordError.innerHTML = 'La contraseña debe tener menos de 20 caracteres'
	} else if (!/[A-Z]/.test(inputPassword.value)) {
		inputPasswordError.innerHTML = 'La contraseña debe tener al menos una letra mayúscula'
	} else if (!/[a-z]/.test(inputPassword.value)) {
		inputPasswordError.innerHTML = 'La contraseña debe tener al menos una letra minúscula'
	} else if (!/\d/.test(inputPassword.value)) {
		inputPasswordError.innerHTML = 'La contraseña debe tener al menos un número'
	} else if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(inputPassword.value)) {
		inputPasswordError.innerHTML = 'La contraseña no debe tener caracteres especiales'
	} else {
		alert('Contraseña correcta !')
		formPasswordSubmit.submit()
	}
}
// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
const inputCalificacion = document.getElementById('inputCalificacion')
const formCalificacion = document.getElementById('formCalificacion')
const btnCalificacionSubmit = document.getElementById('btnCalificacionSubmit')

btnCalificacionSubmit.addEventListener('click', ($event) => {
	$event.preventDefault()
	validarCalificacion()
})

const validarCalificacion = () => {
	console.log()
	if (inputCalificacion.value == '') {
		alert('La calificación no puede estar vacía')
	} else if (inputCalificacion.value < 0) {
		alert('La calificación no puede ser negativa')
	} else if (inputCalificacion.value < 70) {
		alert('Desaprobaste! La calificación debe ser mayor o igual a 70')
	} else {
		alert('Aprobaste! La calificación debe ser mayor o igual a 70')
		formCalificacion.submit()
	}
}

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
const btnRevertirPalabra = document.getElementById('btnRevertirPalabra')
btnRevertirPalabra.addEventListener('click', () => {
	let palabra = prompt('Ingresa una palabra')
	if (palabra.length <= 2) {
		alert('Ingrese al menos 3 caracteres')
	} else {
		esPalindromo(palabra)
	}
})
function esPalindromo(palabra) {
	let palabraInvertida = palabra.split('').reverse().join('')
	if (palabra === palabraInvertida) {
		alert(`La palabra ${palabra} es palindromo`)
	} else {
		alert(`La palabra ${palabra} no es palindromo`)
	}
}

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
const btnVocalConsonante = document.getElementById('btnVocalConsonante')
btnVocalConsonante.addEventListener('click', () => {
	let letra = prompt('Ingresa una letra').trim()
	const regExVocales = /[aeiou]/
	if (regExVocales.test(letra)) {
		alert(`La letra ${letra} es vocal`)
	} else {
		alert(`La letra ${letra} es consonante`)
	}
})
// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
const btnDiaSemana = document.getElementById('btnDiaSemana')
btnDiaSemana.addEventListener('click', () => {
	let diaNumero = prompt('Ingresa un dia del 1 al 7')
	const regExDia = /[1-7]/
	if (!regExDia.test(diaNumero) || diaNumero < 1 || diaNumero > 7) {
		alert('Error , solo se permiten numeros del 1 al 7')
	} else {
		let diaSemana = calcularDiaSemana(diaNumero)
		alert(`El dia ${diaNumero} es ${diaSemana}`)
	}
})

const dias = {
	1: 'Lunes',
	2: 'Martes',
	3: 'Miercoles',
	4: 'Jueves',
	5: 'Viernes',
	6: 'Sabado',
	7: 'Domingo',
}
const calcularDiaSemana = (diaNumero) => {
	return dias[diaNumero]
}
// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
const btnPrimo = document.getElementById('btnPrimo')
btnPrimo.addEventListener('click', () => {
	let numero = prompt('Ingresa un numero')
	const regExNumero = /[0-9]/
	if (!regExNumero.test(numero)) {
		alert('Error , solo se permiten numeros')
	} else {
		const esPrimo = calcularPrimo(numero)
		if (esPrimo) {
			alert(`El numero ${numero} es primo`)
		} else {
			alert(`El numero ${numero} no es primo`)
		}
	}
})

const calcularPrimo = (numero) => {
	if (numero <= 1) {
		return false
	}
	for (let i = 2; i < numero; i++) {
		if (numero % i === 0) {
			return false
		}
	}
	return true
}
// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
const btnMayorEdad = document.getElementById('btnMayorEdad')
btnMayorEdad.addEventListener('click', () => {
	let edad = prompt('Ingresa tu edad')
	const regExEdad = /[0-9]/
	if (!regExEdad.test(edad) || edad < 0) {
		alert('Error , ingrese una edad valida')
	} else {
		esMayorDeEdad(edad)
	}
})
const esMayorDeEdad = (edad) => {
	if (edad >= 18) {
		alert(`Eres mayor de edad`)
	} else {
		alert(`Eres menor de edad`)
	}
}
// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
const btnSumaCien = document.getElementById('btnSumaCien')
btnSumaCien.addEventListener('click', () => {
	let primerNumero = prompt('Ingresa un primer numero') || 0
	let segundoNumero = prompt('Ingresa un segundo numero') || 0
	const regExNumeros = /[0-9]/
	if (!regExNumeros.test(primerNumero) || !regExNumeros.test(segundoNumero)) {
		alert('Error , solo se permiten numeros')
	} else {
		sumaCien(primerNumero, segundoNumero)
	}
})
const sumaCien = (primerNumero, segundoNumero) => {
	let suma = parseFloat(primerNumero) + parseFloat(segundoNumero)
	if (suma > 100) {
		alert(`La suma ${suma} es mayor a 100`)
	} else if (suma < 100) {
		alert(`La suma ${suma} es menor a 100`)
	} else {
		alert(`La suma  ${suma} es igual a 100`)
	}
}
// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
const btnMayorDeTres = document.getElementById('btnMayorDeTres')
btnMayorDeTres.addEventListener('click', () => {
	let primerNumero = prompt('Ingresa un primer numero') || 0
	let segundoNumero = prompt('Ingresa un segundo numero') || 0
	let tercerNumero = prompt('Ingresa un tercer numero') || 0
	const regExNumeros = /[0-9]/
	if (!regExNumeros.test(primerNumero) || !regExNumeros.test(segundoNumero) || !regExNumeros.test(tercerNumero)) {
		alert('Error , solo se permiten numeros')
	} else {
		const numerosArray = [primerNumero, segundoNumero, tercerNumero]
		mayorDeTres(numerosArray)
	}
})
const mayorDeTres = (numerosArray) => {
	let mayorNumero = Math.max(...numerosArray)
	alert(`El numero mayor es ${mayorNumero}`)
}

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
const btnMayOMin = document.getElementById('btnMayOMin')
btnMayOMin.addEventListener('click', () => {
	let letra = prompt('Ingresa una letra').trim().slice(0, 1)
	const regExLetra = /[a-zA-Z]/
	if (!regExLetra.test(letra)) {
		alert('Error , solo se permiten letras')
	} else {
		esMayuscula(letra)
	}
})
const esMayuscula = (letra) => {
	if (letra === letra.toUpperCase()) {
		alert(`La letra ${letra} es mayuscula`)
	} else {
		alert(`La letra ${letra} es minuscula`)
	}
}
//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
const btnNumDivisible = document.getElementById('btnNumDivisible')
btnNumDivisible.addEventListener('click', () => {
	let numero = parseFloat(prompt('Ingresa un numero'))
	const regExNumeros = /[0-9]/
	if (!regExNumeros.test(numero)) {
		alert('Error , solo se permiten numeros')
	} else {
		numeroDivisible(numero)
	}
})
const numeroDivisible = (numero) => {
	if (numero % 3 === 0 && numero % 5 === 0) {
		alert(`FizzBuzz`)
	} else if (numero % 3 === 0) {
		alert(`Fizz`)
	} else if (numero % 5 === 0) {
		alert(`Buzz`)
	} else {
		alert(`${numero}`)
	}
}
// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
const btnNumeroPerfecto = document.getElementById('btnNumeroPerfecto')
btnNumeroPerfecto.addEventListener('click', () => {
	let numeroIngresado = parseFloat(prompt('Ingresa un numero'))
	const regExNumeros = /[0-9]/
	if (!regExNumeros.test(numeroIngresado)) {
		alert('Error , solo se permiten numeros')
	} else {
		if (esNumeroPerfecto(numeroIngresado)) {
			alert(`El numero ${numeroIngresado} es perfecto`)
		} else {
			alert(`El numero ${numeroIngresado} no es perfecto`)
		}
	}
})
function esNumeroPerfecto(numero) {
	if (numero <= 1) {
		return false
	}
	let sumaDivisores = 1

	for (let i = 2; i * i <= numero; i++) {
		if (numero % i === 0) {
			sumaDivisores += i
			if (i * i !== numero) {
				sumaDivisores += numero / i
			}
		}
	}
	return sumaDivisores === numero
}

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
const btnDescFactoresPrimos = document.getElementById('btnDescFactoresPrimos')
btnDescFactoresPrimos.addEventListener('click', () => {
	let numeroIngresado = parseFloat(prompt('Ingresa un numero'))
	const regExNumeros = /[0-9]/
	if (!regExNumeros.test(numeroIngresado)) {
		alert('Error , ingrese un numero valido')
	} else {
		factoresPrimos(numeroIngresado)
	}
})
function factoresPrimos(numero) {
	let factor = 2
	let descomposicion = []

	while (numero > 1) {
		if (numero % factor === 0) {
			descomposicion.push(factor)
			numero /= factor
		} else {
			factor++
		}
	}
	alert(`La descomposición en factores primos del número ingresado es: ${descomposicion.join(' * ')}`)
}
// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
const btnFechaValida = document.getElementById('btnFechaValida')
btnFechaValida.addEventListener('click', () => {
	const dia = parseFloat(prompt('Ingrese el día (entre 1 y 31):'))
	const mes = parseFloat(prompt('Ingrese el mes (entre 1 y 12):'))
	const anio = parseFloat(prompt('Ingrese el año:'))
	if (isNaN(dia) || isNaN(mes) || isNaN(anio) || dia < 1 || mes < 1 || mes > 12) {
		alert('Fecha inválida: por favor, ingrese valores numéricos válidos para día, mes y año.')
		return
	} else {
		esFechaValida(dia, mes, anio)
	}
})

const esFechaValida = (dia, mes, anio) => {
	const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	if (esBisiesto(anio)) {
		diasPorMes[1] = 29
	}

	if (dia > diasPorMes[mes - 1]) {
		alert('Fecha inválida: el mes ingresado no tiene tantos días.')
	} else {
		alert(`La fecha ${dia}/${mes}/${anio} es valida.`)
	}
}
function esBisiesto(anio) {
	return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0
}

//Segunda tanda de tareas
// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
const btnMesNumeroANombre = document.getElementById('btnMesNumeroANombre')
btnMesNumeroANombre.addEventListener('click', () => {
	let numeroIngresado = parseFloat(prompt('Ingresa un numero del 1 al 12'))
	const regExNumeros = /[0-9]/
	if (!regExNumeros.test(numeroIngresado)) {
		alert('Error , solo se permiten numeros')
	} else if (numeroIngresado < 1 || numeroIngresado > 12) {
		alert('Error , solo se permiten numeros del 1 al 12')
	} else {
		mesNumeroANombre(numeroIngresado)
	}
})
const meses = {
	1: 'Enero',
	2: 'Febrero',
	3: 'Marzo',
	4: 'Abril',
	5: 'Mayo',
	6: 'Junio',
	7: 'Julio',
	8: 'Agosto',
	9: 'Septiembre',
	10: 'Octubre',
	11: 'Noviembre',
	12: 'Diciembre',
}
const mesNumeroANombre = (numero) => {
	alert(`El mes ${numero} es ${meses[numero]}`)
}
// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
// Imprimir los números pares del 2 al 20 en la consola.
// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// Dado un array de números, escribir una función que retorne el número más grande del array.
// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
