import { useEffect, useState } from "react";

export const Oefening2 = ({}) => {
    const [darkness, setDarkness] = useState(100);
    const [miliSeconds, setMiliSeconds] = useState(1000);

    useEffect(() => {
        if (miliSeconds <= 0 || !isFinite(miliSeconds)) return;
        const cb = setInterval(() => {
            if(darkness === 0){
                setDarkness(prev => prev = 100);
            }
            else{
                setDarkness(prev => prev - 10);
            }
        }, miliSeconds);
        return () => {
            clearInterval(cb);
        }
    }, [miliSeconds]);
    return(
        <>
            <div style={{width: 200, height: 200, background: `hsl(0 0% ${darkness}%)`}}>
                <input type="number" min={1} step={1} name="" id="" onChange={(event) => console.log(event)
                    /*Number(event.target.value) > 0 && !isNaN(Number(event.target.value)) && isFinite(Number(event.target.value)) ?
                        setMiliSeconds(1000 / Number(event.target.value)) :
                        setMiliSeconds(1000)*/
                }/>
            </div>
        </>
    )
}