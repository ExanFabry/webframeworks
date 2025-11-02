import { useState, useEffect } from "react";
import { LoadingIndicator } from "./LoadingIndicator";

export const Pokedex = ({limit}: {limit: number}) => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [filterPokemon, setFilterPokemon] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchFunction = async() => {
            setLoading(true);
            let result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
            let json : Pokemon = await result.json(); 

            setPokemon(json);
            setLoading(false);
        }
        fetchFunction();
    },[limit]);
    
    if(loading){
        return <LoadingIndicator/>
    }

    return(
        <>
            <input type="text" onChange={(event) => setFilterPokemon(event.target.value)}/>
            <ul>
                {pokemon?.results
                    ?.filter(results => results.name?.startsWith(filterPokemon) ?? false)
                    .map((result: Result) => <li key={result.name ?? result.url}>{result.name ?? result.url}</li>) || []}
            </ul>
        </>
    )
}

export interface Pokemon {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string | undefined;
    url:  string;
}