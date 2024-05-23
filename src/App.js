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
  const [inputValue, setInputValue] = useState("");
  const[data, setData] = useState([]);

  const addData = () => {
    setData([...data, {text: inputValue, clicked: false}]);
    setNewClicked(false);
    setInputValue("");
  }

  const clearData = () => {
    setData([]);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <header>
        <Title />
        <div className="buttongroup">
          {!newClicked && 
            <NewButton clicked={()=>{setNewClicked(true)}}/>}
          <ClearButton clicked={()=>{clearData()}}/>
        </div>
      </header>
      <div className="body">
      
      {newClicked && (
          <div className="inputsection">
            <InputForm handleChange={handleInputChange} value={inputValue}/>
            <CancelButton clicked={() => {setNewClicked(false); setInputValue("")}}/>
            <CreateButton clicked={() => {addData()}}/>
          </div>
        )}

        {data.length == 0 ? 
        <EmptyCard></EmptyCard> : 
        data.map((item, key) => (<Card text={item.text} clicked={item.clicked} key={key}></Card>))
        }
        
      </div>
    </div>
  );
}

export default App;
