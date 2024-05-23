export default function ClearButton({clicked}) {
  return (
    <div onClick={clicked} className="clearbutton">
      <p>Clear</p>
    </div>
  );
}
