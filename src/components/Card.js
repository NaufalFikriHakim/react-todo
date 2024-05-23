import check from "../CheckCircle.svg"
import minus from "../MinusCircle.svg"

export default function Card({text, clicked}) {
    return(
        <div className="todo card">
            <img src={check} className="check" alt="unchecked"/>
            <p>{text}</p>
            <img src={minus} className="minus"></img>
        </div>
    )
}