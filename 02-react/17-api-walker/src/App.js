import { useState } from 'react';
import './App.css';
import Buscador from './Components/Buscador';
import { BrowserRouter } from 'react-router-dom';
import Resultado from './Components/Resultado';


function App() {

  const [buscador, setBuscador] = useState(
    {
      categoria: "people",
      id: ""
    }
  );

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Buscador buscador={buscador} setBuscador={setBuscador}/>
        <Resultado path="/:categoria/:id" buscador={buscador}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
