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

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
