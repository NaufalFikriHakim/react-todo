export default function EmptyCard({shifted}){
    return(
        <div className={`empty card ${shifted? 'shifted' : ''}`}>
            <p>Nothing to-do yet.</p>
        </div>
    )
}