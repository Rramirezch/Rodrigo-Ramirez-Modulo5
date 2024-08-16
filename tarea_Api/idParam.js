import http from 'http';



const port = 3002;

const server = http.createServer((req, res ) => {
    res.writeHead(200, { 'Content-type': 'text/html'});
    console.log(req.url)
    /*switch(req.url){
        case '/productos/:id':*/
            //const id = req.url.id;
            console.log(req.url)
            res.write('<h1>hola mundo</h1>');
            res.end()
        
            /*const product = productos.find((producto) => producto.id === parseInt(id));
            res.end(JSON.stringify(product));
            break;*/
        /*default:
            res.end({error: 'Producto No encontrado'})
            res.writeHead(404)
            /*res.writeHead(404)
            res.end(JSON.stringify({error: 'Ruta No encontrada'}))
            break;
        }*/
})

 
server.listen(port, () => {
    console.log(`escuchando el puerto ${port}`)
})