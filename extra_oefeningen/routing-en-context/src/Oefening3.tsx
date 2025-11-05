import { useState } from "react";

export const Oefening3 = ({}) => {
    return(
        <>
            <NumberSelector min={10} max={15}/>
        </>
    )
}

const NumberSelector = ({min, max}: {min: number, max: number}) => {
    let numbers: number[] = [];
    // let numbersMultiplication: number[] = [];
    const [numbersMultiplication, setNumbersMultiplication] = useState<number[]>([]);
    for(let i: number = min; i <= max; i++){
        numbers.push(i);
    }
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(event.target.selectedOptions);
        const selectedValues = selectedOptions.map(option => Number(option.value));
        setNumbersMultiplication(selectedValues);
    };
    return(
        <>
            <select name="" id="" multiple onChange={handleChange}>
                {numbers.map((value: number) => <option value={String(value)}>{value}</option>)}
            </select>
            <OperatorSelector numbers={numbersMultiplication}/>
        </>
    )
}

const OperatorSelector = ({numbers}: {numbers: number[]}) => {
    const [mathSign, setMathsign] = useState<string>("+");
    return(
        <>
            <div style={{display: "flex"}}>
                <button onClick={() => setMathsign("+")}>+</button>
                <button onClick={() => setMathsign("-")}>-</button>
                <button onClick={() => setMathsign("*")}>*</button>
                <button onClick={() => setMathsign("/")}>/</button>
            </div>
            <Result numbers={numbers} mathSign={mathSign}/>
        </>
    )
}

const Result = ({numbers, mathSign}: {numbers: number[], mathSign: string}) => {
    let total: number = 0;
    if(numbers.length === 0){
        total = 0;
    }
    else{
        total = numbers[0];
    }
    for(let i = 1; i < numbers.length; i++){
        if(mathSign === "+"){
            total+=numbers[i];
        }
        else if(mathSign === "-"){
            total-=numbers[i];
        }
        else if(mathSign === "*"){
            total*=numbers[i];
        }
        else if(mathSign === "/"){
            total/=numbers[i];
        }
    }
    
    return(
        <>
            <p>
                {numbers.map((number: number, index: number) => index == 0 ? <span>{number}</span> : <span> {mathSign} {number}</span>)}
                {<span> = {total}</span>}
            </p>
        </>
    )
}