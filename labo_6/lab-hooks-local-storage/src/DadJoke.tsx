//Imports
import { useEffect, useState } from "react";

export const DadJoke = ({}) => {
    //Use states
    const [joke, setJoke] = useState<String>("");

    //Functions
    const loadJoke = async() => {
        let result = await fetch("https://icanhazdadjoke.com/", {
                // BELANGRIJK: API vereist de 'Accept' header om JSON terug te geven
                headers: {
                    'Accept': 'application/json'
                }
            });
        let json : Joke = await result.json(); 
        setJoke(json.joke);
    }
    const setFavorite = () => {
        localStorage.setItem("Local storage", String(joke))
    }
    const loadLocalStorage = async() => {
        let joke = localStorage.getItem("favorites");
        if (joke) {
            setJoke(joke);
        }
    }
    useEffect(() => {
        loadJoke();
        loadLocalStorage();
    }, [])
    return(
        <>
            <p>{joke}</p>
            <button onClick={loadJoke}>New Joke</button>
            <button onClick={setFavorite}>Favorite Joke</button>
        </>
    )
}
interface Joke{
    id: string,
    joke: string,
    status: number
}