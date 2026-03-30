import { Routes, Route } from "react-router-dom";
import './Kasa.css'
import { Data1 } from "./pages/Home"
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";

console.log(Data1());

export default function App(){
  return(
  <>
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/About" element={<About />}/>
      <Route path="/logement/:id" element={<Logement />}/>
    </Routes> 
  </>
  );
}
