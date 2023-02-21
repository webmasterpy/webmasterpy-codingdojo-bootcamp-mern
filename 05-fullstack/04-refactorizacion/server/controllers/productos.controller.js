// Requerimos el esquema y modelo a utilizar
const Productos = require("../models/productos.model");

// Exportar funcion para crear Productos
module.exports.crearProducto = (req, res) => {
    Productos.create(req.body)
        .then(nuevoProducto => res.json({ productos: nuevoProducto }))
        .catch(err => res.json({ message: "Error al crear producto", error: err }));
};

// Exportar funcion que lista todos los Productos
module.exports.todosProductos = (req, res) => {
    Productos.find({})
        .then(todasLosProductos => res.json({ productos: todasLosProductos }))
        .catch(err => res.json({ message: "Error obteniendo todas las productos", error: err }));
};

// Exportar funcion para ver el detalle de uno de los Productos
module.exports.unProducto = (req, res) =>{
    Productos.findOne({_id: req.params.id})
        .then(elProducto => res.json({ productos: elProducto }))
        .catch(err => res.json({ message: "Error obteniendo todos los productos", error: err }));
}

// Exportar funcion para actualizar el producto
module.exports.actualizarProducto = (req, res) => {
    Productos.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then(productoActualizada => res.json({ productos: productoActualizada }))
        .catch(err => res.json({ message: "Error al actualizar Producto", error: err}));
}

// Exportar funcion para eliminar producto
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