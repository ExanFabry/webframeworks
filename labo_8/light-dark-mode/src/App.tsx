//Kijk zeker goed in je main.tsx
import { ThemeContext } from "./DarkLightMode";
import { useContext } from "react";

function App() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
      <ThemeContext.Provider value={{ theme: theme, toggle: toggle }}>
        <body style={{backgroundColor: theme === "black" ? "#000000" : "#ffffff", color: theme === "black" ? "#ffffff" : "#000000"}}>
          <button onClick={toggle}>Dark/Light mode</button>
        </body>
      </ThemeContext.Provider>
  )
}

export default App