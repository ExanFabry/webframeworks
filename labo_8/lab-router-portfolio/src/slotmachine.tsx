import cherryImg from '/slot_cherry.png';
import lemonImg from '/slot_lemon.png';
import melonImg from '/slot_melon.png';
import pruneImg from '/slot_prune.png';
import sevenImg from '/slot_seven.png';
export const Slotmachine = () => {
    //random numbers
    let slot1 = Math.floor(Math.random() * 5);
    let slot2 = Math.floor(Math.random() * 5);
    let slot3 = Math.floor(Math.random() * 5);
  
    //win or lose message
    let message;
    if(slot1 === slot2 && slot2 === slot3){
        message = "Je hebt gewonnen";
    }
    else{
        message = "Je hebt verloren";
    }

    //setting the images
    let slot1Img = chooseImg(slot1);
    let slot2Img = chooseImg(slot2);
    let slot3Img = chooseImg(slot3);
  
    return (
        <>
            <div>
                <img src={cherryImg} className="logo" alt="Cherry" width={50}/>
                <img src={lemonImg} className="logo" alt="Lemon" width={50} />
                <img src={melonImg} className="logo" alt="Melon" width={50} />
                <img src={pruneImg} className="logo" alt="Prune" width={50} />
                <img src={sevenImg} className="logo" alt="Seven" width={50} />
            </div>
            <p>{ message }</p>
            <div>
                <img src={slot1Img} className="logo" alt="Slot 1" width={50} />
                <img src={slot2Img} className="logo" alt="Slot 2" width={50} />
                <img src={slot3Img} className="logo" alt="Slot 3" width={50} />
            </div>
        </>
  )
  function chooseImg(slot : number){
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
    else if(slot === 4){
        return sevenImg;
    }
  }
}