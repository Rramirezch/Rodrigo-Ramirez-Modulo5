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
                    const arrayDeNumeros = data.toString().split(",")
                    const numerosPares = arrayDeNumeros.filter(numero => numero % 2 === 0)
                    console.log('numeros Pares =', numerosPares)
                    
                })
            ])
            
        }, 2000);
    })
}
sacarNumeros()


        
        
    