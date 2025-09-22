import type { JSX } from "react";
import { Slot } from "./Slot";
export let slotNumbers : number[];
export const Slotmachine = ({slots}: {slots: number}) => {
  //random numbers
  slotNumbers = [];
  for(let i : number = 0; i<slots; i++){
    slotNumbers.push(Math.floor(Math.random() * 5));
  }
  
  //win or lose message
  let message;
  let numberOfSameSlots : number[] = slotNumbers.filter(element => element === slotNumbers[0]);
  if(numberOfSameSlots.length === slotNumbers.length){
    message = "Je hebt gewonnen";
  }
  else{
    message = "Je hebt verloren"
  }

  //setting the images
  let slotImg: JSX.Element[] = [];
  for(let i = 0; i<slotNumbers.length; i++){
    slotImg.push(<Slot slots={slotNumbers[i]}/>);
  }
  return(
    <>
        <p>{ message }</p>
        <div>
          {slotImg.map((img: JSX.Element) => img)}
        </div>
    </>
  )
}