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

const agenda = [
  {
    nombre: "Julian",
    telefono: 3814480169
  },
  {
    nombre: "Julian2",
    telefono: 3814480161
  },
  {
    nombre: "Julian3",
    telefono: 3814480162
  },
  {
    nombre: "Julian4",
    telefono: 3814480163
  },
  {
    nombre: "Julian5",
    telefono: 3814480164
  },
  {
    nombre: "Julian6",
    telefono: 3814480165
  },
  {
    nombre: "Julian6",
    telefono: 3814480166
  }
]


function agregarContacto(nombre, telefono) {
  let nuevoContacto = {
    nombre,
    telefono
  }
  agenda.push(nuevoContacto)
}

function existeContacto(nombre) {
  let bandera = false;

  agenda.forEach(elemento => {
    if (nombre === elemento.nombre) {
      bandera = true;
    }
  });
  if (bandera) {
    console.log("Contacto existente")
  }
  else {
    console.log("Contacto inexistente");
  }
}

function listarContactos() {
  console.log(agenda);
}

function buscarContacto(nombre) {
  let bandera2 = false;

  agenda.forEach(elemento1 => {
    if (nombre === elemento1.nombre) {
      bandera = true;
    }
  });
  if (bandera) {
    console.log("Contacto existente y su telefono es: ", elemento1.telefono)
  }
  else {
    console.log("Contacto inexistente");
  }
}


function agendaLlena() {
  if (agenda.length > 10) {
    return console.log("La agenda esta completa")
  }
  else {
    return console.log("Todavia hay lugares disponibles en la agenta")
  }
}

existeContacto('Julian5');
existeContacto('Julian20');
agregarContacto('julian', 38156666);
listarContactos();
buscarContacto('Julian');
eliminarContacto('Julian2');
agendaLlena();

