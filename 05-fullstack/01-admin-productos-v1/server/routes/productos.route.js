const ProductosControllers = require("../controllers/productos.controller");

module.exports = app => {
    app.get("/api/productos/", ProductosControllers.todosProductos);
    app.get("/api/productos/:id", ProductosControllers.unProducto);
    app.post("/api/productos/new/", ProductosControllers.crearProducto);
    // app.put("/api/productos/update/:id", ProductosControllers.actualizarProducto);
    // app.delete("/api/productos/delete/:id", ProductosControllers.borrarProducto);
    
}
