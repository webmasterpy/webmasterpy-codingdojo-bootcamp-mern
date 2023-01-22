import './App.css';
import PersonCard from './PersonCard';

function App() {
  return (
    <div>
      
        <PersonCard nombre="Jane" apellido="Doe" year={45} color="Black"/>
        <PersonCard nombre="John" apellido="Smith" year={88} color="Brown"/>
        <PersonCard nombre="Millarn" apellido="Fillmore" year={50} color="Brown"/>
        <PersonCard nombre="MAria" apellido="Smith" year={62} color="Brown"/>
      
    </div>
  );
}

export default App;
