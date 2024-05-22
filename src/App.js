import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import NewButton from "./components/NewButton";
import ClearButton from "./components/ClearButton";

function App() {
  return (
    <div className="App">
      <header>
        <Title />
        <div className="buttongroup">
          <NewButton />
          <ClearButton />
        </div>
      </header>
    </div>
  );
}

export default App;
