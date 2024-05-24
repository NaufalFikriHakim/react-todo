const divStyle = {
    width: '76px',
    height: '36px',
    backgroundColor: '#075985',
    color: '#F0F9FF',
    borderRadius: '8px'
};

const pStyle = {
    margin: 'auto',
    padding: '8px 16px',
    fontFamily: "'inter', 'Times New Roman', Times, serif",
    fontSize: '14px',
    fontWeight: '600'
};

export default function CreateButton({clicked}){
    
    return(
        <div onClick={clicked} className="hoverable" style={divStyle}>
            <p style={pStyle}>Create</p>
        </div>
    )
}