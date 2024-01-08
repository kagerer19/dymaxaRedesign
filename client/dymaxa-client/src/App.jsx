import {useState} from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import NotFound from "./pages/NotFound.jsx";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
