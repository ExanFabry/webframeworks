import { useState } from "react"
export const InputFields = ({}) => {
    const [inputValue, setInputValue] = useState("");
    return(
        Array.from({length:5}, (_,i) => <textarea name="" id={String(i)} value={inputValue} onChange={(event) => setInputValue(event?.target.value)}></textarea>)
    )
}