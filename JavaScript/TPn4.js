// Realizar de manera individual el trabajo hecho grupalmente en clase:

// .Carrito de productos
// .Carrito de compras con Array
// .Crear una aplicación de carrito de compras donde se ingresen productos como elementos en un Array.
// .Las tareas que debe hacer son las siguietes:
// Agregar productos al carrito
// Listar los productos del carrito
// Buscar un producto en el carrito
// Filtrar productos que coincidan con una palabra, parte de ella o una Letra
// Eliminar producto del carrito

// let productList = [
//     {
//         pId:2331, 
//         pName:`Zapatillas deportivas Nike Ergolife negras`, 
//         pBrand:`Nike`, 
//         pDescription:`Nuevo modelo de la ultraconocida linea Ergolife de Nike, plantillas con inovador diseño panal de material elastómero adaptable a la pisada del usuario, cordones de material reforzado de fibras de última tecnología y cubierta de material sintético que permite la ventilación al tiempo que ofrece protección total`, 
//         pPrice:58666
//     },
//     {
//         pId:2341, 
//         pName:`Zapatillas deportivas Nike Ergolife blancas`, 
//         pBrand:`Nike`, 
//         pDescription:`Nuevo modelo de la ultraconocida linea Ergolife de Nike, plantillas con inovador diseño panal de material elastómero adaptable a la pisada del usuario, cordones de material reforzado de fibras de última tecnología y cubierta de material sintético que permite la ventilación al tiempo que ofrece protección total`, 
//         pPrice:58666
//     },
//     {
//         pId:25634, 
//         pName:`Traje negro neoprene ZygmaTrace de buceo`, 
//         pBrand:`O'Neill`, 
//         pDescription: `Traje de última generación con elasticidad mejorada, intercambio adapatable y gradual de temperatura con adaptación de color al entorno mediante tecnología BioWard de O'Neill`,
//         pPrice:69568
//     }, 
//     {
//         pId:25644, 
//         pName:`Traje gris-titanio neoprene ZygmaTrace de buceo`, 
//         pBrand:`O'Neill`, 
//         pDescription: `Traje de última generación con elasticidad mejorada, intercambio adapatable y gradual de temperatura con adaptación de color al entorno mediante tecnología BioWard de O'Neill`,
//         pPrice:69568
//     }, 
//     {
//         pId:5689,
//         pName:`Pantalon cargo caqui y negro`,
//         PBrand:`Levi's`,
//         pDescription:`Pantalón cargo ideal para el trabajo como el uso regular diario, con tela de alta resistencia y más comoda que nunca gracias a su material en base a fibras de seda polisintéticas procesadas con la tecnologia LeSoft`,
//         pPrice:41526
//     },
//     {
//         pId:5699,
//         pName:`Pantalon cargo azul`,
//         PBrand:`Levi's`,
//         pDescription:`Pantalón cargo ideal para el trabajo como el uso regular diario, con tela de alta resistencia y más comoda que nunca gracias a su material en base a fibras de seda polisintéticas procesadas con la tecnologia LeSoft`,
//         pPrice:41526
//     },
//     {
//         pId:1857,
//         pName:`Bermuda 3/4 pescadora verde`,
//         PBrand:`Lacoste`,
//         pDescription:`Bermuda de tela sintética con sujeción adaptable de cintura, ajustadores de fin de manga, bolsillos cuádruples con cierres reforzados resistentes a la corrosión, diseñadas para soportar uso intensivo bajo el agua`,
//         pPrice:69885
//     },
//     {
//         pId:1867,
//         pName:`Bermuda 3/4 pescadora azul oscuro`,
//         PBrand:`Lacoste`,
//         pDescription:`Bermuda de tela sintética con sujeción adaptable de cintura, ajustadores de fin de manga, bolsillos cuádruples con cierres reforzados resistentes a la corrosión, diseñadas para soportar uso intensivo bajo el agua`,
//         pPrice:69885
//     },
//     {
//         pId:9683,
//         pName:`Remera lisa roja`,
//         PBrand:`O'Neill`,
//         pDescription:`Con la calidad inmejorable de O'Neill y los nuevos hilos de seda polisintética elastisada que otorgan un ajuste cómodo y funcional en brazos y torso`,
//         pPrice:25968
//     },
//     {
//         pId:9673,
//         pName:`Remera lisa rosa`,
//         PBrand:`O'Neill`,
//         pDescription:`Con la calidad inmejorable de O'Neill y los nuevos hilos de seda polisintética elastisada que otorgan un ajuste cómodo y funcional en brazos y torso`,
//         pPrice:25968
//     },
//     {
//         pId:248695,
//         pName:`Chomba sport amarilla-gris`,
//         PBrand:`Lacoste`,
//         pDescription:`Nuevo diseño de temporada de la linea sport chombas de Lacoste, en colores combinados amarillo y gris con insuperable calidad de fibras`,
//         pPrice:24156
//     },
//     21,{
//         pId:248685,
//         pName:`Chomba sport gris-roja`,
//         PBrand:`Lacoste`,
//         pDescription:`Nuevo diseño de temporada de la linea sport chombas de Lacoste, en colores combinados amarillo y gris con insuperable calidad de fibras`,
//         pPrice:24156
//     },
//     21,{
//         pId:214,
//         pName:`Botas HiSport Ecocuero y PoliSinteric marrón de trabajo y Trekking`,
//         PBrand:`Hitech`,
//         pDescription:`Con la más alta calidad en materias primas, HiTech trae la nueva generación de botas HiSport con sistema VentSport que asegura un pie fresco aún en los peores climas, al mismo tiempo que proteje el pie de accidentes con su nueva malla flexible de Kevlar acerado`,
//         pPrice:87549
//     },
//     34,{
//         pId:224,
//         pName:`Botas HiSport Ecocuero y PoliSinteric negro de trabajo y Trekking`,
//         PBrand:`Hitech`,
//         pDescription:`Con la más alta calidad en materias primas, HiTech trae la nueva generación de botas HiSport con sistema VentSport que asegura un pie fresco aún en los peores climas, al mismo tiempo que proteje el pie de accidentes con su nueva malla flexible de Kevlar acerado`,
//         pPrice:87549
//     }
// ];

let orderCart = [];
let cartProdAmount = document.getElementById(`cartProdAmount`);
// let newProdName = document.getElementById(`newProdName`);
// let searchProdName = document.getElementById(`searchProdName`);
let listCart = document.getElementById(`listCart`);
let delMessage = document.getElementById(`delMessage`);
let searchMessage = document.getElementById(`searchMessage`);
let btnDelProd = document.getElementById(`btnDelProd`);
let btnSearchProd = document.getElementById(`btnSearchProd`);
let btnNewProdAdd = document.getElementById(`btnNewProdAdd`);
btnNewProdAdd.addEventListener(`click`, () => {
    addNewProdList();
    console.log(orderCart);
});
btnDelProd.addEventListener(`click`, () => {
    delListProd();
    console.log(orderCart);
});
btnSearchProd.addEventListener(`click`, () => {
    searchListProd();
});

let reCount = () => {
    cartProdAmount.innerText = orderCart.length;
    listCart.innerHTML = ``;
    orderCart.forEach((item) => listCart.insertAdjacentHTML(`beforeend`, `► ${item} <br>`));
};

let addNewProdList = () => {
    let newProdName = prompt(`Ingrese nombre del producto nuevo:`).toLowerCase();
    if (newProdName.match(/[a-z]/) && newProdName.length>=3) {
        orderCart.push(newProdName);
        reCount();
    } else {
        alert(`Ingrese un nombre válido (3 caracteres min.)`);
    }
};

let delListProd = () => {
    let searchProdName = prompt(`Ingrese nombre del producto a eliminar:`).toLowerCase();
    for (iter=0; iter<=orderCart.length-1; iter++) {
        if (orderCart[iter].toLowerCase() === searchProdName) {
            delMessage.innerHTML = `♦ Se eliminó el item ${orderCart[iter]}`;
            orderCart.splice(iter, 1,);
            reCount();
        }
    }
    // if () {
    //     alert(`No se ha podido encontrar el producto`)
    // }
};

let searchListProd = () => {
    let searchProdName = prompt(`Ingrese nombre del producto buscado:`).toLowerCase();
    for (iter=0; iter<=orderCart.length-1; iter++) {
        if (orderCart[iter].toLowerCase() === searchProdName) {
            searchMessage.innerHTML = `♦ El producto solicitado (${orderCart[iter]}) ya se encuentra en su lista`;
        }
    }
}