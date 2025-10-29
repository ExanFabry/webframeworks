import { useEffect, useState } from "react";

export const RandomValue = ({min, max}: {min: number, max: number}) => {
    const [randomNumber, setRandomNumber] = useState<Number>(Math.floor(Math.random() * (max - min) + min));
    useEffect(() => {
        let handle = setInterval(() => {
            setRandomNumber(Math.floor(Math.random() * (max - min) + min));
        },1000);
    
        return () => {
            clearInterval(handle);
        }
    });
    return(
        <>
            <p>Nummer tussen {min} en {max}: {String(randomNumber)}</p>
        </>
    )
}