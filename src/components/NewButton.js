export default function NewButton({ clicked }) {

  return (
    <div onClick={clicked} className="newbutton hoverable">
      <p>Add New</p>
    </div>
  );
}
