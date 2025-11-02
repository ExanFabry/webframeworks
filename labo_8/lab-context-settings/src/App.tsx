import React from "react";
import { useState } from "react";
import { SquareRow } from "./SquareRow";
import { SelectionBox } from "./SelectionBox";

interface ISettingsContext {
    color: string,
    setColor: (color: string) => void
}

export const SettingsContext = React.createContext<ISettingsContext>({color: 'red', setColor: () => {}});

function App() {
  const [color, setColor] = useState('red');

  return (
    <SettingsContext.Provider value={{ color, setColor }}>
      <SelectionBox/>
      <SquareRow/>
    </SettingsContext.Provider>
  )
}

export default App
