import { useState } from "react"

export const Counter = ({}) => {
    let [count, setCount] = useState<number>(0);
    let color;
    if(count === 0){
        color = "black";
    }
    else if(count > 0){
        color = "green";
    }
    else{
        color = "red";
    }
    return(
        <>
            <button onClick={() => {setCount(count + 1)}}>Omhoog</button>
            <button onClick={() => {setCount(count - 1)}}>Omlaag</button>
            <p style = {color={color}}>Count: {count}</p>
        </>
    )
}