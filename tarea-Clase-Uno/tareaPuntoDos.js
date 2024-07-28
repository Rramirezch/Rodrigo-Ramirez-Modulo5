const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

let edades = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.edad, 0)
console.log('la suma de las eadades es:', edades);
console.log('El promedio de edad de los estudiantes es', edades / 6)

//R E T O :
const ordenadosXPromedio = estudiantes.sort((a, b) => {
  if (a.promedio < b.promedio){
    return -1;
  }else if (a.promedio > b.promedio) {
    return 1
  }else {
    return 0;
  }
});
mayorPromedio = ordenadosXPromedio.reduce((previus, current) => {
  return current > previus ? previus : current
 }) 


console.log('Estudiantes Ordenados por el Promedio', ordenadosXPromedio)
console.log('el mayor promedio es:', mayorPromedio)