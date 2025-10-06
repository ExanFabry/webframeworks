import { useState, useEffect } from 'react';

interface RandomValueProps{
    min: number;
    max: number;
}

export const RandomValue = ({min, max}: RandomValueProps) => {
    const [randomNumber, setRandomNumber] = useState<number>(0);

    useEffect(() => {
        setInterval(() => {
            setRandomNumber(Number(Math.floor(Math.random() * (max - min) + min)))
        }, 1000);
    }, []);
    
    return(
        <>
            <p>{randomNumber}</p>
        </>
    )
}