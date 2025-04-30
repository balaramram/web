import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import {Folder} from './components/Folder'
import HeroSection from "./pages/HeroSection"
import Card from './components/Card'


function App() {

  return (
    <>
    {/* <Navbar /> */}
    <HeroSection/>
    < Card />
    <Folder />
    
    </>
  )
}

export default App
