import express from 'express';
import dotenv from 'dotenv';
import { readFileSync } from 'fs'
import { writeFileSync } from 'fs'
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
    console.log(id)
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
app.delete('/students/:id', (req, res) => {
    const idA = (req.url.split(':'));
    const id = parseInt(idA.splice(1));
    const borrado = students.filter((student => student.id != id))
    fs.writeFileSync('students.json', JSON.stringify(borrado))
    console.log(id)
    if(borrado.length != students.length){
        res.send({
            status: 200,
            message: 'query executed successfully',
            data: borrado
        })
    }
        res.send({
            status: 400,
            message: 'student not found',
        })
});

app.listen(port, () => {
    console.log(`servidor escuchando en el puerto ${port}`)
})
