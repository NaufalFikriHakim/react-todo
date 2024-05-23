export default function ClearButton({clicked}) {
  return (
    <div onClick={clicked} className="clearbutton hoverable">
      <p>Clear</p>
    </div>
  );
}
