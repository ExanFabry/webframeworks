import './App.css'

function App() {
  let alphabet: string[] = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"
  ];
  alphabet;
  let alienAlphabet: string[] = [
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/A.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/B.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/C.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/D.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/E.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/F.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/G.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/H.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/I.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/J.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/K.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/L.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/M.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/N.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/O.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/P.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/Q.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/R.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/S.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/T.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/U.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/V.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/W.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/X.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/Y.png",
  "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/Z.png"
];


  return (
    <>
      <div>
        {alienAlphabet.map((img: string) => <button><img src={img} className="logo" alt=""/></button>)}
      </div>
    </>
  )
}

export default App
