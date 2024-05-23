import {useState} from "react";

export default function InputForm({ handleChange, value }) {
    const autoGrow = (event) => {
        const element = event.target;
        element.style.height = "0px";
        element.style.height = (element.scrollHeight) + "px";
    }; // reference https://stackoverflow.com/questions/17772260/textarea-auto-height

    return(
        <div>
            <textarea onChange={(e) => {handleChange(e)}} value={value} onInput={autoGrow} wrap="hard" placeholder="Add new to-do title..." ></textarea>
        </div>
    )
}
