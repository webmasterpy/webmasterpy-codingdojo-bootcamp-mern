import './App.css';
import React, {useState} from 'react'
import FormWrappers from './Components/FormWrappers';
import Navbar from './Components/Navbar';
import Wrapper from './Components/Wrapper';
import Context from './Components/Context';

function App() {
  
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  return (
    <Context.Provider value={{nombre: nombre, setNombre:setNombre, edad:edad, setEdad:setEdad}}>
      <Wrapper>
        <Navbar/>
        <FormWrappers/>
      </Wrapper>
    </Context.Provider>
  );
}

export default App;
 