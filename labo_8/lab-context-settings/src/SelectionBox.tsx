import { useContext } from "react";
import { SettingsContext } from "./App";

export const SelectionBox = ({}) => {
    const { color, setColor } = useContext(SettingsContext)
    return(
        <>
            <select value={color} onChange={(event) => setColor((event.target as HTMLSelectElement).value)}>
                <option value='red'>Red</option>
                <option value='green'>Green</option>
                <option value='blue'>Blue</option>
            </select>
        </>
    )
}