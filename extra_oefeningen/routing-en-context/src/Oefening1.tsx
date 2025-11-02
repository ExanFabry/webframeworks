import { useState, useEffect } from "react";
export const Oefening1 = ({}) => {
    const [beers, setBeers] = useState<Beer[]>();
    const [selectedBeer, setSelectedBeer] = useState<number>();

    useEffect(() => {
        const fetchFunction = async() => {
            let result = await fetch("https://raw.githubusercontent.com/slimmii/mock_api/main/beers/beers.json");
            let json: Beer[] = await result.json(); 

            setBeers(json);
            console.log(beers);
        }
        fetchFunction();
    },[]);
    //...value.id = selectedBeer ?
    return(
        <>
            <p>{beers === undefined || selectedBeer === undefined ? "" : beers[selectedBeer - 1].description}</p>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                {beers?.map((value: Beer, index: number, array: Beer[]) => <button onClick={() => setSelectedBeer(value.id)}><img src={value.logo} alt="" style={value.id === selectedBeer ? {width: 100, border: "solid", borderWidth: 5, borderColor: "red"} : {width: 100}}/></button>)} 
            </div>
        </>
    )
}

interface Beer {
    id:                number;
    name:              string;
    alcoholPercentage: number;
    description:       string;
    type:              string;
    logo:              string;
}