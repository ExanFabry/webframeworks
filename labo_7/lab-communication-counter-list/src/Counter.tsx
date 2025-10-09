export const Counter = ({value, onIncrease, onDecrease, index}: {value: number, onIncrease: (index: number) => void, onDecrease: (index: number) => void, index: number}) => {
    let color = "black";
    if (value > 0) {
        color = "green";
    } 
    else if (value < 0) {
        color = "red";
    }
    return(
        <>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <button onClick={() => onDecrease(index)}>Omlaag</button>
                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", color: color }}>Count: {value}</div>
                <button onClick={() => onIncrease(index)}>Omhoog</button>
            </div>
        </>
    )
}