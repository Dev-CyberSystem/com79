//Crear una clase Producto que tenga las propiedades nombre, precio y cantidad. La clase debe tener un método calcularTotal que calcule y devuelva el total de la compra de ese producto.
class Producto {
	constructor(nombre, precio, cantidad) {
		this.nombre = nombre
		this.precio = precio
		this.cantidad = cantidad
	}
	calcularTotal = () => {
		return this.precio * this.cantidad
	}
}
const producto1 = new Producto('celular', 100, 3)
const total = producto1.calcularTotal()
console.log(`El total es: ${total}`)

//Crear una clase Rectangulo que tenga las propiedades ancho y alto. La clase debe tener un método calcularArea que calcule y devuelva el área del rectángulo.
class Rectangulo {
	constructor(ancho, alto) {
		this.ancho = ancho
		this.alto = alto
	}
	calcularArea = () => {
		return `El area es : ${this.ancho * this.alto}`
	}
}
const rectangulo1 = new Rectangulo(200, 10)
console.log(rectangulo1.calcularArea())

// Crear una clase Persona que tenga las propiedades nombre, edad y profesión. La clase debe tener un método presentarse que imprima en la consola un mensaje con los datos de la persona.
class Persona {
	constructor(nombre, edad, profesion) {
		this.nombre = nombre
		this.edad = edad
		this.profesion = profesion
	}
	presentarse = () => {
		return `Hola me llamo ${this.nombre}, tengo ${this.edad} años y mi profesion es ${this.profesion}`
	}
}
const persona1 = new Persona('julio', 34, 'carpintero')
console.log(persona1.presentarse())
