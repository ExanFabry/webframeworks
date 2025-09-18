import './App.css'

function App() {
  const colors = Array.from({length: 100}, (_, i) => `hsl(${i * 360 / 100}, 100%, 50%)`);

  return (
    <>
      <div style={{minWidth: "100%", height: "100%"}}>
        {colors.map((color: string) => <div style={{minWidth: "100px", height: "4px", backgroundColor: color}}></div>)}
      </div>
    </>
  )
}

export default App
