import { useState } from 'react';
import './App.css';
import { Rings } from 'react-loader-spinner';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  let visibilityButton: "visible" | "hidden" | "collapse" | undefined;
  let visibilityLoading: boolean | undefined;
  if(loading === false){
    visibilityButton = "visible";
    visibilityLoading = false;
  }
  else{
    visibilityButton = "hidden";
    visibilityLoading = true;
    setInterval(() => setLoading(false), 3000)
  }

  return (
    <>
      <button style={{visibility: visibilityButton}} onClick={() => setLoading(true)}>Start loading</button>
      <Rings
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="loading-indicator"
          visible={visibilityLoading}
        />
      
    </>
  )
}

export default App
