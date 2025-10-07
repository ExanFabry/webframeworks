import cherryImg from '/slot_cherry.png';
import lemonImg from '/slot_lemon.png';
import melonImg from '/slot_melon.png';
import pruneImg from '/slot_prune.png';
import sevenImg from '/slot_seven.png';
export const Slot = ({slots}: {slots: number}) => {
  //setting the images
  let slotImg;
  if(chooseImg(slots) !== undefined){
    // slotImg = chooseImg(slots);
    slotImg = <img src={chooseImg(slots)} className="logo" alt="" />
  }
  return(slotImg);
}
  
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