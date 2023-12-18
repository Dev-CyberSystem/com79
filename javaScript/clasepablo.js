//BOM

//location
// location.assign("https://rollingcodeschool.com");

// location.href = "https://google.com";

// const recargar = () => {
//   location.reload();
// };

// location.replace("./pages/home.html");

const isOnline = () => {
    if (navigator.onLine) {
      console.log("Estás conectado");
    } else {
      console.log("Pagá el internet");
    }
  };
  
  const miMemo = () => {
    if (navigator.deviceMemory < 4) {
      console.warn("Memoria insuficiente");
    }
  };
  
  const miUbicacion = () => {
    const options = {
      enableHighAccuracy: true, //Si true el dispositivo es capaz de proporcionar una posición más precisa, lo hará. Tenga en cuenta que esto puede generar tiempos de respuesta más lentos o un mayor consumo de energía
      timeout: 10000, //valor positivo que representa el tiempo máximo (en milisegundos) que el dispositivo puede tardar para devolver una posición.
      maximumAge: 0, //Si se establece en 0, significa que el dispositivo no puede usar una posición almacenada en caché y debe intentar recuperar la posición actual real.
    };
  
    function error(err) {
      console.warn(`ERROR ${err.code}: ${err.message}`);
    }
  
    const success = (pos) => {
      const { coords } = pos;
      console.log("Tu ubicación actual es:");
      console.log(`Latitud: ${coords.latitude}`);
      console.log(`Longitud: ${coords.longitude}`);
      console.log(`Más o menos ${coords.accuracy} metros`);
    };
  
    window.navigator.geolocation.getCurrentPosition(success, error, options);
  };
  
  // miUbicacion();
  //-----PROMESAS------------------------
  
  const user = {
    email: "loquesea@gmail.com",
    password: "12345689",
  };
  
  const logIn = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.email === "loquesea@gmail.com" && user.password === "123456") {
          resolve("Inicio de sesión OK");
        } else {
          reject("Usuario o contraseña incorrectos");
        }
      }, 3000);
    });
  };
  
  logIn()
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.error(error));
  
  //----Fetch----------------
  const url = "https://jsonplaceholder.typicode.com/use";
  
  const traerUsuarios = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  
  //---Async Await-----------------
  
  const traerUsuariosAsync = async () => {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    return data;
  };
  let usuarios = [];
  traerUsuariosAsync().then((info) => {
    usuarios = info;
    console.log(info);
  });
  
  //---setInterval----------
  let intervalo = null;
  
  const horaActual = () => {
    let fecha = "";
    intervalo = setInterval(() => {
      fecha = new Date();
  
      document.body.innerText = "";
      document.write(
        `<h1>${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}</h1>`
      );
    }, 1000);
  };
  
  const detener = () => clearInterval(intervalo);