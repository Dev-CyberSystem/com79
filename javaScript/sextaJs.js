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
<<<<<<< HEAD
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

// class Gato extends Animal {
//     constructor(nombre, especie, edad, vidas) {
//        super(nombre, especie, edad) 
//        this.nombre = nombre,
//        this.especie = especie,
//        this.edad  = edad,
//        this.vidas = vidas,
//        this.juego = function() {
//               console.log('Comiendo Lasagna')
//          }
//     }
=======
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
>>>>>>> 408195ee89bc4b8e6eae2b5e34bd004429bd84ae
// }

// const perro = new Perro('Tobi', 'Caniche', 5, 'guau')
// const gato = new Gato('Michi', 'Siames', 3, 1)

// console.log(perro, "<----- Perro")
// perro.juego()
// console.log(gato, "<----- Gato")

<<<<<<< HEAD
// const animalito = new Animal("Odie", 'caniche', 1)

// console.log(animalito, "<----- Animalito")

// const perro = new Perro( 'guau')
// console.log(perro, "<----- Perro")
=======
// const animalito = new Animal('Odie', 'caniche', 1);

// console.log(animalito, '<----- Animalito');
>>>>>>> 408195ee89bc4b8e6eae2b5e34bd004429bd84ae

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

<<<<<<< HEAD

// Setters y Getters

//   En JavaScript, los setters y getters son funciones especiales que se utilizan para establecer y obtener valores de propiedades de un objeto. Estas funciones se pueden definir en una clase mediante el uso de las palabras clave set y get.

// Getters <---- get (obtener) forma parte tambien de los verbos HTTP. (GET, POST, PUT, DELETE)

//Setters <---- set (establecer datos.) 

// class Persona {
//     constructor(name, lastname) {
//         this._nombre = name,
//         this._apellido = lastname
//     }

//     get nombre(){
//         return this._nombre
//     }

//     set nombre(nuevoNombre) {
//         this._nombre = nuevoNombre
//     }
// }

// const persona = new Persona('Juan', 'Quinteros')

// console.log(persona.nombre)

// persona.nombre = 'Pedro'

// console.log(persona.nombre)




class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre,
        this.precio = precio,
        this.cantidad = cantidad
    }
    imprimirProductos() {
        console.log(`El producto ${this.nombre} tiene un precio de $${this.precio} y hay ${this.cantidad} unidades`)
    }
}

const producto1 = new Producto('Coca Cola', 150, 2)
const producto2 = new Producto('Pepsi', 150, 2)
const producto3 = new Producto('Sprite', 150, 2)

const almacen = [producto1, producto2, producto3]

almacen.forEach(producto => producto.imprimirProductos())

=======
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
>>>>>>> 408195ee89bc4b8e6eae2b5e34bd004429bd84ae
