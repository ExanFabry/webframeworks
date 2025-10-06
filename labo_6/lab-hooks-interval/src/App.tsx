import { Timer } from './Timer';
import { CurrentTime } from './CurrentTime';
import { RandomValue } from './RandomValue';
import './App.css';

function App() {
  return (
    <>
      <Timer/>
      <CurrentTime/>
      <RandomValue min={1} max={100}/> 
      <RandomValue min={100} max={200}/> 
    </>
  )
}

export default App
