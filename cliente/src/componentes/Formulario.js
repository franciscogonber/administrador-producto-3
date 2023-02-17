import React, { useState } from 'react'
import axios from 'axios'

const Formulario = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const manejarSubmit = (evento) => {
        evento.preventDefault();
        axios.post("http://localhost:8000/api/productos/new",{title, price, description}) // conectar fron con back ---los nombres de los parametros deben estar iguales a los nombre  en el modelo
            .then(respuesta => {
                console.log(respuesta);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='container'>
            <form onSubmit={manejarSubmit}>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input onChange={(evento) => setTitle(evento.target.value)} type="text" className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Price</label>
                    <input onChange={(evento) => setPrice(evento.target.value)} type="number" className="form-control" id="price"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Description</label>
                    <input onChange={(evento) => setDescription(evento.target.value)} type="text" className="form-control" id="description"/>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    )
}

export default Formulario
