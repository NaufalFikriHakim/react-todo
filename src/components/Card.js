import unchecked from "../CheckCircle.svg";
import minus from "../MinusCircle.svg";
import checked from "../CheckCircleOke.svg";

export default function Card({ text, clicked, onPress }) {
    
    const handleClick = () => {
        onPress();
    };

  return (

    <div>
      {!clicked ? (
        <div className="todo card">
            <img src={unchecked} className="check" alt="unchecked" onClick={handleClick}/>
            <p>{text}</p>
            <img src={minus} className="minus" alt="remove"></img>
        </div>

        
      
      ) : (
        <div className="todo card finished">
        <img src={checked} className="check" alt="checked" />
            <p>{text}</p>
            <img src={minus} className="minus" alt="remove"></img>
        </div>
      )}

      
    </div>
  );
}
