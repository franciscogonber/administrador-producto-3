import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Lista = () => {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/productos") // conectar fron con back ---los nombres de los parametros deben estar iguales a los nombre  en el modelo
      .then(respuesta => {
        setLista(respuesta.data);
        console.log(respuesta);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])// cuando esta vacia [] se ejecuta solo una vez
  const eliminarProducto = (id) => {
    axios.delete("http://localhost:8000/api/productos/delete/" + id)
      .then(res =>  { removeFromDOM(id);
      })
  }
  const removeFromDOM = (id) =>{
    setLista(lista.filter(item => item._id !== id));
  }
  return (
    <div>
      <h1>Lista de productos</h1>
      {lista && lista.map((item, index) => {
        return <p>
          <a href={'/' + item._id}>{item.title}</a>
          <button onClick={()=>eliminarProducto(item._id)} type="submit" className="btn btn-danger">Delete</button>
        </p>
      })}
    </div>
  )
}

export default Lista
