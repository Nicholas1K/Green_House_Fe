import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"
import PannelliF from './pages/PannelliF';
import StufeP from './pages/StufeP';
import AcquaR from './pages/AcquaR';
import Prenota from './pages/Prenota';
import News from './pages/News';
import ChiSiamo from './pages/ChiSiamo';


function App() {
  

  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/pannelliF' element={<PannelliF/>}/>
    <Route path='/riscaldamento' element={<StufeP/>}/>
    <Route path='/ricicloAcqua' element={<AcquaR/>}/>
    <Route path='/prenota-incontro' element={<Prenota/>}/>
    <Route path='/news-letter' element={<News/>}/>
    <Route path='/chi-siamo' element={<ChiSiamo/>}/>
   </Routes>
   </>
  )
}

export default App
