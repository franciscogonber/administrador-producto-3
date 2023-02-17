const { default: mongoose } = require("mongoose");

// Crear un esquema para usuarios
const ProductosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Campo requerido"]
    },
    price: {
        type: Number,
        required: [true, "Campo requerido"]
    },
    description: {
        type: String,
        required: [true, "Campo requerido"]
    }
}, { timestamps: true })
// crear una función constructora para nuestro modelo y almacenarla en la variable 'User'
const Productos = mongoose.model('Productos', ProductosSchema);
module.exports=Productos;

