
const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, ()=>{
    console.log("Servidor corriendo 2.0.. ");
});

app.use(express.json());
app.use(express.urlencoded({extended:true})); 