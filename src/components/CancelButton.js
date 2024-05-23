export default function CancelButton({clicked}){
    const handleClick = () => {
        clicked()
    }
    return(
        <div onClick={handleClick} className="cancel">
            <p>Cancel</p>

        </div>
    )
}