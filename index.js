
const express = require('express');
const bodyParser= require('body-parser');
const port =3002;
const BASE_API_PATH ="/api/v1";
const DataStore= require('nedb');
const DB_FILE_NAME = __dirname + "/calificaciones.json"

const calificacionesUrl="http://localhost:3002/api/v1/calificaciones";

/* const calificaciones = [
    {
        idMateria: "Conocimiento del Medio",
        idProfesor: "Mengano",
        idEstudiante: "Rocío",
        calificacion: "Sobresaliente"
    }
]
*/

console.log("Starting API Server");

const app = express(); //inicializacion de express
app.use(bodyParser.json()); //parseo a JSON

const db = new DataStore({ //creacion de nuestra base de datos
    filename: DB_FILE_NAME,
    autoload:true
});

app.get("/",(req,res)=>{
    res.send("<html><body><h1>My server</h1></body></html>");

});


//GET CALIFICACIONES
app.get(BASE_API_PATH + "/calificaciones", (req,res)=>{
    console.log(Date() + " - GET /calificaciones");
    
    db.find({},(err,calificaciones)=>{
        if(err){
            console.log(Date() + "-"+err);
            res.sendStatus(500)
        }else{
           //  res.send(calificaciones.map((calificaciones)=>{ 
           //      delete calificaciones._id;
           //      console.log(calificaciones);
           //      return calificaciones;  
           // }));

           res.send(calificaciones);
        }
    });

});

//POST CALIFICACIONES

app.post(BASE_API_PATH + "/calificaciones", (req,res)=>{
    console.log(Date() + " POST - /calificaciones");
    
    let calificacion = req.body;
    db.insert(calificacion, (err)=>{
        if(err){
            console.log(Date() + " -" +err);
            res.sendStatus(500);
        }else{
            res.sendStatus(201);
        }
    });
});

//PUT CALIFICACIONES

//DELETE CALIFICACIONES

//LISTAR CALIFICACIONES

app.listen(port);
console.log("Servidor Ready");