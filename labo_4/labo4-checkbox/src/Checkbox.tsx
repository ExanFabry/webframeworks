import { useState } from "react";
export const Checkbox = ({}) => {
    const [inputValue, setInputValue] = useState(true);
    return(
        <div>
            <input type="checkbox" name="show" id="show" onChange={(event) => setInputValue(event.target.checked)} /> 
            <label htmlFor="show">Show/Hide</label>
            {inputValue ? <img src="https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1000&h=667&crop=1" alt="" /> : <img src=""></img>}
        </div>
    )
}