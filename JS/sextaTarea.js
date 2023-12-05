//Crear una clase Producto que tenga las propiedades nombre, precio y cantidad. 
//La clase debe tener un método calcularTotal que calcule y devuelva el total de la compra de ese producto.

class producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre,
      this.precio = precio,
      this.cantidad = cantidad
      this.compra = function compra(){
        return this.precio * this.cantidad
      }
    }
}

let bebida = new producto("Coca", 150, 3)
let totalCompra = bebida.compra()

console.log("El total de la compra es $" + totalCompra)

//Crear una clase Rectangulo que tenga las propiedades ancho y alto. 
//La clase debe tener un método calcularArea que calcule y devuelva el área del rectángulo.

class rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho
        this.alto = alto
        this.calculo = function calculo(){
            let resultado = ancho * alto
            return resultado
        }
    }
}

let poligono = new rectangulo (30,60)
let calculo = poligono.calculo()

console.log("El resultado de calcular el área de un rectángulo es: " + calculo)

//Crear una clase Persona que tenga las propiedades nombre, edad y profesión. 
//La clase debe tener un método presentarse que imprima en la consola un mensaje con los datos de la persona.

class persona {
    constructor(nombre, edad, profesion){
        this.nombre = nombre,
        this.edad = edad,
        this.profesion = profesion
        this.mensaje = function mensaje() {
            console.log(`Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion} de Comunicación y Programación.`);
        }
    }
}

let estudiante = new persona ("georgina", 32, "estudiante")
estudiante.mensaje()