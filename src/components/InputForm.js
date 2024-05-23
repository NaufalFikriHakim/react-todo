export default function InputForm() {

    const autoGrow = (event) => {
        const element = event.target;
        element.style.height = "0px";
        element.style.height = (element.scrollHeight) + "px";
    };

    return(
        <div>
            <textarea onInput={autoGrow} wrap="hard" placeholder="Add new to-do title..." ></textarea>
        </div>
    )
}
