import { useState, useEffect } from 'react';

export const Timer = ({}) => {
    const [secondsPassed, setSecondsPassed] = useState(0);

    useEffect(() => {
        const cb = setInterval(() => {
            setSecondsPassed(passed => passed + 1);
        }, 1000);
        return () => {
            clearInterval(cb);
        }
    }, [secondsPassed]);
    
    return(
        <>
            <p>{secondsPassed}</p>
        </>
    )
}