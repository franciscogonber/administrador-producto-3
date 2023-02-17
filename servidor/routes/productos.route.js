const Controlador = require ("../controllers/productos.controller");
module.exports = app => {
    app.get("/api/productos", Controlador.obtenerTodos);
    app.get("/api/productos/:id", Controlador.obtenerUno);
    app.post("/api/productos/new", Controlador.crear);
    app.put("/api/productos/:id/edit", Controlador.actualizar);
    app.delete("/api/productos/delete/:id", Controlador.eliminar);
}