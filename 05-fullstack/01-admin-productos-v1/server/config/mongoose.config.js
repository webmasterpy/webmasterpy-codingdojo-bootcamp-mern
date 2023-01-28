const mongoose = require("mongoose");

const driverConnect = "mongodb://localhost";
const dbName = "admin_productos";

mongoose.set("strictQuery", false);
mongoose.connect(`${driverConnect}/${dbName}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(`Se establecion la coneccion con la base de datos ${dbName}`))
	.catch(err => console.log('Existe un error conectando a la base MongoDb', err));