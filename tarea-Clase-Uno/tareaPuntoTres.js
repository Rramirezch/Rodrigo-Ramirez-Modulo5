let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electronica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Telefoni', categoria: 'Electronica', precio: 300 }
];

let categoriaRopa = productos.filter((producto) => producto.categoria === 'Ropa')
console.log('Los productos con catgoria Ropa son:', categoriaRopa)
let preciosMayores = productos.filter((producto) => producto.precio > 30)
console.log('Los Productos con precio mayor a 30 son:', preciosMayores)