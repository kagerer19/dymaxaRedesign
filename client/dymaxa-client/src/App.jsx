import './App.css'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ProSidebarProvider} from "react-pro-sidebar";
import LoginPage from "./pages/LoginPage.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminRoute from "./pages/admin/AdminRoute.jsx";
import Layout from "./pages/global/Layout.jsx";
import CurrentJobs from "./pages/admin/CurrentJobs.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import JobDescriptionPage from "./pages/JobDescriptionPage.jsx";
import CreateJob from "./pages/admin/CreateJob.jsx";
import UpdateJob from "./pages/admin/UpdateJob.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import axios from "axios";
import About from "./pages/About.jsx";


//HOC- higher order Components
const AdminDashboardHOC = Layout(AdminDashboard)
const CurrentJobsHOC = Layout(CurrentJobs)
const DashCreateJobHOC = Layout(CreateJob)
const DashUpdateJobHOC = Layout(UpdateJob)

function App() {
    return (
        <>
            <ToastContainer toastStyle={{background: '#F8F7F1'}}/>
            <ProSidebarProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/About' element={<About/>}/>
                        <Route path='/JobsPage' element={<JobsPage/>}/>
                        <Route path='/search/location/:location' element={<JobsPage/>}/>
                        <Route path='/search/:keyword' element={<JobsPage/>}/>
                        <Route path='/JobDescriptionPage/:id' element={<JobDescriptionPage/>}/>
                        <Route path='/LoginPage' element={<LoginPage/>}/>
                        <Route path='/admin/AdminDashboard' element={<AdminRoute><AdminDashboardHOC/></AdminRoute>}/>
                        <Route path='/admin/CurrentJobs' element={<AdminRoute><CurrentJobsHOC/></AdminRoute>}/>
                        <Route path='/CreateJob' element={<DashCreateJobHOC/>}/>
                        <Route path='/UpdateJob/:id' element={<DashUpdateJobHOC/>}/>
                        <Route path='/ComingSoon' element={<ComingSoon/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </ProSidebarProvider>
        </>
    )
}

export default App
