
const express = require('express');
const bodyParser= require('body-parser');
const port =3002;
const BASE_API_PATH ="/api/v1";

const calificacionesUrl="http://localhost:3002/api/v1/calificaciones";
const calificaciones = [
    {
        idMateria: "Conocimiento del Medio",
        idProfesor: "Mengano",
        idEstudiante: "Rocío",
        calificacion: "Sobresaliente"
    },
    {
        idMateria: "Lengua",
        idProfesor: "Fulano",
        idEstudiante: "Rocío",
        calificacion: "Sobresaliente"
    },
    {
        idMateria: "Matemáticas",
        idProfesor: "Surmano",
        idEstudiante: "Rocío",
        calificacion: "Sobresaliente"
    },
    {
        idMateria: "Matemáticas",
        idProfesor: "Surmano",
        idEstudiante: "Antonio",
        calificacion: "Notable"
    },
    {
        idMateria: "Matemáticas",
        idProfesor: "Surmano",
        idEstudiante: "Manuel",
        calificacion: "Suspenso"
    }
];



console.log("Starting API Server");

const app = express();
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("<html><body><h1>My server</h1></body></html>");

});


//GET CALIFICACIONES
app.get(BASE_API_PATH + "/calificaciones", (req,res)=>{
    console.log(Date() + " - GET /calificaciones");
    res.send(calificaciones);
})

//POST CALIFICACIONES

app.post(BASE_API_PATH + "/calificaciones", (req,res)=>{
    console.log(Date() + " POST - /calificaciones");
    let calificacion = req.body;
    calificaciones.push(calificacion);
    res.sendStatus(201);
})

//PUT CALIFICACIONES

//DELETE CALIFICACIONES

/*app.delete(BASE_API_PATH + "/calificaciones", function(req, res) {

    if(req.query.codMateria && req.query.idEstudiante) {
      console.log("Borrando calificacion del estudiante: "+ req.query.idEstudiante+" y asignatura: "+req.query.idMateria+". Calificación borrada: " + req.query.calificacion);
      req.body.calificacion="";
      res.status(200).send({});
    } else {
      res.status(400).send("Por favor, especifica que usuarios quieres borrar");
    }
  });
*/

//LISTAR




app.listen(port);
console.log("Servidor Ready");