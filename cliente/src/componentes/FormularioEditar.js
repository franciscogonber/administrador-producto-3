import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const FormularioEditar = () => {
    const {id}= useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    useEffect(()=>{
        axios.get("http://localhost:8000/api/productos/"+id) // conectar fron con back ---los nombres de los parametros deben estar iguales a los nombre  en el modelo
            .then(respuesta => {
                setTitle(respuesta.data.title);
                setPrice(respuesta.data.price);
                setDescription(respuesta.data.description);
                console.log(respuesta);
            })
            .catch(error => {
                console.log(error);
            })
    },[])// cuando esta vacia [] se ejecuta solo una vez
        const navigate = useNavigate();
        const manejarSubmit= (evento)=>{
            evento.preventDefault();
            axios.put("http://localhost:8000/api/productos/" + id+"/edit", {
                title,
                price,
                description
                
            })
                .then(res => navigate("/"+id));
        }
  return (
      <div className='container'>
        <h1>Actualizar Productos</h1>
            <form onSubmit={manejarSubmit}>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input value={title} onChange={(evento) => setTitle(evento.target.value)} type="text" className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Price</label>
                    <input value={price} onChange={(evento) => setPrice(evento.target.value)} type="number" className="form-control" id="price"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Description</label>
                    <input value={description} onChange={(evento) => setDescription(evento.target.value)} type="text" className="form-control" id="description"/>
                </div>
                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
  
)
}

export default FormularioEditar
