const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];
//Listar todos los productos.
// for (i = 0; i <= carrito.length; i++) {
//     printShoopping(carrito[i])
// }
function printShoopping(shoopingCar) {
    console.log("-----Producto----");
    for (property in shoopingCar) {
        console.log(property + ": " + shoopingCar[property])
    }
}

//Eliminar el producto con id 54657 del carrito de la compra.
// var id = carrito.indexOf(54657);
// var remove = carrito.splice(id, 1);
// for (i = 0; i <= carrito.length; i++) {
//     printShoopping(carrito[i])
// }

//Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).
// var total = 0;
// for(index of carrito){
//     total += index.price * index.count;
// }
// console.log("El total del carrito es: " + total + "€.")

// Filtrar por los productos que sean prime.

// for(i = 0; i < carrito.length; i++){
//     if( carrito[i].premium === true){
//         printShoopping(carrito[i]);
//     }
// }

// Opcional:
// Si todos los productos son prime mostrar un mensaje "Gastos de envío cero", si no "Con gastos de envío".
// let premium = true;
// for(producto of carrito){
//     if(producto.premium === false){
//         premium = false
//     }
// }

// if(premium === true){
//     console.log("Gastos de envío cero");
// }else{
//     console.log("Con gastos de envio")
// }

// Mostrar el carrito en un listado de html básico.
document.write("<h3>Lista de la compra</h3>");

for (producto of carrito) {
    document.write("<li>" + producto.name + "</li>")
}
// Aplicar un descuento del 5% si la compra es mayor de 50 €.
var total = 0;
for (index of carrito) {
    total += index.price * index.count;
}
console.log("El total del carrito es: " + total + "€.")

if (total > 50) {
    var discount = total * 0.95;
    console.log("Tiene un descuento del 5% y el total es: " + discount)
}