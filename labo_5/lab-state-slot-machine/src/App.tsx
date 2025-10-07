import cherryImg from '/slot_cherry.png';
import lemonImg from '/slot_lemon.png';
import melonImg from '/slot_melon.png';
import pruneImg from '/slot_prune.png';
import sevenImg from '/slot_seven.png';
import './App.css';
import { Slotmachine } from './slotMachine';

function App() {  
  return (
    <>
      <div>
        <img src={cherryImg} className="logo" alt="Cherry" />
        <img src={lemonImg} className="logo" alt="Lemon" />
        <img src={melonImg} className="logo" alt="Melon" />
        <img src={pruneImg} className="logo" alt="Prune" />
        <img src={sevenImg} className="logo" alt="Seven" />
      </div>
      <Slotmachine slots={3}/>
    </>
  )
}

export default App