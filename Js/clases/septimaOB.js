//POO

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