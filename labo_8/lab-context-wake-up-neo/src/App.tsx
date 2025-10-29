import { useState, useContext } from 'react';
import React from 'react';

interface ILineContext {
    line: string
}

export const LineContext = React.createContext<ILineContext>({line: "Knock, Knock, Neo"});

const FourthLine = ({}) => {
  const {line} = useContext(LineContext);
  return(
    <>
      <p>{line}</p>
    </>
  )
}
const ThirdLine = ({}) => {
  return(
    <>
      <p>Follow the white rabbit.</p><FourthLine/>
    </>
  )
}
const SecondLine = ({}) =>{
  return(
    <>
      <p>The matrix has you...</p><ThirdLine/>
    </>
  )
}
const FirstLine = ({}) => { 
  return(
    <>
      <p>Wake Up, Neo...</p><SecondLine/>
    </>
  )
}

const App = () => {
  const [text, setText] = useState("Knock, Knock, Neo");
  return (
    <LineContext.Provider value={{line: text}}>
      <>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <div style={{backgroundColor: "black", color: "#4AF626", display: "flex", flexDirection: "column", padding: 20}}> 
          <FirstLine/>
        </div>
      </>
    </LineContext.Provider>
  )
}

export default App