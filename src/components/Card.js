import unchecked from "../CheckCircle.svg";
import minus from "../MinusCircle.svg";
import checked from "../CheckCircleOke.svg";

export default function Card({ text, clicked, onPressDone, onPressDelete}) {
    

  return (

    <div>
      {!clicked ? (
        <div className="todo card">
            <img src={unchecked} className="check hoverable" alt="unchecked" onClick={onPressDone}/>
            <p>{text}</p>
            <img src={minus} className="minus hoverable" alt="remove" onClick={onPressDelete}></img>
        </div>

        
      
      ) : (
        <div className="todo card finished">
        <img src={checked} className="check hoverable" alt="checked" />
            <p>{text}</p>
            <img src={minus} className="minus hoverable" alt="remove"onClick={onPressDelete}></img>
        </div>
      )}

      
    </div>
  );
}
