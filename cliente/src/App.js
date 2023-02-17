import './App.css';
import Detalle from './componentes/Detalle';
import Formulario from './componentes/Formulario';
import Lista from './componentes/Lista';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import FormularioEditar from './componentes/FormularioEditar';


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Formulario /> <Lista /></>}></Route>
          <Route path='/:id' element={<Detalle />}></Route>
          <Route path='/:id/edit' element={<FormularioEditar />}></Route>
          <Route path='/delete/:id' element={<FormularioEditar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
