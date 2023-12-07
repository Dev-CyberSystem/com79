//JSON


const jsonParse = '{"nombre": "iphone 7", "precio": 677, "cantidad": 1}'

const objeto = JSON.parse(jsonParse)

console.log(objeto, "<-----Objeto")

//stringify() <--- Convierte un objeto JSON en un string

const string = JSON.stringify(objeto)

console.log(string, "<-----String")

// Sincronismo javascript
/*
console.log("Hola")
console.log("Estoy en el medio")
console.log("Final")
*/
// Asincronismo
/*
console.log("inicio")
setTimeout(() => {
    alert("Soy el Timeout");
}, 3000);

console.log("final")
*/
//Async Await
//fetch es una api para cualquier resultado
const mostrarDatos = document.getElementById("datos")

async function obtenerUsuario()
{
    try{
            const respuesta = await fetch('../json/fakeApi.json')
        const data = await respuesta.json()
         const datos = JSON.stringify(data)
        mostrarDatos.textContent = `${datos}`
         console.log(data,"<-------data")
     }
 catch{
    console.log(error,"<----error" )
 }
    
}