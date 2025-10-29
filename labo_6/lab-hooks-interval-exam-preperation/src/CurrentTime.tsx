import { useEffect, useState } from "react";

export const CurrentTime = ({}) => {
    const [date, setDate] = useState<Date>(new Date());
    const [hours, setHours] = useState<String>(String(date.getHours()).padStart(2, "0"));
    const [minutes, setMinutes] = useState<String>(String(date.getMinutes()).padStart(2, "0"));
    const [seconds, setSeconds] = useState<String>(String(date.getSeconds()).padStart(2, "0"));

    useEffect(() => {
            let handle = setInterval(() => {
                setDate(new Date());
                setHours(String(date.getHours()).padStart(2, "0"));
                setMinutes(String(date.getMinutes()).padStart(2, "0"));
                setSeconds(String(date.getSeconds()).padStart(2, "0"));
            },1000);
    
            return () => {
                clearInterval(handle);
            }
        });
    return(
        <>
            <p>{hours}:{minutes}:{seconds}</p>
        </>
    )
}