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
  const[valid, setValid] = useState(true);

  const addData = () => {
    if (inputValue.length <= 100) {
      setData([...data, {text: inputValue, clicked: false}]);
      setNewClicked(false);
      setInputValue("");
    } else {
      setValid(false)
    }
  }

  const clearData = () => {
    setData([]);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const cancelInput = () => {
    setNewClicked(false); 
    setInputValue("");
    setValid(true);
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
          <div className="inputvalidation">
            <InputForm handleChange={handleInputChange} value={inputValue}/>
            {!valid && <p>Title mush be shorter than or equal to 100 characters.</p>}
            
          </div>
            
            <CancelButton clicked={() => {cancelInput()}}/>
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
