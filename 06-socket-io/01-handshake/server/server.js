// requerimiento express
const express = require("express");

// parametros
const app = express();
const port = 8000;

// apertura del puerto con express
const server = app.listen(port, ()=>{
    console.log(`Servidor iniciado en el puerto: ${port}`);
});

// Inicializar socket IO 
const socket = require("socket.io"); //(server);

//conectando a socket io
socket.on("Conexion", socket => {
    console.log(socket.id);

//     // socket.on("event_from_client", data => {
//     //     socket.broadcast.emit("send_data", data);
//     // });

//     // socket.on("disconect", (socket)=>{
//     //     console.log(`EL usuario id ${socket.id} acaba de salir`)
//     // })
});