import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Place from './components/Place'





const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/place" element={<Place/>}/>

      </Routes>
    <Footer/>

    </BrowserRouter>
  )
}

export default App