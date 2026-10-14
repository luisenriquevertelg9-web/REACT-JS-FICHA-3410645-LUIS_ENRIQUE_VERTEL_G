console.log("JavaScript listo para practicar"); 

function calcularTotal(precio, cantidad) { const total = precio * cantidad; return total; } 
 const resultado = calcularTotal(50000, 3); console.log(resultado); 





import promptSync from 'prompt-sync';
const prompt = promptSync();

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir entre cero";
    }
    return a / b;
}

function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número: "));

console.log("Suma:", sumar(num1, num2));
console.log("Resta:", restar(num1, num2));
console.log("Multiplicación:", multiplicar(num1, num2));
console.log("División:", dividir(num1, num2));

let nota1 = parseFloat(prompt("Ingresa la primera nota: "));
let nota2 = parseFloat(prompt("Ingresa la segunda nota: "));
let nota3 = parseFloat(prompt("Ingresa la tercera nota: "));

console.log("Promedio:", calcularPromedio(nota1, nota2, nota3));



//console.log() solo muestra el mensaje o resultado en la consola para que lo vea 
// el programador, pero no devuelve ningún dato para usar después.

//return saca el resultado de la función para poder guardarlo 
// en una variable y seguir usándolo en el resto del código.


 

const cuadrado = (numero) => {
    return numero * numero;
};

const esMayorEdad = (edad) => {
    return edad >= 18;
};

const nombreCompleto = (nombre, apellido) => {
    return `${nombre} ${apellido}`;
};

let num = parseFloat(prompt("Ingresa un número para calcular su cuadrado: "));
console.log("Cuadrado:", cuadrado(num));

let edadUsuario = parseInt(prompt("Ingresa tu edad: "));
console.log("¿Es mayor de edad?:", esMayorEdad(edadUsuario));

let nombreUsuario = prompt("Ingresa tu nombre: ");
let apellidoUsuario = prompt("Ingresa tu apellido: ");
console.log("Nombre completo:", nombreCompleto(nombreUsuario, apellidoUsuario));





const productos = [
  { id: 1, nombre: 'Luis', precio: 5000000, categoria: 'lindos', stock: 1 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audífonos', precio: 120000, categoria: 'Perifericos', stock: 10 },
  { id: 5, nombre: 'Laptop Gamer', precio: 3500000, categoria: 'Computadores', stock: 2 },
  { id: 6, nombre: 'Impresora', precio: 450000, categoria: 'Oficina', stock: 0 },
  { id: 7, nombre: 'Memoria USB', precio: 35000, categoria: 'Almacenamiento', stock: 15 },
  { id: 8, nombre: 'Disco Duro SSD', precio: 280000, categoria: 'Almacenamiento', stock: 4 },
  { id: 9, nombre: 'Silla Gamer', precio: 750000, categoria: 'Oficina', stock: 1 },
  { id: 10, nombre: 'Webcam', precio: 150000, categoria: 'Perifericos', stock: 6 }
];

console.log("Lista de productos cargada:", productos);




productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - \$${producto.precio} - stock: ${producto.stock}`);
});






const preciosConIva = productos.map(producto => producto.precio * 1.19);
console.log("Precios con IVA:", preciosConIva);

const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
console.log("Nombres en mayúscula:", nombresMayuscula);

const resumenProductos = productos.map(producto => `${producto.nombre} cuesta $${producto.precio}`);
console.log("Resumen de productos:", resumenProductos);





const disponibles = productos.filter(producto => producto.stock > 0);
console.log("Productos disponibles:", disponibles);

const producto3 = productos.find(producto => producto.id === 3);
console.log("Producto con id 3:", producto3);


const mayoresA100k = productos.filter(producto => producto.precio > 100000);
console.log("Productos con precio > $100.000:", mayoresA100k);

const entre50y200k = productos.filter(producto => producto.precio >= 50000 && producto.precio <= 200000);
console.log("Productos entre $50.000 y $200.000:", entre50y200k);

const categoriaPerifericos = productos.filter(producto => producto.categoria === 'Perifericos');
console.log("Productos de categoría Periféricos:", categoriaPerifericos);

const producto5 = productos.find(producto => producto.id === 5);
console.log("Producto con id 5:", producto5);

function buscarProducto(idBuscado) {
  return productos.find(producto => producto.id === idBuscado);
}
console.log("Resultado de buscarProducto(2):", buscarProducto(2));






const hayAgotados = productos.some(producto => producto.stock === 0);
console.log("¿Existe algún producto agotado?:", hayAgotados);

const precioMayorMillon = productos.some(producto => producto.precio > 1000000);
console.log("¿Existe algún producto con precio mayor a $1.000.000?:", precioMayorMillon);

const preciosValidos = productos.every(producto => producto.precio > 0);
console.log("¿Todos los productos tienen precio mayor que cero?:", preciosValidos);

const stockValido = productos.every(producto => producto.stock >= 0);
console.log("¿Todos los productos tienen stock mayor o igual que cero?:", stockValido);

const valorInventario = productos.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
console.log("Valor total del inventario:", valorInventario);



const productoModificado = {
    ...productos[0],
    precio: 5500000,
    stock: 5
};

const estadoProducto = productoModificado.stock > 0 ? 'Disponible' : 'Agotado';

console.log(`El producto ${productoModificado.nombre} ahora cuesta $${productoModificado.precio} y su estado es: ${estadoProducto}`);








