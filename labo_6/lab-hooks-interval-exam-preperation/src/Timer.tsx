import { useState, useEffect } from "react";

export const Timer = ({}) => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        let handle = setInterval(() => {
            setNumber(number => number + 1);
        },1000);

        return () => {
            clearInterval(handle);
        }
    });
    return(
        <>
            <p>{number}</p>
        </>
    )
}