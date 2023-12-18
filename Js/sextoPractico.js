class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
class AgendaTelefonica {
    constructor(tamano = 10) {
      this.contactos = [];
      this.tamanoMaximo = tamano;
      this.cargarDesdeLocalStorage();
      this.mostrarContactos();
    }
  }  
let aniadirContacto=()=> {
      const nombre = document.getElementById('nombre').value;
      const telefono = document.getElementById('telefono').value;
  
      if (nombre && telefono) {
        const nuevoContacto = new Contacto(nombre, telefono);
  
        if (!this.existeContacto(nuevoContacto)) {
          if (!this.agendaLlena()) {
            this.contactos.push(nuevoContacto);
            this.actualizarLocalStorage();
            this.mostrarContactos();
            console.log('Contacto añadido correctamente.');
          } else {
            console.log('La agenda está llena, no se puede agregar más contactos.');
          }
        } else {
          console.log('El contacto ya existe en la agenda.');
        }
      } else {
        console.log('Por favor, ingrese nombre y teléfono del contacto.');
      }
    }
  
let existeContacto=(contacto)=> {
      return this.contactos.some(c => c.nombre === contacto.nombre);
    }
  
let buscarContacto=()=> {
      const nombreBuscar = document.getElementById('buscarNombre').value;
      const contactoEncontrado = this.contactos.find(c => c.nombre.toLowerCase() === nombreBuscar.toLowerCase());
  
      if (contactoEncontrado) {
        console.log(`Teléfono de ${contactoEncontrado.nombre}: ${contactoEncontrado.telefono}`);
      } else {
        console.log(`No se encontró ningún contacto con el nombre ${nombreBuscar}.`);
      }
    }
  
let eliminarContacto=(nombre)=> {
      const indice = this.contactos.findIndex(c => c.nombre.toLowerCase() === nombre.toLowerCase());
      if (indice !== -1) {
        this.contactos.splice(indice, 1);
        this.actualizarLocalStorage();
        this.mostrarContactos();
        console.log(`Contacto ${nombre} eliminado correctamente.`);
      } else {
        console.log('El contacto no existe en la agenda.');
      }
    }
  
let agendaLlena=()=> {
      return this.contactos.length >= this.tamanoMaximo;
    }
  
let mostrarContactos=()=> {
      const lista = document.getElementById('listaContactos');
      lista.innerHTML = '';
  
      this.contactos.forEach(contacto => {
        const item = document.createElement('li');
        item.textContent = `${contacto.nombre} - ${contacto.telefono}`;
  
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => this.eliminarContacto(contacto.nombre);
  
        item.appendChild(botonEliminar);
        lista.appendChild(item);
      });
    }
  
let actualizarLocalStorage=()=> {
      localStorage.setItem('agenda', JSON.stringify(this.contactos));
    }
  
let cargarDesdeLocalStorage=()=> {
      const agendaGuardada = JSON.parse(localStorage.getItem('agenda'));
      if (agendaGuardada) {
        this.contactos = agendaGuardada;
      }
    }
  
  
  const agenda = new AgendaTelefonica();