// CONFIGURACION
const express = require('express');
const app = express();
const PORT = 8000;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// BASE DATOS
require('./server/config/mongoose.config');

// ENRUTAMIENTO
const RutasJokes = require('./server/routes/jokes.route');
RutasJokes(app);

// LEVANTAR SERVICIO MONGO EN EL PUERTO ASIGNADO
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});