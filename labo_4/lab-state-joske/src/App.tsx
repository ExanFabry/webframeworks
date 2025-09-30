import { useState, useEffect } from 'react';
import './App.css';

const ColorSquare = () => {
  const [colorValue, setColorValue] = useState("red");
  const [nameValue, setNameValue] = useState("Joske");
  const [clickValue, setClickValue] = useState(0);
  const [emotionValue, setEmotionValue] = useState(":(");
  const [shapeValue, setShapeValue] = useState(true);

  useEffect(() => {
    if(clickValue > 2){
      setClickValue(0);
    }
    if(clickValue === 0){
      setColorValue("blue")
    }
    if(clickValue === 1){
      setColorValue("green")
    }
    if(clickValue === 2){
      setColorValue("red")
    }
  }, [clickValue])
  
  return (
    <>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <p><b>{nameValue}</b></p>
        <div className={shapeValue ? "square" : "circle"} style={{backgroundColor: colorValue, minWidth: "100px", minHeight: "100px", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <button onClick={() => setClickValue(clickValue + 1)}>
            <p>{emotionValue}</p>
          </button>
        </div>
      </div>
    
      <input name="name" id="name" type="text" onChange={(event) => setNameValue(event.target.value)} /><br />
      {<button onClick={() => {setNameValue("Joske")}}>Reset</button>}
      <select onChange={(event) => setEmotionValue(event.target.value)} value={emotionValue}>
          <option disabled value="">Select an option</option>
          <option value=":)">{":)"}</option>
          <option value=":(">{":("}</option>
          <option value=":|">{":|"}</option>
        </select>
        <input
          type="checkbox"
          onChange={(event) => setShapeValue(event.target.checked)}
          checked={shapeValue}
        />
    </>
  )
}
const App = () => {
    return <ColorSquare/>
}

export default App;
