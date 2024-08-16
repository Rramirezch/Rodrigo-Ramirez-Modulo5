import http from 'http';
import {  readFileSync }  from 'fs';
import dotenv from 'dotenv';
//import fs from 'fs';
//import { error } from 'console';


dotenv.config()

const baseDeProductos = process.env.BASE_PRODUCTOS

const productos = JSON.parse(readFileSync(baseDeProductos))

const port = 3002;

const server = http.createServer((req, res ) => {
    res.writeHead(200, { 'Content-type': 'json'});
    if (req.url === '/productos:'){
            res.end(JSON.stringify(productos))
    }else if (req.url.startsWith('/productos/:')){
        const idA = (req.url.split(':'));
        const id = parseInt(idA.splice(1));
        const respuesta = productos.find(product => product.id === parseInt(id));

        if (respuesta) {
            res.end(JSON.stringify(respuesta));
        }else {
            //res.writeHead(404);
            res.end(JSON.stringify({message: 'Producto No encontrado'}));
        }
    }else {
        //res.writeHead(404);
        res.end(JSON.stringify({error: 'Ruta No encontrada'}));
    }
});

 
server.listen(port, () => {
    console.log(`escuchando el puerto ${port}`)
});
