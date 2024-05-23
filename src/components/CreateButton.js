export default function CreateButton({clicked}){
    
    return(
        <div onClick={clicked} className="create">
            <p>Create</p>
        </div>
    )
}