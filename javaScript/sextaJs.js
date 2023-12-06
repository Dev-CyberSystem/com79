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
//   constructor(nombre, especie, edad) {
//     (this.nombre = nombre), (this.especie = especie), (this.edad = edad);
//   }
// }
// class Perro extends Animal {
//   constructor(nombre, especie, edad, sonido) {
//     super(nombre, especie, edad);
//     (this.nombre = nombre),
//       (this.especie = especie),
//       (this.edad = edad),
//       (this.sonido = sonido),
//       (this.juego = function () {
//         console.log('Moviendo la cola');
//       });
//   }
// }

// class Gato extends Animal {
//   constructor(nombre, especie, edad, vidas) {
//     super(nombre, especie, edad);
//     (this.nombre = nombre),
//       (this.especie = especie),
//       (this.edad = edad),
//       (this.vidas = vidas),
//       (this.juego = function () {
//         console.log('Comiendo Lasagna');
//       });
//   }
// }

// const perro = new Perro('Tobi', 'Caniche', 5, 'guau')
// const gato = new Gato('Michi', 'Siames', 3, 1)

// console.log(perro, "<----- Perro")
// perro.juego()
// console.log(gato, "<----- Gato")

// const animalito = new Animal('Odie', 'caniche', 1);

// console.log(animalito, '<----- Animalito');

// const perro = new Perro('guau');
// console.log(perro, '<----- Perro');

//Crear una clase Producto que tenga las propiedades nombre, precio y cantidad. La clase debe tener un método calcularTotal que calcule y devuelva el total de la compra de ese producto.

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  calcularTotal(precio, cantidad) {
    const precioTotal = precio * cantidad;
    return console.log(`se calcula que el total es de $${precioTotal}`);
  }
}

const chocolate = new Producto('chocolate', 15, 2);
chocolate.calcularTotal(15, 2);

//Crear una clase Rectángulo que tenga las propiedades ancho y alto. La clase debe tener un método calcularArea que calcule y devuelva el área del rectángulo.

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  calcularArea() {
    const areaTotal = this.ancho * this.alto;
    return console.log(`El area total es de ${areaTotal} centímetros`);
  }
}

const miRectangulo = new Rectangulo(5, 7);

miRectangulo.calcularArea();

// Crear una clase Persona que tenga las propiedades nombre, edad y profesión. La clase debe tener un método presentarse que imprima en la consola un mensaje con los datos de la persona.

class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  presentarse() {
    return console.log(
      `Mi nombre es ${this.nombre}, mi edad es de ${this.edad}, y mi profesión es de ${this.profesion}`
    );
  }
}

const programador = new Persona('Nicolas', '26', 'programador');

programador.presentarse();
