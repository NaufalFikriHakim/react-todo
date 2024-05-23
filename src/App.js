import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import NewButton from "./components/NewButton";
import ClearButton from "./components/ClearButton";
import Card from "./components/Card";
import EmptyCard from "./components/EmptyCard";

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
      <div className="body">
        <EmptyCard></EmptyCard>
        <Card></Card>
      </div>

        


    </div>
  );
}

export default App;
