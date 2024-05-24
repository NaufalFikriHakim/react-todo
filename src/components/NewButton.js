const divStyle = {
  backgroundColor: '#075985',
  borderRadius: '8px',
  width: '94px',
  height: '36px',
  transition: 'all 0.3s'
};

const pStyle = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#F0F9FF',
  padding: '8px 16px',
  margin: 'auto'
};

export default function NewButton({ clicked }) {

  return (
    <div onClick={clicked} className="hoverable" style={divStyle}>
      <p style={pStyle}>Add New</p>
    </div>
  );
}
