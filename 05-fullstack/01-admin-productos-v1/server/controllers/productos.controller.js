const Productos = require("../models/productos.model");

module.exports.crearProducto = (req, res) => {
    Productos.create(req.body)
        .then(nuevoProducto => res.json({ productos: nuevoProducto }))
        .catch(err => res.json({ message: "Error al crear producto", error: err }));
};
