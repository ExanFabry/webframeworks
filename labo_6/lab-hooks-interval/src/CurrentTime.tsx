import { useState, useEffect } from 'react';

export const CurrentTime = ({}) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);
    }, []);
    
    return(
        <>
            <p>{String(currentTime)}</p>
        </>
    )
}