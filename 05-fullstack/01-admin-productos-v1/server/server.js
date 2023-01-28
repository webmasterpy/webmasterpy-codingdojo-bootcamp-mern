// SETEO DE VARIABLES
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 8000;
//require('dotenv').config()
//const cookieParser = require('cookie-parser')

// requerir archivo de configuracion
require('./config/mongoose.config');

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//app.use(cookieParser())

// HABILITAMOS EL CORS PARA INTERCANBIO DE RECURSOS
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

// IMPORTAR LAS RUTAS DE NUESTRO SERVIDOR BACK-END
const rutasProductos = require('./routes/productos.route')
rutasProductos(app);

// LEVANTAMOS SERVICIO MONGO AL PUETO ASIGNADO
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

