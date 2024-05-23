import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import NewButton from "./components/NewButton";
import ClearButton from "./components/ClearButton";
import Card from "./components/Card";
import EmptyCard from "./components/EmptyCard";
import CancelButton from "./components/CancelButton";
import InputForm from "./components/InputForm";
import CreateButton from "./components/CreateButton";
import {useState} from "react";

function App() {
  const [newClicked, setNewClicked] = useState(false);
  const data = [];
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
      
      <div className="inputsection">
      <InputForm></InputForm>
      <CancelButton></CancelButton>
      <CreateButton></CreateButton>
          
      
      </div>
        <EmptyCard></EmptyCard>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
