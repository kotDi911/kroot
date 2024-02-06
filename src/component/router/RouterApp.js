import {Navigate, Outlet, Routes} from "react-router";
import {NavLink, Route} from "react-router-dom";
import Home from "../Pages/Home";
import logo from "../../assets/ico/Logo.svg"
import About from "../Pages/About";
import Services from "../Pages/Services";
import Projects from "../Pages/Projects";
import Details from "../Pages/Details";
import Contacts from "../Pages/Contacts";
import Career from "../Pages/Career";
import Generation from "../Pages/Generation";
import Footer from "../Footer";

const RouterApp = () => {

    return (
        <>
            <div className="logo">
                <NavLink expect="" to="/home">
                    <img className="logo-img" src={logo} alt="logo"/>
                </NavLink>
            </div>
            <Routes>
                <Route path='/' element={<Outlet/>}>
                    <Route path='home' element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='services' element={<Services/>}/>
                    <Route path='projects' element={<Outlet/>}>
                        <Route path='' element={<Projects/>}/>
                        <Route path=':name' element={<Details/>}/>
                    </Route>
                    <Route path='contacts' element={<Contacts/>}/>
                    <Route path='career' element={<Career/>}/>
                    <Route path='generationkroot' element={<Generation/>}/>
                    <Route path='*' element={<Navigate to='/home' replace/>}/>
                    <Route path='/' element={<Navigate to='/home' replace/>}/>
                </Route>
            </Routes>
            <Footer/>
        </>
    );
}

export default RouterApp;
