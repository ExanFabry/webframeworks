import { useState, useContext } from 'react';
import React from 'react';

const FourthLine = () => {
  const {message} = useContext(MessageContext); 
  return <><p>{message}</p></>; 
}
const ThirdLine = () => <><p>Follow the white rabbit.</p><FourthLine/></>;
const SecondLine = () => <><p>The matrix has you...</p><ThirdLine/></>;
const FirstLine = () => { 
  return <><p>Wake Up, Neo...</p><SecondLine/></>
}

interface IMessageContext {
    message: string
}

export const MessageContext = React.createContext<IMessageContext>({message: 'Knock, Knock, Neo'});

const App = () => {
  const [message, setMessage] = useState("Knock, Knock, Neo");
  return (
    <MessageContext.Provider value={{message: message}}>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
      <div style={{backgroundColor: "black", color: "#4AF626", display: "flex", flexDirection: "column", padding: 20}}> 
        <FirstLine/>
      </div>
    </MessageContext.Provider>
  )
}

export default App