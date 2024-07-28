import Chance from "chance";


const chance = new Chance();

//generar datos aleatorios

const nombre = chance.name();
const correo = chance.email();
const telefono = chance.phone();

console.log("Datos Aleatorios Generados:");
console.log("Nombre:", nombre);
console.log("Correo Electrónico:", correo);
console.log("Telefono:", telefono);