se crearon los tres endpoints solicitados, 
1. para iniciar el api, nos ubicamos en la carpeta 'api-con-express'
2. abrimos la terminal, y damos el comando 'npm run start'
luego abrimos postman, y ejecutamos los comandos:
3. GET localhost:3002/students: aqui nos entrega el listado completo de los estudiantes
4. GET localhost:3002/students/:1  aqui nos entrega los datos del estudiante con id=1
5. DELETE localhost:3002:students/:2 aqui nos borra del listado al estudiante con id=2, nos entrega el listado de los estudiantes que quedan en el archivo, y actualiza el archivo sin el estudiante eliminado.