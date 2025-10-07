import type { JSX } from "react";
import { Slot } from "./Slot";
import { useState } from "react";

// export let slotNumbers : number[];
export const Slotmachine = ({slots}: {slots: number}) => {
  //Money money money
  const [money, setMoney] = useState<number>(1);
  //random numbers
  const [slotNumbers, setSlotNumbers] = useState<number[]>(createSlots(slots));
  //Win or lose message
  const [message, setMessage] = useState<string>("");
  const [slotImages, setSlotImages] = useState<JSX.Element[]>([]);
  
  function spin(){
    setSlotNumbers(createSlots(slots));
    //win or lose message
    let numberOfSameSlots : number[] = slotNumbers.filter(element => element === slotNumbers[0]);
    let updateMoney: number;
    if(numberOfSameSlots.length === slotNumbers.length){
      setMessage("Je hebt gewonnen");
      // setMoney((prevMoney) => prevMoney + 20);
      updateMoney = money + 20;
    }
    else{
      setMessage("Je hebt verloren");
      //Hier zit fout
      // setMoney((prevMoney) => prevMoney - 1);
      updateMoney = money - 1;
    }
    setMoney(updateMoney);
    //setting the images
    let slotImg: JSX.Element[] = [];
    for(let i = 0; i<slotNumbers.length; i++){
      slotImg.push(<Slot slots={slotNumbers[i]}/>);
    }
    setSlotImages(slotImg);
  }
  return(
    <>
      <p>Saldo: {money}</p>
      <p>{message}</p>
      <div>
        {slotImages.map((img: JSX.Element) => img)}
      </div>
      <button onClick={spin} disabled={money === 0}>Spin</button>
    </>
  )
}

function createSlots(length: number){
  let slotNumbers : number[] = [];
  for(let i : number = 0; i<length; i++){
    slotNumbers.push(Math.floor(Math.random() * 5));
  }
  return slotNumbers;
}