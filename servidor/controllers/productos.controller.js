const Productos = require("../models/productos.model")
// ...recuperar un array de todos los documentos de la colección User
module.exports.obtenerTodos = (request, response) => {
    Productos.find()
        .then(respuesta => {
            response.json(respuesta);
        })
        .catch(err => response.json(err));
}
module.exports.obtenerUno = (request, response) => {
    // ...recuperar 1 documento (el primer registro encontrado) que coincida con los criterios del objeto de consulta
    Productos.findOne({ _id: request.params.id })
        .then(respuesta => {
            response.json(respuesta);
        })
        .catch(err => response.json(err));
}
module.exports.actualizar = (request, response) => {
    // ...actualizar 1 documento que coincida con los criterios del objeto de consulta
    Productos.updateOne({ _id: request.params.id }, request.body, { new: true })
        .then(respuesta => {
            response.json(respuesta);
        })
        .catch(err => response.json(err));
}
module.exports.eliminar = (request, response) => {
    // ...eliminar 1 documento que coincida con los criterios del objeto de consulta
    Productos.remove({_id: request.params.id })
        .then(respuesta => {
            response.json(respuesta);
        })
        .catch(err => response.json(err));
}
module.exports.crear = (request, response) => {
    Productos.create(request.body)
        .then(respuesta => {
            response.json(respuesta);
        })
        .catch(err => response.json(err));
}


