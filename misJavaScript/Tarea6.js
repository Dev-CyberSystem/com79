//Crear una clase Producto que tenga las propiedades nombre, precio y cantidad. La clase debe tener un método calcularTotal que calcule y devuelva el total de la compra de ese producto.

console.log("BIENVENIDO")

class Producto {
    constructor(nombre, precio, cantidad) {
            this.nombre = nombre;
            this.precio = precio;
            this.cantidad = cantidad;
          }
            calcularTotal = function () {
                // let totalPagar = 0;
                // Number(totalPagar) = precio * calidad;
                // return totalPagar;
                return this.precio * this.cantidad;
            }
}

// const producto1 = new Producto("CocaCola",800,2);

const nombreProducto = prompt("Ingrese el nombre del producto:");
const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
const cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto:"));


const productoUsuario = new Producto(nombreProducto, precioProducto, cantidadProducto);

const totalCompra = productoUsuario.calcularTotal();


console.log('Tu producto es:',productoUsuario.nombre,'Y el total de la compra es:',totalCompra);




// //Crear una clase Rectangulo que tenga las propiedades ancho y alto. La clase debe tener un método calcularArea que calcule y devuelva el área del rectángulo.

class Rectangulo {
    constructor(ancho, alto) {
            this.ancho = ancho;
            this.alto = alto;
    }
            calcularArea = function () {
              return this.ancho * this.alto;
            }
}

const ancho = parseFloat(prompt("Ingrese el alto del rectangulo:"));
const alto = parseFloat(prompt("Ingrese la base del rectangulo:"));

const rectangulo = new Rectangulo(ancho, alto);

const area = rectangulo.calcularArea(); 

console.log('El area del rectangulo es: ',area);


// // // Crear una clase Persona que tenga las propiedades nombre, edad y profesión. La clase debe tener un método presentarse que imprima en la consola un mensaje con los datos de la persona.

class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
    presentarse() {
      console.log(`Hola, soy ${this.nombre}. Tengo ${this.edad} años y soy ${this.profesion}.`);
    }
  }

  const persona1 = new Persona("Juan", 30, "Ingeniero");
  persona1.presentarse();
  
