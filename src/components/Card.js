import check from "../CheckCircle.svg"
import minus from "../MinusCircle.svg"

export default function Card() {
    return(
        <div className="card">
            <img src={check} className="check" alt="unchecked"/>
            <p>Test 123</p>
            <img src={minus} className="minus"></img>
        </div>
    )
}