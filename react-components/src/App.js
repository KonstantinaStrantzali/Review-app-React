import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import StatefulGreeting from "./components/StatefulGreeting";
import HooksCounter from "./components/HooksCounter";
import EventClass from './components/EventClass';
import EventFunctional from './components/EventFunctional';

function App() {
  return (
    <div className="App">
    <EventClass></EventClass>
    <EventFunctional></EventFunctional>
     
    </div>
  );
}

export default App;
