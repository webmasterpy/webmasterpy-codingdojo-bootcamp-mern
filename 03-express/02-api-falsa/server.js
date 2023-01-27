//Express
const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, ()=>{
    console.log("Servidor corriendo 2.0.. ");
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//FAKER API
const { faker } = require('@faker-js/faker');

class Usuarios {
    constructor(){
        this._id = faker.datatype.uuid();
        this.nombre = faker.name.firstName();
        this.apellido =faker.name.lastName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.telefono = faker.phone.number();
    }
}

console.log(new Usuarios);

class Empresas {
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

console.log(new Empresas);

//Devuelve nuevo Usuario
app.get("/api/users/new", (req, res) => {
    let usuario = new Usuarios();
    res.json({ results: usuario });
});

// Devuelve nueva empresa
app.get("/api/companies/new", (req, res) => {
    let empresa = new Empresas();
    res.json({ results: empresa });
});

// DEvuelve usuario y empresa 
app.get("/api/user/companies", (req, res) => {
    let empresa = new Empresas();
    let usuario = new Usuarios();
    res.json({ 
        empresa: empresa, 
        usuario: usuario 
    });
});
