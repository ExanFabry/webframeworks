import cherryImg from '/slot_cherry.png';
import lemonImg from '/slot_lemon.png';
import melonImg from '/slot_melon.png';
import pruneImg from '/slot_prune.png';
import sevenImg from '/slot_seven.png';
import './App.css';

function App() {
  //random numbers
  let slots : number[] = [];
  for(let i : number = 0; i<3; i++){
    slots.push(Math.floor(Math.random() * 5));
  }
  
  //win or lose message
  let message;
  let numberOfSameSlots : number[] = slots.filter(element => element === slots[0]);
  if(numberOfSameSlots.length === slots.length){
    message = "Je hebt gewonnen";
  }
  else{
    message = "Je hebt verloren"
  }

  //setting the images
  let slotImg = [];
  for(let i = 0; i<slots.length; i++){
    if(chooseImg(slots[i]) !== undefined){
      slotImg.push(chooseImg(slots[i]));
    }
  }
  
  return (
    <>
      <div>
        <img src={cherryImg} className="logo" alt="Cherry" />
        <img src={lemonImg} className="logo" alt="Lemon" />
        <img src={melonImg} className="logo" alt="Melon" />
        <img src={pruneImg} className="logo" alt="Prune" />
        <img src={sevenImg} className="logo" alt="Seven" />
      </div>
      <p>{ message }</p>
      <div>
        {slotImg.map((img: string) => <img src={img} className="logo" alt="" />)}
      </div>
    </>
  )
  function chooseImg(slot : number): string{
    if(slot === 0){
      return cherryImg;
    }
    else if(slot === 1){
      return lemonImg;
    }
    else if(slot === 2){
      return melonImg;
    } 
    else if(slot === 3){
      return pruneImg;
    }
    else{
      return sevenImg;
    }
  }
}

export default App