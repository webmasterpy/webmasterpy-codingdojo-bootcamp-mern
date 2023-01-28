const JokeControllers = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", JokeControllers.todasBromas);
    app.get("/api/jokes/random/", JokeControllers.buscarBromaRandom);
    app.get("/api/jokes/:id", JokeControllers.unaBroma);
    app.post("/api/jokes/new/", JokeControllers.crearBroma);
    app.put("/api/jokes/update/:id", JokeControllers.actualizarBroma);
    app.delete("/api/jokes/delete/:id", JokeControllers.borrarBroma);
    
}
