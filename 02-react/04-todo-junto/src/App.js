import './App.css';
import PersonalCard from './PersonalCard';

function App() {
  return (
    <div className="App">
      <PersonalCard nombre="Jane" apellido="Doe" edad={45} color="Black"/>
      <PersonalCard nombre="John" apellido="Smith" edad={88} color="Brown"/>
      <PersonalCard nombre="Millarn" apellido="Fillmore" edad={50} color="Brown"/>
      <PersonalCard nombre="MAria" apellido="Smith" edad={62} color="Brown"/>
    </div>
  );
}

export default App;
