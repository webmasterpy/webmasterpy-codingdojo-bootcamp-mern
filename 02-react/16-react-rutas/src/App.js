import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Recepcion from './Components/Recepcion';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/:texto" element={<Recepcion/>} />
          <Route path="/:texto/:color/:fondo" element={<Recepcion/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
