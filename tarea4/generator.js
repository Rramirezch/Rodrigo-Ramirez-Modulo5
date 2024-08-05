import { error } from 'console'
import fs from 'fs'
import { stringify } from 'querystring'

fs.unlink('./numeros.txt', (error) => {
    if(error) throw error
})
let numeros = [];
for (let i = 1; i <= 1000; i++){
    numeros.push(i)
}
console.log(numeros)

fs.writeFile('numeros.txt', `${numeros}`,  (error) => {
    if(error) throw error
})

/*for (let i = 1; i < 1001; i++) {
        fs.appendFile('./numeros.txt', `${i}, `,
            (error) => {
           if (error) throw error
    });
}*/

//con este ultimo metodo, genera los numeros pero no quedan bien ordenados
