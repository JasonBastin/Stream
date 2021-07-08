import Screen from "./components/Screen/Screen";
import Title from "./components/Title/Title";
import Stats from "./components/Stats/Stats";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Title />
      </div>
      <div className="main">
        <Screen />
      </div>
      <div className="stats">
        <Stats />
      </div>
    </div>
  );
}

export default App;
