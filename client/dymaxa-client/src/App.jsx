import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import NavRecruit from "./components/Nav-recruit.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
        <Header />
        <Hero />
        <Footer />
    </>
  )
}

export default App
