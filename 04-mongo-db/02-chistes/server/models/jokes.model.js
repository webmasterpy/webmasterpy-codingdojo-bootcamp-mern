const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
	{
		setup: {
			type: String,
			required: [true, "Setup es requerido"],
		},
		punchline: {
			type: String,
			required: [true, "Punchline es requerido"],
		},
	},
	{
		timestamps: true
	}
);

const Jokes = mongoose.model("broma", JokeSchema);

module.exports = Jokes;