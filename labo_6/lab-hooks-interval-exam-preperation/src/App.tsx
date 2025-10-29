import { Timer } from "./Timer";
import { CurrentTime } from "./CurrentTime";
import { RandomValue } from "./RandomValue";

function App() {
  return (
    <>
      <Timer/>
      <CurrentTime/>
      <RandomValue min={0} max={100}/>
      <RandomValue min={100} max={200}/>
    </>
  )
}

export default App
