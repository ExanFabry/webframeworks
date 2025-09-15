import './App.css'

const App = () => {
  let random : number = Math.random();
  let getal1 : number = Math.floor(Math.random() * 10);
  let getal2 : number = Math.floor(Math.random() * 10);
  if (random < 0.5) {
    random = add(getal1, getal2)
  }
  return (
      <>
        <h1>Random: { random }</h1>
        <h1>Getal 1: { getal1 }</h1>
        <h1>Getal 2: { getal2 }</h1>
        <h1>{ getal1 } * { getal2 }: { multiply(getal1, getal2) }</h1>
      </>
  );
  function add(a : number, b : number){
    return a + b;
  }
  function multiply(a : number, b : number){
    return a * b;
  }
}

export default App;