import { useState } from 'react'
import { useInterval } from 'usehooks-ts'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState<number|null>(1000);
  const [newValue, setNewValue] = useState<number|null>(1000);
  useInterval(() => {
    addToCount(count + 1);
  }, value)

  return (
    <>
      <p>{count}</p>
      <input type="text" onChange={(event) => setNewValue(Number(event.target.value))} />
      <button onClick={pause}>Pause</button>
      <button onClick={changeValue}>Resume</button>
    </>
  )
  function addToCount(newNumber: number){
    setCount(newNumber);
  }
  function pause(){
    setValue(null);
  }
  function changeValue(){
    setValue(newValue);
  }
}

export default App
