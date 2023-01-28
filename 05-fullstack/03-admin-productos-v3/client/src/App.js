import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FormularioProducto from './Components/FormularioProducto';
import ListaProductos from './Components/ListaProductos';
import DetalleProducto from './Components/DetalleProducto';
import ActualizarProducto from './Views/ActualizarProducto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormularioProducto logo={logo}/>}/>
          <Route path="/productos" render={<ListaProductos logo={logo}/>} />
          <Route path="/producto/:id" element={<DetalleProducto/>} />
          <Route path="/producto/editar/:id" element={<ActualizarProducto logo={logo}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
