export default function CancelButton({clicked}){

    return(
        <div onClick={clicked} className="cancel hoverable">
            <p>Cancel</p>
        </div>
    )
}