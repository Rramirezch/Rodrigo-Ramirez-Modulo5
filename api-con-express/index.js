import express from 'express';
import dotenv from 'dotenv';
import { readFileSync } from 'fs'
import fs from 'fs';

dotenv.config()

const app = express();
const port = 3002;

app.use(express.json());

const baseDeStudiantes = process.env.BASE_STUDENTS;
const students = JSON.parse(readFileSync(baseDeStudiantes))


app.get('/students:', (req, res) => {
    res.send({
        stattus: 200,
        message: 'query executed succesfully',
        data: students
    })
});

app.get('/students/:id', (req, res) => {
    const idA = (req.url.split(':'));
    const id = parseInt(idA.splice(1));
    const result = students.find((student) => student.id === id);
    if (result){
        res.send({
            status: 200,
            message: 'query executed successfully',
            data: result
        })
    }    
        res.send({
            status: 404,
            message: 'Student not found'
        })
});

const validarParametros = (req, res, next) => {
    const { id, name, age, major } = req.body
    if (!id || !name || !age || !major ){
        res.status(400).send('format Invalid')
    }if ( id <= 0 || age <= 0) {
        res.status(400).send('El id y el age deben ser números enteros positivos');
    }else{
        next()
    }
}


app.delete('/students/:id', validarParametros, (req, res) => {
    const idA = (req.url.split(':'));
    const id = parseInt(idA.splice(1));
    const borrado = students.filter((student => student.id != id))
    fs.writeFileSync('students.json', JSON.stringify(borrado))
    if(borrado.length != students.length){
        res.send({
            //status: 200,
            message: 'query executed successfully',
            data: borrado
        })
    }
        res.send({
            status: 400,
            message: 'student not found',
        })
})



app.post('/students:', validarParametros, (req, res) => {
    const agregarStudent = students.concat(req.body)
    let studentsId = students.find(student => student.id === req.body.id)

    if ( studentsId === undefined ){
        fs.writeFileSync('students.json', JSON.stringify(agregarStudent))
        res.json({
            //status: 200,
            message: 'student created successfully',
            data: req.body
        })
    }
    
    res.json({
        status: 400,
        message: 'sudent Registred',
    })
});

app.put('/students/:id', validarParametros, (req, res) => {
    const idA = (req.url.split(':'));
    const id = parseInt(idA.splice(1));
    const student = req.body

    const index = students.findIndex((student) => student.id === id)
    students[index] = student
    const studentsModificado = students.splice(student[index])
    fs.writeFileSync('students.json', JSON.stringify(studentsModificado))
    console.log(studentsModificado)
    res.send({
        message: 'producto actualizado',
        student: student
    })
})

app.listen(port, () => {
    console.log(`servidor escuchando en el puerto ${port}`)
})
