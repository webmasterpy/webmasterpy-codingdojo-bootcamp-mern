const ProductosControllers = require("../controllers/productos.controller");

module.exports = app => {
    app.post("/api/productos/new/", ProductosControllers.crearProducto);
}
