import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import JobDescriptionPage from "./pages/JobDescriptionPage.jsx";
import JobPage from "./pages/JobPage.jsx";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/JobPage' element={<JobPage/>} />
                    <Route path='/search/location/:location' element={<JobPage/>} />
                    <Route path='/search/:keyword' element={<JobPage/>} />
                    <Route path='/JobDescriptionPage' element={<JobDescriptionPage/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
