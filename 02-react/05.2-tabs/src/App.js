import './App.css';
import Tabs from './Components/Tabs';
function App() {
  return (
    <div className="App">
      <Tabs listadoTab = {[
        {label: "Tab 1", content: "Tab 1 content is showing here"},
        {label: "Tab 2", content: "Tab 2 content is showing here"},
        {label: "Tab 3", content: "Tab 3 content is showing here"},
        {label: "Tab 4", content: "Tab 4 content is showing here"},
    ]}/>
    </div>
  );
}

export default App;
