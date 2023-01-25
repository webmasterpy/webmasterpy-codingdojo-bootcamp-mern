import React, { useState } from "react";
import './App.css';
import Formulario from "./Components/Formulario";
import Tareas from "./Components/Tareas";
import { v4 } from 'uuid';

function App() {
  const [tareas, setTareas] = useState([]);
  console.log("Actividades creadas: ", tareas);

  return (
    <div className="App">
      <Formulario tareas={tareas} setTareas={setTareas} />
      <Tareas tareas={tareas} setTareas={setTareas} key={v4()}/>
    </div>
  )
}

export default App;
