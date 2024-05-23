export default function CreateButton({clicked}){
    
    return(
        <div onClick={clicked} className="create hoverable">
            <p>Create</p>
        </div>
    )
}