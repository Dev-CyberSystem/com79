function presentacion() {
  const nombre = prompt('¿Cual es tu nombre?');
  const edad = prompt('¿Cual es tu edad?');
  const pasatiempo = prompt('¿Cual es tu pasatiempo?');

  const mensaje = `Hola, mi nombre es ${nombre}, tengo ${edad} años y mi pasatiempo es ${pasatiempo}`;

  alert(mensaje);
}

// presentacion();

// Utilizando parámetros
function mostrarMensaje(nombre, edad, pasatiempo) {
  const mensaje = `Hola, mi nombre es ${nombre}, tengo ${edad} años y mi pasatiempo es ${pasatiempo}`;
  console.log(mensaje);
}

mostrarMensaje('Nicolas', 26, 'Jugar videojuegos');
