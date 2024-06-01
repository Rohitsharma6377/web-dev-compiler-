import {BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homee from "./components/home/Homee";
import Compile from "./components/Compile";
import Notfound from "./components/Notfound";
import Header from "./components/Header";

export default function App() {
  return (<>
<Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homee/>} />
        <Route path="/compile" element={<Compile />} />
     <Route path="*" element={<Notfound />} /> 
      </Routes>
        </BrowserRouter>
   
    
  </>
  )
}
