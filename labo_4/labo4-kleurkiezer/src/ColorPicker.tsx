import { useState } from "react";
export const ColorPicker = ({colorChoice}: {colorChoice: string | undefined}) => {
    let [color, setColor] = useState<string | undefined>("#000000");
    
    return(
        <>
            <select name="" id="" onChange={(event) => setColor(event.target.value)}>
                <option value="#000000">#000000</option>
                <option value="#FF0000">#FF0000</option>
                <option value="#00FF00">#00FF00</option>
                <option value="#0000FF">#0000FF</option>
            </select>
            <div style={{minWidth: "50px", minHeight: "50px", backgroundColor: color}}></div>
        </>
    );
}