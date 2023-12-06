//POO
/*
const objeto = 
{
    clave: valor,
    metodo: function()
    {
        //codigo
    }
}

const persona = {
    nombre: 'juan',
    apellido: 'Quintero',
    edad:30,
    saludar: function()
    {
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
}

console.log(persona.apellido, "apellido")

persona.saludar()

class Animal{
    constructor(nombre,especie, edad)
    {
        this.nombre = nombre,
        this.especie = especie,
        this.edad = edad
    }
}
const perro = new Animal(`perro`,`pitbull`, 6)
console.log(perro,`<--- soy un animal`)

const gato = new Animal (`gato`,`siames`, 3)
console.log(gato,`<--- soy un animal`)

//Herencia
class Perro extends Animal{
    constructor(nombre,especie,edad, sonido)
    {
        super(nombre,especie,edad)
        this.nombre = nombre,
        this.especie = especie,
        this.edad = edad,
        this.sonido = sonido
    }
}

class Gato extends Animal{
    constructor(nombre,especie,edad, vidas)
    {
        super (nombre,especie, edad)
        this.nombre = nombre,
        this.especie = especie,
        this.edad = edad,
        this.vidas = vidas,
        this.juego = function()
        {
            console.log('Comiendo Lasagna')
        }
    }
}

const animalito =  new Animal("Odie", 'caniche', 1)
console.log(animalito, "<---- Animalito")

const perro1 = new Perro('guau')
console.log(perro1, "<---- Perro")
*/
//Practica de get yset

class Auto{
    constructor(marca, tipoA, precio)
    {
         this.marca = marca,
         this.tipoA = tipoA,
         this.precio = precio
    }
   imprimirProducto()
   {
    console.log(`El producto ${this.marca} , el tipo es: ${this.tipoA}, precio: ${this.precio}`)
   }
}

const auto1 = new Auto('Toyota','SUV',2000000)
const auto2 = new Auto('Volkswagen','4x4',5000000)
const auto3 = new Auto('Mercedes','SUV',2000000)

const deposito = [auto1, auto2, auto3]

deposito.forEach(p => p.imprimirProducto())
