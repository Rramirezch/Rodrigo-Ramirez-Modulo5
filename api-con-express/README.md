se crearon los tres endpoints solicitados, 
1. para iniciar el api, nos ubicamos en la carpeta 'api-con-express'
2. abrimos la terminal, y damos el comando 'npm run start'
luego abrimos postman, y ejecutamos los comandos:
3. GET localhost:3002/students: aqui nos entrega el listado completo de los estudiantes
4. GET localhost:3002/students/:1  aqui nos entrega los datos del estudiante con id=1
5. DELETE localhost:3002:students/:2 aqui nos borra del listado al estudiante con id=2, nos entrega el listado de los estudiantes que quedan en el archivo, y actualiza el archivo sin el estudiante eliminado.
6. se creó el endpoin del post y del put
7. el POST funciona basicamente igual que el get, en su configuracion, pero es para agregar un estudiante con todos sus atributos al archivo de estudiantes, se debe tener en cuenta que la informacion se pasa a travez del body del postman en la subpestaña raw, y en formato json. seleccionando en el postman el metodo POST, seguido de 'localhost:3002/students: 
8. el PUT es para cambiar un parametro o atributo de un estudiante ya registrado, igualmente seleccionamos PUT 'localhost3002/estudents/:id id = al id del estudiante al cual vamos a modificar. igualmente seleccionamos en postaman body, y la subpestaña raw, y aqí en formato json registramos los parametros del estudiante al que le vamos a realizar los cambios.
9. igualmente se realizo validaciones de que los parametros sean de formato json con las caracteristicas solicitadas.