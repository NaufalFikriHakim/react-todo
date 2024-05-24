const divStyle = {
  width: "80px",
  height: "36px",
  color: "#075985",
  backgroundColor: "#FAFAF9",
  fontFamily: "'inter', 'Times New Roman', Times, serif",
  fontSize: "14px",
  fontWeight: "600",
  textAlign: "center",
};

const pStyle = {
  padding: "8px 16px",
  margin: "auto",
};

export default function CancelButton({ clicked }) {
  return (
    <div onClick={clicked} className="hoverable" style={divStyle}>
      <p style={pStyle}>Cancel</p>
    </div>
  );
}
