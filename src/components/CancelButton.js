export default function CancelButton({clicked}){
    const handleClick = () => {
        clicked()
    }
    return(
        <div onClick={handleClick} className="cancel hoverable">
            <p>Cancel</p>

        </div>
    )
}