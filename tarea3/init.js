
import esperarSegundos from "./async.js"

console.log('Nuevo Archivo')

esperarSegundos(3000).then(() => {
    console.log('Tiempo Cumplido')
})

