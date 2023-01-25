import React, { useState } from "react";
import './App.css';
import Formulario from './Components/Formulario';
import ListadoCajas from './Components/ListadoCajas';
import { v4 } from 'uuid';

function App() {

  const [cajas, setCajas] = useState([]);
  const [detalles, setDetalles] = useState({
    color: "",
    size: "",
  })

  return (
    <div className="App">
      <Formulario detalles={detalles} setDetalles={setDetalles} cajas={cajas} setCajas={setCajas}/>
      {
        cajas.map(caja => <ListadoCajas color={caja.color} size={caja.size} key={v4()}/>)
      }
    </div>
  );
}

export default App;
