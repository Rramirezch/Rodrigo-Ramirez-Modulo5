import fs from 'fs'
import { argv } from 'process'


const argumentos = process.argv.slice(2)

let numero1 = parseFloat(argumentos[0]);
let operando = argumentos[1];
let numero2 = parseFloat(argumentos[2]);
let resultado;
if (operando === '+'){
    resultado = numero1 + numero2;
}else if (operando === '-'){
    resultado = numero1 - numero2;
}else if (operando === '*') {
    resultado = numero1 * numero2;
}else if (operando === '/' ){
    if (numero2 === 0 ){
        console.log('operacion invalida, cero no es un divisor valido')
        resultado = null
    }
    resultado = numero1 / numero2;
} else {
    console.log('operador no valido')
    resultado = null
}
if (resultado != null) {
    console.log(`El resultado de ${numero1} ${operando} ${numero2} es: ${resultado}`);
}