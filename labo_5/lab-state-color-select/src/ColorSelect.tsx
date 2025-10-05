import { useState } from "react";
export const ColorSelect = ({}) => {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [show, setShow] = useState(false);

    const addClicked : React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setSelectedColors(Array.from(event.target.selectedOptions, option => option.value));
    }
    function showColor(){
        return(
            <>
                {selectedColors.map((color: string) => {
                    return <div style={{minWidth: 100, minHeight: 100, backgroundColor: color}}></div>
                })}
            </>
        )
    }

    return(
        <>
            <select multiple onChange={addClicked}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="purple">Purple</option>
                <option value="white">White</option>
            </select>
            <button onClick={() => setShow(true)}>Show colors</button>
            {show && showColor()}
        </>
    )
}