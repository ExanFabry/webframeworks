import { Pokedex } from "./Pokedex";
import { useState } from "react";

function App() {
    const [limit, setLimit] = useState<number>(10);
  return (
    <>
      <Pokedex limit={limit}/>
      <input type="number" value={limit} onChange={(event) => setLimit(Number(event.target.value))} />
    </>
  )
}

export default App
