import { useContext } from "react";
import { SettingsContext } from "./App";
import { Square } from "./Square";

export const SquareRow = ({}) => {
    const color = useContext(SettingsContext);
    
    return (
        <div style={{display: "flex"}}>
            <Square color={color.color}/>
            <Square color={color.color}/>
            <Square color={color.color}/>
        </div>
    )
}