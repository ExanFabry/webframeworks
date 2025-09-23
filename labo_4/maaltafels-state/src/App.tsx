import './App.css';
import { MultiplicationTable } from './MultiplicationTable';
import { useState } from 'react';

function App() {
  let [inputValue, setInputValue] = useState(2);
  if(inputValue < 2){
    inputValue = 2;
  }
  else if(inputValue > 10){
    inputValue = 10;
  }
  return (
    <>
      <input type="number" onChange={(event) => setInputValue(Number(event?.target.value))} />
      <MultiplicationTable max={inputValue}/>
    </>
  )
}

export default App
