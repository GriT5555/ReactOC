import { Routes, Route } from "react-router-dom";
import './Kasa.css'
import { Data1 } from "./pages/Home.jsx"

console.log(Data1());

export default function App(){
  return(
  <>
    <header className="Navblock">
      <img src={"./src/assets/Kasa.webp"} alt="logo kasa TM"></img>
      <nav className="NavBar">
        <a className="NavBtn" href="/Home">Accueil</a>
        <a className="NavBtn" href="/About">A propos</a>
      </nav>  
    </header>

    <Routes>

    </Routes>

    <footer className="footer">
      <div className="footerwebp">
        <img className="footerimg" src={"./src/assets/Kasa2.webp"} alt="" />
        <img className="footerimg" src={"./src/assets/kasafooter.webp"} alt="" />
      </div>
    </footer>

  </>
  );
}

//function App() {
//  const [count, setCount] = useState(0)

//  return (
//    <>
//      <div>
//        <a href="https://vite.dev" target="_blank">
//          <img src={viteLogo} className="logo" alt="Vite logo" />
//        </a>
//        <a href="https://react.dev" target="_blank">
//          <img src={reactLogo} className="logo react" alt="React logo" />
//        </a>
//      </div>
//      <h1>Vite + React</h1>
//      <div className="card">
//        <button onClick={() => setCount((count) => count + 1)}>
//          count is {count}
//        </button>
//        <p>
//          Edit <code>src/App.jsx</code> and save to test HMR
//        </p>
//     </div>
//      <p className="read-the-docs">
//        Click on the Vite and React logos to learn more
//      </p>
//    </>
//  )
//}

//export default App
