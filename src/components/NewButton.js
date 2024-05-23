export default function NewButton({ clicked }) {

  return (
    <div onClick={clicked} className="newbutton">
      <p>Add New</p>
    </div>
  );
}
