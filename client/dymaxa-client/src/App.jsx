import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Jobs from "./pages/JobPage.jsx";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/Jobs' element={<Jobs/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
