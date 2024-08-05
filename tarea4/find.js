//import { error } from 'console'
import { createReadStream, ReadStream } from "fs";
import fs from 'fs'
import { resolve } from "path";
import { stringify } from "querystring";



//const numerosPares = data.filter((numeroPar) => numeroPar % 2 === 0 )
function sacarNumeros(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve ([ 
                fs.readFile('./numeros.txt', (error, data) => {
                    const numerosPares = data.filter(numero => numero % 2 === 0)
                    console.log('numeros Pares =', numerosPares.toString())
                    
                })
            ])
            
        }, 2000);
    })
}
sacarNumeros()

//se intentó varias formas, pero no se logró sacar los nros pares como debiera ser,
// se deja esta forma que es la que mas se asemeja a lo buscado.

        
        
    