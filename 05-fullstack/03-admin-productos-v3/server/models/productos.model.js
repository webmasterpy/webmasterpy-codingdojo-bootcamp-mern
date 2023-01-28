const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema(
	{
		titulo: {
			type: String,
			required: [true, "Titulo del producto es requerido"],
			minlength: [4, "Titulo requiere almenos 6 caracteres"]
		},
		precio: {
			type: Number,
			required: [true, "El precio es requerido"],
			min: [1, "El precio minimo es 1"],
			max: [1e7, "EL precio maximo es de 10 Millones"]
		},
		descripcion: {
			type: String,
			required: [true, "La descripcion del producto es requerido"],
			minlength: [10, "La descripcion requiere almenos 10 caracteres"]
		},
	},
	{
		timestamps: true
	}
);

const Productos = mongoose.model("productos", ProductoSchema);

module.exports = Productos;