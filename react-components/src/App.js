import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import StatefulGreeting from "./components/StatefulGreeting";
import HooksCounter from "./components/HooksCounter";

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting = "nice to meet you"/>
      
    </div>
  );
}

export default App;
