import { Routes, Route } from "react-router-dom";
import './Kasa.scss'
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import E404 from "./pages/404.jsx"

export default function App(){

  return(
  <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/logement/:id" element={<Logement />}/>

      <Route path="/404" element={<E404/>}/>
      <Route path="*" element={<E404/>}/>
    </Routes> 
  </>
  
  );
}
