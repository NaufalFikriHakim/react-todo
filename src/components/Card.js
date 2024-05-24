import unchecked from "../CheckCircle.svg";
import minus from "../MinusCircle.svg";
import checked from "../CheckCircleOke.svg";

const todo = {
    height: '52px',
    justifyContent: 'space-around',
}

export default function Card({ text, clicked, onPressDone, onPressDelete}) {
    

  return (

    <div>
      {!clicked ? (
        <div className="card" style={todo}>
            <img src={unchecked} className="hoverable" alt="unchecked" onClick={onPressDone}/>
            <p>{text}</p>
            <img src={minus} className="hoverable" alt="remove" onClick={onPressDelete}></img>
        </div>

        
      
      ) : (
        <div className="card finished" style={todo}>
        <img src={checked} className="hoverable" alt="checked" />
            <p>{text}</p>
            <img src={minus} className="hoverable" alt="remove" onClick={onPressDelete}></img>
        </div>
      )}

      
    </div>
  );
}
