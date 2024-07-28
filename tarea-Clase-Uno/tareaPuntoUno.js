let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];


for (let i = 0; i < libros.length; i++) {
    const libroDos = libros[1]
    console.log('segundo Libro:',libroDos.titulo, libroDos.autor)
    break
}
libros.splice(0, 1, 
    { titulo:"El Hobbit",  autor:"J.R.R. Tolkien", paginas:350 }, );
console.log('Libros Actualizado:', libros)
  
console.log('primer Libro Modificado:', libros[0])

let librosNuevo = libros.map((libro) => {
    return{
        titulo: libro.titulo,
        autor: libro.autor,
    }
});
console.log('librosNuevo =', librosNuevo)