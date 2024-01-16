import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import JobPage from "./pages/JobPage.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from "react-pro-sidebar";
import LoginPage from "./pages/LoginPage.jsx";
import UserDashboard from "./pages/user/UserDashboard.jsx";
import UserRoute from "./components/UserRoute.jsx";
import Layout from "./pages/global/Layout.jsx";


const UserDashboardHOC = Layout(UserDashboard)
function App() {
    return (
        <>
            <ToastContainer toastStyle={{background: '#F8F7F1'}}/>
            <ProSidebarProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/JobPage' element={<JobPage/>}/>
                        <Route path='/search/location/:location' element={<JobPage/>}/>
                        <Route path='/search/:keyword' element={<JobPage/>}/>
                        <Route path='/LoginPage' element={<LoginPage/>}/>
                        <Route path='/user/UserDashboard' element={<UserRoute><UserDashboardHOC/></UserRoute>}/>
                        <Route path='/user/UserJobHistory' element={<UserRoute><UserDashboardHOC/></UserRoute>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </ProSidebarProvider>
        </>
    )
}

export default App
