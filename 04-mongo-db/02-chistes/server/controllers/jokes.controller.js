const Jokes = require("../models/jokes.model");

module.exports.todasBromas = (req, res) => {
    Jokes.find()
        .then(todasLasBromas => res.json({ jokes: todasLasBromas }))
        .catch(err => res.json({ message: "Error obteniendo todas las bromas", error: err }));
};

module.exports.unaBroma = (req, res) =>{
    Jokes.findOne({_id: req.params.id})
        .then(laBroma => res.json({ jokes: laBroma }))
        .catch(err => res.json({ message: "Error obteniendo todas las bromas", error: err }));
}

module.exports.crearBroma = (req, res) => {
    Jokes.create(req.body)
        .then(nuevaBroma => res.json({ jokes: nuevaBroma }))
        .catch(err => res.json({ message: "Error crear broma", error: err }));
};

module.exports.actualizarBroma = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then(bromaActualizada => res.json({ jokes: bromaActualizada }))
        .catch(err => res.json({ message: "Error al actualizar Broma", error: err}));
}

module.exports.borrarBroma = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(bromaBorrada => res.json({ jokes: bromaBorrada}))
        .catch(error => res.json({ message: "Error al intentar borrar la Broma", error: err }));
}

// MODULO RANDOM
module.exports.buscarBromaRandom = (req, res) => {
    Jokes.aggregate([{ $sample: { size: 1 } }])
        .then(bromaRandom => res.json({ jokes: bromaRandom }))
        .catch((err) => res.json({ message: "Error en buscar broma random ", error: err }));
    }