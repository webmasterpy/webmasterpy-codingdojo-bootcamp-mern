const Productos = require("../models/productos.model");

module.exports.todosProductos = (req, res) => {
    Productos.find()
        .then(todasLosProductos => res.json({ productos: todasLosProductos }))
        .catch(err => res.json({ message: "Error obteniendo todas las productos", error: err }));
};

module.exports.unProducto = (req, res) =>{
    Productos.findOne({_id: req.params.id})
        .then(elProducto => res.json({ productos: elProducto }))
        .catch(err => res.json({ message: "Error obteniendo todos los productos", error: err }));
}

module.exports.crearProducto = (req, res) => {
    Productos.create(req.body)
        .then(nuevoProducto => res.json({ productos: nuevoProducto }))
        .catch(err => res.json({ message: "Error al crear producto", error: err }));
};

module.exports.actualizarProducto = (req, res) => {
    Productos.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then(productoActualizada => res.json({ productos: productoActualizada }))
        .catch(err => res.json({ message: "Error al actualizar Producto", error: err}));
}

module.exports.borrarProducto = (req, res) => {
    Productos.deleteOne({ _id: req.params.id })
        .then(productoBorrado => res.json({ productos: productoBorrado}))
        .catch(err => res.json({ message: "Error al intentar borrar Producto", error: err }));
}

// MODULO RANDOM
module.exports.buscarProductoRandom = (req, res) => {
    Productos.aggregate([{ $sample: { size: 1 } }])
        .then(productoRandom => res.json({ productos: productoRandom }))
        .catch((err) => res.json({ message: "Error en buscar producto random ", error: err }));
}