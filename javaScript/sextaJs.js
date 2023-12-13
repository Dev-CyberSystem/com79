// POO

// const objeto = {
//     clave: valor,
//     metodo: function() {
//         // código
//     }
// }

// const persona = {
//     nombre: 'Juan',
//     apellido: 'Quinteros',
//     edad: 30,
//     saludar: function() {
//         console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
//     }
// }

// console.log(persona.apellido, "apellido")
// console.log(persona.nombre, "nombre")
// console.log(persona.edad, "edad")
// persona.saludar()

// class Animal {
//     constructor(nombre, especie, edad) {
//         this.nombre = nombre,
//         this.especie = especie,
//         this.edad  = edad
//     }
// }

// const perro = new Animal('Tobi', 'Caniche', 5)
// console.log(perro, "<----- Perro")

// const gato = new Animal('Michi', 'Siames', 3)
// console.log(gato, "<----- Gato")

// const bebida = {
//     "nombre del bebida": "Coca Cola",
//     "precio de la bebida": 150,
// }

// console.log(bebida["nombre del bebida"])

// class Animal {
//     constructor(nombre, especie, edad) {
//         this.nombre = nombre,
//         this.especie = especie,
//         this.edad  = edad
//     }
// }
// class Perro extends Animal {
//     constructor(nombre, especie, edad, sonido) {
//        super(nombre, especie, edad) 
//        this.nombre = nombre,
//        this.especie = especie,
//        this.edad  = edad,
//        this.sonido = sonido,
//        this.juego = function() {
//            console.log('Moviendo la cola')
//        }
//     }
// }

class Gato extends Animal {
    constructor(nombre, especie, edad, vidas) {
       super(nombre, especie, edad) 
       this.nombre = nombre,
       this.especie = especie,
       this.edad  = edad,
       this.vidas = vidas,
       this.juego = function() {
              console.log('Comiendo Lasagna')
         }
    }
}

// const perro = new Perro('Tobi', 'Caniche', 5, 'guau')
// const gato = new Gato('Michi', 'Siames', 3, 1)

// console.log(perro, "<----- Perro")
// perro.juego()
// console.log(gato, "<----- Gato")

// const animalito = new Animal("Odie", 'caniche', 1)

// console.log(animalito, "<----- Animalito")

const perro = new Perro( 'guau')
console.log(perro, "<----- Perro")


//Crear una clase Producto que tenga las propiedades nombre, precio y cantidad. La clase debe tener un método calcularTotal que calcule y devuelva el total de la compra de ese producto.
//Crear una clase Rectangulo que tenga las propiedades ancho y alto. La clase debe tener un método calcularArea que calcule y devuelva el área del rectángulo.
// Crear una clase Persona que tenga las propiedades nombre, edad y profesión. La clase debe tener un método presentarse que imprima en la consola un mensaje con los datos de la persona.

