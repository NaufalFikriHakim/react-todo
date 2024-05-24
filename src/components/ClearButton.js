const divStyle = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#BE123C',
  backgroundColor: '#FAFAF9',
  width: '68px',
  height: '36px',
  textAlign: 'center'
};

const pStyle = {
  margin: "auto",
  padding: "8px 16px",
}

export default function ClearButton({clicked}) {
  return (
    <div onClick={clicked} className="hoverable" style={divStyle}>
      <p style={pStyle}>Clear</p>
    </div>
  );
}
