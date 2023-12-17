//Localstorage

// localStorage.setItem('nombre', 'Diego')
// let localGet = localStorage.getItem('nombre')
// console.log(localGet)
// localStorage.removeItem('nombre')

// Import y export

// Tarea

// ○ Nos piden realizar una agenda telefónica de contactos.
// ○ Un contacto está definido por un nombre y un teléfono. Se considera que un
// contacto es igual a otro cuando sus nombres son iguales.
// ○ Una agenda de contactos está formada por un conjunto de contactos. Se
// podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño
// por defecto (10).
// ○ Las funciones serán:
// ■ aniadirContacto(Contacto): Añade un contacto a la agenda, sino la
// agenda no puede almacenar mas contactos indicar por pantalla.
// ■ existeContacto(Conctacto): indica si el contacto pasado existe o no.
// ■ listarContactos(): Lista toda la agenda
// ■ buscarContacto(nombre): busca un contacto por su nombre y muestra
// su teléfono.
// ■ eliminarContacto(Contacto): elimina el contacto de la agenda, indica
// si se ha eliminado o no por pantalla
// ■ agendaLlena(): indica si la agenda está llena.
// ■ huecosLibres(): indica cuántos contactos más podemos ingresar.
// ○ Usar LocalStorage para guardar la info de la agenda y para consultar sus
// datos

const agendaTelefonica = {};

agendaTelefonica.contactos = [];

const { contactos } = agendaTelefonica;

console.log(contactos);

agendaTelefonica.funciones = {
  existeContacto: (nombre) => {
    const existeContacto = contactos.some(
      (contacto) => contacto.nombre === nombre
    );

    if (existeContacto) {
      return console.log(`El contacto ${nombre} ya existe en la lista.`);
    } else {
      return console.log(`El contacto ${nombre} no existe en la lista.`);
    }
  },

  aniadirContacto: (nombre, numero) => {
    if (contactos.length <= 10) {
      const nuevoContacto = {
        nombre,
        numero,
      };

      return agendaTelefonica.contactos.push(nuevoContacto);
    }
    console.log(`Se llego al numero máximo de contactos`);
  },
  listarContactos: (contactos) => {
    contactos.forEach((contacto, index) => {
      const { nombre, numero } = contacto;
      return console.log(`${index} - Nombre: ${nombre} - Numero: ${numero}}`);
    });
  },
  buscarContacto: (nombre) => {
    const contactoEncontrado = contactos.find(
      (contacto) => contacto.nombre === nombre
    );

    if (contactoEncontrado) {
      return console.log(
        `Nombre: ${contactoEncontrado.nombre} - Teléfono: ${contactoEncontrado.numero}`
      );
    }
    console.log(`El contacto ${nombre} no se encuentra en la lista.`);
  },
  agendaLlena: () => {
    if (contactos.length > 10) {
      return console.log(`La agenda se encuentra llena`);
    }
    console.log(`Todavía hay lugares en la agenda`);
  },
  huecosLibres: () => {
    const espacioDisponible = 10 - contactos.length;

    if (espacioDisponible > 0) {
      console.log(`Puedes agregar ${espacioDisponible} contactos más.`);
    } else {
      console.log('La agenda está llena, no es posible agregar más contactos.');
    }
  },
};

agendaTelefonica.funciones.existeContacto('Nicolas'); // 'El contacto Nicolas no existe en la lista.'

agendaTelefonica.funciones.aniadirContacto('Nicolas', 3815514521); // Agrega un contacto
agendaTelefonica.funciones.aniadirContacto('Daniel', 3815514524);
agendaTelefonica.funciones.aniadirContacto('Jose', 3815514526);

agendaTelefonica.funciones.existeContacto('Nicolas'); // 'El contacto Nicolas ya existe en la lista.'

agendaTelefonica.funciones.buscarContacto('Daniel');

// console.log(agendaTelefonica.contactos);
agendaTelefonica.funciones.listarContactos(contactos); //Imprime la lista

// agendaTelefonica.funciones.aniadirContacto('Daniel', 3815514524);
// agendaTelefonica.funciones.aniadirContacto('Daniel', 3815514524);
// agendaTelefonica.funciones.aniadirContacto('Daniel', 3815514524);
// agendaTelefonica.funciones.aniadirContacto('Daniel', 3815514524);
// agendaTelefonica.funciones.aniadirContacto('Daniel', 3815514524);
// agendaTelefonica.funciones.aniadirContacto('Daniel', 3815514524);
// agendaTelefonica.funciones.aniadirContacto('Daniel', 3815514524);
// agendaTelefonica.funciones.aniadirContacto('Daniel', 3815514524);
// agendaTelefonica.funciones.aniadirContacto('Daniel', 3815514524);

agendaTelefonica.funciones.agendaLlena(); //
agendaTelefonica.funciones.huecosLibres(); // Puedes agregar 7 espacios mas
